"use client";

import React, { useState, useRef, useEffect } from "react";

export interface CustomSelectOption {
    label: string;
    value: string;
}

interface CustomSelectProps {
    id: string;
    name: string;
    value: string;
    options: (string | CustomSelectOption)[];
    placeholder?: string;
    disabledPlaceholder?: string;
    disabled?: boolean;
    onChange: (value: string) => void;
    required?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    id,
    name,
    value,
    options,
    placeholder = "Select an option...",
    disabledPlaceholder = "Not applicable",
    disabled = false,
    onChange,
    required = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const normalizedOptions: CustomSelectOption[] = options.map((opt) =>
        typeof opt === "string" ? { label: opt, value: opt } : opt
    );

    const selectedOption = normalizedOptions.find((opt) => opt.value === value);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Close if disabled
    useEffect(() => {
        if (disabled) {
            setIsOpen(false);
        }
    }, [disabled]);

    // Handle keyboard accessibility
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;
        if (e.key === "Escape") {
            setIsOpen(false);
        } else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
        }
    };

    const handleSelect = (val: string) => {
        if (disabled) return;
        onChange(val);
        setIsOpen(false);
    };

    return (
        <div 
            className={`neno-custom-select-container ${isOpen ? "is-active-container" : ""}`} 
            ref={containerRef}
            style={{ zIndex: isOpen ? 100 : 1 }}
        >
            {/* Hidden native input for seamless FormData integration */}
            <input type="hidden" id={id} name={name} value={disabled ? "" : value} required={required && !disabled} />

            {/* Custom Select Trigger Box */}
            <button
                type="button"
                className={`neno-custom-select-trigger ${isOpen ? "is-open" : ""} ${selectedOption && !disabled ? "has-value" : ""} ${disabled ? "is-disabled" : ""}`}
                onClick={() => {
                    if (!disabled) setIsOpen((prev) => !prev);
                }}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-labelledby={`${id}-label`}
            >
                <span className="neno-custom-select-text">
                    {disabled 
                        ? disabledPlaceholder 
                        : (selectedOption ? selectedOption.label : placeholder)}
                </span>
                <span className="neno-custom-select-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </button>

            {/* Dropdown Options Menu */}
            {isOpen && !disabled && (
                <ul className="neno-custom-select-menu" role="listbox" tabIndex={-1}>
                    {normalizedOptions.map((opt) => {
                        const isSelected = opt.value === value;
                        return (
                            <li
                                key={opt.value}
                                className={`neno-custom-select-option ${isSelected ? "is-selected" : ""}`}
                                onClick={() => handleSelect(opt.value)}
                                role="option"
                                aria-selected={isSelected}
                            >
                                <span>{opt.label}</span>
                                {isSelected && (
                                    <i className="fas fa-check neno-select-check" aria-hidden="true" />
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
