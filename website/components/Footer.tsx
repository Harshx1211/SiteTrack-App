'use client';
import Link from 'next/link';
import { Flame, Mail, MapPin, ArrowUpRight, ExternalLink } from 'lucide-react';

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
      background: 'linear-gradient(180deg, #080f1e 0%, #0a1628 30%, #0F1E3C 100%)',
      color: 'rgba(255,255,255,0.6)',
    }}>
      {/* Top border accent */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #F97316, #ea6900 50%, transparent)' }} />

      <div className="container" style={{ paddingTop: 72, paddingBottom: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 1.4fr) repeat(3, 1fr)',
          gap: '48px 40px',
          paddingBottom: 60,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>

          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'linear-gradient(135deg,#F97316,#ea6900)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 18px rgba(249,115,22,0.40)',
              }}>
                <Flame size={20} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: 16, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  UMA Building
                </div>
                <div style={{ fontWeight: 700, fontSize: 10, color: '#F97316', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Services
                </div>
              </div>
            </Link>

            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 270, marginBottom: 28, color: 'rgba(255,255,255,0.55)' }}>
              Professional building maintenance and fire safety services, managed through our own purpose-built digital platform.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="mailto:info@umabuildingservices.com.au"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: 'rgba(255,255,255,0.55)' }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'rgba(249,115,22,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Mail size={13} color="#F97316" />
                </div>
                info@umabuildingservices.com.au
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <MapPin size={13} color="rgba(255,255,255,0.4)" />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.40)' }}>Australia</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: 22 }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {LINKS.map(l => (
                <Link key={l.href} href={l.href} className="footer-link"
                  style={{ fontSize: 14, color: 'rgba(255,255,255,0.52)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: 22 }}>
              Services
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES.map(s => (
                <Link key={s} href="/services" className="footer-link"
                  style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: 22 }}>
              Get In Touch
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 24, color: 'rgba(255,255,255,0.50)' }}>
              Submit an enquiry and we&apos;ll get back to you to discuss your property&apos;s service requirements.
            </p>
            <Link href="/contact"
              className="footer-cta-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '12px 22px', borderRadius: 11,
                fontSize: 14, fontWeight: 700,
                background: '#F97316', color: 'white',
                boxShadow: '0 6px 20px rgba(249,115,22,0.38)',
                transition: 'all 200ms',
              }}
            >
              Enquire Now <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12, padding: '22px 0',
          fontSize: 13, color: 'rgba(255,255,255,0.28)',
        }}>
          <span>© {new Date().getFullYear()} UMA Building Services. All rights reserved.</span>
          <span style={{ fontSize: 12 }}>Building maintenance &amp; fire safety services</span>
        </div>
      </div>

      <style>{`
        .footer-link { transition: color 200ms; }
        .footer-link:hover { color: white !important; }
        .footer-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(249,115,22,0.50) !important; }
        @media (max-width: 900px) {
          footer .container > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          footer .container > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
