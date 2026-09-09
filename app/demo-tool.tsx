'use client';

import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import Image from 'next/image';

type DemoImage = { thumbUrl: string; regularUrl: string; alt?: string };
type GeneratedPost = { Caption: string; Keywords: string };

const INDUSTRIES = [
  'Other / Not Listed', 'Agriculture & Farming', 'Arts & Creative Services', 'Automotive',
  'Beauty & Personal Care', 'Consumer Goods & Retail', 'Contracting & Home Improvement',
  'E-commerce & Online Shops', 'Education', 'Events & Experiences', 'Financial Services',
  'Fitness & Wellness', 'Food & Beverage', 'Healthcare & Pharmaceuticals', 'Home Services',
  'Hospitality & Tourism', 'Legal & Consulting Services', 'Nonprofit & Social Services',
  'Pet Services & Products', 'Real Estate Services',
];

const TONES = ['Signature', 'Friendly', 'Storytelling', 'Professional', 'Driven'];

const STARTER_IMAGES: DemoImage[] = [
  { thumbUrl: 'https://images.unsplash.com/photo-1558769673-de478227d1f5?auto=format&fit=crop&w=500&q=80', regularUrl: 'https://images.unsplash.com/photo-1558769673-de478227d1f5?auto=format&fit=crop&w=1200&q=85', alt: 'A colorful local business scene' },
  { thumbUrl: 'https://images.unsplash.com/photo-1577594955964-d50df414b8ff?auto=format&fit=crop&w=500&q=80', regularUrl: 'https://images.unsplash.com/photo-1577594955964-d50df414b8ff?auto=format&fit=crop&w=1200&q=85', alt: 'Everyday objects arranged for a social post' },
  { thumbUrl: 'https://images.unsplash.com/photo-1561651940-e0cc452dab1e?auto=format&fit=crop&w=500&q=80', regularUrl: 'https://images.unsplash.com/photo-1561651940-e0cc452dab1e?auto=format&fit=crop&w=1200&q=85', alt: 'Creative small business desk' },
  { thumbUrl: 'https://images.unsplash.com/photo-1677000239996-82b2c12774cb?auto=format&fit=crop&w=500&q=80', regularUrl: 'https://images.unsplash.com/photo-1677000239996-82b2c12774cb?auto=format&fit=crop&w=1200&q=85', alt: 'Lifestyle items for a business post' },
];

export default function DemoTool() {
  const [industry, setIndustry] = useState('Food & Beverage');
  const [tone, setTone] = useState('Friendly');
  const [message, setMessage] = useState('Fresh cinnamon rolls available Saturday morning');
  const [images, setImages] = useState(STARTER_IMAGES);
  const [imageUrl, setImageUrl] = useState(STARTER_IMAGES[0].regularUrl);
  const [previewUrl, setPreviewUrl] = useState(STARTER_IMAGES[0].thumbUrl);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeneratedPost | null>(null);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryMessage, setDeliveryMessage] = useState('');

  const keywords = useMemo(() => result?.Keywords.split('-').map((item) => item.trim()).filter(Boolean) ?? [], [result]);

  async function changeIndustry(next: string) {
    setIndustry(next);
    setIsLoadingImages(true);
    setError('');
    try {
      const response = await fetch('/api/demo/images', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ industry: next }),
      });
      if (!response.ok) throw new Error('We could not refresh the photos just now.');
      const data = await response.json() as { images?: DemoImage[] };
      if (data.images?.length) {
        const nextImages = data.images.slice(0, 4);
        setImages(nextImages);
        setImageUrl(nextImages[0].regularUrl);
        setPreviewUrl(nextImages[0].thumbUrl);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Please try again.');
    } finally { setIsLoadingImages(false); }
  }

  async function uploadImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const localPreview = URL.createObjectURL(file);
    setPreviewUrl(localPreview);
    setIsUploading(true);
    setError('');
    const form = new FormData();
    form.append('file', file);
    try {
      const response = await fetch('/api/demo/upload', { method: 'POST', body: form });
      if (!response.ok) throw new Error('Your photo could not be uploaded. Please try another.');
      const data = await response.json() as { fileUrl: string };
      setImageUrl(data.fileUrl);
    } catch (err) {
      setImageUrl(localPreview);
      setError(err instanceof Error ? err.message : 'Please try again.');
    } finally { setIsUploading(false); }
  }

  async function generate(event: FormEvent) {
    event.preventDefault();
    if (!message.trim()) { setError('Add a few words so we know what you want to share.'); return; }
    setIsGenerating(true); setError(''); setDeliveryMessage('');
    try {
      const response = await fetch('/api/demo/generate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, tone, message, imageUrl }),
      });
      if (!response.ok) throw new Error('We could not make your post just now. Please try again.');
      setResult(await response.json() as GeneratedPost);
    } catch (err) { setError(err instanceof Error ? err.message : 'Please try again.'); }
    finally { setIsGenerating(false); }
  }

  async function deliver() {
    if (!result || !/^\S+@\S+\.\S+$/.test(email)) { setError('Enter a valid email address first.'); return; }
    setError(''); setDeliveryMessage('Sending…');
    try {
      const response = await fetch('/api/demo/deliver', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, tone, message, imageUrl, caption: result.Caption, email }),
      });
      const data = await response.json() as { Result?: string; message?: string };
      if (!response.ok) throw new Error(data.message || 'We could not send that email.');
      setDeliveryMessage(data.Result || 'Your post is on its way.');
    } catch (err) { setDeliveryMessage(''); setError(err instanceof Error ? err.message : 'Please try again.'); }
  }

  return (
    <div className="demo-card">
      <form className="demo-form" onSubmit={generate}>
        <div className="demo-field-row">
          <label>My business is
            <select value={industry} onChange={(event) => void changeIndustry(event.target.value)}>
              {INDUSTRIES.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <fieldset><legend>Make it sound</legend><div className="tone-choices">
            {TONES.map((item) => <label key={item}><input type="radio" name="tone" checked={tone === item} onChange={() => setTone(item)} /><span>{item}</span></label>)}
          </div></fieldset>
        </div>

        <label className="message-field">What would you like people to know?
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} maxLength={300} placeholder="A new product, today’s special, a quick update…" />
          <small>A sentence, a few words, or whatever you have.</small>
        </label>

        <div className="image-picker">
          <div className="image-picker-heading"><div><strong>Choose a photo</strong><small>{isLoadingImages ? 'Finding a few good options…' : 'Use one of these or add your own. AI generation is available only inside the live application.'}</small></div>
            <div className="image-actions">
              <label className="upload-button">{isUploading ? 'Uploading…' : '+ Add my photo'}<input type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadImage} disabled={isUploading} /></label>
              <button className="upload-button ai-image-button" type="button">+ Generate with AI</button>
            </div>
          </div>
          <div className={`image-options ${isLoadingImages ? 'is-loading' : ''}`}>
            {images.map((image) => <label key={image.regularUrl} className={imageUrl === image.regularUrl ? 'selected' : ''}>
              <input type="radio" name="image" checked={imageUrl === image.regularUrl} onChange={() => { setImageUrl(image.regularUrl); setPreviewUrl(image.thumbUrl); }} />
              <Image src={image.thumbUrl} alt={image.alt || 'Suggested post image'} width={220} height={164} unoptimized />
              <span>✓</span>
            </label>)}
          </div>
        </div>

        {error && <p className="demo-error" role="alert">{error}</p>}
        <button className="button generate-button" type="submit" disabled={isGenerating || isUploading}>
          {isGenerating ? 'Making your post…' : 'Show me my post'} <span aria-hidden="true">→</span>
        </button>
      </form>

      <aside className={`demo-result ${result ? 'has-result' : ''}`} aria-live="polite">
        {!result ? <div className="result-placeholder">
          <div className="placeholder-orbit">One less thing<br/><strong>on your list.</strong></div>
          <span className="result-spark">✦</span><h3>Your post will<br/>appear right here.</h3><p>Polished, on-brand, and ready to share.</p>
        </div> : <>
          <div className="result-celebration"><span>✓</span><div><strong>That’s one post off your plate.</strong><small>Here’s what HiVaulted made for you.</small></div></div>
          <article className="generated-post">
            <Image src={previewUrl} alt="Selected post visual" width={700} height={510} unoptimized />
            <div className="generated-copy"><p>{result.Caption}</p><div className="keyword-list">{keywords.map((word) => <span key={word}>#{word.replace(/^#/, '').replace(/\s+/g, '')}</span>)}</div></div>
          </article>
          <div className="send-result"><label>Send this post to my email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@yourbusiness.com" /></label><button type="button" onClick={() => void deliver()}>Send it</button></div>
          {deliveryMessage && <p className="delivery-message">✓ {deliveryMessage}</p>}
          <button className="reset-button" type="button" onClick={() => { setResult(null); setDeliveryMessage(''); setError(''); }}>Make another post</button>
        </>}
      </aside>
    </div>
  );
}
