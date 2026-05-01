'use client';
import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Routine Service — Monthly',
  'Routine Service — 3 Monthly',
  'Routine Service — 6 Monthly',
  'Routine Service — Annual',
  'Routine Service — 5 Yearly',
  'Quote / Defect Repair',
  'Not Sure — Need Advice',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service_type: '',
    property_address: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm({ name: '', company: '', email: '', phone: '', service_type: '', property_address: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <>
      {/* Hero */}
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
            <Mail size={13} color="#F97316" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#fdba74' }}>
              Contact Us
            </span>
          </div>
          <h1 className="heading-xl" style={{ color: 'white', marginBottom: 16, maxWidth: 560 }}>
            Get In Touch
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520 }}>
            Send us an enquiry and we&apos;ll get back to you to discuss your property&apos;s service needs.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 48,
            alignItems: 'start',
          }}>

            {/* Left — Info */}
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0F1E3C', marginBottom: 8 }}>Enquiry Details</h2>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 32 }}>
                Fill in the form with as much detail as possible about your property and service requirements, and we&apos;ll be in touch.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(249,115,22,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Mail size={18} color="#F97316" />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#0F1E3C', marginBottom: 3 }}>Email</p>
                    <a href="mailto:info@umabuildingservices.com.au"
                      style={{ fontSize: 14, color: '#64748b', transition: 'color 200ms' }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#F97316'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#64748b'}
                    >
                      info@umabuildingservices.com.au
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(27,45,79,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <MapPin size={18} color="#1B2D4F" />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#0F1E3C', marginBottom: 3 }}>Location</p>
                    <p style={{ fontSize: 14, color: '#64748b' }}>Australia</p>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div style={{
                marginTop: 40, background: '#0F1E3C',
                borderRadius: 16, padding: 24,
              }}>
                <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>
                  What Happens Next
                </p>
                {[
                  'We receive and review your enquiry',
                  'We contact you to discuss your requirements',
                  'We schedule a service visit for your site',
                  'Your job is created in our system',
                ].map((step, i) => (
                  <div key={step} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '10px 0',
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'rgba(249,115,22,0.20)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      fontSize: 11, fontWeight: 800, color: '#F97316',
                    }}>
                      {i + 1}
                    </div>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div style={{
              background: 'white',
              borderRadius: 24,
              border: '1px solid #e2e8f0',
              padding: 40,
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'rgba(34,197,94,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                    <CheckCircle size={36} color="#22c55e" />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F1E3C', marginBottom: 12 }}>
                    Enquiry Received!
                  </h3>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, maxWidth: 360, margin: '0 auto 28px' }}>
                    Thank you for getting in touch. We&apos;ll review your details and contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn btn-navy"
                    style={{ fontSize: 14 }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="enquiry-form">
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0F1E3C', marginBottom: 24 }}>
                    Service Enquiry
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inp-name">Full Name *</label>
                      <input id="inp-name" className="form-input" placeholder="Your name"
                        value={form.name} onChange={e => set('name', e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inp-company">Company / Organisation</label>
                      <input id="inp-company" className="form-input" placeholder="Your company"
                        value={form.company} onChange={e => set('company', e.target.value)} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inp-email">Email Address *</label>
                      <input id="inp-email" type="email" className="form-input" placeholder="you@company.com"
                        value={form.email} onChange={e => set('email', e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inp-phone">Phone Number</label>
                      <input id="inp-phone" type="tel" className="form-input" placeholder="04XX XXX XXX"
                        value={form.phone} onChange={e => set('phone', e.target.value)} />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inp-service">Service Required</label>
                      <select id="inp-service" className="form-input"
                        value={form.service_type} onChange={e => set('service_type', e.target.value)}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Select a service type…</option>
                        {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inp-address">Property Address</label>
                      <input id="inp-address" className="form-input" placeholder="Property address or suburb"
                        value={form.property_address} onChange={e => set('property_address', e.target.value)} />
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inp-message">Message *</label>
                      <textarea id="inp-message" className="form-input" rows={5}
                        placeholder="Tell us about your property, what you need serviced, any specific requirements…"
                        value={form.message} onChange={e => set('message', e.target.value)}
                        required
                        style={{ resize: 'vertical', minHeight: 120 }}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '12px 16px', borderRadius: 10,
                      background: '#fef2f2', border: '1px solid #fecaca',
                      marginBottom: 16,
                    }}>
                      <AlertCircle size={16} color="#ef4444" />
                      <span style={{ fontSize: 14, color: '#ef4444' }}>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    id="enquiry-submit-btn"
                    disabled={status === 'sending'}
                    className="btn btn-primary"
                    style={{ width: '100%', gap: 8, fontSize: 15, padding: '14px 0', opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    {status === 'sending' ? (
                      <><Loader size={17} className="animate-spin-slow" /> Sending Enquiry…</>
                    ) : (
                      <><Send size={17} /> Send Enquiry</>
                    )}
                  </button>

                  <p style={{ fontSize: 12, color: '#94a3b8', textAlign: 'center', marginTop: 14 }}>
                    We&apos;ll respond to your enquiry as soon as possible.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #contact-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            .form-two-col { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
