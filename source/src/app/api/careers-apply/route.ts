import { apiSuccess, apiError } from "@/utils/apiResponse";
import { sendWebhook } from "@/services/webhookService";

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
            resumeFileName,
            resumeContent,
        } = body;

        // Validation
        if (!name || !email) {
            return apiError("Full Name and Email are required.", 400);
        }

        // Clean and prepare the application row data
        const applicationData = {
            name: String(name).trim(),
            email: String(email).trim(),
            phone: phone ? String(phone).trim() : "",
            location: location ? String(location).trim() : "",
            position: position ? String(position).trim() : "General Application",
            experience: experience || "",
            portfolio: portfolio ? String(portfolio).trim() : "",
            message: message ? String(message).trim() : "",
            resumeFileName: resumeFileName ? String(resumeFileName).trim() : "",
            resumeContent: resumeContent || "",
            submitted_at: new Date().toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
                dateStyle: "medium",
                timeStyle: "short",
            }),
        };

        const webhookUrl = process.env.MICROSOFT_EXCEL_WEBHOOK_URL;

        if (webhookUrl && webhookUrl.startsWith("http") && !webhookUrl.includes("your-")) {
            const webhookResult = await sendWebhook(webhookUrl, applicationData, "Microsoft Excel");

            if (!webhookResult.success && !webhookResult.skipped) {
                return apiError(
                    `Microsoft Excel webhook error (${webhookResult.error || "failed"}). Please verify your flow.`,
                    502
                );
            }
        } else {
            console.log("Career application received (waiting for MICROSOFT_EXCEL_WEBHOOK_URL):", applicationData);
        }

        return apiSuccess(
            "Thank you! Your application has been received. Our team will review your profile and reach out within 3-5 business days.",
            applicationData
        );
    } catch (error) {
        console.error("[careers-apply] Error:", error);
        return apiError("Internal server error. Please try again.", 500);
    }
}
