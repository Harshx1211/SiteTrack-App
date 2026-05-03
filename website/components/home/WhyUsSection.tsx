'use client';
import { useEffect, useRef } from 'react';
import { Smartphone, FileBarChart2, MapPin, ClipboardCheck } from 'lucide-react';

const FEATURES = [
  {
    id: 'feature-digital-tracking',
    icon: Smartphone,
    color: '#F97316',
    bg: 'rgba(249,115,22,0.10)',
    title: 'Purpose-Built Mobile App',
    description:
      'Our technicians use our own mobile app on-site — logging inspection results, capturing photo evidence, and collecting client signatures. No paper, no delays.',
  },
  {
    id: 'feature-pdf-reports',
    icon: FileBarChart2,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.10)',
    title: 'Digital PDF Service Reports',
    description:
      'A structured PDF report is generated at the end of every job — documenting each asset inspected, results, any defects found, and the technician signature.',
  },
  {
    id: 'feature-asset-tracking',
    icon: ClipboardCheck,
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.10)',
    title: 'Per-Asset Inspection Logging',
    description:
      'Every fire safety asset at your property is individually logged with a Pass or Fail result. Defects are recorded with severity classification and photo evidence.',
  },
  {
    id: 'feature-multi-site',
    icon: MapPin,
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.10)',
    title: 'Multi-Site Management',
    description:
      'We manage multiple properties simultaneously — each with its own asset register, compliance record, job history, and scheduled service dates in our system.',
  },
];

const PLATFORM_LIST = [
  'Properties & site registers',
  'Assets per property',
  'Scheduled jobs & technicians',
  'Inspection results per asset',
  'Defects with severity ratings',
  'Photo evidence & signatures',
  'Digital PDF service reports',
  'Compliance status per site',
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll<HTMLElement>('.why-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.08 }
    );
    cards.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="section" style={{ background: 'white' }} ref={ref}>
      <div className="container">

        {/* Header row */}
        <div className="why-header-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center', marginBottom: 64 }}>
          <div>
            <div className="section-label">Why Choose Us</div>
            <h2 className="heading-lg" style={{ color: '#0F1E3C', marginBottom: 18 }}>
              Technology-Backed<br />Building Services
            </h2>
            <p className="body-md" style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 24 }}>
              Unlike traditional building services companies using paper-based processes, UMA Building Services operates with its own purpose-built digital platform.
            </p>
            <p className="body-md" style={{ color: '#64748b', lineHeight: 1.8 }}>
              That means accurate records, transparent reporting, and clear digital evidence for every service visit we carry out — every single time.
            </p>
          </div>

          {/* Platform tracking list */}
          <div style={{
            background: 'linear-gradient(135deg, #0F1E3C 0%, #1B2D4F 100%)',
            borderRadius: 22, padding: '36px 32px',
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 16px 48px rgba(15,30,60,0.22)',
          }}>
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 200, height: 200, borderRadius: '50%',
              background: 'rgba(249,115,22,0.12)', filter: 'blur(50px)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'rgba(249,115,22,0.85)', marginBottom: 18 }}>
                Our Platform Tracks
              </p>
              {PLATFORM_LIST.map((item, i) => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '9px 0',
                  borderBottom: i < PLATFORM_LIST.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.76)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }} className="why-feature-grid">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                id={f.id}
                className="card why-card"
                style={{
                  padding: '28px 26px',
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
                  display: 'flex', alignItems: 'flex-start', gap: 20,
                }}
              >
                <div style={{
                  width: 50, height: 50, borderRadius: 13,
                  background: f.bg, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={21} color={f.color} strokeWidth={1.9} />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F1E3C', marginBottom: 8, letterSpacing: '-0.015em' }}>{f.title}</h3>
                  <p className="body-sm" style={{ color: '#64748b', lineHeight: 1.75 }}>{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-header-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 640px) {
          .why-feature-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
