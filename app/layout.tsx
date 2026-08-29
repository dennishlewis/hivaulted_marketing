import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hivaulted.com'),
  title: 'HiVaulted | Social media, handled for small business',
  description: 'HiVaulted turns your everyday business moments into polished social posts, so your business stays visible without social media becoming another job.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Your business keeps showing up. You don’t have to.',
    description: 'Social media support for busy small-business owners. Send what you have. HiVaulted turns it into a polished post.',
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
