import Image from 'next/image';
import DemoTool from './demo-tool';

const transformations = [
  ['Stay visible through busy weeks', 'Your business keeps showing up, even when posting never makes today’s list.'],
  ['Look polished everywhere', 'Every post follows your voice, colors, and style—without you opening a design tool.'],
  ['Make more of what already happens', 'A delivery, a happy customer, or today’s special becomes useful marketing.'],
  ['Keep the final say', 'Approve, request a change, or let trusted content publish automatically.'],
];

const faqs = [
  ['Do I need to know anything about social media?', 'Not at all. HiVaulted is built for business owners who would rather focus on their actual work. Send a photo or a few words and we handle the post.'],
  ['Will the posts sound like me?', 'Yes. HiVaulted learns your tone, business, colors, and preferences so the finished content feels like your brand—not generic AI copy.'],
  ['Do posts publish without my approval?', 'Only if you want them to. Approve every post, request edits, or choose automatic publishing once you feel comfortable.'],
  ['Where can I publish?', 'HiVaulted is designed to help you stay active on Instagram, Facebook, and LinkedIn from one simple workflow.'],
  ['Do I have to learn another complicated tool?', 'No. You can send ideas and review posts through familiar channels like text and email. The dashboard is there when you want the bigger picture.'],
  ['What if I have nothing to send?', 'That is part of the point. HiVaulted can help keep your presence moving even when you do not have a fresh photo or idea ready.'],
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="site-header">
        <a href="#top" aria-label="HiVaulted home" className="brand-link"><Image src="/hivaulted-horizontal.svg" alt="HiVaulted" width={244} height={52} priority /></a>
        <nav aria-label="Primary navigation"><a href="#product">The product</a><a href="#how-it-works">How it works</a><a href="#demo">Try it</a><a href="#pricing">Pricing</a></nav>
        <a className="button button-small" href="https://app.hivaulted.com/">Get started</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Your behind-the-scenes social team</p>
          <h1>Send a moment.<br/><em>Get a month of momentum.</em></h1>
          <p className="hero-lede">HiVaulted creates, brands, schedules, and publishes social posts for your small business—with your approval and without another complicated routine.</p>
          <div className="hero-actions"><a className="button" href="#demo">Make a sample post <span aria-hidden="true">→</span></a><a className="text-link" href="#product">See the product</a></div>
          <ul className="reassurance"><li><b>✓</b> Instagram, Facebook &amp; LinkedIn</li><li><b>✓</b> Built around your brand</li><li><b>✓</b> You approve the work</li></ul>
        </div>
        <div className="hero-product" aria-label="HiVaulted post review workspace">
          <div className="hero-product-glow" />
          <Image src="/product/northstar/07-post-preview.webp" alt="HiVaulted Post Preview showing a branded Instagram post ready to review and approve" width={1440} height={900} priority />
          <div className="product-float float-ready"><span>✓</span><p><strong>Review. Edit. Approve.</strong><small>The final say stays yours</small></p></div>
          <div className="product-float float-platforms"><b>f</b><b>◎</b><b>in</b><small>One calm place</small></div>
        </div>
      </section>

      <section className="outcome-strip" aria-label="What HiVaulted helps you accomplish"><span>Stay visible</span><i>✦</i><span>Look professional</span><i>✦</i><span>Remain top of mind</span><i>✦</i><span>Get your time back</span></section>

      <section className="product-section" id="product">
        <div className="product-intro">
          <div><p className="eyebrow"><span /> A look inside</p><h2>Not another tool to manage.<br/><em>A clearer way to stop managing social.</em></h2></div>
          <p>Open HiVaulted when you want the full picture: what is planned, what needs your approval, and what has already gone out. Everything else can happen through the familiar channels you already use.</p>
        </div>
        <div className="dashboard-frame"><div className="frame-bar"><i/><i/><i/><span>HiVaulted posts workspace</span></div><Image src="/product/northstar/02-posts.webp" alt="HiVaulted Posts workspace showing branded social posts ready for review and approval" width={1440} height={900} /></div>
        <div className="product-details">
          <article><div className="product-detail-image"><Image src="/product/northstar/01-brand.webp" alt="HiVaulted Brand workspace" width={1440} height={900} /></div><span>01 · Your brand</span><h3>Teach it once</h3><p>Your story, visual identity, voice, audience, and content preferences guide every post.</p></article>
          <article><div className="product-detail-image"><Image src="/product/northstar/03-calendar.webp" alt="HiVaulted monthly content calendar" width={1440} height={900} /></div><span>02 · Your schedule</span><h3>See what is happening</h3><p>Review what is planned across Instagram, Facebook, and LinkedIn in one calm calendar.</p></article>
          <article><div className="product-detail-image"><Image src="/product/northstar/04-media.webp" alt="HiVaulted media library" width={1440} height={900} /></div><span>03 · Your media</span><h3>Keep the good stuff ready</h3><p>Your approved images stay organized and ready to become the next polished post.</p></article>
        </div>
        <p className="product-caption">Current Northstar interface shown with representative sample business content.</p>
      </section>

      <section className="problem-section">
        <div className="problem-lead"><p className="eyebrow"><span /> Built for real business days</p><h2>You’re not bad at social media.<br/><em>It’s just not your actual job.</em></h2></div>
        <div className="problem-copy"><p>Your customers need to see you. But between serving them, managing the books, answering messages, and doing the work itself, “make a post” keeps sliding to tomorrow.</p><p><strong>HiVaulted closes that gap.</strong> No midnight caption writing. No hashtag roulette. No five-tab circus. Just a steady, professional presence that does not depend on your spare time.</p></div>
      </section>

      <section className="steps-section" id="how-it-works">
        <div className="section-heading"><p className="eyebrow"><span /> From your day to their feed</p><h2>Give us the spark.<br/>We handle the posting.</h2><p>Use HiVaulted as lightly as you want. A photo and a sentence are enough to get moving.</p></div>
        <div className="journey-grid">
          {[
            ['/product/step-1.webp','01','Capture it','Take a photo of what is already happening in your business.'],
            ['/product/step-2.webp','02','Add a few words','Tell us what matters. A polished brief is definitely not required.'],
            ['/product/step-3.webp','03','Get a finished post','HiVaulted shapes the image and caption around your brand.'],
            ['/product/step-4.webp','04','Approve and move on','Give it a quick yes, ask for a change, or let it publish.'],
          ].map(([src, number, title, copy]) => <article key={number}><div className="journey-image"><Image src={src} alt={`${title} in the HiVaulted workflow`} width={1200} height={676} /></div><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <div className="tiny-promise"><b>From your phone.</b><span>•</span>No design software.<span>•</span>No blank caption box.</div>
      </section>

      <section className="demo-section" id="demo"><div className="section-heading demo-heading"><p className="eyebrow"><span /> Try the actual idea</p><h2>See what your business<br/>could post next.</h2><p>Choose your business, add a few words, and watch one more thing come off your plate.</p></div><DemoTool /><p className="demo-privacy">No account needed. Your image and message are used only to create this demo post.</p></section>

      <section className="transformation-section"><div className="transformation-heading"><p className="eyebrow light"><span /> What changes</p><h2>Social stops nagging you.<br/><em>Your business keeps showing up.</em></h2></div><div className="transformation-grid">{transformations.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="control-section"><div className="control-visual"><div className="message-bubble bubble-a"><span>H</span><p>Your Saturday post is ready. Want to send it?</p></div><div className="message-bubble bubble-b"><p>Make the first line warmer.</p></div><div className="message-bubble bubble-c"><span>H</span><p>Done. Approve this version?</p></div><Image className="approve-sticker" src="/product/just-approve.webp" alt="Just approve" width={441} height={159} /></div><div className="control-copy"><p className="eyebrow"><span /> Your brand. Your call.</p><h2>Hand off the work.<br/><em>Keep the judgment.</em></h2><p>HiVaulted removes the production work, not your control. Review by text or email, ask for changes like you would ask a person, and automate only when you trust the rhythm.</p><ul><li><b>✓</b> Your voice and visual identity built in</li><li><b>✓</b> Plain-English edits—no designer required</li><li><b>✓</b> Approval settings you can change anytime</li></ul></div></section>

      <section className="included-section"><div><p className="eyebrow"><span /> What HiVaulted handles</p><h2>The work between<br/>“we should post” and “it’s live.”</h2></div><div className="included-grid">{['Brand setup and voice','Post ideas when yours run dry','Image and caption creation','Approvals by text or email','Content scheduling','Publishing across key platforms'].map(item => <p key={item}><b>✓</b>{item}</p>)}</div></section>

      <section className="award-section"><div className="award-medal">2026<span>AI</span></div><div><p className="eyebrow"><span /> Recognized innovation</p><h2>Built by someone who understands what busy business owners are up against.</h2><p>HiVaulted founder Anne Archer was named 2026 AI Innovator of the Year for the Minnesota/Wisconsin region of Coldwell Banker Realty.</p><small>Awarded to Anne Archer. Independent of Coldwell Banker Realty.</small></div></section>

      <section className="pricing-section" id="pricing"><div className="section-heading"><p className="eyebrow"><span /> Pre-launch pricing</p><h2>Choose how you want<br/>to get social handled.</h2><p>Both options include hands-on setup, your brand voice, and the same easier way to stay visible.</p></div><div className="pricing-grid"><article className="price-card"><p className="plan-kicker">Flexible</p><h3>Monthly pre-launch</h3><div className="price-label">Founding rate</div><p>Start simply and keep things month to month.</p><ul><li>✓ Branded, ready-to-post content</li><li>✓ Caption and image creation</li><li>✓ Approval by text or email</li><li>✓ Hands-free scheduling</li></ul><a href="https://app.hivaulted.com/">See current monthly rate <span>→</span></a></article><article className="price-card featured"><div className="popular-tag">Best pre-launch value</div><p className="plan-kicker">Commit and save</p><h3>Annual pre-launch</h3><div className="price-label">Lowest founding rate</div><p>Make consistent visibility part of the business for the year.</p><ul><li>✓ Everything in monthly</li><li>✓ Best available launch rate</li><li>✓ Priority onboarding support</li><li>✓ One less monthly decision</li></ul><a href="https://app.hivaulted.com/">See current annual rate <span>→</span></a></article></div><p className="pricing-note">Pre-launch availability is limited. Exact current rates are shown during account setup.</p></section>

      <section className="faq-section"><div><p className="eyebrow"><span /> Good questions</p><h2>The things you’re probably wondering.</h2><p>Still curious? Write to <a href="mailto:hello@hivaulted.com">hello@hivaulted.com</a>. A real person will get back to you.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta"><div><p className="eyebrow light"><span /> Your business has enough to do</p><h2>Be worth remembering.<br/><em>Without remembering to post.</em></h2><p>Give HiVaulted a moment from your day. Get a polished, consistent social presence back.</p><div><a className="button button-green" href="https://app.hivaulted.com/">Take social off my plate <span>→</span></a><a href="#demo">Or make a sample post</a></div></div><div className="cta-stamp">POST<br/><span>SMARTER</span><small>RISE HIGHER</small></div></section>

      <footer><div className="footer-brand-row"><div><a href="#top" className="footer-logo"><Image src="/hivaulted-horizontal.svg" alt="HiVaulted" width={244} height={52} /></a><p>Social media support for people who would rather be doing their actual work.</p></div><div className="footer-recognition"><span>Founder award recognition</span><div><Image src="/coldwell-banker-logo.webp" alt="Coldwell Banker Realty" width={360} height={432} /></div></div></div><nav><a href="#product">The product</a><a href="#how-it-works">How it works</a><a href="#demo">Demo</a><a href="#pricing">Pricing</a><a href="mailto:hello@hivaulted.com">Contact</a><a href="https://www.hivaulted.com/privacy-policy">Privacy</a><a href="https://www.hivaulted.com/terms-conditions">Terms</a></nav><div className="footer-bottom"><span>© 2026 HiVaulted™. All rights reserved.</span><span>Customized by you. Powered by thoughtful AI.</span></div></footer>
    </main>
  );
}
