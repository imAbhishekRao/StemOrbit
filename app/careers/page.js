"use client";

import React, { useRef, useState } from "react";

export default function Careers() {
  const formRef = useRef(null);
  const [resume, setResume] = useState(null);
  const handleApplyClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-[#33aade] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join the STEMOrbit Team</h1>
          <p className="text-lg md:text-xl text-white mb-6">We're on a mission to inspire the next generation of innovators. Explore career opportunities and help us shape the future of STEM, AI, and Robotics education.</p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Open Positions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample Job 1 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-[#33aade] mb-2">STEM Trainer</h3>
              <p className="text-gray-700 mb-4">Deliver hands-on STEM, Robotics, and AI workshops to students and teachers. Inspire curiosity and creativity in the classroom.</p>
              <span className="text-sm text-gray-500 mb-2">Location: Mohali, Punjab</span>
              <span className="text-sm text-gray-500 mb-2">Experience: 1+ years in STEM/Robotics teaching</span>
              <span className="text-sm text-gray-500 mb-4">Type: Full Time</span>
              <button type="button" onClick={handleApplyClick} className="mt-auto py-2 px-4 bg-[#33aade] text-white rounded-lg font-semibold hover:bg-pink-500 transition">Apply Now</button>
            </div>
            {/* Sample Job 2 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-[#33aade] mb-2">Business Development Executive</h3>
              <p className="text-gray-700 mb-4">Build relationships with schools and partners. Drive growth and promote STEMOrbit's mission across India.</p>
              <span className="text-sm text-gray-500 mb-2">Location: Remote / Mohali</span>
              <span className="text-sm text-gray-500 mb-2">Experience: 1+ years in Sales/Business Development</span>
              <span className="text-sm text-gray-500 mb-4">Type: Full Time</span>
              <button type="button" onClick={handleApplyClick} className="mt-auto py-2 px-4 bg-[#33aade] text-white rounded-lg font-semibold hover:bg-pink-500 transition">Apply Now</button>
            </div>
            {/* Inventory Manager */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-[#33aade] mb-2">Inventory Manager</h3>
              <p className="text-gray-700 mb-4">Manage and track inventory for STEM kits, lab equipment, and educational materials. Ensure timely procurement and stock accuracy.</p>
              <span className="text-sm text-gray-500 mb-2">Location: Mohali, Punjab</span>
              <span className="text-sm text-gray-500 mb-2">Experience: 2+ years in inventory or warehouse management</span>
              <span className="text-sm text-gray-500 mb-4">Type: Full Time</span>
              <button type="button" onClick={handleApplyClick} className="mt-auto py-2 px-4 bg-[#33aade] text-white rounded-lg font-semibold hover:bg-pink-500 transition">Apply Now</button>
            </div>
            {/* Accountant */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-[#33aade] mb-2">Accountant</h3>
              <p className="text-gray-700 mb-4">Handle day-to-day accounting, billing, and financial reporting. Maintain accurate records and support audits.</p>
              <span className="text-sm text-gray-500 mb-2">Location: Mohali, Punjab</span>
              <span className="text-sm text-gray-500 mb-2">Experience: 2+ years in accounting or finance</span>
              <span className="text-sm text-gray-500 mb-4">Type: Full Time</span>
              <button type="button" onClick={handleApplyClick} className="mt-auto py-2 px-4 bg-[#33aade] text-white rounded-lg font-semibold hover:bg-pink-500 transition">Apply Now</button>
            </div>
            {/* Graphic Designer */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-[#33aade] mb-2">Graphic Designer</h3>
              <p className="text-gray-700 mb-4">Design engaging graphics for digital and print, including educational content, marketing materials, and social media.</p>
              <span className="text-sm text-gray-500 mb-2">Location: Mohali, Punjab / Remote</span>
              <span className="text-sm text-gray-500 mb-2">Experience: 1+ years in graphic design (portfolio required)</span>
              <span className="text-sm text-gray-500 mb-4">Type: Full Time / Freelance</span>
              <button type="button" onClick={handleApplyClick} className="mt-auto py-2 px-4 bg-[#33aade] text-white rounded-lg font-semibold hover:bg-pink-500 transition">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-12 px-4 bg-white">
        <div ref={formRef} className="max-w-2xl mx-auto bg-gray-50 rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Apply Now</h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200" type="text" id="name" name="name" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200" type="email" id="email" name="email" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="position">Position Applying For</label>
              <input className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200" type="text" id="position" name="position" placeholder="e.g. STEM Trainer" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Why do you want to join us?</label>
              <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200" id="message" name="message" rows={4} placeholder="Tell us about your passion and experience" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="resume">Attach Resume</label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              {resume && (
                <div className="mt-2 text-sm text-gray-600">Selected file: {resume.name}</div>
              )}
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
} 