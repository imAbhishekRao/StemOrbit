import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ms. Heena",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"The educators are knowledgeable and very supportive. Got to learn a lot from you people. Thanks a lot to your whole team for providing such a platform where we can enhance our skills and also make our students know about different technologies."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Heena.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Educator" }
    ],
    color: "#0369A1" // deep blue
  },
  {
    name: "Mr. Gurjinder Singh",
    subtitle: "JNV Patiala",
    text: `"STEMORBIT have provided us with excellent technical knowledge and their trainer have also been very energetic and supportive. We would definitely recommend STEMORBIT to our known schools when ATL lab setup and services."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Gurjinder.jpg",
    badges: [
      { icon: "/schools.svg", text: "JNV Patiala" },
      { icon: "/students.svg", text: "ATL/Technology Coordinator" }
    ],
    color: "#5B21B6" // rich indigo
  },
  {
    name: "Mr. Sandeep",
    subtitle: "JNV Amritsar",
    text: `"STEMORBIT training triggers curiosity among students to identify real life problem and find their solutions. I thank STEMORBIT and their team for providing their services to our school. Best wishes to your company, I believe your company will grow and flourish wonderfully."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Sandeep.jpg",
    badges: [
      { icon: "/schools.svg", text: "JNV Amritsar" },
      { icon: "/students.svg", text: "Teacher / Mentor" }
    ],
    color: "#0F766E" // teal
  },
  {
    name: "Ms. Gunjan",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"I am fortunate enough to work and learn with the experienced, expertise and cooperative team of Stemorbit . I found this learning full of educative, inspirational with a lot of fun filled programs and amazing experiments here. Thanks a lot to the team Stemorbit."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Gunjan.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Science Faculty" }
    ],
    color: "#7C3AED" // violet
  },
  {
    name: "Ms. Anita Kumari",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"Working with Stemorbit has been a joy. They are very detailed and organized. They make sure that the work is done correctly and in a timely manner. Their services have enabled us to reach an efficiency we hadn't previously experienced."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Anita.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Administrator" }
    ],
    color: "#BE185D" // rose
  },
  {
    name: "Ms. Shweta Shahi",
    subtitle: "Air Force School (12 Wing, Chandigarh)",
    text: `"In the 21st century , Stemorbit has given an opportunity to step into a new outlook for the theories we have learnt. Dedicated staff with on time practical knowledge is been provided by the faculty members."`,
    img: "https://www.stemorbit.com/assets/images/testimonials/Shweta.jpg",
    badges: [
      { icon: "/schools.svg", text: "Air Force School (12 Wing, Chandigarh)" },
      { icon: "/students.svg", text: "Faculty" }
    ],
    color: "#047857" // emerald
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  // Get current pair of testimonials
  const getCurrentPair = () => {
    const pair = [];
    for (let i = 0; i < 2; i++) {
      const index = (current + i) % testimonials.length;
      pair.push(testimonials[index]);
    }
    return pair;
  };

  const currentPair = getCurrentPair();

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-[#fafafa] flex flex-col items-center justify-center px-4 sm:px-6">
      {/* Heading with strawberry icon and playful text */}
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <span className="text-pink-500 font-bold text-lg font-bubblegum mb-2">Testimonials</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center font-fredoka text-sky-500">Voices from Our Partner Schools</h2>
      </div>
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Mobile: Show only first testimonial */}
          <div className="lg:hidden">
            {currentPair[0] && (
              <div key={`${current}-0`} className="relative rounded-2xl shadow-2xl flex flex-col items-center px-6 py-8 w-full min-h-[400px] transition-all duration-500 transform hover:scale-105" style={{ background: currentPair[0].color }}>
                {/* Circular image */}
                <div className="relative -top-16 z-20 mb-2">
                  <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
                    <Image src={currentPair[0].img} alt={currentPair[0].name} width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white text-2xl leading-none">"</span>
                    <span className="text-white text-xl font-extrabold font-fredoka">{currentPair[0].name}</span>
                  </div>
                  <div className="text-white text-sm opacity-90 font-medium mb-4">{currentPair[0].subtitle}</div>
                  
                  <p className="text-white text-sm font-quicksand mb-6 max-w-md leading-relaxed flex-1">
                    {currentPair[0].text}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {currentPair[0].badges.map((badge, i) => (
                      <div key={i} className="flex items-center gap-1 bg-white/90 text-black font-bold rounded-lg px-3 py-1 text-xs shadow">
                        <img src={badge.icon} alt="badge" className="w-3 h-3" />
                        <span>{badge.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Desktop: Show both testimonials */}
          <div className="hidden lg:contents">
            {currentPair.map((testimonial, index) => (
            <div key={`${current}-${index}`} className="relative rounded-2xl shadow-2xl flex flex-col items-center px-6 py-8 w-full min-h-[400px] transition-all duration-500 transform hover:scale-105" style={{ background: testimonial.color }}>
              {/* Circular image */}
              <div className="relative -top-16 z-20 mb-2">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
                  <Image src={testimonial.img} alt={testimonial.name} width={96} height={96} className="object-cover w-full h-full" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white text-2xl leading-none">"</span>
                  <span className="text-white text-xl font-extrabold font-fredoka">{testimonial.name}</span>
                </div>
                <div className="text-white text-sm opacity-90 font-medium mb-4">{testimonial.subtitle}</div>
                
                <p className="text-white text-sm font-quicksand mb-6 max-w-md leading-relaxed flex-1">
                  {testimonial.text}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {testimonial.badges.map((badge, i) => (
                    <div key={i} className="flex items-center gap-1 bg-white/90 text-black font-bold rounded-lg px-3 py-1 text-xs shadow">
                      <img src={badge.icon} alt="badge" className="w-3 h-3" />
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4">
          <button onClick={prev} className="bg-white text-pink-500 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-pink-100 active:scale-90 transition-all border-2 border-pink-200">
            <img src="/arrow.svg" alt="Previous" className="w-6 h-6" />
          </button>
          <button onClick={next} className="bg-white text-sky-500 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-sky-100 active:scale-90 transition-all border-2 border-sky-200">
            <img src="/arrow.svg" alt="Next" className="w-6 h-6 rotate-180" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-sky-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
