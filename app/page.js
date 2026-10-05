import Link from 'next/link';
import { getHomeProjects, getHomeGallery } from '../lib/db';
import ProjectCard from '../components/ProjectCard';
import NewsletterSection from '../components/NewsletterSection';
import DividerHeart from '../components/DividerHeart';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const homeProjects = await getHomeProjects();
  const homeGallery = await getHomeGallery();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative">
        <div
          className="h-[520px] md:h-[600px] w-full bg-cover bg-center relative flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,31,61,.65),rgba(7,31,61,.65)), url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=70')",
          }}
        >
          <div className="max-w-4xl mx-auto px-5 text-center text-white">
            <div className="text-xs tracking-[3px] font-semibold text-red-300 mb-4 uppercase">
              TOGETHER WE CAN
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight">
              Peace for Heart, <br />
              Hope for Every Life
            </h1>
            <p className="text-slate-200 mt-5 max-w-2xl mx-auto">
              Building a better tomorrow through education, widow support, orphan rehabilitation and charity relief work.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                href="/donate"
                className="btn-red text-white font-semibold px-7 py-3 rounded-md inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-heart"></i> Donate Now
              </Link>
              <Link
                href="/mission"
                className="btn-outline-white text-white font-semibold px-7 py-3 rounded-md inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-circle-play"></i> Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white shadow-md relative z-10 -mt-1">
        <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-display font-extrabold" style={{ color: 'var(--navy)' }}>
              12,500+
            </div>
            <div className="text-slate-500 text-sm mt-1">Orphans Supported</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-extrabold" style={{ color: 'var(--navy)' }}>
              7,800+
            </div>
            <div className="text-slate-500 text-sm mt-1">Widows Empowered</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-extrabold" style={{ color: 'var(--navy)' }}>
              25,000+
            </div>
            <div className="text-slate-500 text-sm mt-1">Students Educated</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-extrabold" style={{ color: 'var(--navy)' }}>
              50+
            </div>
            <div className="text-slate-500 text-sm mt-1">Cities Reached</div>
          </div>
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        <h2 className="text-center font-display font-bold text-3xl" style={{ color: 'var(--navy)' }}>
          Our Projects
        </h2>
        <DividerHeart />
        <div className="grid md:grid-cols-4 gap-6">
          {!homeProjects || homeProjects.length === 0 ? (
            <p className="col-span-4 text-center text-slate-400">No projects to show right now.</p>
          ) : (
            homeProjects.map((p) => <ProjectCard key={p.id} project={p} />)
          )}
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-16 px-5" style={{ background: 'var(--bg-light)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs tracking-[3px] font-semibold" style={{ color: 'var(--red)' }}>
              OUR MISSION
            </div>
            <h2 className="font-display font-bold text-3xl mt-2 mb-4" style={{ color: 'var(--navy)' }}>
              Compassion is Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Peace For Heart Foundation is a non-profit organization dedicated to serving humanity with love, dignity and respect. We believe every human deserves a chance to live a peaceful and purposeful life.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-2 text-slate-700">
                <i className="fa-solid fa-circle-check mt-1" style={{ color: 'var(--navy)' }}></i>
                We serve regardless of race, religion or background.
              </li>
              <li className="flex gap-2 text-slate-700">
                <i className="fa-solid fa-circle-check mt-1" style={{ color: 'var(--navy)' }}></i>
                We ensure transparency and accountability in every step.
              </li>
              <li className="flex gap-2 text-slate-700">
                <i className="fa-solid fa-circle-check mt-1" style={{ color: 'var(--navy)' }}></i>
                We believe in sustainable, long-term community development.
              </li>
            </ul>
            <Link
              href="/mission"
              className="btn-red text-white font-semibold px-6 py-2.5 rounded-md inline-flex items-center gap-2"
            >
              Read More <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </div>
          <div className="relative flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-white card-shadow">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=600&q=70"
                className="w-full h-full object-cover"
                alt="Mission"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-5 max-w-4xl mx-auto text-center">
        <h3 className="font-display font-bold text-2xl" style={{ color: 'var(--navy)' }}>
          What People Say About Us
        </h3>
        <DividerHeart />
        <div className="rounded-xl p-8 card-shadow" style={{ background: 'var(--bg-light)' }}>
          <img
            src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=500&q=70"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
            alt="Amina Bibi"
          />
          <p className="text-slate-600 italic">
            &quot;Peace For Heart Foundation changed my life when I had no hope left. They supported me, trained me and gave me the strength to stand on my own feet. May Allah bless their every effort.&quot;
          </p>
          <div className="font-semibold mt-4" style={{ color: 'var(--navy)' }}>
            Amina Bibi
          </div>
          <div className="text-xs text-slate-500">Beneficiary — Widow Support Program</div>
        </div>
      </section>

      {/* DONATION BANNER */}
      <section className="py-14 px-5">
        <div
          className="max-w-6xl mx-auto rounded-xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'var(--red)' }}
        >
          <div className="flex items-center gap-4 text-white">
            <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-2xl">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div>
              <div className="font-display font-bold text-xl">
                Your small donation can change someone&apos;s whole life.
              </div>
              <div className="text-red-100 text-sm mt-1">Be the reason for someone&apos;s smile today.</div>
            </div>
          </div>
          <Link
            href="/donate"
            className="btn-outline-white text-white font-semibold px-7 py-3 rounded-md inline-flex items-center gap-2"
          >
            <i className="fa-solid fa-heart"></i> Donate Now
          </Link>
        </div>
      </section>

      {/* MOMENTS OF HOPE */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        <h3 className="text-center font-display font-bold text-2xl" style={{ color: 'var(--navy)' }}>
          Moments of Hope
        </h3>
        <DividerHeart />
        {!homeGallery || homeGallery.length === 0 ? (
          <p className="text-center text-slate-400 py-6">No gallery images to display right now.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {homeGallery.map((item, idx) => {
              const imageSrc =
                item.image.startsWith('http') || item.image.startsWith('/')
                  ? item.image
                  : `/uploads/gallery/${item.image}`;

              return (
                <div key={item.id || idx} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={imageSrc}
                    className="w-full h-28 md:h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={item.caption || item.category || 'Moment of Hope'}
                  />
                  {item.caption && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-2 pointer-events-none">
                      <span className="text-white text-[11px] font-medium leading-tight opacity-0 group-hover:opacity-100 transition line-clamp-2">
                        {item.caption}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <div className="text-center mt-8">
          <Link href="/gallery" className="font-semibold text-sm" style={{ color: 'var(--red)' }}>
            View Full Gallery <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />
    </>
  );
}
