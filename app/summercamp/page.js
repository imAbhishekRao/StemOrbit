"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { handleBookCallClick } from '../../lib/calendly';

export default function SummerCampPage() {
  const [selectedProgram, setSelectedProgram] = useState('robotics');
  const [storyVisible, setStoryVisible] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const storyRef = useRef(null);

  const storyPoints = [
    'Arjun is a bright 10-year-old who loves asking "Why?" — Why does the fan spin? Why does the rainbow have seven colors? Why can\'t a toy car run without batteries?',
    'At home, his parents smile at his questions, sometimes without knowing how to answer them. In school, he memorizes textbook answers — but that spark of "How does this really work?" starts to fade.',
    'One summer, his parents enrolled him in a STEMOrbit Camp — just to try something new. On the very first day, Arjun built a mini windmill that lit up an LED bulb. His eyes lit up brighter than the bulb.',
    'Suddenly, “Why?” turned into “What if I could make it better?”',
    'That\'s the power of STEM. It doesn\'t just teach science — it teaches kids to think, create, and explore. It transforms passive learners into curious innovators.',
    'In a world where technology is everywhere, our children need more than grades — they need imagination, problem-solving, and the courage to build what they dream. That\'s what STEMOrbit stands for — turning curiosity into creation, and learners into leaders.'
  ];

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!storyRef.current || typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStoryVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(storyRef.current);
    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      id: 'robotics',
      title: 'Robotics & AI Adventure',
      ageGroup: 'Ages 8-16',
      duration: '2 weeks',
      price: '₹8,999',
      description: 'Build, program, and battle robots while learning artificial intelligence concepts',
      features: [
        'Hands-on robot building',
        'Programming with Arduino',
        'AI and machine learning basics',
        'Robot battles and competitions',
        'Take-home robot kit',
        'Certificate of completion'
      ],
      schedule: 'Monday-Friday, 9:00 AM - 4:00 PM',
      capacity: '20 students',
      icon: '🤖',
      color: 'blue'
    },
    {
      id: '3d-printing',
      title: '3D Design & Printing Workshop',
      ageGroup: 'Ages 10-18',
      duration: '2 weeks',
      price: '₹7,999',
      description: 'Master 3D modeling, design thinking, and bring your creations to life',
      features: [
        '3D modeling with Tinkercad',
        'CAD design principles',
        '3D printer operation',
        'Prototype development',
        'Design thinking process',
        'Personal 3D printed projects'
      ],
      schedule: 'Monday-Friday, 9:00 AM - 4:00 PM',
      capacity: '15 students',
      icon: '🔧',
      color: 'green'
    },
    {
      id: 'coding',
      title: 'Coding & Game Development',
      ageGroup: 'Ages 12-18',
      duration: '2 weeks',
      price: '₹6,999',
      description: 'Learn programming fundamentals and create your own games and apps',
      features: [
        'Python programming basics',
        'Game development with Scratch',
        'Web development fundamentals',
        'Mobile app creation',
        'Coding challenges and projects',
        'Portfolio development'
      ],
      schedule: 'Monday-Friday, 9:00 AM - 4:00 PM',
      capacity: '25 students',
      icon: '💻',
      color: 'purple'
    },
    {
      id: 'science',
      title: 'Science & Engineering Lab',
      ageGroup: 'Ages 8-14',
      duration: '2 weeks',
      price: '₹5,999',
      description: 'Explore physics, chemistry, and engineering through exciting experiments',
      features: [
        'Physics experiments and projects',
        'Chemistry lab activities',
        'Engineering challenges',
        'Science fair preparation',
        'Take-home experiment kits',
        'Scientific method training'
      ],
      schedule: 'Monday-Friday, 9:00 AM - 4:00 PM',
      capacity: '20 students',
      icon: '🧪',
      color: 'yellow'
    }
  ];

  const activities = [
    {
      time: '9:00 AM - 10:30 AM',
      activity: 'Morning Session',
      description: 'Core learning activities and hands-on projects'
    },
    {
      time: '10:30 AM - 10:45 AM',
      activity: 'Break',
      description: 'Snacks and refreshments'
    },
    {
      time: '10:45 AM - 12:15 PM',
      activity: 'Project Work',
      description: 'Individual and team project development'
    },
    {
      time: '12:15 PM - 1:00 PM',
      activity: 'Lunch',
      description: 'Healthy lunch provided'
    },
    {
      time: '1:00 PM - 2:30 PM',
      activity: 'Afternoon Session',
      description: 'Advanced concepts and practical applications'
    },
    {
      time: '2:30 PM - 2:45 PM',
      activity: 'Break',
      description: 'Outdoor activities and games'
    },
    {
      time: '2:45 PM - 4:00 PM',
      activity: 'Showcase & Wrap-up',
      description: 'Project presentations and daily reflections'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      age: 14,
      program: 'Robotics & AI Adventure',
      quote: 'The robotics camp was amazing! I built my first robot and learned so much about programming. The instructors were really helpful and made everything fun.',
      rating: 5
    },
    {
      name: 'Arjun Singh',
      age: 12,
      program: '3D Design & Printing',
      quote: 'I loved designing and printing my own creations. Now I want to be a 3D designer when I grow up!',
      rating: 5
    },
    {
      name: 'Sneha Patel',
      age: 16,
      program: 'Coding & Game Development',
      quote: 'The coding camp helped me understand programming concepts I never knew before. I created my first game!',
      rating: 5
    }
  ];

  const colorClasses = {
    blue:   { bg: 'from-blue-200 to-indigo-300',     text: 'text-blue-900',   border: 'border-blue-300',   button: 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' },
    green:  { bg: 'from-emerald-200 to-green-300',   text: 'text-emerald-900',border: 'border-emerald-300',button: 'from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700' },
    purple: { bg: 'from-violet-200 to-purple-300',   text: 'text-violet-900', border: 'border-violet-300', button: 'from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700' },
    yellow: { bg: 'from-amber-200 to-orange-300',    text: 'text-amber-900',  border: 'border-amber-300',  button: 'from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700' }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes wiggle {
          0%, 7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%, 100% {
            transform: rotateZ(0);
          }
        }
        
        @keyframes ambientMove {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(20px) translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateX(-10px) translateY(15px) rotate(180deg);
          }
          75% {
            transform: translateX(15px) translateY(-5px) rotate(270deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(360deg);
          }
        }
        
        @keyframes slowFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(5px) translateX(-8px);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }
        
        .animate-wiggle:hover {
          animation: wiggle 1s ease-in-out;
        }
        
        .animate-ambient {
          animation: ambientMove 8s ease-in-out infinite;
        }
        
        .animate-slow-float {
          animation: slowFloat 6s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50 text-lg md:text-xl">
      {/* Hero Section */}
      <section className="text-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 bg-[url('/stemcampbanner.png')] bg-cover bg-center transition-all duration-1000 ${
              heroReady ? 'scale-100 blur-sm' : 'scale-110 blur-0'
            }`}
          />
        </div>
        {/* Animated Background Elements */}
        <div
          className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-700 ${
            heroReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-ambient" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-slow-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300/20 rounded-full animate-ambient" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-purple-300/20 rounded-full animate-slow-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 bg-orange-300/30 rounded-full animate-ambient" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 right-10 w-14 h-14 bg-cyan-300/20 rounded-full animate-slow-float" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 transition-opacity duration-700 ${
            heroReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative max-w-4xl mx-auto text-center text-white">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-48 bg-white/30 blur-3xl rounded-full pointer-events-none"></div>
            <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/40 to-amber-700/40 border border-white/20 rounded-3xl px-6 py-10 sm:px-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-fredoka animate-fade-in-up text-amber-200 drop-shadow-lg">
                STEM Camps
              </h1>
              <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow">
                  From Why to How — the journey begins with STEMOrbit
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  When a child asks "Why does this happen?" — that's the beginning of innovation. We nurture that spark through hands-on STEM learning, where kids build, experiment, and discover how things work.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <button
                  onClick={handleBookCallClick}
                  className="bg-gradient-to-r from-amber-300 to-amber-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:from-amber-200 hover:to-amber-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 animate-pulse hover:animate-none"
                >
                  Register Now
                </button>
                <a
                  href="/stem_brochure.pdf"
                  download
                  className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 inline-block text-center hover:scale-105 transform bg-white/10 backdrop-blur"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why to How - Storytelling Section */}
      <section ref={storyRef} className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        {/* Soft decorative shapes */}
        <div className="absolute -top-10 -left-10 w-56 h-56 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl animate-bounce">🌟</span>
              <h3 className="text-xl font-bold text-gray-900">A Story Every Parent Can Relate To</h3>
            </div>
          </div>
          <div className="space-y-8">
                {storyPoints.map((text, idx) => {
                  const visible = storyVisible;
                 const isQuestion = idx % 2 === 0;
                 const sideClass = isQuestion ? '-translate-x-12' : 'translate-x-12';
                 // First two keep child/parent, then use provided point images in order
                 const storyImages = ['/child.svg', '/childandparent.svg', '/point3.svg', '/point4.png', '/point5.svg', '/lastpoint.svg'];
                 const avatarSrc = storyImages[idx % storyImages.length];
                  const bgClasses = [
                    'from-rose-50 to-pink-100 border-pink-200',
                    'from-amber-50 to-orange-100 border-amber-200',
                    'from-indigo-50 to-blue-100 border-indigo-200',
                    'from-violet-50 to-purple-100 border-purple-200 italic',
                    'from-emerald-50 to-green-100 border-emerald-200',
                    'from-fuchsia-50 to-pink-100 border-fuchsia-200 font-medium'
                  ];
                  const bgTone = `bg-gradient-to-r ${bgClasses[idx % bgClasses.length]}`;
                  const textColorClasses = [
                    'text-pink-900',
                    'text-amber-900',
                    'text-indigo-900',
                    'text-purple-900',
                    'text-emerald-900',
                    'text-fuchsia-900'
                  ];
                  const textTone = textColorClasses[idx % textColorClasses.length];
                  
                  return (
                    <div key={idx} className={`flex ${isQuestion ? 'flex-row' : 'flex-row-reverse'} items-center gap-6 mx-6`}>
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <img 
                          src={avatarSrc} 
                          alt={isQuestion ? 'Child asking question' : 'Child with parent answering'} 
                          className="w-60 h-60 md:w-72 md:h-72 opacity-95 transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}"
                          style={{ transitionDelay: `${idx * 350}ms` }}
                        />
                      </div>

                      {/* Text content */}
                      <div className="flex-1">
                        <div
                          className={`relative ring-1 rounded-xl p-4 md:p-5 w-full backdrop-blur-sm transition-all duration-1000 ease-out will-change-transform will-change-opacity ${bgTone}
                          ${visible ? 'opacity-100 translate-x-0 scale-100 shadow-lg' : `opacity-0 ${sideClass} scale-95 shadow-none`}`}
                          style={{ transitionDelay: `${idx * 350}ms` }}
                        >
                          <p className={`text-base md:text-lg leading-relaxed m-0 ${textTone}`}>{text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg">
                Start Your Child's Journey
              </button>
            </Link>
          </div>

          {/* Full-width Quote Panel (below story) */}
          
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka animate-fade-in-up">
              Choose Your <span className="text-orange-600 animate-pulse">Adventure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Select from our exciting range of STEM programs designed for different age groups and interests
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => {
              const color = colorClasses[program.color];
              return (
                <div 
                  key={program.id}
                  className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer hover:animate-wiggle ${
                    selectedProgram === program.id ? 'ring-4 ring-purple-500 animate-float' : ''
                  }`}
                  onClick={() => setSelectedProgram(program.id)}
                >
                  <div className={`bg-gradient-to-br ${color.bg} p-6 text-center border-b ${color.border}`}>
                    {program.id === '3d-printing' ? (
                      <div className="mb-4 flex items-center justify-center animate-bounce">
                        <img src="/3-dprinter.svg" alt="3D Printing" className="w-14 h-14" />
                      </div>
                    ) : (
                      <div className="text-5xl mb-4 animate-bounce">{program.icon}</div>
                    )}
                    <h3 className={`text-xl font-bold mb-2 ${color.text}`}>{program.title}</h3>
                    <div className={`text-sm mb-4 ${color.text.replace('900','700')}`}>{program.ageGroup}</div>
                    <div className="text-2xl font-bold text-purple-700 mb-2">{program.price}</div>
                    <div className="text-sm text-gray-700">{program.duration}</div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 text-base">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-base">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      <li className="text-base text-gray-500">+{program.features.length - 3} more features</li>
                    </ul>
                    <div className="space-y-2 text-base text-gray-700 mb-4">
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold text-purple-700">{program.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacity:</span>
                        <span className="font-semibold text-purple-700">{program.capacity}</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/917009594410?text=${encodeURIComponent(`Hi! I'm interested in the ${program.title} program for my child. Could you please provide more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${color.button} text-white py-3 rounded-lg font-semibold transition-all duration-300 block text-center`}
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              What <span className="text-pink-600">Students</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our campers about their amazing summer experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Age {testimonial.age} • {testimonial.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Summer Robo Camp Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              <span className="text-orange-600">OFFLINE</span> STEM <span className="text-blue-600">Camps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              20 hours of Practical Live & Interactive sessions by an International Robotics expert
            </p>
          </div>

          {/* Skills Acquired Section - Full Width Top */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Skills Acquired</h3>
              <p className="text-gray-600 text-sm mb-6">Master essential robotics and programming skills through hands-on learning</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { skill: 'Programming in Python and C++', icon: '💻', color: 'from-blue-500 to-indigo-600', desc: 'Learn industry-standard programming languages' },
                { skill: 'Electronics', icon: '⚡', color: 'from-yellow-500 to-orange-600', desc: 'Understand circuits and electronic components' },
                { skill: 'Hardware', icon: '🔧', color: 'from-gray-500 to-gray-700', desc: 'Build and assemble robotic systems' },
                { skill: 'Arduino Controller', icon: '🎛️', color: 'from-green-500 to-emerald-600', desc: 'Program microcontrollers for automation' },
                { skill: 'Raspberry Pi Controller', icon: '🍓', color: 'from-red-500 to-pink-600', desc: 'Advanced computing and IoT applications' },
                { skill: 'Sensors and Motors', icon: '🔍', color: 'from-purple-500 to-violet-600', desc: 'Interface sensors and control motor systems' }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <span className="font-semibold text-gray-800 text-base md:text-base">{item.skill}</span>
                  </div>
                  <p className="text-gray-600 text-base md:text-base ml-13">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
              <h4 className="font-bold text-gray-800 text-sm mb-2 text-center">🎯 Learning Approach</h4>
              <p className="text-gray-600 text-xs text-center">Project-based learning with real-world applications and industry-relevant challenges</p>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About Curriculum */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                About the Curriculum
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Aligned with International Standards</p>
                    <p className="text-gray-600 text-sm mt-1">Following IEEE and ACM guidelines for robotics education</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Starts from LED Blink to develop different robots</p>
                    <p className="text-gray-600 text-sm mt-1">Progressive learning from basic to advanced robotics</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">HRDF Malaysia and MOE Singapore approved courses</p>
                    <p className="text-gray-600 text-sm mt-1">Government recognized and certified programs</p>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-60 rounded-xl p-3 mt-3">
                  <p className="text-sm text-gray-600 text-center">
                    <span className="font-bold text-blue-600">25,000+</span> students and <span className="font-bold text-blue-600">75+</span> institutions globally in the last 5 years
                  </p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <h4 className="font-bold text-gray-800 text-sm mb-1">🏆 Certification</h4>
                <p className="text-gray-600 text-xs">Industry-recognized certificates upon successful completion of the program</p>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                Learning Outcomes
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Hands-on Industry relevant topics</p>
                    <p className="text-gray-600 text-sm mt-1">Real-world projects and industry case studies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Clear understanding of Robotics, building Robots, Coding, Sensors and motors</p>
                    <p className="text-gray-600 text-sm mt-1">Comprehensive knowledge of all robotics components</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">After the course students will be able to independently develop robots on their own</p>
                    <p className="text-gray-600 text-sm mt-1">Build complete robotic systems from scratch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-base">Problem-solving and critical thinking skills</p>
                    <p className="text-gray-600 text-sm mt-1">Develop analytical and troubleshooting abilities</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h4 className="font-bold text-gray-800 text-sm mb-1">🚀 Career Readiness</h4>
                <p className="text-gray-600 text-xs">Prepare for careers in robotics, automation, and engineering fields</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What Your Kid Will Receive & Build Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              What Your Kid Will <span className="text-orange-600">Receive</span> & <span className="text-purple-600">Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your child needs to succeed in our STEM programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What Your Kid Will Receive */}
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-fredoka">
                What Your Kid Will <span className="text-orange-600">Receive</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'PREMIUM ROBOTIC KIT',
                    description: 'Robotic kit sent within 24 Hours',
                    icon: '📦',
                    color: 'from-orange-500 to-pink-500'
                  },
                  {
                    title: '1:1 ONLINE LIVE CLASS',
                    description: '1-1 live online sessions with the educator for your kid',
                    icon: '💻',
                    color: 'from-blue-500 to-indigo-500'
                  },
                  {
                    title: 'SMART CERTIFICATE',
                    description: 'Showcase your kid\'s skills to the world',
                    icon: '🏆',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    title: 'PERSONALIZED CLASSES',
                    description: 'Help your kid learn directly from experts & build projects from anywhere',
                    icon: '👨‍🏫',
                    color: 'from-green-500 to-emerald-500'
                  }
                ].map((item, index) => {
                  const cardColors = [
                    'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200',
                    'bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200',
                    'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200',
                    'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200'
                  ];
                  return (
                    <div key={index} className={`flex items-start gap-4 p-4 ${cardColors[index]} rounded-xl hover:shadow-md transition-all duration-300 border`}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-base">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What Your Kid Will Build */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-fredoka">
                What Your Kid Will <span className="text-purple-600">Build</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'ROBOTICS PROJECTS',
                    description: 'Help your kid build cool projects in a super easy way',
                    icon: '🤖',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    title: 'ANALYTICAL THINKING',
                    description: 'Help your kid develop analytical skills and logical thinking',
                    icon: '🧠',
                    color: 'from-purple-500 to-violet-500'
                  },
                  {
                    title: 'CREATIVITY AND PROBLEM SOLVING',
                    description: 'Ability to identify and solve problems',
                    icon: '💡',
                    color: 'from-yellow-500 to-orange-500'
                  },
                  {
                    title: 'CONFIDENCE',
                    description: 'Your kids will develop confidence and dream big',
                    icon: '⭐',
                    color: 'from-pink-500 to-rose-500'
                  }
                ].map((item, index) => {
                  const cardColors = [
                    'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200',
                    'bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200',
                    'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200',
                    'bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200'
                  ];
                  return (
                    <div key={index} className={`flex items-start gap-4 p-4 ${cardColors[index]} rounded-xl hover:shadow-md transition-all duration-300 border`}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-base">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              <span className="text-blue-600">Gallery</span> of <span className="text-purple-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the amazing projects and creations from our STEM camp participants
            </p>
          </div>

          {/* Infinite Scroll Gallery */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of images */}
              <div className="flex gap-4 mr-4">
                {[
                  '/stemcapsnew (1).jpg',
                  '/stemcapsnew (2).jpg',
                  '/stemcapsnew (3).jpg',
                  '/stemcapsnew (4).jpg',
                  '/stemcapsnew (5).jpg',
                  '/stemcapsnew (6).jpg',
                  '/stemcapsnew (7).jpg',
                  '/stemcapsnew (8).jpg',
                  '/stemcapsnew (9).jpg',
                  '/stemcapsnew (10).jpg',
                  '/stemcapsnew (11).jpg',
                  '/stemcapsnew (12).jpg',
                  '/stemcapsnew (13).jpg',
                  '/stemcapsnew (14).jpg',
                  '/stemcapsnew (15).jpg',
                  '/stemcapsnew (16).jpg',
                  '/stemcapsnew (17).jpg',
                  '/stemcapsnew (18).jpg',
                  '/stemcapsnew (19).jpg',
                  '/stemcapsnew (20).jpg',
                  '/stemcapsnew (21).jpg',
                  '/stemcapsnew (22).jpg',
                  '/stemcapsnew (23).jpg',
                  '/stemcapsnew (24).jpg',
                  '/stemcapsnew (25).jpg',
                  '/stemcapsnew (26).jpg',
                  '/stemcapsnew (27).jpg',
                  '/stemcapsnew (28).jpg',
                  '/stemcapsnew (29).jpg',
                  '/stemcapsnew (30).jpg',
                  '/stemcapsnew (31).jpg',
                  '/stemcapsnew (32).jpg',
                  '/stemcapsnew (33).jpg',
                  '/stemcapsnew (34).jpg',
                  '/stemcapsnew (35).jpg',
                  '/stemcapsnew (36).jpg',
                  '/stemcapsnew (37).jpg',
                  '/stemcapsnew (38).jpg',
                  '/stemcapsnew (39).jpg',
                  '/stemcapsnew (40).jpg',
                  '/stemcapsnew (41).jpg',
                  '/stemcapsnew (42).jpg',
                  '/stemcapsnew (43).jpg',
                  '/stemcapsnew (44).jpg',
                  '/stemcapsnew (45).jpg',
                  '/stemcapsnew (46).jpg',
                  '/stemcapsnew (47).jpg',
                  '/stemcapsnew (48).jpg'
                ].map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-4 mr-4">
                {[
                  '/stemcapsnew (1).jpg',
                  '/stemcapsnew (2).jpg',
                  '/stemcapsnew (3).jpg',
                  '/stemcapsnew (4).jpg',
                  '/stemcapsnew (5).jpg',
                  '/stemcapsnew (6).jpg',
                  '/stemcapsnew (7).jpg',
                  '/stemcapsnew (8).jpg',
                  '/stemcapsnew (9).jpg',
                  '/stemcapsnew (10).jpg',
                  '/stemcapsnew (11).jpg',
                  '/stemcapsnew (12).jpg',
                  '/stemcapsnew (13).jpg',
                  '/stemcapsnew (14).jpg',
                  '/stemcapsnew (15).jpg',
                  '/stemcapsnew (16).jpg',
                  '/stemcapsnew (17).jpg',
                  '/stemcapsnew (18).jpg',
                  '/stemcapsnew (19).jpg',
                  '/stemcapsnew (20).jpg',
                  '/stemcapsnew (21).jpg',
                  '/stemcapsnew (22).jpg',
                  '/stemcapsnew (23).jpg',
                  '/stemcapsnew (24).jpg',
                  '/stemcapsnew (25).jpg',
                  '/stemcapsnew (26).jpg',
                  '/stemcapsnew (27).jpg',
                  '/stemcapsnew (28).jpg',
                  '/stemcapsnew (29).jpg',
                  '/stemcapsnew (30).jpg',
                  '/stemcapsnew (31).jpg',
                  '/stemcapsnew (32).jpg',
                  '/stemcapsnew (33).jpg',
                  '/stemcapsnew (34).jpg',
                  '/stemcapsnew (35).jpg',
                  '/stemcapsnew (36).jpg',
                  '/stemcapsnew (37).jpg',
                  '/stemcapsnew (38).jpg',
                  '/stemcapsnew (39).jpg',
                  '/stemcapsnew (40).jpg',
                  '/stemcapsnew (41).jpg',
                  '/stemcapsnew (42).jpg',
                  '/stemcapsnew (43).jpg',
                  '/stemcapsnew (44).jpg',
                  '/stemcapsnew (45).jpg',
                  '/stemcapsnew (46).jpg',
                  '/stemcapsnew (47).jpg',
                  '/stemcapsnew (48).jpg'
                ].map((image, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-fredoka">
            Ready for an Amazing Summer?
          </h2>
          <p className="text-xl mb-8">
            Limited spots available! Register now to secure your child's place in our summer STEM camps.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Early Bird Special!</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">20% OFF</div>
                <div className="text-sm">Register before May 15th</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">Free Kit</div>
                <div className="text-sm">Take-home project materials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">Group Discount</div>
                <div className="text-sm">10% off for 3+ siblings</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
