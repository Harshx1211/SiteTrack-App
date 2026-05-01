import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'UMA Building Services | Fire Safety & Building Compliance',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <CTABanner />
    </>
  );
}
