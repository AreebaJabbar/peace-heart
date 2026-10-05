import { NextResponse } from 'next/server';
import { getGalleryImages, createGalleryItem } from '../../../lib/db';
import { requireAdminAuth } from '../../../lib/auth';
import { saveUploadedFile } from '../../../lib/upload';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'All';
  const images = await getGalleryImages(category);
  return NextResponse.json(images);
}

export async function POST(request) {
  const auth = requireAdminAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const caption = (formData.get('caption') || '').trim();
    const category = (formData.get('category') || 'Education').trim();
    const imageFile = formData.get('image');

    const validCategories = ['Education', 'Orphan Care', 'Widow Support', 'Relief Drives', 'Events'];
    const finalCat = validCategories.includes(category) ? category : validCategories[0];

    if (!imageFile || typeof imageFile.name !== 'string') {
      return NextResponse.json({ error: 'Please choose an image to upload.' }, { status: 400 });
    }

    const filename = await saveUploadedFile(imageFile, 'gallery');

    const insertId = await createGalleryItem({
      image: filename,
      caption,
      category: finalCat,
    });

    return NextResponse.json({ success: true, id: insertId });
  } catch (err) {
    console.error('Create gallery item error:', err);
    return NextResponse.json({ error: err.message || 'Failed to upload image.' }, { status: 500 });
  }
}
