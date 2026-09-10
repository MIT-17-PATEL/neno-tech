"use client";

import React, { useState, useRef, useEffect } from "react";
import { COUNTRIES, CountryOption } from "@/data/countriesData";
import { validateInternationalPhone } from "@/utils/phoneValidation";

interface InternationalPhoneInputProps {
    id?: string;
    name?: string;
    value: string;
    selectedCountry: CountryOption;
    onChange: (phone: string, country: CountryOption) => void;
    onBlur?: () => void;
    hasError?: boolean;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
}

export const InternationalPhoneInput: React.FC<InternationalPhoneInputProps> = ({
    id = "phone",
    name = "phone",
    value,
    selectedCountry,
    onChange,
    onBlur,
    hasError = false,
    disabled = false,
    required = true,
    placeholder = "Phone Number *",
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                if (isDropdownOpen) {
                    setIsDropdownOpen(false);
                    setSearchQuery("");
                }
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 50);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const filteredCountries = COUNTRIES.filter(
        (c) =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.dialCode.includes(searchQuery) ||
            c.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCountrySelect = (country: CountryOption) => {
        onChange(value, country);
        setIsDropdownOpen(false);
        setSearchQuery("");
    };

    const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        onChange(raw, selectedCountry);
    };

    return (
        <div
            className={`neno-phone-input-group ${hasError ? "has-error is-invalid" : ""}`}
            ref={dropdownRef}
        >
            {/* Country Selector Button */}
            <div className="neno-country-picker-wrapper">
                <button
                    type="button"
                    className={`neno-country-picker-trigger ${isDropdownOpen ? "is-open" : ""}`}
                    onClick={() => {
                        if (!disabled) {
                            setIsDropdownOpen((prev) => !prev);
                        }
                    }}
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                    aria-label="Select Country Code"
                    disabled={disabled}
                >
                    <span className="neno-country-flag" role="img" aria-label={selectedCountry.name}>
                        {selectedCountry.flag}
                    </span>
                    <span className="neno-country-dial-code">{selectedCountry.dialCode}</span>
                    <i className={`fas fa-chevron-down neno-country-arrow ${isDropdownOpen ? "rotate" : ""}`} />
                </button>

                {/* Country Search & Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="neno-country-dropdown-menu">
                        <div className="neno-country-search-box">
                            <i className="fas fa-search neno-country-search-icon" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                className="neno-country-search-input"
                                placeholder="Search country or code..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    className="neno-country-search-clear"
                                    onClick={() => setSearchQuery("")}
                                    aria-label="Clear search"
                                >
                                    <i className="fas fa-times" />
                                </button>
                            )}
                        </div>

                        <ul className="neno-country-list" role="listbox">
                            {filteredCountries.length > 0 ? (
                                filteredCountries.map((c) => {
                                    const isSelected = c.code === selectedCountry.code;
                                    return (
                                        <li
                                            key={c.code}
                                            className={`neno-country-option ${isSelected ? "is-selected" : ""}`}
                                            onClick={() => handleCountrySelect(c)}
                                            role="option"
                                            aria-selected={isSelected}
                                        >
                                            <span className="neno-country-option-flag">{c.flag}</span>
                                            <span className="neno-country-option-name">{c.name}</span>
                                            <span className="neno-country-option-code">{c.dialCode}</span>
                                        </li>
                                    );
                                })
                            ) : (
                                <li className="neno-country-no-results">No countries found</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>

            {/* Phone Number Input */}
            <input
                id={id}
                name={name}
                type="tel"
                className={`form-control neno-phone-input ${hasError ? "is-invalid" : ""}`}
                placeholder={placeholder}
                value={value}
                onChange={handlePhoneInputChange}
                onBlur={onBlur}
                autoComplete="tel-national"
                disabled={disabled}
                required={required}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${id}-error` : undefined}
            />
        </div>
    );
};

export default InternationalPhoneInput;
