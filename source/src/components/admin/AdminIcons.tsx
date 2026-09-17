import type { SVGProps } from 'react';

export type IconName = 'dashboard' | 'blogs' | 'menu' | 'plus' | 'search' | 'filter' | 'more' | 'eye' | 'edit' | 'trash' | 'close' | 'arrow' | 'check' | 'chevron' | 'calendar';

const paths: Record<IconName, React.ReactNode> = {
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  blogs: <><path d="M5 4h10a3 3 0 0 1 3 3v13H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"/><path d="M7 8h7M7 12h7M7 16h4"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  search: <><circle cx="10.5" cy="10.5" r="6"/><path d="m16 16 4 4"/></>,
  filter: <path d="M4 6h16M7 12h10M10 18h4"/>,
  more: <path d="M5 12h.01M12 12h.01M19 12h.01"/>,
  eye: <><path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
  edit: <><path d="m13.5 5.5 5 5M4 20l4.1-1 10.4-10.4a2.1 2.1 0 0 0-3-3L5.1 16 4 20Z"/></>,
  trash: <><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
  arrow: <path d="M5 12h13M13 7l5 5-5 5"/>,
  check: <path d="m5 12 4.2 4L19 6.5"/>,
  chevron: <path d="m8 10 4 4 4-4"/>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
};

export const AdminIcon = ({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {paths[name]}
  </svg>
);
