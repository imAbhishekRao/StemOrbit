"use client";

import React, { useRef, useState } from "react";

const jobs = [
  {
    title: "STEM Trainer",
    location: "Mohali, Punjab",
    experience: "1+ years in STEM/Robotics teaching",
    type: "Full Time",
    short: "Deliver hands-on STEM, Robotics, and AI workshops to students and teachers. Inspire curiosity and creativity in the classroom.",
    details: `As a STEM Trainer, you will:
- Conduct engaging workshops and classes on STEM, Robotics, and AI for students and teachers
- Develop and deliver hands-on activities and projects
- Inspire curiosity, creativity, and problem-solving skills in the classroom
- Collaborate with the curriculum team to improve learning modules
- Support school events, competitions, and exhibitions

Requirements:
- 1+ years of experience in STEM/Robotics teaching
- Passion for education and technology
- Strong communication and presentation skills`
  },
  {
    title: "Business Development Executive",
    location: "Remote / Mohali",
    experience: "1+ years in Sales/Business Development",
    type: "Full Time",
    short: "Build relationships with schools and partners. Drive growth and promote STEMOrbit's mission across India.",
    details: `As a Business Development Executive, you will:
- Identify and connect with potential schools and partners
- Promote STEMOrbit's programs and solutions
- Drive business growth and achieve targets
- Represent the company at events and meetings

Requirements:
- 1+ years of experience in sales or business development
- Excellent communication and negotiation skills
- Self-motivated and target-driven`
  },
  {
    title: "Inventory Manager",
    location: "Mohali, Punjab",
    experience: "2+ years in inventory or warehouse management",
    type: "Full Time",
    short: "Manage and track inventory for STEM kits, lab equipment, and educational materials. Ensure timely procurement and stock accuracy.",
    details: `As an Inventory Manager, you will:
- Oversee inventory of STEM kits, lab equipment, and materials
- Ensure timely procurement and stock accuracy
- Maintain inventory records and reports
- Coordinate with vendors and logistics

Requirements:
- 2+ years of experience in inventory or warehouse management
- Strong organizational and record-keeping skills
- Attention to detail and reliability`
  },
  {
    title: "Accountant",
    location: "Mohali, Punjab",
    experience: "2+ years in accounting or finance",
    type: "Full Time",
    short: "Handle day-to-day accounting, billing, and financial reporting. Maintain accurate records and support audits.",
    details: `As an Accountant, you will:
- Handle day-to-day accounting, billing, and financial reporting
- Maintain accurate records and support audits
- Prepare financial statements and reports
- Assist with budgeting and compliance

Requirements:
- 2+ years of experience in accounting or finance
- Proficiency in accounting software
- Strong attention to detail and accuracy`
  },
  {
    title: "Graphic Designer",
    location: "Mohali, Punjab / Remote",
    experience: "1+ years in graphic design (portfolio required)",
    type: "Full Time / Freelance",
    short: "Design engaging graphics for digital and print, including educational content, marketing materials, and social media.",
    details: `As a Graphic Designer, you will:
- Design graphics for digital and print (educational content, marketing, social media)
- Collaborate with the team to create engaging visuals
- Maintain brand consistency across all materials

Requirements:
- 1+ years of experience in graphic design (portfolio required)
- Proficiency in Adobe Creative Suite or similar tools
- Creativity and attention to detail`
  },
];

export default function Careers() {
  const formRef = useRef(null);
  const [resume, setResume] = useState(null);
  const [openJobIdx, setOpenJobIdx] = useState(null);

  const handleApplyClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      setOpenJobIdx(null);
    }
  };
  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };
  const handleExplore = (idx) => setOpenJobIdx(idx);
  const handleCloseModal = () => setOpenJobIdx(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-[#33aade] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4 text-center">Join the STEMOrbit Team</h1>
          <p className="text-lg md:text-xl text-white mb-6 text-center">We're on a mission to inspire the next generation of innovators. Explore career opportunities and help us shape the future of STEM, AI, and Robotics education.</p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Open Positions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, idx) => (
              <div key={job.title} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col transition-transform duration-200 border border-transparent hover:scale-105 hover:shadow-2xl hover:border-blue-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-[#33aade] mb-2">{job.title}</h3>
                <p className="text-gray-700 mb-4">{job.short}</p>
                <span className="text-sm text-gray-500 mb-2">Location: {job.location}</span>
                <span className="text-sm text-gray-500 mb-2">Experience: {job.experience.replace(/(\d+\+?)/g, (m) => `<span class="font-poppins">${m}</span>`)}</span>
                <span className="text-sm text-gray-500 mb-4">Type: {job.type}</span>
                <button type="button" onClick={() => handleExplore(idx)} className="mt-auto py-2 px-4 bg-[#33aade] text-white rounded-lg font-semibold hover:bg-pink-500 transition">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {openJobIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold">&times;</button>
            <h3 className="text-2xl font-bold text-[#33aade] mb-2">{jobs[openJobIdx].title}</h3>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Location:</span> {jobs[openJobIdx].location}</div>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Experience:</span> {jobs[openJobIdx].experience}</div>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Type:</span> {jobs[openJobIdx].type}</div>
            <div className="my-4 whitespace-pre-line text-gray-800 border-t pt-4">{jobs[openJobIdx].details}</div>
            <button type="button" onClick={handleApplyClick} className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg mt-4">Apply Now</button>
          </div>
        </div>
      )}

      {/* Application Form */}
      <section className="w-full py-12 px-4 bg-white">
        <div ref={formRef} className="max-w-2xl mx-auto bg-gray-50 rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Apply Now</h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500" type="text" id="name" name="name" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500" type="email" id="email" name="email" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="position">Position Applying For</label>
              <input className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500" type="text" id="position" name="position" placeholder="e.g. STEM Trainer" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Why do you want to join us?</label>
              <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500" id="message" name="message" rows={4} placeholder="Tell us about your passion and experience" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="resume">Attach Resume</label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
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