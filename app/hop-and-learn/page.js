 "use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar/page';

export default function HopAndLearnPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // Features data
  const features = [
    {
      icon: '🎯',
      title: 'Interactive Learning',
      description: 'Physical play with A-Z and 0-9 for active engagement'
    },
    {
      icon: '🔊',
      title: 'Audio Feedback',
      description: 'Connects letters and numbers with sounds and words'
    },
    {
      icon: '🏃',
      title: 'Active Play',
      description: 'Encourages movement and physical activity'
    },
    {
      icon: '🎮',
      title: 'Multiple Modes',
      description: 'Alphabet, Math, and Memory games for varied learning'
    }
  ];

  // FAQ data
  const faqs = [
    { 
      question: 'What age group is this suitable for?', 
      answer: 'The Hop & Learn mat is designed for children aged 3-7 years old.' 
    },
    { 
      question: 'Is any assembly required?', 
      answer: 'No assembly is required. Simply unroll the mat and connect it to your TV to start playing.' 
    },
    { 
      question: 'What devices are compatible?', 
      answer: 'The mat works with most modern TVs that have an available HDMI port.' 
    },
    { 
      question: 'How do I clean the mat?', 
      answer: 'Gently wipe the surface with a slightly damp cloth. Do not immerse in water or use harsh chemicals.' 
    },
    { 
      question: 'Is there a warranty?', 
      answer: 'Yes, the mat comes with a 1-year warranty against manufacturing defects.' 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 relative">
      <Navbar />
      <div className="flex-1 pt-24">
        {/* Fixed Navigation Buttons */}
        <div className="fixed top-24 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'features', label: 'Features' },
                { id: 'whats-included', label: "What's Included" },
                { id: 'how-it-works', label: 'How It Works' },
                { id: 'modes', label: 'Play Modes' },
                { id: 'faqs', label: 'FAQs' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 100}, 255, 0.2)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      <Head>
        <title>Hop & Learn Interactive Alphabet & Number Mat | STEMOrbit</title>
        <meta name="description" content="Active, screen-free learning for ages 3–7. Hop to learn A–Z & 0–9 with games, memory, and math. Includes TV app, power banks & warranty." />
        <meta property="og:title" content="Hop & Learn Interactive Alphabet & Number Mat | STEMOrbit" />
        <meta property="og:description" content="Active, screen-free learning for ages 3–7. Hop to learn A–Z & 0–9 with games, memory, and math." />
        <meta property="og:image" content="https://stemorbit.com/images/hop-and-learn-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Main Content */}
      <main className="w-full">

        {/* Scroll to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Main content area with padding to account for fixed header and navigation */}
        <div className="pt-24">

        {/* Hero Section */}
        <section id="overview" className={`bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden pt-24 ${activeSection === 'overview' ? 'block' : 'hidden'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 playful-text">
                  <span className="block">Hop & Learn</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Interactive Learning Mat
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 playful-text">
                  Smart learning through fun & movement! Designed for ages 3–7, this screen-free mat turns letters and numbers into a joyful, physical learning adventure.
                </p>
                <div className="mt-8 bg-white/50 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50">
                  <h3 className="text-sm font-bold text-blue-600 mb-3">🎯 PERFECT FOR AGES 3–7</h3>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white text-blue-700 border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
                      <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Screen-Free
                    </span>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white text-green-700 border-2 border-green-200 shadow-sm hover:shadow-md transition-all">
                      <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Active Learning
                    </span>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white text-purple-700 border-2 border-purple-200 shadow-sm hover:shadow-md transition-all">
                      <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-purple-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      A-Z & 0-9
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0 relative">
                <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] border-4 border-white animate-bounce">
                  <div className="aspect-w-16 aspect-h-9 w-full bg-gray-100">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-300 to-purple-300">
                      <div className="text-center p-8">
                        <div className="text-7xl mb-4 animate-bounce" style={{ animationDelay: '0.5s' }}>🎮</div>
                        <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Hop & Learn</h3>
                        <p className="text-gray-700 font-medium">Interactive Learning Mat</p>
                        <div className="mt-4 flex justify-center space-x-2">
                          <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></span>
                          <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                          <span className="inline-block w-3 h-3 rounded-full bg-red-400 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium">Smart Learning Through Fun & Movement!</p>
                    <p className="text-xs opacity-80 mt-1">Ages 3-7 • Powered by STEMOrbit</p>
                  </div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500" aria-label="Play video">
                    <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wave divider */}
          <div className="w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 lg:h-20">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity="25" className="fill-current text-white"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity="50" className="fill-current text-white"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,86c57.52-8.15,108.87-36.1,148.8-72.7V0Z" className="fill-current text-white"></path>
            </svg>
          </div>
        </section>



        {/* Social Proof Section */}
        <section className={`bg-white py-12 ${activeSection === 'overview' ? 'block' : 'hidden'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="text-3xl mb-2">👶</div>
                <h3 className="font-medium text-gray-900">Ages 3–7</h3>
                <p className="text-sm text-gray-600">Perfect for preschoolers</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="text-3xl mb-2">📵</div>
                <h3 className="font-medium text-gray-900">Screen-Free</h3>
                <p className="text-sm text-gray-600">Active learning</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="text-3xl mb-2">🏃</div>
                <h3 className="font-medium text-gray-900">Moves the Body</h3>
                <p className="text-sm text-gray-600">Physical activity</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="text-3xl mb-2">🏠</div>
                <h3 className="font-medium text-gray-900">Home & School</h3>
                <p className="text-sm text-gray-600">Versatile learning</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`py-16 bg-white ${activeSection === 'features' ? 'block' : 'hidden'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Engaging Features for Active Learning
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Designed to make learning fun and effective through physical play
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <div key={index} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-2xl shadow-md">
                          {feature.icon}
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section id="whats-included" className={`py-16 bg-gray-50 ${activeSection === 'whats-included' ? 'block' : 'hidden'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Interactive Mat', description: 'Durable, non-slip surface with A-Z and 0-9' },
                { name: 'TV App', description: 'Companion app for interactive learning' },
                { name: 'Power Banks', description: 'Portable power for on-the-go learning' },
                { name: 'Charging Cable', description: 'For keeping everything powered up' },
                { name: 'User Manual', description: 'Easy setup and usage instructions' },
                { name: '1 Year Warranty', description: 'Peace of mind with our guarantee' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={`py-16 bg-white ${activeSection === 'how-it-works' ? 'block' : 'hidden'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Unbox & Setup', description: 'Lay out the mat and connect to your TV' },
                { step: '2', title: 'Choose a Mode', description: 'Select from various learning modes' },
                { step: '3', title: 'Start Playing', description: 'Step on the mat and begin learning' },
                { step: '4', title: 'Track Progress', description: 'Monitor your child\'s learning journey' },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Play Modes Section */}
        <section id="modes" className={`py-16 bg-gray-50 ${activeSection === 'modes' ? 'block' : 'hidden'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Play Modes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Alphabet Adventure', 
                  description: 'Learn letters A-Z with fun games and challenges',
                  icon: '🔤'
                },
                { 
                  title: 'Number Ninja', 
                  description: 'Master numbers 0-9 through interactive play',
                  icon: '🔢'
                },
                { 
                  title: 'Memory Match', 
                  description: 'Improve memory with matching games',
                  icon: '🧠'
                },
                { 
                  title: 'Math Master', 
                  description: 'Practice basic math with physical movement',
                  icon: '➕'
                },
              ].map((mode, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{mode.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mode.title}</h3>
                  <p className="text-gray-600">{mode.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className={`py-16 bg-white ${activeSection === 'faqs' ? 'block' : 'hidden'}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 focus:outline-none"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    id={`faq-${index}`}
                    className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-40 py-4' : 'max-h-0'}`}
                    aria-hidden={expandedFaq !== index}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Always visible at the bottom */}
        <section className={`py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white ${activeSection === 'cta' ? 'block' : 'hidden'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Child's Learning Adventure?</h2>
            <p className="text-xl mb-8">Get the Hop & Learn Interactive Mat today and make learning fun!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/917009594410"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                WhatsApp Us to Order
              </a>
              <a
                href="#overview"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
