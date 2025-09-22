"use client";
import { useState } from 'react';

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-fredoka">
                3D <span className="text-yellow-300">Printing</span> Services
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Bring your ideas to life with our professional 3D printing services. 
                From rapid prototyping to custom designs, we make innovation tangible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Get Quote Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">🖨️</div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span>State-of-the-art 3D printers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Multiple material options</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Expert design consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span>Fast delivery nationwide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive 3D printing solutions for every need, from education to industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 cursor-pointer ${
                  selectedService === service.id 
                    ? 'ring-4 ring-purple-500 transform scale-105' 
                    : 'hover:shadow-2xl hover:scale-105'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              Available <span className="text-blue-600">Materials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a wide range of high-quality materials for your 3D printing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-full mb-4 bg-${material.color.toLowerCase()}-100 flex items-center justify-center`}>
                  <div className={`w-8 h-8 rounded-full bg-${material.color.toLowerCase()}-500`}></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{material.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                <div className="space-y-2 text-sm">
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
                <div className="mt-4">
                  <p className="text-xs text-gray-500">Applications:</p>
                  <p className="text-sm text-gray-700">{material.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              Our <span className="text-pink-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent 3D printing projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.complexity === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : project.complexity === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.complexity}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-fredoka">
              Our <span className="text-green-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your 3D printed project ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Upload Design',
                description: 'Send us your 3D model or describe your requirements',
                icon: '📤'
              },
              {
                step: '2',
                title: 'Review & Quote',
                description: 'We analyze your design and provide a detailed quote',
                icon: '🔍'
              },
              {
                step: '3',
                title: 'Print & Quality Check',
                description: 'We print your design and perform quality inspections',
                icon: '🖨️'
              },
              {
                step: '4',
                title: 'Delivery',
                description: 'Your finished product is carefully packaged and delivered',
                icon: '📦'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-fredoka">
            Ready to Print Your Ideas?
          </h2>
          <p className="text-xl mb-8">
            Get started with your 3D printing project today. Upload your design or contact us for consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Upload Design
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Get Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
