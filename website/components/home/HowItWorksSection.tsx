'use client';
import { useEffect, useRef } from 'react';
import { ClipboardList, SearchCheck, FileText } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: ClipboardList,
    color: '#F97316',
    bg: 'rgba(249,115,22,0.10)',
    title: 'Submit Your Enquiry',
    description:
      "Tell us about your property, its location, and the service you need. We'll review your details and get back to you promptly to discuss next steps.",
  },
  {
    num: '02',
    icon: SearchCheck,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.10)',
    title: 'We Schedule a Visit',
    description:
      'Once agreed, we schedule a technician visit at a time that suits you. Your property and job are registered in our system and the technician is notified.',
  },
  {
    num: '03',
    icon: FileText,
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.10)',
    title: 'Service & Digital Report',
    description:
      'Our technician carries out the service on-site, logs results for every asset, and generates a digital PDF service report at job completion.',
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
      { threshold: 0.12 }
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
          <p className="body-md" style={{ color: '#64748b', maxWidth: 500, margin: '0 auto' }}>
            From your first enquiry to a completed digital report — here&apos;s exactly what to expect.
          </p>
        </div>

        {/* Steps — with connector lines on desktop */}
        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div className="step-connector" style={{
            position: 'absolute',
            top: 40, left: 'calc(16.67% + 20px)', right: 'calc(16.67% + 20px)',
            height: 2,
            background: 'linear-gradient(90deg, rgba(249,115,22,0.3), rgba(59,130,246,0.3), rgba(34,197,94,0.3))',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28,
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
                    transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 130}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 130}ms`,
                    background: 'white',
                    borderRadius: 20,
                    padding: '32px 28px',
                    border: '1px solid #e2e8f0',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Watermark — fixed positioning inside overflow:hidden */}
                  <div style={{
                    position: 'absolute',
                    bottom: -16, right: 10,
                    fontSize: 100,
                    fontWeight: 900,
                    color: '#f1f5f9',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}>
                    {step.num}
                  </div>

                  {/* Icon circle */}
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: step.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20, position: 'relative', zIndex: 1,
                    border: `2px solid ${step.color}25`,
                  }}>
                    <Icon size={22} color={step.color} strokeWidth={2} />
                  </div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: 11, fontWeight: 800, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: step.color, marginBottom: 8,
                    }}>
                      Step {step.num}
                    </div>
                    <h3 className="heading-sm" style={{ color: '#0F1E3C', marginBottom: 12 }}>{step.title}</h3>
                    <p className="body-sm" style={{ color: '#64748b', lineHeight: 1.75 }}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-connector { display: none; }
          #how-it-works .container > div > div[style*='grid'] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
