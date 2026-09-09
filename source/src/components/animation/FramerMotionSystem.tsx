"use client";

import React, { useState, useRef, ReactNode } from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

/**
 * Standard cubic-bezier easing curve for premium, sleek motion.
 */
export const easeCubic = [0.16, 1, 0.3, 1] as const;

/* ==========================================================================
   1. Page Entrance & Section Reveal Containers
   ========================================================================== */

interface FadeUpProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    className?: string;
}

/**
 * Staggered Smooth Fade-Up wrapper.
 * Initial state: opacity 0, y 30.
 * In-view state: opacity 1, y 0.
 * Viewport margin -80px to trigger cleanly on scroll once.
 */
export const FadeUp = ({
    children,
    delay = 0,
    duration = 0.6,
    y = 30,
    className = "",
    style = {},
    ...props
}: FadeUpProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration,
                delay,
                ease: easeCubic,
            }}
            style={{
                willChange: "transform, opacity",
                ...style,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

/* ==========================================================================
   2. Stagger Containers for Card Grids
   ========================================================================== */

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (stagger: number = 0.1) => ({
        opacity: 1,
        transition: {
            staggerChildren: stagger,
            delayChildren: 0.05,
        },
    }),
};

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    stagger?: number;
    className?: string;
}

export const StaggerContainer = ({
    children,
    stagger = 0.1,
    className = "",
    style = {},
    ...props
}: StaggerContainerProps) => {
    return (
        <motion.div
            variants={containerVariants}
            custom={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
                willChange: "transform, opacity",
                ...style,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easeCubic,
        },
    },
};

interface StaggerItemProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
}

export const StaggerItem = ({
    children,
    className = "",
    style = {},
    ...props
}: StaggerItemProps) => {
    return (
        <motion.div
            variants={itemVariants}
            style={{
                willChange: "transform, opacity",
                ...style,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

/* ==========================================================================
   3. Glass Card with Clean Hover Lift (No Blue Glow)
   ========================================================================== */

interface MotionGlassCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    glowColor?: string;
    enableGlowTrace?: boolean;
}

export const MotionGlassCard = ({
    children,
    className = "",
    style = {},
    glowColor: _glowColor,
    enableGlowTrace: _enableGlowTrace,
    ...props
}: MotionGlassCardProps) => {
    return (
        <motion.div
            whileHover={{
                y: -6,
                transition: { duration: 0.2, ease: "easeOut" },
            }}
            style={{
                position: "relative",
                willChange: "transform",
                transform: "translateZ(0)",
                ...style,
            }}
            className={className}
            {...props}
        >
            <div style={{ position: "relative", height: "100%" }}>
                {children}
            </div>
        </motion.div>
    );
};

/* ==========================================================================
   4. Button Spring Feedback
   ========================================================================== */

interface MotionButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    className?: string;
}

export const MotionButton = ({
    children,
    className = "",
    style = {},
    ...props
}: MotionButtonProps) => {
    return (
        <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 450, damping: 22 }}
            style={{
                willChange: "transform",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                ...style,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.button>
    );
};

interface MotionLinkWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
}

export const MotionLinkWrapper = ({
    children,
    className = "",
    style = {},
    ...props
}: MotionLinkWrapperProps) => {
    return (
        <motion.div
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 450, damping: 22 }}
            style={{
                display: "inline-block",
                willChange: "transform",
                ...style,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

/* ==========================================================================
   5. Ambient Floating Background Orbs
   ========================================================================== */

export const AmbientBackgroundOrbs = () => {
    return (
        <div
            aria-hidden="true"
            style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 0,
            }}
        >
            {/* Top Right Blue Glow Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.18, 0.28, 0.18],
                    x: [0, 20, 0],
                    y: [0, -16, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    position: "absolute",
                    top: "40px",
                    right: "-6%",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #38bdf8 0%, rgba(56, 189, 248, 0) 70%)",
                    filter: "blur(130px)",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                }}
            />

            {/* Mid Left Indigo / Purple Glow Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.18, 1],
                    opacity: [0.16, 0.27, 0.16],
                    x: [0, -22, 0],
                    y: [0, 18, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                style={{
                    position: "absolute",
                    top: "520px",
                    left: "-8%",
                    width: "650px",
                    height: "650px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #6366f1 0%, rgba(99, 102, 241, 0) 70%)",
                    filter: "blur(140px)",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                }}
            />

            {/* Bottom Right Cyan / Violet Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.14, 1],
                    opacity: [0.14, 0.24, 0.14],
                    x: [0, 16, 0],
                    y: [0, 22, 0],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                style={{
                    position: "absolute",
                    top: "1200px",
                    right: "4%",
                    width: "520px",
                    height: "520px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #06b6d4 0%, rgba(6, 182, 212, 0) 70%)",
                    filter: "blur(130px)",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                }}
            />
        </div>
    );
};
