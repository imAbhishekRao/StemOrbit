"use client";

import { useState } from "react";
import Image from 'next/image';
import React from 'react';

// Add custom keyframes for shadow pulse animation
const shadowPulseStyle = (
  <style jsx global>{`
    @keyframes shadowPulse {
      0%, 100% {
        box-shadow: 0 4px 20px 0 rgba(52, 168, 83, 0.3);
      }
      50% {
        box-shadow: 0 8px 32px 0 rgba(52, 168, 83, 0.5);
      }
    }
    .shadow-pulse {
      animation: shadowPulse 1.6s infinite ease-in-out;
    }
  `}</style>
);

export default function Contact() {
  const [openFaqGroup, setOpenFaqGroup] = useState('principals');
  const [openQuestionIdx, setOpenQuestionIdx] = useState(null);

  const faqsData = {
    principals: [
      {
        q: "What does STEMOrbit offer for schools?",
        a: "We provide complete lab setup solutions for ATL, STEM, and Robotics Labs — including furniture, electronic kits, 3D printers, tools, and more. Alongside that, we offer curriculum-based training for students and teachers and full support for competitions and exhibitions."
      },
      {
        q: "Can STEMOrbit help us set up an ATL/Robotics/STEM lab from scratch?",
        a: "Yes. We offer turnkey lab solutions, which means we handle everything — from designing the layout and providing furniture to installing hardware and software, ensuring your school is ready to deliver hands-on learning."
      },
      {
        q: "Is your curriculum aligned with the school syllabus and NEP guidelines?",
        a: "Absolutely. Our training content is fully aligned with CBSE, ICSE, and State Boards, and we integrate the goals of the National Education Policy (NEP) by promoting critical thinking, innovation, and skill-based learning."
      },
      {
        q: "Do you provide teacher training along with lab setup?",
        a: "Yes. Every setup includes comprehensive teacher training modules to empower educators with the tools and confidence to run STEM/ATL sessions independently."
      },
      {
        q: "Will students get support for participating in national or international competitions?",
        a: "Definitely. We offer dedicated mentorship and project guidance for competitions like Atal Tinkering Marathon, Toycathon, CBSE exhibitions, IRIS, and more."
      },
      {
        q: "Can you customize the lab as per our school's space and budget?",
        a: "Yes. Our lab packages are modular and scalable. Whether you have a compact space or a large room, we tailor the setup based on your infrastructure and financial planning."
      },
      {
        q: "Do you offer ongoing support after the lab is installed?",
        a: "Yes, we provide ongoing support to schools. We can train your teachers weekly or monthly as per your requirements. If your school already has a trainer, we also offer support and upgrades. Additionally, if you'd like, we can provide  training to students as well weekly or monthly, based on your preference."
      },
      {
        q: "Is there any documentation or certification provided?",
        a: "We provide detailed reports, manuals, session records, and participation certificates for teachers and students, which can also support school accreditations or ATL reporting."
      },
      {
        q: "How long does it take to set up the lab?",
        a: "Typically, it takes 7–14 working days to fully complete the lab setup depending on the scope. This includes installation, testing, and orientation."
      },
      {
        q: "How can our school get started with STEMOrbit?",
        a: "Simply reach out to us through our Contact page, WhatsApp, or Email. Our team will guide you through the assessment, proposal, and setup process."
      },
    ],
    students: [
      {
        q: "What kind of training batches are available for students at STEMOrbit?",
        a: "We offer two batches for students from Grade 1 to 12:\n\nRegular Batch\n\nWeekend Batch\nBoth are available for:\n\nJunior Students (Grade 1 to 5)\n\nSenior Students (Grade 6 to 12)\nEach batch is designed with age-appropriate learning, practical activities, and project-based exploration."
      },
      {
        q: "How long are the sessions?",
        a: "Regular Batch: 1-hour sessions\n\nWeekend Batch: Duration varies based on the session and student needs"
      },
      {
        q: "Do we need to bring our own materials for training?",
        a: "No. All required materials, kits, and tools are provided by us for every session."
      },
      {
        q: "Do you provide support for projects and competitions?",
        a: "Yes! We offer full project and competition support to students who are interested in taking their ideas further — from school-level to national competitions."
      },
      {
        q: "Do you teach 3D designing and printing as well?",
        a: "Absolutely. We train students in 3D designing and printing, helping them visualize and build real-world prototypes."
      },
      {
        q: "Can I join even if my school doesn't have a STEM lab?",
        a: "Yes! You can still join our batches and participate in all training and project opportunities, regardless of your school's infrastructure."
      },
      {
        q: "Will I get help with science exhibition ideas or models?",
        a: "Yes, we help students develop ideas, build working models, and prepare presentations for science exhibitions and innovation challenges."
      },
      {
        q: "Are there any coding or robotics classes included?",
        a: "Yes. Our training covers a wide range of STEM topics including coding, robotics, electronics, AI fundamentals, and more — depending on the grade and interest level."
      },
      {
        q: "Is this training useful for future careers?",
        a: "Definitely! Our programs build real-world skills in problem-solving, creativity, and technology, which are essential for careers in engineering, design, coding, and innovation."
      },
      {
        q: "How can I enroll in a batch?",
        a: "You (or your parents) can reach out to us through our website, WhatsApp, or email, and we'll guide you through the enrollment process."
      },
    ],
    parents: [
      {
        q: "How will STEMOrbit benefit my child?",
        a: "STEMOrbit nurtures your child's curiosity and creativity by offering hands-on learning in science, technology, robotics, and 3D design. Our programs help students develop problem-solving skills, confidence, and innovation mindset — all essential for future careers."
      },
      {
        q: "Is the program safe and age-appropriate?",
        a: "Yes. All activities are age-specific and supervised by trained facilitators. We use safe tools and ensure a secure environment for both junior (Grades 1–5) and senior (Grades 6–12) students."
      },
      {
        q: "Do you provide materials, or do we need to purchase anything separately?",
        a: "We provide all required materials, tools, and kits for training sessions — so you don't need to buy anything separately."
      },
      {
        q: "Will this affect my child's school studies?",
        a: "Not at all. Our Regular and Weekend Batches are designed to complement school learning, not compete with it. In fact, many students find that STEMOrbit helps them better understand their school subjects through real-life application."
      },
      {
        q: "What if my child has no prior experience with robotics or coding?",
        a: "No prior experience is needed! Our programs are designed for all levels — beginners to advanced learners. We start with the basics and gradually move toward more complex concepts, ensuring every child feels confident and included."
      },
      {
        q: "Can my child participate in science fairs or competitions through STEMOrbit?",
        a: "Yes. We offer complete support for projects and competitions. If your child is passionate about innovation, we guide them from idea to execution — including mentoring for exhibitions and national-level contests."
      },
      {
        q: "What are the options for class timings?",
        a: "We offer flexible batches:\n\nRegular Batch (suitable for daily learning)\n\nWeekend Batch (ideal for students with busy weekdays)\nYou can choose what suits your child's schedule best."
      },
      {
        q: "Will my child learn anything beyond just robotics?",
        a: "Yes! Our curriculum includes robotics, electronics, 3D designing and printing, coding, AI concepts, and innovation challenges — designed to give a complete STEM experience."
      },
      {
        q: "Is it worth enrolling my child if their school already has a lab?",
        a: "Yes. Many parents choose us for the depth, structure, and regularity of our training. Our programs offer consistent practice, expert mentorship, and opportunities beyond what regular school labs typically provide."
      },
      {
        q: "How can I enroll my child?",
        a: "Just reach out to us via WhatsApp, Email, or through the Contact form on our website. Our team will explain the available batches and help you choose what's best for your child."
      },
    ],
  };

  // Floating WhatsApp Button
  function FixedWhatsAppButton() {
    return (
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/917009594410?text=Hello%20STEMOrbit!%20I'm%20interested%20in%20your%20STEM,%20AI,%20Robotics,%20and%20Lab%20solutions.%20Could%20you%20please%20provide%20more%20information%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        {shadowPulseStyle}
        <Image
          src="/whatsapp.webp"
          alt="Chat on WhatsApp"
          width={60}
          height={60}
          className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] shadow-pulse"
          priority
        />
      </a>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <FixedWhatsAppButton />
      {/* Offerings Section */}
      <section className="w-full bg-[#33aade] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Contact Us</h1>
        </div>
      </section>
      {/* Contact Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-0 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8">
          {/* Left: Contact Info */}
            <div className="flex-1 flex flex-col justify-center lg:pr-8 mb-6 sm:mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h1>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-xl">
              Have a question, want to collaborate, or just want to say hello? Reach out to the STEMOrbit team and we'll get back to you as soon as possible!
            </p>
            <div className="mb-3 sm:mb-4">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Address:</div>
              <div className="text-gray-700 text-sm sm:text-base">
                SCO-04, 1st Floor, Mehma Singh<br />
                Complex, Opp. Jal Vayu Towers, Gate 3<br />
                New Sunny Enclave, Kharar, Sector-125<br />
                (Mohali) Punjab - 140301
              </div>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Call:</div>
              <a href="tel:+917009594410" className="text-blue-600 hover:underline text-sm sm:text-base">+91-70095-94410</a>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Landline:</div>
              <a href="tel:+911605010684" className="text-blue-600 hover:underline text-sm sm:text-base">+91-160-501-0684</a>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp:</div>
              <a href="https://wa.me/917009594410" className="text-blue-600 hover:underline text-sm sm:text-base">+91-70095-94410</a>
            </div>
            <div className="mb-3 sm:mb-4">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Mail:</div>
              <a href="mailto:stemorbit@gmail.com" className="text-blue-600 hover:underline block text-sm sm:text-base">stemorbit@gmail.com</a>
              <a href="mailto:info@stemorbit.com" className="text-blue-600 hover:underline text-sm sm:text-base">info@stemorbit.com</a>
            </div>
          </div>
            {/* Right: Map */}
            <div className="flex-1 flex items-stretch justify-center">
              <div className="w-full h-full max-w-md rounded-2xl shadow-lg border border-blue-100 overflow-hidden flex flex-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.701414545301!2d76.6668110750384!3d30.754887584562596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef3cc28f9a51%3A0x663e39db36882036!2sSTEMOrbit!5e0!3m2!1sen!2sin!4v1751865846478!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, width: '100%', height: '100%', minHeight: 350 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="STEMOrbit Location Map"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Contact Form below */}
          <div className="flex items-center justify-center mt-12 sm:mt-16 lg:mt-20 mb-0">
            <form className="w-full max-w-5xl bg-gray-50 rounded-2xl shadow p-6 sm:p-8 flex flex-col gap-4 sm:gap-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Send Us a Message</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="name">Name</label>
                  <input className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500 text-sm sm:text-base" type="text" id="name" name="name" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="city">City</label>
                  <input className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500 text-sm sm:text-base" type="text" id="city" name="city" placeholder="Your City" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="mobile">Mobile Number</label>
                  <input className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500 text-sm sm:text-base" type="tel" id="mobile" name="mobile" placeholder="Your Mobile Number" pattern="[0-9]{10}" maxLength="15" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="email">Email</label>
                  <input className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500 text-sm sm:text-base" type="email" id="email" name="email" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base" htmlFor="message">Message</label>
                <textarea className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500 text-sm sm:text-base" id="message" name="message" rows={4} placeholder="How can we help you?" />
              </div>
              <button type="submit" className="w-full py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm sm:text-base">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full py-8 sm:py-10 px-4 sm:px-6 md:px-8 bg-white -mt-16 sm:-mt-20" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="max-w-3xl mx-auto mt-0">
   
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1 text-pink-500 mt-0.5" style={{ fontFamily: 'cursive' }}>You Ask We Answer</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto mb-6 sm:mb-8">
            <button
              className={`min-w-[200px] sm:min-w-[260px] w-full rounded-xl border shadow-sm px-4 sm:px-8 py-4 sm:py-6 lg:py-8 flex items-center justify-center text-center text-base sm:text-lg lg:text-xl font-semibold transition focus:outline-none ${openFaqGroup === 'principals' ? 'bg-[#33aade] text-white border-[#33aade]' : 'bg-white border-blue-200 text-blue-700 hover:bg-blue-100'}`}
              style={{ fontFamily: 'Manrope, sans-serif' }}
              onClick={() => { setOpenFaqGroup('principals'); setOpenQuestionIdx(null); }}
            >
              For Schools
            </button>
            <button
              className={`min-w-[200px] sm:min-w-[260px] w-full rounded-xl border shadow-sm px-4 sm:px-8 py-4 sm:py-6 lg:py-8 flex items-center justify-center text-center text-base sm:text-lg lg:text-xl font-semibold transition focus:outline-none ${openFaqGroup === 'students' ? 'bg-purple-600 text-white border-purple-600' : 'bg-white border-purple-200 text-purple-700 hover:bg-purple-100'}`}
              style={{ fontFamily: 'Manrope, sans-serif' }}
              onClick={() => { setOpenFaqGroup('students'); setOpenQuestionIdx(null); }}
            >
              For Students
            </button>
            <button
              className={`min-w-[200px] sm:min-w-[260px] w-full rounded-xl border shadow-sm px-4 sm:px-8 py-4 sm:py-6 lg:py-8 flex items-center justify-center text-center text-base sm:text-lg lg:text-xl font-semibold transition focus:outline-none ${openFaqGroup === 'parents' ? 'bg-[#33aade] text-white border-[#33aade]' : 'bg-white border-blue-200 text-blue-700 hover:bg-blue-100'}`}
              style={{ fontFamily: 'Manrope, sans-serif' }}
              onClick={() => { setOpenFaqGroup('parents'); setOpenQuestionIdx(null); }}
            >
              For Parents
            </button>
          </div>
          {openFaqGroup && (
            <div className="bg-gray-50 rounded-2xl shadow-lg p-4 md:p-8 animate-fade-in" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {faqsData[openFaqGroup].map((item, idx) => (
              <div key={idx} className="border-b last:border-b-0 border-gray-200">
                <button
                    className={`w-full flex items-center justify-between py-5 px-2 md:px-4 text-left text-lg font-medium text-gray-900 focus:outline-none transition-colors rounded-lg ${openQuestionIdx === idx ? 'bg-blue-50' : 'hover:bg-blue-50'}`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                    onClick={() => setOpenQuestionIdx(openQuestionIdx === idx ? null : idx)}
                    aria-expanded={openQuestionIdx === idx}
                  >
                    <span>{item.q}</span>
                    <span className={`ml-2 text-2xl transition-transform duration-200 ${openQuestionIdx === idx ? 'rotate-45 text-[#33aade]' : 'rotate-0 text-gray-400'}`}>+</span>
                </button>
                  {openQuestionIdx === idx && (
                    <div className="pb-5 px-2 md:px-4 text-gray-700 text-base animate-fade-in mt-2 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Add fade-in animation for answer
// In your globals.css:
// @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
// .animate-fade-in { animation: fade-in 0.3s ease; } 