"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Testimonial data
const testimonials = [
  {
    name: "Alexander Miller",
    role: "Parent",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process flexible Classes refers to the process.",
  },
  {
    name: "Priya Sharma",
    role: "Teacher",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
    quote: "The STEM labs have transformed our classroom experience. Students are more engaged and excited to learn!",
  },
  {
    name: "Rahul Verma",
    role: "Student",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    quote: "I love building robots and working on AI projects. The labs make learning so much fun!",
  },
]; 

export default function OurLabOfferings() {
  // Animated counting for achievements
  const [counts, setCounts] = useState({ schools: 0, students: 0, teachers: 0, curriculum: 0 });
  const [hasCounted, setHasCounted] = useState(false);
  const achievementsRef = useRef(null);

  useEffect(() => {
    if (!achievementsRef.current || hasCounted) return;
    let triggered = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          setHasCounted(true);
          // Animate numbers
          let schools = 0, students = 0, teachers = 0, curriculum = 0;
          const schoolsTarget = 50, studentsTarget = 10000, teachersTarget = 100, curriculumTarget = 1;
          const duration = 1200; // ms
          const steps = 40;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            schools = Math.round((schoolsTarget / steps) * step);
            students = Math.round((studentsTarget / steps) * step);
            teachers = Math.round((teachersTarget / steps) * step);
            curriculum = Math.round((curriculumTarget / steps) * step);
            setCounts({
              schools: schools > schoolsTarget ? schoolsTarget : schools,
              students: students > studentsTarget ? studentsTarget : students,
              teachers: teachers > teachersTarget ? teachersTarget : teachers,
              curriculum: curriculum > curriculumTarget ? curriculumTarget : curriculum,
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


  // Testimonial carousel state
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonial = testimonials[testimonialIdx];
  const nextTestimonial = () => setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-start items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center pt-4 pb-0 px-1 relative min-h-[420px] md:min-h-[520px] overflow-hidden" style={{background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)'}}>
        {/* Decorative shapes - more texture */}
        <div className="absolute left-8 top-10 w-20 h-20 bg-pink-300 rounded-full opacity-30 blur-2xl animate-pulse z-0" />
        <div className="absolute right-16 top-16 w-10 h-10 bg-pink-200 rounded-full opacity-40 blur animate-bounce z-0" />
        <div className="absolute left-1/4 bottom-24 w-3 h-3 bg-yellow-300 rounded-full opacity-80 animate-ping z-0" />
        <div className="absolute right-1/3 bottom-32 w-2 h-2 bg-white rounded-full opacity-80 animate-pulse z-0" />
        <div className="absolute left-1/2 top-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-80 animate-pulse z-0" />
        <div className="absolute right-10 bottom-10 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse z-0" />
        {/* New shapes for extra texture */}
        <div className="absolute left-10 top-1/2 w-6 h-6 bg-blue-300 rounded-full opacity-50 animate-float z-0" />
        <div className="absolute right-24 top-1/4 w-4 h-4 bg-yellow-200 rounded-full opacity-70 animate-bounce-slow z-0" />
        <div className="absolute left-1/3 bottom-10 w-8 h-8 bg-white rounded-full opacity-30 animate-float z-0" />
        <div className="absolute right-1/4 bottom-16 w-5 h-5 bg-purple-200 rounded-full opacity-60 animate-pulse z-0" />
        {/* Star shape */}
        <svg className="absolute left-1/2 top-8 w-6 h-6 z-0 animate-spin-slow" viewBox="0 0 24 24" fill="#fff59d" style={{opacity: 0.7}}><polygon points="12,2 15,10 24,10 17,15 19,23 12,18 5,23 7,15 0,10 9,10"/></svg>
        {/* Triangle shape */}
        <svg className="absolute right-1/3 top-1/2 w-5 h-5 z-0 animate-float" viewBox="0 0 24 24" fill="#fbbf24" style={{opacity: 0.5}}><polygon points="12,2 22,22 2,22"/></svg>
        {/* Main Content - left side */}
        <div className="relative z-10 flex flex-col items-start w-full md:w-1/2 max-w-2xl mx-auto text-left md:pl-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg font-[Comic Sans MS,cursive,sans-serif] tracking-tight animate-bounce leading-tight">
            Our Lab Offerings
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 font-normal font-[Comic Sans MS,cursive,sans-serif] animate-fade-in">
            Discover a world of hands-on learning and creativity! Our labs empower students to explore robotics, artificial intelligence, coding, and real-world STEM challenges in a fun, engaging, and supportive environment designed for every curious mind.
          </p>
        </div>
        {/* Right side - hero image */}
        <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center mt-0 md:mt-0">
          <Image
            src="/ourofferingher.png"
            alt="Our Offerings Hero"
            width={420}
            height={320}
            className="rounded-2xl object-contain max-h-[380px] w-auto h-auto"
            priority
          />
        </div>
        {/* Responsive White Wave SVG with yellow accent at the bottom of hero */}
        <div className="absolute left-0 bottom-0 w-screen max-w-none overflow-visible leading-none pointer-events-none" style={{height: '90px'}}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <path d="M0 60 Q 360 120 720 80 T 1440 70 V120 H0V60Z" fill="#fff" filter="url(#glow)"/>
            <path d="M0 60 Q 360 120 720 80 T 1440 70" stroke="#FFD600" strokeWidth="8" fill="none" filter="url(#glow)"/>
          </svg>
        </div>
      </section>
      {/* Stats Cards Section */}
      <section ref={achievementsRef} className="w-full flex justify-center bg-white py-8 px-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-4xl">
          <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl">
            <div className="text-3xl font-bold text-blue-700 mb-2">{counts.schools}+</div>
            <div className="text-sm text-gray-600">Schools Equipped</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-300 rounded-2xl">
            <div className="text-3xl font-bold text-purple-700 mb-2">{counts.students.toLocaleString()}+</div>
            <div className="text-sm text-gray-600">Students Impacted</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-300 rounded-2xl">
            <div className="text-3xl font-bold text-green-700 mb-2">{counts.teachers}%</div>
            <div className="text-sm text-gray-600">Teacher Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-300 rounded-2xl">
            <div className="text-3xl font-bold text-orange-700 mb-2">A{counts.curriculum === 1 ? '+' : ''}</div>
            <div className="text-sm text-gray-600">Curriculum Alignment</div>
          </div>
        </div>
      </section>
      {/* Blue Wave Effect Section */}
      <div className="relative w-full overflow-hidden" style={{height: '90px'}}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 60 Q 180 0 360 60 T 720 60 T 1080 60 T 1440 60 V120 H0V60Z" fill="#b2f5ea"/>
        </svg>
      </div>
      {/* Design the perfect STEM journey Section */}
      <section className="w-full flex flex-col items-center justify-center bg-white py-10 px-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-2 font-[Comic Sans MS,cursive,sans-serif] text-center">Design the perfect STEM journey</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-normal text-center max-w-2xl mx-auto">
          — tailor every module to spark student interest, align with your school’s academic vision, and fit seamlessly within your annual budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4 w-full max-w-6xl">
          {/* Robotics */}
          <div className="flex flex-col items-center relative min-w-[270px] w-full h-[420px]">
            {/* Heading above card, overlapping */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-white rounded-2xl shadow-lg border border-blue-100 flex items-center justify-center" style={{minWidth: '140px'}}>
              <h3 className="text-xl font-bold text-blue-700 text-center whitespace-nowrap">Robotics Lab</h3>
            </div>
            <div className="flex flex-col justify-between bg-blue-100 rounded-3xl shadow-xl p-8 w-full h-full pt-14 border border-gray-100 z-10">
              <div className="flex justify-center items-center mb-4 -mt-4">
                <div className="w-44 h-44 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-white shadow">
                  <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=176&h=176" width={176} height={176} alt="Robotics" className="object-cover w-full h-full" />
                </div>
              </div>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Hands-on Robot Kits</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Coding & Programming</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Teamwork Challenges</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Real-World Problem </li>
              </ul>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white font-bold text-base shadow hover:bg-blue-600 mt-auto mb-4 transition-all tracking-wide">
                <span className="">EXPLORE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
          </div>
          {/* AI Labs */}
          <div className="flex flex-col items-center relative min-w-[270px] w-full h-[420px]">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-white rounded-2xl shadow-lg border border-purple-100 flex items-center justify-center" style={{minWidth: '140px'}}>
              <h3 className="text-xl font-bold text-purple-700 text-center whitespace-nowrap">AI LAB</h3>
            </div>
            <div className="flex flex-col justify-between bg-purple-100 rounded-3xl shadow-xl p-8 w-full h-full pt-14 border border-gray-100 z-10">
              <div className="flex justify-center items-center mb-4 -mt-4">
                <div className="w-44 h-44 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-white shadow">
                  <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=176&h=176" width={176} height={176} alt="AI Labs" className="object-cover w-full h-full" />
                </div>
              </div>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> AI & Machine Learning</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Smart Tech Projects</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Creative Problem Solving</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Future-Ready Skills</li>
              </ul>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-500 text-white font-bold text-base shadow hover:bg-purple-600 mt-auto mb-4 transition-all tracking-wide">
                <span className="">EXPLORE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
          </div>
          {/* STEM Labs */}
          <div className="flex flex-col items-center relative min-w-[270px] w-full h-[420px]">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-white rounded-2xl shadow-lg border border-green-100 flex items-center justify-center" style={{minWidth: '140px'}}>
              <h3 className="text-xl font-bold text-green-700 text-center whitespace-nowrap">STEM LAB</h3>
            </div>
            <div className="flex flex-col justify-between bg-green-100 rounded-3xl shadow-xl p-8 w-full h-full pt-14 border border-gray-100 z-10">
              <div className="flex justify-center items-center mb-4 -mt-4">
                <div className="w-44 h-44 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-white shadow">
                  <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=176&h=176" width={176} height={176} alt="STEM Labs" className="object-cover w-full h-full" />
                </div>
              </div>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Interactive Experiments</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Engineering Challenges</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Math in Action</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Science Discovery</li>
              </ul>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-bold text-base shadow hover:bg-green-600 mt-auto mb-4 transition-all tracking-wide">
                <span className="">EXPLORE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
          </div>
          {/* 3D Design & Printing */}
          <div className="flex flex-col items-center relative min-w-[270px] w-full h-[420px]">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-white rounded-2xl shadow-lg border border-pink-100 flex items-center justify-center" style={{minWidth: '140px'}}>
              <h3 className="text-xl font-bold text-pink-700 text-center whitespace-nowrap">3D LAB</h3>
            </div>
            <div className="flex flex-col justify-between bg-yellow-100 rounded-3xl shadow-xl p-8 w-full h-full pt-14 border border-gray-100 z-10">
              <div className="flex justify-center items-center mb-4 -mt-4">
                <div className="w-44 h-44 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-4 border-white shadow">
                  <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=facearea&w=176&h=176" width={176} height={176} alt="3D Design & Printing" className="object-cover w-full h-full" />
                </div>
              </div>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> 3D Modeling Skills</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Creative Prototyping</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Real-World Innovation</li>
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Bring Ideas to Life</li>
              </ul>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-pink-500 text-white font-bold text-base shadow hover:bg-pink-600 mt-auto mb-4 transition-all tracking-wide">
                <span className="">EXPLORE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Lab Offerings Feature Section (new) */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white py-12 px-4 md:px-12 max-w-6xl mx-auto gap-8 md:gap-0 relative overflow-visible">
        {/* Left Wave SVG */}
        <svg className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 z-0" width="80" height="400" viewBox="0 0 80 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{pointerEvents: 'none'}}>
          <path d="M80 0 Q 40 100 80 200 Q 120 300 80 400" stroke="#a5b4fc" strokeWidth="8" fill="none"/>
        </svg>
        {/* Right Wave SVG (mirrored) */}
        <svg className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-0" width="80" height="400" viewBox="0 0 80 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{pointerEvents: 'none', transform: 'scaleX(-1) translateY(-50%)'}}>
          <path d="M80 0 Q 40 100 80 200 Q 120 300 80 400" stroke="#a5b4fc" strokeWidth="8" fill="none"/>
        </svg>
        {/* Content Row */}
        <div className="relative z-10 flex-1 flex flex-col items-start max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Empowering Educators: Teacher Training & Support
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our teacher training and support program equips educators with the skills, confidence, and resources to deliver engaging, hands-on STEM learning experiences. We believe empowered teachers ignite curiosity and inspire lifelong learning in every student.
          </p>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Comprehensive Training</div>
                <div className="text-gray-600 text-base">Hands-on, practical workshops ensure teachers master STEM tools, curriculum, and classroom strategies.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Ongoing Support</div>
                <div className="text-gray-600 text-base">Continuous mentoring, resources, and troubleshooting help teachers stay confident and effective all year.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Empowering Educators</div>
                <div className="text-gray-600 text-base">We foster a community of passionate teachers who inspire students and drive innovation in STEM education.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Full image, object-contain, never cropped */}
        <div className="relative z-10 flex-1 flex justify-center items-center w-full h-full mt-8 md:mt-16">
          <Image src="/TeacherTraining.jpg" alt="Lab Experience" width={600} height={600} className="w-full h-auto max-h-[420px] object-contain" />
        </div>
      </section>
      {/* Plethora of Activities Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-2 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 text-center drop-shadow-lg">Plethora of Activities</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">Fun activities blended with learning!</p>
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="row-span-2 col-span-2 md:row-span-2 md:col-span-2 flex items-center justify-center">
            <img src="/about-img.webp" alt="About" className="rounded-2xl object-cover w-full h-64 md:h-80 shadow-lg" />
          </div>
          <img src="/vr.avif" alt="VR" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/ai.webp" alt="AI" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/iot.webp" alt="IoT" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/app.jpg" alt="App" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/students.svg" alt="Students" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md bg-white p-4" />
          <img src="/3d-printing-history-featured.webp" alt="3D Printing" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/cybersec.jpg" alt="Cybersecurity" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
        </div>
      </section>
     
      
      {/* Testimonial Carousel Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-2 bg-gradient-to-br from-pink-100 to-pink-200">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-6 font-[Comic Sans MS,cursive,sans-serif] text-center">What People Say</h2>
        <div className="relative w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center">
          <button onClick={prevTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-200 hover:bg-pink-300 text-pink-700 rounded-full p-2 shadow transition-all">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="flex flex-col items-center">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-pink-200 shadow" />
            <h3 className="text-xl font-bold text-pink-700 mb-1">{testimonial.name}</h3>
            <span className="text-pink-500 text-sm mb-2">{testimonial.role}</span>
            <div className="flex items-center mb-3">
              {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/></svg>
              ))}
              {testimonial.rating % 1 !== 0 && (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stopColor="#FFD700"/><stop offset="50%" stopColor="#E5E7EB"/></linearGradient></defs><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" fill="url(#half)"/></svg>
              )}
            </div>
            <blockquote className="text-lg text-gray-700 italic text-center max-w-xl mx-auto mb-4">"{testimonial.quote}"</blockquote>
          </div>
          <button onClick={nextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-200 hover:bg-pink-300 text-pink-700 rounded-full p-2 shadow transition-all">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>
    </div>
  );
}
