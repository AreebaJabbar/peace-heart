import DividerHeart from './DividerHeart';

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section className="relative">
      <div
        className="h-[280px] md:h-[340px] w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(7,31,61,.72),rgba(7,31,61,.72)), url('${bgImage}')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-white font-display font-extrabold text-3xl md:text-5xl">{title}</h1>
          {subtitle && <p className="text-slate-200 mt-3">{subtitle}</p>}
          <DividerHeart />
        </div>
      </div>
    </section>
  );
}
