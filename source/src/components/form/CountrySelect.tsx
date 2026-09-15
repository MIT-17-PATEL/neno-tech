"use client";

import React, { useState, useRef, useEffect } from "react";
import { COUNTRIES, CountryOption } from "@/data/countriesData";

interface CountrySelectProps {
    id?: string;
    name?: string;
    selectedCountry: CountryOption | null;
    onChange: (country: CountryOption) => void;
    onBlur?: () => void;
    placeholder?: string;
    disabled?: boolean;
    hasError?: boolean;
    required?: boolean;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({
    id = "country",
    name = "country",
    selectedCountry,
    onChange,
    onBlur,
    placeholder = "Select Country *",
    disabled = false,
    hasError = false,
    required = true,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const isDropdownOpen = isOpen && !disabled;

    // Handle outside click to close dropdown and trigger onBlur
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                if (isOpen) {
                    setIsOpen(false);
                    setSearchQuery("");
                    onBlur?.();
                }
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 40);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen, isOpen, onBlur]);

    // Keyboard accessibility
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;
        if (e.key === "Escape") {
            setIsOpen(false);
            setSearchQuery("");
            onBlur?.();
        } else if (e.key === "Enter" && !isOpen) {
            e.preventDefault();
            setIsOpen(true);
        }
    };

    // Filter countries based on query (name, code, or dial code)
    const filteredCountries = COUNTRIES.filter((c) => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return true;
        return (
            c.name.toLowerCase().includes(query) ||
            c.code.toLowerCase().includes(query) ||
            c.dialCode.includes(query)
        );
    });

    const handleSelect = (country: CountryOption) => {
        if (disabled) return;
        onChange(country);
        setIsOpen(false);
        setSearchQuery("");
    };

    return (
        <div
            className={`neno-custom-select-container neno-country-select-container ${isDropdownOpen ? "is-active-container" : ""}`}
            ref={containerRef}
            style={{ zIndex: isDropdownOpen ? 1060 : 1 }}
        >
            {/* Native hidden input for form submission */}
            <input
                type="hidden"
                id={id}
                name={name}
                value={selectedCountry ? selectedCountry.name : ""}
                required={required && !disabled}
            />

            {/* Custom Trigger Button */}
            <button
                type="button"
                className={`neno-custom-select-trigger ${isDropdownOpen ? "is-open" : ""} ${selectedCountry && !disabled ? "has-value" : ""} ${disabled ? "is-disabled" : ""} ${hasError ? "has-error is-invalid" : ""}`}
                onClick={() => {
                    if (!disabled) {
                        if (isOpen) {
                            onBlur?.();
                        }
                        setIsOpen((prev) => !prev);
                    }
                }}
                onBlur={() => {
                    if (!isOpen) {
                        onBlur?.();
                    }
                }}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-label="Country selection dropdown"
            >
                <span className="neno-custom-select-text d-flex align-items-center gap-2">
                    {selectedCountry ? (
                        <>
                            <span className="fs-6" role="img" aria-label={selectedCountry.name}>
                                {selectedCountry.flag}
                            </span>
                            <span className="text-truncate">{selectedCountry.name}</span>
                        </>
                    ) : (
                        <span style={{ color: "#64748b" }}>{placeholder}</span>
                    )}
                </span>
                <span className="neno-custom-select-arrow" aria-hidden="true">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </button>

            {/* Dropdown Menu with Search */}
            {isDropdownOpen && (
                <div className="neno-country-dropdown-menu w-100" style={{ minWidth: "100%", top: "calc(100% + 6px)" }}>
                    {/* Search Input Box */}
                    <div className="neno-country-search-box mb-2">
                        <i className="fas fa-search neno-country-search-icon" />
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="neno-country-search-input"
                            placeholder="Search country by name or code..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            autoComplete="off"
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

                    {/* Scrollable Country List */}
                    <ul className="neno-country-list" role="listbox" style={{ maxHeight: "240px" }}>
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((c) => {
                                const isSelected = selectedCountry?.code === c.code;
                                return (
                                    <li
                                        key={c.code}
                                        className={`neno-country-option d-flex align-items-center justify-content-between ${isSelected ? "is-selected" : ""}`}
                                        onClick={() => handleSelect(c)}
                                        role="option"
                                        aria-selected={isSelected}
                                    >
                                        <span className="d-flex align-items-center gap-2 text-truncate">
                                            <span className="neno-country-option-flag">{c.flag}</span>
                                            <span className="neno-country-option-name text-truncate">{c.name}</span>
                                        </span>
                                        <div className="d-flex align-items-center gap-2 flex-shrink-0 ms-2">
                                            <span className="neno-country-option-code text-muted small">{c.dialCode}</span>
                                            {isSelected && <i className="fas fa-check text-info small" />}
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                            <li className="neno-country-no-results text-center py-3 text-muted small">
                                No countries found matching &ldquo;{searchQuery}&rdquo;
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CountrySelect;
