"use client";

import { useState } from "react";

export default function Contact() {
  const faqs = [
    {
      q: "What is Stem Orbit?",
      a: "Stem Orbit is an education platform dedicated to empowering young minds through hands-on STEM, AI, Robotics, and 3D Design labs.",
    },
    {
      q: "How can I enroll my child in a lab?",
      a: "You can enroll your child by contacting us through the form above or by calling our support number. We'll guide you through the process!",
    },
    {
      q: "Are your programs suitable for beginners?",
      a: "Absolutely! Our labs and workshops are designed for all skill levels, from beginners to advanced learners.",
    },
    {
      q: "Where are your labs located?",
      a: "We have labs in multiple cities and also offer online programs. Check our website or contact us for the nearest location.",
    },
    {
      q: "Do you offer online classes?",
      a: "Yes, we offer a variety of online STEM programs and workshops for students everywhere.",
    },
    {
      q: "How do I get in touch for partnership opportunities?",
      a: "Please use the contact form above or email us at info@stemorbit.com for partnership inquiries.",
    },
  ];
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Offerings Section */}
      <section className="w-full bg-[#33aade] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Contact Us</h1>
        </div>
      </section>
      <section className="w-full bg-blue-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a2a5c] text-center mb-8">Get the info you're looking for about our labs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="#" className="rounded-xl bg-white border border-blue-200 shadow-sm px-8 py-8 flex items-center justify-center text-center text-xl font-semibold text-blue-700 hover:bg-blue-100 transition">AI Labs</a>
            <a href="#" className="rounded-xl bg-white border border-purple-200 shadow-sm px-8 py-8 flex items-center justify-center text-center text-xl font-semibold text-purple-700 hover:bg-purple-100 transition">Robotics Labs</a>
            <a href="#" className="rounded-xl bg-white border border-blue-200 shadow-sm px-8 py-8 flex items-center justify-center text-center text-xl font-semibold text-blue-700 hover:bg-blue-100 transition">STEM Labs</a>
            <a href="#" className="rounded-xl bg-white border border-purple-200 shadow-sm px-8 py-8 flex items-center justify-center text-center text-xl font-semibold text-purple-700 hover:bg-purple-100 transition">3D Design</a>
            <a href="#" className="rounded-xl bg-white border border-blue-200 shadow-sm px-8 py-8 flex items-center justify-center text-center text-xl font-semibold text-blue-700 hover:bg-blue-100 transition">Coding Bootcamps</a>
            <a href="#" className="rounded-xl bg-white border border-purple-200 shadow-sm px-8 py-8 flex items-center justify-center text-center text-xl font-semibold text-purple-700 hover:bg-purple-100 transition">Innovation Workshops</a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="w-full py-24 md:py-32 px-4 md:px-0 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-0">
          {/* Left: Contact Info */}
          <div className="flex-1 flex flex-col justify-center md:pr-16 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Have a question, want to collaborate, or just want to say hello? Reach out to the Stem Orbit team and we'll get back to you as soon as possible!
            </p>
            <div className="mb-4">
              <div className="font-semibold text-gray-900">Address:</div>
              <div className="text-gray-700">
                SCO-04, 1st Floor, Mehma Singh<br />
                Complex, Opp. Jal Vayu Towers, Gate 3<br />
                New Sunny Enclave, Kharar, Sector-125<br />
                (Mohali) Punjab - 140301
              </div>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-gray-900">Call:</div>
              <a href="tel:+917009594410" className="text-blue-600 hover:underline">+91-70095-94410</a>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-gray-900">WhatsApp:</div>
              <a href="https://wa.me/917009594410" className="text-blue-600 hover:underline">+91-70095-94410</a>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-gray-900">Mail:</div>
              <a href="mailto:stemorbit@gmail.com" className="text-blue-600 hover:underline block">stemorbit@gmail.com</a>
              <a href="mailto:info@stemorbit.com" className="text-blue-600 hover:underline">info@stemorbit.com</a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="flex-1 flex items-center justify-center">
            <form className="w-full max-w-md bg-gray-50 rounded-2xl shadow p-8 flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Send Us a Message</h2>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" type="text" id="name" name="name" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" type="email" id="email" name="email" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" id="message" name="message" rows={5} placeholder="How can we help you?" />
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl md:text-3xl font-semibold mb-2 text-pink-500" style={{ fontFamily: 'cursive' }}>You Ask, We Answer</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-4 md:p-8">
            {faqs.map((item, idx) => (
              <div key={idx} className="border-b last:border-b-0 border-gray-200">
                <button
                  className="w-full flex items-center justify-between py-5 px-2 md:px-4 text-left text-lg font-medium text-gray-900 focus:outline-none hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                >
                  {item.q}
                  <span className="ml-2 text-2xl transition-transform" style={{ transform: open === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                {open === idx && (
                  <div className="pb-5 px-2 md:px-4 text-gray-700 text-base animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Add fade-in animation for answer
// In your globals.css:
// @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
// .animate-fade-in { animation: fade-in 0.3s ease; } 