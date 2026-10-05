import { NextResponse } from 'next/server';
import { getProjects, createProject } from '../../../lib/db';
import { requireAdminAuth } from '../../../lib/auth';
import { saveUploadedFile } from '../../../lib/upload';

export const dynamic = 'force-dynamic';

export async function GET() {
  const projects = await getProjects();
  return NextResponse.json(projects);
}

export async function POST(request) {
  const auth = requireAdminAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const title = (formData.get('title') || '').trim();
    const description = (formData.get('description') || '').trim();
    const goal_amount = parseFloat(formData.get('goal_amount') || 0);
    const raised_amount = parseFloat(formData.get('raised_amount') || 0);
    const status = formData.get('status') === 'completed' ? 'completed' : 'ongoing';
    const sort_order = parseInt(formData.get('sort_order') || 0, 10);
    const imageFile = formData.get('image');

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required.' }, { status: 400 });
    }

    if (!imageFile || typeof imageFile.name !== 'string') {
      return NextResponse.json({ error: 'Please choose an image for this project.' }, { status: 400 });
    }

    const filename = await saveUploadedFile(imageFile, 'projects');

    const insertId = await createProject({
      title,
      description,
      image: filename,
      goal_amount,
      raised_amount,
      status,
      sort_order,
    });

    return NextResponse.json({ success: true, id: insertId });
  } catch (err) {
    console.error('Create project error:', err);
    return NextResponse.json({ error: err.message || 'Failed to create project.' }, { status: 500 });
  }
}
