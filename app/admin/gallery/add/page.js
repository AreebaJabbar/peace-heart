'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminLayout from '../../../../components/AdminLayout';

export default function AddGalleryPage() {
  const [category, setCategory] = useState('Education');
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const categories = ['Education', 'Orphan Care', 'Widow Support', 'Relief Drives', 'Events'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!imageFile) {
      setError('Please choose an image to upload.');
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append('category', category);
      data.append('caption', caption);
      data.append('image', imageFile);

      const res = await fetch('/api/gallery', {
        method: 'POST',
        body: data,
      });

      const resData = await res.json();

      if (res.ok && resData.success) {
        router.push('/admin/gallery');
      } else {
        setError(resData.error || 'Failed to upload image.');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred during upload. Please try again.');
      setLoading(false);
    }
  };

  return (
    <AdminLayout pageTitle="Add Gallery Image" activeMenu="gallery">
      <div className="max-w-xl bg-white rounded-xl shadow p-6 border border-slate-100">
        <Link
          href="/admin/gallery"
          className="text-sm text-slate-500 hover:text-slate-700 inline-flex items-center gap-1 mb-4"
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Gallery
        </Link>

        {error && (
          <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md mb-4 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">Image *</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              required
              onChange={(e) => setImageFile(e.target.files[0] || null)}
              className="w-full text-sm text-slate-500"
            />
            <p className="text-xs text-slate-400 mt-1">JPG, PNG or WEBP. Max 5MB.</p>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">Category *</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1">Caption (optional)</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter optional caption"
              className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white font-semibold px-6 py-2.5 rounded-md transition-all disabled:opacity-50"
            style={{ background: 'var(--red)' }}
          >
            {loading ? 'Uploading Image...' : 'Upload Image'}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
