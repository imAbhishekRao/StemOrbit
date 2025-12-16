"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import { handleBookCallClick } from '../../lib/calendly';

export default function CoursesPage() {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Robotics & Automation",
      description: "Build and program robots using Arduino, sensors, and motors. Learn coding, electronics, and mechanical design.",
      ageGroup: "Ages 8-16",
      points: [
        "Arduino microcontroller programming",
        "Sensor integration and calibration",
        "Motor control and robotics",
        "Line following and obstacle avoidance",
        "Advanced robot challenges"
      ],
      color: "blue",
      icon: "🤖"
    },
    {
      id: 2,
      title: "3D Printing & Design",
      description: "Master 3D modeling, CAD design, and 3D printing technology. Create prototypes and functional objects.",
      ageGroup: "Ages 10-18",
      points: [
        "3D modeling with Tinkercad/Fusion 360",
        "CAD design principles",
        "3D printer operation and maintenance",
        "Prototype development",
        "Advanced printing techniques"
      ],
      color: "green",
      icon: "🖨️"
    },
    {
      id: 3,
      title: "Arduino & IoT",
      description: "Learn microcontroller programming, sensors, and Internet of Things projects for smart devices.",
      ageGroup: "Ages 12-18",
      points: [
        "Arduino programming fundamentals",
        "Sensor data collection and analysis",
        "WiFi and Bluetooth connectivity",
        "Smart home automation projects",
        "IoT cloud integration"
      ],
      color: "purple",
      icon: "🔌"
    },
    {
      id: 4,
      title: "Drone Technology",
      description: "Build, program, and fly drones. Learn aerodynamics, flight control, and aerial photography.",
      ageGroup: "Ages 10-16",
      points: [
        "Drone assembly and maintenance",
        "Flight control programming",
        "Aerial photography and videography",
        "GPS navigation systems",
        "Drone safety and regulations"
      ],
      color: "orange",
      icon: "🚁"
    },
    {
      id: 5,
      title: "AI & Machine Learning",
      description: "Explore artificial intelligence, neural networks, and machine learning algorithms through hands-on projects.",
      ageGroup: "Ages 14-18",
      points: [
        "Python programming for AI",
        "Machine learning algorithms",
        "Computer vision projects",
        "Natural language processing",
        "AI ethics and applications"
      ],
      color: "red",
      icon: "🧠"
    },
    {
      id: 6,
      title: "VR & AR Development",
      description: "Create virtual and augmented reality experiences using cutting-edge VR/AR technologies.",
      ageGroup: "Ages 12-18",
      points: [
        "Unity 3D development",
        "VR headset programming",
        "AR mobile applications",
        "3D environment design",
        "Interactive VR experiences"
      ],
      color: "indigo",
      icon: "🥽"
    },
    {
      id: 7,
      title: "Electronics & Circuits",
      description: "Learn electronic components, circuit design, and PCB development for STEM projects.",
      ageGroup: "Ages 10-16",
      points: [
        "Basic electronic components",
        "Circuit design and simulation",
        "PCB design and fabrication",
        "Soldering and assembly",
        "Troubleshooting techniques"
      ],
      color: "emerald",
      icon: "⚡"
    },
    {
      id: 8,
      title: "STEM Engineering",
      description: "Apply engineering principles to solve real-world problems using math, science, and technology.",
      ageGroup: "Ages 12-18",
      points: [
        "Engineering design process",
        "Mechanical and electrical systems",
        "Project management skills",
        "Prototype testing and iteration",
        "Industry-standard tools"
      ],
      color: "yellow",
      icon: "⚙️"
    },
    {
      id: 9,
      title: "Cybersecurity & Coding",
      description: "Learn secure programming practices, ethical hacking, and cybersecurity fundamentals.",
      ageGroup: "Ages 14-18",
      points: [
        "Programming languages (Python, C++)",
        "Cybersecurity fundamentals",
        "Network security concepts",
        "Ethical hacking techniques",
        "Secure coding practices"
      ],
      color: "pink",
      icon: "🔒"
    }
  ];

  const littleEngineerVideos = [
    { id: 1, title: "Little Engineers Reel 1", src: "/video (1).mp4" },
    { id: 2, title: "Little Engineers Reel 2", src: "/video (2).mp4" },
    { id: 3, title: "Little Engineers Reel 3", src: "/video (3).mp4" },
    { id: 4, title: "Little Engineers Reel 4", src: "/video (4).mp4" }
  ];

  const LittleEngineersVideo = ({ src, title }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
      if (!videoRef.current) return;
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    };

    const handleVideoClick = () => {
      if (!videoRef.current) return;
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    return (
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-black">
        <video
          ref={videoRef}
          src={src}
          preload="metadata"
          className="w-full h-full object-cover cursor-pointer"
          controls={false}
          playsInline
          onClick={handleVideoClick}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          aria-label={title}
        />
        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/30"
            aria-label={`Play ${title}`}
          >
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-pink-500 text-white shadow-2xl">
              <svg
                className="h-8 w-8 translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    );
  };

  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', hover: 'hover:bg-blue-200', button: 'bg-blue-500 hover:bg-blue-600', buttonHover: 'hover:shadow-blue-300' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200', hover: 'hover:bg-purple-200', button: 'bg-purple-500 hover:bg-purple-600', buttonHover: 'hover:shadow-purple-300' },
    green: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', hover: 'hover:bg-green-200', button: 'bg-green-500 hover:bg-green-600', buttonHover: 'hover:shadow-green-300' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-800', border: 'border-pink-200', hover: 'hover:bg-pink-200', button: 'bg-pink-500 hover:bg-pink-600', buttonHover: 'hover:shadow-pink-300' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200', hover: 'hover:bg-yellow-200', button: 'bg-yellow-500 hover:bg-yellow-600', buttonHover: 'hover:shadow-yellow-300' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-200', hover: 'hover:bg-indigo-200', button: 'bg-indigo-500 hover:bg-indigo-600', buttonHover: 'hover:shadow-indigo-300' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-200', hover: 'hover:bg-emerald-200', button: 'bg-emerald-500 hover:bg-emerald-600', buttonHover: 'hover:shadow-emerald-300' },
    red: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', hover: 'hover:bg-red-200', button: 'bg-red-500 hover:bg-red-600', buttonHover: 'hover:shadow-red-300' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200', hover: 'hover:bg-orange-200', button: 'bg-orange-500 hover:bg-orange-600', buttonHover: 'hover:shadow-orange-300' },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* In-Person Classes Section */}
      <div className="w-full py-8 sm:py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-fredoka">
              Learn In Person
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Take our in-person classes in our premises and experience hands-on learning with our expert instructors
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-blue-200">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">🏫</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-fredoka">In-Person Classes</h3>
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">
                  Experience the full power of hands-on STEM learning in our state-of-the-art facility. 
                  Work with real equipment, collaborate with peers, and get immediate feedback from our expert instructors.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                    🤖 Robotics Labs
                  </span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">
                    🖨️ 3D Printing Station
                  </span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">
                    🔌 Electronics Lab
                  </span>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">
                    🚁 Drone Workshop
                  </span>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 sm:p-6 text-white text-center">
                  <div className="text-3xl sm:text-4xl mb-2">📍</div>
                  <p className="text-xs sm:text-sm font-medium mb-2">Available at our location:</p>
                  <p className="text-xs opacity-90">
                    STEMOrbit Technologies<br/>
                    SCO-04, 1st Floor, Mehma Singh Complex<br/>
                    Opp. Jal Vayu Towers, Gate 3<br/>
                    New Sunny Enclave, Kharar<br/>
                    Sector-125 (Mohali) Punjab - 140301
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="text-center mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a 
                href="https://www.google.com/maps/dir//SCO-04,+First+Floor,+Mehma+Singh+Complex,+03,+Jandpur+Rd,+opp.+Jalvayu+Tower+Road+South,+Sector+125,+Sunny+Enclave,+Kharar,+Mohali,+Punjab+140301/@30.754857,76.5869847,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390fef3cc28f9a51:0x663e39db36882036!2m2!1d76.669386!2d30.754883?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span className="text-xl sm:text-2xl">🚗</span>
                Take Me There
              </a>
              
              <a 
                href="tel:+917009594410"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span className="text-xl sm:text-2xl">📅</span>
                Book Your Slot
              </a>
            </div>
            
            <p className="text-gray-600 mt-4 text-sm">
              All our courses are available as in-person classes at our facility
            </p>
          </div>
        </div>
      </div>

      {/* 2. Our Course Offerings Section */}
      <section
        id="offerings"
        className="w-full flex flex-col items-center justify-center py-12 px-2 bg-white"
      >
        <div className="relative w-full flex flex-col items-center mb-8">
          {/* Decorative Wave SVG behind heading (100vw) */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 my-12"
            style={{ width: "100vw", height: "100px", pointerEvents: "none" }}
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40 Q 360 10 720 40 T 1440 40 Q 1080 90 720 60 T 0 60 Q 360 10 0 40 Z"
              fill="#f9a8d4"
              fillOpacity="0.5"
            />
            <path
              d="M0 60 Q 360 30 720 60 T 1440 60 Q 1080 100 720 70 T 0 70 Q 360 30 0 60 Z"
              fill="#38bdf8"
              fillOpacity="0.3"
            />
          </svg>
          <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold text-pink-700 font-[Comic Sans MS,cursive,sans-serif] text-center drop-shadow-lg">
            Our Bestseller Courses
          </h2>
        </div>

        {/* Course Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl mt-4 px-4 sm:px-0">
          {/* Card 1 - Sky Blue */}
          <div className="flex flex-col items-center bg-sky-300 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-white hover:scale-105 transition-transform duration-300">
            <div className="mb-2 text-xl sm:text-2xl">🎨</div>
            <h3 className="text-xl sm:text-2xl font-bold text-sky-800 mb-2">
              Creative Crafters
            </h3>
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-700 mb-1">₹999</div>
            <div className="text-sm sm:text-base text-sky-900 mb-3 sm:mb-4">per month</div>
            <div className="text-sm sm:text-base text-sky-900 mb-3 sm:mb-4 text-center">
              Unleash your imagination with hands-on art, design, and DIY
              science fun!
            </div>
            <ul className="text-left text-xs sm:text-sm text-sky-900 mb-4 sm:mb-6 space-y-1 sm:space-y-2 font-['Bubblegum Sans',cursive]">
              <li className="flex items-center gap-2">✅ Messy Science Experiments</li>
              <li className="flex items-center gap-2">✅ DIY Art Bots</li>
              <li className="flex items-center gap-2">✅ Weekly Craft Challenges</li>
              <li className="flex items-center gap-2">✅ All materials included</li>
            </ul>
            <a
              href="https://wa.me/917009594410?text=Hi!%20I%27m%20interested%20in%20enrolling%20for%20the%20Creative%20Crafters%20course.%20Could%20you%20please%20provide%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 sm:py-2.5 px-4 rounded-xl shadow-md transition text-sm sm:text-base text-center block"
            >
              Get started
            </a>
          </div>

          {/* Card 2 - Pink (Most Popular) */}
          <div className="relative flex flex-col items-center bg-pink-400 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10 border-2 sm:border-4 border-pink-600 sm:scale-105 z-10">
            <span className="absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-lg animate-bounce">
              Most Popular
            </span>
            <div className="mb-2 text-xl sm:text-2xl">🤖</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Robo Rockstars</h3>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">₹1499</div>
            <div className="text-sm sm:text-base text-pink-100 mb-3 sm:mb-4">per month</div>
            <div className="text-sm sm:text-base text-pink-50 mb-3 sm:mb-4 text-center">
              Build, code, and battle robots in a playful, team-based adventure!
            </div>
            <ul className="text-left text-xs sm:text-sm text-pink-50 mb-4 sm:mb-6 space-y-1 sm:space-y-2 font-['Bubblegum Sans',cursive]">
              <li className="flex items-center gap-2">✅ Robot Building Kits</li>
              <li className="flex items-center gap-2">✅ Coding for Kids</li>
              <li className="flex items-center gap-2">✅ Friendly Robot Battles</li>
              <li className="flex items-center gap-2">✅ Trophies & Prizes</li>
            </ul>
            <a
              href="https://wa.me/917009594410?text=Hi!%20I%27m%20interested%20in%20enrolling%20for%20the%20Robo%20Rockstars%20course.%20Could%20you%20please%20provide%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 sm:py-2.5 px-4 rounded-xl shadow-md transition text-sm sm:text-base text-center block"
            >
              Get started
            </a>
          </div>

          {/* Card 3 - Yellow */}
          <div className="flex flex-col items-center bg-yellow-300 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-white hover:scale-105 transition-transform duration-300">
            <div className="mb-2 text-xl sm:text-2xl">🧪</div>
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-800 mb-2">
              Science Sleuths
            </h3>
            <div className="text-3xl sm:text-4xl font-extrabold text-yellow-700 mb-1">
              ₹1299
            </div>
            <div className="text-sm sm:text-base text-yellow-900 mb-3 sm:mb-4">per month</div>
            <div className="text-sm sm:text-base text-yellow-900 mb-3 sm:mb-4 text-center">
              Solve mysteries with chemistry, physics, and wild hands-on
              experiments!
            </div>
            <ul className="text-left text-xs sm:text-sm text-yellow-900 mb-4 sm:mb-6 space-y-1 sm:space-y-2 font-['Bubblegum Sans',cursive]">
              <li className="flex items-center gap-2">✅ Detective Science Labs</li>
              <li className="flex items-center gap-2">✅ Explosive Experiments</li>
              <li className="flex items-center gap-2">✅ Puzzle Challenges</li>
              <li className="flex items-center gap-2">✅ Take-home Kits</li>
            </ul>
            <a
              href="https://wa.me/917009594410?text=Hi!%20I%27m%20interested%20in%20enrolling%20for%20the%20Science%20Sleuths%20course.%20Could%20you%20please%20provide%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold py-2 sm:py-2.5 px-4 rounded-xl shadow-md transition text-sm sm:text-base text-center block"
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* Our Little Engineers Section */}
      <section className="w-full py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-fredoka">
              Our Little <span className="text-purple-600">Engineers</span> Built Something
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet our amazing young innovators and see the incredible projects they've created! 
              Click on any project to watch their journey and achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {littleEngineerVideos.map((video) => (
              <LittleEngineersVideo key={video.id} src={video.src} title={video.title} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Want to see your child's project featured here? Join our courses today!
            </p>
            <a
              href="https://wa.me/917009594410?text=Hi!%20I%27m%20interested%20in%20enrolling%20my%20child%20in%20your%20courses.%20Could%20you%20please%20provide%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* 1. Explore All Courses Section */}
      <div className="w-full pt-16 sm:pt-24 md:pt-32 pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 font-fredoka mb-4 sm:mb-6">
            Explore Our <span className="text-pink-600">Fun</span> Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Discover exciting learning adventures for every young explorer! From
            creative crafts to robotics and science experiments, we've got
            something for every curious mind.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 px-4">
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-pink-300 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
            >
              {showAllCourses ? 'Hide Courses' : 'View All Courses'}
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base text-center inline-block"
            >
              Book a Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* All Courses Grid */}
      {showAllCourses && (
        <div className="w-full py-12 bg-gray-50 transition-all duration-500 ease-in-out">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-fredoka">
              Our <span className="text-pink-600">Amazing</span> Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {courses.map((course) => {
                const color = colorClasses[course.color];
                return (
                  <div 
                    key={course.id}
                    className="relative group"
                  >

                    <div 
                      className={`${color.bg} ${color.border} border-2 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col`}
                    >
                      <div className="pt-4 sm:pt-6 px-4 sm:px-6 pb-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-2xl sm:text-3xl">{course.icon}</span>
                            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${color.text} mb-0 sm:mb-2`}>{course.title}</h3>
                          </div>
                          <span className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full bg-white bg-opacity-70 whitespace-nowrap self-start sm:self-auto">
                            {course.ageGroup}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{course.description}</p>
                        <ul className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
                          {course.points.map((point, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2 text-sm sm:text-base">✓</span>
                              <span className="text-xs sm:text-sm text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto p-4 sm:p-6 pt-0">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                          <a
                            href={`https://wa.me/917009594410?text=${encodeURIComponent(`Hi! I'm interested in enrolling for the ${course.title} course. Could you please provide more details?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${color.button} text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 ${color.buttonHover} flex-1 text-center`}
                          >
                            Enroll Now
                          </a>
                          <button 
                            onClick={handleBookCallClick}
                            className="bg-white text-gray-800 font-bold py-2 px-6 border-2 border-gray-300 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 hover:border-gray-400 flex-1"
                          >
                            Enquire
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3. Why Choose Our Courses Section */}
      <div id="why-choose" className="w-full max-w-6xl mx-auto mb-16 sm:mb-24 md:mb-32 mt-16 sm:mt-24 md:mt-32 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8 font-fredoka">
          Why Choose Our <span className="text-pink-600">Fun</span> Courses?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4">
          {/* Feature 1 */}
          <div className="relative group overflow-hidden bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl">🔬</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                Hands-on Learning
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Practical, project-based approach that encourages experimentation and discovery.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group overflow-hidden bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-yellow-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-xl sm:text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-800 group-hover:text-green-800 transition-colors duration-300">
                Expert Instructors
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Learn from industry professionals with years of teaching experience.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative group overflow-hidden bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl">📊</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-800 group-hover:text-purple-800 transition-colors duration-300">
                Progress Tracking
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Regular assessments and feedback to monitor your learning journey.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative group overflow-hidden bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-orange-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-xl sm:text-2xl">🎯</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-800 group-hover:text-red-800 transition-colors duration-300">
                Fun-First Approach
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Learning through play with engaging activities that make education exciting and memorable.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="relative group overflow-hidden bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-yellow-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl">🎨</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-800 group-hover:text-amber-800 transition-colors duration-300">
                Creative Freedom
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Encourages out-of-the-box thinking and self-expression in every project.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="relative group overflow-hidden bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 group-hover:-rotate-12 transition-transform duration-300">
                <span className="text-xl sm:text-2xl">👥</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-800 group-hover:text-emerald-800 transition-colors duration-300">
                Team Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Work together on exciting group projects and build teamwork skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum & Learning Outcomes Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              Our <span className="text-blue-600">Curriculum</span> & <span className="text-green-600">Learning Outcomes</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our internationally recognized curriculum and the skills your child will develop
            </p>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About Curriculum */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                About the Curriculum
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Aligned with International Standards</p>
                    <p className="text-gray-600 text-sm mt-1">Following IEEE and ACM guidelines for robotics education</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Starts from LED Blink to develop different robots</p>
                    <p className="text-gray-600 text-sm mt-1">Progressive learning from basic to advanced robotics</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">HRDF Malaysia and MOE Singapore approved courses</p>
                    <p className="text-gray-600 text-sm mt-1">Government recognized and certified programs</p>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-60 rounded-xl p-3 mt-3">
                  <p className="text-sm text-gray-600 text-center">
                    <span className="font-bold text-blue-600">25,000+</span> students and <span className="font-bold text-blue-600">75+</span> institutions globally in the last 5 years
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <h4 className="font-bold text-gray-800 text-sm mb-1">🏆 Certification</h4>
                <p className="text-gray-600 text-xs">Industry-recognized certificates upon successful completion of the program</p>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                Learning Outcomes
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Hands-on Industry relevant topics</p>
                    <p className="text-gray-600 text-sm mt-1">Real-world projects and industry case studies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Clear understanding of Robotics, building Robots, Coding, Sensors and motors</p>
                    <p className="text-gray-600 text-sm mt-1">Comprehensive knowledge of all robotics components</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">After the course students will be able to independently develop robots on their own</p>
                    <p className="text-gray-600 text-sm mt-1">Build complete robotic systems from scratch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Problem-solving and critical thinking skills</p>
                    <p className="text-gray-600 text-sm mt-1">Develop analytical and troubleshooting abilities</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h4 className="font-bold text-gray-800 text-sm mb-1">🚀 Career Readiness</h4>
                <p className="text-gray-600 text-xs">Prepare for careers in robotics, automation, and engineering fields</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
