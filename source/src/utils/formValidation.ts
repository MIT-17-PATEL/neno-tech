/**
 * Shared Form Validation & Input Sanitization Utilities
 */

import { CountryOption, COUNTRIES } from "@/data/countriesData";
import { validateInternationalPhone } from "./phoneValidation";

export const defaultCountry = COUNTRIES.find((c) => c.code === "IN") || COUNTRIES[0];

/**
 * Sanitizes input string to prevent XSS and strip unwanted HTML/script tags.
 */
export function sanitizeInput(val: string): string {
    if (!val) return "";
    return val
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/<[^>]+>/g, "")
        .trim();
}

/**
 * Validates a human name field (at least 2 characters, letters, spaces, hyphens, periods).
 */
export function validateName(name: string, label = "full name"): string {
    const trimmed = (name || "").trim();
    if (!trimmed) return `Please enter your ${label}.`;
    if (trimmed.length < 2) return `Please enter a valid ${label} (at least 2 characters).`;
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
        return `Please enter a valid ${label} (letters and spaces only).`;
    }
    return "";
}

/**
 * Strict international-grade email validation regex.
 */
const strictEmailRegex =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

/**
 * Validates an email address.
 */
export function validateEmail(email: string): string {
    const trimmed = (email || "").trim();
    if (!trimmed) return "Please enter your email address.";
    if (/\s/.test(trimmed)) return "Email address cannot contain spaces.";
    if (/\.\./.test(trimmed)) return "Please enter a valid email address without consecutive dots.";
    if (!strictEmailRegex.test(trimmed)) {
        return "Please enter a valid email address (e.g. name@company.com).";
    }
    return "";
}

/**
 * Validates a city / location field.
 */
export function validateCity(city: string, label = "city"): string {
    const trimmed = (city || "").trim();
    if (!trimmed) return `Please enter your ${label}.`;
    if (trimmed.length < 2) return `Please enter a valid ${label} (at least 2 characters).`;
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
        return `Please enter a valid ${label} (letters and spaces only).`;
    }
    return "";
}

/**
 * Validates a phone number against country code.
 */
export function validatePhone(phone: string, country: CountryOption = defaultCountry): string {
    return validateInternationalPhone((phone || "").trim(), country.code);
}

/**
 * Validates a country selection.
 */
export function validateCountry(countryName: string): string {
    const trimmed = (countryName || "").trim();
    if (!trimmed) return "Please select your country.";
    const match = COUNTRIES.some(
        (c) => c.name.toLowerCase() === trimmed.toLowerCase() || c.code.toLowerCase() === trimmed.toLowerCase()
    );
    if (!match) return "Please select a valid country from the list.";
    return "";
}

/**
 * Validates a state / region entry or selection.
 */
export function validateState(stateValue: string, validStatesList?: string[] | null): string {
    const trimmed = (stateValue || "").trim();
    if (!trimmed) return "Please select or enter your state / region.";
    if (validStatesList && validStatesList.length > 0) {
        const matches = validStatesList.some((s) => s.toLowerCase() === trimmed.toLowerCase());
        if (!matches) return "Please select a valid state from the list.";
    } else {
        if (trimmed.length < 2) return "State name must be at least 2 characters.";
        if (!/^[a-zA-Z0-9\s.'\-(),/]+$/.test(trimmed)) {
            return "Please enter a valid state / region.";
        }
    }
    return "";
}
