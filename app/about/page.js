"use client";
import Image from "next/image";

// Calendly integration
const handleBookCallClick = (e) => {
  e.preventDefault();
  const url = "https://calendly.com/abhishek-stemorbit";
  if (typeof window === "undefined") return false;

  // Ensure CSS is present
  if (!document.getElementById("calendly-widget-css")) {
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }

  const openPopup = () => {
    try {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        window.Calendly.initPopupWidget({ url });
        return true;
      }
    } catch (_) {}
    return false;
  };

  if (openPopup()) return false;

  // If Calendly not loaded yet, load script on demand and open when ready
  let script = document.getElementById("calendly-widget-script");
  if (!script) {
    script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    script.onload = () => openPopup();
    document.body.appendChild(script);
  } else {
    script.addEventListener("load", () => openPopup(), { once: true });
  }

  // Final fallback after short delay
  setTimeout(() => {
    if (!openPopup()) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, 1200);

  return false;
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-white relative">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center lg:pr-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 text-center lg:text-left">
              Hey! We&apos;re <span className="text-[#33aade]">STEMOrbit</span> <span className="text-2xl align-middle">🚀</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl text-justify mx-auto lg:mx-0">
              At STEMOrbit, we empower students, support schools, and expand access to meaningful STEM education. Our mission is to ignite curiosity, creativity, and innovation by offering engaging, hands-on experiences in science, technology, engineering, and mathematics.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl text-justify mx-auto lg:mx-0">
              We provide a diverse range of opportunities designed to meet different learning needs. For students, we offer courses, in-person classes, and online programs that make STEM practical, interactive, and inspiring. For schools and institutions, we deliver innovative labs, structured programs, and tailored solutions that strengthen curricula, enrich teaching, and build a strong culture of innovation.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl text-justify mx-auto lg:mx-0">
              Whether in classrooms, online platforms, or at our own learning centers, STEMOrbit is committed to making STEM education accessible, engaging, and impactful—preparing learners and schools alike for a future driven by science and technology.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl text-justify mx-auto lg:mx-0">
              Read on to learn more about our journey, our vision, and the people who make STEMOrbit a hub for future innovators.
            </p>
            {/* Get in Touch Button */}
            <div className="flex justify-center lg:justify-start mb-6">
              <button onClick={handleBookCallClick} className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base sm:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Get in Touch
              </button>
            </div>
          </div>
          {/* Right: Image Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] bg-gray-100 rounded-2xl shadow-md flex items-center justify-center">
              <span className="text-gray-400 text-sm sm:text-lg">[ About Us Image ]</span>
            </div>
          </div>
        </div>
        {/* Blue Star Doodle - right side */}
        <img src="https://buffer.com/static/about/webp/blue-star-doodle.webp" alt="Blue Star Doodle" className="w-16 md:w-20 lg:w-24 h-auto absolute right-0 md:right-10 top-10 md:top-16 z-10" style={{pointerEvents: 'none'}} />
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative mb-8 sm:mb-10 md:mb-16">
            {/* Heading and subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
              Our <span className="text-[#33aade]">Story</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto text-center">
              The journey that brought us here and the passion that drives us forward
            </p>
            {/* Absolutely positioned arrow */}
            <img src="https://buffer.com/static/about/webp/first-pink-down-arrow-doodle.webp" alt="Down arrow" className="w-16 md:w-20 lg:w-24 h-auto absolute left-0 md:left-10 top-full -mt-6 z-10" style={{pointerEvents: 'none'}} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Left: Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-none mb-6 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Our Story - Team collaboration" 
                className="w-full h-56 sm:h-72 md:h-96 lg:h-[400px] xl:h-[450px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Right: Content */}
            <div className="flex-1 w-full max-w-xl">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">From Vision to Reality</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6 text-justify">
                STEMOrbit began as a simple idea in 2019 - what if we could make STEM education not just accessible, but truly exciting for every child? Our founders, educators and technologists themselves, saw a gap between traditional classroom learning and the dynamic, hands-on experiences that truly inspire young minds.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6 text-justify">
                What started as a small after-school program has grown into a comprehensive learning ecosystem. We've witnessed countless moments of discovery - from the first time a student programs a robot to move, to the excitement of seeing their 3D designs come to life, to the wonder in their eyes when they understand how AI works.
              </p>
              <p className="text-base sm:text-lg text-gray-700 text-justify">
                Today, we're proud to have touched the lives of thousands of students across multiple countries, but our story is far from over. Every day brings new challenges, new technologies, and new opportunities to inspire the next generation of innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
              Our <span className="text-pink-500">Mission</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto text-center">
              Empowering the next generation through innovative STEM education
            </p>
            <img src="https://buffer.com/static/about/webp/orange-blue-doodle.webp" alt="Mission Doodle" className="w-16 md:w-20 lg:w-24 h-auto absolute right-0 md:right-10 top-full -mt-6 z-10" style={{pointerEvents: 'none'}} />
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
            {/* Right: Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-none mb-6 lg:mb-0">
              <Image 
                src="/moments (9).jpg"
                alt="Our Mission - Students learning STEM" 
                width={600}
                height={400}
                className="w-full h-56 sm:h-72 md:h-96 lg:h-[400px] object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
            {/* Left: Content */}
            <div className="flex-1 w-full max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Building Tomorrow's Innovators</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6 text-justify">
                Our mission is clear: to democratize STEM education and make it accessible, engaging, and impactful for every child, regardless of their background or location. We believe that the skills learned through STEM - critical thinking, problem-solving, creativity, and collaboration - are essential for success in the 21st century.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 md:mb-6 text-justify">
                Through our innovative labs, hands-on projects, and expert-led programs, we're not just teaching students about science and technology - we're helping them develop the mindset and skills they need to become the problem-solvers, inventors, and leaders of tomorrow.
              </p>
              <p className="text-base sm:text-lg text-gray-700 text-justify">
                We envision a world where every child has the opportunity to discover their potential in STEM fields, where curiosity is celebrated, and where innovation knows no bounds. This is the future we're building, one student at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Timeline Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            A Brief <span className="text-pink-500">History</span>
          </h2>
          <div className="overflow-x-auto">
            <div className="flex min-w-[600px] sm:min-w-[800px] md:min-w-[1000px] lg:min-w-full gap-4 sm:gap-6 md:gap-8 lg:gap-12 pb-6 md:pb-8 relative">
              {/* Timeline items */}
              {[
                { year: 2019, month: 'March', color: 'bg-blue-100 text-blue-700', title: 'STEMOrbit Founded', desc: 'STEMOrbit was founded with a vision to make STEM education accessible to all.' },
                { year: 2020, month: 'July', color: 'bg-green-100 text-green-700', title: 'First AI Lab', desc: 'Launched our first AI Lab, introducing students to artificial intelligence.' },
                { year: 2021, month: 'January', color: 'bg-pink-100 text-pink-700', title: 'Robotics Expansion', desc: 'Expanded our curriculum to include hands-on robotics labs.' },
                { year: 2022, month: 'September', color: 'bg-purple-100 text-purple-700', title: 'STEM Labs Growth', desc: 'Opened new STEM labs in multiple cities, reaching more students.' },
                { year: 2023, month: 'May', color: 'bg-yellow-100 text-yellow-700', title: '3D Design Launch', desc: 'Introduced 3D Design programs, empowering creativity and innovation.' },
                { year: 2024, month: 'April', color: 'bg-blue-100 text-blue-700', title: 'Online Platform', desc: 'Launched our online learning platform for remote STEM education.' },
                { year: 2025, month: 'June', color: 'bg-green-100 text-green-700', title: 'Global Impact', desc: 'STEMOrbit reaches students in over 20 countries worldwide.' },
              ].map((item, idx) => (
                <div key={item.year} className="flex flex-col items-center min-w-[160px] sm:min-w-[180px] lg:min-w-[200px] relative z-10">
                  <div className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{item.year}</div>
                  {/* Dot */}
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full mb-4 border-2 sm:border-4 border-white z-10" style={{marginTop: '-6px'}}></div>
                  {/* Card */}
                  <div className={`rounded-full px-3 sm:px-4 py-1 mb-2 text-xs sm:text-sm font-medium ${item.color}`}>{item.month}</div>
                  <div className="bg-white rounded-xl shadow p-3 sm:p-4 text-center mb-2 w-full">
                    <div className="font-semibold mb-1 text-gray-900 text-sm sm:text-base">{item.title}</div>
                    <div className="text-gray-600 text-xs sm:text-sm mb-2 text-justify">{item.desc}</div>
                    <a href="#" className="text-blue-600 text-xs sm:text-sm hover:underline">Read more</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow Section - Infinite Auto Scroll, Staggered Images, Real Photos */}
      <section className="w-full py-0 px-0 bg-white text-white mb-16 sm:mb-20 lg:mb-24">
        <div className="relative w-full max-w-[1200px] mx-auto overflow-x-auto px-4 sm:px-6 md:px-8 lg:px-12 scrollbar-hide">
          <div
            className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-max animate-slide-infinite"
            style={{ animation: 'slide-infinite 30s linear infinite' }}
          >
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Team 1" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mt-4 sm:mt-6 md:mt-8" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Team 2" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mb-4 sm:mb-6 md:mb-8" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Team 3" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mt-8 sm:mt-12 md:mt-16" />
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" alt="Team 4" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mb-8 sm:mb-12 md:mb-16" />
            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=600&q=80" alt="Team 5" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mt-4 sm:mt-6 md:mt-8" />
            {/* Duplicate for infinite effect, same staggered pattern */}
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Team 1" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mt-4 sm:mt-6 md:mt-8" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Team 2" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mb-4 sm:mb-6 md:mb-8" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Team 3" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mt-8 sm:mt-12 md:mt-16" />
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" alt="Team 4" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mb-8 sm:mb-12 md:mb-16" />
            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=600&q=80" alt="Team 5" className="w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[350px] md:h-[250px] object-cover rounded-2xl shadow mt-4 sm:mt-6 md:mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
} 