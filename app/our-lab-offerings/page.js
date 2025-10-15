"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaArrowRight, FaRocket, FaUsers, FaCog, FaGraduationCap } from "react-icons/fa";
import { handleBookCallClick } from '../../lib/calendly';

// (moved into component) Load Calendly widget script asynchronously

export default function OurLabOfferings() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ schools: 0, students: 0, teachers: 0, projects: 0 });
  const [hasCounted, setHasCounted] = useState(false);
  const [atlVisible, setAtlVisible] = useState(false);
  const achievementsRef = useRef(null);
  const atlRef = useRef(null);

  // Load Calendly widget script asynchronously (hooks must be inside component)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("calendly-widget-script")) return;
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!achievementsRef.current || hasCounted) return;
    let triggered = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          setHasCounted(true);
          // Animate numbers
          let schools = 0, students = 0, teachers = 0, projects = 0;
          const schoolsTarget = 50, studentsTarget = 10000, teachersTarget = 200, projectsTarget = 500;
          const duration = 2000;
          const steps = 60;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            schools = Math.round((schoolsTarget / steps) * step);
            students = Math.round((studentsTarget / steps) * step);
            teachers = Math.round((teachersTarget / steps) * step);
            projects = Math.round((projectsTarget / steps) * step);
            setCounts({
              schools: schools > schoolsTarget ? schoolsTarget : schools,
              students: students > studentsTarget ? studentsTarget : students,
              teachers: teachers > teachersTarget ? teachersTarget : teachers,
              projects: projects > projectsTarget ? projectsTarget : projects,
            });
            if (step >= steps) clearInterval(interval);
          }, duration / steps);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(achievementsRef.current);
    return () => observer.disconnect();
  }, [achievementsRef, hasCounted]);

  // ATL section animation observer
  useEffect(() => {
    if (!atlRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAtlVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(atlRef.current);
    return () => observer.disconnect();
  }, []);

  const labOfferings = [
    {
      id: 1,
      title: "Robotics Lab",
      description: "Hands-on robotics education with programmable robots, sensors, and coding challenges",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: [
        "Programmable Robot Kits",
        "Sensor Integration",
        "Coding & Programming",
        "Team Challenges",
        "Real-world Applications"
      ],
      image: "/app.webp"
    },
    {
      id: 2,
      title: "AI & Machine Learning Lab",
      description: "Explore artificial intelligence, machine learning, and smart technology applications",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      features: [
        "AI Concepts & Applications",
        "Machine Learning Projects",
        "Smart Technology",
        "Data Analysis",
        "Future-Ready Skills"
      ],
      image: "/ai.webp"
    },
    {
      id: 3,
      title: "STEM Discovery Lab",
      description: "Comprehensive STEM learning covering science, technology, engineering, and mathematics",
      icon: "🔬",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: [
        "Science Experiments",
        "Engineering Challenges",
        "Math Applications",
        "Technology Integration",
        "Problem Solving"
      ],
      image: "/iot.webp"
    },
    {
      id: 4,
      title: "3D Design & Printing Lab",
      description: "Creative design thinking with 3D modeling, prototyping, and manufacturing",
      icon: "🖨️",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      features: [
        "3D Modeling & Design",
        "Creative Prototyping",
        "Digital Manufacturing",
        "Innovation Projects",
        "Bring Ideas to Life"
      ],
      image: "/3d-printing-history-featured.webp"
    }
  ];

  const features = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Hands-On Learning",
      description: "Interactive, experiential learning that engages students and makes concepts tangible"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaborative Environment",
      description: "Team-based projects that develop communication, leadership, and teamwork skills"
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "Modern Equipment",
      description: "State-of-the-art technology and tools that prepare students for the future"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Trained educators who provide support and inspiration throughout the learning journey"
    }
  ];

  const testimonials = [
    {
      name: "Ms. Heena",
      school: "Air Force School (12 Wing, Chandigarh)",
      role: "Educator",
      quote: "The educators are knowledgeable and very supportive. Got to learn a lot from you people. Thanks a lot to your whole team for providing such a platform where we can enhance our skills and also make our students know about different technologies.",
      image: "https://www.stemorbit.com/assets/images/testimonials/Heena.jpg"
    },
    {
      name: "Mr. Gurjinder Singh",
      school: "JNV Patiala",
      role: "ATL/Technology Coordinator",
      quote: "STEMORBIT have provided us with excellent technical knowledge and their trainer have also been very energetic and supportive. We would definitely recommend STEMORBIT to our known schools when ATL lab setup and services.",
      image: "https://www.stemorbit.com/assets/images/testimonials/Gurjinder.jpg"
    },
    {
      name: "Ms. Gunjan",
      school: "Air Force School (12 Wing, Chandigarh)",
      role: "Science Faculty",
      quote: "I am fortunate enough to work and learn with the experienced, expertise and cooperative team of Stemorbit. I found this learning full of educative, inspirational with a lot of fun filled programs and amazing experiments here.",
      image: "https://www.stemorbit.com/assets/images/testimonials/Gunjan.jpg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentBgColor, setCurrentBgColor] = useState(0);

  const testimonialBgColors = [
    'from-pink-400 to-pink-500',
    'from-yellow-400 to-yellow-500', 
    'from-sky-400 to-sky-500'
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setCurrentBgColor((prev) => (prev + 1) % testimonialBgColors.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, testimonialBgColors.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setCurrentBgColor((prev) => (prev + 1) % testimonialBgColors.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setCurrentBgColor((prev) => (prev - 1 + testimonialBgColors.length) % testimonialBgColors.length);
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Our <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Lab Offerings</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed mx-auto lg:mx-0">
                Transform your school with state-of-the-art STEM laboratories designed to inspire innovation, creativity, and hands-on learning for the next generation of problem-solvers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleBookCallClick}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-semibold text-base rounded-full shadow-lg hover:from-pink-600 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105"
                >
                  Book a Call
                </button>
                <a 
                  href="/STEMOrbit%20Brochure.pdf" 
                  download
                  className="px-6 py-3 border-2 border-pink-400 text-pink-300 font-semibold text-base rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 inline-block text-center"
                >
                  Download Brochure
                </a>
              </div>
            </div>
            {/* Right: brochure element image */}
            <div className="relative hidden sm:block">
              <div className="relative w-full max-w-xl mx-auto">
                <Image
                  src="/style1.png"
                  alt="STEM Pillars – brochure style"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain drop-shadow-[0_10px_40px_rgba(236,72,153,0.35)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                Key Focus Areas
              </span>
            </h2>
            <p className="text-lg text-pink-200 max-w-3xl mx-auto">
              Our comprehensive approach ensures holistic development across all critical STEM domains
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaRocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation & Creativity</h3>
                  <p className="text-pink-200 leading-relaxed">Fostering creative thinking and innovative problem-solving skills through hands-on projects and real-world challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCog className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Technical Excellence</h3>
                  <p className="text-pink-200 leading-relaxed">Building strong foundations in science, technology, engineering, and mathematics through practical applications.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Learning</h3>
                  <p className="text-pink-200 leading-relaxed">Encouraging teamwork, communication, and leadership skills through group projects and peer learning.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Future-Ready Skills</h3>
                  <p className="text-pink-200 leading-relaxed">Preparing students for tomorrow's challenges with cutting-edge technology and industry-relevant skills.</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-pink-500/20">
                <Image
                  src="/laboffering image 2.png"
                  alt="Key Focus Areas - STEM Education"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Our Impact - Full Width at Bottom */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-pink-500/20">
              <h4 className="text-2xl font-bold text-white mb-4 text-center">Our Impact</h4>
              <p className="text-pink-200 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Through our comprehensive STEM education approach, we've successfully transformed learning experiences in over 50 schools, 
                impacting more than 10,000 students and training 200+ educators to deliver world-class STEM education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATL Setup Section */}
      <section ref={atlRef} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${atlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                How to Setup ATL for Your School
              </span>
            </h2>
            <p className="text-lg text-pink-200 max-w-3xl mx-auto">
              A comprehensive guide to establishing your Atal Tinkering Lab with all necessary tools, equipment, and infrastructure
            </p>
          </div>

          <div className="relative">
            {/* Main Title */}
            <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${atlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl sm:text-2xl px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
                HOW TO SETUP A STEM/TINKERING LAB
              </div>
            </div>

            {/* Diagram Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Main Categories */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Tools and Equipment Category */}
                <div className={`space-y-6 transition-all duration-1000 delay-400 ${atlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-6 py-4 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 animate-bounce">
                    TOOLS AND EQUIPMENT
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Package 01: Electronics Development, Robotics, Internet of things and Sensors
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Package 02: Rapid Prototyping (3D Printer, Filaments and other Supporting Material)
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Package 03: Mechanical, Electrical and Measurement Tools
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Package 04: Power Supply & Accessories and Safety Equipment
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Advance Prototyping STEM Kits
                    </div>
                  </div>
                </div>

                {/* Infrastructure Category */}
                <div className={`space-y-6 transition-all duration-1000 delay-600 ${atlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-6 py-4 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 animate-bounce">
                    INFRASTRUCTURE
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      3D Design
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Lab Furniture
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Graffities
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Branding
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Storage
                    </div>
                    <div className="bg-white text-black font-semibold px-4 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-yellow-50">
                      Information Technology: (Laptops and Projector)
                    </div>
                  </div>
                </div>
              </div>

              {/* STEM Icon */}
              
            </div>

            {/* Additional Information Cards */}
            <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-1000 ${atlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FaRocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pink-300 mb-2">
                  Quick Setup
                </h3>
                <p className="text-pink-200 text-sm">Complete lab setup in 2-4 weeks with our expert team</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                  Teacher Training
                </h3>
                <p className="text-pink-200 text-sm">Comprehensive training for educators to maximize lab utilization</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <FaCog className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pink-300 mb-2">
                  Ongoing Support
                </h3>
                <p className="text-pink-200 text-sm">24/7 technical support and regular maintenance services</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${atlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button 
                onClick={handleBookCallClick}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-semibold text-xl rounded-full shadow-lg hover:from-pink-600 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105 animate-pulse"
              >
                Start Your ATL Setup Journey
                <FaArrowRight className="inline-block ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={achievementsRef} className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-400 mb-2">{counts.schools}+</div>
              <div className="text-pink-200 font-semibold">Schools Equipped</div>
            </div>
            <div className="text-center p-6 bg-blue-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-400 mb-2">{counts.students.toLocaleString()}+</div>
              <div className="text-pink-200 font-semibold">Students Impacted</div>
          </div>
            <div className="text-center p-6 bg-blue-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-400 mb-2">{counts.teachers}+</div>
              <div className="text-pink-200 font-semibold">Teachers Trained</div>
          </div>
            <div className="text-center p-6 bg-blue-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-400 mb-2">{counts.projects}+</div>
              <div className="text-pink-200 font-semibold">Projects Completed</div>
          </div>
          </div>
        </div>
      </section>

      {/* Lab Offerings Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Lab Offerings
              </span>
            </h2>
            <p className="text-lg text-pink-200 max-w-3xl mx-auto">
              Choose from our comprehensive range of STEM laboratory solutions, each designed to provide hands-on learning experiences that inspire curiosity and innovation.
            </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {labOfferings.map((lab) => (
              <div key={lab.id} className="group relative bg-[#101f4a] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ring-1 ring-pink-500/10">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${lab.color} flex items-center justify-center text-4xl mb-4`}>
                      {lab.icon}
                </div>
                    <h3 className="text-xl font-bold text-white mb-2">{lab.title}</h3>
                    <p className="text-pink-200 text-sm leading-relaxed">{lab.description}</p>
              </div>
                  
                  <div className="space-y-3 mb-6">
                    {lab.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <FaCheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <span className="text-pink-100 text-sm font-medium">{feature}</span>
            </div>
                    ))}
          </div>

                  <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <FaArrowRight className="inline-block ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
            </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-6">
              Why Choose Our Lab Solutions?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Our comprehensive approach ensures that every student gets the best possible STEM education experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-pink-300 mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Training Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">
            Empowering Educators: Teacher Training & Support
          </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Our comprehensive teacher training program ensures that educators are fully equipped to deliver engaging, hands-on STEM learning experiences. We provide ongoing support, resources, and professional development opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">
                      Comprehensive Training
                    </h3>
                    <p className="text-blue-100">Hands-on workshops covering all lab equipment, curriculum integration, and teaching methodologies.</p>
                  </div>
                </div>
                
            <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUsers className="w-6 h-6 text-white" />
                  </div>
              <div>
                    <h3 className="text-xl font-bold text-pink-300 mb-2">
                      Ongoing Support
                    </h3>
                    <p className="text-blue-100">Continuous mentoring, troubleshooting assistance, and access to our educator community.</p>
              </div>
            </div>
                
            <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaRocket className="w-6 h-6 text-white" />
                  </div>
              <div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">
                      Innovation Focus
                    </h3>
                    <p className="text-blue-100">Stay updated with the latest STEM trends and teaching innovations through our regular updates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/TeacherTraining.JPG" 
                  alt="Teacher Training" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-6">
              What Our Partner Schools Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from educators who have transformed their teaching with our STEM lab solutions.
            </p>
        </div>

          <div className="relative">
            {/* Left Side - Background Color Navigation */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-2">
              <button
                onClick={() => setCurrentBgColor((prev) => (prev - 1 + testimonialBgColors.length) % testimonialBgColors.length)}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                title="Previous Background Color"
              >
                <FaArrowRight className="w-5 h-5 rotate-90" />
              </button>
              
              <button
                onClick={() => setCurrentBgColor((prev) => (prev + 1) % testimonialBgColors.length)}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                title="Next Background Color"
              >
                <FaArrowRight className="w-5 h-5 -rotate-90" />
              </button>
            </div>

            {/* Right Side - Navigation Buttons */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <FaArrowRight className="w-5 h-5 rotate-180" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className={`bg-gradient-to-r ${testimonialBgColors[currentBgColor]} rounded-3xl p-8 md:p-12 text-white mx-16 transition-all duration-500 ease-in-out`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                  <Image 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
            </div>
                  <div>
                  <h3 className="text-2xl font-bold">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-white/80">{testimonials[currentTestimonial].role}</p>
                  <p className="text-white/70 text-sm">{testimonials[currentTestimonial].school}</p>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">
            Ready to Transform Your School's STEM Education?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of schools already using our lab solutions to inspire the next generation of innovators and problem-solvers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBookCallClick}
              className="px-10 py-4 bg-white text-blue-700 font-semibold text-xl rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call with our Expert
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-semibold text-xl rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}