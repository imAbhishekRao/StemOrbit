"use client";
import { useState } from 'react';
import { handleBookCallClick } from '../../lib/calendly';

export default function ThreeDPrintingPage() {
  const [selectedService, setSelectedService] = useState('prototyping');

  const services = [
    {
      id: 'prototyping',
      title: 'Rapid Prototyping',
      description: 'Transform your ideas into physical prototypes quickly and cost-effectively',
      features: [
        'Fast turnaround times (24-48 hours)',
        'Multiple material options',
        'High precision and accuracy',
        'Design optimization support',
        'Cost-effective solutions'
      ],
      price: 'Starting from ₹500',
      icon: '🚀'
    },
    {
      id: 'education',
      title: 'Educational Models',
      description: 'Custom 3D printed models for schools and educational institutions',
      features: [
        'Anatomical models for biology',
        'Mathematical geometric shapes',
        'Historical artifacts replicas',
        'Scientific equipment models',
        'Interactive learning tools'
      ],
      price: 'Starting from ₹200',
      icon: '🎓'
    },
    {
      id: 'custom',
      title: 'Custom Designs',
      description: 'Bespoke 3D printing solutions tailored to your specific needs',
      features: [
        'Personalized designs',
        'Complex geometries',
        'Multi-color printing',
        'Large format printing',
        'Material consultation'
      ],
      price: 'Quote on request',
      icon: '🎨'
    }
  ];

  const materials = [
    {
      name: 'PLA (Polylactic Acid)',
      description: 'Eco-friendly, easy to print, perfect for beginners',
      color: 'Green',
      strength: 'Medium',
      flexibility: 'Low',
      temperature: '190-220°C',
      applications: 'Prototypes, decorative items, educational models'
    },
    {
      name: 'ABS (Acrylonitrile Butadiene Styrene)',
      description: 'Durable and impact-resistant, great for functional parts',
      color: 'Blue',
      strength: 'High',
      flexibility: 'Medium',
      temperature: '220-250°C',
      applications: 'Functional prototypes, mechanical parts, toys'
    },
    {
      name: 'PETG (Polyethylene Terephthalate)',
      description: 'Clear, strong, and chemical resistant',
      color: 'Purple',
      strength: 'High',
      flexibility: 'Medium',
      temperature: '230-250°C',
      applications: 'Food containers, medical devices, transparent parts'
    },
    {
      name: 'TPU (Thermoplastic Polyurethane)',
      description: 'Flexible and rubber-like material',
      color: 'Orange',
      strength: 'Medium',
      flexibility: 'High',
      temperature: '220-250°C',
      applications: 'Phone cases, gaskets, flexible parts'
    }
  ];

  const projects = [
    {
      title: 'Medical Training Model',
      description: '3D printed heart model for medical students',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'Medical',
      complexity: 'High'
    },
    {
      title: 'Architectural Scale Model',
      description: 'Detailed building model for presentation',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      category: 'Architecture',
      complexity: 'Medium'
    },
    {
      title: 'Educational Dinosaur Fossil',
      description: 'Life-size dinosaur bone replica for museum',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      category: 'Education',
      complexity: 'High'
    },
    {
      title: 'Custom Phone Case',
      description: 'Personalized phone case with unique design',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
      category: 'Consumer',
      complexity: 'Low'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Left text, right animated image */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-fredoka">
                3D <span className="text-yellow-300">Printing</span> Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
                Bring your ideas to life with our professional 3D printing services.
                From rapid prototyping to custom designs, we make innovation tangible.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Get Quote Now
                </button>
                <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            {/* Right: Image with bubbles */}
            <div className="relative">
              <img src="/3dprinitng.svg" alt="3D Printing banner" className="w-11/12 mx-auto h-auto" loading="eager" />
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-6 left-6 w-6 h-6 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-10 w-8 h-8 bg-yellow-300/30 rounded-full animate-bounce" style={{animationDelay:'0.4s'}}></div>
                <div className="absolute bottom-10 left-1/4 w-5 h-5 bg-pink-300/40 rounded-full animate-pulse" style={{animationDelay:'0.8s'}}></div>
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-blue-300/30 rounded-full animate-ping" style={{animationDelay:'1.2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-fredoka">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive 3D printing solutions for every need, from education to industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => {
              const cardColors = [
                'from-pink-200 to-rose-300 border-pink-400',
                'from-blue-200 to-indigo-300 border-blue-400', 
                'from-green-200 to-emerald-300 border-green-400'
              ];
              const selectedColor = cardColors[index % cardColors.length];
              
              return (
              <div 
                key={service.id}
                  className={`bg-gradient-to-br ${selectedColor} rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 transition-all duration-300 cursor-pointer border-2 ${
                  selectedService === service.id 
                    ? 'ring-4 ring-purple-500 transform scale-105' 
                    : 'hover:shadow-2xl hover:scale-105'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>
                  <div className="text-xl sm:text-2xl font-bold text-purple-600">{service.price}</div>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <span className="text-green-500 text-sm sm:text-base">✓</span>
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={handleBookCallClick} className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm sm:text-base">
                  Learn More
                </button>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-fredoka">
              Available <span className="text-blue-600">Materials</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a wide range of high-quality materials for your 3D printing needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {materials.map((material, index) => {
              const materialColors = [
                { bg: 'from-green-200 to-emerald-300', border: 'border-green-400', dot: 'bg-green-600' },
                { bg: 'from-blue-200 to-indigo-300', border: 'border-blue-400', dot: 'bg-blue-600' },
                { bg: 'from-purple-200 to-violet-300', border: 'border-purple-400', dot: 'bg-purple-600' },
                { bg: 'from-orange-200 to-amber-300', border: 'border-orange-400', dot: 'bg-orange-600' }
              ];
              const selectedColor = materialColors[index % materialColors.length];
              
              return (
                <div key={index} className={`bg-gradient-to-br ${selectedColor.bg} rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-2 ${selectedColor.border}`}>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${selectedColor.dot}`}></div>
                    <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${selectedColor.dot} opacity-70`}></div>
                    <div className={`w-2 h-2 rounded-full ${selectedColor.dot} opacity-50`}></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{material.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{material.description}</p>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Strength:</span>
                    <span className="font-semibold">{material.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Flexibility:</span>
                    <span className="font-semibold">{material.flexibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Temperature:</span>
                    <span className="font-semibold">{material.temperature}</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4">
                  <p className="text-[10px] sm:text-xs text-gray-500">Applications:</p>
                  <p className="text-xs sm:text-sm text-gray-700">{material.applications}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-fredoka">
              Our <span className="text-pink-600">Portfolio</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent 3D printing projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projects.map((project, index) => {
              const portfolioColors = [
                { bg: 'from-red-200 to-pink-300', border: 'border-red-400' },
                { bg: 'from-blue-200 to-indigo-300', border: 'border-blue-400' },
                { bg: 'from-green-200 to-emerald-300', border: 'border-green-400' },
                { bg: 'from-purple-200 to-violet-300', border: 'border-purple-400' }
              ];
              const selectedColor = portfolioColors[index % portfolioColors.length];
              
              return (
                <div key={index} className={`bg-gradient-to-br ${selectedColor.bg} rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${selectedColor.border}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="bg-blue-200 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      project.complexity === 'High' 
                        ? 'bg-red-200 text-red-800' 
                        : project.complexity === 'Medium'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-green-200 text-green-800'
                    }`}>
                      {project.complexity}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm">{project.description}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-fredoka">
              Our <span className="text-green-600">Process</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your 3D printed project ready
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                step: '1',
                title: 'Upload Design',
                description: 'Send us your 3D model or describe your requirements',
                icon: '📤',
                color: 'from-pink-200 to-rose-300 border-pink-400'
              },
              {
                step: '2',
                title: 'Review & Quote',
                description: 'We analyze your design and provide a detailed quote',
                icon: '🔍',
                color: 'from-blue-200 to-indigo-300 border-blue-400'
              },
              {
                step: '3',
                title: 'Print & Quality Check',
                description: 'We print your design and perform quality inspections',
                icon: '/3-dprinter.svg',
                color: 'from-green-200 to-emerald-300 border-green-400'
              },
              {
                step: '4',
                title: 'Delivery',
                description: 'Your finished product is carefully packaged and delivered',
                icon: '📦',
                color: 'from-purple-200 to-violet-300 border-purple-400'
              }
            ].map((step, index) => (
              <div key={index} className={`bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 text-center hover:shadow-xl transition-all duration-300`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {step.icon.startsWith('/') ? (
                    <img src={step.icon} alt={step.title} className="w-8 h-8 sm:w-10 sm:h-10" />
                  ) : (
                  <span className="text-2xl sm:text-3xl">{step.icon}</span>
                  )}
                </div>
                <div className="bg-purple-200 text-purple-800 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-sm sm:text-base">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-fredoka">
            Ready to Print Your Ideas?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Get started with your 3D printing project today. Upload your design or contact us for consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Upload Design
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Get Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
