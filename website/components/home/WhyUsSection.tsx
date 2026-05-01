'use client';
import { useEffect, useRef } from 'react';
import { Smartphone, FileBarChart2, MapPin, ClipboardCheck } from 'lucide-react';

const FEATURES = [
  {
    id: 'feature-digital-tracking',
    icon: Smartphone,
    color: '#F97316',
    bg: 'rgba(249,115,22,0.10)',
    title: 'Purpose-Built Digital System',
    description:
      'Our technicians use our own mobile app to log inspection results, capture photo evidence, and collect client signatures on-site — no paper, no delays.',
  },
  {
    id: 'feature-pdf-reports',
    icon: FileBarChart2,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.10)',
    title: 'Digital PDF Service Reports',
    description:
      'A comprehensive PDF report is generated at the end of each job, documenting every asset inspected, results, defects found, and the technician\'s signature.',
  },
  {
    id: 'feature-asset-tracking',
    icon: ClipboardCheck,
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.10)',
    title: 'Per-Asset Inspection Logging',
    description:
      'Every individual fire safety asset at your property is logged with its result (Pass / Fail), and any defects are recorded with severity and photo evidence.',
  },
  {
    id: 'feature-multi-site',
    icon: MapPin,
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.10)',
    title: 'Multi-Site Management',
    description:
      'We manage multiple properties simultaneously. Each site has its own compliance record, asset register, job history, and service schedule in our system.',
  },
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
      { threshold: 0.1 }
    );
    cards.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="section" style={{ background: 'white' }} ref={ref}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', marginBottom: 60 }}>
          <div>
            <div className="section-label">Why Choose Us</div>
            <h2 className="heading-lg" style={{ color: '#0F1E3C', marginBottom: 16 }}>
              Technology-Backed<br />Building Services
            </h2>
            <p className="body-md" style={{ color: '#64748b', lineHeight: 1.75 }}>
              Unlike traditional building services companies using paper-based processes, UMA Building Services operates with its own purpose-built digital platform — giving you accurate records and clear reporting every time.
            </p>
          </div>

          {/* Visual block */}
          <div style={{
            background: 'linear-gradient(135deg, #0F1E3C 0%, #1B2D4F 100%)',
            borderRadius: 24,
            padding: 36,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -30, right: -30,
              width: 180, height: 180, borderRadius: '50%',
              background: 'rgba(249,115,22,0.12)', filter: 'blur(40px)',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(249,115,22,0.85)', marginBottom: 12 }}>
                Our Platform Tracks
              </p>
              {[
                'Properties & site registers',
                'Assets per property',
                'Scheduled jobs & technicians',
                'Inspection results per asset',
                'Defects with severity ratings',
                'Photo evidence & signatures',
                'Digital PDF service reports',
                'Compliance status per site',
              ].map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '7px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#F97316', flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                id={f.id}
                className="card why-card"
                style={{
                  padding: 26,
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: `opacity 0.5s ease ${i * 90}ms, transform 0.5s ease ${i * 90}ms`,
                }}
              >
                <div className="icon-box" style={{ background: f.bg, marginBottom: 16, width: 48, height: 48 }}>
                  <Icon size={20} color={f.color} strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F1E3C', marginBottom: 8 }}>{f.title}</h3>
                <p className="body-sm" style={{ color: '#64748b', lineHeight: 1.7 }}>{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #why-us .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
