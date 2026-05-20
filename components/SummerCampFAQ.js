"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    question: "WHAT WILL KIDS LEARN AT STEMORBIT SUMMER CAMP?",
    content: (
      <p>
        Children will explore hands-on STEM learning through robotics, coding, engineering
        challenges, science experiments, circuits, creative building projects, and problem-solving
        activities.
      </p>
    ),
    headerBg: "bg-[#D81B60]",
    bodyBg: "bg-[#FCE4EC]",
    textColor: "text-[#D81B60]",
  },
  {
    question: "IS THE CAMP SUITABLE FOR BEGINNERS?",
    content: (
      <>
        <p className="mb-2">Yes! Activities are designed according to age and skill level.</p>
        <ul className="ml-4 list-none space-y-1">
          <li>&bull; Grades 1–3 focus on fun exploration and basic STEM concepts.</li>
          <li>&bull; Grade 4+ students work on more advanced technology, coding, robotics, and engineering projects.</li>
        </ul>
      </>
    ),
    headerBg: "bg-[#E53935]",
    bodyBg: "bg-[#FFEBEE]",
    textColor: "text-[#E53935]",
  },
  {
    question: "WHAT KIND OF PROJECTS WILL STUDENTS MAKE?",
    content: (
      <>
        <p className="mb-2">Students will build:</p>
        <ul className="ml-4 list-none space-y-1">
          <li>&bull; Robots and moving models</li>
          <li>&bull; Electric circuits and smart systems</li>
          <li>&bull; Hydraulic machines</li>
          <li>&bull; Wind turbines and renewable energy models</li>
          <li>&bull; Coding games using Scratch</li>
          <li>&bull; Creative STEM art and innovation projects</li>
        </ul>
      </>
    ),
    headerBg: "bg-[#03A9F4]",
    bodyBg: "bg-[#E1F5FE]",
    textColor: "text-[#03A9F4]",
  },
  {
    question: "DO CHILDREN NEED PRIOR CODING OR ROBOTICS EXPERIENCE?",
    content: (
      <p>
        No prior experience is needed. Students are guided step-by-step by instructors and
        learn through hands-on activities.
      </p>
    ),
    headerBg: "bg-[#d7b220]",
    bodyBg: "bg-[#fffdf0]",
    textColor: "text-[#d7b220]",
  },
  {
    question: "WHAT SKILLS WILL CHILDREN DEVELOP?",
    content: (
      <>
        <p className="mb-2">Students build:</p>
        <ul className="ml-4 list-none space-y-1">
          <li>&bull; Creativity and innovation</li>
          <li>&bull; Problem-solving skills</li>
          <li>&bull; Coding and logical thinking</li>
          <li>&bull; Engineering and design skills</li>
          <li>&bull; Teamwork and communication</li>
          <li>&bull; Confidence with technology</li>
        </ul>
      </>
    ),
    headerBg: "bg-[#C2185B]",
    bodyBg: "bg-[#FCE4EC]",
    textColor: "text-[#C2185B]",
  },
  {
    question: "ARE ACTIVITIES SAFE FOR YOUNG CHILDREN?",
    content: (
      <p>
        Yes. All activities are age-appropriate and conducted under instructor supervision
        using child-friendly materials and tools.
      </p>
    ),
    headerBg: "bg-[#EF5350]",
    bodyBg: "bg-[#FFEBEE]",
    textColor: "text-[#EF5350]",
  },
  {
    question: "WHY CHOOSE STEMORBIT SUMMER CAMP?",
    content: (
      <p>
        STEMOrbit combines fun with future-ready learning. Instead of only theory or worksheets,
        children actively build, experiment, create, and learn real-world STEM skills through
        projects and exploration
      </p>
    ),
    headerBg: "bg-[#03A9F4]",
    bodyBg: "bg-[#E1F5FE]",
    textColor: "text-[#03A9F4]",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl bg-white shadow-md">
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between px-6 py-5 text-left text-lg font-bold tracking-wide text-white transition-colors sm:px-8 sm:py-6 sm:text-xl md:text-2xl ${item.headerBg}`}
        style={{ fontFamily: 'var(--font-rubik), sans-serif' }}
      >
        <span>{item.question}</span>
        <svg
          className={`ml-4 h-6 w-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className={`px-6 py-6 text-lg font-medium leading-relaxed sm:px-8 sm:text-xl ${item.bodyBg} ${item.textColor}`}>
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SummerCampFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default like the image? Wait, the image shows all 3 open actually.

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[90rem] px-3 sm:px-4 md:px-5 lg:px-6">
        <h2 className="mb-10 text-center text-4xl font-bold tracking-tight text-gray-900 sm:mb-14 sm:text-5xl md:text-6xl">
          Frequently Asked Questions
        </h2>
        
        <div className="mx-auto flex w-full flex-col">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
