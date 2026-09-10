import type { Metadata } from 'next';
import LegalPage from '../legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy | HiVaulted',
  description: 'How HiVaulted collects, uses, shares, and protects your information.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage eyebrow="Your privacy" title="Privacy Policy" effectiveDate="June 12, 2025">
      <p>HiVaulted LLC (“HiVaulted,” “we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website, platform, and related services.</p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following types of personal information when you interact with HiVaulted:</p>
      <ul>
        <li>Contact information, including your name, email address, and phone number</li>
        <li>Business details, including branding elements, social media handles, and content preferences</li>
        <li>Usage data, including page views, features used, and time on the platform</li>
        <li>Media uploads, including photos, logos, or other content you provide for post creation</li>
      </ul>
      <p>Some of this information is collected automatically through cookies or third-party tools.</p>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Deliver and personalize our services</li>
        <li>Generate and send post previews, captions, and recommendations</li>
        <li>Communicate with you about approvals, reminders, brand setup, content updates, and important service announcements</li>
        <li>Provide customer support</li>
        <li>Monitor platform performance and improve features</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>

      <h2>3. Text Messaging and Email Communications</h2>
      <p>Text and email communication is a core part of the HiVaulted experience. By using our platform, you consent to receive transactional messages related to post approvals, scheduling, and service alerts, along with occasional promotional updates where an opt-out is available.</p>
      <p>Text messages are delivered through Twilio. Standard message and data rates may apply. You may opt out at any time by replying STOP to a text or updating your communication preferences.</p>

      <h2>4. Third-Party Services and APIs</h2>
      <p>We integrate with third-party services to provide platform functionality, including Meta and Instagram APIs, LinkedIn, OpenAI, Twilio, Stripe, PayPal, and Apple Pay. These providers may collect information subject to their own privacy policies. We do not control or assume responsibility for their use of your information.</p>

      <h2>5. Data Sharing and Security</h2>
      <p>We do not sell your personal information. We share data only with third parties needed to operate the platform or comply with the law. We use appropriate safeguards to protect your information, but no system can be completely secure, and use of the platform is at your own risk.</p>

      <h2>6. Your Rights and Choices</h2>
      <p>You may access or update your information, request deletion of your account or data, opt out of promotional messages, or contact us with questions. To exercise these rights, email <a href="mailto:hello@hivaulted.com">hello@hivaulted.com</a>.</p>

      <h2>7. Children’s Privacy</h2>
      <p>HiVaulted is not designed for individuals under 13, and we do not knowingly collect personal information from children.</p>

      <h2>8. Policy Updates</h2>
      <p>We may update this Privacy Policy from time to time. Updates will be posted here with a revised effective date. Significant changes may also be communicated through email or platform notices.</p>

      <h2>9. Contact Us</h2>
      <p>Questions about this policy may be sent to <a href="mailto:hello@hivaulted.com">hello@hivaulted.com</a>.</p>
    </LegalPage>
  );
}
