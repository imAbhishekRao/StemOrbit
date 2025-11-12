"use client";
import { useState } from 'react';
import Link from 'next/link';
import { handleBookCallClick } from '../../lib/calendly';

export default function CoursesPage() {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  const engineers = [
    {
      id: 1,
      name: "Arjun Singh",
      age: 12,
      project: "Smart Home Automation",
      description: "Built a complete smart home system using Arduino and sensors",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      videoUrl: "https://www.instagram.com/reel/DLccyvovhGH/embed/",
      course: "Arduino & IoT",
      achievement: "Best Innovation Award"
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 14,
      project: "3D Printed Prosthetic Hand",
      description: "Designed and printed a functional prosthetic hand for a classmate",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      videoUrl: "https://www.instagram.com/reel/DLXTMilvciY/embed/",
      course: "3D Printing & Design",
      achievement: "Community Impact Award"
    },
    {
      id: 3,
      name: "Rohan Kumar",
      age: 11,
      project: "Line Following Robot",
      description: "Created an autonomous robot that follows colored lines using sensors",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      videoUrl: "https://www.instagram.com/reel/DLPk1q_PP-1/embed/",
      course: "Robotics & Automation",
      achievement: "Young Engineer Award"
    },
    {
      id: 4,
      name: "Sneha Patel",
      age: 13,
      project: "Weather Station",
      description: "Built a complete weather monitoring station with data logging",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      videoUrl: "https://www.instagram.com/reel/DLFTGdzvZ2t/embed/",
      course: "Electronics & Circuits",
      achievement: "Scientific Excellence Award"
    },
    {
      id: 5,
      name: "Vikram Reddy",
      age: 15,
      project: "AI-Powered Plant Monitor",
      description: "Developed an AI system that monitors plant health and sends alerts",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      videoUrl: "https://www.instagram.com/reel/DGIpRaPPLgl/embed/",
      course: "AI & Machine Learning",
      achievement: "Future Tech Award"
    },
    {
      id: 6,
      name: "Ananya Joshi",
      age: 12,
      project: "Solar-Powered Drone",
      description: "Designed and built a drone powered entirely by solar energy",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      videoUrl: "https://www.instagram.com/reel/DEsCfrXPm_L/embed/",
      course: "Drone Technology",
      achievement: "Green Innovation Award"
    }
  ];

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {engineers.map((engineer) => (
              <div 
                key={engineer.id}
                className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-2 border-transparent hover:border-purple-200"
              >
                {/* Project Image/Thumbnail */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden">
                  <img 
                    src={engineer.image} 
                    alt={engineer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedVideo(engineer)}
                      className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                    >
                      <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      🏆 {engineer.achievement}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-fredoka">{engineer.name}</h3>
                    <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      Age {engineer.age}
                    </span>
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-semibold text-purple-700 mb-1 sm:mb-2">{engineer.project}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{engineer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full">
                      {engineer.course}
                    </span>
                    <button
                      onClick={() => setSelectedVideo(engineer)}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                    >
                      Watch Project
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
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

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold font-fredoka">{selectedVideo.name}</h3>
              <p className="text-sm sm:text-base text-purple-100 mt-1">{selectedVideo.project}</p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3">
                <span className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  Age {selectedVideo.age}
                </span>
                <span className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {selectedVideo.course}
                </span>
                <span className="bg-yellow-400 text-yellow-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                  🏆 {selectedVideo.achievement}
                </span>
              </div>
            </div>

            {/* Video Content */}
            <div className="p-4 sm:p-6">
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">{selectedVideo.description}</p>
              
              {/* Instagram Video Preview */}
              <div className="relative w-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                {/* Video Thumbnail/Preview */}
                <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto backdrop-blur-sm">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Watch on Instagram</h3>
                    <p className="text-xs sm:text-sm text-purple-100 mb-3 sm:mb-4">Click to view the full project video</p>
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>@stemorbit_official</span>
                    </div>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
                  <a
                    href={selectedVideo.videoUrl.replace('/embed/', '/')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-20 h-20 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-8 h-8 text-purple-600 ml-1 group-hover:text-purple-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">🔬</span>
                  Project Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Course:</span>
                    <span className="ml-2 text-purple-600 font-medium">{selectedVideo.course}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Achievement:</span>
                    <span className="ml-2 text-yellow-600 font-medium">{selectedVideo.achievement}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Age:</span>
                    <span className="ml-2 text-gray-600">{selectedVideo.age} years old</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Platform:</span>
                    <span className="ml-2 text-pink-600 font-medium">Instagram Reel</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={selectedVideo.videoUrl.replace('/embed/', '/')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Watch on Instagram
                </a>
                <a
                  href={`https://wa.me/917009594410?text=${encodeURIComponent(`Hi! I'm interested in enrolling for the ${selectedVideo.course} course. Could you please provide more details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base text-center"
                >
                  Enroll in {selectedVideo.course}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
