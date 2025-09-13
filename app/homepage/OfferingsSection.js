
export default function OfferingsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 bg-[#FFF7F0] relative px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-comicneue font-extrabold text-pink-600 mb-6 sm:mb-8 lg:mb-10 drop-shadow-lg text-center">Our Offerings</h2>
      
      {/* Three Color-Coded Divs Section */}
      <div className="w-full max-w-6xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* For School - Blue */}
          <div className="relative flex flex-col items-center bg-blue-500 rounded-3xl shadow-2xl p-8 border-4 border-blue-600 hover:scale-105 transition-transform duration-300">
            <div className="mb-4 text-3xl">🏫</div>
            <h3 className="text-4xl font-bold text-white mb-6 text-center font-fredoka">For School</h3>
            <ul className="text-left text-sm text-blue-50 space-y-2 font-['Bubblegum Sans',cursive] w-full">
              <li className="flex items-center gap-2">✅ STEM/ATL Lab Setup</li>
              <li className="flex items-center gap-2">✅ Teacher Training Programs</li>
              <li className="flex items-center gap-2">✅ School Sessions & Workshops</li>
              <li className="flex items-center gap-2">✅ Technical Event Support</li>
              <li className="flex items-center gap-2">✅ Curriculum Integration</li>
              <li className="flex items-center gap-2">✅ Lab Management Support</li>
              <li className="flex items-center gap-2">✅ Equipment & Technology Setup</li>
              <li className="flex items-center gap-2">✅ Student Assessment Tools</li>
              <li className="flex items-center gap-2">✅ Science Fair Support</li>
              <li className="flex items-center gap-2">✅ Robotics Competition Training</li>
              <li className="flex items-center gap-2">✅ 3D Printing Lab Installation</li>
              <li className="flex items-center gap-2">✅ AI & Coding Lab Setup</li>
              <li className="flex items-center gap-2">✅ Maintenance & Support Services</li>
              <li className="flex items-center gap-2">✅ Progress Tracking & Reports</li>
              <li className="flex items-center gap-2">✅ Custom Program Development</li>
            </ul>
          </div>

          {/* For Teachers - Pink */}
          <div className="relative flex flex-col items-center bg-pink-500 rounded-3xl shadow-2xl p-8 border-4 border-pink-600 hover:scale-105 transition-transform duration-300">
            <div className="mb-4 text-3xl">👩‍🏫</div>
            <h3 className="text-4xl font-bold text-white mb-6 text-center font-fredoka">For Teachers</h3>
            <ul className="text-left text-sm text-pink-50 space-y-2 font-['Bubblegum Sans',cursive] w-full">
              <li className="flex items-center gap-2">✅ Hands-on Training Modules</li>
              <li className="flex items-center gap-2">✅ 3D Printing & IoT Training</li>
              <li className="flex items-center gap-2">✅ Robotics & AI Workshops</li>
              <li className="flex items-center gap-2">✅ Teaching Resources & Materials</li>
              <li className="flex items-center gap-2">✅ Continuous Support & Mentoring</li>
              <li className="flex items-center gap-2">✅ Professional Development</li>
              <li className="flex items-center gap-2">✅ Lesson Plan Templates</li>
              <li className="flex items-center gap-2">✅ Assessment & Evaluation Tools</li>
              <li className="flex items-center gap-2">✅ Classroom Management Strategies</li>
              <li className="flex items-center gap-2">✅ Technology Integration Training</li>
              <li className="flex items-center gap-2">✅ Student Engagement Techniques</li>
              <li className="flex items-center gap-2">✅ Project-Based Learning Methods</li>
              <li className="flex items-center gap-2">✅ Safety Protocols & Guidelines</li>
              <li className="flex items-center gap-2">✅ Certification Programs</li>
              <li className="flex items-center gap-2">✅ Peer Learning Communities</li>
            </ul>
          </div>

          {/* For Students - Yellow */}
          <div className="relative flex flex-col items-center bg-yellow-500 rounded-3xl shadow-2xl p-8 border-4 border-yellow-600 hover:scale-105 transition-transform duration-300">
            <div className="mb-4 text-3xl">🎓</div>
            <h3 className="text-4xl font-bold text-white mb-6 text-center font-fredoka">For Students</h3>
            <ul className="text-left text-sm text-yellow-50 space-y-2 font-['Bubblegum Sans',cursive] w-full">
              <li className="flex items-center gap-2">✅ STEM Classes (Grade 1-12)</li>
              <li className="flex items-center gap-2">✅ Summer/Winter Camps</li>
              <li className="flex items-center gap-2">✅ STEM Kits & DIY Projects</li>
              <li className="flex items-center gap-2">✅ Technical Competition Support</li>
              <li className="flex items-center gap-2">✅ Internship Programs</li>
              <li className="flex items-center gap-2">✅ Online Courses & Programs</li>
              <li className="flex items-center gap-2">✅ Robotics & Coding Bootcamps</li>
              <li className="flex items-center gap-2">✅ 3D Design & Printing Projects</li>
              <li className="flex items-center gap-2">✅ AI & Machine Learning Basics</li>
              <li className="flex items-center gap-2">✅ Science Fair Project Guidance</li>
              <li className="flex items-center gap-2">✅ Arduino & Electronics Projects</li>
              <li className="flex items-center gap-2">✅ App Development Workshops</li>
              <li className="flex items-center gap-2">✅ Game Development Sessions</li>
              <li className="flex items-center gap-2">✅ Virtual Reality Experiences</li>
              <li className="flex items-center gap-2">✅ Career Guidance & Mentorship</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css:
// @keyframes childish-bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04) rotate(-2deg); } }
// .animate-childish-bounce { animation: childish-bounce 2.5s infinite cubic-bezier(0.4,0,0.2,1); } 