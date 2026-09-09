'use client';

interface Props {
    headerStyle?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    lightMode?: boolean;
    isHomePill?: boolean;
}

/**
 * HeaderSwitcher is now superseded by the global Navbar rendered in RootLayout (app/layout.tsx).
 * Returns null to prevent duplicate navbar rendering on any legacy page.
 */
const HeaderSwitcher = (_props: Props) => {
    return null;
};

export default HeaderSwitcher;
