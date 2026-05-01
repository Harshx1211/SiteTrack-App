'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ClipboardList, Shield, Wrench } from 'lucide-react';

const TRUST_POINTS = [
  'Digital inspection reports',
  'Routine & defect-based services',
  'Managed via our own tracking platform',
];

export default function HeroSection() {
  const countersRef = useRef<HTMLDivElement>(null);

  // Animate counters when visible
  useEffect(() => {
    const el = countersRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('[data-target]').forEach(node => {
            const target = parseInt(node.dataset.target ?? '0', 10);
            const suffix = node.dataset.suffix ?? '';
            let start = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
              start = Math.min(start + step, target);
              node.textContent = start + suffix;
              if (start >= target) clearInterval(timer);
            }, 35);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="hero-gradient"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Decorative orbs */}
      <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(249,115,22,0.12)', top: '-120px', right: '-80px' }} />
      <div className="glow-orb" style={{ width: 350, height: 350, background: 'rgba(36,58,101,0.6)', bottom: '-60px', left: '-80px' }} />

      {/* Grid lines overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 60, paddingBottom: 80 }}>
        <div style={{ maxWidth: 680 }}>

          {/* Label */}
          <div className="animate-fade-in-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            padding: '7px 16px', background: 'rgba(249,115,22,0.15)',
            borderRadius: 999, border: '1px solid rgba(249,115,22,0.25)',
          }}>
            <Shield size={13} color="#F97316" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#fdba74' }}>
              Building Maintenance &amp; Fire Safety
            </span>
          </div>

          {/* Headline */}
          <h1
            className="heading-xl animate-fade-in-up delay-100"
            style={{ color: 'white', marginBottom: 24 }}
          >
            Keeping Your
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #F97316 0%, #fdba74 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Building Safe
            </span>
            &amp; Compliant
          </h1>

          {/* Sub */}
          <p
            className="body-lg animate-fade-in-up delay-200"
            style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 560, marginBottom: 36 }}
          >
            UMA Building Services provides routine maintenance inspections and defect repair services for commercial and industrial properties — managed through our own digital reporting platform.
          </p>

          {/* Trust points */}
          <ul className="animate-fade-in-up delay-300" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 44 }}>
            {TRUST_POINTS.map(pt => (
              <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <CheckCircle size={17} color="#F97316" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.80)', fontSize: 15 }}>{pt}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href="/contact" id="hero-cta-primary" className="btn btn-primary" style={{ gap: 8 }}>
              Enquire Now <ArrowRight size={17} />
            </Link>
            <Link href="/services" id="hero-cta-secondary" className="btn btn-outline">
              Our Services
            </Link>
          </div>
        </div>

        {/* Service cards floating */}
        <div
          className="animate-fade-in delay-500"
          style={{
            position: 'absolute',
            right: 0, top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}
        >
          {[
            { icon: ClipboardList, label: 'Routine Service', sub: 'Monthly to 5-Yearly', color: '#F97316' },
            { icon: Wrench,        label: 'Defect Repair',   sub: 'Quote & Fix',           color: '#3b82f6' },
            { icon: Shield,        label: 'Compliance',      sub: 'Digital Reports',        color: '#22c55e' },
          ].map(({ icon: Icon, label, sub, color }) => (
            <div key={label} className="card-glass animate-float"
              style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14, minWidth: 220 }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: `${color}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon size={18} color={color} />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>{label}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
        background: 'linear-gradient(to bottom, transparent, white)',
      }} />

      <style>{`
        @media (max-width: 960px) {
          #hero > .container > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
