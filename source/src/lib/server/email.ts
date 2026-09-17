import nodemailer from 'nodemailer';

type SendPasswordResetEmailParams = {
  toEmail: string;
  recipientName: string;
  resetUrl: string;
};

type SendOtpEmailParams = {
  toEmail: string;
  recipientName?: string;
  otp: string;
  purposeTitle: string;
  purposeDescription: string;
};

export async function sendOtpEmail({
  toEmail,
  recipientName = 'Admin',
  otp,
  purposeTitle,
  purposeDescription,
}: SendOtpEmailParams): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM || '"Neno Security" <no-reply@neno.tech>';

  // NOTE: Strict security requirement - NEVER log raw OTP in console logs or API responses!
  console.log(`[Email Service] Dispatched OTP verification email to: ${toEmail} for: ${purposeTitle}`);

  const isSmtpConfigured = Boolean(
    host && user && pass && !host.includes('example') && !user.includes('your-')
  );

  if (!isSmtpConfigured) {
    // In local dev without live SMTP credentials, email dispatch succeeds safely without leaking OTP to logs
    return true;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #0B0F14; color: #F5F7FA; margin: 0; padding: 40px 20px; }
            .container { max-width: 540px; margin: 0 auto; background-color: #151B24; border: 1px solid #293241; border-radius: 12px; padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.4); }
            .header { text-align: center; padding-bottom: 24px; border-bottom: 1px solid #293241; }
            .content { padding: 24px 0; }
            .h1 { font-size: 20px; font-weight: 700; color: #F5F7FA; margin-top: 0; }
            .p { font-size: 14px; line-height: 1.6; color: #9AA4B2; margin-bottom: 20px; }
            .otp-box { background: linear-gradient(135deg, rgba(116, 118, 255, 0.12), rgba(137, 199, 254, 0.08)); border: 1px solid #7476FF; border-radius: 10px; padding: 20px; text-align: center; margin: 28px 0; }
            .otp-code { font-family: 'Space Grotesk', 'Courier New', monospace; font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #89C7FE; margin: 0; }
            .otp-sub { font-size: 12px; color: #9AA4B2; margin-top: 8px; }
            .warning { font-size: 12px; color: #FB7181; background: rgba(251, 113, 129, 0.1); border: 1px solid rgba(251, 113, 129, 0.2); border-radius: 6px; padding: 10px 14px; margin-top: 20px; }
            .footer { font-size: 12px; color: #687385; border-top: 1px solid #293241; padding-top: 20px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="color: #7476FF; margin: 0; font-size: 22px; letter-spacing: 1px;">NENO TECHNOLOGY</h2>
            </div>
            <div class="content">
              <h1 class="h1">${purposeTitle}</h1>
              <p class="p">Hello ${recipientName},</p>
              <p class="p">${purposeDescription}</p>
              
              <div class="otp-box">
                <div class="otp-code">${otp}</div>
                <div class="otp-sub">This verification code expires in <strong>10 minutes</strong></div>
              </div>

              <div class="warning">
                ⚠️ <strong>Security Notice:</strong> Never share this 6-digit verification code with anyone. Neno staff will never ask for your code.
              </div>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Neno Technology. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from,
      to: toEmail,
      subject: `[Neno Security] ${purposeTitle} - Verification Code`,
      text: `Hello ${recipientName},\n\nYour 6-digit verification code for ${purposeTitle} is:\n\n${otp}\n\nThis code expires in 10 minutes. Do not share this code with anyone.`,
      html: htmlContent,
    });

    return true;
  } catch (err) {
    console.error('[Email Service Error]', err);
    return false;
  }
}

export async function sendPasswordResetEmail({
  toEmail,
  recipientName,
  resetUrl,
}: SendPasswordResetEmailParams): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM || '"Neno Admin" <no-reply@neno.tech>';

  console.log(`[Email Service] Dispatched password reset link to: ${toEmail}`);

  const isSmtpConfigured = Boolean(host && user && pass && !host.includes('example') && !user.includes('your-'));

  if (!isSmtpConfigured) {
    return true;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #0B0F14; color: #F5F7FA; margin: 0; padding: 40px 20px; }
            .container { max-width: 540px; margin: 0 auto; background-color: #151B24; border: 1px solid #293241; border-radius: 12px; padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.4); }
            .header { text-align: center; padding-bottom: 24px; border-bottom: 1px solid #293241; }
            .content { padding: 24px 0; }
            .h1 { font-size: 20px; font-weight: 700; color: #F5F7FA; margin-top: 0; }
            .p { font-size: 14px; line-height: 1.6; color: #9AA4B2; margin-bottom: 20px; }
            .button-wrap { text-align: center; margin: 30px 0; }
            .button { background-color: #7476FF; color: #FFFFFF !important; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 700; font-size: 14px; display: inline-block; }
            .button:hover { background-color: #6163E6; }
            .link-box { background-color: #181F29; border: 1px solid #293241; padding: 12px; border-radius: 6px; font-size: 12px; color: #89c7fe; word-break: break-all; margin-top: 15px; }
            .footer { font-size: 12px; color: #687385; border-top: 1px solid #293241; padding-top: 20px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="color: #7476FF; margin: 0;">NENO TECHNOLOGY</h2>
            </div>
            <div class="content">
              <h1 class="h1">Reset your Neno Admin password</h1>
              <p class="p">Hello ${recipientName || 'Admin'},</p>
              <p class="p">We received a request to reset the password for your Neno Admin workspace account. Click the button below to set a new password:</p>
              <div class="button-wrap">
                <a href="${resetUrl}" class="button" target="_blank">Reset Password</a>
              </div>
              <p class="p" style="font-size: 13px;">If the button above does not work, copy and paste this link into your browser:</p>
              <div class="link-box">${resetUrl}</div>
              <p class="p" style="margin-top: 24px; font-size: 12px; color: #687385;">
                🔒 This reset link is valid for <strong>1 hour</strong> and can only be used once. If you did not request a password reset, you can safely ignore this email.
              </p>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Neno Technology. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from,
      to: toEmail,
      subject: 'Reset your Neno Admin password',
      text: `Hello ${recipientName},\n\nUse this link to reset your Neno Admin password:\n${resetUrl}\n\nThis link will expire in 1 hour.`,
      html: htmlContent,
    });

    return true;
  } catch (err) {
    console.error('[Email Service Error]', err);
    return false;
  }
}
