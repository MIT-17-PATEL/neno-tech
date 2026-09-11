import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useSubMenuToggle = () => {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1199;
      setIsMobile(mobile);
      if (!mobile) {
        setOpenMenus(new Set());
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Automatically reset all open submenus on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenMenus(new Set());
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const closeAllSubMenus = useCallback(() => {
    setOpenMenus(new Set());
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
    if (!isMobile) return false;
    return openMenus.has(menuId);
  }, [isMobile, openMenus]);

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

  return { toggleSubMenu, isMenuOpen, getMenuStyle, closeAllSubMenus };
};

export default useSubMenuToggle;

