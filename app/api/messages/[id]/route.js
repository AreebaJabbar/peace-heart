import { NextResponse } from 'next/server';
import { getMessageById, markMessageRead, deleteMessage } from '../../../../lib/db';
import { requireAdminAuth } from '../../../../lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const auth = requireAdminAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const mParams = await params;
  const message = await getMessageById(mParams.id);
  if (!message) {
    return NextResponse.json({ error: 'Message not found' }, { status: 404 });
  }

  if (!message.is_read) {
    await markMessageRead(mParams.id);
    message.is_read = 1;
  }

  return NextResponse.json(message);
}

export async function DELETE(request, { params }) {
  const auth = requireAdminAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const mParams = await params;
  await deleteMessage(mParams.id);

  return NextResponse.json({ success: true });
}
