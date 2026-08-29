import { NextResponse } from 'next/server';

const FALLBACK_IMAGES = [
  'photo-1558769673-de478227d1f5', 'photo-1577594955964-d50df414b8ff',
  'photo-1561651940-e0cc452dab1e', 'photo-1677000239996-82b2c12774cb',
].map((id) => ({
  thumbUrl: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=80`,
  regularUrl: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`,
}));

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { industry?: unknown } | null;
  const industry = typeof body?.industry === 'string' ? body.industry.trim().slice(0, 100) : '';
  if (!industry) return NextResponse.json({ message: 'Choose an industry.' }, { status: 400 });

  const webhook = process.env.MAKE_IMAGE_SEARCH_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ images: FALLBACK_IMAGES });

  try {
    const upstream = await fetch(webhook, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ industry }), signal: AbortSignal.timeout(12_000),
    });
    if (!upstream.ok) throw new Error(`Make image workflow returned ${upstream.status}`);
    const data = await upstream.json() as { images?: Array<{ thumbUrl?: unknown; regularUrl?: unknown }> };
    const images = data.images?.filter((image) => typeof image.thumbUrl === 'string' && typeof image.regularUrl === 'string').slice(0, 4);
    return NextResponse.json({ images: images?.length ? images : FALLBACK_IMAGES });
  } catch (error) {
    console.error(JSON.stringify({ event: 'demo.image_search_failed', message: error instanceof Error ? error.message : 'Unknown error' }));
    return NextResponse.json({ images: FALLBACK_IMAGES });
  }
}
