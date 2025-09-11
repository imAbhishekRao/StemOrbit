import React, { useState } from "react";
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
  const t = testimonials[current];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-[#fafafa] flex flex-col items-center justify-center px-4 sm:px-6">
      {/* Heading with strawberry icon and playful text */}
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <span className="text-pink-500 font-bold text-lg font-bubblegum mb-2">Testimonials</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center font-fredoka text-sky-500">Voices from Our Partner Schools</h2>
      </div>
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Card */}
        <div className="relative rounded-2xl sm:rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 lg:pl-40 py-8 sm:py-10 lg:py-12 w-full min-h-[400px] sm:min-h-[360px] lg:min-h-[340px] transition-colors duration-500" style={{ background: t.color }}>
          {/* Overlapping circular image */}
          <div className="absolute -top-16 sm:-top-20 left-1/2 lg:left-12 -translate-x-1/2 lg:translate-x-0 z-20">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 sm:border-8 border-white overflow-hidden shadow-lg bg-white">
              <Image src={t.img} alt={t.name} width={160} height={160} className="object-cover w-full h-full" />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start mt-20 sm:mt-24 lg:mt-0 lg:ml-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-1 mb-2">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <span className="text-white text-3xl sm:text-5xl leading-none">"</span>
                <div>
                  <span className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-fredoka">{t.name}</span>
                  <div className="text-white text-xs sm:text-sm opacity-90 mt-1 font-medium">{t.subtitle}</div>
                </div>
              </div>
            </div>
            <p className="text-white text-sm sm:text-base lg:text-lg font-quicksand mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl leading-relaxed">
              {t.text}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mt-auto justify-center lg:justify-start">
              {t.badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/90 text-black font-bold rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm lg:text-base shadow">
                  <img src={badge.icon} alt="badge" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation buttons */}
          <button onClick={prev} className="absolute -left-2 sm:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white text-pink-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow hover:bg-pink-100 active:scale-90 transition-all border-2 border-pink-200 z-20">
            <img src="/arrow.svg" alt="Previous" className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <button onClick={next} className="absolute -right-2 sm:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white text-sky-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow hover:bg-sky-100 active:scale-90 transition-all border-2 border-sky-200 z-20">
            <img src="/arrow.svg" alt="Next" className="w-5 h-5 sm:w-7 sm:h-7 rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}
