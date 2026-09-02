import { useEffect, useState } from 'react';

const ScrollUpBtn = () => {
    const [scrollUpButton, setScrollUpButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollUpButton(window.scrollY > 200);
        };

        // Add listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Run once on mount to set initial state
        handleScroll();

        // Cleanup: remove listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    if (!scrollUpButton) return null;

    return (
        <button className="customScrollUp" onClick={scrollUp} aria-label="Scroll to top">
            <i className="fas fa-angle-up"></i>
        </button>
    );
};

export default ScrollUpBtn;