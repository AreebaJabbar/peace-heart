'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminLayout from '../../../components/AdminLayout';
import { formatFundingLabel } from '../../../lib/format';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      setError('Failed to load projects.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete project "${title}"? This cannot be undone.`)) return;

    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      if (res.ok) {
        setSuccess('Project deleted successfully.');
        setProjects((prev) => prev.filter((p) => String(p.id) !== String(id)));
      } else {
        setError('Failed to delete project.');
      }
    } catch (err) {
      setError('An error occurred during deletion.');
    }
  };

  return (
    <AdminLayout pageTitle="Our Projects" activeMenu="projects">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-slate-500">
          Manage the projects shown on the &quot;Our Projects&quot; page.
        </p>
        <Link
          href="/admin/projects/add"
          className="text-white text-sm font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2 transition-all hover:opacity-95"
          style={{ background: '#e2242c' }}
        >
          <i className="fa-solid fa-plus"></i> Add New Project
        </Link>
      </div>

      {success && (
        <div className="bg-green-50 text-green-700 text-sm p-3 rounded-md mb-5 border border-green-200">
          {success}
        </div>
      )}
      {error && (
        <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md mb-5 border border-red-200">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl shadow overflow-hidden border border-slate-100">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-slate-50 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
            <tr>
              <th className="text-left px-6 py-4">IMAGE</th>
              <th className="text-left px-6 py-4">TITLE</th>
              <th className="text-left px-6 py-4">STATUS</th>
              <th className="text-left px-6 py-4">FUNDING</th>
              <th className="text-right px-6 py-4">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                  Loading projects...
                </td>
              </tr>
            ) : !projects || projects.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                  No projects yet. Click &quot;Add New Project&quot; to create one.
                </td>
              </tr>
            ) : (
              projects.map((p) => {
                const imageSrc =
                  p.image.startsWith('http') || p.image.startsWith('/')
                    ? p.image
                    : `/uploads/projects/${p.image}`;

                return (
                  <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <img
                        src={imageSrc}
                        className="w-16 h-12 object-cover rounded-md border border-slate-200"
                        alt={p.title}
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-700">{p.title}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium inline-block ${
                          p.status === 'completed'
                            ? 'bg-green-50 text-green-700'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {p.status ? p.status.charAt(0).toUpperCase() + p.status.slice(1) : 'Ongoing'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-normal">
                      {formatFundingLabel(p.goal_amount, p.raised_amount, p.status)}
                    </td>
                    <td className="px-6 py-4 text-right space-x-4">
                      <Link href={`/admin/projects/edit/${p.id}`} className="text-blue-500 hover:underline font-medium text-xs">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id, p.title)}
                        className="text-red-500 hover:underline font-medium text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
