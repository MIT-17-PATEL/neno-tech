import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            location,
            position,
            experience,
            portfolio,
            message,
        } = body;

        // Basic validation
        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: "Full Name and Email are required." },
                { status: 400 }
            );
        }

        // Clean and prepare the row data for Microsoft Excel
        const applicationData = {
            name: name.trim(),
            email: email.trim(),
            phone: phone ? phone.trim() : "",
            location: location ? location.trim() : "",
            position: position ? position.trim() : "General Application",
            experience: experience || "",
            portfolio: portfolio ? portfolio.trim() : "",
            message: message ? message.trim() : "",
            submitted_at: new Date().toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
                dateStyle: "medium",
                timeStyle: "short",
            }),
        };

        const webhookUrl = process.env.MICROSOFT_EXCEL_WEBHOOK_URL;

        // Check if user has configured the Microsoft Power Automate webhook
        if (
            webhookUrl &&
            webhookUrl.startsWith("http") &&
            !webhookUrl.includes("your-")
        ) {
            try {
                const response = await fetch(webhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(applicationData),
                });

                if (!response.ok) {
                    console.error("Microsoft Excel Webhook returned HTTP", response.status);
                    return NextResponse.json(
                        { success: false, message: `Microsoft Excel webhook error (HTTP ${response.status}). Please verify your Power Automate flow.` },
                        { status: 502 }
                    );
                }
            } catch (webhookErr) {
                console.error("Error calling Microsoft Excel webhook:", webhookErr);
                return NextResponse.json(
                    { success: false, message: "Could not reach Microsoft Excel webhook. Please check connection." },
                    { status: 502 }
                );
            }
        } else {
            // Webhook URL not set yet - safely log so submissions aren't lost while setting up
            console.log("Career application received (waiting for MICROSOFT_EXCEL_WEBHOOK_URL):", applicationData);
        }

        return NextResponse.json({
            success: true,
            message: "Thank you! Your application has been received. Our team will review your profile and reach out within 3-5 business days.",
            data: applicationData,
        });
    } catch (error) {
        console.error("Careers Apply Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error. Please try again." },
            { status: 500 }
        );
    }
}
