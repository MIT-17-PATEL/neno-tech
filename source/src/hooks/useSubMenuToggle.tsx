import { useState, useCallback, useEffect } from 'react';

const useSubMenuToggle = () => {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1199);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSubMenu = useCallback((menuId: string) => {
    setOpenMenus(prev => {
      if (prev.has(menuId)) {
        return new Set();
      }

      return new Set([menuId]);
    });
  }, []);

  const isMenuOpen = useCallback((menuId: string) => {
    return openMenus.has(menuId);
  }, [openMenus]);

  const getMenuStyle = useCallback((menuId: string) => {
    // Only apply inline styles on mobile/tablet, let CSS handle desktop
    if (!isMobile) return {};
    const isOpen = openMenus.has(menuId);
    return {
      display: 'block',
      maxHeight: isOpen ? '1000px' : '0',
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? ('visible' as const) : ('hidden' as const),
    };
  }, [openMenus, isMobile]);

  return { toggleSubMenu, isMenuOpen, getMenuStyle };
};

export default useSubMenuToggle;
