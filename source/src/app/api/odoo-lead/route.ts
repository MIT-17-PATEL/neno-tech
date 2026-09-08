import { NextResponse } from "next/server";

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
            requirements,
            message,
            experience,
            portfolio,
        } = body;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: "Name and email are required." },
                { status: 400 }
            );
        }

        const rawUrl = process.env.ODOO_URL;
        const odooDb = process.env.ODOO_DB;
        const odooUsername = process.env.ODOO_USERNAME;
        // Supports either ODOO_API_KEY or ODOO_PASSWORD
        const odooPassword = process.env.ODOO_API_KEY || process.env.ODOO_PASSWORD;

        const isPlaceholder = (val?: string) =>
            !val || val.includes("your-") || val.includes("-domain.com");

        if (isPlaceholder(rawUrl) || isPlaceholder(odooDb) || isPlaceholder(odooUsername) || isPlaceholder(odooPassword)) {
            return NextResponse.json(
                { success: false, message: "Odoo credentials are not configured. Please update .env.local with your real Odoo details." },
                { status: 500 }
            );
        }

        const odooUrl = rawUrl!.replace(/\/+$/, "");

        // Assemble CRM Lead payload
        const notes: string[] = [];
        if (position) notes.push(`Applying For: ${position}`);
        if (experience) notes.push(`Experience: ${experience}`);
        if (location) notes.push(`Location: ${location}`);
        if (portfolio) notes.push(`Portfolio / Profile: ${portfolio}`);
        if (message) notes.push(`Message / Notes:\n${message}`);
        if (requirements) notes.push(`Requirements:\n${requirements}`);

        const leadTitle = position ? `${name} - ${position}` : name;

        const leadData: Record<string, unknown> = {
            name: leadTitle,
            email_from: email,
            phone: phone || "",
            partner_name: company || "",
            contact_name: designation || name || "",
            city: city || location || "",
            description: notes.join("\n\n"),
            type: "lead",
        };

        // --- Method 1: Official Odoo External JSON-RPC API (Standard for API Keys) ---
        try {
            const jsonRpcAuthResponse = await fetch(`${odooUrl}/jsonrpc`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    jsonrpc: "2.0",
                    method: "call",
                    params: {
                        service: "common",
                        method: "authenticate",
                        args: [odooDb, odooUsername, odooPassword, {}],
                    },
                    id: 1,
                }),
            });

            if (jsonRpcAuthResponse.ok) {
                const jsonRpcAuth = await jsonRpcAuthResponse.json();
                const uid = jsonRpcAuth.result;

                if (uid && typeof uid === "number") {
                    // Authenticated via API key / password! Now create lead
                    const createResponse = await fetch(`${odooUrl}/jsonrpc`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            jsonrpc: "2.0",
                            method: "call",
                            params: {
                                service: "object",
                                method: "execute_kw",
                                args: [
                                    odooDb,
                                    uid,
                                    odooPassword,
                                    "crm.lead",
                                    "create",
                                    [leadData],
                                ],
                            },
                            id: 2,
                        }),
                    });

                    if (createResponse.ok) {
                        const createResult = await createResponse.json();
                        if (createResult.result) {
                            return NextResponse.json({
                                success: true,
                                message: "Your application has been submitted successfully to our CRM!",
                                leadId: createResult.result,
                            });
                        }
                        if (createResult.error) {
                            return NextResponse.json(
                                { success: false, message: `Odoo CRM Error: ${createResult.error.data?.message || createResult.error.message || "Failed to create lead"}` },
                                { status: 400 }
                            );
                        }
                    }
                }
            }
        } catch {
            // Fall through to Method 2 if /jsonrpc fails
        }

        // --- Method 2: Web Session Authenticate (Fallback for web session password) ---
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
                { success: false, message: `Odoo server returned HTTP ${authResponse.status}. Please check your ODOO_URL.` },
                { status: 502 }
            );
        }

        const authData = await authResponse.json();

        if (authData.error) {
            return NextResponse.json(
                { success: false, message: `Odoo error: ${authData.error.data?.message || authData.error.message || "Access Denied. Check your DB name, email, or API key."}` },
                { status: 401 }
            );
        }

        if (!authData.result || !authData.result.session_id) {
            return NextResponse.json(
                { success: false, message: "Odoo authentication failed. Check your database, username, and API key." },
                { status: 401 }
            );
        }

        const sessionId = authData.result.session_id;

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

        const leadResult = await leadResponse.json();

        if (leadResult.result) {
            return NextResponse.json({
                success: true,
                message: "Your application has been submitted successfully to our CRM!",
                leadId: leadResult.result,
            });
        }

        return NextResponse.json(
            { success: false, message: `Odoo error: ${leadResult.error?.data?.message || leadResult.error?.message || "Failed to create lead"}` },
            { status: 400 }
        );
    } catch (error) {
        console.error("Odoo CRM Error:", error);
        return NextResponse.json(
            { success: false, message: "Server error connecting to CRM. Please try again." },
            { status: 500 }
        );
    }
}
