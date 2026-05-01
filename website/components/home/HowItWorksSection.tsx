'use client';
import { useEffect, useRef } from 'react';
import { ClipboardList, SearchCheck, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  {
    num: '01',
    icon: ClipboardList,
    color: '#F97316',
    bg: 'rgba(249,115,22,0.10)',
    title: 'Submit Your Enquiry',
    description:
      'Tell us about your property, its location, and the type of service you need. We\'ll review your details and get back to you promptly.',
  },
  {
    num: '02',
    icon: SearchCheck,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.10)',
    title: 'We Schedule a Visit',
    description:
      'Once agreed, we schedule a technician visit. Your property and job are registered in our system, and the assigned technician is notified.',
  },
  {
    num: '03',
    icon: FileText,
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.10)',
    title: 'Inspection & Digital Report',
    description:
      'Our technician carries out the service on-site, logs results asset-by-asset, and generates a digital PDF service report upon completion.',
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>('.step-item');
    if (!items) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="section" style={{ background: '#F8FAFC' }} ref={ref}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">How It Works</div>
          <h2 className="heading-lg" style={{ color: '#0F1E3C', marginBottom: 16 }}>
            Simple, Transparent Process
          </h2>
          <p className="body-md" style={{ color: '#64748b', maxWidth: 520, margin: '0 auto' }}>
            From your first enquiry to a completed digital report, here&apos;s what to expect when working with us.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
          position: 'relative',
        }}>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                id={`step-${step.num}`}
                className="step-item"
                style={{
                  opacity: 0,
                  transform: 'translateY(28px)',
                  transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms`,
                  background: 'white',
                  borderRadius: 20,
                  padding: 32,
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Step number watermark */}
                <div style={{
                  position: 'absolute',
                  top: -10, right: 16,
                  fontSize: 80,
                  fontWeight: 900,
                  color: '#f1f5f9',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {step.num}
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="icon-box" style={{ background: step.bg, marginBottom: 20 }}>
                    <Icon size={22} color={step.color} strokeWidth={2} />
                  </div>
                  <h3 className="heading-sm" style={{ color: '#0F1E3C', marginBottom: 12 }}>{step.title}</h3>
                  <p className="body-sm" style={{ color: '#64748b', lineHeight: 1.75 }}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/contact" className="btn btn-primary" id="how-it-works-cta" style={{ gap: 8 }}>
            Get Started <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
