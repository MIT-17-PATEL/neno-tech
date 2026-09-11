import { NextResponse } from "next/server";

export interface ApiResponseData<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
    leadId?: number | string;
    error?: string;
}

/**
 * Creates a standard JSON success response
 */
export function apiSuccess<T = unknown>(
    message: string,
    data?: T,
    extra?: { leadId?: number | string; status?: number }
): NextResponse<ApiResponseData<T>> {
    return NextResponse.json(
        {
            success: true,
            message,
            ...(data !== undefined ? { data } : {}),
            ...(extra?.leadId !== undefined ? { leadId: extra.leadId } : {}),
        },
        { status: extra?.status || 200 }
    );
}

/**
 * Creates a standard JSON error response
 */
export function apiError(
    message: string,
    status = 400,
    errorDetails?: string
): NextResponse<ApiResponseData> {
    return NextResponse.json(
        {
            success: false,
            message,
            ...(errorDetails ? { error: errorDetails } : {}),
        },
        { status }
    );
}
