/**
 * Odoo CRM Integration Service
 * Centralizes JSON-RPC API and Web Session fallback for lead generation.
 */

export interface OdooLeadPayload {
    name: string;
    email_from: string;
    phone?: string;
    partner_name?: string;
    contact_name?: string;
    city?: string;
    description?: string;
    type?: "lead" | "opportunity";
}

export interface OdooResult {
    success: boolean;
    leadId?: number;
    error?: string;
    skipped?: boolean;
}

const isPlaceholder = (val?: string) =>
    !val || val.includes("your-") || val.includes("-domain.com");

/**
 * Checks if Odoo environment variables are properly configured.
 */
export function isOdooConfigured(): boolean {
    const rawUrl = process.env.ODOO_URL;
    const odooDb = process.env.ODOO_DB;
    const odooUsername = process.env.ODOO_USERNAME;
    const odooPassword = process.env.ODOO_API_KEY || process.env.ODOO_PASSWORD;

    return (
        !isPlaceholder(rawUrl) &&
        !isPlaceholder(odooDb) &&
        !isPlaceholder(odooUsername) &&
        !isPlaceholder(odooPassword)
    );
}

/**
 * Creates a lead in Odoo CRM using JSON-RPC (Method 1) with Web Session fallback (Method 2).
 */
export async function createOdooLead(leadData: OdooLeadPayload): Promise<OdooResult> {
    const rawUrl = process.env.ODOO_URL;
    const odooDb = process.env.ODOO_DB;
    const odooUsername = process.env.ODOO_USERNAME;
    const odooPassword = process.env.ODOO_API_KEY || process.env.ODOO_PASSWORD;

    if (!isOdooConfigured()) {
        console.log("[odooService] Odoo credentials not configured — skipping Odoo CRM lead creation.");
        return { success: false, skipped: true, error: "Odoo credentials not configured" };
    }

    const odooUrl = rawUrl!.replace(/\/+$/, "");

    // ─── Method 1: Official Odoo External JSON-RPC API ───────────────────────
    try {
        const authRes = await fetch(`${odooUrl}/jsonrpc`, {
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

        if (authRes.ok) {
            const authJson = await authRes.json();
            const uid = authJson.result;

            if (uid && typeof uid === "number") {
                const createRes = await fetch(`${odooUrl}/jsonrpc`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        jsonrpc: "2.0",
                        method: "call",
                        params: {
                            service: "object",
                            method: "execute_kw",
                            args: [odooDb, uid, odooPassword, "crm.lead", "create", [leadData]],
                        },
                        id: 2,
                    }),
                });

                const createJson = await createRes.json();

                if (createJson.result && typeof createJson.result === "number") {
                    console.log(`[odooService] Lead created successfully (JSON-RPC): ID ${createJson.result}`);
                    return { success: true, leadId: createJson.result };
                }
                if (createJson.error) {
                    console.warn("[odooService] JSON-RPC create error:", createJson.error);
                }
            }
        }
    } catch (rpcErr) {
        console.warn("[odooService] JSON-RPC failed, falling back to web session:", rpcErr);
    }

    // ─── Method 2: Web Session Fallback ───────────────────────────────────────
    try {
        const sessionAuthRes = await fetch(`${odooUrl}/web/session/authenticate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "call",
                params: { db: odooDb, login: odooUsername, password: odooPassword },
            }),
        });

        if (!sessionAuthRes.ok) {
            return { success: false, error: `Odoo server returned HTTP ${sessionAuthRes.status}` };
        }

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
                    method: "call",
                    params: {
                        model: "crm.lead",
                        method: "create",
                        args: [leadData],
                        kwargs: {},
                    },
                }),
            });

            const leadJson = await leadRes.json();

            if (leadJson.result && typeof leadJson.result === "number") {
                console.log(`[odooService] Lead created successfully (Web Session): ID ${leadJson.result}`);
                return { success: true, leadId: leadJson.result };
            }

            return {
                success: false,
                error: leadJson.error?.data?.message || leadJson.error?.message || "Failed to create lead via web session",
            };
        }

        return {
            success: false,
            error: sessionAuth?.error?.data?.message || sessionAuth?.error?.message || "Odoo web session authentication failed",
        };
    } catch (sessionErr) {
        console.error("[odooService] Web session error:", sessionErr);
        return {
            success: false,
            error: sessionErr instanceof Error ? sessionErr.message : "Unknown session error",
        };
    }
}
