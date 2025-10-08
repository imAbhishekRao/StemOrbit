"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BeASTEMEducatorPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentRole: '',
    schoolName: '',
    experience: '',
    qualification: '',
    stemSubjects: [],
    motivation: '',
    goals: '',
    startTime: '',
    additionalInfo: '',
    terms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'stemSubjects') {
        setFormData(prev => ({
          ...prev,
          stemSubjects: checked 
            ? [...prev.stemSubjects, value]
            : prev.stemSubjects.filter(subject => subject !== value)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        currentRole: '',
        schoolName: '',
        experience: '',
        qualification: '',
        stemSubjects: [],
        motivation: '',
        goals: '',
        startTime: '',
        additionalInfo: '',
        terms: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-200 rounded-full opacity-25"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#ec4899">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-pink-600 font-bold text-xl font-bubblegum">Join Our Mission</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight font-fredoka">
              Become a <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Certified STEM Educator</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-quicksand leading-relaxed">
              Empower. Innovate. Inspire.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-5xl mx-auto font-quicksand leading-relaxed">
              Education is evolving — and so must educators. In today's fast-changing world, students need more than textbook knowledge; they need skills to think, create, and solve real-world problems. That's where STEMOrbit's Certified STEM Teacher Training Program comes in — empowering teachers to lead this change confidently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-xl rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-fredoka">
                Enroll Today
              </button>
              <Link href="/contact">
                <button className="px-10 py-4 border-2 border-pink-500 text-pink-500 font-semibold text-xl rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 font-fredoka">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is STEMOrbit's Program Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-fredoka">
                🚀 What is STEMOrbit's STEM Teacher Training Program?
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-quicksand leading-relaxed">
                STEMOrbit's training program is a comprehensive, hands-on certification course designed to transform traditional teaching into interactive, inquiry-based learning. It equips educators with modern tools, techniques, and STEM pedagogy that make Science, Technology, Engineering, and Mathematics come alive in the classroom.
              </p>
              <p className="text-lg text-gray-700 font-quicksand leading-relaxed">
                Through engaging modules, experiments, and design challenges, teachers learn how to turn every concept into a real-world learning experience — inspiring curiosity and creativity in their students.
              </p>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-blue-300 rounded-2xl transform scale-110 opacity-20"></div>
                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="/TeacherTraining.JPG" 
                    alt="STEM Teacher Training" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-fredoka">
              💡 What You'll Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Foundations of STEM Education</h3>
              <ul className="space-y-3 text-gray-700 font-quicksand">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Understanding the importance of STEM in the 21st century
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Integrating interdisciplinary concepts effectively
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Building a problem-solving and inquiry-based mindset
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Hands-On STEM Methodologies</h3>
              <ul className="space-y-3 text-gray-700 font-quicksand">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Designing classroom experiments and STEM challenges
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Conducting interactive sessions using low-cost materials
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Applying project-based learning (PBL) in day-to-day teaching
                </li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Technology & Innovation in the Classroom</h3>
              <ul className="space-y-3 text-gray-700 font-quicksand">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Introduction to Arduino, Robotics, AI, and Coding for school-level teaching
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Using digital tools, sensors, and simple electronics for STEM projects
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Exploring 3D printing, design thinking, and maker culture
                </li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Curriculum Integration & Lesson Planning</h3>
              <ul className="space-y-3 text-gray-700 font-quicksand">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Mapping STEM activities to school curriculum and learning outcomes
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Creating assessment rubrics for innovation and creativity
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Managing time, resources, and student engagement effectively
                </li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Future-Ready Skills for Educators</h3>
              <ul className="space-y-3 text-gray-700 font-quicksand">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Critical thinking, creativity, collaboration, and communication
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Classroom innovation techniques to nurture 21st-century learners
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Building leadership and mentorship qualities in STEM environments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Schools Need Trained STEM Teachers */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-fredoka">
              🌍 Why Schools Need Trained STEM Teachers
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto font-quicksand leading-relaxed">
              The world is moving towards automation, AI, and innovation-led economies. Tomorrow's jobs don't exist today — and our students must be prepared to create them.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto font-quicksand leading-relaxed mt-4">
              To do that, we need teachers who can spark curiosity, guide discovery, and foster innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Mentor</h3>
              <p className="text-gray-700 font-quicksand">A mentor who connects theory to real-world challenges.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Facilitator</h3>
              <p className="text-gray-700 font-quicksand">A facilitator of creativity and collaboration.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Leader</h3>
              <p className="text-gray-700 font-quicksand">A leader shaping students to become future innovators, engineers, and problem-solvers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Program is the Need of the Hour */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-fredoka">
              ⏰ Why This Program is the Need of the Hour
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-fredoka">Bridging the Skill Gap</h3>
              <p className="text-gray-700 text-sm font-quicksand">Traditional teaching often lacks real-world relevance; STEM training bridges this gap.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-fredoka">NEP 2020 Alignment</h3>
              <p className="text-gray-700 text-sm font-quicksand">Emphasizes experiential learning — STEM-trained teachers align perfectly with this vision.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-fredoka">Global Competitiveness</h3>
              <p className="text-gray-700 text-sm font-quicksand">Schools with STEM-trained educators prepare students for global opportunities.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-fredoka">Student Engagement</h3>
              <p className="text-gray-700 text-sm font-quicksand">Hands-on, project-based lessons make learning fun, meaningful, and future-oriented.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose STEMOrbit */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-fredoka">
              🎓 Why Choose STEMOrbit
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">India's Trusted Name</h3>
              <p className="text-gray-700 font-quicksand">India's trusted name in STEM & Robotics Education</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Expert-Crafted Courses</h3>
              <p className="text-gray-700 font-quicksand">Courses crafted by industry experts & experienced educators</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Flexible Learning</h3>
              <p className="text-gray-700 font-quicksand">Flexible, self-paced learning modules with lifetime access</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Implementation Support</h3>
              <p className="text-gray-700 font-quicksand">Real-world classroom implementation support</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-fredoka">Recognized Certification</h3>
              <p className="text-gray-700 font-quicksand">Certification recognized by leading institutions and STEM education networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-fredoka">
              📝 Apply for STEM Educator Training Program
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-quicksand leading-relaxed">
              Ready to transform your teaching career? Fill out the application form below and take the first step towards becoming a Certified STEM Educator.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8 sm:p-12 shadow-2xl">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-100 border border-green-400 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 font-fredoka">Application Submitted Successfully!</h3>
                    <p className="text-green-700 font-quicksand">Thank you for your interest. We'll review your application and contact you within 3-5 business days.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-100 border border-red-400 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 font-fredoka">Submission Failed</h3>
                    <p className="text-red-700 font-quicksand">There was an error submitting your application. Please try again.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <label htmlFor="currentRole" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                  Current Role/Position *
                </label>
                <input
                  type="text"
                  id="currentRole"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand"
                  placeholder="e.g., Science Teacher, Math Teacher, Principal, etc."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="schoolName" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                    School/Institution Name *
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand"
                    placeholder="Your school or institution name"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                    Years of Teaching Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-15">11-15 years</option>
                    <option value="16+">16+ years</option>
                  </select>
                </div>
              </div>

              {/* Educational Background */}
              <div>
                <label htmlFor="qualification" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                  Educational Qualification *
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand"
                >
                  <option value="">Select qualification</option>
                  <option value="B.Ed">B.Ed</option>
                  <option value="M.Ed">M.Ed</option>
                  <option value="B.Sc + B.Ed">B.Sc + B.Ed</option>
                  <option value="M.Sc + B.Ed">M.Sc + B.Ed</option>
                  <option value="Ph.D">Ph.D</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* STEM Interest */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4 font-fredoka">
                  Which STEM subjects interest you most? (Select all that apply) *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" name="stemSubjects" value="Science" checked={formData.stemSubjects.includes('Science')} onChange={handleInputChange} className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Science</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" name="stemSubjects" value="Technology" checked={formData.stemSubjects.includes('Technology')} onChange={handleInputChange} className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Technology</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" name="stemSubjects" value="Engineering" checked={formData.stemSubjects.includes('Engineering')} onChange={handleInputChange} className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Engineering</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" name="stemSubjects" value="Mathematics" checked={formData.stemSubjects.includes('Mathematics')} onChange={handleInputChange} className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Mathematics</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" name="stemSubjects" value="Robotics" checked={formData.stemSubjects.includes('Robotics')} onChange={handleInputChange} className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Robotics</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" name="stemSubjects" value="Coding" checked={formData.stemSubjects.includes('Coding')} onChange={handleInputChange} className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Coding</span>
                  </label>
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                  Why do you want to become a STEM Educator? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand resize-none"
                  placeholder="Tell us about your passion for STEM education and how you plan to inspire students..."
                ></textarea>
              </div>

              {/* Goals */}
              <div>
                <label htmlFor="goals" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                  What are your goals after completing this training? *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand resize-none"
                  placeholder="Describe how you plan to implement STEM education in your classroom..."
                ></textarea>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4 font-fredoka">
                  When would you prefer to start the training? *
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="startTime" value="immediately" checked={formData.startTime === 'immediately'} onChange={handleInputChange} className="w-5 h-5 text-pink-500 focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Immediately</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="startTime" value="next-month" checked={formData.startTime === 'next-month'} onChange={handleInputChange} className="w-5 h-5 text-pink-500 focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Next Month</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="startTime" value="flexible" checked={formData.startTime === 'flexible'} onChange={handleInputChange} className="w-5 h-5 text-pink-500 focus:ring-pink-500" />
                    <span className="text-gray-700 font-quicksand">Flexible</span>
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2 font-fredoka">
                  Any additional information you'd like to share?
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 font-quicksand resize-none"
                  placeholder="Any questions, special requirements, or additional details..."
                ></textarea>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500 mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 font-quicksand">
                  I agree to the <Link href="/terms-and-conditions" className="text-pink-500 hover:underline">Terms and Conditions</Link> and <Link href="/privacy-policy" className="text-pink-500 hover:underline">Privacy Policy</Link>. I understand that this application will be reviewed and I will be contacted within 3-5 business days. *
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-xl rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-fredoka disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                <p className="text-sm text-gray-600 mt-4 font-quicksand">
                  * Required fields
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-pink-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-fredoka">
            🌱 Be the Change in Your Classroom
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto font-quicksand leading-relaxed">
            Join STEMOrbit's Certified STEM Teacher Training Program and become a pioneer in transforming how education is delivered.
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto font-quicksand">
            Empower yourself to teach, inspire, and innovate — because the future starts in your classroom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-pink-500 font-semibold text-xl rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-fredoka">
              👉 Enroll Today
            </button>
            <Link href="/contact">
              <button className="px-10 py-4 border-2 border-white text-white font-semibold text-xl rounded-full hover:bg-white hover:text-pink-500 transition-all duration-300 font-fredoka">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
