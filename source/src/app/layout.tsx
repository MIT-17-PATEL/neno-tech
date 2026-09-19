import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-photo-view/dist/react-photo-view.css';

import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.css';
import '@/assets/css/validthemes-icon.css';

import '@/assets/css/gallery.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/style.css';
import '@/assets/css/navbar-footer-responsive.css';
import '@/assets/css/neno-subpage-mobile.css';


import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import SiteChrome from '@/components/utilities/SiteChrome';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Neno Technology | Agentic AI Engineering & Production Systems",
  description: "Senior Forward Deployed Engineers, dedicated AI squads, and production agentic systems. Based in GIFT City, Gandhinagar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E12W584WHL"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-E12W584WHL');
            `,
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ykp2m2ahtz");
            `,
          }}
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
