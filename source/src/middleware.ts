import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Block and hide any legacy /admin routes
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // 2. Protect /get/admin routes
  if (pathname.startsWith('/get/admin')) {
    const isPublicAdminRoute =
      pathname === '/get/admin/login' ||
      pathname === '/get/admin/forgot-password' ||
      pathname === '/get/admin/reset-password';

    const sessionCookie = request.cookies.get('neno-admin-session')?.value;

    // If accessing protected admin route without session cookie -> redirect to /get/admin/login
    if (!isPublicAdminRoute && !sessionCookie) {
      const loginUrl = new URL('/get/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // If accessing login page while already having session cookie -> redirect to /get/admin
    if (pathname === '/get/admin/login' && sessionCookie) {
      const dashboardUrl = new URL('/get/admin', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/get/admin/:path*'],
};
