import { NextResponse } from 'next/server';
import { getMessages } from '../../../lib/db';
import { requireAdminAuth } from '../../../lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const auth = requireAdminAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const messages = await getMessages();
  return NextResponse.json(messages);
}
