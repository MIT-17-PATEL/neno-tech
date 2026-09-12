import { apiSuccess, apiError } from "@/utils/apiResponse";
import { createOdooLead, isOdooConfigured } from "@/services/odooService";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            city,
            location,
            company,
            designation,
            position,
            role,
            category,
            interest,
            requirements,
            message,
            experience,
            portfolio,
        } = body;

        // Validation
        if (!name || !email) {
            return apiError("Name and email are required.", 400);
        }

        if (!isOdooConfigured()) {
            return apiError(
                "Odoo credentials are not configured. Please update .env.local with your real Odoo details.",
                500
            );
        }

        // Assemble CRM Lead payload
        const notes: string[] = [];
        if (category) notes.push(`Category: ${category}`);
        if (role || interest) notes.push(`Looking For / Interest: ${role || interest}`);
        if (position) notes.push(`Applying For: ${position}`);
        if (experience) notes.push(`Experience: ${experience}`);
        if (location) notes.push(`Location: ${location}`);
        if (portfolio) notes.push(`Portfolio / Profile: ${portfolio}`);
        if (message) notes.push(`Message / Notes:\n${message}`);
        if (requirements) notes.push(`Requirements:\n${requirements}`);

        const targetRole = role || interest || position || (category !== "General Inquiry" ? category : "");
        const leadTitle = targetRole ? `${name} - ${targetRole}` : name;

        const result = await createOdooLead({
            name: leadTitle,
            email_from: String(email).trim(),
            phone: phone ? String(phone).trim() : "",
            partner_name: company ? String(company).trim() : "",
            contact_name: designation || name || "",
            city: city || location || "",
            description: notes.join("\n\n"),
            type: "lead",
        });

        if (result.success) {
            return apiSuccess("Your application has been submitted successfully to our CRM!", undefined, {
                leadId: result.leadId,
            });
        }

        return apiError(
            `Odoo CRM Error: ${result.error || "Failed to create lead"}`,
            400
        );
    } catch (error) {
        console.error("[odoo-lead] Server Error:", error);
        return apiError("Server error connecting to CRM. Please try again.", 500);
    }
}
