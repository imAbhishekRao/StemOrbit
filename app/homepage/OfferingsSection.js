import React from 'react';

export default function OfferingsSection() {
  const services = [
    {
      id: 1,
      title: "STEM Classes (Grade 1-5)",
      description: "Fun and engaging foundational STEM activities for young learners designed for curious minds.",
      points: [
        "Simple robotics and basic coding",
        "Creative building activities",
        "Hands-on science experiments",
        "Age-appropriate learning modules"
      ],
      emoji: "📚",
      cardColor: "bg-sky-300",
      titleColor: "text-sky-800",
      textColor: "text-sky-900",
      borderColor: "border-white",
      buttonColor: "bg-sky-600 hover:bg-sky-700",
      buttonTextColor: "text-white"
    },
    {
      id: 2,
      title: "STEM Classes (Grade 6-12)",
      description: "Advanced STEM programs for middle and high school students covering cutting-edge technologies.",
      points: [
        "Robotics and 3D design",
        "AI, IoT, and coding",
        "Game development",
        "Drone technology"
      ],
      emoji: "💻",
      cardColor: "bg-pink-400",
      titleColor: "text-white",
      textColor: "text-pink-50",
      borderColor: "border-pink-600",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      buttonTextColor: "text-white"
    },
    {
      id: 3,
      title: "STEM/Atal Tinkering Lab Setup",
      description: "Complete support for schools setting up ATLs aligned with NITI Aayog's innovation vision.",
      points: [
        "Complete lab setup support",
        "Equipment procurement",
        "Curriculum alignment",
        "Teacher training included"
      ],
      emoji: "🧰",
      cardColor: "bg-yellow-300",
      titleColor: "text-yellow-800",
      textColor: "text-yellow-900",
      borderColor: "border-white",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      buttonTextColor: "text-yellow-900"
    },
    {
      id: 4,
      title: "School Sessions",
      description: "Customized curriculum sessions with interactive STEM activities for enhanced learning.",
      points: [
        "Interactive STEM activities",
        "Hands-on demonstrations",
        "Practical experiments",
        "Customized curriculum"
      ],
      emoji: "🏫",
      cardColor: "bg-sky-300",
      titleColor: "text-sky-800",
      textColor: "text-sky-900",
      borderColor: "border-white",
      buttonColor: "bg-sky-600 hover:bg-sky-700",
      buttonTextColor: "text-white"
    },
    {
      id: 5,
      title: "Technical Event Support",
      description: "Complete end-to-end support for organizing technical events with seamless coordination.",
      points: [
        "Event planning and coordination",
        "Resource procurement",
        "Expert mentorship",
        "Seamless execution"
      ],
      emoji: "🎯",
      cardColor: "bg-pink-400",
      titleColor: "text-white",
      textColor: "text-pink-50",
      borderColor: "border-pink-600",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      buttonTextColor: "text-white"
    },
    {
      id: 6,
      title: "Technical Competition Support",
      description: "Complete support for technical competitions including training, resources, and mentorship.",
      points: [
        "Competition preparation training",
        "Resource and equipment support",
        "Expert mentorship and guidance",
        "Competition day coordination"
      ],
      emoji: "🏆",
      cardColor: "bg-sky-300",
      titleColor: "text-sky-800",
      textColor: "text-sky-900",
      borderColor: "border-white",
      buttonColor: "bg-sky-600 hover:bg-sky-700",
      buttonTextColor: "text-white"
    },
    {
      id: 7,
      title: "Teacher Training Program",
      description: "Comprehensive hands-on STEM modules with design thinking and computational skills.",
      points: [
        "3D printing and Drones",
        "IoT and Robotics",
        "Design thinking",
        "Computational skills"
      ],
      emoji: "👩‍🏫",
      cardColor: "bg-yellow-300",
      titleColor: "text-yellow-800",
      textColor: "text-yellow-900",
      borderColor: "border-white",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      buttonTextColor: "text-yellow-900"
    },
    {
      id: 8,
      title: "Skill Summer/Winter Camp",
      description: "Engaging camps featuring hands-on workshops at our state-of-the-art lab facility.",
      points: [
        "Hands-on workshops",
        "Project-based learning",
        "Team-building activities",
        "State-of-the-art facilities"
      ],
      emoji: "🏕️",
      cardColor: "bg-sky-300",
      titleColor: "text-sky-800",
      textColor: "text-sky-900",
      borderColor: "border-white",
      buttonColor: "bg-sky-600 hover:bg-sky-700",
      buttonTextColor: "text-white"
    },
    {
      id: 9,
      title: "Industrial Training Program",
      description: "Comprehensive six-week internship program with practical industry experience.",
      points: [
        "Six-week program",
        "Practical industry experience",
        "Professional mentorship",
        "Career development"
      ],
      emoji: "🏭",
      cardColor: "bg-pink-400",
      titleColor: "text-white",
      textColor: "text-pink-50",
      borderColor: "border-pink-600",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      buttonTextColor: "text-white"
    }
  ];

  return (
    <>
      <section className="offerings-section">
        {/* Animated Bubbles */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        
        <div className="container">
          <div className="title-wrapper">
            <h2 className="main-title">
              <span className="title-blue">What We</span> <span className="title-purple">Provide</span>
            </h2>
            <p className="subtitle">
              Comprehensive STEM education solutions for schools, teachers, and students.
            </p>
          </div>

           <div className="grid-container">
             {services.map((service) => (
               <div 
                 key={service.id} 
                 className={`flex flex-col items-center ${service.cardColor} rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 ${service.borderColor} hover:scale-105 transition-transform duration-300`}
               >
                 <div className="mb-2 text-xl sm:text-2xl">{service.emoji}</div>
                 <h3 className={`text-xl sm:text-2xl font-bold ${service.titleColor} mb-4`}>
                   {service.title}
                 </h3>
                 <div className={`text-sm sm:text-base ${service.textColor} mb-3 sm:mb-4 text-center`}>
                   {service.description}
                 </div>
                 <ul className={`text-left text-xs sm:text-sm ${service.textColor} mb-4 sm:mb-6 space-y-1 sm:space-y-2 font-['Bubblegum Sans',cursive]`}>
                   {service.points.map((point, index) => (
                     <li key={index} className="flex items-center gap-2">✅ {point}</li>
                   ))}
                 </ul>
                 <a
                   href={`https://wa.me/917009594410?text=${encodeURIComponent(`Hi! I'm interested in learning more about ${service.title}. Could you please provide more details?`)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`w-full ${service.buttonColor} ${service.buttonTextColor} font-bold py-2 sm:py-2.5 px-4 rounded-xl shadow-md transition text-sm sm:text-base text-center block`}
                 >
                   Get started
                 </a>
               </div>
             ))}
        </div>
      </div>
    </section>

      {/* All styles are scoped to this component using styled-jsx */}
      <style jsx>{`
        .offerings-section {
          width: 100%;
          padding: 2rem 0;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%);
          font-family: sans-serif;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .offerings-section {
            padding: 3rem 0;
          }
        }
        @media (min-width: 1024px) {
          .offerings-section {
            padding: 4rem 0;
          }
        }
        .container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .title-wrapper {
          text-align: center;
          margin-bottom: 2rem;
          padding: 0 0.5rem;
        }
        @media (min-width: 640px) {
          .title-wrapper {
            margin-bottom: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .title-wrapper {
            margin-bottom: 4rem;
          }
        }
        .main-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.75rem;
          letter-spacing: -0.025em;
        }
        @media (min-width: 640px) {
          .main-title {
            font-size: 2rem;
          }
        }
        @media (min-width: 1024px) {
          .main-title {
            font-size: 2.25rem;
          }
        }
        .title-blue { color: #2563eb; }
        .title-purple { color: #9333ea; }
        .subtitle {
          font-size: 0.875rem;
          color: #4b5563;
          max-width: 48rem;
          margin: 0 auto;
          padding: 0 0.5rem;
        }
        @media (min-width: 640px) {
          .subtitle {
            font-size: 1rem;
          }
        }
        @media (min-width: 1024px) {
          .subtitle {
            font-size: 1.125rem;
          }
        }
         .grid-container {
           display: grid;
           grid-template-columns: repeat(1, minmax(0, 1fr));
           gap: 1rem;
           width: 100%;
           max-width: 80rem;
           margin: 0 auto;
           padding: 0 1rem;
         }
         @media (min-width: 640px) {
           .grid-container {
             grid-template-columns: repeat(2, minmax(0, 1fr));
             gap: 1.5rem;
           }
         }
         @media (min-width: 768px) {
           .grid-container {
             grid-template-columns: repeat(3, minmax(0, 1fr));
             gap: 2rem;
           }
         }
         @media (min-width: 1024px) {
           .grid-container {
             gap: 2rem;
           }
         }

         /* Bubble Animations */
         .bubble {
           position: absolute;
           border-radius: 50%;
           background: rgba(255, 255, 255, 0.3);
           animation: float 6s ease-in-out infinite;
         }
         .bubble:nth-child(1) {
           width: 60px;
           height: 60px;
           left: 10%;
           animation-delay: 0s;
           animation-duration: 8s;
         }
         .bubble:nth-child(2) {
           width: 40px;
           height: 40px;
           left: 20%;
           animation-delay: 2s;
           animation-duration: 6s;
         }
         .bubble:nth-child(3) {
           width: 80px;
           height: 80px;
           left: 30%;
           animation-delay: 4s;
           animation-duration: 10s;
         }
         .bubble:nth-child(4) {
           width: 50px;
           height: 50px;
           left: 70%;
           animation-delay: 1s;
           animation-duration: 7s;
         }
         .bubble:nth-child(5) {
           width: 70px;
           height: 70px;
           left: 80%;
           animation-delay: 3s;
           animation-duration: 9s;
         }
         .bubble:nth-child(6) {
           width: 35px;
           height: 35px;
           left: 90%;
           animation-delay: 5s;
           animation-duration: 5s;
         }
         .bubble:nth-child(7) {
           width: 45px;
           height: 45px;
           left: 50%;
           animation-delay: 2.5s;
           animation-duration: 8.5s;
         }
         .bubble:nth-child(8) {
           width: 65px;
           height: 65px;
           left: 60%;
           animation-delay: 1.5s;
           animation-duration: 7.5s;
         }

         @keyframes float {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
             opacity: 0.7;
           }
           25% {
             transform: translateY(-20px) rotate(90deg);
             opacity: 0.9;
           }
           50% {
             transform: translateY(-40px) rotate(180deg);
             opacity: 0.6;
           }
           75% {
             transform: translateY(-20px) rotate(270deg);
             opacity: 0.8;
           }
         }
      `}</style>
    </>
  );
}