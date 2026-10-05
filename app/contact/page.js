'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';
import NewsletterSection from '../../components/NewsletterSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: '', error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          loading: false,
          success: data.message || 'Thanks for reaching out! We will get back to you within 24 hours.',
          error: '',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          loading: false,
          success: '',
          error: data.error || 'An error occurred. Please try again.',
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: '',
        error: 'Failed to send message. Please check your network and try again.',
      });
    }
  };

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We would love to hear from you"
        bgImage="https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-14 px-5 max-w-7xl mx-auto grid lg:grid-cols-[1fr,380px] gap-10">
        <div className="rounded-xl p-8 card-shadow border border-slate-100 bg-white">
          <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--navy)' }}>
            Send Us a Message
          </h3>
          <div className="w-10 h-0.5 mb-6" style={{ background: 'var(--red)' }}></div>

          {status.success && (
            <div className="bg-green-50 text-green-700 text-sm p-3 rounded-md mb-5 border border-green-200">
              <i className="fa-solid fa-circle-check mr-2"></i>
              {status.success}
            </div>
          )}

          {status.error && (
            <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md mb-5 border border-red-200">
              <i className="fa-solid fa-circle-exclamation mr-2"></i>
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">
                  Full Name <span style={{ color: 'var(--red)' }}>*</span>
                </label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">
                  Email Address <span style={{ color: 'var(--red)' }}>*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">
                Subject <span style={{ color: 'var(--red)' }}>*</span>
              </label>
              <input
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">
                Message <span style={{ color: 'var(--red)' }}>*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status.loading}
              className="w-full btn-red text-white font-semibold py-3 rounded-md inline-flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane"></i>
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            <p className="text-center text-xs text-slate-400">We usually respond within 24 hours.</p>
          </form>
        </div>

        <aside>
          <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--navy)' }}>
            Contact Information
          </h3>
          <div className="w-10 h-0.5 mb-6" style={{ background: 'var(--red)' }}></div>
          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl border border-slate-100 p-4 card-shadow bg-white">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ background: 'var(--navy)' }}
              >
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div className="font-semibold text-sm">Our Address</div>
                <div className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Chaman Street House No. 7, Street No. 10 Modern Colony Kot Lakhpat, Lahore
                </div>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-slate-100 p-4 card-shadow bg-white">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ background: 'var(--red)' }}
              >
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <div className="font-semibold text-sm">Phone Number</div>
                <div className="text-slate-500 text-xs mt-1 leading-relaxed">+447988575653</div>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-slate-100 p-4 card-shadow bg-white">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ background: 'var(--navy)' }}
              >
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <div className="font-semibold text-sm">Email Address</div>
                <div className="text-slate-500 text-xs mt-1 leading-relaxed">info@phffoundation.org</div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto px-5 pb-14">
        <div className="rounded-xl overflow-hidden card-shadow border border-slate-100 h-96">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Faisalabad,Punjab,Pakistan&output=embed"
            title="Location Map"
          ></iframe>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
