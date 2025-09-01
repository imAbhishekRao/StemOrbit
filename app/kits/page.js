"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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

export default function Kits() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ kits: 0, students: 0, projects: 0, satisfaction: 0 });
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated counting for stats (only once when in view)
  useEffect(() => {
    if (!statsRef.current || hasCounted) return;
    let triggered = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          setHasCounted(true);
          // Animate numbers using GSAP
          gsap.to(counts, {
            kits: 25,
            students: 15000,
            projects: 500,
            satisfaction: 98,
            duration: 2,
            ease: "power3.out",
            onUpdate: function () {
              setCounts({
                kits: Math.round(this.targets()[0].kits),
                students: Math.round(this.targets()[0].students),
                projects: Math.round(this.targets()[0].projects),
                satisfaction: Math.round(this.targets()[0].satisfaction)
              });
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, [statsRef, hasCounted]);

  const tabs = [
    { name: "Beginner", level: "Ages 8-12" },
    { name: "Intermediate", level: "Ages 13-16" },
    { name: "Advanced", level: "Ages 17+" }
  ];

  const kitCategories = [
    {
      title: "Robotics Kits",
      description: "Complete robotics kits for building and programming robots",
      icon: "🤖",
      features: ["Programmable controllers", "Sensors & actuators", "Building blocks", "Coding tutorials"],
      price: "Starting from $89",
      difficulty: "Beginner to Advanced"
    },
    {
      title: "Electronics Kits",
      description: "Learn circuit design and electronic components",
      icon: "⚡",
      features: ["Breadboards & components", "LED displays", "Motor controls", "Circuit diagrams"],
      price: "Starting from $45",
      difficulty: "Beginner to Intermediate"
    },
    {
      title: "3D Printing Kits",
      description: "Design and print your own 3D models",
      icon: "🖨️",
      features: ["3D printer components", "Design software", "Filament samples", "Printing guides"],
      price: "Starting from $299",
      difficulty: "Intermediate to Advanced"
    },
    {
      title: "Coding Kits",
      description: "Learn programming through hands-on projects",
      icon: "💻",
      features: ["Microcontrollers", "Programming boards", "Project examples", "Online tutorials"],
      price: "Starting from $35",
      difficulty: "Beginner to Advanced"
    },
    {
      title: "Drone Kits",
      description: "Build and fly your own drones",
      icon: "🚁",
      features: ["Drone frames", "Flight controllers", "Motors & propellers", "Flight training"],
      price: "Starting from $129",
      difficulty: "Intermediate to Advanced"
    },
    {
      title: "AI & Machine Learning Kits",
      description: "Explore artificial intelligence and machine learning",
      icon: "🧠",
      features: ["AI modules", "Camera sensors", "Training datasets", "ML algorithms"],
      price: "Starting from $199",
      difficulty: "Advanced"
    }
  ];

  const programs = [
    {
      title: "Starter STEM Kits",
      description: "Perfect for beginners who want to explore STEM concepts through fun, hands-on projects. These kits introduce fundamental concepts in robotics, electronics, and coding.",
      skills: ["Basic Engineering", "Problem Solving", "Creative Thinking", "Teamwork"],
      duration: "4-6 weeks",
      projects: ["Simple Robot", "LED Circuit", "Basic Coding", "Science Experiments"]
    },
    {
      title: "Intermediate STEM Kits",
      description: "For students ready to tackle more complex projects. These kits combine multiple technologies and require deeper understanding of STEM principles.",
      skills: ["Advanced Programming", "Circuit Design", "3D Modeling", "Project Management"],
      duration: "8-12 weeks",
      projects: ["Smart Home Device", "3D Printed Robot", "IoT Project", "Advanced Coding"]
    },
    {
      title: "Advanced STEM Kits",
      description: "Challenging projects for experienced students. These kits involve cutting-edge technologies and prepare students for STEM careers and competitions.",
      skills: ["AI & ML", "Advanced Robotics", "System Integration", "Innovation"],
      duration: "12-16 weeks",
      projects: ["AI Robot", "Drone System", "Smart City Model", "Competition Project"]
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Curriculum Aligned",
      description: "All kits align with national STEM standards and can be integrated into school curricula."
    },
    {
      icon: "🔧",
      title: "Hands-On Learning",
      description: "Students learn by doing, building real projects that demonstrate STEM concepts."
    },
    {
      icon: "📚",
      title: "Comprehensive Guides",
      description: "Detailed instructions, video tutorials, and teacher resources included with every kit."
    },
    {
      icon: "🚀",
      title: "Scalable Solutions",
      description: "From individual kits to classroom sets, we provide solutions for every learning environment."
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "High School Student",
      quote: "The robotics kit helped me understand programming in a way that textbooks never could. I built my first robot and now I'm considering a career in engineering!",
      project: "Advanced Robotics Kit"
    },
    {
      name: "Sarah Johnson",
      role: "Middle School Teacher",
      quote: "These kits have transformed my science class. Students are engaged, excited, and actually understanding complex concepts through hands-on projects.",
      project: "Intermediate STEM Kit Bundle"
    },
    {
      name: "Mike Rodriguez",
      role: "Parent",
      quote: "My daughter loves her coding kit! She's learning valuable skills while having fun. The quality and instructions are excellent.",
      project: "Beginner Coding Kit"
    }
  ];

  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const categoriesRef = useRef(null);
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

  // Categories animation
  useSectionAnimation(categoriesRef, () => {
    gsap.fromTo(
      categoriesRef.current.querySelectorAll(".category-card"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
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
                  STEM Learning Kits
                </span>
              </h1>
              <p className={`text-base lg:text-lg text-gray-600 max-w-2xl mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Discover our comprehensive collection of STEM educational kits designed to inspire curiosity, creativity, and critical thinking. From robotics to coding, electronics to 3D printing - we have the perfect kit for every learner.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Explore All Kits
                </button>
                <button className="px-8 py-4 border-2 border-pink-600 text-pink-600 font-semibold text-lg rounded-xl hover:bg-pink-600 hover:text-white transition-all duration-300 hover:shadow-lg">
                  Download Catalog
                </button>
              </div>
            </div>
            
            {/* Right: Kit Image */}
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
                
                {/* Main kit container */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full animate-pulse"></div>
                <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-8xl lg:text-9xl animate-bounce">🧰</div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-2 left-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
                <div className="absolute left-2 top-1/2 w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
                <div className="absolute right-2 top-1/2 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1.6s'}}></div>
                
                {/* Circuit-like lines */}
                <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent to-purple-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute left-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent to-green-400 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className={`grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-soft hover-lift">
              <div className="text-3xl font-bold text-blue-700 mb-2">{counts.kits}+ </div>
              <div className="text-sm text-gray-600">Kit Varieties</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-300 rounded-2xl shadow-soft hover-lift">
              <div className="text-3xl font-bold text-purple-700 mb-2">{counts.students.toLocaleString()}+ </div>
              <div className="text-sm text-gray-600">Students Learning</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-pink-300 rounded-2xl shadow-soft hover-lift">
              <div className="text-3xl font-bold text-pink-700 mb-2">{counts.projects}+ </div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-300 rounded-2xl shadow-soft hover-lift">
              <div className="text-3xl font-bold text-green-700 mb-2">{counts.satisfaction}% </div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-0 bg-white" ref={featuresRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our STEM Kits?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our kits are designed to make STEM learning accessible, engaging, and effective for students of all ages and skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card text-center p-8 rounded-2xl shadow-soft hover-lift transition-all duration-300 ${
                index === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                index === 1 ? 'bg-gradient-to-br from-purple-50 to-purple-100' :
                index === 2 ? 'bg-gradient-to-br from-pink-50 to-pink-100' :
                'bg-gradient-to-br from-green-50 to-green-100'
              }`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Kit Categories Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" ref={categoriesRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Kit Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From robotics to coding, we offer a wide range of STEM kits to suit every interest and skill level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitCategories.map((category, index) => (
              <div key={index} className="category-card bg-white rounded-2xl p-8 shadow-soft hover-lift transition-all duration-300">
                <div className="text-5xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{category.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Features:</h4>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className={`w-2 h-2 rounded-full mr-3 ${
                          index === 0 ? 'bg-blue-500' :
                          index === 1 ? 'bg-purple-500' :
                          index === 2 ? 'bg-pink-500' :
                          index === 3 ? 'bg-green-500' :
                          index === 4 ? 'bg-orange-500' :
                          'bg-indigo-500'
                        }`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Difficulty:</span>
                    <span className="text-sm font-medium text-gray-900">{category.difficulty}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Price:</span>
                    <span className={`text-sm font-semibold ${
                      index === 0 ? 'text-blue-600' :
                      index === 1 ? 'text-purple-600' :
                      index === 2 ? 'text-pink-600' :
                      index === 3 ? 'text-green-600' :
                      index === 4 ? 'text-orange-600' :
                      'text-indigo-600'
                    }`}>{category.price}</span>
                  </div>
                  <button className={`w-full px-4 py-3 text-white font-semibold rounded-xl transition-all duration-300 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                    index === 1 ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' :
                    index === 2 ? 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800' :
                    index === 3 ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' :
                    index === 4 ? 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800' :
                    'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800'
                  }`}>
                    Learn More
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" ref={programsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Learning Programs by Skill Level
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our kits are organized into progressive learning programs that grow with your skills and knowledge.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-soft'
                }`}
              >
                <div className="text-lg">{tab.name}</div>
                <div className="text-sm opacity-80">{tab.level}</div>
              </button>
            ))}
          </div>

          {/* Program Content */}
          <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {programs[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {programs[activeTab].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {programs[activeTab].skills.map((skill, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index === 0 ? 'bg-blue-100 text-blue-700' :
                        index === 1 ? 'bg-purple-100 text-purple-700' :
                        index === 2 ? 'bg-pink-100 text-pink-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Sample Projects:</h4>
                  <ul className="space-y-2">
                    {programs[activeTab].projects.map((project, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className={`w-2 h-2 rounded-full mr-3 ${
                          index === 0 ? 'bg-blue-600' :
                          index === 1 ? 'bg-purple-600' :
                          index === 2 ? 'bg-pink-600' :
                          'bg-green-600'
                        }`}></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Duration: <span className="font-semibold text-gray-900">{programs[activeTab].duration}</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    View Kits
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {tabs[activeTab].name} Level
                  </h4>
                  <p className="text-gray-600 mb-4">
                    For {tabs[activeTab].level}
                  </p>
                  <div className="text-sm text-gray-500">
                    Perfect for {tabs[activeTab].name.toLowerCase()} learners!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-0 bg-white" ref={testimonialsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students, teachers, and parents about their experience with our STEM learning kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-card rounded-2xl p-8 shadow-soft hover-lift ${
                index === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                index === 1 ? 'bg-gradient-to-br from-purple-50 to-purple-100' :
                'bg-gradient-to-br from-pink-50 to-pink-100'
              }`}>
                <div className="text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{testimonial.role}</div>
                  <div className={`text-sm font-medium ${
                    index === 0 ? 'text-blue-600' :
                    index === 1 ? 'text-purple-600' :
                    'text-pink-600'
                  }`}>
                    {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your STEM Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose the perfect kit for your learning level, explore our catalog, or contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Browse All Kits
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Get Expert Advice
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
