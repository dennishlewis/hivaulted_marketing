import Image from 'next/image';
import Link from 'next/link';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
};

export default function LegalPage({ eyebrow, title, effectiveDate, children }: LegalPageProps) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link href="/" aria-label="HiVaulted home"><Image src="/hivaulted-logo.png" alt="HiVaulted" width={1000} height={271} priority /></Link>
        <Link className="button button-small" href="https://app.hivaulted.com/">Open HiVaulted</Link>
      </header>
      <section className="legal-hero">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>Effective Date: {effectiveDate}</p>
      </section>
      <article className="legal-content">{children}</article>
      <footer className="legal-footer">
        <span>© 2026 HiVaulted™. All rights reserved.</span>
        <nav aria-label="Legal navigation"><Link href="/">Home</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-conditions">Terms of Service</Link></nav>
      </footer>
    </main>
  );
}
