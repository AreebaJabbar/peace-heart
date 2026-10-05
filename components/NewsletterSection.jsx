'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-10 px-5" style={{ background: 'var(--navy)' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl px-6 py-2">
        <div className="flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div>
            <div className="font-display font-bold">Stay Updated With Our Latest News</div>
            <div className="text-slate-300 text-sm">Subscribe and be the first to know about our programs &amp; impact.</div>
          </div>
        </div>

        {submitted ? (
          <div className="text-emerald-300 text-sm font-semibold bg-white/10 px-5 py-2.5 rounded-md">
            <i className="fa-solid fa-circle-check mr-2"></i> Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="rounded-l-md px-4 py-2.5 w-full md:w-72 text-sm outline-none text-slate-800"
            />
            <button type="submit" className="btn-red text-white px-5 rounded-r-md font-semibold text-sm">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
