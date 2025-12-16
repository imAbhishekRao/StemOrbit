"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { handleBookCallClick } from '../../lib/calendly';

export default function SummerCampPage() {
  const [selectedProgram, setSelectedProgram] = useState('robotics');
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 1200);
    return () => clearTimeout(timer);
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
    blue: {
      bg: 'from-blue-800/70 to-indigo-900/70',
      text: 'text-white',
      subtext: 'text-blue-100',
      border: 'border-blue-600/40',
      button: 'from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500'
    },
    green: {
      bg: 'from-emerald-800/70 to-green-900/70',
      text: 'text-white',
      subtext: 'text-emerald-100',
      border: 'border-emerald-600/40',
      button: 'from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500'
    },
    purple: {
      bg: 'from-violet-800/70 to-purple-900/70',
      text: 'text-white',
      subtext: 'text-purple-100',
      border: 'border-violet-600/40',
      button: 'from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500'
    },
    yellow: {
      bg: 'from-amber-700/70 to-orange-900/70',
      text: 'text-white',
      subtext: 'text-amber-100',
      border: 'border-amber-600/40',
      button: 'from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500'
    }
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
    <div className="min-h-screen bg-gradient-to-br from-[#0b1327] via-[#141b32] to-[#1f0f33] text-lg md:text-xl text-gray-100">
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

      {/* STEMCamps new content */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#111b3a] via-[#191f3f] to-[#2a1245] text-gray-100">
        <div className="absolute inset-x-0 bottom-[-8%] h-40 bg-gradient-to-r from-transparent via-pink-200/30 to-transparent rotate-[-2deg]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.2),_transparent_60%)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              <span className="text-sky-400">STEM Camp</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-200">
              <p className="text-sky-300 text-base tracking-[0.4em] uppercase">Where Curiosity Meets Innovation</p>
              <p className="text-gray-100">
                At STEMorbit, learning becomes an adventure! Our STEM Camps welcome students from Grade 1 to 12,
                offering hands-on projects that spark creativity, problem-solving, and a lifelong love for technology.
              </p>
              <p className="text-gray-100">
                Every day is packed with build-it-yourself challenges, collaborative missions, and guided exploration
                led by passionate trainers who turn curiosity into real-world innovation.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-lg rounded-[28px] border border-pink-200 bg-white p-3 shadow-[0_20px_50px_rgba(244,114,182,0.25)]">
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-r from-pink-200/50 to-purple-200/50 blur-3xl" />
              <div className="relative overflow-hidden rounded-[22px] border border-pink-100 bg-white">
                <Image
                  src="/stemcamps (1).jpg"
                  alt="STEMorbit students collaborating on a robotics build"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border border-sky-500/50 bg-[#0d0f16]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0d142b] via-[#151a34] to-[#1c254d] px-6 py-20 text-gray-100">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[32px] border-2 border-pink-400/50 bg-gradient-to-br from-slate-900/40 to-indigo-900/20 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/stemcamps (2).jpg"
              alt="Children working with robotics kits at camp"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
            </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-pink-200">What Happens in a STEMorbit Camp?</h3>
            <p className="text-lg text-gray-200">
              Kids build, code, experiment, and innovate with real STEM tools — guided step-by-step by expert trainers.
              Every activity is designed to transform imagination into tangible creations.
            </p>
            <ul className="grid gap-3 text-base text-gray-100">
              {[
                'Robotics & Automation',
                'Coding & Game Development',
                'Science Experiments & DIY Gadgets',
                'AI, Sensors, Drones & VR experience',
                'Art + Technology creativity projects',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#121a3d] via-[#0f152f] to-[#090f20] px-6 py-20 text-gray-100">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-pink-200">Winter &amp; Summer STEM Camps</h3>
            <p className="text-lg text-gray-200">
              School vacations become skill-building journeys at STEMorbit. Students dive into themed missions that
              strengthen confidence, teamwork, and analytical thinking while building something new every day.
            </p>
            <ul className="grid gap-3 text-base text-gray-100">
              {[
                'Engineering challenges & gadget making',
                'Drone & aerodynamics workshops',
                'Virtual reality adventures',
                'Electronics + craft integration',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[32px] border-2 border-pink-400/50 bg-gradient-to-br from-[#1b0f2b] to-[#2a1635] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
            <Image
              src="/stemcamps (3).jpg"
              alt="Student testing a drone prototype"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
                        />
                      </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0c1228] via-[#121939] to-[#1c2452] px-6 py-20 text-gray-100">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[32px] border-2 border-pink-400/50 bg-gradient-to-br from-[#1d132c] to-[#2b1840] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
            <Image
              src="/stemcamps (4).jpg"
              alt="After school innovation program in action"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
                        </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-pink-200">After-School Innovation Programs</h3>
            <p className="text-lg text-gray-200">
              Keep the excitement going all year! Our structured after-school pathway helps students go deeper with
              guided mentorship, graded projects, and turn-key trainer + equipment support for schools.
            </p>
            <ul className="grid gap-3 text-base text-gray-100">
              {['Robotics', 'Coding', 'Emerging Technologies'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-pink-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
                      </div>
                    </div>
      </section>

      <section className="bg-gradient-to-br from-[#101732] via-[#1a1d3d] to-[#2c1747] px-6 py-20 text-gray-100">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-300">Young Innovators</p>
            <h3 className="text-3xl font-bold text-pink-200">STEMorbit — Turning Your Ideas into Reality</h3>
            <p className="text-lg text-gray-200">
              Because the future belongs to creators, tinkerers, and builders. STEMorbit equips every child with the
              mindset and tools to imagine boldly and engineer the future.
            </p>
          </div>
          <div className="rounded-[32px] border-2 border-pink-400/50 bg-gradient-to-br from-[#1c132e] to-[#2d1a40] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
            <Image
              src="/stemcamps (5).jpg"
              alt="Student showcasing a finished STEM project"
              width={900}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate bg-gradient-to-br from-[#0b132a] via-[#131f3f] to-[#210f34] px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.3),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('/grid.svg')" , backgroundSize: '600px' }} />
        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-6 text-gray-100">
          <p className="text-sm uppercase tracking-[0.4em] text-pink-300">Ready to Begin?</p>
          <h3 className="text-4xl font-bold text-white md:text-5xl">Enroll Your Child in STEMOrbit Camps</h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Seats fill fast! Secure a spot in our high-energy, project-based camps and watch curiosity turn into confidence.
            Live mentorship, custom kits, and unforgettable STEM adventures await.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="https://wa.me/917009594410?text=Hi!%20I%20want%20to%20enroll%20my%20child%20in%20STEMOrbit%20Camp."
              className="rounded-full bg-pink-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-pink-400 shadow-lg"
            >
              Enroll Now
            </a>
            <a
              href="/contact"
              className="rounded-full border border-pink-300/70 px-8 py-3 text-lg font-semibold text-pink-200 transition hover:border-pink-200 hover:bg-white/10 shadow"
            >
              Book a Counseling Call
            </a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      {/* <section className="py-16 bg-gradient-to-br from-[#070f21] via-[#111b34] to-[#1d2a4f] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fredoka animate-fade-in-up">
              Choose Your <span className="text-orange-300 animate-pulse">Adventure</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Select from our exciting range of STEM programs designed for different age groups and interests
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => {
              const color = colorClasses[program.color];
              return (
                <div 
                  key={program.id}
                  className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer hover:animate-wiggle bg-white/10 border border-white/10 backdrop-blur-sm flex flex-col ${
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
                    <div className={`text-sm mb-4 ${color.subtext}`}>{program.ageGroup}</div>
                    <div className="text-2xl font-bold text-amber-200 mb-2">{program.price}</div>
                    <div className="text-sm text-gray-200">{program.duration}</div>
                  </div>
                  
                  <div className="p-6 text-gray-100 flex-1 flex flex-col">
                    <p className="text-gray-200 mb-4 text-base">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-base">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-100">{feature}</span>
                        </li>
                      ))}
                      <li className="text-base text-gray-300">+{program.features.length - 3} more features</li>
                    </ul>
                    <div className="space-y-2 text-base text-gray-200 mb-4">
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold text-sky-200">{program.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacity:</span>
                        <span className="font-semibold text-sky-200">{program.capacity}</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/917009594410?text=${encodeURIComponent(`Hi! I'm interested in the ${program.title} program for my child. Could you please provide more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto w-full bg-gradient-to-r ${color.button} text-white py-3 rounded-lg font-semibold transition-all duration-300 block text-center`}
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-[#111b36] to-[#0a1327] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fredoka">
              What <span className="text-pink-300">Students</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
      <section className="py-16 bg-gradient-to-br from-[#0a1328] via-[#141f39] to-[#1f2d54] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fredoka">
              <span className="text-orange-300">OFFLINE</span> STEM <span className="text-sky-300">Camps</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
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



        </div>
      </section>

      {/* What Your Kid Will Receive & Build Section */}
      <section className="py-16 bg-gradient-to-br from-[#0b1229] via-[#161d39] to-[#231746] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fredoka">
              What Your Kid Will <span className="text-orange-300">Receive</span> & <span className="text-purple-200">Build</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
      <section className="py-16 bg-gradient-to-br from-[#0a162f] to-[#121f43] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fredoka">
              <span className="text-blue-300">Gallery</span> of <span className="text-purple-300">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the amazing projects and creations from our STEM camp participants
            </p>
          </div>

          {/* Infinite Scroll Gallery */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of images */}
              <div className="flex gap-4 mr-4">
                {[
                  '/camps_(1).jpg',
                  '/camps_(2).jpg',
                  '/camps_(3).jpg',
                  '/camps_(4).jpg',
                  '/camps_(5).jpg',
                  '/camps_(6).jpg',
                  '/camps_(7).jpg',
                  '/camps_(8).jpg',
                  '/camps_(9).jpg',
                  '/camps_(10).jpg',
                  '/camps_(11).jpg',
                  '/camps_(12).jpg',
                  '/camps_(13).jpg',
                  '/camps_(14).jpg',
                  '/camps_(15).jpg',
                  '/camps_(16).jpg',
                  '/camps_(17).jpg',
                  '/camps_(18).jpg'
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
                  '/camps_(1).jpg',
                  '/camps_(2).jpg',
                  '/camps_(3).jpg',
                  '/camps_(4).jpg',
                  '/camps_(5).jpg',
                  '/camps_(6).jpg',
                  '/camps_(7).jpg',
                  '/camps_(8).jpg',
                  '/camps_(9).jpg',
                  '/camps_(10).jpg',
                  '/camps_(11).jpg',
                  '/camps_(12).jpg',
                  '/camps_(13).jpg',
                  '/camps_(14).jpg',
                  '/camps_(15).jpg',
                  '/camps_(16).jpg',
                  '/camps_(17).jpg',
                  '/camps_(18).jpg'
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

      {/* Choose Your STEM Adventure Section */}
      <section className="relative isolate bg-gradient-to-br from-rose-100 via-white to-pink-100 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.25),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url('/grid.svg')", backgroundSize: '600px' }} />
        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-pink-600">Ready to Begin?</p>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Choose Your STEM Adventure</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to spark your child's curiosity? Choose from our exciting courses, camps, or book a personalized consultation. 
            Every journey starts with a single step into the world of STEM innovation.
          </p>
          
          {/* Special Offers */}
          <div className="bg-white bg-opacity-80 rounded-2xl p-6 mb-6 backdrop-blur-sm border border-pink-200 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Special Offers Available!</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
                <div className="text-2xl font-bold text-pink-600">10% OFF</div>
                <div className="text-sm text-gray-600">Early Bird Registration</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">Kits Provided</div>
                <div className="text-sm text-gray-600">All materials at our premises</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">Group Discount</div>
                <div className="text-sm text-gray-600">10% off for 3+ siblings</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="https://wa.me/917009594410?text=Hi!%20I%20want%20to%20enroll%20my%20child%20in%20STEMOrbit%20courses."
              className="rounded-full bg-pink-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-pink-400 shadow-lg"
            >
              Enroll in Courses
            </a>
            <a
              href="/stemcampsnew"
              className="rounded-full bg-blue-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-400 shadow-lg"
            >
              Join STEM Camps
            </a>
            <a
              href="/summercamp"
              className="rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-orange-400 shadow-lg"
            >
              Summer Programs
            </a>
            <a
              href="/contact"
              className="rounded-full border border-pink-300 px-8 py-3 text-lg font-semibold text-pink-600 transition hover:border-pink-400 hover:bg-white shadow"
            >
              Book a Counseling Call
            </a>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
