"use client";

import Link from "next/link";
import { handleBookCallClick } from "../../lib/calendly";

export default function WhatWeProvidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-300/30 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-300/30 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-300/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-orange-300/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Page Header */}
      <section className="py-8 sm:py-12 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 font-fredoka animate-fade-in">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 animate-gradient">Provide</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
            A complete STEM ecosystem for schools, students and educators — programs that inspire curiosity and build real-world skills.
          </p>
        </div>
      </section>

      {/* STEM Classes */}
      <Section
        index={0}
        title="STEM Classes (Grade 1–12)"
        description="Structured, age-appropriate STEM programs that blend science, technology, engineering and mathematics with hands‑on building and problem solving. Students learn by doing — projects, experiments and mini‑builds that make concepts stick."
        bullets={[
          "Curriculum mapped to grades with progressive difficulty",
          "Weekly sessions with projects and take‑home activities",
          "Focus on creativity, logic and real‑world application"
        ]}
        img="/style1.png"
        ctas={[
          { label: "Learn More", href: "/courses", variant: "primary" },
          { label: "Enquire", onClick: handleBookCallClick, variant: "ghost" }
        ]}
      />

      {/* STEM/ATL/Robotics/AI/IoT/Math Lab */}
      <Section
        index={1}
        title="STEM / Atal Tinkering Lab • Robotics • AI • IoT • Math Lab"
        description="End‑to‑end setup and operations for school innovation labs. We design the lab, install equipment, create safety and usage processes, and run year‑round programs that deliver measurable outcomes."
        bullets={[
          "Lab planning, procurement and setup",
          "Curriculum + activity kits + maintenance",
          "Mentor support and outcome tracking"
        ]}
        img="/laboffering image 2.png"
        ctas={[
          { label: "Learn More", href: "/our-lab-offerings", variant: "primary" },
          { label: "Book a Call", onClick: handleBookCallClick, variant: "ghost" }
        ]}
      />

      {/* School Sessions */}
      <Section
        index={2}
        title="School Sessions"
        description="Engaging in‑school STEM sessions — demo days, concept deep‑dives, and maker workshops that ignite curiosity across grades."
        bullets={[
          "Custom topics aligned to your academic calendar",
          "1‑day to multi‑week formats",
          "Hands‑on demos and collaborative challenges"
        ]}
        img="/With Strock (2).png"
        ctas={[
          { label: "Learn More", href: "/our-lab-offerings", variant: "primary" },
          { label: "Enquire", onClick: handleBookCallClick, variant: "ghost" }
        ]}
      />

      {/* Technical Event Support */}
      <Section
        index={3}
        title="Technical Event Support"
        description="From science exhibitions to innovation fairs — we handle concept planning, stalls, live demos, judging rubrics and student facilitation."
        bullets={[
          "End‑to‑end event planning and execution",
          "Real working demos and interactive booths",
          "Awards, judging criteria and documentation"
        ]}
        img="/style1.png"
        ctas={[
          { label: "Enquire", onClick: handleBookCallClick, variant: "primary" }
        ]}
      />

      {/* Teacher Training Program */}
      <Section
        index={4}
        title="Teacher Training Program"
        description="A practical, classroom‑ready upskilling pathway that helps teachers confidently deliver STEM and lab‑based learning. We focus on pedagogy, safety, facilitation and assessment — not just tools."
        bullets={[
          "Foundations: inquiry‑based learning, design thinking",
          "Hands‑on kits: electronics, robotics, 3D, coding basics",
          "Classroom management: safety, differentiation, pacing",
          "Assessment: rubrics, portfolios, outcome tracking",
          "Ongoing mentorship and lesson‑planning support"
        ]}
        img="/laboffering image 2.png"
        ctas={[
          { label: "Learn More", href: "/our-lab-offerings", variant: "primary" },
          { label: "Book a Call", onClick: handleBookCallClick, variant: "ghost" }
        ]}
      />

      {/* STEM Camps */}
      <Section
        index={5}
        title="STEM Camps"
        description="Holiday camps that turn curiosity into creation. Kids build projects like smart lights, bots and wind turbines while learning the science behind them."
        bullets={[
          "Beginner to advanced tracks",
          "Daily builds and take‑home projects",
          "Showcase day for parents"
        ]}
        img="/style1.png"
        ctas={[
          { label: "Learn More", href: "/summercamp", variant: "primary" },
          { label: "Enquire", onClick: handleBookCallClick, variant: "ghost" }
        ]}
      />

      {/* Technical Competition Support */}
      <Section
        index={6}
        title="Technical Competition Support"
        description="Preparation for national and international competitions — problem selection, mentoring, practice runs and documentation."
        bullets={[
          "Mentorship for robotics, innovation and maker contests",
          "Team formation, role clarity, project planning",
          "Review sessions and final presentation readiness"
        ]}
        img="/With Strock (2).png"
        ctas={[
          { label: "Enquire", onClick: handleBookCallClick, variant: "primary" }
        ]}
      />

      {/* Industrial Training Program */}
      <Section
        index={7}
        title="Industrial Training Program"
        description="Industry‑aligned training for senior students — real tools, real workflows, real outcomes."
        bullets={[
          "Domain tracks: CAD/CAM, coding, electronics, prototyping",
          "Mini‑internship style projects and reviews",
          "Certificates and portfolio guidance"
        ]}
        img="/style1.png"
        ctas={[
          { label: "Enquire", onClick: handleBookCallClick, variant: "primary" }
        ]}
      />

      {/* 3D Designing & Printing */}
      <Section
        index={8}
        title="3D Designing & Printing — Training & Workshops"
        description="From idea to 3D model to printed part — students learn CAD, slicing and printer operations through practical, useful projects."
        bullets={[
          "Beginner to advanced CAD (TinkerCAD to Fusion)",
          "Printer setup, slicing and materials",
          "Make‑and‑take workshops for schools"
        ]}
        img="/3d printing 2.png"
        ctas={[
          { label: "Learn More", href: "/3d-printing", variant: "primary" },
          { label: "Enquire", onClick: handleBookCallClick, variant: "ghost" }
        ]}
      />

      {/* Footer spacer */}
      <div className="h-10" />
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .group:hover .animate-gradient {
          animation-duration: 1s;
        }
      `}</style>
    </div>
  );
}

function Section({ index, title, description, bullets, img, ctas }) {
  const isEven = index % 2 === 0;
  
  // Color schemes for different sections
  const colorSchemes = [
    { bg: 'from-pink-200 to-rose-300', accent: 'from-pink-500 to-rose-600', dot: 'bg-pink-500' },
    { bg: 'from-blue-200 to-indigo-300', accent: 'from-blue-500 to-indigo-600', dot: 'bg-blue-500' },
    { bg: 'from-green-200 to-emerald-300', accent: 'from-green-500 to-emerald-600', dot: 'bg-green-500' },
    { bg: 'from-purple-200 to-violet-300', accent: 'from-purple-500 to-violet-600', dot: 'bg-purple-500' },
    { bg: 'from-orange-200 to-amber-300', accent: 'from-orange-500 to-amber-600', dot: 'bg-orange-500' },
    { bg: 'from-cyan-200 to-teal-300', accent: 'from-cyan-500 to-teal-600', dot: 'bg-cyan-500' },
    { bg: 'from-red-200 to-pink-300', accent: 'from-red-500 to-pink-600', dot: 'bg-red-500' },
    { bg: 'from-yellow-200 to-orange-300', accent: 'from-yellow-500 to-orange-600', dot: 'bg-yellow-500' },
    { bg: 'from-indigo-200 to-purple-300', accent: 'from-indigo-500 to-purple-600', dot: 'bg-indigo-500' }
  ];
  
  const colors = colorSchemes[index % colorSchemes.length];
  
  return (
    <section className="py-6 sm:py-8 md:py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single merged section with no borders */}
        <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl`}>
          <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : ''}`}>
            {/* Media - merged with content */}
            <div className={`${isEven ? '' : 'lg:order-2'} group relative`}>
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[400px] overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10" />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Content - merged with media */}
            <div className={`${isEven ? '' : 'lg:order-1'} p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-fredoka mb-3 sm:mb-4">
                {title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                {description}
              </p>
              {bullets && bullets.length > 0 && (
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 group">
                      <span className={`mt-1 inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${colors.dot} shadow-lg ring-2 ring-white transform transition-all duration-300 group-hover:scale-125 group-hover:animate-pulse flex-shrink-0`}></span>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {ctas && ctas.length > 0 && (
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
                  {ctas.map((cta, i) => (
                    cta.href ? (
                      <Link
                        key={i}
                        href={cta.href}
                        className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base text-center ${cta.variant === 'primary' ? `bg-gradient-to-r ${colors.accent} text-white hover:shadow-2xl` : 'bg-white text-gray-700 ring-2 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400'}`}
                      >
                        {cta.label}
                      </Link>
                    ) : (
                      <button
                        key={i}
                        onClick={cta.onClick}
                        className={`w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base ${cta.variant === 'primary' ? `bg-gradient-to-r ${colors.accent} text-white hover:shadow-2xl` : 'bg-white text-gray-700 ring-2 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400'}`}
                      >
                        {cta.label}
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


