'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminLayout from '../../../components/AdminLayout';

export default function AdminGalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchGallery = async () => {
    try {
      const res = await fetch('/api/gallery');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      setImages(data);
    } catch (err) {
      setError('Failed to load gallery images.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this image?')) return;

    try {
      const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      if (res.ok) {
        setSuccess('Image deleted successfully.');
        setImages((prev) => prev.filter((img) => String(img.id) !== String(id)));
      } else {
        setError('Failed to delete image.');
      }
    } catch (err) {
      setError('An error occurred during deletion.');
    }
  };

  return (
    <AdminLayout pageTitle="Gallery" activeMenu="gallery">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-slate-500">Manage the images shown on the Gallery page.</p>
        <Link
          href="/admin/gallery/add"
          className="text-white text-sm font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2"
          style={{ background: 'var(--red)' }}
        >
          <i className="fa-solid fa-plus"></i> Add New Image
        </Link>
      </div>

      {success && <div className="bg-green-50 text-green-700 text-sm p-3 rounded-md mb-5 border border-green-200">{success}</div>}
      {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md mb-5 border border-red-200">{error}</div>}

      {loading ? (
        <div className="bg-white rounded-xl shadow p-8 text-center text-slate-400">Loading gallery images...</div>
      ) : !images || images.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center text-slate-400">
          No gallery images yet. Click &quot;Add New Image&quot; to upload one.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((img) => {
            const imageSrc =
              img.image.startsWith('http') || img.image.startsWith('/')
                ? img.image
                : `/uploads/gallery/${img.image}`;

            return (
              <div key={img.id} className="bg-white rounded-xl shadow overflow-hidden border border-slate-100">
                <img src={imageSrc} className="w-full h-40 object-cover" alt={img.caption || img.category} />
                <div className="p-3">
                  <div className="text-xs font-semibold" style={{ color: 'var(--navy)' }}>
                    {img.category}
                  </div>
                  <div className="text-xs text-slate-400 mb-2">{img.caption || '—'}</div>
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="text-red-600 text-xs hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </AdminLayout>
  );
}
