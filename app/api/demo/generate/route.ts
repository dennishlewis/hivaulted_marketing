import { NextResponse } from 'next/server';

type GenerateBody = { industry?: unknown; tone?: unknown; message?: unknown; imageUrl?: unknown };

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as GenerateBody | null;
  const industry = typeof body?.industry === 'string' ? body.industry.trim().slice(0, 100) : '';
  const tone = typeof body?.tone === 'string' ? body.tone.trim().slice(0, 50) : '';
  const message = typeof body?.message === 'string' ? body.message.trim().slice(0, 300) : '';
  const imageUrl = typeof body?.imageUrl === 'string' ? body.imageUrl.trim().slice(0, 2_000) : '';
  if (!industry || !tone || !message || !imageUrl) return NextResponse.json({ message: 'Complete each field and choose a photo.' }, { status: 400 });

  const webhook = process.env.MAKE_CAPTION_WEBHOOK_URL;
  if (!webhook) {
    const cleaned = message.replace(/[.!?]+$/, '');
    return NextResponse.json({
      Caption: `${cleaned}—and we’d love to share it with you. Stop by and see what’s new! 💙`,
      Keywords: `${industry.split(' ')[0].toLowerCase()} - small business - local`,
    });
  }

  const makePayload = {
    Industry: industry, Tone: tone, 'Headline-Keywords': message,
    Images: imageUrl, 'Image URL': imageUrl, caption: '', Email: '',
  };
  try {
    const upstream = await fetch(webhook, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(makePayload), signal: AbortSignal.timeout(30_000),
    });
    if (!upstream.ok) throw new Error(`Make caption workflow returned ${upstream.status}`);
    const data = await upstream.json() as { Caption?: unknown; Keywords?: unknown };
    if (typeof data.Caption !== 'string' || typeof data.Keywords !== 'string') throw new Error('Caption workflow returned an invalid response');
    return NextResponse.json({ Caption: data.Caption, Keywords: data.Keywords });
  } catch (error) {
    console.error(JSON.stringify({ event: 'demo.generate_failed', message: error instanceof Error ? error.message : 'Unknown error' }));
    return NextResponse.json({ message: 'We could not make your post just now.' }, { status: 502 });
  }
}
