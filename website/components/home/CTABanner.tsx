import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="cta-banner" style={{
      background: 'linear-gradient(135deg, #0F1E3C 0%, #1B2D4F 60%, #243a65 100%)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
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
        <h2 className="heading-lg" style={{ color: 'white', marginBottom: 18, maxWidth: 600, margin: '0 auto 18px' }}>
          Ready to Get Your Property Serviced?
        </h2>
        <p className="body-lg" style={{ color: 'rgba(255,255,255,0.62)', maxWidth: 500, margin: '0 auto 40px' }}>
          Send us an enquiry and we&apos;ll be in touch to discuss your site&apos;s service requirements.
        </p>
        <Link href="/contact" id="cta-banner-enquire" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
          Send an Enquiry <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
