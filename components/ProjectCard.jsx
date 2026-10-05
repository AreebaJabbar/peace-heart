import Link from 'next/link';

export default function ProjectCard({ project }) {
  const { title, description, image } = project;

  // Trim description to max 110 chars for homepage view
  const shortDesc = description.length > 110 ? description.substring(0, 110) + '...' : description;

  const imageSrc = image.startsWith('http') || image.startsWith('/') 
    ? image 
    : `/uploads/projects/${image}`;

  return (
    <div className="rounded-xl overflow-hidden card-shadow bg-white">
      <div className="relative h-40">
        <img
          src={imageSrc}
          className="w-full h-full object-cover"
          alt={title}
        />
        <div
          className="absolute -bottom-5 left-4 w-11 h-11 rounded-full flex items-center justify-center text-white text-lg"
          style={{ background: 'var(--navy)' }}
        >
          <i className="fa-solid fa-hand-holding-heart"></i>
        </div>
      </div>
      <div className="p-5 pt-8">
        <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{shortDesc}</p>
        <Link
          href="/projects"
          className="text-sm font-semibold mt-3 inline-flex items-center gap-1"
          style={{ color: 'var(--red)' }}
        >
          Learn More <i className="fa-solid fa-arrow-right text-xs"></i>
        </Link>
      </div>
    </div>
  );
}
