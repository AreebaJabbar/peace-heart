import { redirect } from 'next/navigation';
import Link from 'next/link';
import { requireAdminAuth } from '../../../lib/auth';
import { getDashboardStats } from '../../../lib/db';
import AdminLayout from '../../../components/AdminLayout';

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const session = requireAdminAuth();
  if (!session) {
    redirect('/admin/login');
  }

  const stats = await getDashboardStats();

  return (
    <AdminLayout pageTitle="Dashboard" activeMenu="dashboard" adminUsername={session.username}>
      {/* STAT CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-xl p-5 card-shadow shadow">
          <div className="text-slate-400 text-xs font-medium uppercase mb-1">Projects</div>
          <div className="text-3xl font-bold" style={{ color: 'var(--navy)' }}>
            {stats.projectCount}
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow">
          <div className="text-slate-400 text-xs font-medium uppercase mb-1">Gallery Images</div>
          <div className="text-3xl font-bold" style={{ color: 'var(--navy)' }}>
            {stats.galleryCount}
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow">
          <div className="text-slate-400 text-xs font-medium uppercase mb-1">Total Messages</div>
          <div className="text-3xl font-bold" style={{ color: 'var(--navy)' }}>
            {stats.messageCount}
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow">
          <div className="text-slate-400 text-xs font-medium uppercase mb-1">Unread Messages</div>
          <div className="text-3xl font-bold" style={{ color: 'var(--red)' }}>
            {stats.unreadCount}
          </div>
        </div>
      </div>

      {/* RECENT MESSAGES */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-base" style={{ color: 'var(--navy)' }}>
            Recent Messages
          </h2>
          <Link href="/admin/messages" className="text-xs font-semibold" style={{ color: 'var(--red)' }}>
            View All →
          </Link>
        </div>

        {!stats.recentMessages || stats.recentMessages.length === 0 ? (
          <p className="text-sm text-slate-400 py-4">No messages yet.</p>
        ) : (
          <div className="divide-y divide-slate-100">
            {stats.recentMessages.map((m) => (
              <div key={m.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-700">
                    {m.name} — {m.subject}
                  </div>
                  <div className="text-xs text-slate-400">
                    {m.email} · {new Date(m.created_at).toLocaleString()}
                  </div>
                </div>
                {!m.is_read && (
                  <span
                    className="text-[10px] font-bold px-2 py-1 rounded-full text-white uppercase"
                    style={{ background: 'var(--red)' }}
                  >
                    NEW
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
