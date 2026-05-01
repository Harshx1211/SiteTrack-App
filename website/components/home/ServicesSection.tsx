'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  CalendarClock, Wrench, FileText, CheckSquare, ArrowRight
} from 'lucide-react';

const SERVICES = [
  {
    id: 'routine-monthly',
    icon: CalendarClock,
    color: '#F97316',
    bg: '#fff4ed',
    title: 'Monthly Routine Service',
    description:
      'Regular monthly inspections of fire safety assets and building systems. Ideal for high-traffic commercial properties that need frequent compliance checks.',
  },
  {
    id: 'routine-3monthly',
    icon: CalendarClock,
    color: '#3b82f6',
    bg: '#eff6ff',
    title: '3-Monthly Routine Service',
    description:
      'Quarterly inspections scheduled at regular 3-month intervals. Covers required periodic checks across installed fire safety assets.',
  },
  {
    id: 'routine-6monthly',
    icon: CalendarClock,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    title: '6-Monthly Routine Service',
    description:
      'Bi-annual inspections for properties that require half-yearly compliance visits. A common schedule for many commercial and industrial sites.',
  },
  {
    id: 'routine-annual',
    icon: CheckSquare,
    color: '#22c55e',
    bg: '#f0fdf4',
    title: 'Annual Routine Service',
    description:
      'Comprehensive yearly inspections covering all fire safety assets on site. Includes a full digital service report generated at job completion.',
  },
  {
    id: 'routine-5yearly',
    icon: FileText,
    color: '#0ea5e9',
    bg: '#f0f9ff',
    title: '5-Yearly Routine Service',
    description:
      'Major periodic inspections required at 5-year intervals. Covers extended compliance checks that go beyond standard annual requirements.',
  },
  {
    id: 'defect-repair',
    icon: Wrench,
    color: '#ef4444',
    bg: '#fef2f2',
    title: 'Quote / Defect Repair',
    description:
      'Site visits to assess and repair defects identified during inspections or reported by the client. We quote the work and carry out the repair upon approval.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.service-card');
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    cards.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-section" className="section" ref={sectionRef}
      style={{ background: 'white' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label animate-fade-in">
            What We Offer
          </div>
          <h2 className="heading-lg animate-fade-in-up" style={{ color: '#0F1E3C', marginBottom: 16 }}>
            Our Service Range
          </h2>
          <p className="body-md animate-fade-in-up delay-100"
            style={{ color: '#64748b', maxWidth: 560, margin: '0 auto' }}>
            We provide scheduled routine maintenance inspections across a range of frequencies, plus defect repair and quoting services — all tracked digitally.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="card service-card"
                style={{
                  padding: 28,
                  opacity: 0,
                  transform: 'translateY(28px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, box-shadow 0.25s ease`,
                }}
              >
                <div className="icon-box" style={{ background: svc.bg, marginBottom: 18 }}>
                  <Icon size={22} color={svc.color} strokeWidth={2} />
                </div>
                <h3 className="heading-sm" style={{ color: '#0F1E3C', marginBottom: 10 }}>{svc.title}</h3>
                <p className="body-sm" style={{ color: '#64748b', lineHeight: 1.7 }}>{svc.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/contact" className="btn btn-navy" id="services-enquire-btn"
            style={{ display: 'inline-flex', gap: 8 }}>
            Enquire About a Service <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
