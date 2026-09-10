import { useState } from 'react';

const useSidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
        document.body.classList.add('no-fade');
        document.body.classList.add('mobile-menu-open');
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('no-fade');
        document.body.classList.remove('mobile-menu-open');
    };

    return { isOpen, openMenu, closeMenu };
};

export default useSidebarMenu;

