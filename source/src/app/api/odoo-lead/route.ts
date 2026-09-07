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
            requirements,
        } = body;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: "Name and email are required." },
                { status: 400 }
            );
        }

        const odooUrl = process.env.ODOO_URL;
        const odooDb = process.env.ODOO_DB;
        const odooUsername = process.env.ODOO_USERNAME;
        const odooPassword = process.env.ODOO_PASSWORD;

        const isPlaceholder = (val?: string) =>
            !val || val.includes("your-") || val.includes("-domain.com");

        if (isPlaceholder(odooUrl) || isPlaceholder(odooDb) || isPlaceholder(odooUsername) || isPlaceholder(odooPassword)) {
            return NextResponse.json(
                { success: false, message: "Odoo credentials are not configured. Please update .env.local with your real Odoo details." },
                { status: 500 }
            );
        }

        // Step 1: Authenticate with Odoo
        const authResponse = await fetch(`${odooUrl}/web/session/authenticate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "call",
                params: {
                    db: odooDb,
                    login: odooUsername,
                    password: odooPassword,
                },
            }),
        });

        if (!authResponse.ok) {
            return NextResponse.json(
                { success: false, message: `Odoo server returned ${authResponse.status}. Check your ODOO_URL.` },
                { status: 502 }
            );
        }

        const authData = await authResponse.json();

        if (authData.error) {
            return NextResponse.json(
                { success: false, message: `Odoo auth error: ${authData.error.message || "Invalid credentials"}` },
                { status: 401 }
            );
        }

        if (!authData.result || !authData.result.session_id) {
            return NextResponse.json(
                { success: false, message: "Odoo authentication failed. Check your username and password." },
                { status: 401 }
            );
        }

        const sessionId = authData.result.session_id;

        // Step 2: Create a CRM Lead
        const leadData: Record<string, unknown> = {
            name: name,                    // Lead name
            email_from: email,             // Contact email
            phone: phone || "",            // Contact phone
            partner_name: company || "",   // Company name
            contact_name: designation || "", // Contact person name
            city: city || "",              // City
            description: requirements || "", // Requirements/notes
            type: "lead",                  // Create as Lead (not Opportunity)
        };

        const leadResponse = await fetch(`${odooUrl}/web/dataset/call_kw`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: `session_id=${sessionId}`,
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "call",
                params: {
                    model: "crm.lead",
                    method: "create",
                    args: [leadData],
                    kwargs: {},
                },
            }),
        });

        if (!leadResponse.ok) {
            return NextResponse.json(
                { success: false, message: `Odoo server returned ${leadResponse.status} during lead creation.` },
                { status: 502 }
            );
        }

        const leadResult = await leadResponse.json();

        if (leadResult.error) {
            return NextResponse.json(
                { success: false, message: `Odoo error: ${leadResult.error.message || "Failed to create lead"}` },
                { status: 400 }
            );
        }

        if (leadResult.result) {
            return NextResponse.json({
                success: true,
                message: "Your message has been sent successfully!",
                leadId: leadResult.result,
            });
        } else {
            return NextResponse.json(
                { success: false, message: "Failed to create lead in Odoo." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Odoo CRM Error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
