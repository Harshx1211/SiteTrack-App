'use client';
import { useEffect, useRef } from 'react';
import {
  CalendarClock, Wrench, FileText, CheckSquare
} from 'lucide-react';

const SERVICES = [
  {
    id: 'svc-monthly',
    icon: CalendarClock,
    color: '#F97316',
    bg: '#fff4ed',
    tag: 'Monthly',
    title: 'Monthly Routine Service',
    description:
      'Regular monthly inspections of fire safety assets and building systems. Ideal for high-traffic commercial properties requiring frequent compliance visits.',
  },
  {
    id: 'svc-3monthly',
    icon: CalendarClock,
    color: '#3b82f6',
    bg: '#eff6ff',
    tag: '3-Monthly',
    title: '3-Monthly Routine Service',
    description:
      'Quarterly inspections scheduled at regular 3-month intervals. Covers required periodic checks across all installed fire safety assets.',
  },
  {
    id: 'svc-6monthly',
    icon: CalendarClock,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    tag: '6-Monthly',
    title: '6-Monthly Routine Service',
    description:
      'Bi-annual inspections for properties that require half-yearly compliance visits — a common schedule for many commercial and industrial sites.',
  },
  {
    id: 'svc-annual',
    icon: CheckSquare,
    color: '#22c55e',
    bg: '#f0fdf4',
    tag: 'Annual',
    title: 'Annual Routine Service',
    description:
      'Comprehensive yearly inspections covering all fire safety assets on site. Includes a full digital PDF service report generated at job completion.',
  },
  {
    id: 'svc-5yearly',
    icon: FileText,
    color: '#0ea5e9',
    bg: '#f0f9ff',
    tag: '5-Yearly',
    title: '5-Yearly Routine Service',
    description:
      'Major periodic inspections required at 5-year intervals. Covers extended compliance checks that go beyond standard annual requirements.',
  },
  {
    id: 'svc-defect',
    icon: Wrench,
    color: '#ef4444',
    bg: '#fef2f2',
    tag: 'Defect Repair',
    title: 'Quote / Defect Repair',
    description:
      'Site visits to assess and repair defects identified during inspections or reported by you. We quote the work and carry out the repair upon your approval.',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll<HTMLElement>('.svc-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    cards.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-section" className="section" ref={ref} style={{ background: 'white' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">What We Offer</div>
          <h2 className="heading-lg" style={{ color: '#0F1E3C', marginBottom: 16 }}>
            Our Service Range
          </h2>
          <p className="body-md" style={{ color: '#64748b', maxWidth: 520, margin: '0 auto' }}>
            Scheduled routine maintenance inspections across a range of frequencies, plus defect assessment and repair — all fully tracked and digitally reported.
          </p>
        </div>

        {/* Grid — 3 col → 2 col → 1 col via CSS class */}
        <div className="services-grid">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="card svc-card"
                style={{
                  padding: '28px 26px',
                  opacity: 0,
                  transform: 'translateY(28px)',
                  transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 70}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 70}ms`,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Tag + icon row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '4px 10px', borderRadius: 999,
                    background: svc.bg, fontSize: 11.5, fontWeight: 700,
                    color: svc.color, letterSpacing: '0.04em',
                  }}>
                    {svc.tag}
                  </div>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: svc.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={19} color={svc.color} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="heading-sm" style={{ color: '#0F1E3C', marginBottom: 10 }}>{svc.title}</h3>
                <p className="body-sm" style={{ color: '#64748b', lineHeight: 1.75, flex: 1 }}>{svc.description}</p>

                {/* Bottom accent bar */}
                <div style={{ marginTop: 20, height: 3, borderRadius: 3, background: `${svc.color}20` }}>
                  <div style={{ width: '40%', height: '100%', borderRadius: 3, background: svc.color }} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
