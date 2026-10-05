'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Mission & Vision', href: '/mission' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Team', href: '/team' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-24 gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Peace For Heart Foundation"
            width={80}
            height={80}
            className="object-contain w-16 h-16 md:w-20 md:h-20"
            priority
          />
          <div className="leading-tight whitespace-nowrap">
            <div className="font-display font-bold text-base md:text-lg" style={{ color: 'var(--navy)' }}>
              Peace For Heart
            </div>
            <div className="font-display font-bold text-base md:text-lg" style={{ color: 'var(--red)' }}>
              Foundation
            </div>
            <div className="text-[10px] md:text-[11px] tracking-wide text-slate-500">
              Compassion. Care. Change.
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link font-medium whitespace-nowrap ${
                  active ? 'active text-red-600 font-semibold' : 'text-slate-700'
                }`}
                style={{ color: active ? 'var(--red)' : undefined }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 xl:gap-3 shrink-0">
          <Link
            href="/donate"
            className="hidden md:inline-flex items-center gap-2 btn-red text-white text-sm font-semibold px-4 xl:px-5 py-2.5 rounded-md whitespace-nowrap"
            style={{ backgroundColor: '#d72c2c' }}
          >
            <i className="fa-solid fa-heart"></i> Donate Now
          </Link>

          <Link
            href="/admin/login"
            className="hidden md:inline-flex items-center gap-2 btn-red text-white text-sm font-semibold px-4 xl:px-5 py-2.5 rounded-md whitespace-nowrap"
            style={{ backgroundColor: '#d72c2c' }}
          >
            <i className="fa-solid fa-user-shield"></i> Login as Admin
          </Link>

          <button
            type="button"
            className="lg:hidden text-2xl"
            style={{ color: 'var(--navy)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mnav" className="lg:hidden border-t border-slate-100 px-5 py-4 flex flex-col gap-3 bg-white text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium whitespace-nowrap ${isActive(item.href) ? 'text-red-600 font-bold' : 'text-slate-700'}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/admin/login"
            className="font-semibold text-red-600 inline-flex items-center gap-2 pt-2 border-t border-slate-100 whitespace-nowrap"
            onClick={() => setMobileOpen(false)}
          >
            <i className="fa-solid fa-user-shield"></i> Login as Admin
          </Link>
        </div>
      )}
    </header>
  );
}
