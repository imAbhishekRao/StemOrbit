"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 w-full max-w-4xl">
          {/* Robotics */}
          <div className="relative flex flex-col items-center bg-blue-400 rounded-2xl pt-14 pb-6 px-4 min-w-[180px] w-full">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=96&h=96" width={96} height={96} alt="Robotics" className="rounded-full border-4 border-white" />
            </div>
            <h3 className="text-lg font-bold text-white mt-2 mb-2 text-center">Robotics</h3>
            <p className="text-white text-sm text-center">Build, code, and bring robots to life with hands-on kits and challenges.</p>
          </div>
          {/* AI Labs */}
          <div className="relative flex flex-col items-center bg-purple-400 rounded-2xl pt-14 pb-6 px-4 min-w-[180px] w-full">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=96&h=96" width={96} height={96} alt="AI Labs" className="rounded-full border-4 border-white" />
            </div>
            <h3 className="text-lg font-bold text-white mt-2 mb-2 text-center">AI Labs</h3>
            <p className="text-white text-sm text-center">Explore artificial intelligence, machine learning, and smart tech projects.</p>
          </div>
          {/* STEM Labs */}
          <div className="relative flex flex-col items-center bg-green-400 rounded-2xl pt-14 pb-6 px-4 min-w-[180px] w-full">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=96&h=96" width={96} height={96} alt="STEM Labs" className="rounded-full border-4 border-white" />
            </div>
            <h3 className="text-lg font-bold text-white mt-2 mb-2 text-center">STEM Labs</h3>
            <p className="text-white text-sm text-center">Hands-on science, technology, engineering, and math experiments for all ages.</p>
          </div>
          {/* 3D Design & Printing */}
          <div className="relative flex flex-col items-center bg-pink-400 rounded-2xl pt-14 pb-6 px-4 min-w-[180px] w-full">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=facearea&w=96&h=96" width={96} height={96} alt="3D Design & Printing" className="rounded-full border-4 border-white" />
            </div>
            <h3 className="text-lg font-bold text-white mt-2 mb-2 text-center">3D Design & Printing</h3>
            <p className="text-white text-sm text-center">Create, design, and print 3D models to turn imagination into reality.</p>
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
            Lab experiences, where young minds rise <span className="text-yellow-400">ignite curiosity</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our lab offerings provide hands-on, project-based learning in robotics, AI, STEM, and 3D design. Students collaborate, experiment, and innovate in a safe, inspiring environment designed to spark lifelong passion for science and technology.
          </p>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Expert-Led Workshops</div>
                <div className="text-gray-600 text-base">All labs are guided by passionate educators and industry professionals.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <div>
                <div className="font-bold text-lg text-gray-900">Real-World Skills</div>
                <div className="text-gray-600 text-base">Students gain practical experience with the latest technology and tools.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Full image, object-contain, never cropped */}
        <div className="relative z-10 flex-1 flex justify-center items-center w-full h-full mt-8 md:mt-16">
          <Image src="/about-img.webp" alt="Lab Experience" width={600} height={600} className="w-full h-auto max-h-[420px] object-contain" />
        </div>
      </section>
      {/* Placeholder for rest of content */}
      <div className="w-full max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 mt-12 md:mt-16">
        <p className="text-gray-500 text-lg">(Lab offerings content coming soon...)</p>
      </div>
    </div>
  );
}

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