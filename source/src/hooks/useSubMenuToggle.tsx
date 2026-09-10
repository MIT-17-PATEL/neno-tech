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
    // Only apply maxHeight on mobile, let CSS handle desktop

    if (!isMobile) return {};
    return { maxHeight: openMenus.has(menuId) ? '800px' : '0' };
  }, [openMenus, isMobile]);

  return { toggleSubMenu, isMenuOpen, getMenuStyle };
};

export default useSubMenuToggle;
