"use client";

import Link from "next/link";
import { handleBookCallClick } from "../../lib/calendly";

export default function WhatWeProvidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50">
      {/* Page Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-fredoka">
            What We <span className="text-pink-600">Provide</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
    </div>
  );
}

function Section({ index, title, description, bullets, img, ctas }) {
  const isEven = index % 2 === 0;
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-10 items-center ${isEven ? '' : ''}`}>
          {/* Media */}
          <div className={`${isEven ? '' : 'lg:order-2'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-pink-500/20 bg-white">
              <img src={img} alt={title} className="w-full h-auto object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-pink-100/20 via-transparent to-purple-100/20" />
            </div>
          </div>

          {/* Content */}
          <div className={`${isEven ? '' : 'lg:order-1'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-fredoka">
              {title}
            </h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
              {description}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-5 space-y-2 text-gray-700">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow ring-2 ring-white"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {ctas && ctas.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {ctas.map((cta, i) => (
                  cta.href ? (
                    <Link
                      key={i}
                      href={cta.href}
                      className={`px-5 py-2.5 rounded-full font-semibold shadow-lg transition-all ${cta.variant === 'primary' ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700' : 'bg-white text-pink-600 ring-1 ring-pink-300 hover:bg-pink-50'}`}
                    >
                      {cta.label}
                    </Link>
                  ) : (
                    <button
                      key={i}
                      onClick={cta.onClick}
                      className={`px-5 py-2.5 rounded-full font-semibold shadow-lg transition-all ${cta.variant === 'primary' ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700' : 'bg-white text-pink-600 ring-1 ring-pink-300 hover:bg-pink-50'}`}
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
    </section>
  );
}


