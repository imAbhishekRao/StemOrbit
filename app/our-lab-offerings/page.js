"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Testimonial data
const testimonials = [
  {
    name: "Ms. Heena",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"The educators are knowledgeable and very supportive. Got to learn a lot from you people. Thanks a lot to your whole team for providing such a platform where we can enhance our skills and also make our students know about different technologies."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Heena.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Educator" }
    ],
    color: "#0369A1" // deep blue
  },
  {
    name: "Mr. Gurjinder Singh",
    subtitle: "JNV Patiala",
    text: `"STEMORBIT have provided us with excellent technical knowledge and their trainer have also been very energetic and supportive. We would definitely recommend STEMORBIT to our known schools when ATL lab setup and services."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Gurjinder.jpg",
    badges: [
      { icon: "/schools.svg", text: "JNV Patiala" },
      { icon: "/students.svg", text: "ATL/Technology Coordinator" }
    ],
    color: "#5B21B6" // rich indigo
  },
  {
    name: "Mr. Sandeep",
    subtitle: "JNV Amritsar",
    text: `"STEMORBIT training triggers curiosity among students to identify real life problem and find their solutions. I thank STEMORBIT and their team for providing their services to our school. Best wishes to your company, I believe your company will grow and flourish wonderfully."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Sandeep.jpg",
    badges: [
      { icon: "/schools.svg", text: "JNV Amritsar" },
      { icon: "/students.svg", text: "Teacher / Mentor" }
    ],
    color: "#0F766E" // teal
  },
  {
    name: "Ms. Gunjan",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"I am fortunate enough to work and learn with the experienced, expertise and cooperative team of Stemorbit . I found this learning full of educative, inspirational with a lot of fun filled programs and amazing experiments here. Thanks a lot to the team Stemorbit."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Gunjan.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Science Faculty" }
    ],
    color: "#7C3AED" // violet
  },
  {
    name: "Ms. Anita Kumari",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"Working with Stemorbit has been a joy. They are very detailed and organized. They make sure that the work is done correctly and in a timely manner. Their services have enabled us to reach an efficiency we hadn't previously experienced."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Anita.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Administrator" }
    ],
    color: "#BE185D" // rose
  },
  {
    name: "Ms. Shweta Shahi",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"In the 21st century , Stemorbit has given an opportunity to step into a new outlook for the theories we have learnt. Dedicated staff with on time practical knowledge is been provided by the faculty members."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Shweta.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Faculty" }
    ],
    color: "#047857" // emerald
  }
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
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

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
                  <Image src="/app.webp" width={176} height={176} alt="Robotics" className="object-cover w-full h-full" />
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
                  <Image src="/ai.webp" width={176} height={176} alt="AI Labs" className="object-cover w-full h-full" />
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
                  <Image src="/iot.webp" width={176} height={176} alt="STEM Labs" className="object-cover w-full h-full" />
                </div>
              </div>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2 font-semibold text-gray-700 text-sm"><svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Tech Discovery</li>
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
                  <Image src="/3d-printing-history-featured.webp" width={176} height={176} alt="3D Design & Printing" className="object-cover w-full h-full" />
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
            <img src="/activities.jpeg" alt="Activities" className="rounded-2xl object-cover w-full h-64 md:h-80 shadow-lg" />
          </div>
          
          {/* Moments gallery */}
          {/* Moments gallery */}
          <img src="/moments (1).jpg" alt="Moment 1" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (2).JPG" alt="Moment 2" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (3).jpg" alt="Moment 3" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (4).jpg" alt="Moment 4" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (5).jpg" alt="Moment 5" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (6).jpg" alt="Moment 6" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (7).jpg" alt="Moment 7" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (8).jpg" alt="Moment 8" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (9).jpg" alt="Moment 9" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
          <img src="/moments (10).jpg" alt="Moment 10" className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md" />
        </div>
      </section>
     
      
      {/* Testimonials Section */}
      <section className="w-full py-16 bg-[#fafafa] flex flex-col items-center justify-center">
        {/* Heading with strawberry icon and playful text */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-pink-500 font-bold text-lg font-bubblegum mb-2">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center font-fredoka text-sky-500">Voices from Our Partner Schools</h2>
        </div>
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Card */}
          <div className="relative rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center px-8 md:pl-40 py-12 w-full min-h-[340px] transition-colors duration-500" style={{ background: t.color }}>
            {/* Overlapping circular image */}
            <div className="absolute -top-20 left-1/2 md:left-12 -translate-x-1/2 md:translate-x-0 z-20">
              <div className="w-40 h-40 rounded-full border-8 border-white overflow-hidden shadow-lg bg-white">
                <Image src={t.img} alt={t.name} width={160} height={160} className="object-cover w-full h-full" />
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col justify-center items-start mt-24 md:mt-0 md:ml-8">
              <div className="flex flex-col items-start gap-1 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-white text-5xl leading-none">"</span>
                  <div>
                    <span className="text-white text-3xl md:text-4xl font-extrabold font-fredoka">{t.name}</span>
                    <div className="text-white text-sm opacity-90 mt-1 font-medium">{t.subtitle}</div>
                  </div>
                </div>
              </div>
              <p className="text-white text-lg font-quicksand mb-8 max-w-3xl">
                {t.text}
              </p>
              <div className="flex flex-wrap gap-6 mt-auto">
                {t.badges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/90 text-black font-bold rounded-xl px-4 py-2 text-base shadow">
                    <img src={badge.icon} alt="badge" className="w-6 h-6" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation buttons */}
            <button onClick={prev} className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-white text-pink-500 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-pink-100 active:scale-90 transition-all border-2 border-pink-200 z-20">
              <img src="/arrow.svg" alt="Previous" className="w-7 h-7" />
            </button>
            <button onClick={next} className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-white text-sky-500 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-sky-100 active:scale-90 transition-all border-2 border-sky-200 z-20">
              <img src="/arrow.svg" alt="Next" className="w-7 h-7 rotate-180" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
