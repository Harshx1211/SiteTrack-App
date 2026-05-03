import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'UMA Building Services | Fire Safety & Building Compliance',
    template: '%s | UMA Building Services',
  },
  description:
    'UMA Building Services delivers professional fire safety inspections, routine maintenance and defect repairs for commercial and industrial properties across Australia. Powered by purpose-built digital reporting.',
  keywords: [
    'fire safety inspection',
    'building compliance',
    'routine maintenance',
    'defect repair',
    'fire extinguisher inspection',
    'emergency lighting',
    'building services Australia',
    'UMA Building Services',
  ],
  openGraph: {
    title: 'UMA Building Services | Fire Safety & Building Compliance',
    description:
      'Professional fire safety inspections, routine maintenance and defect repairs with digital reporting.',
    type: 'website',
    locale: 'en_AU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main className="animate-page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
