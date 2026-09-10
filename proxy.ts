import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname !== 'hivaulted.com') {
    return NextResponse.next();
  }

  const canonicalUrl = request.nextUrl.clone();
  canonicalUrl.protocol = 'https:';
  canonicalUrl.hostname = 'www.hivaulted.com';
  canonicalUrl.port = '';

  return NextResponse.redirect(canonicalUrl, 308);
}

export const config = {
  matcher: '/:path*',
};
