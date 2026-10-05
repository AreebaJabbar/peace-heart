'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminLayout from '../../../components/AdminLayout';

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      setError('Failed to load messages.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this message?')) return;

    try {
      const res = await fetch(`/api/messages/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setSuccess('Message deleted successfully.');
        setMessages(messages.filter((m) => m.id !== id));
      } else {
        setError('Failed to delete message.');
      }
    } catch (err) {
      setError('An error occurred during deletion.');
    }
  };

  return (
    <AdminLayout pageTitle="Messages" activeMenu="messages">
      {success && <div className="bg-green-50 text-green-700 text-sm p-3 rounded-md mb-5 border border-green-200">{success}</div>}
      {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md mb-5 border border-red-200">{error}</div>}

      <div className="bg-white rounded-xl shadow overflow-hidden border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
            <tr>
              <th className="text-left px-5 py-3">From</th>
              <th className="text-left px-5 py-3">Subject</th>
              <th className="text-left px-5 py-3">Date</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-right px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-slate-400">
                  Loading messages...
                </td>
              </tr>
            ) : !messages || messages.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-slate-400">
                  No messages received yet.
                </td>
              </tr>
            ) : (
              messages.map((m) => (
                <tr key={m.id} className={m.is_read ? '' : 'bg-red-50/30'}>
                  <td className="px-5 py-3">
                    <div className="font-medium text-slate-700">{m.name}</div>
                    <div className="text-xs text-slate-400">{m.email}</div>
                  </td>
                  <td className="px-5 py-3 text-slate-600">{m.subject}</td>
                  <td className="px-5 py-3 text-slate-400 text-xs">
                    {new Date(m.created_at).toLocaleString()}
                  </td>
                  <td className="px-5 py-3">
                    {m.is_read ? (
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-500 font-medium">
                        Read
                      </span>
                    ) : (
                      <span
                        className="text-xs px-2 py-1 rounded-full text-white font-semibold"
                        style={{ background: 'var(--red)' }}
                      >
                        New
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-right space-x-3">
                    <Link href={`/admin/messages/${m.id}`} className="text-blue-600 hover:underline">
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(m.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
