"use client";
import { useState } from 'react';

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
    blue: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', button: 'bg-blue-500 hover:bg-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', button: 'bg-green-500 hover:bg-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200', button: 'bg-purple-500 hover:bg-purple-600' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200', button: 'bg-yellow-500 hover:bg-yellow-600' }
  };

  return (
    <div className="min-h-screen bg-white">
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
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Register Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
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
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    selectedProgram === program.id ? 'ring-4 ring-purple-500' : ''
                  }`}
                  onClick={() => setSelectedProgram(program.id)}
                >
                  <div className={`${color.bg} p-6 text-center`}>
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <div className="text-sm text-gray-600 mb-4">{program.ageGroup}</div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{program.price}</div>
                    <div className="text-sm text-gray-500">{program.duration}</div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      <li className="text-sm text-gray-500">+{program.features.length - 3} more features</li>
                    </ul>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">{program.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacity:</span>
                        <span className="font-semibold">{program.capacity}</span>
                      </div>
                    </div>
                    <button className={`w-full ${color.button} text-white py-3 rounded-lg font-semibold transition-all duration-300`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              Daily <span className="text-blue-600">Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A typical day at our summer camp is packed with learning, fun, and creativity
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-6 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-32 text-sm font-semibold text-purple-600">
                    {activity.time}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{activity.activity}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
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
