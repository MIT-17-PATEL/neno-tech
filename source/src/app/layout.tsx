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

import type { Metadata } from "next";
import Dependency from '@/components/utilities/Dependency';
import Navbar from '@/components/header/Navbar';

export const metadata: Metadata = {
  title: "Neno Technology - AI Agency & Technology NextJS Template"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Dependency />
      </body>
    </html>
  );
}
