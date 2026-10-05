import Link from 'next/link';
import PageHero from '../../components/PageHero';
import NewsletterSection from '../../components/NewsletterSection';
import { getProjects, formatFundingLabel } from '../../lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Our Projects | Peace For Heart Foundation',
  description: 'Explore our key programs and humanitarian projects including education for all, widow support, orphan rehabilitation, and relief work.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Home › Our Projects"
        bgImage="https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-16 px-5 max-w-7xl mx-auto space-y-14">
        {!projects || projects.length === 0 ? (
          <p className="text-center text-slate-400 py-10">
            No projects to show right now. Please check back soon.
          </p>
        ) : (
          projects.map((p, i) => {
            const imageSrc =
              p.image.startsWith('http') || p.image.startsWith('/')
                ? p.image
                : `/uploads/projects/${p.image}`;

            return (
              <div key={p.id || i} className="grid md:grid-cols-2 gap-10 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={imageSrc}
                    alt={p.title}
                    className="rounded-xl w-full h-72 object-cover card-shadow"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--navy)' }}>
                    {p.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{p.description}</p>
                  <div className="text-xs font-semibold mb-4" style={{ color: 'var(--red)' }}>
                    {formatFundingLabel(p.goal_amount, p.raised_amount, p.status)}
                  </div>
                  <Link
                    href="/donate"
                    className="btn-red text-white font-semibold px-6 py-2.5 rounded-md inline-flex items-center gap-2 text-sm"
                  >
                    Support This Program <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </section>

      <NewsletterSection />
    </>
  );
}
