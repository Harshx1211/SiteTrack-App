'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Flame } from 'lucide-react';

const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/services',  label: 'Services' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="site-navbar"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'all 350ms cubic-bezier(0.4,0,0.2,1)',
        background: scrolled
          ? 'rgba(255,255,255,0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226,232,240,0.8)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 70, gap: 32 }}>

        {/* Logo */}
        <Link href="/" id="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg,#F97316,#ea6900)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(249,115,22,0.4)',
          }}>
            <Flame size={18} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{
              fontWeight: 900,
              fontSize: 15,
              letterSpacing: '-0.02em',
              color: scrolled ? '#0F1E3C' : 'white',
              lineHeight: 1.1,
              transition: 'color 350ms',
            }}>UMA Building</div>
            <div style={{
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: scrolled ? '#F97316' : 'rgba(249,115,22,0.9)',
              lineHeight: 1,
            }}>Services</div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}
          className="hide-mobile-nav">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className={scrolled ? 'nav-link-scrolled' : 'nav-link'}
              id={`nav-${l.label.toLowerCase()}`}
              style={{
                padding: '8px 14px',
                borderRadius: 8,
                fontSize: 14.5,
                fontWeight: 600,
                color: scrolled ? '#475569' : 'rgba(255,255,255,0.80)',
                transition: 'all 200ms',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? '#0F1E3C' : 'white';
                (e.currentTarget as HTMLAnchorElement).style.background = scrolled ? '#f1f5f9' : 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? '#475569' : 'rgba(255,255,255,0.80)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact" id="nav-cta"
          className="hide-mobile-nav"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            padding: '9px 20px',
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 700,
            background: 'var(--orange)',
            color: 'white',
            boxShadow: '0 4px 16px rgba(249,115,22,0.38)',
            transition: 'all 200ms',
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(249,115,22,0.50)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(249,115,22,0.38)';
          }}
        >
          Get a Quote
        </Link>

        {/* Hamburger */}
        <button
          id="nav-hamburger"
          onClick={() => setOpen(!open)}
          className="show-mobile-nav"
          style={{
            marginLeft: 'auto',
            width: 40, height: 40,
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: scrolled ? '#f1f5f9' : 'rgba(255,255,255,0.12)',
            color: scrolled ? '#1B2D4F' : 'white',
            border: 'none', cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="animate-slide-down" style={{
          background: 'white',
          borderTop: '1px solid #e2e8f0',
          boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
        }}>
          <div className="container" style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: '12px 16px',
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#1B2D4F',
                  transition: 'background 150ms',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#f8fafc'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 8,
                padding: '13px 16px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                background: 'var(--orange)',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
              }}
            >
              Get a Quote
            </Link>
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
