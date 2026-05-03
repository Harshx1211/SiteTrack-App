'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Flame } from 'lucide-react';

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      id="site-navbar"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'all 400ms cubic-bezier(0.4,0,0.2,1)',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226,232,240,0.80)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 72, gap: 32 }}>

        {/* Logo */}
        <Link href="/" id="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 11,
            background: 'linear-gradient(135deg,#F97316,#ea6900)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(249,115,22,0.42)',
            flexShrink: 0,
          }}>
            <Flame size={18} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{
              fontWeight: 900, fontSize: 15, letterSpacing: '-0.025em',
              color: scrolled ? '#0F1E3C' : 'white',
              lineHeight: 1.1, transition: 'color 400ms',
            }}>
              UMA Building
            </div>
            <div style={{
              fontWeight: 700, fontSize: 10, letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#F97316',
              lineHeight: 1,
            }}>
              Services
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hide-mobile-nav"
          style={{ display: 'flex', alignItems: 'center', gap: 2, marginLeft: 'auto' }}
        >
          {NAV_LINKS.map(l => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                id={`nav-${l.label.toLowerCase()}`}
                style={{
                  padding: '6px 12px',
                  fontSize: 14.5,
                  fontWeight: active ? 700 : 600,
                  transition: 'color 180ms',
                  letterSpacing: '-0.01em',
                  color: scrolled
                    ? active ? '#0F1E3C' : '#64748b'
                    : active ? 'white' : 'rgba(255,255,255,0.72)',
                  borderBottom: active ? '2px solid #F97316' : '2px solid transparent',
                  paddingBottom: '4px',
                  background: 'transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? '#0F1E3C' : 'white';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = scrolled
                    ? active ? '#0F1E3C' : '#64748b'
                    : active ? 'white' : 'rgba(255,255,255,0.72)';
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          id="nav-hamburger"
          onClick={() => setOpen(!open)}
          className="show-mobile-nav"
          style={{
            marginLeft: 'auto', width: 42, height: 42, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: scrolled ? '#f1f5f9' : 'rgba(255,255,255,0.12)',
            color: scrolled ? '#1B2D4F' : 'white',
            border: 'none', cursor: 'pointer', transition: 'background 200ms',
          }}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="animate-slide-down"
          style={{
            background: 'white',
            borderTop: '1px solid #e2e8f0',
            boxShadow: '0 20px 50px rgba(0,0,0,0.14)',
          }}
        >
          <div className="container" style={{ padding: '12px 18px 18px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV_LINKS.map(l => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '13px 16px',
                    borderRadius: 10,
                    fontSize: 15, fontWeight: 600,
                    color: active ? '#0F1E3C' : '#475569',
                    background: active ? 'rgba(15,30,60,0.06)' : 'transparent',
                    borderLeft: active ? '3px solid #F97316' : '3px solid transparent',
                    transition: 'all 150ms',
                  }}
                >
                  {l.label}
                </Link>
              );
            })}

          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .show-mobile-nav { display: none !important; } }
        @media (max-width: 768px) { .hide-mobile-nav { display: none !important; } .show-mobile-nav { display: flex !important; } }
      `}</style>
    </header>
  );
}
