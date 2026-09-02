'use client'
import { ReactNode } from 'react';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import useStickyMenu from '@/hooks/useStickyMenu';
import SidebarInfo from './SidebarInfo';

type HeaderRenderProps = {
    isInfoOpen: boolean;
    closeInfoBar: () => void;
    openInfoBar: () => void;
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    isMenuSticky: boolean;
}

interface HeaderClientProps {
    children: (props: HeaderRenderProps) => ReactNode;
}

const HeaderClient = ({ children }: HeaderClientProps) => {
    const sidebarInfo = useSidebarInfo();
    const sidebarMenu = useSidebarMenu();
    const isMenuSticky = useStickyMenu();

    return (
        <>
            {children({
                ...sidebarInfo,
                ...sidebarMenu,
                isMenuSticky,
            })}
            <SidebarInfo
                isInfoOpen={sidebarInfo.isInfoOpen}
                closeInfoBar={sidebarInfo.closeInfoBar}
            />
        </>
    );
};

export default HeaderClient;
