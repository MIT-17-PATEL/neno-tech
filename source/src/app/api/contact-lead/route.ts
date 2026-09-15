import { apiSuccess, apiError } from "@/utils/apiResponse";
import { sendWebhook } from "@/services/webhookService";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            city,
            company,
            designation,
            category,
            role,
            interest,
            requirements,
        } = body;

        // Validation
        if (!name || !email) {
            return apiError("Full Name and Email are required.", 400);
        }

        // Clean and prepare contact payload
        const contactData = {
            fullName: name ? String(name).trim() : "",
            email: email ? String(email).trim() : "",
            phone: phone ? String(phone).trim() : "",
            city: city ? String(city).trim() : "",
            company: company ? String(company).trim() : "",
            designation: designation ? String(designation).trim() : "",
            lookingFor: category ? String(category).trim() : "General Inquiry",
            role: role || interest || "",
            requirements: requirements ? String(requirements).trim() : "",
        };

        // Power Automate Webhook Dispatch (handles Excel, Email, and Odoo CRM via workflow)
        await sendWebhook(
            process.env.CONTACT_EXCEL_WEBHOOK_URL,
            contactData,
            "Contact Power Automate"
        );

        return apiSuccess("Thanks for contacting us! We'll get back to you shortly.", contactData);
    } catch (error) {
        console.error("[contact-lead] Unexpected error:", error);
        return apiError("Internal server error. Please try again.", 500);
    }
}
