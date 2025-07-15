"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function useSectionAnimation(ref, animationFn, deps = []) {
  useEffect(() => {
    if (!ref.current) return;
    let triggered = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          animationFn();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, deps); // eslint-disable-line
}

export default function StemLabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { name: "Primary", level: "Grades 3-5" },
    { name: "Middle School", level: "Grades 6-8" },
    { name: "High School", level: "Grades 9-12" }
  ];

  const programs = [
    {
      title: "STEM Explorers",
      description: "Introduce young learners to the wonders of science, technology, engineering, and math through hands-on experiments and creative projects.",
      skills: ["Scientific Inquiry", "Basic Engineering", "Teamwork"],
      duration: "Semester or Year-long",
      projects: ["Simple Circuits", "Plant Growth Experiments", "Bridge Building"]
    },
    {
      title: "Innovators in Action",
      description: "Engage middle school students with real-world STEM challenges, coding, and design thinking activities that foster curiosity and problem-solving.",
      skills: ["Coding Basics", "Design Thinking", "Data Analysis"],
      duration: "Semester or Year-long",
      projects: ["Weather Stations", "Eco-Friendly Devices", "Math in Motion"]
    },
    {
      title: "Future Scientists & Engineers",
      description: "Empower high school students to tackle advanced STEM topics, from robotics and programming to chemistry and physics investigations.",
      skills: ["Python & Data Science", "Engineering Design", "Scientific Research"],
      duration: "Semester or Year-long",
      projects: ["Robotics Challenges", "Chemical Reactions", "Physics Simulations"]
    }
  ];

  const features = [
    {
      icon: "🔬",
      title: "Custom STEM Labs",
      description: "We design and install STEM labs tailored to your school's needs and curriculum."
    },
    {
      icon: "📘",
      title: "Curriculum Integration",
      description: "Seamlessly align STEM activities with national and international standards."
    },
    {
      icon: "👩‍🔬",
      title: "Teacher Training & Support",
      description: "Comprehensive training and ongoing support for educators to confidently run STEM labs."
    },
    {
      icon: "🌟",
      title: "Student Engagement",
      description: "Boost student interest and achievement in STEM through hands-on, collaborative learning."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Aisha Patel",
      role: "STEM Coordinator, Oakridge School",
      quote: "Our STEM lab has become the heart of our school. Students are excited to experiment, build, and discover every day!",
      project: "Primary STEM Program"
    },
    {
      name: "Mr. John Smith",
      role: "Principal, Riverdale High",
      quote: "The STEM lab transformed our approach to science and technology education. The support and resources are top-notch.",
      project: "High School STEM Lab"
    },
    {
      name: "Ms. Priya Sharma",
      role: "Science Teacher, Harmony Middle School",
      quote: "The integration with our curriculum was seamless. Students are now more interested in STEM than ever before!",
      project: "Middle School STEM Integration"
    }
  ];

  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const programsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // Hero animation
  useSectionAnimation(heroRef, () => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // Features animation
  useSectionAnimation(featuresRef, () => {
    gsap.fromTo(
      featuresRef.current.querySelectorAll(".feature-card"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // Programs animation
  useSectionAnimation(programsRef, () => {
    gsap.fromTo(
      programsRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // Testimonials animation
  useSectionAnimation(testimonialsRef, () => {
    gsap.fromTo(
      testimonialsRef.current.querySelectorAll(".testimonial-card"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // CTA animation
  useSectionAnimation(ctaRef, () => {
    gsap.fromTo(
      ctaRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (restored) */}
      <section className="relative py-24 md:py-32 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 text-left">
              <h1 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  STEM Labs for Schools
                </span>
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-600 max-w-2xl mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Inspire your students with hands-on STEM labs designed for schools. We partner with educators to create innovative environments for science, technology, engineering, and math learning.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Request a School Demo
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg">
                  Download Brochure
                </button>
              </div>
            </div>
            {/* Right: STEM Image/Emoji */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Floating geometric shapes */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
                {/* Rotating rings */}
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-4 border-4 border-purple-200 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                {/* Main STEM icon container */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full animate-pulse"></div>
                <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-8xl lg:text-9xl animate-bounce">🔬</div>
                </div>
                {/* Floating particles */}
                <div className="absolute top-2 left-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
                <div className="absolute left-2 top-1/2 w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
                <div className="absolute right-2 top-1/2 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1.6s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 Steps Section (ladder style) */}
      <section className="relative py-20 md:py-28 px-4 md:px-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100">
        <div className="absolute inset-0 z-0">
          {/* Animated gradient blobs */}
          <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-gradient-to-tr from-pink-300 via-blue-200 to-purple-200 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        </div>
        <div className="max-w-6xl mx-auto z-10 w-full flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Your STEM Lab is Just <span className="text-blue-600">3 Steps</span> Away
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-2xl mb-8 font-medium">
              Transform your school with a custom STEM lab. We make it easy, engaging, and tailored to your needs—just three simple steps to get started!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold text-lg rounded-2xl shadow-xl hover:from-blue-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-md">
                Start the 3 Steps
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-700 font-semibold text-lg rounded-2xl hover:bg-blue-100 hover:text-blue-900 transition-all duration-300 hover:shadow-lg backdrop-blur-md">
                Download Brochure
              </button>
            </div>
          </div>
          {/* Right: Ladder Steps (staggered vertical, wide, no overlap, moved up) */}
          <div className="flex-1 flex flex-col items-center justify-start relative min-h-[400px] mt-[-2rem]">
            {/* Connecting lines/arrows */}
            <div className="absolute left-1/2 top-32 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400 z-0"></div>
            <div className="absolute left-[55%] top-64 w-1 h-16 bg-gradient-to-b from-purple-400 to-pink-400 z-0"></div>
            {/* Step 1 */}
            <div className="relative z-10 mb-6">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-[28rem] h-32 flex flex-col justify-center items-start border-l-8 border-blue-400">
                <div className="flex items-center mb-1">
                  <span className="text-3xl font-bold text-blue-500 mr-2">1</span>
                  <span className="text-2xl">📝</span>
                </div>
                <div className="font-semibold text-lg mb-0.5 text-blue-900">Consult & Plan</div>
                <div className="text-gray-700 text-base leading-tight">We meet with your team to understand your needs and design the perfect STEM lab for your school.</div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 mb-6 ml-16">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-[28rem] h-32 flex flex-col justify-center items-start border-l-8 border-purple-400">
                <div className="flex items-center mb-1">
                  <span className="text-3xl font-bold text-purple-500 mr-2">2</span>
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="font-semibold text-lg mb-0.5 text-purple-900">Install & Train</div>
                <div className="text-gray-700 text-base leading-tight">We set up your STEM lab and provide hands-on training for teachers and staff.</div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 ml-32">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-[28rem] h-32 flex flex-col justify-center items-start border-l-8 border-pink-400">
                <div className="flex items-center mb-1">
                  <span className="text-3xl font-bold text-pink-500 mr-2">3</span>
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="font-semibold text-lg mb-0.5 text-pink-900">Launch & Support</div>
                <div className="text-gray-700 text-base leading-tight">Your students dive into STEM learning! We offer ongoing support and resources for success.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 px-4 md:px-0" ref={featuresRef}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">Why Choose Our STEM Labs?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section className="py-16 bg-blue-50 px-4 md:px-0" ref={programsRef}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">STEM Lab Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="mb-2">
                  <span className="font-semibold text-blue-600">Skills:</span> {program.skills.join(", ")}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-600">Duration:</span> {program.duration}
                </div>
                <div>
                  <span className="font-semibold text-blue-600">Sample Projects:</span>
                  <ul className="list-disc list-inside text-gray-600">
                    {program.projects.map((proj, i) => (
                      <li key={i}>{proj}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-0" ref={testimonialsRef}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">What Educators Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300 hover:shadow-2xl">
                <div className="text-lg font-semibold mb-2">{t.name}</div>
                <div className="text-blue-600 mb-2">{t.role}</div>
                <div className="italic text-gray-700 mb-2">"{t.quote}"</div>
                <div className="text-sm text-gray-500">{t.project}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 px-4 md:px-0" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform STEM Learning?</h2>
          <p className="text-lg text-blue-100 mb-8">Contact us to design a custom STEM lab for your school or to learn more about our programs and support for educators.</p>
          <button className="px-10 py-4 bg-white text-blue-700 font-semibold text-lg rounded-xl hover:bg-blue-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
} 