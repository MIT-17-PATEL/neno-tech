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

        // ─── Shared / cleaned data ───────────────────────────────────────────────
        const contactData = {
            fullName:    name        ? name.trim()        : "",
            email:       email       ? email.trim()       : "",
            phone:       phone       ? phone.trim()       : "",
            city:        city        ? city.trim()        : "",
            company:     company     ? company.trim()     : "",
            designation: designation ? designation.trim() : "",
            lookingFor:  category    ? category.trim()   : "General Inquiry",
            role:        role || interest || "",
            requirements: requirements ? requirements.trim() : "",
        };

        // ─── 1. Power Automate / Excel Webhook ───────────────────────────────────
        const webhookUrl = process.env.CONTACT_EXCEL_WEBHOOK_URL;

        const powerAutomatePromise: Promise<void> = (
            webhookUrl &&
            webhookUrl.startsWith("http") &&
            !webhookUrl.includes("your-")
        )
            ? fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactData),
            })
                .then(async (res) => {
                    if (!res.ok) {
                        console.warn(
                            `[contact-lead] Power Automate webhook returned HTTP ${res.status}.`,
                            contactData
                        );
                    } else {
                        console.log("[contact-lead] Power Automate: submitted successfully.", contactData);
                    }
                })
                .catch((err) => {
                    console.error("[contact-lead] Power Automate webhook error:", err, contactData);
                })
            : Promise.resolve().then(() => {
                console.log(
                    "[contact-lead] CONTACT_EXCEL_WEBHOOK_URL not configured — skipping Power Automate.",
                    contactData
                );
            });

        // ─── 2. Odoo CRM ─────────────────────────────────────────────────────────
        const rawUrl       = process.env.ODOO_URL;
        const odooDb       = process.env.ODOO_DB;
        const odooUsername = process.env.ODOO_USERNAME;
        const odooPassword = process.env.ODOO_API_KEY || process.env.ODOO_PASSWORD;

        const isPlaceholder = (val?: string) =>
            !val || val.includes("your-") || val.includes("-domain.com");

        const odooConfigured =
            !isPlaceholder(rawUrl) &&
            !isPlaceholder(odooDb) &&
            !isPlaceholder(odooUsername) &&
            !isPlaceholder(odooPassword);

        const odooPromise: Promise<void> = odooConfigured
            ? (async () => {
                const odooUrl = rawUrl!.replace(/\/+$/, "");

                // Build notes + lead title
                const notes: string[] = [];
                if (contactData.lookingFor && contactData.lookingFor !== "General Inquiry")
                    notes.push(`Category: ${contactData.lookingFor}`);
                if (contactData.role)
                    notes.push(`Looking For / Interest: ${contactData.role}`);
                if (contactData.requirements)
                    notes.push(`Requirements:\n${contactData.requirements}`);

                const leadTitle = contactData.role
                    ? `${contactData.fullName} - ${contactData.role}`
                    : contactData.fullName;

                const leadData: Record<string, unknown> = {
                    name:         leadTitle,
                    email_from:   contactData.email,
                    phone:        contactData.phone,
                    partner_name: contactData.company,
                    contact_name: contactData.designation || contactData.fullName,
                    city:         contactData.city,
                    description:  notes.join("\n\n"),
                    type:         "lead",
                };

                // Method 1: JSON-RPC (API key)
                try {
                    const authRes = await fetch(`${odooUrl}/jsonrpc`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            jsonrpc: "2.0",
                            method:  "call",
                            params: {
                                service: "common",
                                method:  "authenticate",
                                args:    [odooDb, odooUsername, odooPassword, {}],
                            },
                            id: 1,
                        }),
                    });

                    if (authRes.ok) {
                        const authJson = await authRes.json();
                        const uid = authJson.result;

                        if (uid && typeof uid === "number") {
                            const createRes = await fetch(`${odooUrl}/jsonrpc`, {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    jsonrpc: "2.0",
                                    method:  "call",
                                    params: {
                                        service: "object",
                                        method:  "execute_kw",
                                        args: [odooDb, uid, odooPassword, "crm.lead", "create", [leadData]],
                                    },
                                    id: 2,
                                }),
                            });

                            const createJson = await createRes.json();

                            if (createJson.result) {
                                console.log(`[contact-lead] Odoo lead created (JSON-RPC): ID ${createJson.result}`);
                                return;
                            }
                            if (createJson.error) {
                                console.warn("[contact-lead] Odoo JSON-RPC create error:", createJson.error);
                            }
                        }
                    }
                } catch (rpcErr) {
                    console.warn("[contact-lead] Odoo JSON-RPC failed, falling back to web session:", rpcErr);
                }

                // Method 2: Web session fallback
                try {
                    const sessionAuthRes = await fetch(`${odooUrl}/web/session/authenticate`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            jsonrpc: "2.0",
                            method:  "call",
                            params: { db: odooDb, login: odooUsername, password: odooPassword },
                        }),
                    });

                    const sessionAuth = await sessionAuthRes.json();

                    if (sessionAuth?.result?.session_id) {
                        const sessionId = sessionAuth.result.session_id;

                        const leadRes = await fetch(`${odooUrl}/web/dataset/call_kw`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Cookie: `session_id=${sessionId}`,
                            },
                            body: JSON.stringify({
                                jsonrpc: "2.0",
                                method:  "call",
                                params: {
                                    model:  "crm.lead",
                                    method: "create",
                                    args:   [leadData],
                                    kwargs: {},
                                },
                            }),
                        });

                        const leadJson = await leadRes.json();

                        if (leadJson.result) {
                            console.log(`[contact-lead] Odoo lead created (web session): ID ${leadJson.result}`);
                        } else {
                            console.warn("[contact-lead] Odoo web session create error:", leadJson.error);
                        }
                    } else {
                        console.warn("[contact-lead] Odoo web session auth failed:", sessionAuth?.error);
                    }
                } catch (sessionErr) {
                    console.error("[contact-lead] Odoo web session error:", sessionErr);
                }
            })()
            : Promise.resolve().then(() => {
                console.log("[contact-lead] Odoo credentials not configured — skipping Odoo CRM.");
            });

        // ─── Fire both in parallel, never block the user on either ───────────────
        await Promise.allSettled([powerAutomatePromise, odooPromise]);

        return NextResponse.json({
            success: true,
            message: "Thanks for contacting us! We'll get back to you shortly.",
            data: contactData,
        });

    } catch (error) {
        console.error("[contact-lead] Unexpected error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error. Please try again." },
            { status: 500 }
        );
    }
}
