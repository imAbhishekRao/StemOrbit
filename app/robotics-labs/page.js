"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

function useSectionAnimation(ref, animationFn, deps = []) {
  useEffect(() => {
    if (!ref.current) return;
    let triggered = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          animationFn();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, deps); // eslint-disable-line
}

export default function RoboticsLabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { name: "Primary", level: "Grades 3-5" },
    { name: "Middle School", level: "Grades 6-8" },
    { name: "High School", level: "Grades 9-12" }
  ];

  const programs = [
    {
      title: "Foundations of Robotics",
      description: "Introduce young learners to robotics with age-appropriate kits and activities that align with primary school STEM curriculum.",
      skills: ["Basic Engineering", "Teamwork", "Creative Problem Solving"],
      duration: "Semester or Year-long",
      projects: ["Simple Moving Robots", "Classroom Challenges", "Interactive STEM Games"]
    },
    {
      title: "Applied Robotics & Coding",
      description: "Engage middle school students with hands-on robotics projects, coding, and real-world problem solving, fully integrated with science and math lessons.",
      skills: ["Block & Text Coding", "Sensor Integration", "Project-Based Learning"],
      duration: "Semester or Year-long",
      projects: ["Maze Solvers", "Smart Classroom Devices", "Eco-Robots"]
    },
    {
      title: "Advanced Robotics & Innovation",
      description: "Empower high school students to design, build, and program advanced robots, preparing them for competitions and future STEM careers.",
      skills: ["Python & C++", "AI & Automation", "Engineering Design"],
      duration: "Semester or Year-long",
      projects: ["Autonomous Vehicles", "Robotics Competitions", "AI-Driven Projects"]
    }
  ];

  const features = [
    {
      icon: "🏫",
      title: "Custom School Solutions",
      description: "We design and install robotics labs tailored to your school's needs and curriculum."
    },
    {
      icon: "📚",
      title: "Curriculum Integration",
      description: "Seamlessly align robotics activities with national and international STEM standards."
    },
    {
      icon: "👩‍🏫",
      title: "Teacher Training & Support",
      description: "Comprehensive training and ongoing support for educators to confidently run robotics labs."
    },
    {
      icon: "🎓",
      title: "Student Engagement",
      description: "Boost student interest and achievement in STEM through hands-on, collaborative learning."
    }
  ];

  const testimonials = [
    {
      name: "Mrs. Linda Evans",
      role: "STEM Coordinator, Greenfield Primary",
      quote: "Our new robotics lab transformed the way our students learn science and math. The hands-on approach keeps them engaged and excited!",
      project: "Primary Robotics Program"
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Principal, Sunrise High School",
      quote: "Partnering with STEMOrbit made it easy to bring advanced robotics to our school. Their teacher training and curriculum support are outstanding.",
      project: "High School Robotics & AI Lab"
    },
    {
      name: "Ms. Fatima Noor",
      role: "Science Teacher, Harmony Middle School",
      quote: "The integration with our existing curriculum was seamless. Students are now more interested in STEM than ever before!",
      project: "Middle School Robotics Integration"
    }
  ];

  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const stepsSectionRef = useRef(null);
  const stepCardRefs = useRef([]);
  const imageRef = useRef(null);
  const programsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  const galleryRef = useRef(null);

  // Hero animation
  useSectionAnimation(heroRef, () => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // Features animation
  useSectionAnimation(featuresRef, () => {
    gsap.fromTo(
      featuresRef.current.querySelectorAll(".feature-card"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // 3 Steps animation
  useSectionAnimation(stepsSectionRef, () => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(
      stepCardRefs.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2, delay: 0.4 }
    );
    // Start ambient zoom animation for the image
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1
    });
  }, []);

  // Gallery animation
  useSectionAnimation(galleryRef, () => {
    gsap.fromTo(
      galleryRef.current.querySelectorAll(".gallery-image"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  // Programs animation
  useSectionAnimation(programsRef, () => {
    gsap.fromTo(
      programsRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // Testimonials animation
  useSectionAnimation(testimonialsRef, () => {
    gsap.fromTo(
      testimonialsRef.current.querySelectorAll(".testimonial-card"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  // CTA animation
  useSectionAnimation(ctaRef, () => {
    gsap.fromTo(
      ctaRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 text-left">
              <h1 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Robotics Labs for Schools
                </span>
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-600 max-w-2xl mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Empower your students with hands-on robotics labs designed for schools. We partner with educators to create inspiring STEM environments that fit your curriculum and goals.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Request a School Demo
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg">
                  Download Brochure
                </button>
              </div>
            </div>
            
            {/* Right: Robot Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Floating geometric shapes */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
                
                {/* Rotating rings */}
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-4 border-4 border-purple-200 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                
                {/* Main robot container */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full animate-pulse"></div>
                <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-8xl lg:text-9xl animate-bounce">🤖</div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-2 left-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
                <div className="absolute left-2 top-1/2 w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
                <div className="absolute right-2 top-1/2 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1.6s'}}></div>
                
                {/* Circuit-like lines */}
                <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent to-purple-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute left-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent to-green-400 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover-lift">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Schools Equipped</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover-lift">
              <div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-sm text-gray-600">Students Impacted</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover-lift">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Teacher Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover-lift">
              <div className="text-3xl font-bold text-orange-600 mb-2">A+</div>
              <div className="text-sm text-gray-600">Curriculum Alignment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-0 bg-white" ref={featuresRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Schools Choose Our Robotics Labs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end solutions for schools, from lab design and installation to curriculum integration and teacher training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-soft hover-lift transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robotics Labs in 3 Steps Section */}
      <section
        className="py-20 bg-white"
        ref={stepsSectionRef}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              ref={imageRef}
              src="https://le-de.cdn-website.com/e7b0049b067743ffac62f0146ea3f8b4/dms3rep/multi/opt/mechatronlab-1920w.png"
              alt="Robotics Lab"
              className="w-[350px] md:w-[500px] h-auto rounded-2xl"
            />
          </div>
          {/* Right: Steps */}
          <div className="flex-1">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mr-4">
                Robotics Labs in Just<br />
                <span className="text-blue-500">3 Steps</span>
              </h2>
              <img
                src="https://cdn.prod.website-files.com/674331935927a125f5e36166/6744681a6bfc200427ec60a7_Arrow%20elips.svg"
                alt="Arrow"
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
            <div className="space-y-6">
              {/* Step 1 */}
              <div
                className="flex items-center bg-sky-100 rounded-xl shadow-md p-5 gap-4"
                ref={el => (stepCardRefs.current[0] = el)}
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white">
                  <img src="https://img.icons8.com/ios-filled/40/edit-property.png" alt="Fill up the form" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">Request a Robotics Lab</div>
                  <div className="text-gray-600 text-sm">Submit your school details to start your robotics lab journey.</div>
                </div>
              </div>
              {/* Step 2 */}
              <div
                className="flex items-center bg-pink-100 rounded-xl shadow-md p-5 gap-4"
                ref={el => (stepCardRefs.current[1] = el)}
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white">
                  <img src="https://img.icons8.com/ios-filled/40/phone-office.png" alt="Our Team will contact you" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">Consultation & Planning</div>
                  <div className="text-gray-600 text-sm">Our team will connect with you to discuss your needs and design the perfect robotics lab for your school.</div>
                </div>
              </div>
              {/* Step 3 */}
              <div
                className="flex items-center bg-purple-100 rounded-xl shadow-md p-5 gap-4"
                ref={el => (stepCardRefs.current[2] = el)}
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white">
                  <img src="https://img.icons8.com/ios-filled/40/robot-2.png" alt="Robot Lab Ready" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-1">Launch Your Robotics Lab</div>
                  <div className="text-gray-600 text-sm">Get started with your fully equipped robotics lab and inspire your students!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Robotics Lab Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" ref={galleryRef}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">Our Robotics Lab Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Gallery Images */}
            {[
              "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
            ].map((src, idx) => (
              <div key={idx} className="gallery-image overflow-hidden rounded-2xl group">
                <img
                  src={src}
                  alt={`Robotics Lab Gallery ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-gray-50 to-blue-50" ref={programsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              School Robotics Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our programs are tailored for each school level and fully support your teaching goals.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-soft'
                }`}
              >
                <div className="text-lg">{tab.name}</div>
                <div className="text-sm opacity-80">{tab.level}</div>
              </button>
            ))}
          </div>

          {/* Program Content */}
          <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {programs[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {programs[activeTab].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {programs[activeTab].skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Sample Projects:</h4>
                  <ul className="space-y-2">
                    {programs[activeTab].projects.map((project, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Duration: <span className="font-semibold text-gray-900">{programs[activeTab].duration}</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Request Info
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏫</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {tabs[activeTab].name} Program
                  </h4>
                  <p className="text-gray-600 mb-4">
                    For {tabs[activeTab].level}
                  </p>
                  <div className="text-sm text-gray-500">
                    Bring robotics to your classroom!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-0 bg-white" ref={testimonialsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              School Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our robotics labs are making a difference in schools just like yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-soft hover-lift">
                <div className="text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-purple-600" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your School with Robotics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to schedule a demo, request a proposal, or learn how we can help your school lead in STEM education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Request a School Demo
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 