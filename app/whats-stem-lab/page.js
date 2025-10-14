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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Load Calendly widget script asynchronously
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("calendly-widget-script")) return;
    // Inject Calendly CSS (needed for popup styling)
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

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

  const labImages = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    src: `/3D Lab (${i + 1}).jpeg`,
    alt: `STEM Lab View ${i + 1}`
  }));

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % labImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + labImages.length) % labImages.length);
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <section className="relative px-0 py-0" ref={heroRef}>
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="relative overflow-hidden">
            <img
              src="/whatsstemlab.png"
              alt="What's STEM Lab banner"
              className="w-full h-auto block"
              loading="eager"
            />
            {/* Bubbles Overlay */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-6 left-6 w-6 h-6 sm:w-8 sm:h-8 bg-pink-400/60 rounded-full animate-ping"></div>
              <div className="absolute top-8 right-10 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/60 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              <div className="absolute bottom-8 left-12 w-5 h-5 sm:w-7 sm:h-7 bg-purple-400/60 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute bottom-6 right-8 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400/60 rounded-full animate-bounce" style={{animationDelay: '1.2s'}}></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400/60 rounded-full animate-pulse" style={{animationDelay: '1.6s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* STEM Components Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50" ref={stemRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-10 lg:mb-12">
            Breaking Down <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">STEM</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stemComponents.map((component, idx) => {
              const cardColors = [
                'from-pink-500 to-rose-600',
                'from-blue-500 to-indigo-600', 
                'from-green-500 to-emerald-600',
                'from-purple-500 to-violet-600'
              ];
              const cardBg = cardColors[idx % cardColors.length];
              
              return (
              <div key={idx} className={`stem-card bg-gradient-to-br ${cardBg} rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-white/30`}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl text-white font-bold mb-3 sm:mb-4 shadow-lg animate-pulse border border-white/30`}>
                  {component.letter}
                </div>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 animate-bounce drop-shadow-lg">{component.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white drop-shadow-md">{component.title}</h3>
                <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed drop-shadow-sm">{component.description}</p>
                <div className="w-full">
                  <h4 className="font-semibold text-white/90 mb-2 text-sm drop-shadow-sm">Examples:</h4>
                  <ul className="text-xs text-white/80 space-y-1">
                    {component.examples.map((example, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1 h-1 bg-white/60 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-0 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50" ref={benefitsRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-10 lg:mb-12">
            Why STEM Labs <span className="bg-gradient-to-r from-green-500 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Matter</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => {
              const benefitColors = [
                'from-emerald-600 to-teal-700',
                'from-cyan-600 to-blue-700',
                'from-violet-600 to-purple-700',
                'from-rose-600 to-pink-700',
                'from-amber-600 to-orange-700',
                'from-indigo-600 to-blue-800'
              ];
              const cardBg = benefitColors[idx % benefitColors.length];
              
              return (
              <div key={idx} className={`benefit-card bg-gradient-to-br ${cardBg} rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-white/30`}>
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 animate-bounce drop-shadow-lg">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white drop-shadow-md">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-sm">{benefit.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lab Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" ref={featuresRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-10 lg:mb-12">
            What Makes Our STEM Labs <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">Special</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {labFeatures.map((feature, idx) => {
              const featureColors = [
                'from-slate-700 to-gray-800',
                'from-zinc-700 to-stone-800',
                'from-neutral-700 to-gray-800',
                'from-stone-700 to-zinc-800',
                'from-gray-700 to-slate-800',
                'from-slate-600 to-gray-700'
              ];
              const cardBg = featureColors[idx % featureColors.length];
              
              return (
              <div key={idx} className={`feature-card bg-gradient-to-br ${cardBg} rounded-2xl shadow-lg p-6 sm:p-8 flex items-start space-x-4 sm:space-x-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-white/30`}>
                <div className="text-4xl sm:text-5xl flex-shrink-0 animate-bounce drop-shadow-lg">{feature.image}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white drop-shadow-md">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-sm">{feature.description}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STEM Lab Interactive Gallery Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our STEM Lab in Detail
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore different angles and views of our state-of-the-art STEM laboratory. Click on the image to view in fullscreen and navigate through all perspectives.
            </p>
          </div>
          
          {/* Main Image Display */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="relative group">
              <div 
                className="aspect-[16/10] relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                onClick={() => openModal(currentImageIndex)}
              >
                <img
                  src={labImages[currentImageIndex].src}
                  alt={labImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20">
                      <span className="text-lg font-medium">Click to Zoom</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {labImages.length}
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 overflow-x-auto pb-4">
            {labImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-4 ring-blue-500 scale-110' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Additional Lab Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Equipment</h3>
              <p className="text-gray-600">Cutting-edge technology and tools for hands-on STEM learning experiences.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Engaging spaces designed to foster collaboration and creativity among students.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600">Spaces that encourage experimentation and real-world problem solving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Gallery Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" ref={ctaRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-fredoka">
              Our <span className="text-blue-600">STEM Lab</span> in IRL
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Step inside our state-of-the-art STEM laboratory and see where young minds explore, create, and innovate!
            </p>
          </div>

          {/* Lab Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <span className="text-3xl drop-shadow-lg">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Advanced Equipment</h3>
              <p className="text-white/90 drop-shadow-sm">Cutting-edge technology and professional-grade tools for hands-on learning</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <span className="text-3xl drop-shadow-lg">👥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Collaborative Learning</h3>
              <p className="text-white/90 drop-shadow-sm">Team-based projects and peer-to-peer learning in a supportive environment</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <span className="text-3xl drop-shadow-lg">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Innovation Hub</h3>
              <p className="text-white/90 drop-shadow-sm">Where creativity meets technology to build the future</p>
            </div>
          </div>

          {/* Lab Gallery */}
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-white mb-8 font-fredoka">
              Lab <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Gallery</span>
            </h3>
            
            {/* Alternating Rows Gallery */}
            <div className="space-y-6">
              {/* Row 1: Two images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.41.jpeg" alt="Lab Overview" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.41 (1).jpeg" alt="Students in Action" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Row 2: Full-width landscape */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/WhatsApp Image 2025-09-27 at 16.07.42.jpeg" alt="Learning Space" className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Row 3: Two images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.43.jpeg" alt="Project Showcase" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.44.jpeg" alt="Innovation Station" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Row 4: Full-width landscape */}
              <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src="/WhatsApp Image 2025-09-27 at 16.07.44 (1).jpeg" alt="Team Work" className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Row 5: Two images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.44 (2).jpeg" alt="Advanced Projects" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                {/* Duplicate one nice highlight to fill the pair visually */}
                <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src="/WhatsApp Image 2025-09-27 at 16.07.41 (2).jpeg" alt="Advanced Equipment" className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

          {/* Lab Statistics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-pink-600 to-rose-700 rounded-2xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">500+</div>
              <div className="text-white/90 drop-shadow-sm">Students Trained</div>
            </div>
            <div className="text-center bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">50+</div>
              <div className="text-white/90 drop-shadow-sm">Projects Completed</div>
            </div>
            <div className="text-center bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">15+</div>
              <div className="text-white/90 drop-shadow-sm">Technologies</div>
            </div>
            <div className="text-center bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">100%</div>
              <div className="text-white/90 drop-shadow-sm">Hands-on Learning</div>
            </div>
          </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-lg text-white/90 mb-6 drop-shadow-sm">
                Ready to experience our amazing STEM lab? Book a visit today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block text-center"
                >
                  Book Lab Visit
                </a>
                <a 
                  href="https://youtu.be/Gtv-AWWbJfA?si=r8jQc8__uf7KUMHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white border-2 border-transparent px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center"
                >
                  Virtual Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 px-4 md:px-0 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-white opacity-5 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Looking for a Lab for Your School?</h2>
          <p className="text-lg text-pink-100 mb-8">Discover how our STEM labs can transform education and inspire the next generation of innovators and problem-solvers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-10 py-4 bg-white text-purple-700 font-semibold text-lg rounded-xl hover:bg-pink-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block text-center"
            >
              Book a Call
            </a>
            <a 
              href="/contact" 
              className="px-10 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Main Image */}
            <div className="relative max-w-full max-h-full">
              <img
                src={labImages[currentImageIndex].src}
                alt={labImages[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {labImages.length}
            </div>
            
            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/50 backdrop-blur-sm rounded-full p-2">
              {labImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-white scale-110' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
