import Image from 'next/image';

export const metadata = {
  title: 'STEM Camps & After School Programs | STEMOrbit',
  description: 'Explore STEMOrbit camps and after school programs designed to spark curiosity and hands-on STEM learning.',
};

export default function StemCampsNewPage() {
  return (
    <main className="min-h-screen bg-[#0d0f16] text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#12141c] via-[#1d1f2a] to-[#0d0f16]" />
        <div className="absolute inset-x-0 bottom-[-8%] h-40 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[-2deg] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_60%)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              <span className="text-sky-400">STEM Camps</span> &amp; After School Programs
            </h1>
            <p className="text-lg text-slate-200">
              Our expert guides and resources can help you create engaging after school programs and camps that inspire young minds to explore STEM. Read on for guides to make your program a success with Sphero.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-lg rounded-[28px] border border-sky-400/70 bg-[#11131a] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-r from-sky-500/10 to-purple-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black">
                <Image
                  src="/stemcamp.png"
                  alt="Students exploring robotics kits during a STEM camp workshop"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border border-sky-500/50 bg-[#0d0f16]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05060b] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="rounded-[32px] border-2 border-sky-400/60 bg-[#11131a] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/stemcapsnew (7).jpg"
                alt="Students exploring STEM robots"
                width={720}
                height={480}
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border-2 border-sky-400/60 bg-[#11131a] p-3 shadow-[0_15px_45px_rgba(0,0,0,0.4)]">
                <Image
                  src="/stemcapsnew (15).jpg"
                  alt="Sphero robot rolling along a track"
                  width={360}
                  height={240}
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
              <div className="rounded-[28px] border-2 border-sky-400/60 bg-[#11131a] p-3 shadow-[0_15px_45px_rgba(0,0,0,0.4)]">
                <Image
                  src="/stemcapsnew (24).jpg"
                  alt="Learner building a STEM project"
                  width={360}
                  height={240}
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Guides & Resources</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Your How-To Guides
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-200">
              Originally created for STEM summer camps, our how-to resources can be used to make any camp,
              workshop, or after school program a success. Inspire your students to explore the worlds of
              science, technology, engineering, and math with STEMOrbit kits, robotics platforms, and maker challenges.
            </p>
            <div className="rounded-3xl bg-[#0f121c] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.45)]">
              <h3 className="text-2xl font-bold text-sky-300">The STEMOrbit After School Guide</h3>
              <p className="mt-4 text-base text-slate-200">
                Wondering how to integrate STEM learning into your after school program? Our robots and kits provide the
                perfect hands-on solution for extending the learning day and getting students started with computer
                science and engineering principles.
              </p>
              <a
                href="/stem_brochure.pdf"
                className="mt-6 inline-flex rounded-full bg-sky-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-sky-400"
              >
                Get the After School Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05060b] px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-sky-400 md:text-5xl">Summer Camp Guides</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[32px] border-2 border-sky-500/60 bg-[#11131a] p-4 shadow-[0_25px_65px_rgba(0,0,0,0.45)]">
              <Image
                src="/stemcapsnew (20).jpg"
                alt="Kids enjoying STEM summer camp activities"
                width={900}
                height={600}
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-sky-300">Speed into STEAM with STEMOrbit indi</h3>
              <p className="text-lg text-slate-200">
                Engage and excite early learners in a STEM summer camp with our award-winning, entry-level robot driven
                by color—no screens required. Designed for PK-2 explorers, the indi platform makes it effortless to build
                storytelling, problem-solving, and coding into every day of camp.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/stem_brochure.pdf"
                  className="rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
                >
                  Download indi Guide
                </a>
                <a
                  href="/contact"
                  className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/5"
                >
                  Shop STEMOrbit indi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05060b] px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-sky-300">Make a Splash with STEMOrbit BOLT</h3>
            <p className="text-lg text-slate-200">
              Our best-selling robot for grades 3+ provides endless possibilities for summer learning — and it is
              waterproof (and paint-proof!). Take it from the makers lab to the pool for high-energy STEAM adventures
              that mix physics, creativity, and coding.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/stem_brochure.pdf"
                className="rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
              >
                Download BOLT Guide
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Shop STEMOrbit BOLT
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] border-2 border-sky-500/60 bg-[#11131a] p-4 shadow-[0_25px_65px_rgba(0,0,0,0.45)]">
              <Image
                src="/stemcapsnew (36).jpg"
                alt="Waterproof STEM robot in action"
                width={900}
                height={600}
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 w-40 h-40 rounded-full border-4 border-sky-400 bg-[#0d0f16] p-2 shadow-xl hidden sm:block">
              <Image
                src="/stemcapsnew (45).jpg"
                alt="STEM robot internal components"
                width={200}
                height={200}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05060b] px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[32px] border-2 border-sky-500/60 bg-[#11131a] p-4 shadow-[0_25px_65px_rgba(0,0,0,0.45)]">
            <Image
              src="/stemcapsnew (27).jpg"
              alt="Students building with STEM RVR+ kits"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-sky-300">Get Ready for STEM Fun, Hands-on Learning with RVR+</h3>
            <p className="text-lg text-slate-200">
              Looking to build a camp that combines engineering design, computer science, and fun? Then RVR+ is the perfect tool for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/stem_brochure.pdf"
                className="rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
              >
                Download RVR+ Guide
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Shop STEMOrbit RVR+
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05060b] px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-sky-300">STEMOrbit littleBits Mean Big Fun</h3>
            <p className="text-lg text-slate-200">
              What better time than summer for students to invent! Encourage creativity and problem-solving for
              elementary-aged learners with littleBits kits that snap together to power endless ideas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/stem_brochure.pdf"
                className="rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
              >
                Download littleBits Guide
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Shop STEMOrbit littleBits
              </a>
            </div>
          </div>
          <div className="rounded-[32px] border-2 border-sky-500/60 bg-[#11131a] p-4 shadow-[0_25px_65px_rgba(0,0,0,0.45)]">
            <Image
              src="/stemcapsnew (17).jpg"
              alt="Student inventing with littleBits components"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#05060b] px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[32px] border-2 border-sky-500/60 bg-[#11131a] p-4 shadow-[0_25px_65px_rgba(0,0,0,0.45)]">
            <Image
              src="/stemcapsnew (10).jpg"
              alt="Young makers exploring robotics projects"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Project Inspiration</p>
            <h3 className="text-3xl font-bold text-sky-300">Launch Builder Labs for Every Age</h3>
            <p className="text-lg text-slate-200">
              From LEGO-compatible builds to electronics mash-ups, our Builder Labs show you how to keep students busy
              with rapid prototyping challenges that boost collaboration and creative confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/stem_brochure.pdf"
                className="rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-400"
              >
                Explore Builder Labs
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Talk to Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate bg-gradient-to-br from-[#07121f] via-[#0f1d2f] to-[#07121f] px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url('/grid.svg')", backgroundSize: '600px' }} />
        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Ready to Begin?</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Enroll Your Child in STEMOrbit Camps</h2>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Seats fill fast! Secure a spot in our high-energy, project-based camps and watch curiosity turn into confidence.
            Live mentorship, custom kits, and unforgettable STEM adventures await.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="https://wa.me/917009594410?text=Hi!%20I%20want%20to%20enroll%20my%20child%20in%20STEMOrbit%20Camp."
              className="rounded-full bg-sky-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-sky-400"
            >
              Enroll Now
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/40 px-8 py-3 text-lg font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Book a Counseling Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

