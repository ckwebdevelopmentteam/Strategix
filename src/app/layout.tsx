import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics/Analytics';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Healthcare Consultants Dubai | Strategix UAE – End-to-End Healthcare Setup',
  description:
    'Strategix UAE is a leading healthcare consultancy in Dubai providing turnkey healthcare project management, DHA/DOH/MOH licensing, clinic & hospital setup, and business analysis reports for healthcare investors across the UAE.',
  keywords:
    'Healthcare Consultants Dubai, Healthcare Business Setup UAE, Healthcare Licensing UAE, Clinic Setup Dubai, Hospital Consultancy UAE, DHA Licensing Consultants',
  icons: {
    icon: '/fav.png',
  },
  openGraph: {
    title: 'Healthcare Consultants Dubai | Strategix UAE',
    description:
      'Leading turnkey healthcare project management consultancy in UAE. End-to-end solutions for clinics, hospitals, pharmacies and more.',
    url: 'https://landing.strategixuae.com/',
    siteName: 'Strategix UAE',
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = "GTM-KBPXN4T6";

  return (
    <html lang="en" className={poppins.variable}>
      <head>
      </head>
      <body className="font-sans bg-dark text-[#B5B5B5] overflow-x-hidden">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
        <Analytics />
        {children}
      </body>

    </html>
  );
}
