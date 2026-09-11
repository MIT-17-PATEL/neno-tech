/**
 * Webhook Service for Power Automate and Microsoft Excel integrations.
 */

export interface WebhookResult {
    success: boolean;
    status?: number;
    error?: string;
    skipped?: boolean;
}

const isPlaceholder = (val?: string) =>
    !val || val.includes("your-") || val.includes("-domain.com");

/**
 * Dispatches JSON data to a webhook endpoint with non-blocking resilience.
 */
export async function sendWebhook(
    webhookUrl: string | undefined,
    payload: Record<string, unknown>,
    serviceName = "Power Automate"
): Promise<WebhookResult> {
    if (!webhookUrl || !webhookUrl.startsWith("http") || isPlaceholder(webhookUrl)) {
        console.log(`[webhookService] ${serviceName} webhook URL not configured: skipping dispatch.`);
        return { success: false, skipped: true };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.warn(`[webhookService] ${serviceName} webhook returned HTTP ${response.status}.`);
            return {
                success: false,
                status: response.status,
                error: `HTTP ${response.status}`,
            };
        }

        console.log(`[webhookService] ${serviceName} webhook delivered successfully.`);
        return { success: true, status: response.status };
    } catch (err) {
        console.error(`[webhookService] ${serviceName} webhook network error:`, err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Network error",
        };
    }
}
