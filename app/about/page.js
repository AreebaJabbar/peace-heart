import Link from 'next/link';
import NewsletterSection from '../../components/NewsletterSection';

export const metadata = {
  title: 'About Us | Peace Heart Foundation',
  description: 'Peace Heart Foundation is a registered NGO working since 2008 to treat children born with a hole in the heart across Pakistan.',
};

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-[280px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(13,31,61,.94) 0%, rgba(13,31,61,.75) 45%, rgba(13,31,61,.35) 100%), url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=70')",
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 py-10 relative z-10 w-full">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl mb-3 font-display">About Us</h1>
          <div className="flex items-center gap-2 text-white/75 text-sm font-medium">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <i className="fa-solid fa-chevron-right text-[11px] text-white/50"></i>
            <span className="text-white font-semibold">About Us</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="text-3xl md:text-[34px] font-extrabold text-navy leading-tight font-display">
              Saving Little Hearts<br />Since 2023
            </h2>
            <div className="divider-heart mt-4 !justify-start">
              <span className="line"></span>
              <i className="fa-solid fa-heart text-red text-xs"></i>
              <span className="line"></span>
            </div>

            <p className="text-muted text-[15.5px] leading-[1.85] mt-5">
              Peace Heart Foundation is a registered non-governmental organization, established in Badin, Sindh in 2008. We were founded on a single conviction — that saving one life is like saving all of humanity — and built to help children born with a hole in the heart, a Congenital Heart Anomaly that too often goes untreated simply because a family cannot afford it.
            </p>
            <p className="text-muted text-[15.5px] leading-[1.85] mt-4">
              We are the first organization in Pakistan to work on this cause across 57 districts, connecting affected children&apos;s families with the right hospitals and doctors, and where needed, facilitating treatment abroad — regardless of caste, color, creed, religion, or ethnic background.
            </p>
            <p className="text-navy font-bold text-base mt-4 font-display">
              No child should lose a fight they never chose to start.
            </p>

            <div className="inline-flex items-center gap-2 bg-bgsoft text-blue text-xs font-semibold px-4 py-2 rounded-full mt-5">
              <i className="fa-solid fa-file-shield"></i> Reg. No. DO-SW-CDD-BDN-VA-143
            </div>
          </div>

          <div className="grid grid-cols-[1.1fr_1fr] gap-5">
            <div className="flex flex-col gap-4">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=70"
                alt="Child receiving medical checkup"
                className="w-full h-[130px] object-cover rounded-2xl shadow-lg shadow-navy/20"
              />
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=500&q=70"
                alt="Doctor consultation for heart patient"
                className="w-full h-[130px] object-cover rounded-2xl shadow-lg shadow-navy/20"
              />
            </div>

            {/* Timeline */}
            <div className="relative pl-9">
              <div className="absolute left-[15px] top-1.5 bottom-1.5 w-0.5 bg-slate-200"></div>

              <div className="relative pb-8">
                <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-blue text-white text-xs flex items-center justify-center shadow-md z-10">
                  <i className="fa-solid fa-flag"></i>
                </div>
                <div className="text-blue text-xs font-bold tracking-wide">2023</div>
                <h4 className="text-navy font-bold text-[16.5px] mt-0.5 mb-1 font-display">Foundation Registered</h4>
                <p className="text-muted text-[13.5px] leading-relaxed">
                  Registered under CDD in Badin, Sindh, to serve children with holes in their hearts.
                </p>
              </div>

              <div className="relative pb-8">
                <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-red text-white text-xs flex items-center justify-center shadow-md z-10">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="text-red text-xs font-bold tracking-wide">Growth</div>
                <h4 className="text-navy font-bold text-[16.5px] mt-0.5 mb-1 font-display">57 Districts Reached</h4>
                <p className="text-muted text-[13.5px] leading-relaxed">
                  Became the first Pakistani organization dedicated to this cause nationwide.
                </p>
              </div>

              <div className="relative pb-8">
                <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-blue text-white text-xs flex items-center justify-center shadow-md z-10">
                  <i className="fa-solid fa-hand-holding-medical"></i>
                </div>
                <div className="text-blue text-xs font-bold tracking-wide">Ongoing</div>
                <h4 className="text-navy font-bold text-[16.5px] mt-0.5 mb-1 font-display">108 Children Treated</h4>
                <p className="text-muted text-[13.5px] leading-relaxed">
                  Supported medication, tests, surgery, transfusion, lodging and boarding costs.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-red text-white text-xs flex items-center justify-center shadow-md z-10">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <div className="text-red text-xs font-bold tracking-wide">Ahead</div>
                <h4 className="text-navy font-bold text-[16.5px] mt-0.5 mb-1 font-display">Hospital Land Secured</h4>
                <p className="text-muted text-[13.5px] leading-relaxed">
                  Four acres of land donated for Pakistan&apos;s first dedicated hole-in-the-heart hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1180px] mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-9 bg-bgsoft">
            <div className="w-[52px] h-[52px] rounded-2xl bg-blue text-white flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h4 className="text-navy font-bold text-lg mb-2.5 font-display">Our Vision</h4>
            <p className="text-muted text-[14.5px] leading-[1.75]">
              To establish a state-of-the-art hospital, free of any discrimination based on religion, political affiliation, race or background, dedicated to the treatment of hole-in-the-heart patients.
            </p>
          </div>
          <div className="rounded-2xl p-9 bg-bgredsoft">
            <div className="w-[52px] h-[52px] rounded-2xl bg-red text-white flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h4 className="text-navy font-bold text-lg mb-2.5 font-display">Our Mission</h4>
            <p className="text-muted text-[14.5px] leading-[1.75]">
              To act as a model institution that eases the suffering of patients with Congenital Heart Anomalies through modern curative and palliative therapy — irrespective of their ability to pay.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-bgsoft rounded-[22px] p-8 md:p-12 grid md:grid-cols-[220px_1fr] gap-10 items-center">
            <div className="text-center">
              <img
                src="/assets/founder.jpg"
                alt="Mr. Najam Ul Saqab"
                className="w-[130px] h-[130px] rounded-full object-cover border-4 border-white shadow-xl mx-auto"
              />
              <h4 className="text-navy font-bold text-[17px] mt-4 font-display">Mr. Najam Ul Saqab</h4>
              <p className="text-muted text-[13px] mt-0.5">
                Founder &amp; Chairman<br />Peace Heart Foundation
              </p>
            </div>
            <div>
              <i className="fa-solid fa-quote-left text-blue-100 text-4xl mb-2" style={{ color: '#c7d4ea' }}></i>
              <h3 className="text-blue font-bold text-xl mb-3.5 font-display">Founder&apos;s Message</h3>
              <p className="text-slate-600 text-[15px] leading-[1.85] mb-3.5">
                At Peace For Heart Foundation, our goal is to reach those who are deprived of basic necessities of life. We believe that every individual deserves access to healthcare, education, and a life of dignity.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] mb-3.5">
                Our foundation is not only focused on providing immediate relief but also on creating long-term impact through education and skill development. We are committed to empowering the youth so they can contribute positively to society.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85] mb-3.5">
                Our dream is a dedicated hospital where every child with a hole in the heart, regardless of who they are, can be treated with dignity.
              </p>
              <p className="text-slate-600 text-[15px] leading-[1.85]">
                I invite individuals, organizations, and donors to join hands with us in this noble mission so that together we can build a more compassionate and peaceful society.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-16 md:py-24 bg-bgsoft text-center">
        <div className="max-w-[1180px] mx-auto px-6">
          <span className="eyebrow">Our Impact So Far</span>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-navy leading-tight font-display">
            Achievements That Keep Us Going
          </h2>
          <div className="divider-heart mt-4">
            <span className="line"></span>
            <i className="fa-solid fa-heart text-red text-xs"></i>
            <span className="line"></span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-9 border border-slate-100">
              <div className="text-4xl font-extrabold text-navy font-display">
                <span className="text-red">108</span>
              </div>
              <div className="text-muted text-sm mt-2 font-medium">
                Children treated — medication, surgery, tests &amp; transfusion
              </div>
            </div>
            <div className="bg-white rounded-2xl p-9 border border-slate-100">
              <div className="text-4xl font-extrabold text-navy font-display">
                <span className="text-red">57</span>
              </div>
              <div className="text-muted text-sm mt-2 font-medium">Districts across Pakistan reached</div>
            </div>
            <div className="bg-white rounded-2xl p-9 border border-slate-100">
              <div className="text-4xl font-extrabold text-navy font-display">
                <span className="text-red">4</span>
              </div>
              <div className="text-muted text-sm mt-2 font-medium">Acres of land donated for our future hospital</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-[1180px] mx-auto px-6">
          <span className="eyebrow">What We Do</span>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-navy leading-tight font-display">
            How We Help Children With Holes in Their Hearts
          </h2>
          <div className="divider-heart mt-4">
            <span className="line"></span>
            <i className="fa-solid fa-heart text-red text-xs"></i>
            <span className="line"></span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
            <div className="border border-slate-100 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 transition-all">
              <div className="w-[60px] h-[60px] rounded-full bg-blue text-white flex items-center justify-center text-xl mx-auto mb-4">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Free Heart Camps</h4>
              <p className="text-muted text-[13px] leading-relaxed">
                Identifying needy patients through free camps in rural and urban underprivileged areas.
              </p>
            </div>
            <div className="border border-slate-100 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 transition-all">
              <div className="w-[60px] h-[60px] rounded-full bg-red text-white flex items-center justify-center text-xl mx-auto mb-4">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Fundraising Support</h4>
              <p className="text-muted text-[13px] leading-relaxed">
                Raising funds for open-heart surgery for financially struggling cardiac children.
              </p>
            </div>
            <div className="border border-slate-100 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 transition-all">
              <div className="w-[60px] h-[60px] rounded-full bg-blue text-white flex items-center justify-center text-xl mx-auto mb-4">
                <i className="fa-solid fa-hospital-user"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Treatment Facilitation</h4>
              <p className="text-muted text-[13px] leading-relaxed">
                Connecting families with hospitals and doctors, including treatment abroad when needed.
              </p>
            </div>
            <div className="border border-slate-100 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 transition-all">
              <div className="w-[60px] h-[60px] rounded-full bg-red text-white flex items-center justify-center text-xl mx-auto mb-4">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h4 className="text-navy font-bold text-[15.5px] mb-2 font-display">Awareness &amp; Prevention</h4>
              <p className="text-muted text-[13px] leading-relaxed">
                Educating communities on the cause, treatment and prevention of heart disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="pb-16 md:pb-24 bg-bgsoft text-center pt-10">
        <div className="max-w-[1180px] mx-auto px-6">
          <span className="eyebrow">Reach Us</span>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-navy leading-tight font-display">Get in Touch</h2>
          <div className="divider-heart mt-4">
            <span className="line"></span>
            <i className="fa-solid fa-heart text-red text-xs"></i>
            <span className="line"></span>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-12 text-left">
            <div className="bg-white rounded-2xl p-7 flex gap-4 items-start border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue/10 text-blue flex items-center justify-center text-lg shrink-0">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4 className="text-blue font-bold text-[15.5px] mb-1.5 font-display">Head Office</h4>
                <p className="text-muted text-[13.5px] leading-relaxed">
                  Chaman Street House No. 7, Street No. 10 Modern Colony Kot Lakhpat, Lahore
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-7 flex gap-4 items-start border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-red/10 text-red flex items-center justify-center text-lg shrink-0">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4 className="text-red font-bold text-[15.5px] mb-1.5 font-display">Phone</h4>
                <p className="text-muted text-[13.5px] leading-relaxed">+447988575653</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-7 flex gap-4 items-start border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue/10 text-blue flex items-center justify-center text-lg shrink-0">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-blue font-bold text-[15.5px] mb-1.5 font-display">Email</h4>
                <p className="text-muted text-[13.5px] leading-relaxed">info@phffoundation.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />
    </>
  );
}
