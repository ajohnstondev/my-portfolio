import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const startDate = request.nextUrl.searchParams || '2020-01-01';
  const slug = request.nextUrl.pathname;

  return NextResponse.json({
    pageViews: 0,
  });
}
