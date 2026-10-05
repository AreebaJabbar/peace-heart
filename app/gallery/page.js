import Link from 'next/link';
import PageHero from '../../components/PageHero';
import NewsletterSection from '../../components/NewsletterSection';
import { getGalleryImages } from '../../lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Gallery | Peace For Heart Foundation',
  description: 'Explore photo moments of hope, relief drives, medical checkups, orphan care, and community empowerment by Peace For Heart Foundation.',
};

export default async function GalleryPage({ searchParams }) {
  const params = await searchParams;
  const currentCategory = params?.category || 'All';
  const categories = ['Education', 'Orphan Care', 'Widow Support', 'Relief Drives', 'Events'];

  const images = await getGalleryImages(currentCategory);

  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Moments of hope and change"
        bgImage="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-10 px-5 max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            href="/gallery"
            className={`filter-btn text-sm font-semibold px-5 py-2 rounded-full border transition-colors ${
              currentCategory === 'All'
                ? 'active bg-red-600 text-white border-red-600'
                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            All
          </Link>
          {categories.map((c) => {
            const active = currentCategory === c;
            return (
              <Link
                key={c}
                href={`/gallery?category=${encodeURIComponent(c)}`}
                className={`filter-btn text-sm font-medium px-5 py-2 rounded-full border transition-colors ${
                  active
                    ? 'active bg-red-600 text-white border-red-600'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {c}
              </Link>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        {!images || images.length === 0 ? (
          <p className="text-center text-slate-400 py-10">No images in this category yet.</p>
        ) : (
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((img, idx) => {
              const imageSrc =
                img.image.startsWith('http') || img.image.startsWith('/')
                  ? img.image
                  : `/uploads/gallery/${img.image}`;

              return (
                <div key={img.id || idx} className="relative rounded-xl overflow-hidden break-inside-avoid group">
                  <img
                    src={imageSrc}
                    alt={img.caption || img.category || 'Gallery image'}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-3">
                    <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition">
                      {img.caption || img.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <NewsletterSection />
    </>
  );
}
