import Link from 'next/link';
import PageHero from '../../components/PageHero';
import NewsletterSection from '../../components/NewsletterSection';

export const metadata = {
  title: 'Our Team | Peace For Heart Foundation',
  description: 'Meet the dedicated team, leaders, and volunteers working tirelessly to bring hope and healthcare to children and families across Pakistan.',
};

export default function TeamPage() {
  const coreTeam = [
    {
      name: 'Usman Khalid',
      role: 'Program Manager',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      desc: 'Oversees program planning and execution to ensure maximum community impact.',
      icon: 'fa-briefcase',
      colorBg: 'var(--navy)',
    },
    {
      name: 'Ayesha Noor',
      role: 'Education Head',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      desc: 'Leading our education initiatives and empowering children through learning.',
      icon: 'fa-book-open',
      colorBg: 'var(--red)',
    },
    {
      name: 'Sana Malik',
      role: 'Welfare Head',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      desc: 'Dedicated to widow support programs and women empowerment.',
      icon: 'fa-people-group',
      colorBg: 'var(--navy)',
    },
    {
      name: 'Hamza Raza',
      role: 'Charity Head',
      image: 'https://randomuser.me/api/portraits/men/51.jpg',
      desc: 'Manages charity drives and relief efforts for vulnerable communities.',
      icon: 'fa-hand-holding-heart',
      colorBg: 'var(--red)',
    },
    {
      name: 'Bilal Ahmed',
      role: 'Community Relations',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      desc: 'Builds partnerships and strengthens community engagement.',
      icon: 'fa-globe',
      colorBg: 'var(--navy)',
    },
  ];

  const volunteers = [
    { name: 'Zainab Fatima', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'Muhammad Talha', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { name: 'Sarah Khan', image: 'https://randomuser.me/api/portraits/women/28.jpg' },
    { name: 'Ali Hassan', image: 'https://randomuser.me/api/portraits/men/28.jpg' },
    { name: 'Hina Javed', image: 'https://randomuser.me/api/portraits/women/35.jpg' },
    { name: 'Fahad Ahmed', image: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { name: 'Irum Naz', image: 'https://randomuser.me/api/portraits/women/50.jpg' },
    { name: 'Daniyal Khan', image: 'https://randomuser.me/api/portraits/men/60.jpg' },
  ];

  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="The people behind the mission"
        bgImage="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=1600&q=70"
      />

      {/* LEADERSHIP */}
      <section className="py-16 px-5 max-w-5xl mx-auto">
        <h2 className="text-center font-display font-bold text-2xl mb-8" style={{ color: 'var(--navy)' }}>
          Our Leadership
        </h2>
        <div className="rounded-xl p-8 card-shadow grid md:grid-cols-[auto,1fr] gap-8 items-center border border-slate-100 bg-white">
          <img
            src="/assets/founder.jpg"
            alt="Mr. Najam Ul Saqab"
            className="w-40 h-40 rounded-full object-cover mx-auto"
          />
          <div>
            <span className="inline-block bg-blue-50 text-xs font-semibold px-3 py-1 rounded-full mb-2" style={{ color: 'var(--navy)' }}>
              Founder &amp; Chairman
            </span>
            <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'var(--navy)' }}>
              Mr. Najam Ul Saqab
            </h3>
            <p className="text-slate-600 leading-relaxed">
              At Peace For Heart Foundation, our goal is to reach those who are deprived of basic necessities of life. We believe that every individual deserves access to healthcare, education, and a life of dignity.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/1TeWcmNeMs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                style={{ background: '#3b5998' }}
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/pfhf.oundation?igsh=MThsY2ttcmc0MGNiag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                style={{ background: '#e1306c' }}
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TEAM */}
      <section className="py-6 px-5 max-w-7xl mx-auto">
        <h3 className="text-center font-display font-bold text-2xl mb-10" style={{ color: 'var(--navy)' }}>
          Our Core Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {coreTeam.map((member, i) => (
            <div key={i} className="bg-white rounded-xl p-5 text-center card-shadow">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs"
                  style={{ background: member.colorBg }}
                >
                  <i className={`fa-solid ${member.icon}`}></i>
                </div>
              </div>
              <div className="font-display font-semibold">{member.name}</div>
              <div className="text-xs font-semibold mb-2" style={{ color: member.colorBg }}>
                {member.role}
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VOLUNTEERS */}
      <section className="py-16 px-5 max-w-6xl mx-auto text-center">
        <h3 className="font-display font-bold text-2xl mb-8" style={{ color: 'var(--navy)' }}>
          Our Volunteers
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {volunteers.map((vol, i) => (
            <div key={i} className="text-center w-24">
              <img
                src={vol.image}
                alt={vol.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
              />
              <div className="text-xs font-semibold text-slate-700">{vol.name}</div>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-2 font-semibold px-6 py-2.5 rounded-md mt-10 text-sm"
          style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}
        >
          <i className="fa-solid fa-people-group"></i> Join as Volunteer
        </Link>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-5" style={{ background: 'var(--navy)' }}>
        <div className="max-w-5xl mx-auto text-center text-white">
          <h3 className="font-display font-bold text-2xl md:text-3xl">Want to be part of our mission?</h3>
          <p className="text-blue-100 mt-3 mb-6 max-w-xl mx-auto">
            Your time, skills and compassion can create a real difference in someone&apos;s life. Join us and help build a better tomorrow.
          </p>
          <Link
            href="/contact"
            className="btn-red text-white font-semibold px-7 py-3 rounded-md inline-flex items-center gap-2"
          >
            <i className="fa-solid fa-people-group"></i> Become a Volunteer
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
