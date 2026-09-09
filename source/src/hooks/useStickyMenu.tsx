import { useState, useEffect } from 'react';

function useStickyMenu(offset = 20) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > offset);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [offset]);

    return isSticky;
}

export default useStickyMenu
