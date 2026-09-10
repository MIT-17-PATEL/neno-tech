import { NextResponse } from "next/server";

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

        // Basic validation
        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: "Full Name and Email are required." },
                { status: 400 }
            );
        }

        // Clean and prepare the row data for Microsoft Excel
        const contactData = {
            name: name ? name.trim() : "",
            email: email ? email.trim() : "",
            phone: phone ? phone.trim() : "",
            city: city ? city.trim() : "",
            company: company ? company.trim() : "",
            designation: designation ? designation.trim() : "",
            category: category ? category.trim() : "General Inquiry",
            interest: role || interest || "",
            requirements: requirements ? requirements.trim() : "",
            submitted_at: new Date().toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
                dateStyle: "medium",
                timeStyle: "short",
            }),
        };

        const webhookUrl = process.env.CONTACT_EXCEL_WEBHOOK_URL;

        // Check if the Microsoft Power Automate webhook is configured
        if (
            webhookUrl &&
            webhookUrl.startsWith("http") &&
            !webhookUrl.includes("your-")
        ) {
            try {
                const response = await fetch(webhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(contactData),
                });

                // Power Automate may return 200, 202, or other codes — log but don't block user
                if (!response.ok) {
                    console.warn(
                        `Contact Excel Webhook returned HTTP ${response.status}. ` +
                        "Submission logged below. Please verify your Power Automate flow is enabled.",
                        contactData
                    );
                } else {
                    console.log("Contact form submitted to Excel successfully.", contactData);
                }
            } catch (webhookErr) {
                // Network error — log but don't block the user
                console.error("Error calling Contact Excel webhook:", webhookErr, contactData);
            }
        } else {
            // Webhook URL not set yet — log so submissions aren't lost
            console.log(
                "Contact form submission received (waiting for CONTACT_EXCEL_WEBHOOK_URL):",
                contactData
            );
        }

        return NextResponse.json({
            success: true,
            message: "Thanks for contacting us! We'll get back to you shortly.",
            data: contactData,
        });
    } catch (error) {
        console.error("Contact Lead Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error. Please try again." },
            { status: 500 }
        );
    }
}
