'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '../../../../components/AdminLayout';

export default function ViewMessagePage({ params }) {
  const routeParams = useParams();
  const id = routeParams?.id || params?.id;
  const router = useRouter();

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch(`/api/messages/${id}`);
        if (res.status === 401) {
          router.push('/admin/login');
          return;
        }
        if (!res.ok) {
          setError('Message not found');
          setLoading(false);
          return;
        }
        const data = await res.json();
        setMessage(data);
      } catch (err) {
        setError('Failed to fetch message details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, [id, router]);

  if (loading) {
    return (
      <AdminLayout pageTitle="View Message" activeMenu="messages">
        <div className="max-w-2xl bg-white rounded-xl shadow p-6 border border-slate-100">
          <p className="text-slate-400 py-4">Loading message...</p>
        </div>
      </AdminLayout>
    );
  }

  if (error || !message) {
    return (
      <AdminLayout pageTitle="View Message" activeMenu="messages">
        <div className="max-w-2xl bg-white rounded-xl shadow p-6 border border-slate-100">
          <Link href="/admin/messages" className="text-sm text-slate-500 hover:text-slate-700 inline-flex items-center gap-1 mb-4">
            <i className="fa-solid fa-arrow-left"></i> Back to Messages
          </Link>
          <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md">{error || 'Message not found.'}</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout pageTitle="View Message" activeMenu="messages">
      <div className="max-w-2xl bg-white rounded-xl shadow p-6 border border-slate-100">
        <Link
          href="/admin/messages"
          className="text-sm text-slate-500 hover:text-slate-700 inline-flex items-center gap-1 mb-4"
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Messages
        </Link>

        <h2 className="font-display font-bold text-lg mb-1" style={{ color: 'var(--navy)' }}>
          {message.subject}
        </h2>
        <p className="text-xs text-slate-400 mb-5">{new Date(message.created_at).toLocaleString()}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-5 text-sm">
          <div>
            <span className="text-slate-400">From:</span> <span className="font-medium">{message.name}</span>
          </div>
          <div>
            <span className="text-slate-400">Email:</span>{' '}
            <a href={`mailto:${message.email}`} className="font-medium text-blue-600 hover:underline">
              {message.email}
            </a>
          </div>
        </div>

        <div className="bg-slate-50 rounded-md p-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
          {message.message}
        </div>

        <div className="mt-5">
          <a
            href={`mailto:${message.email}?subject=Re: ${encodeURIComponent(message.subject)}`}
            className="text-white font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2 text-sm"
            style={{ background: 'var(--red)' }}
          >
            <i className="fa-solid fa-reply"></i> Reply by Email
          </a>
        </div>
      </div>
    </AdminLayout>
  );
}
