import type { Metadata } from 'next';
import LegalPage from '../legal-page';

export const metadata: Metadata = {
  title: 'Terms of Service | HiVaulted',
  description: 'Terms governing use of the HiVaulted website, platform, and related services.',
  alternates: { canonical: '/terms-conditions' },
};

export default function TermsOfService() {
  return (
    <LegalPage eyebrow="The ground rules" title="Terms of Service" effectiveDate="June 12, 2025">
      <p>Welcome to HiVaulted. These Terms of Service (“Terms”) govern your use of HiVaulted LLC’s (“HiVaulted,” “we,” “our,” or “us”) website, platform, and related services.</p>
      <p>By accessing or using HiVaulted, you agree to these Terms. If you do not agree, do not use our services.</p>

      <h2>1. Overview of Services</h2>
      <p>HiVaulted provides an AI-powered platform that helps businesses generate, manage, and schedule social media content through caption tools, brand personalization, and text- and email-based submission and approval workflows.</p>

      <h2>2. User Accounts</h2>
      <p>To use certain features, you must create an account and provide accurate contact information, including your email address and phone number. You are responsible for keeping your account secure and for all activity under it. You must be at least 18 years old to use HiVaulted.</p>

      <h2>3. Communication Consent</h2>
      <p>By using HiVaulted, you consent to receive email and SMS communications including post previews and approvals, scheduling alerts, account notices, support messages, and optional marketing updates. Texts are delivered through Twilio. You can opt out of non-essential SMS messages at any time by replying STOP.</p>

      <h2>4. Use of AI and Third-Party Integrations</h2>
      <p>HiVaulted uses OpenAI to generate captions, suggestions, and branded content. Generated content may be imperfect and may require review. You are responsible for reviewing AI-generated content before publication.</p>
      <p>We also integrate with Meta and Instagram APIs, LinkedIn, Twilio, Stripe, PayPal, and Apple Pay. When using these features, you also agree to the applicable third-party terms.</p>

      <h2>5. User Content</h2>
      <p>You retain ownership of content you upload or submit. By using our services, you grant HiVaulted a license to process, display, and publish that content as needed to provide the social media functions you request.</p>
      <p>You are responsible for reviewing and approving content before it is posted, ensuring that you have the rights to submitted media, logos, and captions, and complying with applicable social-platform terms. We may refuse or remove content that violates laws, third-party rights, or our guidelines.</p>

      <h2>6. Payment and Billing</h2>
      <p>HiVaulted is a paid subscription service. You agree to provide accurate payment information and authorize recurring charges to your selected payment method unless canceled. Pricing, billing terms, and renewal policies will be communicated during signup.</p>

      <h2>7. Prohibited Conduct</h2>
      <p>You may not use HiVaulted for unlawful, harmful, or deceptive purposes; attempt to reverse engineer or copy platform functionality; submit violent, discriminatory, harassing, or infringing content; or misuse the platform for spam or unauthorized advertising. Violations may result in account suspension or termination.</p>

      <h2>8. Service Availability</h2>
      <p>We work to provide a reliable platform but do not guarantee uninterrupted service. We may update, change, or suspend features at any time, including during beta or pre-launch periods.</p>

      <h2>9. Disclaimers</h2>
      <p>HiVaulted provides its services “as is” and disclaims all express or implied warranties, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee business outcomes from social media content generated through the platform.</p>

      <h2>10. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, HiVaulted LLC will not be liable for indirect, incidental, special, or consequential damages, including loss of revenue, profits, or data arising from use of the platform.</p>

      <h2>11. Termination</h2>
      <p>You may cancel your account at any time. We may suspend or terminate access if you violate these Terms or misuse the platform.</p>

      <h2>12. Changes to These Terms</h2>
      <p>We may update these Terms. When we do, we will revise the effective date and may notify you by email or within the platform. Continued use after an update constitutes acceptance of the revised Terms.</p>

      <h2>13. Contact</h2>
      <p>Questions about these Terms may be sent to <a href="mailto:hello@hivaulted.com">hello@hivaulted.com</a>.</p>
    </LegalPage>
  );
}
