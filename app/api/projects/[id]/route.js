import { NextResponse } from 'next/server';
import { getProjectById, updateProject, deleteProject } from '../../../../lib/db';
import { requireAdminAuth } from '../../../../lib/auth';
import { saveUploadedFile, deleteUploadedFile } from '../../../../lib/upload';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const pParams = await params;
  const project = await getProjectById(pParams.id);
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  return NextResponse.json(project);
}

export async function PUT(request, { params }) {
  const auth = requireAdminAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const pParams = await params;
  const project = await getProjectById(pParams.id);
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
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

    let imageToUse = project.image;
    if (imageFile && typeof imageFile.name === 'string' && imageFile.name.length > 0) {
      const newFilename = await saveUploadedFile(imageFile, 'projects');
      deleteUploadedFile(project.image, 'projects');
      imageToUse = newFilename;
    }

    await updateProject(pParams.id, {
      title,
      description,
      image: imageToUse,
      goal_amount,
      raised_amount,
      status,
      sort_order,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Update project error:', err);
    return NextResponse.json({ error: err.message || 'Failed to update project.' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const auth = requireAdminAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const pParams = await params;
  const targetId = pParams?.id;
  if (!targetId) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const project = await getProjectById(targetId);
  if (project && project.image) {
    deleteUploadedFile(project.image, 'projects');
  }

  await deleteProject(targetId);

  return NextResponse.json({ success: true });
}
