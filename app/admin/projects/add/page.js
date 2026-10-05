'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminLayout from '../../../../components/AdminLayout';

export default function AddProjectPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal_amount: '0',
    raised_amount: '0',
    status: 'ongoing',
    sort_order: '0',
  });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!imageFile) {
      setError('Please choose an image for this project.');
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('goal_amount', formData.goal_amount);
      data.append('raised_amount', formData.raised_amount);
      data.append('status', formData.status);
      data.append('sort_order', formData.sort_order);
      data.append('image', imageFile);

      const res = await fetch('/api/projects', {
        method: 'POST',
        body: data,
      });

      const resData = await res.json();

      if (res.ok && resData.success) {
        router.push('/admin/projects');
      } else {
        setError(resData.error || 'Failed to save project.');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred while uploading. Please try again.');
      setLoading(false);
    }
  };

  return (
    <AdminLayout pageTitle="Add New Project" activeMenu="projects">
      <div className="max-w-2xl bg-white rounded-xl shadow p-8 border border-slate-100">
        <Link
          href="/admin/projects"
          className="text-sm text-slate-500 hover:text-slate-700 inline-flex items-center gap-1.5 mb-6 font-medium"
        >
          <i className="fa-solid fa-arrow-left text-xs"></i> Back to Projects
        </Link>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm p-3.5 rounded-md mb-6 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 block mb-2">Project Title *</label>
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
            <label className="text-sm font-semibold text-slate-700 block mb-2">Description *</label>
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
            <label className="text-sm font-semibold text-slate-700 block mb-2">Project Image *</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              required
              onChange={(e) => setImageFile(e.target.files[0] || null)}
              className="w-full text-sm text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border file:border-slate-300 file:bg-slate-50 file:text-sm file:text-slate-700 hover:file:bg-slate-100"
            />
            <p className="text-xs text-slate-400 mt-1.5">JPG, PNG or WEBP. Max 5MB. Recommended size ~800×600.</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-2">Goal Amount ($)</label>
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
              <label className="text-sm font-semibold text-slate-700 block mb-2">Raised Amount ($)</label>
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

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white"
              >
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-2">Display Order</label>
              <input
                type="number"
                name="sort_order"
                value={formData.sort_order}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              />
              <p className="text-xs text-slate-400 mt-1.5">Lower numbers show first.</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="text-white font-semibold px-6 py-2.5 rounded-md transition-all disabled:opacity-50"
              style={{ background: '#e2242c' }}
            >
              {loading ? 'Saving Project...' : 'Save Project'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
