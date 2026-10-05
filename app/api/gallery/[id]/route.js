import { NextResponse } from 'next/server';
import { getGalleryById, deleteGalleryItem } from '../../../../lib/db';
import { requireAdminAuth } from '../../../../lib/auth';
import { deleteUploadedFile } from '../../../../lib/upload';

export const dynamic = 'force-dynamic';

export async function DELETE(request, { params }) {
  const auth = requireAdminAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const gParams = await params;
  const targetId = gParams?.id;
  if (!targetId) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const item = await getGalleryById(targetId);
  if (item && item.image) {
    deleteUploadedFile(item.image, 'gallery');
  }

  await deleteGalleryItem(targetId);

  return NextResponse.json({ success: true });
}
