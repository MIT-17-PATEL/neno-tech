import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ChevronDown, X } from 'lucide-react';

/* ─── CSS-only dark chrome sphere ─────────────────────────────── */
const ChromeSphere: React.FC<{ open: boolean }> = ({ open }) => (
  <div
    className="absolute right-[-10%] bottom-[5%] md:right-[5%] md:bottom-[10%] transition-all duration-700"
    style={{
      opacity: open ? 1 : 0,
      transform: open ? 'scale(1) translateY(0)' : 'scale(0.6) translateY(40px)',
      transitionDelay: open ? '200ms' : '0ms',
    }}
  >
    <div
      className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full relative"
      style={{
        background: `
          radial-gradient(circle at 28% 22%, rgba(200,200,225,0.35) 0%, transparent 42%),
          radial-gradient(circle at 72% 18%, rgba(160,160,180,0.12) 0%, transparent 28%),
          radial-gradient(circle at 50% 92%, rgba(120,120,140,0.18) 0%, transparent 22%),
          radial-gradient(circle at 62% 62%, rgba(0,0,0,0.75) 0%, transparent 52%),
          radial-gradient(circle at 44% 40%, #38383f 0%, #1e1e24 38%, #0e0e12 68%, #060608 100%)
        `,
        boxShadow: `
          inset -12px -12px 35px rgba(0,0,0,0.6),
          inset 6px 6px 18px rgba(255,255,255,0.04),
          0 0 100px rgba(100,100,130,0.12),
          0 0 50px rgba(60,60,80,0.08)
        `,
        animation: open ? 'sphereFloat 6s ease-in-out infinite' : 'none',
      }}
    >
      <div
        className="absolute inset-[15%] rounded-full"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, rgba(255,255,255,0.06) 0%, transparent 50%),
            radial-gradient(circle at 55% 55%, rgba(0,0,0,0.3) 0%, transparent 60%)
          `,
        }}
      />
      <div
        className="absolute w-[18%] h-[12%] rounded-full top-[18%] left-[22%]"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.18) 0%, transparent 70%)',
          filter: 'blur(4px)',
        }}
      />
    </div>
  </div>
);

const NavLinkItem: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <Link to={to} className="group relative flex items-center gap-1 text-[11px] font-bold tracking-widest text-white transition-colors">
    {label}
    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
  </Link>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  /* Reset mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-12 lg:px-16 transition-all duration-300 max-w-[100vw] overflow-hidden">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between relative z-[101]">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
          <Link to="/" className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter text-white hover:opacity-80 transition-opacity pointer-events-auto whitespace-nowrap">
            NENOTECHNOLOGY
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-8 px-8 py-3 rounded-full border border-white/10 md:backdrop-blur-xl transition-all duration-500 pointer-events-auto ${scrolled ? 'bg-black/90 md:bg-black/80 border-white/20 shadow-2xl shadow-white/5' : 'bg-transparent'}`}>
          <NavLinkItem to="/" label="HOME" />

          <div className="relative">
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className="group relative flex items-center gap-1 text-[11px] font-bold tracking-widest text-white transition-colors"
            >
              ABOUT
              <ChevronDown size={12} className={`transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-4 w-48 bg-zinc-950 border border-white/10 rounded-2xl py-2 z-50">
                <Link to="/about" className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">Company</Link>
                <Link to="/about/vision-mission" className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">Vision & Mission</Link>
                <Link to="/about/leadership" className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">Leadership</Link>
                <Link to="/about/why-neno" className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">Why Neno Technology</Link>
              </div>
            )}
          </div>

          {/* Services — direct link to Expertise, no dropdown */}
          <NavLinkItem to="/services" label="SERVICES" />

          <NavLinkItem to="/case-studies" label="CASE STUDIES" />

          <NavLinkItem to="/contact" label="CONTACT" />
        </nav>

        <div className="flex items-center gap-4 md:gap-6 pointer-events-auto">
          {/* Phone — desktop only */}
          <div className="hidden lg:flex items-center gap-2 text-[13px] font-medium group cursor-pointer">
            <Phone size={14} className="group-hover:rotate-12 transition-transform text-white" />
            <a href="tel:9106915561" className="relative text-white">
              9106915561
              <div className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all" />
            </a>
          </div>

          {/* Careers button */}
          <a
            href="#/careers"
            onClick={(e) => { e.preventDefault(); window.location.hash = '#/careers'; }}
            className="hidden lg:flex px-5 py-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all text-zinc-400 text-[11px] font-bold tracking-widest"
          >
            CAREERS
          </a>

          {/* Hire Talent button */}
          <a
            href="#/talent"
            onClick={(e) => { e.preventDefault(); window.location.hash = '#/talent'; }}
            className="hidden lg:flex px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-white text-[11px] font-bold tracking-widest"
          >
            HIRE TALENT
          </a>

          {/* Email button */}
          <a href="mailto:sales@nenotechnology.com" className="hidden lg:flex p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-white">
            <Mail size={18} />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <>
                <span className="block w-6 h-[2px] bg-white origin-center transition-all duration-300" />
                <span className="block w-6 h-[2px] bg-white transition-all duration-200" />
                <span className="block w-6 h-[2px] bg-white origin-center transition-all duration-300" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* ═══ Menu Overlay ═══ */}
      <div
        className={`fixed inset-0 z-[99] lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0f 50%, #0d0d14 100%)' }}
      >
        <ChromeSphere open={mobileOpen} />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-between px-8 sm:px-12 py-24 overflow-y-auto">
          {/* Top: Contact info */}
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-zinc-500 transition-all duration-500"
            style={{
              transitionDelay: mobileOpen ? '100ms' : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(-10px)',
            }}
          >
            <span className="tracking-widest uppercase font-bold text-zinc-600">Hyderabad, India</span>
            <a href="mailto:sales@nenotechnology.com" className="hover:text-white transition-colors">
              sales@nenotechnology.com
            </a>
            <a href="tel:9106915561" className="hover:text-white transition-colors">
              +91 91069 15561
            </a>
          </div>

          {/* Center: Navigation links */}
          <nav className="flex flex-col gap-3 sm:gap-4 mt-8">
            {/* Home */}
            <MobileNavLink href="/" label="HOME" mobileOpen={mobileOpen} delay={100} onClose={() => setMobileOpen(false)} />

            {/* About Accordion */}
            <div>
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex items-center gap-4 transition-all duration-500 text-white hover:text-zinc-300"
                style={{
                  transitionDelay: mobileOpen ? '150ms' : '0ms',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-30px)',
                }}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">ABOUT</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden ml-4 mt-2 space-y-1"
                  >
                    {[
                      { href: '/about/company', label: 'Company' },
                      { href: '/about/vision-mission', label: 'Vision & Mission' },
                      { href: '/about/leadership', label: 'Leadership' },
                      { href: '/about/why-neno', label: 'Why Neno Technology' },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-lg text-zinc-500 hover:text-white transition-colors py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services — navigate to /services (Expertise) */}
            <MobileNavLink href="/services" label="SERVICES" mobileOpen={mobileOpen} delay={200} onClose={() => setMobileOpen(false)} />

            {/* Case Studies */}
            <MobileNavLink href="/case-studies" label="CASE STUDIES" mobileOpen={mobileOpen} delay={300} />

            {/* Contact */}
            <MobileNavLink href="/contact" label="CONTACT" mobileOpen={mobileOpen} delay={350} />
          </nav>

          {/* Bottom section */}
          <div
            className="flex flex-col gap-6 transition-all duration-500"
            style={{
              transitionDelay: mobileOpen ? '500ms' : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <div className="flex flex-col gap-4">
              <a
                href="#/careers"
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); window.location.hash = '#/careers'; }}
                className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              >
                CAREERS
              </a>
              <a
                href="#/talent"
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); window.location.hash = '#/talent'; }}
                className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              >
                HIRE TALENT
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

/* ─── Mobile Nav Link Helper ──────────────────────────────────── */
interface MobileNavLinkProps {
  href: string;
  label: string;
  mobileOpen: boolean;
  delay: number;
  onClose: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label, mobileOpen, delay, onClose }) => {
  const isExternal = href.startsWith('http');
  const content = (
    <span
      className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
      style={{
        transitionDelay: mobileOpen ? `${delay}ms` : '0ms',
        opacity: mobileOpen ? 1 : 0,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(-30px)',
      }}
    >
      {label}
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 transition-all duration-500 text-white hover:text-zinc-300"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={onClose}
      className="group flex items-center gap-4 transition-all duration-500 text-white hover:text-zinc-300"
    >
      {content}
    </Link>
  );
};

export default Navbar;
