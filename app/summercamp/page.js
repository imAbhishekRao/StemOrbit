"use client";

import { useState, useEffect, useRef } from "react";
import { handleBookCallClick } from '../../lib/calendly';

function useSectionAnimation(ref, animationFn, deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFn();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, deps);
}

export default function SummerCamp() {
  const [storyVisible, setStoryVisible] = useState(false);
  const storyRef = useRef(null);

  useSectionAnimation(storyRef, () => {
    setStoryVisible(true);
  }, []);

  const storyPoints = [
    "Riya is a bright 10-year-old who loves asking \"Why?\" — Why does the fan spin? Why does the rainbow have seven colors? Why can't a toy car run without batteries?",
    "At home, her parents smile at her questions, sometimes without knowing how to answer them. In school, she memorizes textbook answers — but that spark of \"How does this really work?\" starts to fade.",
    "One summer, her parents enrolled her in a STEMOrbit Camp — just to try something new. On the very first day, Riya built a mini windmill that lit up an LED bulb. Her eyes lit up brighter than the bulb.",
    "Suddenly, \"Why?\" turned into \"What if I could make it better?\" That's the power of STEM. It doesn't just teach science — it teaches kids to think, create, and explore.",
    "It transforms passive learners into curious innovators. It helps them see the world not as something to memorize, but something they can change.",
    "In a world where technology is everywhere, our children need more than grades — They need imagination, problem-solving, and the courage to build what they dream. That's what STEMOrbit stands for — Turning curiosity into creation, and learners into leaders."
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-7rem)] xl:h-[calc(100vh-8rem)] bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-pink-300/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-green-300/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-orange-300/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fadeInUp">
              <span className="block">STEM Camps</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                From <span className="text-yellow-300 animate-pulse">Why</span> to <span className="text-green-300 animate-pulse">How</span> — the journey begins with <span className="text-pink-300 animate-pulse">STEMOrbit</span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              When a child asks <span className="text-yellow-300 font-semibold">"Why does this happen?"</span> — that's the beginning of innovation. We nurture that spark through hands-on STEM learning, where kids build, experiment, and discover how things work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={handleBookCallClick}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
              >
                Enroll Now
              </button>
              <button 
                onClick={handleBookCallClick}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">STEM Programs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of STEM programs designed to ignite curiosity and foster innovation in young minds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "Robotics & AI",
                description: "Build and program robots while learning artificial intelligence concepts through hands-on projects.",
                features: ["Robot Building", "Programming", "AI Basics", "Problem Solving"]
              },
              {
                icon: "💻",
                title: "Coding & Programming",
                description: "Master programming languages and develop software applications from scratch.",
                features: ["Python", "JavaScript", "Web Development", "Game Design"]
              },
              {
                icon: "🔬",
                title: "Science & Engineering",
                description: "Explore physics, chemistry, and engineering principles through exciting experiments.",
                features: ["Physics Labs", "Chemistry", "Engineering", "Experiments"]
              },
              {
                icon: "🎨",
                title: "3D Design & Printing",
                description: "Create digital models and bring them to life using cutting-edge 3D printing technology.",
                features: ["3D Modeling", "CAD Design", "3D Printing", "Prototyping"]
              },
              {
                icon: "🌱",
                title: "Environmental Science",
                description: "Study ecosystems, sustainability, and environmental conservation through field work.",
                features: ["Ecosystems", "Sustainability", "Conservation", "Field Studies"]
              },
              {
                icon: "🚀",
                title: "Space & Astronomy",
                description: "Explore the cosmos and learn about space technology, astronomy, and space exploration.",
                features: ["Astronomy", "Space Tech", "Rocket Science", "Stargazing"]
              }
            ].map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-bounce group-hover:animate-wiggle">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                        </li>
                      ))}
                    </ul>
                      </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFLINE STEM Camps Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              OFFLINE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">STEM Camps</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our immersive offline STEM camps where hands-on learning meets real-world application.
            </p>
          </div>

          <div className="space-y-8">
            {/* Skills Acquired - Full Width Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Skills Acquired</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/70 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Programming & Coding</li>
                    <li>• Robotics & Automation</li>
                    <li>• 3D Design & Printing</li>
                    <li>• Electronics & Circuits</li>
                  </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Problem Solving</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Critical Thinking</li>
                    <li>• Analytical Reasoning</li>
                    <li>• Creative Solutions</li>
                    <li>• Debugging & Troubleshooting</li>
                  </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Soft Skills</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Team Collaboration</li>
                    <li>• Communication</li>
                    <li>• Leadership</li>
                    <li>• Presentation Skills</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Two Equal Cards Below */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* About Curriculum */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">About Curriculum</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Age-Appropriate Learning</h4>
                    <p className="text-sm text-gray-600">Tailored curriculum for different age groups (6-8, 9-12, 13-16) ensuring optimal learning outcomes.</p>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Project-Based Approach</h4>
                    <p className="text-sm text-gray-600">Learn through real-world projects that students can take home and showcase.</p>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Instructors</h4>
                    <p className="text-sm text-gray-600">Learn from industry professionals and experienced educators.</p>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Learning Outcomes</h3>
                </div>
            <div className="space-y-4">
                  <div className="bg-white/70 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Confidence Building</h4>
                    <p className="text-sm text-gray-600">Students gain confidence in their ability to solve complex problems and create innovative solutions.</p>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Career Readiness</h4>
                    <p className="text-sm text-gray-600">Preparation for future STEM careers with practical skills and knowledge.</p>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Portfolio Development</h4>
                    <p className="text-sm text-gray-600">Students build a portfolio of projects to showcase their learning and achievements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Kid Will Receive & Build Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What Your Kid Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Receive & Build</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every camper gets hands-on experience with cutting-edge technology and takes home amazing projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What They Receive */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📦</span>
                </span>
                What They Receive
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Robot Kit</h4>
                  <p className="text-sm text-gray-600">Complete robotics kit with sensors, motors, and controllers</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                  <div className="text-2xl mb-2">💻</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Laptop Access</h4>
                  <p className="text-sm text-gray-600">High-performance laptops for coding and programming</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <div className="text-2xl mb-2">🔬</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lab Equipment</h4>
                  <p className="text-sm text-gray-600">Professional-grade lab tools and equipment</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                  <div className="text-2xl mb-2">📚</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Learning Materials</h4>
                  <p className="text-sm text-gray-600">Comprehensive study guides and reference materials</p>
                </div>
              </div>
            </div>

            {/* What They Build */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🛠️</span>
                    </span>
                What They Build
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Working Robot</h4>
                  <p className="text-sm text-gray-600">A fully functional robot they can program and control</p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
                  <div className="text-2xl mb-2">🎮</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Mobile App</h4>
                  <p className="text-sm text-gray-600">A complete mobile application they can use and share</p>
                  </div>
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                  <div className="text-2xl mb-2">🌱</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Smart Garden</h4>
                  <p className="text-sm text-gray-600">An automated plant monitoring and watering system</p>
                  </div>
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
                  <div className="text-2xl mb-2">🏠</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Smart Home</h4>
                  <p className="text-sm text-gray-600">IoT-based home automation system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section ref={storyRef} className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              🌟 A Story Every Parent Can Relate To
          </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow Riya's journey from curious questions to confident creation
            </p>
          </div>
          
          <div className="space-y-12">
                {storyPoints.map((text, idx) => {
                  const visible = storyVisible;
                  const isQuestion = idx % 2 === 0;
                  const sideClass = isQuestion ? '-translate-x-12' : 'translate-x-12';
                  const avatarSrc = isQuestion ? '/child.svg' : '/childandparent.svg';
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
                    <div key={idx} className={`flex ${isQuestion ? 'flex-row' : 'flex-row-reverse'} items-center gap-4 mx-10`}>
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <img 
                          src={avatarSrc} 
                          alt={isQuestion ? 'Child asking question' : 'Child with parent answering'} 
                          className="w-40 h-40 md:w-48 md:h-48 opacity-95 transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}"
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
            <button onClick={handleBookCallClick} className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg">
              Start Your Child's Journey
            </button>
          </div>

          {/* Full-width Quote Panel (below story) */}
          <div className="mt-10 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 rounded-2xl shadow-xl p-10 border border-orange-200">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-7xl leading-none mb-2">"</div>
              <p className="text-2xl md:text-3xl font-semibold text-gray-900">
                Because today's curious minds are tomorrow's inventors — and every great idea starts with a question.
              </p>
              <div className="text-7xl leading-none mt-2">"</div>
              <p className="mt-6 text-gray-700">We turn children's questions into experiments, and experiments into confidence.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/70 rounded-xl p-4 border border-orange-200">
                  <div className="text-2xl">🧪</div>
                  <div className="mt-2 text-sm font-semibold text-gray-800">Hands‑on Learning</div>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border border-orange-200">
                  <div className="text-2xl">🧠</div>
                  <div className="mt-2 text-sm font-semibold text-gray-800">Think & Create</div>
              </div>
                <div className="bg-white/70 rounded-xl p-4 border border-orange-200">
                  <div className="text-2xl">🚀</div>
                  <div className="mt-2 text-sm font-semibold text-gray-800">Build Confidence</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEM Camp Gallery Section */}
      <section className="relative w-full py-12 md:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              STEM Camp Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the magic of learning in action! Our campers building, creating, and discovering the wonders of STEM.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollBehavior: 'smooth' }}>
              {[
                { src: "/moments (1).jpg", title: "Young Engineers at Work", desc: "Building their first robot" },
                { src: "/moments (2).JPG", title: "Coding Adventures", desc: "Learning programming basics" },
                { src: "/moments (3).jpg", title: "Science Experiments", desc: "Hands-on discovery" },
                { src: "/moments (4).jpg", title: "Team Collaboration", desc: "Working together on projects" },
                { src: "/moments (5).jpg", title: "Creative Problem Solving", desc: "Thinking outside the box" },
                { src: "/moments (6).jpg", title: "3D Printing Magic", desc: "Bringing ideas to life" },
                { src: "/moments (7).jpg", title: "Robotics Challenge", desc: "Testing their creations" },
                { src: "/moments (8).jpg", title: "STEM Showcase", desc: "Presenting their projects" },
                { src: "/moments (9).jpg", title: "Learning Together", desc: "Peer-to-peer discovery" },
                { src: "/moments (10).jpg", title: "Camp Celebration", desc: "Celebrating achievements" }
              ].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-80 h-64 group cursor-pointer">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.desc}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>

            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 z-10">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 z-10">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="text-center mt-8">
            <button onClick={handleBookCallClick} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Join Our Next STEM Camp
            </button>
          </div>
        </div>
        
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>
    </div>
  );
}