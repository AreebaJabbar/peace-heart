'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';
import NewsletterSection from '../../components/NewsletterSection';

export default function DonatePage() {
  const [donationType, setDonationType] = useState('One-Time Donation');
  const [amount, setAmount] = useState('25');
  const [campaign, setCampaign] = useState('Support a Widow Family');
  const [paymentMethod, setPaymentMethod] = useState('Card');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Pakistan');
  const [customPrompt, setCustomPrompt] = useState(false);

  const handleAmountClick = (val) => {
    if (val === 'custom') {
      const userVal = prompt('Enter custom amount (USD):', '50');
      if (userVal) {
        setAmount(userVal);
      }
    } else {
      setAmount(val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! This is a demo form — connect a payment gateway to go live.');
  };

  return (
    <>
      <PageHero
        title="Make a Donation"
        subtitle="Every contribution creates real change"
        bgImage="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-14 px-5 max-w-7xl mx-auto grid lg:grid-cols-[1fr,360px] gap-10">
        <div>
          {/* 1. CHOOSE DONATION TYPE */}
          <h3 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--navy)' }}>
            1. Choose Donation Type
          </h3>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {['One-Time Donation', 'Monthly Sponsorship', 'Zakat / Sadaqah'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setDonationType(t)}
                className={`text-sm font-semibold py-2.5 rounded-md transition-all ${
                  donationType === t
                    ? 'btn-red text-white'
                    : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {t === 'One-Time Donation' ? 'One-Time' : t}
              </button>
            ))}
          </div>

          {/* 2. SELECT AMOUNT */}
          <h3 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--navy)' }}>
            2. Select Donation Amount (USD)
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
            {['10', '25', '50', '100', '250', 'custom'].map((val) => {
              const active = val !== 'custom' && amount === val;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleAmountClick(val)}
                  className={`text-sm font-semibold py-2.5 rounded-md transition-all ${
                    active
                      ? 'btn-red text-white'
                      : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {val === 'custom' ? 'Custom' : `$${val}`}
                </button>
              );
            })}
          </div>

          {/* 3. CHOOSE CAMPAIGN */}
          <h3 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--navy)' }}>
            3. Choose a Campaign
          </h3>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <button
              type="button"
              onClick={() => setCampaign('Educate a Child')}
              className={`text-left rounded-xl overflow-hidden card-shadow border transition-all ${
                campaign === 'Educate a Child' ? 'ring-2' : ''
              }`}
              style={{ borderColor: campaign === 'Educate a Child' ? 'var(--red)' : '#e5e7eb' }}
            >
              <div className="relative h-32">
                <img
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&q=70"
                  className="w-full h-full object-cover"
                  alt="Educate a Child"
                />
              </div>
              <div className="p-4">
                <div className="font-display font-semibold text-sm mb-1">Educate a Child</div>
                <p className="text-slate-500 text-xs leading-relaxed mb-2">
                  Provide quality education, school supplies and a better future for a child.
                </p>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full" style={{ width: '62%', background: 'var(--red)' }}></div>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">$12,450 raised of $20,000</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setCampaign('Support a Widow Family')}
              className={`text-left rounded-xl overflow-hidden card-shadow border transition-all ${
                campaign === 'Support a Widow Family' ? 'ring-2' : ''
              }`}
              style={{ borderColor: campaign === 'Support a Widow Family' ? 'var(--red)' : '#e5e7eb' }}
            >
              <div className="relative h-32">
                <img
                  src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=400&q=70"
                  className="w-full h-full object-cover"
                  alt="Support a Widow Family"
                />
              </div>
              <div className="p-4">
                <div className="font-display font-semibold text-sm mb-1">Support a Widow Family</div>
                <p className="text-slate-500 text-xs leading-relaxed mb-2">
                  Help widows become self-reliant and support their families with dignity.
                </p>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full" style={{ width: '55%', background: 'var(--red)' }}></div>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">$8,230 raised of $15,000</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setCampaign('Feed an Orphan')}
              className={`text-left rounded-xl overflow-hidden card-shadow border transition-all ${
                campaign === 'Feed an Orphan' ? 'ring-2' : ''
              }`}
              style={{ borderColor: campaign === 'Feed an Orphan' ? 'var(--red)' : '#e5e7eb' }}
            >
              <div className="relative h-32">
                <img
                  src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=400&q=70"
                  className="w-full h-full object-cover"
                  alt="Feed an Orphan"
                />
              </div>
              <div className="p-4">
                <div className="font-display font-semibold text-sm mb-1">Feed an Orphan</div>
                <p className="text-slate-500 text-xs leading-relaxed mb-2">
                  Provide nutritious meals and care to orphans who have no one.
                </p>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full" style={{ width: '63%', background: 'var(--red)' }}></div>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">$15,670 raised of $25,000</div>
              </div>
            </button>
          </div>

          {/* 4. YOUR DETAILS */}
          <h3 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--navy)' }}>
            4. Your Details
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none"
              />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-slate-200 rounded-md px-4 py-2.5 text-sm outline-none text-slate-600"
              >
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
              </select>
            </div>

            {/* 5. PAYMENT METHOD */}
            <h3 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--navy)' }}>
              5. Payment Method
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { name: 'Card', icon: 'fa-regular fa-credit-card' },
                { name: 'PayPal', icon: 'fa-brands fa-paypal' },
                { name: 'Bank Transfer', icon: 'fa-solid fa-building-columns' },
                { name: 'JazzCash / Easypaisa', icon: 'fa-solid fa-mobile-screen' },
              ].map((pm) => {
                const active = paymentMethod === pm.name;
                return (
                  <button
                    key={pm.name}
                    type="button"
                    onClick={() => setPaymentMethod(pm.name)}
                    className={`text-sm font-semibold py-3 rounded-md flex flex-col items-center gap-1 transition-all ${
                      active
                        ? 'border-2 text-red-600'
                        : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                    style={{ borderColor: active ? 'var(--red)' : undefined, color: active ? 'var(--red)' : undefined }}
                  >
                    <i className={pm.icon}></i> {pm.name}
                  </button>
                );
              })}
            </div>

            <button
              type="submit"
              className="w-full btn-red text-white font-semibold py-3.5 rounded-md inline-flex items-center justify-center gap-2 text-base"
            >
              <i className="fa-solid fa-heart"></i> Donate Now Securely
            </button>
            <p className="text-center text-xs text-slate-400 mt-2">
              Thank you! Your kindness brings hope and changes lives.
            </p>
          </form>
        </div>

        {/* SIDEBAR SUMMARY */}
        <aside className="space-y-6">
          <div className="rounded-xl overflow-hidden card-shadow border border-slate-100 bg-white">
            <div
              className="text-white font-display font-semibold px-5 py-3 flex items-center gap-2"
              style={{ background: 'var(--red)' }}
            >
              <i className="fa-solid fa-heart"></i> Your Donation Summary
            </div>
            <div className="p-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Type</span>
                <span className="font-semibold">{donationType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount</span>
                <span className="font-semibold">${amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Campaign</span>
                <span className="font-semibold text-right">{campaign}</span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center">
                <span className="font-semibold">Total Amount</span>
                <span className="text-xl font-display font-bold" style={{ color: 'var(--red)' }}>
                  ${parseFloat(amount || 0).toFixed(2)}{' '}
                  <span className="text-xs text-slate-400 font-normal">USD</span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-5 text-white" style={{ background: 'var(--navy)' }}>
            <div className="font-display font-semibold mb-3">Why Your Donation Matters</div>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex gap-2">
                <i className="fa-solid fa-heart mt-1 text-red-300"></i> You bring hope to those who have lost it.
              </li>
              <li className="flex gap-2">
                <i className="fa-solid fa-people-group mt-1 text-red-300"></i> You help in building a better tomorrow.
              </li>
              <li className="flex gap-2">
                <i className="fa-solid fa-seedling mt-1 text-red-300"></i> You become a part of lasting change.
              </li>
            </ul>
          </div>

          <div className="rounded-xl p-5 border border-slate-100 bg-white">
            <div className="font-display font-semibold mb-3 text-sm">We Accept</div>
            <div className="grid grid-cols-3 gap-2 text-2xl text-slate-400">
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-amex"></i>
              <i className="fa-brands fa-cc-paypal"></i>
              <i className="fa-solid fa-mobile-screen"></i>
              <i className="fa-solid fa-building-columns"></i>
            </div>
          </div>
        </aside>
      </section>

      <NewsletterSection />
    </>
  );
}
