import Image from 'next/image';

export const metadata = {
  title: 'STEM Camps & After School Programs | STEMOrbit',
  description: 'Explore STEMOrbit camps and after school programs designed to spark curiosity and hands-on STEM learning.',
};

export default function StemCampsNewPage() {
  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-100">
        <div className="absolute inset-x-0 bottom-[-8%] h-40 bg-gradient-to-r from-transparent via-pink-200/30 to-transparent rotate-[-2deg]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.2),_transparent_60%)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              <span className="text-sky-400">STEM Camp</span>
            </h1>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="text-pink-600 text-base tracking-[0.4em] uppercase">Where Curiosity Meets Innovation</p>
              <p className="text-gray-800">
                At STEMorbit, learning becomes an adventure! Our STEM Camps welcome students from Grade 1 to 12,
                offering hands-on projects that spark creativity, problem-solving, and a lifelong love for technology.
              </p>
              <p className="text-gray-800">
                Every day is packed with build-it-yourself challenges, collaborative missions, and guided exploration
                led by passionate trainers who turn curiosity into real-world innovation.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-lg rounded-[28px] border border-pink-200 bg-white p-3 shadow-[0_20px_50px_rgba(244,114,182,0.25)]">
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-r from-pink-200/50 to-purple-200/50 blur-3xl" />
              <div className="relative overflow-hidden rounded-[22px] border border-pink-100 bg-white">
                <Image
                  src="/stemcamps (1).jpg"
                  alt="STEMorbit students collaborating on a robotics build"
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
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[32px] border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50 p-4 shadow-lg">
            <Image
              src="/stemcamps (2).jpg"
              alt="Children working with robotics kits at camp"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-pink-600">What Happens in a STEMorbit Camp?</h2>
            <p className="text-lg text-gray-600">
              Kids build, code, experiment, and innovate with real STEM tools — guided step-by-step by expert trainers.
              Every activity is designed to transform imagination into tangible creations.
            </p>
            <ul className="grid gap-3 text-base text-gray-700">
              {[
                'Robotics & Automation',
                'Coding & Game Development',
                'Science Experiments & DIY Gadgets',
                'AI, Sensors, Drones & VR experience',
                'Art + Technology creativity projects',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-pink-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-pink-600">Winter &amp; Summer STEM Camps</h2>
            <p className="text-lg text-gray-600">
              School vacations become skill-building journeys at STEMorbit. Students dive into themed missions that
              strengthen confidence, teamwork, and analytical thinking while building something new every day.
            </p>
            <ul className="grid gap-3 text-base text-gray-700">
              {[
                'Engineering challenges & gadget making',
                'Drone & aerodynamics workshops',
                'Virtual reality adventures',
                'Electronics + craft integration',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[32px] border-2 border-pink-200 bg-gradient-to-br from-white to-rose-50 p-4 shadow-lg">
            <Image
              src="/stemcamps (3).jpg"
              alt="Student testing a drone prototype"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[32px] border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50 p-4 shadow-lg">
            <Image
              src="/stemcamps (4).jpg"
              alt="After school innovation program in action"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-pink-600">After-School Innovation Programs</h2>
            <p className="text-lg text-gray-600">
              Keep the excitement going all year! Our structured after-school pathway helps students go deeper with
              guided mentorship, graded projects, and turn-key trainer + equipment support for schools.
            </p>
            <ul className="grid gap-3 text-base text-gray-700">
              {['Robotics', 'Coding', 'Emerging Technologies'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pink-50 via-white to-rose-100 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-500">Young Innovators</p>
            <h2 className="text-3xl font-bold text-pink-600">STEMorbit — Turning Your Ideas into Reality</h2>
            <p className="text-lg text-gray-600">
              Because the future belongs to creators, tinkerers, and builders. STEMorbit equips every child with the
              mindset and tools to imagine boldly and engineer the future.
            </p>
          </div>
          <div className="rounded-[32px] border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50 p-4 shadow-lg">
            <Image
              src="/stemcamps (5).jpg"
              alt="Student showcasing a finished STEM project"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-pink-100 to-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              <span className="text-pink-600">Gallery</span> of <span className="text-purple-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See the amazing projects and creations from our STEM camp participants
            </p>
          </div>

          {/* Infinite Scroll Gallery */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of images */}
              <div className="flex gap-4 mr-4">
                {[
                  '/camps_(1).jpg',
                  '/camps_(2).jpg',
                  '/camps_(3).jpg',
                  '/camps_(4).jpg',
                  '/camps_(5).jpg',
                  '/camps_(6).jpg',
                  '/camps_(7).jpg',
                  '/camps_(8).jpg',
                  '/camps_(9).jpg',
                  '/camps_(10).jpg',
                  '/camps_(11).jpg',
                  '/camps_(12).jpg',
                  '/camps_(13).jpg',
                  '/camps_(14).jpg',
                  '/camps_(15).jpg',
                  '/camps_(16).jpg',
                  '/camps_(17).jpg',
                  '/camps_(18).jpg'
                ].map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-4 mr-4">
                {[
                  '/camps_(1).jpg',
                  '/camps_(2).jpg',
                  '/camps_(3).jpg',
                  '/camps_(4).jpg',
                  '/camps_(5).jpg',
                  '/camps_(6).jpg',
                  '/camps_(7).jpg',
                  '/camps_(8).jpg',
                  '/camps_(9).jpg',
                  '/camps_(10).jpg',
                  '/camps_(11).jpg',
                  '/camps_(12).jpg',
                  '/camps_(13).jpg',
                  '/camps_(14).jpg',
                  '/camps_(15).jpg',
                  '/camps_(16).jpg',
                  '/camps_(17).jpg',
                  '/camps_(18).jpg'
                ].map((image, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}

