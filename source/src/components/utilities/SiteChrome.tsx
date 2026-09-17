'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import Navbar from '@/components/header/Navbar';
import Dependency from './Dependency';

const SiteChrome = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/get/admin') || pathname.startsWith('/admin');
  return <>{!isAdmin && <Navbar />}{children}{!isAdmin && <Dependency />}</>;
};

export default SiteChrome;
