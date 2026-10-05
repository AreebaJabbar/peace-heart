'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '../../../../../components/AdminLayout';

export default function EditProjectPage({ params }) {
  const routeParams = useParams();
  const id = routeParams?.id || params?.id;
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal_amount: '0',
    raised_amount: '0',
    status: 'ongoing',
    sort_order: '0',
  });
  const [currentImage, setCurrentImage] = useState('');
  const [newImageFile, setNewImageFile] = useState(null);
  const [error, setError] = useState('');
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) {
          setError('Project not found');
          setFetching(false);
          return;
        }
        const data = await res.json();
        setFormData({
          title: data.title || '',
          description: data.description || '',
          goal_amount: data.goal_amount !== undefined ? String(data.goal_amount) : '0',
          raised_amount: data.raised_amount !== undefined ? String(data.raised_amount) : '0',
          status: data.status || 'ongoing',
          sort_order: data.sort_order !== undefined ? String(data.sort_order) : '0',
        });
        setCurrentImage(data.image || '');
      } catch (err) {
        setError('Failed to fetch project details.');
      } finally {
        setFetching(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('goal_amount', formData.goal_amount);
      data.append('raised_amount', formData.raised_amount);
      data.append('status', formData.status);
      data.append('sort_order', formData.sort_order);
      if (newImageFile) {
        data.append('image', newImageFile);
      }

      const res = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: data,
      });

      const resData = await res.json();

      if (res.ok && resData.success) {
        router.push('/admin/projects');
      } else {
        setError(resData.error || 'Failed to update project.');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred while updating. Please try again.');
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <AdminLayout pageTitle="Edit Project" activeMenu="projects">
        <div className="max-w-2xl bg-white rounded-xl shadow p-6 border border-slate-100">
          <p className="text-slate-400 py-4">Loading project details...</p>
        </div>
      </AdminLayout>
    );
  }

  const imageSrc =
    currentImage.startsWith('http') || currentImage.startsWith('/')
      ? currentImage
      : `/uploads/projects/${currentImage}`;

  return (
    <AdminLayout pageTitle="Edit Project" activeMenu="projects">
      <div className="max-w-2xl bg-white rounded-xl shadow p-6 border border-slate-100">
        <Link
          href="/admin/projects"
          className="text-sm text-slate-500 hover:text-slate-700 inline-flex items-center gap-1 mb-4"
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Projects
        </Link>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md mb-4 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">Project Title *</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">Description *</label>
            <textarea
              name="description"
              rows={4}
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">Project Image</label>
            <div className="flex items-center gap-4 mt-1">
              {currentImage && (
                <img src={imageSrc} className="w-24 h-16 object-cover rounded-md border" alt="Thumbnail" />
              )}
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={(e) => setNewImageFile(e.target.files[0] || null)}
                className="text-sm text-slate-500"
              />
            </div>
            <p className="text-xs text-slate-400 mt-1">Leave empty to keep the current image.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Goal Amount ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                name="goal_amount"
                value={formData.goal_amount}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Raised Amount ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                name="raised_amount"
                value={formData.raised_amount}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              >
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Display Order</label>
              <input
                type="number"
                name="sort_order"
                value={formData.sort_order}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white font-semibold px-6 py-2.5 rounded-md transition-all disabled:opacity-50"
            style={{ background: 'var(--red)' }}
          >
            {loading ? 'Updating Project...' : 'Update Project'}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
