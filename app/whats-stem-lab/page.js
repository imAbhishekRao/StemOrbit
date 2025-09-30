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

export default function WhatsStemLab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stemComponents = [
    {
      letter: "S",
      title: "Science",
      description: "Explore the natural world through hands-on experiments, observations, and scientific inquiry.",
      icon: "🔬",
      color: "from-blue-500 to-cyan-500",
      examples: ["Chemistry experiments", "Physics demonstrations", "Biology investigations", "Environmental studies"]
    },
    {
      letter: "T",
      title: "Technology",
      description: "Learn to use and create technology tools, from basic computers to advanced programming.",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      examples: ["Coding & Programming", "Digital design", "Robotics", "3D printing"]
    },
    {
      letter: "E",
      title: "Engineering",
      description: "Design, build, and test solutions to real-world problems using engineering principles.",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      examples: ["Bridge building", "Circuit design", "Mechanical systems", "Problem solving"]
    },
    {
      letter: "M",
      title: "Mathematics",
      description: "Apply mathematical concepts to solve problems and understand patterns in the world.",
      icon: "📊",
      color: "from-orange-500 to-red-500",
      examples: ["Data analysis", "Geometry", "Statistics", "Algebra applications"]
    }
  ];

  const benefits = [
    {
      icon: "🧠",
      title: "Critical Thinking",
      description: "Students develop analytical skills and learn to approach problems systematically."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Working in teams teaches communication, leadership, and interpersonal skills."
    },
    {
      icon: "💡",
      title: "Creativity",
      description: "STEM encourages innovative thinking and finding unique solutions to challenges."
    },
    {
      icon: "🎯",
      title: "Problem Solving",
      description: "Students learn to break down complex problems into manageable steps."
    },
    {
      icon: "🔍",
      title: "Inquiry-Based Learning",
      description: "Students ask questions, investigate, and discover answers through exploration."
    },
    {
      icon: "🚀",
      title: "Future-Ready Skills",
      description: "Prepares students for careers in technology, science, and innovation."
    }
  ];

  const labFeatures = [
    {
      title: "Hands-On Learning",
      description: "Students learn by doing, not just reading. Every concept is reinforced through practical activities.",
      image: "🔧"
    },
    {
      title: "Real-World Applications",
      description: "STEM lab activities connect classroom learning to real-world problems and solutions.",
      image: "🌍"
    },
    {
      title: "Safe Environment",
      description: "Designed with safety in mind, allowing students to experiment and explore without risk.",
      image: "🛡️"
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art tools and technology to give students the best learning experience.",
      image: "⚡"
    }
  ];

  const heroRef = useRef(null);
  const stemRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  // Hero animation
  useSectionAnimation(heroRef, () => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // STEM components animation
  useSectionAnimation(stemRef, () => {
    gsap.fromTo(
      stemRef.current.querySelectorAll(".stem-card"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  // Benefits animation
  useSectionAnimation(benefitsRef, () => {
    gsap.fromTo(
      benefitsRef.current.querySelectorAll(".benefit-card"),
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
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 text-left">
              <h1 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  What's a STEM Lab?
                </span>
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-600 max-w-2xl mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                A STEM Lab is a dedicated learning space where students explore Science, Technology, Engineering, and Mathematics through hands-on activities, experiments, and collaborative projects.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Explore Our Labs
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            {/* Right: STEM Lab Visual */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Lab environment elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl">🔬</div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl">💻</div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl">⚙️</div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center text-2xl">📊</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-3xl text-white shadow-xl">
                  🧪
                </div>
                {/* Floating particles */}
                <div className="absolute top-8 left-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute left-8 top-1/2 w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute right-8 top-1/2 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEM Components Section */}
      <section className="py-16 px-4 md:px-0 bg-gray-50" ref={stemRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Breaking Down <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">STEM</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stemComponents.map((component, idx) => (
              <div key={idx} className="stem-card bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${component.color} flex items-center justify-center text-3xl text-white font-bold mb-4 shadow-lg`}>
                  {component.letter}
                </div>
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{component.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{component.description}</p>
                <div className="w-full">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Examples:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {component.examples.map((example, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-0" ref={benefitsRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Why STEM Labs Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Features Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 to-purple-50" ref={featuresRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Our STEM Labs Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labFeatures.map((feature, idx) => (
              <div key={idx} className="feature-card bg-white rounded-2xl shadow-lg p-8 flex items-start space-x-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-5xl flex-shrink-0">{feature.image}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Gallery Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" ref={ctaRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-fredoka">
              Our <span className="text-blue-600">STEM Lab</span> in Action
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Step inside our state-of-the-art STEM laboratory and see where young minds explore, create, and innovate!
            </p>
          </div>

          {/* Lab Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Equipment</h3>
              <p className="text-gray-600">Cutting-edge technology and professional-grade tools for hands-on learning</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Learning</h3>
              <p className="text-gray-600">Team-based projects and peer-to-peer learning in a supportive environment</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Hub</h3>
              <p className="text-gray-600">Where creativity meets technology to build the future</p>
            </div>
          </div>

          {/* Lab Gallery */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 font-fredoka">
              Lab <span className="text-blue-600">Gallery</span>
            </h3>
            
            {/* Alternating Rows Gallery */}
            <div className="space-y-6">
              {/* Row 1: Two images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.41.jpeg" alt="Lab Overview" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Lab Overview</div>
                  </div>
                </div>
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.41 (1).jpeg" alt="Students in Action" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Students in Action</div>
                  </div>
                </div>
              </div>

              {/* Row 2: Full-width landscape */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/WhatsApp Image 2025-09-27 at 16.07.42.jpeg" alt="Learning Space" className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Learning Space</div>
                </div>
              </div>

              {/* Row 3: Two images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.43.jpeg" alt="Project Showcase" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Project Showcase</div>
                  </div>
                </div>
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.44.jpeg" alt="Innovation Station" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Innovation Station</div>
                  </div>
                </div>
              </div>

              {/* Row 4: Full-width landscape */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/WhatsApp Image 2025-09-27 at 16.07.44 (1).jpeg" alt="Team Work" className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Team Work</div>
                </div>
              </div>

              {/* Row 5: Two images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.44 (2).jpeg" alt="Advanced Projects" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Advanced Projects</div>
                  </div>
                </div>
                {/* Duplicate one nice highlight to fill the pair visually */}
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.41 (2).jpeg" alt="Advanced Equipment" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Advanced Equipment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Statistics */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Hands-on Learning</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-6">
                Ready to experience our amazing STEM lab? Book a visit today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Book Lab Visit
                </button>
                <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience STEM Learning?</h2>
          <p className="text-lg text-blue-100 mb-8">Discover how our STEM labs can transform education and inspire the next generation of innovators and problem-solvers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-blue-700 font-semibold text-lg rounded-xl hover:bg-blue-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Visit Our Labs
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
