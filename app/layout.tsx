import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hivaulted.com'),
  title: 'HiVaulted | Social media, handled for small business',
  description: 'HiVaulted creates, brands, schedules, and publishes social posts for busy small-business owners—with your approval and without another complicated routine.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Your business keeps showing up. You don’t have to.',
    description: 'Send a photo or a few words. HiVaulted turns them into branded, scheduled social posts for your small business.',
    url: '/',
    siteName: 'HiVaulted',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Your business keeps showing up. Social media, handled.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiVaulted | Social media, handled',
    description: 'Your business stays visible without social media becoming another job.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
