'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ClipboardList, Shield, Wrench } from 'lucide-react';

const TRUST_POINTS = [
  'Digital inspection reports for every job',
  'Routine & defect-based services available',
  'Managed via our own purpose-built platform',
];

const FLOAT_CARDS = [
  { icon: ClipboardList, label: 'Routine Service', sub: 'Monthly to 5-Yearly', color: '#F97316', bg: 'rgba(249,115,22,0.15)', anim: 'animate-float-a', delay: '0ms' },
  { icon: Wrench,        label: 'Defect Repair',   sub: 'Quote & Fix',          color: '#60a5fa', bg: 'rgba(96,165,250,0.15)',  anim: 'animate-float-b', delay: '800ms' },
  { icon: Shield,        label: 'Digital Reports', sub: 'PDF on Completion',     color: '#4ade80', bg: 'rgba(74,222,128,0.15)', anim: 'animate-float-c', delay: '400ms' },
];

export default function HeroSection() {
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
        paddingTop: 72,
      }}
    >
      {/* Decorative glow orbs */}
      <div className="glow-orb" style={{ width: 560, height: 560, background: 'rgba(249,115,22,0.10)', top: '-140px', right: '-100px' }} />
      <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(36,58,101,0.55)', bottom: '-80px', left: '-100px' }} />
      <div className="glow-orb" style={{ width: 200, height: 200, background: 'rgba(249,115,22,0.08)', top: '40%', left: '40%' }} />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.035,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 64, paddingBottom: 100 }}>
        <div style={{ maxWidth: 640 }}>

          {/* Eyebrow label */}
          <div
            className="animate-fade-in-up"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
              padding: '7px 16px',
              background: 'rgba(249,115,22,0.14)',
              borderRadius: 999,
              border: '1px solid rgba(249,115,22,0.28)',
            }}
          >
            <Shield size={13} color="#F97316" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#fdba74' }}>
              Building Maintenance &amp; Fire Safety
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl animate-fade-in-up delay-100" style={{ color: 'white', marginBottom: 22 }}>
            Keeping Your
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #F97316 0%, #fb923c 60%, #fde68a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Building Safe
            </span>
            &amp; Compliant
          </h1>

          {/* Subtext */}
          <p
            className="body-lg animate-fade-in-up delay-200"
            style={{ color: 'rgba(255,255,255,0.68)', maxWidth: 540, marginBottom: 36, lineHeight: 1.75 }}
          >
            UMA Building Services provides routine maintenance inspections and defect repair services for commercial and industrial properties — managed through our own digital reporting platform.
          </p>

          {/* Trust checklist */}
          <ul className="animate-fade-in-up delay-300" style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 48, listStyle: 'none' }}>
            {TRUST_POINTS.map(pt => (
              <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <CheckCircle size={17} color="#F97316" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15 }}>{pt}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href="/contact" id="hero-cta-primary" className="btn btn-primary" style={{ fontSize: 15 }}>
              Get a Free Quote <ArrowRight size={17} />
            </Link>
            <Link href="/services" id="hero-cta-secondary" className="btn btn-outline" style={{ fontSize: 15 }}>
              View Our Services
            </Link>
          </div>
        </div>

        {/* Floating service cards — desktop only */}
        <div
          className="animate-fade-in delay-600 hero-cards"
          style={{
            position: 'absolute',
            right: 0, top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}
        >
          {FLOAT_CARDS.map(({ icon: Icon, label, sub, color, bg, anim, delay }) => (
            <div
              key={label}
              className={`card-glass ${anim}`}
              style={{
                padding: '16px 22px',
                display: 'flex', alignItems: 'center', gap: 14,
                minWidth: 230,
                animationDelay: delay,
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 11,
                background: bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon size={19} color={color} strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: 'white', lineHeight: 1.2, letterSpacing: '-0.01em' }}>{label}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.52)', marginTop: 3 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade-to-white */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 100,
        background: 'linear-gradient(to bottom, transparent, white)',
        pointerEvents: 'none',
      }} />

      <style>{`
        @media (max-width: 1000px) { .hero-cards { display: none !important; } }
      `}</style>
    </section>
  );
}
