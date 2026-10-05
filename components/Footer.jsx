import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="pt-14 pb-6 px-5" style={{ background: 'var(--navy-dark)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 text-slate-300 text-sm">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <Image
              src="/assets/logo.png"
              alt="Peace For Heart Foundation"
              width={38}
              height={38}
              className="object-contain w-9 h-9"
            />
            <div>
              <div className="font-display font-bold text-white">
                Peace For Heart <span style={{ color: 'var(--red)' }}>Foundation</span>
              </div>
              <div className="text-[10px] text-slate-400">Compassion. Care. Change.</div>
            </div>
          </Link>
          <p className="text-slate-400 leading-relaxed">
            We are dedicated to building a better tomorrow through education, widow support, orphan care and relief work.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/share/1TeWcmNeMs/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:opacity-80"
              style={{ background: '#3b5998' }}
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/pfhf.oundation?igsh=MThsY2ttcmc0MGNiag=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:opacity-80"
              style={{ background: '#e1306c' }}
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div>
          <div className="text-white font-display font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/mission" className="hover:text-white transition-colors">Mission &amp; Vision</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
            <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-display font-semibold mb-3">Our Projects</div>
          <ul className="space-y-2">
            <li><Link href="/projects" className="hover:text-white transition-colors">Education for All</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Widow Support</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Orphan Rehabilitation</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Charity &amp; Relief Work</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-display font-semibold mb-3">Contact Us</div>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <i className="fa-solid fa-phone mt-1"></i> +447988575653
            </li>
            <li className="flex gap-2">
              <i className="fa-regular fa-envelope mt-1"></i> info@phffoundation.org
            </li>
            <li className="flex gap-2">
              <i className="fa-solid fa-location-dot mt-1"></i> Chaman Street House No. 7, Street No. 10 Modern Colony Kot Lakhpat, Lahore
            </li>
          </ul>
        </div>

        <div>
          <div className="text-white font-display font-semibold mb-3">Make a Difference</div>
          <p className="text-slate-400 mb-4">Your support helps us bring hope and change to those in need.</p>
          <Link href="/donate" className="btn-red text-white text-sm font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2">
            <i className="fa-solid fa-heart"></i> Donate Now
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between text-slate-500 text-xs gap-2">
        <div>&copy; 2026 Peace For Heart Foundation. All Rights Reserved.</div>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
