import { NextResponse } from 'next/server';

type DeliveryBody = Record<'industry' | 'tone' | 'message' | 'imageUrl' | 'caption' | 'email', unknown>;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as DeliveryBody | null;
  const email = typeof body?.email === 'string' ? body.email.trim().slice(0, 254) : '';
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ message: 'Enter a valid email address.' }, { status: 400 });
  const read = (key: keyof DeliveryBody, max = 2_000) => typeof body?.[key] === 'string' ? body[key].trim().slice(0, max) : '';
  const webhook = process.env.MAKE_DELIVERY_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ Result: 'Preview complete—email delivery will work when the Make workflow is connected.' });

  const form = new FormData();
  form.set('Industry', read('industry', 100)); form.set('Tone', read('tone', 50));
  form.set('Headline-Keywords', read('message', 300)); form.set('Image URL', read('imageUrl'));
  form.set('caption', read('caption', 2_000)); form.set('Email', email);
  try {
    const upstream = await fetch(webhook, { method: 'POST', body: form, signal: AbortSignal.timeout(20_000) });
    if (!upstream.ok) throw new Error(`Make delivery workflow returned ${upstream.status}`);
    const data = await upstream.json() as { Result?: unknown };
    if (typeof data.Result !== 'string') throw new Error('Delivery workflow returned an invalid response');
    return NextResponse.json({ Result: data.Result });
  } catch (error) {
    console.error(JSON.stringify({ event: 'demo.delivery_failed', message: error instanceof Error ? error.message : 'Unknown error' }));
    return NextResponse.json({ message: 'We could not send your post just now.' }, { status: 502 });
  }
}
