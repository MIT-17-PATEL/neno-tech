'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { isAuthenticated, logout } from '@/lib/admin/authStore';
import { AdminIcon } from './AdminIcons';
import styles from './admin.module.css';

type AdminShellProps = {
  title: string;
  subtitle: string;
  action?: ReactNode;
  children: ReactNode;
};

export const AdminShell = ({ title, subtitle, action, children }: AdminShellProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: 'dashboard' as const },
    { href: '/admin/blogs', label: 'Blog management', icon: 'blogs' as const },
    { href: '/admin/case-studies', label: 'Case studies', icon: 'blogs' as const },
    { href: '/admin/projects', label: 'Projects', icon: 'blogs' as const },
    { href: '/admin/settings', label: 'Settings', icon: 'dashboard' as const },
  ];

  useEffect(() => { if (!isAuthenticated()) router.replace('/admin/login'); else setReady(true); }, [router]);
  if (!ready) return <div className={styles.adminLoading}><span className={styles.spinner} />Opening Neno Admin…</div>;
  const handleLogout = () => { logout(); router.replace('/admin/login'); };

  return (
    <div className={styles.appShell} data-admin-reference>
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`} aria-label="Admin navigation">
        <div className={styles.brandRow}>
          <Link href="/admin" className={styles.brand} onClick={() => setSidebarOpen(false)}>
            <img src="/assets/img/logo-light.png" alt="Neno Technology" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <button type="button" className={styles.closeSidebar} onClick={() => setSidebarOpen(false)} aria-label="Close navigation"><AdminIcon name="close" /></button>
        </div>
        <p className={styles.workspaceLabel}>WORKSPACE</p>
        <nav className={styles.sideNav}>
          {navItems.map((item) => {
            const active = item.href === '/admin' ? pathname === item.href : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={`${styles.sideNavLink} ${active ? styles.sideNavLinkActive : ''}`} onClick={() => setSidebarOpen(false)}><AdminIcon name={item.icon} />{item.label}</Link>;
          })}
        </nav>
        <div className={styles.sidebarFooter}><span className={styles.userAvatar}>NT</span><div><strong>Neno team</strong><span>Admin workspace</span></div><button type="button" className={styles.logoutButton} onClick={handleLogout}>Logout</button></div>
      </aside>
      {sidebarOpen && <button type="button" className={styles.backdrop} aria-label="Close navigation" onClick={() => setSidebarOpen(false)} />}
      <div className={styles.pageArea}>
        <header className={styles.topbar}>
          <button type="button" className={styles.menuButton} onClick={() => setSidebarOpen(true)} aria-label="Open navigation"><AdminIcon name="menu" /></button>
          <div><p className={styles.eyebrow}>NENO ADMIN</p><h1>{title}</h1><p className={styles.headerSubtitle}>{subtitle}</p></div>
          <div className={styles.headerAction}>{action}</div>
        </header>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};
