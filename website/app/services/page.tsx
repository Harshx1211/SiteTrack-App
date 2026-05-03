import type { Metadata } from 'next';
import { CalendarClock, Wrench, CheckCircle, FileText, CheckSquare, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'UMA Building Services offers routine maintenance inspections at monthly, 3-monthly, 6-monthly, annual and 5-yearly frequencies, plus quote and defect repair services.',
};

const SERVICE_DETAIL = [
  {
    id: 'svc-routine-service',
    icon: CalendarClock,
    color: '#F97316',
    bg: 'rgba(249,115,22,0.08)',
    tag: 'Routine Service',
    title: 'Routine Maintenance Inspections',
    body: 'We carry out scheduled maintenance inspections of fire safety assets and building systems at a frequency agreed with the client. Available schedules are:',
    frequencies: [
      { label: 'Monthly',   detail: 'Suitable for high-traffic sites requiring frequent compliance checks.' },
      { label: '3-Monthly', detail: 'Quarterly inspections covering periodic checks at 3-month intervals.' },
      { label: '6-Monthly', detail: 'Bi-annual visits for sites that require half-yearly service.' },
      { label: 'Annual',    detail: 'Comprehensive yearly inspections with full digital service report.' },
      { label: '5-Yearly',  detail: 'Major periodic inspections at 5-year intervals as required.' },
    ],
    what: [
      'On-site attendance by an assigned technician',
      'Per-asset inspection — Pass / Fail logged for each item',
      'Photo evidence captured where required',
      'Defects identified, classified by severity, and recorded',
      'Digital PDF service report generated at job completion',
      'Client signature collected at end of service',
    ],
  },
  {
    id: 'svc-defect-repair',
    icon: Wrench,
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
    tag: 'Defect Repair',
    title: 'Quote & Defect Repair',
    body: 'When defects are identified — either during a routine inspection or reported by the client — we arrange a site visit to assess and quote the rectification work. Upon quote approval, our technician carries out the repair.',
    frequencies: null,
    what: [
      'Site visit to assess the defect',
      'Formal quote provided for the repair work',
      'Repair carried out upon approval',
      'Defect status updated in our system',
      'Digital report updated to reflect the repair',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        .svc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Page hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1E3C 0%, #1B2D4F 100%)',
        padding: '130px 0 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(249,115,22,0.10)', filter: 'blur(80px)',
          top: '-80px', right: '-60px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', marginBottom: 20,
            background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.25)',
            borderRadius: 999,
          }}>
            <CheckSquare size={13} color="#F97316" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#fdba74' }}>
              What We Do
            </span>
          </div>
          <h1 className="heading-xl" style={{ color: 'white', marginBottom: 16, maxWidth: 600 }}>
            Our Services
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 540 }}>
            Routine maintenance inspections and defect repair services for commercial and industrial properties, managed through our own digital platform.
          </p>
        </div>
      </section>

      {/* Service Detail Sections */}
      {SERVICE_DETAIL.map((svc, idx) => {
        const Icon = svc.icon;
        return (
          <section key={svc.id} id={svc.id} className="section"
            style={{ background: idx % 2 === 0 ? 'white' : '#F8FAFC' }}>
            <div className="container">
              <div className="svc-grid">
                {/* Left */}
                <div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '5px 14px', background: svc.bg,
                    borderRadius: 999, marginBottom: 20,
                  }}>
                    <Icon size={13} color={svc.color} />
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: svc.color }}>
                      {svc.tag}
                    </span>
                  </div>

                  <h2 className="heading-md" style={{ color: '#0F1E3C', marginBottom: 16 }}>{svc.title}</h2>
                  <p className="body-md" style={{ color: '#64748b', marginBottom: 24 }}>{svc.body}</p>

                  {svc.frequencies && (
                    <div style={{ marginBottom: 32 }}>
                      {svc.frequencies.map(f => (
                        <div key={f.label} style={{
                          display: 'flex', gap: 14, padding: '14px 0',
                          borderBottom: '1px solid #e2e8f0',
                        }}>
                          <div style={{
                            display: 'flex', alignItems: 'center', gap: 6,
                            padding: '4px 12px', borderRadius: 999,
                            background: 'rgba(249,115,22,0.10)', flexShrink: 0,
                          }}>
                            <Clock size={12} color="#F97316" />
                            <span style={{ fontSize: 13, fontWeight: 700, color: '#ea6900' }}>{f.label}</span>
                          </div>
                          <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{f.detail}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* No inline CTA — contact is in footer/CTA banner */}
                </div>

                {/* Right — what's included */}
                <div style={{
                  background: '#0F1E3C',
                  borderRadius: 20, padding: 36,
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: -40, right: -40,
                    width: 200, height: 200, borderRadius: '50%',
                    background: 'rgba(249,115,22,0.10)', filter: 'blur(40px)',
                  }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: svc.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={20} color={svc.color} />
                      </div>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 2 }}>Included</p>
                        <p style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>What You Get</p>
                      </div>
                    </div>
                    {svc.what.map(item => (
                      <div key={item} style={{
                        display: 'flex', alignItems: 'flex-start', gap: 12,
                        padding: '11px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

    </>
  );
}
