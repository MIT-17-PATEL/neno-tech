import { isValidPhoneNumber, parsePhoneNumber, CountryCode } from "libphonenumber-js";

/**
 * Validates an international phone number against the selected country.
 * @param phoneNumber The raw phone number input
 * @param countryCode The 2-letter ISO country code (e.g., 'IN', 'US', 'GB')
 * @returns An error string if invalid, or empty string if valid
 */
export function validateInternationalPhone(phoneNumber: string, countryCode: string = "IN"): string {
    const trimmed = (phoneNumber || "").trim();
    if (!trimmed) {
        return "Please enter your phone number.";
    }

    // Strip out standard separators
    const digitsOnly = trimmed.replace(/\D/g, "");
    if (digitsOnly.length < 5) {
        return "Phone number is too short.";
    }
    if (digitsOnly.length > 15) {
        return "Phone number is too long.";
    }

    try {
        const valid = isValidPhoneNumber(trimmed, countryCode as CountryCode);
        if (!valid) {
            return `Please enter a valid phone number for the selected country.`;
        }
        return "";
    } catch {
        // If libphonenumber fails to parse, fallback to basic length check
        if (digitsOnly.length >= 7 && digitsOnly.length <= 15) {
            return "";
        }
        return "Please enter a valid phone number.";
    }
}

/**
 * Formats a phone number into standard international format (+91 98765 43210)
 */
export function formatInternationalPhone(phoneNumber: string, countryCode: string = "IN"): string {
    const trimmed = (phoneNumber || "").trim();
    if (!trimmed) return "";
    try {
        const parsed = parsePhoneNumber(trimmed, countryCode as CountryCode);
        if (parsed) {
            return parsed.formatInternational();
        }
    } catch {
        // ignore format failure
    }
    return trimmed;
}
