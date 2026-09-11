import { apiSuccess, apiError } from "@/utils/apiResponse";
import { createOdooLead, isOdooConfigured } from "@/services/odooService";
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

        // 1. Power Automate / Excel Webhook Dispatch (Non-blocking)
        const powerAutomatePromise = sendWebhook(
            process.env.CONTACT_EXCEL_WEBHOOK_URL,
            contactData,
            "Contact Power Automate"
        );

        // 2. Odoo CRM Dispatch (Non-blocking)
        const odooPromise = isOdooConfigured()
            ? (async () => {
                const notes: string[] = [];
                if (contactData.lookingFor && contactData.lookingFor !== "General Inquiry") {
                    notes.push(`Category: ${contactData.lookingFor}`);
                }
                if (contactData.role) {
                    notes.push(`Looking For / Interest: ${contactData.role}`);
                }
                if (contactData.requirements) {
                    notes.push(`Requirements:\n${contactData.requirements}`);
                }

                const leadTitle = contactData.role
                    ? `${contactData.fullName} - ${contactData.role}`
                    : contactData.fullName;

                return createOdooLead({
                    name: leadTitle,
                    email_from: contactData.email,
                    phone: contactData.phone,
                    partner_name: contactData.company,
                    contact_name: contactData.designation || contactData.fullName,
                    city: contactData.city,
                    description: notes.join("\n\n"),
                    type: "lead",
                });
            })()
            : Promise.resolve({ success: false, skipped: true });

        // Fire both downstream channels concurrently without stalling the client
        await Promise.allSettled([powerAutomatePromise, odooPromise]);

        return apiSuccess("Thanks for contacting us! We'll get back to you shortly.", contactData);
    } catch (error) {
        console.error("[contact-lead] Unexpected error:", error);
        return apiError("Internal server error. Please try again.", 500);
    }
}
