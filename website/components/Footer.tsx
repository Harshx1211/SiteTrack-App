'use client';
import Link from 'next/link';
import { Flame, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  'Routine Service — Monthly',
  'Routine Service — 3 Monthly',
  'Routine Service — 6 Monthly',
  'Routine Service — Annual',
  'Routine Service — 5 Yearly',
  'Quote / Defect Repair',
];

const LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About Us' },
  { href: '/contact',  label: 'Contact' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a1628 0%, #0F1E3C 100%)',
      color: 'rgba(255,255,255,0.7)',
      padding: '72px 0 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px 40px',
          paddingBottom: 56,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'linear-gradient(135deg,#F97316,#ea6900)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(249,115,22,0.38)',
              }}>
                <Flame size={20} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: 16, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  UMA Building
                </div>
                <div style={{ fontWeight: 600, fontSize: 11, color: '#F97316', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Services
                </div>
              </div>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
              Professional building maintenance and fire safety services. We manage routine inspections and defect repairs using our own digital tracking platform.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:info@umabuildingservices.com.au"
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.65)', transition: 'color 200ms' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F97316'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'}
              >
                <Mail size={14} /> info@umabuildingservices.com.au
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                <MapPin size={14} /> Australia
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'white', marginBottom: 20 }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LINKS.map(l => (
                <Link key={l.href} href={l.href}
                  style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', transition: 'color 200ms', display: 'inline-flex', alignItems: 'center', gap: 5 }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'white'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'white', marginBottom: 20 }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES.map(s => (
                <span key={s} style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'white', marginBottom: 20 }}>Ready to Start?</p>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              Submit an enquiry and we&apos;ll be in touch to discuss your building&apos;s service requirements.
            </p>
            <Link href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                padding: '12px 22px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                background: '#F97316',
                color: 'white',
                boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
                transition: 'all 200ms',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'}
            >
              Enquire Now <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          padding: '24px 0',
          fontSize: 13,
          color: 'rgba(255,255,255,0.35)',
        }}>
          <span>© {new Date().getFullYear()} UMA Building Services. All rights reserved.</span>
          <span style={{ fontSize: 12 }}>ABN available on request</span>
        </div>
      </div>
    </footer>
  );
}
