import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { WhatsAppButton } from '@/components/whatsapp-button';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Seimitsu Electronic - Custom Coil Winding & Precision Electronic Manufacturing',
  description:
    'ISO 9001:2015 certified custom coils, transformers, inductors, and PCB assemblies engineered for repeatable performance—from prototype to mass production.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#06101e] text-slate-100 selection:bg-orange-500/25 selection:text-orange-200">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
