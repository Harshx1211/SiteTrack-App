import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="cta-banner" style={{
      background: 'linear-gradient(135deg, #0F1E3C 0%, #1B2D4F 60%, #243a65 100%)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'rgba(249,115,22,0.10)', filter: 'blur(80px)',
        top: '-100px', right: '-80px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: 'rgba(249,115,22,0.07)', filter: 'blur(60px)',
        bottom: '-80px', left: '10%', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 16px', marginBottom: 24,
          background: 'rgba(249,115,22,0.15)',
          border: '1px solid rgba(249,115,22,0.25)',
          borderRadius: 999,
        }}>
          <Mail size={13} color="#F97316" />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#fdba74' }}>
            Get In Touch
          </span>
        </div>

        <h2 className="heading-lg" style={{ color: 'white', marginBottom: 18, maxWidth: 600, margin: '0 auto 18px' }}>
          Ready to Get Your Property Serviced?
        </h2>
        <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 40px' }}>
          Send us an enquiry and we&apos;ll be in touch to discuss scheduling a routine service or defect repair visit for your site.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 14 }}>
          <Link href="/contact" id="cta-banner-enquire" className="btn btn-primary" style={{ gap: 8, fontSize: 16, padding: '14px 32px' }}>
            Enquire Now <ArrowRight size={18} />
          </Link>
          <Link href="/services" id="cta-banner-services" className="btn btn-outline" style={{ fontSize: 16, padding: '14px 32px' }}>
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
