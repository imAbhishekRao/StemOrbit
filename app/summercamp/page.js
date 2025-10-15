"use client";
import { useState } from 'react';

// Calendly integration
const handleBookCallClick = (e) => {
  e.preventDefault();
  const url = "https://calendly.com/abhishek-stemorbit";
  if (typeof window === "undefined") return false;

  // Ensure CSS is present
  if (!document.getElementById("calendly-widget-css")) {
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }

  const openPopup = () => {
    try {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        window.Calendly.initPopupWidget({ url });
        return true;
      }
    } catch (_) {}
    return false;
  };

  if (openPopup()) return false;

  // If Calendly not loaded yet, load script on demand and open when ready
  let script = document.getElementById("calendly-widget-script");
  if (!script) {
    script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.type = "text/javascript";
    script.onload = () => openPopup();
    document.body.appendChild(script);
  } else {
    script.addEventListener("load", () => openPopup(), { once: true });
  }

  // Final fallback after short delay
  setTimeout(() => {
    if (!openPopup()) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, 1200);

  return false;
};

export default function SummerCampPage() {
  const [selectedProgram, setSelectedProgram] = useState('robotics');

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
      icon: '🖨️',
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-fredoka">
              Summer <span className="text-yellow-300">STEM</span> Camps
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Make this summer unforgettable with our exciting STEM camps! 
              Learn, create, and explore the world of science, technology, engineering, and mathematics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                🎯 Hands-on Learning
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                🏆 Expert Instructors
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                🎁 Take-home Projects
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                📜 Certificates
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleBookCallClick} className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Register Now
              </button>
              <a href="/STEMOrbit%20Brochure.pdf" download className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 inline-block text-center">
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              Choose Your <span className="text-orange-600">Adventure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our exciting range of STEM programs designed for different age groups and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => {
              const color = colorClasses[program.color];
              return (
                <div 
                  key={program.id}
                  className={`rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    selectedProgram === program.id ? 'ring-4 ring-purple-500' : ''
                  }`}
                  onClick={() => setSelectedProgram(program.id)}
                >
                  <div className={`bg-gradient-to-br ${color.bg} p-6 text-center border-b ${color.border}`}>
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className={`text-xl font-bold mb-2 ${color.text}`}>{program.title}</h3>
                    <div className={`text-sm mb-4 ${color.text.replace('900','700')}`}>{program.ageGroup}</div>
                    <div className="text-2xl font-bold text-purple-700 mb-2">{program.price}</div>
                    <div className="text-sm text-gray-700">{program.duration}</div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 text-sm">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      <li className="text-sm text-gray-500">+{program.features.length - 3} more features</li>
                    </ul>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold text-purple-700">{program.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacity:</span>
                        <span className="font-semibold text-purple-700">{program.capacity}</span>
                      </div>
                    </div>
                    <button className={`w-full bg-gradient-to-r ${color.button} text-white py-3 rounded-lg font-semibold transition-all duration-300`} onClick={handleBookCallClick}>
                      Learn More
                    </button>
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
              <span className="text-orange-600">OFFLINE</span> Summer/Winter <span className="text-blue-600"> Camp</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              20 hours of Practical Live & Interactive sessions by an International Robotics expert
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Acquired Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills Acquired</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { skill: 'Programming in Python and C++', icon: '💻', color: 'from-blue-500 to-indigo-600' },
                  { skill: 'Electronics', icon: '⚡', color: 'from-yellow-500 to-orange-600' },
                  { skill: 'Hardware', icon: '🔧', color: 'from-gray-500 to-gray-700' },
                  { skill: 'Arduino Controller', icon: '🎛️', color: 'from-green-500 to-emerald-600' },
                  { skill: 'Raspberry Pi Controller', icon: '🍓', color: 'from-red-500 to-pink-600' },
                  { skill: 'Sensors and Motors', icon: '🔍', color: 'from-purple-500 to-violet-600' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-xl`}>
                      {item.icon}
                    </div>
                    <span className="font-semibold text-gray-800">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About Curriculum & Learning Outcomes */}
            <div className="space-y-6">
              {/* About Curriculum */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">📚</span>
                  About the Curriculum
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">Aligned with International Standards</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">Starts from LED Blink to develop different robots</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">HRDF Malaysia and MOE Singapore approved courses</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-60 rounded-xl p-4 mt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-blue-600">25,000+</span> students and <span className="font-bold text-blue-600">75+</span> institutions globally in the last 5 years
                    </p>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Learning Outcomes
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">Hands-on Industry relevant topics</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">Clear understanding of Robotics, building Robots, Coding, Sensors and motors</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">After the course students will be able to independently develop robots on their own</p>
                  </div>
                </div>
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
                        <p className="text-gray-600">{item.description}</p>
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
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
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
  );
}
