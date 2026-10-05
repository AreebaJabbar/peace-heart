'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
  pageTitle,
  activeMenu,
  adminUsername = 'eplaneteplanettechnologies@gmail.com',
}) {
  const [username, setUsername] = useState(adminUsername);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Optionally fetch session user if available
    const checkSession = async () => {
      try {
        const res = await fetch('/api/messages'); // test auth status
        if (res.status === 401) {
          router.push('/admin/login');
        }
      } catch (err) {}
    };
    checkSession();
  }, [router]);

  const navClass = (menu) => {
    const isActive = activeMenu === menu;
    return isActive
      ? 'flex items-center gap-3 px-4 py-2.5 rounded-md text-white font-medium text-sm'
      : 'flex items-center gap-3 px-4 py-2.5 rounded-md text-slate-300 hover:bg-white/5 text-sm';
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">
      {/* SIDEBAR */}
      <aside className="w-64 flex-shrink-0 hidden md:flex flex-col" style={{ background: 'var(--navy-dark)' }}>
        <div className="flex items-center gap-2 px-5 h-20 border-b border-white/10">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
          <div className="text-white font-display font-bold text-sm leading-tight">
            Peace For Heart<br />
            <span style={{ color: 'var(--red)' }}>Admin Panel</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-1">
          <Link
            href="/admin/dashboard"
            className={navClass('dashboard')}
            style={{ background: activeMenu === 'dashboard' ? 'var(--red)' : undefined }}
          >
            <i className="fa-solid fa-gauge w-4"></i> Dashboard
          </Link>

          <Link
            href="/admin/projects"
            className={navClass('projects')}
            style={{ background: activeMenu === 'projects' ? 'var(--red)' : undefined }}
          >
            <i className="fa-solid fa-hand-holding-heart w-4"></i> Our Projects
          </Link>

          <Link
            href="/admin/gallery"
            className={navClass('gallery')}
            style={{ background: activeMenu === 'gallery' ? 'var(--red)' : undefined }}
          >
            <i className="fa-solid fa-images w-4"></i> Gallery
          </Link>

          <Link
            href="/admin/messages"
            className={navClass('messages')}
            style={{ background: activeMenu === 'messages' ? 'var(--red)' : undefined }}
          >
            <i className="fa-solid fa-envelope w-4"></i> Messages
          </Link>
        </nav>

        <div className="px-3 pb-5">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2.5 rounded-md text-slate-300 hover:bg-white/5 text-sm"
          >
            <i className="fa-solid fa-arrow-up-right-from-square w-4"></i> View Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-md text-slate-300 hover:bg-white/5 text-sm"
          >
            <i className="fa-solid fa-right-from-bracket w-4"></i> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <h1 className="font-display font-bold text-lg" style={{ color: 'var(--navy)' }}>
            {pageTitle}
          </h1>
          <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
            <i className="fa-solid fa-circle-user text-xl" style={{ color: 'var(--navy)' }}></i>
            <span>{username}</span>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
