import type { Metadata } from 'next';
import Link from 'next/link';
import { Smartphone, FileBarChart2, Building2, Users, ArrowRight, Target, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'UMA Building Services is a building maintenance company delivering routine fire safety inspections and defect repair services, tracked through our own digital platform.',
};

const PLATFORM_FEATURES = [
  'Mobile app used by technicians on-site',
  'Per-asset inspection logging (Pass / Fail)',
  'Photo evidence capture during jobs',
  'Client signature collection at completion',
  'Digital PDF report generated per job',
  'Real-time job and compliance status tracking',
  'Defect management with severity classification',
  'Multi-property site register',
];

const WHAT_WE_MANAGE = [
  { icon: Building2,    label: 'Properties',         desc: 'Client sites registered with full asset registers and compliance status.' },
  { icon: Users,        label: 'Technicians',         desc: 'Field technicians assigned jobs via our platform with real-time updates.' },
  { icon: Smartphone,   label: 'Mobile Inspections',  desc: 'Technicians log results on-site using our custom mobile application.' },
  { icon: FileBarChart2,label: 'Digital Reports',     desc: 'PDF service reports generated and stored for every completed job.' },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .about-cta-link:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(249,115,22,0.46) !important; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

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
            <Building2 size={13} color="#F97316" />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#fdba74' }}>
              Who We Are
            </span>
          </div>
          <h1 className="heading-xl" style={{ color: 'white', marginBottom: 16, maxWidth: 600 }}>
            About UMA Building Services
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560 }}>
            A building maintenance company that carries out routine fire safety inspections and defect repairs, backed by our own purpose-built digital tracking platform.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="heading-md" style={{ color: '#0F1E3C', marginBottom: 20 }}>
                Building Maintenance, Done Digitally
              </h2>
              <p className="body-md" style={{ color: '#64748b', marginBottom: 16, lineHeight: 1.8 }}>
                UMA Building Services was established to provide reliable, accountable building maintenance services for commercial and industrial property owners. We focus specifically on routine fire safety inspections and defect repair services.
              </p>
              <p className="body-md" style={{ color: '#64748b', marginBottom: 16, lineHeight: 1.8 }}>
                What sets us apart is that we manage our entire operation through our own custom-built digital platform — a system we developed specifically for our workflow. Our technicians use a dedicated mobile app to log inspection results, capture photos, and generate PDF reports on-site.
              </p>
              <p className="body-md" style={{ color: '#64748b', lineHeight: 1.8 }}>
                This means every job we carry out produces a clear, structured digital record — giving our clients accurate documentation of what was inspected, what was found, and what was done.
              </p>
            </div>

            {/* What we manage */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {WHAT_WE_MANAGE.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{
                    background: '#F8FAFC', border: '1px solid #e2e8f0',
                    borderRadius: 16, padding: 22,
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: 'rgba(249,115,22,0.10)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 14,
                    }}>
                      <Icon size={20} color="#F97316" />
                    </div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#0F1E3C', marginBottom: 8 }}>{item.label}</p>
                    <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Platform */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="section-label" style={{ margin: '0 auto 20px', width: 'fit-content' }}>
              Our Platform
            </div>
            <h2 className="heading-md" style={{ color: '#0F1E3C', marginBottom: 16 }}>
              Purpose-Built Digital System
            </h2>
            <p className="body-md" style={{ color: '#64748b', maxWidth: 540, margin: '0 auto' }}>
              We built our own end-to-end platform — an admin portal, mobile app, and digital reporting engine — to manage all our operations. Here&apos;s what it tracks:
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #0F1E3C 0%, #1B2D4F 100%)',
            borderRadius: 24, padding: '48px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -60, right: -40,
              width: 280, height: 280, borderRadius: '50%',
              background: 'rgba(249,115,22,0.10)', filter: 'blur(60px)',
            }} />
            {PLATFORM_FEATURES.map((feat, i) => (
              <div key={feat} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '14px 16px',
                borderBottom: i < PLATFORM_FEATURES.length - 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#F97316', flexShrink: 0, marginTop: 6,
                }} />
                <span style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{
              width: 64, height: 64, borderRadius: 18,
              background: 'rgba(249,115,22,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <Target size={28} color="#F97316" />
            </div>
            <h2 className="heading-md" style={{ color: '#0F1E3C', marginBottom: 20 }}>Our Focus</h2>
            <p className="body-lg" style={{ color: '#64748b', lineHeight: 1.85, marginBottom: 36 }}>
              We are focused on delivering clear, accurate, and well-documented building maintenance services. Every job we carry out is recorded digitally — every asset checked, every defect logged, every report generated. That is our standard for every site we service.
            </p>
            <Link href="/contact" id="about-cta"
              className="about-cta-link"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 14, fontSize: 15, fontWeight: 700,
                background: '#F97316', color: 'white',
                boxShadow: '0 6px 20px rgba(249,115,22,0.35)',
                transition: 'all 200ms',
              }}
            >
              Work With Us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
