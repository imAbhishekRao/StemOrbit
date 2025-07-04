export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-0">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center md:pr-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">Hey!</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We're <span className="text-[#33aade]">Stem Orbit</span> <span className="text-2xl align-middle">🚀</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              We're a passionate team dedicated to empowering young minds through STEM education. Our mission is to inspire curiosity, creativity, and innovation by providing hands-on learning experiences in science, technology, engineering, and mathematics.
            </p>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              At Stem Orbit, we believe every child deserves the opportunity to explore and excel in STEM fields. Our programs, labs, and solutions are designed to make learning fun, accessible, and impactful for students everywhere.
            </p>
            <p className="text-base text-gray-600 max-w-xl">
              Read on to learn more about our journey, our vision, and the people who make Stem Orbit a hub for future innovators.
            </p>
          </div>
          {/* Right: Image Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-[350px] h-[350px] bg-gray-100 rounded-2xl shadow-md flex items-center justify-center">
              <span className="text-gray-400 text-lg">[ About Us Image ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-[#33aade]">Story</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              The journey that brought us here and the passion that drives us forward
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left: Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-none mb-6 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Our Story - Team collaboration" 
                className="w-full h-56 sm:h-72 md:h-96 lg:h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Right: Content */}
            <div className="flex-1 w-full max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6">From Vision to Reality</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6">
                Stem Orbit began as a simple idea in 2019 - what if we could make STEM education not just accessible, but truly exciting for every child? Our founders, educators and technologists themselves, saw a gap between traditional classroom learning and the dynamic, hands-on experiences that truly inspire young minds.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6">
                What started as a small after-school program has grown into a comprehensive learning ecosystem. We've witnessed countless moments of discovery - from the first time a student programs a robot to move, to the excitement of seeing their 3D designs come to life, to the wonder in their eyes when they understand how AI works.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Today, we're proud to have touched the lives of thousands of students across multiple countries, but our story is far from over. Every day brings new challenges, new technologies, and new opportunities to inspire the next generation of innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-pink-500">Mission</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Empowering the next generation through innovative STEM education
            </p>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
            {/* Right: Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-none mb-6 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
                alt="Our Mission - Students learning STEM" 
                className="w-full h-56 sm:h-72 md:h-96 lg:h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Left: Content */}
            <div className="flex-1 w-full max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Building Tomorrow's Innovators</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6">
                Our mission is clear: to democratize STEM education and make it accessible, engaging, and impactful for every child, regardless of their background or location. We believe that the skills learned through STEM - critical thinking, problem-solving, creativity, and collaboration - are essential for success in the 21st century.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6">
                Through our innovative labs, hands-on projects, and expert-led programs, we're not just teaching students about science and technology - we're helping them develop the mindset and skills they need to become the problem-solvers, inventors, and leaders of tomorrow.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                We envision a world where every child has the opportunity to discover their potential in STEM fields, where curiosity is celebrated, and where innovation knows no bounds. This is the future we're building, one student at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section className="w-full py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Innovative Learning <span className="text-[#33aade]">Labs</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            At Stem Orbit, we offer a range of specialized labs designed to spark curiosity and foster hands-on learning. Each lab is tailored to provide students with real-world skills and creative opportunities in the fields of technology, engineering, and design.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-blue-100 p-6 md:p-8 shadow-sm flex flex-col items-start">
            <div className="text-lg md:text-2xl font-bold text-blue-700 mb-2">AI LABS</div>
            <div className="text-gray-600 text-sm md:text-base">Explore the world of Artificial Intelligence with hands-on projects and interactive learning modules.</div>
          </div>
          <div className="rounded-2xl bg-pink-100 p-6 md:p-8 shadow-sm flex flex-col items-start">
            <div className="text-lg md:text-2xl font-bold text-pink-700 mb-2">ROBOTICS LABS</div>
            <div className="text-gray-600 text-sm md:text-base">Build, program, and experiment with robots to develop problem-solving and engineering skills.</div>
          </div>
          <div className="rounded-2xl bg-purple-100 p-6 md:p-8 shadow-sm flex flex-col items-start">
            <div className="text-lg md:text-2xl font-bold text-purple-700 mb-2">STEM LABS</div>
            <div className="text-gray-600 text-sm md:text-base">Engage in a variety of STEM activities that encourage innovation and scientific thinking.</div>
          </div>
          <div className="rounded-2xl bg-green-100 p-6 md:p-8 shadow-sm flex flex-col items-start">
            <div className="text-lg md:text-2xl font-bold text-green-700 mb-2">3D DESIGN</div>
            <div className="text-gray-600 text-sm md:text-base">Unleash creativity with 3D modeling and design, bringing ideas to life through digital creation.</div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            A Brief <span className="text-pink-500">History</span>
          </h2>
          <div className="overflow-x-auto">
            <div className="flex min-w-[600px] sm:min-w-[900px] md:min-w-full gap-6 md:gap-12 pb-6 md:pb-8 relative">
              {/* Horizontal line */}
              <div className="absolute left-0 right-0 top-8 h-0.5 bg-gray-200 z-0" style={{top: 48}} />
              {/* Timeline items */}
              {[
                { year: 2019, month: 'March', color: 'bg-blue-100 text-blue-700', title: 'Stem Orbit Founded', desc: 'Stem Orbit was founded with a vision to make STEM education accessible to all.' },
                { year: 2020, month: 'July', color: 'bg-green-100 text-green-700', title: 'First AI Lab', desc: 'Launched our first AI Lab, introducing students to artificial intelligence.' },
                { year: 2021, month: 'January', color: 'bg-pink-100 text-pink-700', title: 'Robotics Expansion', desc: 'Expanded our curriculum to include hands-on robotics labs.' },
                { year: 2022, month: 'September', color: 'bg-purple-100 text-purple-700', title: 'STEM Labs Growth', desc: 'Opened new STEM labs in multiple cities, reaching more students.' },
                { year: 2023, month: 'May', color: 'bg-yellow-100 text-yellow-700', title: '3D Design Launch', desc: 'Introduced 3D Design programs, empowering creativity and innovation.' },
                { year: 2024, month: 'April', color: 'bg-blue-100 text-blue-700', title: 'Online Platform', desc: 'Launched our online learning platform for remote STEM education.' },
                { year: 2025, month: 'June', color: 'bg-green-100 text-green-700', title: 'Global Impact', desc: 'Stem Orbit reaches students in over 20 countries worldwide.' },
              ].map((item, idx) => (
                <div key={item.year} className="flex flex-col items-center min-w-[180px] relative z-10">
                  <div className="text-xl font-bold mb-2 text-gray-900">{item.year}</div>
                  {/* Dot */}
                  <div className="w-4 h-4 bg-black rounded-full mb-4 border-4 border-white z-10" style={{marginTop: '-8px'}}></div>
                  {/* Card */}
                  <div className={`rounded-full px-4 py-1 mb-2 text-sm font-medium ${item.color}`}>{item.month}</div>
                  <div className="bg-white rounded-xl shadow p-4 text-center mb-2 w-full">
                    <div className="font-semibold mb-1 text-gray-900">{item.title}</div>
                    <div className="text-gray-600 text-sm mb-2">{item.desc}</div>
                    <a href="#" className="text-blue-600 text-sm hover:underline">Read more</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow Section - Infinite Auto Scroll, Staggered Images, Real Photos */}
      <section className="w-full py-0 px-0 bg-white">
        <div className="relative w-full max-w-[1200px] mx-auto overflow-x-auto px-6 sm:px-8 lg:px-12">
          <div
            className="flex gap-6 sm:gap-10 w-max animate-slide-infinite"
            style={{ animation: 'slide-infinite 30s linear infinite' }}
          >
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Team 1" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mt-8" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Team 2" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mb-8" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Team 3" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mt-16" />
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" alt="Team 4" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mb-16" />
            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=600&q=80" alt="Team 5" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mt-8" />
            {/* Duplicate for infinite effect, same staggered pattern */}
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Team 1" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mt-8" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Team 2" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mb-8" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Team 3" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mt-16" />
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" alt="Team 4" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mb-16" />
            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=600&q=80" alt="Team 5" className="w-[350px] h-[250px] object-cover rounded-2xl shadow mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
} 