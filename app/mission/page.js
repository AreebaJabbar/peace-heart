import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

export const metadata = {
  title: 'Mission & Vision | Peace Heart Foundation',
  description: 'Our mission and vision is to provide life-saving healthcare and hole-in-the-heart treatment to every child in Pakistan regardless of ability to pay.',
};

export default function MissionPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-[280px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(13,31,61,.94) 0%, rgba(13,31,61,.75) 45%, rgba(13,31,61,.35) 100%), url('https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=70')",
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 py-10 relative z-10 w-full">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl mb-3 font-display">Mission &amp; Vision</h1>
          <div className="flex items-center gap-2 text-white/75 text-sm font-medium">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <i className="fa-solid fa-chevron-right text-[11px] text-white/50"></i>
            <span className="text-white font-semibold">Mission &amp; Vision</span>
          </div>
        </div>
      </section>

      {/* INTRO LINE */}
      <section className="pt-16 md:pt-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="eyebrow">What Drives Us</span>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-navy leading-tight font-display">
            &quot;Saving a Life Is Tantamount to Saving the Whole Humanity&quot;
          </h2>
          <div className="divider-heart mt-4">
            <span className="line"></span>
            <i className="fa-solid fa-heart text-red text-xs"></i>
            <span className="line"></span>
          </div>
          <p className="text-muted text-[15.5px] leading-[1.85] mt-6">
            Every part of our work, from free heart camps to hospital construction, is guided by two simple statements — what we ultimately want to build, and how we act to get there.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1180px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-9 md:p-11 bg-bgsoft">
            <div className="w-[52px] h-[52px] rounded-2xl bg-blue text-white flex items-center justify-center text-xl mb-5">
              <i className="fa-solid fa-eye"></i>
            </div>
            <span className="text-blue font-bold text-xs tracking-[.12em] uppercase block mb-2 font-display">
              Our Vision
            </span>
            <h3 className="text-navy font-bold text-2xl mb-4 font-display">
              A World Without Untreated Heart Holes
            </h3>
            <p className="text-muted text-[15px] leading-[1.85]">
              Struggling to establish a state-of-the-art hospital, free of any discrimination based on religion, political affiliation, race or any other background, for the treatment of patients affected by a hole in the heart.
            </p>
          </div>
          <div className="rounded-2xl p-9 md:p-11 bg-bgredsoft">
            <div className="w-[52px] h-[52px] rounded-2xl bg-red text-white flex items-center justify-center text-xl mb-5">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <span className="text-red font-bold text-xs tracking-[.12em] uppercase block mb-2 font-display">
              Our Mission
            </span>
            <h3 className="text-navy font-bold text-2xl mb-4 font-display">
              Care That Doesn&apos;t Depend on Ability to Pay
            </h3>
            <p className="text-muted text-[15px] leading-[1.85]">
              To act as a model institution to alleviate the suffering of patients with Congenital Heart Anomalies (hole in the heart) through the application of modern methods of curative and palliative therapy, irrespective of their ability to pay.
            </p>
          </div>
        </div>
      </section>

      {/* AIMS & OBJECTIVES */}
      <section className="py-16 md:py-24 bg-bgsoft text-center">
        <div className="max-w-[1180px] mx-auto px-6">
          <span className="eyebrow">Aims &amp; Objectives</span>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-navy leading-tight font-display">
            How We Turn Our Mission Into Action
          </h2>
          <div className="divider-heart mt-4">
            <span className="line"></span>
            <i className="fa-solid fa-heart text-red text-xs"></i>
            <span className="line"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="bg-white rounded-2xl p-7 border border-slate-100">
              <div className="w-[52px] h-[52px] rounded-full bg-blue text-white flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-hand-holding-medical"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Economical Treatment</h4>
              <p className="text-muted text-[13.5px] leading-relaxed">
                Facilitate the best possible treatment at an economical rate for every family we reach.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-slate-100">
              <div className="w-[52px] h-[52px] rounded-full bg-red text-white flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Free Heart Camps</h4>
              <p className="text-muted text-[13.5px] leading-relaxed">
                Identify needy patients through free heart camps in rural and urban underprivileged populations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-slate-100">
              <div className="w-[52px] h-[52px] rounded-full bg-blue text-white flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Fundraising Camps</h4>
              <p className="text-muted text-[13.5px] leading-relaxed">
                Arrange fundraising camps to financially support poor cardiac kids of Pakistan for open-heart surgery.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-slate-100">
              <div className="w-[52px] h-[52px] rounded-full bg-red text-white flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Awareness</h4>
              <p className="text-muted text-[13.5px] leading-relaxed">
                Create awareness regarding heart disease — its cause, treatment and prevention.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-slate-100">
              <div className="w-[52px] h-[52px] rounded-full bg-blue text-white flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Donor Identification</h4>
              <p className="text-muted text-[13.5px] leading-relaxed">
                Identify donors who can help the cause and connect them directly with children in need.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-slate-100">
              <div className="w-[52px] h-[52px] rounded-full bg-red text-white flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-hospital"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Dedicated Hospital</h4>
              <p className="text-muted text-[13.5px] leading-relaxed">
                Work toward Pakistan&apos;s first dedicated hole-in-the-heart hospital, on land already secured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">Why It Matters</span>
            <h2 className="text-3xl md:text-[34px] font-extrabold text-navy leading-tight mb-5 font-display">
              A Baby Shouldn&apos;t Die for Being Born Poor
            </h2>
            <p className="text-muted text-[15.5px] leading-[1.85] mb-4">
              Many children die of congenital heart disease simply because their parents cannot afford treatment or travel abroad for surgery. Peace Heart Foundation exists to close that gap — connecting families to doctors, hospitals and donors who can help.
            </p>
            <p className="text-muted text-[15.5px] leading-[1.85]">
              Every mission statement above is already at work in our 57-district reach and the 108 children we&apos;ve helped treat — and it will keep guiding us until Pakistan&apos;s first hole-in-the-heart hospital opens its doors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-bgsoft rounded-2xl p-7 text-center">
              <div className="text-3xl font-extrabold text-navy font-display">57</div>
              <div className="text-muted text-sm mt-1">Districts Reached</div>
            </div>
            <div className="bg-bgredsoft rounded-2xl p-7 text-center">
              <div className="text-3xl font-extrabold text-navy font-display">108</div>
              <div className="text-muted text-sm mt-1">Children Treated</div>
            </div>
            <div className="bg-bgredsoft rounded-2xl p-7 text-center">
              <div className="text-3xl font-extrabold text-navy font-display">4</div>
              <div className="text-muted text-sm mt-1">Acres of Land Secured</div>
            </div>
            <div className="bg-bgsoft rounded-2xl p-7 text-center">
              <div className="text-3xl font-extrabold text-navy font-display">2008</div>
              <div className="text-muted text-sm mt-1">Founded In</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />
    </>
  );
}
