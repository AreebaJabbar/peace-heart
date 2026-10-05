import { NextResponse } from 'next/server';
import { clearAdminSession } from '../../../../lib/auth';

export const dynamic = 'force-dynamic';

export async function POST() {
  clearAdminSession();
  return NextResponse.json({ success: true });
}

export async function GET(request) {
  clearAdminSession();
  return NextResponse.redirect(new URL('/admin/login', request.url));
}
