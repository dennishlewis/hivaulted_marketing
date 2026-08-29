import { NextResponse } from 'next/server';

const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);

export async function POST(request: Request) {
  const incoming = await request.formData();
  const file = incoming.get('file');
  if (!(file instanceof File)) return NextResponse.json({ message: 'Choose an image first.' }, { status: 400 });
  if (!ALLOWED_TYPES.has(file.type) || file.size > MAX_IMAGE_BYTES) {
    return NextResponse.json({ message: 'Use a JPG, PNG, or WebP image under 10 MB.' }, { status: 400 });
  }
  const webhook = process.env.MAKE_IMAGE_UPLOAD_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ message: 'Photo uploads are not connected in this preview.' }, { status: 503 });

  const outbound = new FormData();
  outbound.append('file', file, file.name);
  try {
    const upstream = await fetch(webhook, { method: 'POST', body: outbound, signal: AbortSignal.timeout(25_000) });
    if (!upstream.ok) throw new Error(`Make upload workflow returned ${upstream.status}`);
    const data = await upstream.json() as { fileUrl?: unknown };
    if (typeof data.fileUrl !== 'string' || !data.fileUrl.startsWith('http')) throw new Error('Upload workflow returned an invalid URL');
    return NextResponse.json({ fileUrl: data.fileUrl });
  } catch (error) {
    console.error(JSON.stringify({ event: 'demo.upload_failed', message: error instanceof Error ? error.message : 'Unknown error' }));
    return NextResponse.json({ message: 'Your photo could not be uploaded.' }, { status: 502 });
  }
}
