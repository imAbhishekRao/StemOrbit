import React from 'react';

export default function OfferingsSection() {
  const services = [
    {
      id: 1,
      title: "STEM Classes (Grade 1-12)",
      description: "Comprehensive technology sessions covering robotics, 3D design, AI, IoT, coding, game development, and drone operation for all grade levels.",
      emoji: "🔬",
      vector: "/stem-classes.svg",
      gradient: "linear-gradient(to right, #ef4444, #dc2626)",
      buttonColor: "#ef4444",
      cardBackground: "#fef2f2"
    },
    {
      id: 2,
      title: "STEM/Atal Tinkering Lab Setup",
      description: "Complete support for schools setting up ATLs with effective operation aligned with NITI Aayog's innovation vision and national goals.",
      emoji: "🏗️",
      vector: "/atl-lab.svg",
      gradient: "linear-gradient(to right, #ef4444, #dc2626)",
      buttonColor: "#ef4444",
      cardBackground: "#fef2f2"
    },
    {
      id: 3,
      title: "School Sessions",
      description: "Customized curriculum sessions with interactive STEM activities, hands-on demonstrations, and practical experiments for enhanced learning.",
      emoji: "🎓",
      vector: "/school-sessions.svg",
      gradient: "linear-gradient(to right, #f97316, #ea580c)",
      buttonColor: "#f97316",
      cardBackground: "#fff7ed"
    },
    {
      id: 4,
      title: "Technical Event Support",
      description: "Complete end-to-end support for organizing technical events including planning, resource procurement, mentorship, and seamless coordination.",
      emoji: "🎪",
      vector: "/technical-events.svg",
      gradient: "linear-gradient(to right, #06b6d4, #0891b2)",
      buttonColor: "#06b6d4",
      cardBackground: "#f0fdfa"
    },
    {
      id: 5,
      title: "Teacher Training Program",
      description: "Comprehensive hands-on STEM modules covering 3D printing, Drones, IoT, and Robotics with design thinking and computational skills.",
      emoji: "👩‍🏫",
      vector: "/teacher-training.svg",
      gradient: "linear-gradient(to right, #3b82f6, #2563eb)",
      buttonColor: "#3b82f6",
      cardBackground: "#eff6ff"
    },
    {
      id: 6,
      title: "Skill Summer/Winter Camp",
      description: "Engaging camps featuring hands-on workshops, project-based learning, and team-building activities at our state-of-the-art lab facility.",
      emoji: "🏕️",
      vector: "/summer-camp.svg",
      gradient: "linear-gradient(to right, #22c55e, #16a34a)",
      buttonColor: "#22c55e",
      cardBackground: "#f0fdf4"
    },
    {
      id: 7,
      title: "Technical Competition Support",
      description: "Expert coaching and mentoring for technical competitions with advanced problem-solving strategies, teamwork skills, and innovation focus.",
      emoji: "🏆",
      vector: "/competition-support.svg",
      gradient: "linear-gradient(to right, #a855f7, #9333ea)",
      buttonColor: "#a855f7",
      cardBackground: "#faf5ff"
    },
    {
      id: 8,
      title: "Industrial Training Program",
      description: "Comprehensive six-week internship program providing engineering students with practical industry experience and professional mentorship.",
      emoji: "🏭",
      vector: "/industrial-training.svg",
      gradient: "linear-gradient(to right, #6366f1, #4f46e5)",
      buttonColor: "#6366f1",
      cardBackground: "#eef2ff"
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
               <div key={service.id} className="service-item">
                 {/* Icon Circle - Outside Card */}
                 <div className="icon-wrapper">
                   <div className="icon-circle" style={{ backgroundImage: service.gradient }}>
                     <div className="icon-content">
                       <div className="emoji-icon">{service.emoji}</div>
                       
                     </div>
                   </div>
          </div>

                 {/* Connecting Line */}
                 <div className="connecting-line"></div>
                 
                 {/* Card Content */}
                 <div className="service-card" style={{ backgroundColor: service.cardBackground }}>
                   <h3 className="card-title">
                     {service.title}
                   </h3>
                   
                   <p className="card-description">
                     {service.description}
                   </p>
          </div>

                 {/* More Info Button - Outside Card */}
                 <div className="button-wrapper">
                   <button className="more-info-btn" style={{ backgroundColor: service.buttonColor }}>
                     More Info
                   </button>
                 </div>
               </div>
             ))}
        </div>
      </div>
    </section>

      {/* All styles are scoped to this component using styled-jsx */}
      <style jsx>{`
        .offerings-section {
          width: 100%;
          padding: 4rem 0;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%);
          font-family: sans-serif;
          position: relative;
          overflow: hidden;
        }
        .container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .title-wrapper {
          text-align: center;
          margin-bottom: 4rem;
        }
        .main-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }
        .title-blue { color: #2563eb; }
        .title-purple { color: #9333ea; }
        .subtitle {
          font-size: 1.125rem;
          color: #4b5563;
          max-width: 48rem;
          margin: 0 auto;
        }
         .grid-container {
           display: grid;
           grid-template-columns: repeat(1, minmax(0, 1fr));
           gap: 3rem;
         }
         .service-item {
           display: flex;
           flex-direction: column;
           align-items: center;
           position: relative;
           height: 100%;
         }
         .service-card {
           border: 2px solid #374151;
           border-radius: 0.75rem;
           padding: 1rem;
           display: flex;
           flex-direction: column;
           align-items: center;
           transition: all 0.3s ease;
           width: 100%;
           max-width: 280px;
           height: 200px;
           justify-content: space-between;
         }
         .service-card:hover {
           border-color: #3b82f6;
           transform: translateY(-0.25rem);
         }
         .icon-wrapper {
           position: relative;
           width: 6rem;
           height: 6rem;
           margin-bottom: 1rem;
           z-index: 10;
         }
         .connecting-line {
           width: 2px;
           height: 2rem;
           background-color: #374151;
           margin-bottom: 1rem;
           position: relative;
         }
         .connecting-line::before {
           content: '';
           position: absolute;
           top: 0;
           left: 50%;
           transform: translateX(-50%);
           width: 0;
           height: 0;
           border-left: 4px solid transparent;
           border-right: 4px solid transparent;
           border-top: 6px solid #374151;
         }
        .icon-circle {
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          animation: childish-bounce 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        .icon-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }
        .emoji-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
        .vector-icon {
          width: 1.5rem;
          height: 1.5rem;
          object-fit: contain;
        }
        .card-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #1f2937;
          text-align: center;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
         .card-description {
           color: #4b5563;
           font-size: 0.75rem;
           text-align: center;
           line-height: 1.4;
           margin-bottom: 0;
           flex-grow: 1;
           display: flex;
           align-items: center;
           justify-content: center;
           height: 100%;
         }
         .button-wrapper {
           text-align: center;
           margin-top: 1.5rem;
           width: 100%;
         }
        .more-info-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
        .more-info-btn:hover {
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
          transform: translateY(-2px);
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

        @keyframes childish-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04) rotate(-2deg);
          }
        }

         /* Responsive Breakpoints */
         @media (min-width: 640px) {
           .grid-container {
             grid-template-columns: repeat(2, minmax(0, 1fr));
             gap: 2rem;
           }
           .main-title {
              font-size: 2rem;
           }
           .card-title {
             font-size: 0.9rem;
           }
           .card-description {
             font-size: 0.8rem;
           }
           .service-card {
             height: 200px;
             padding: 1rem;
           }
         }
         @media (min-width: 768px) {
           .grid-container {
             grid-template-columns: repeat(2, minmax(0, 1fr));
             gap: 2.5rem;
           }
           .main-title {
              font-size: 2.25rem;
           }
           .card-title {
             font-size: 0.95rem;
           }
           .card-description {
             font-size: 0.85rem;
           }
           .service-card {
             height: 220px;
             padding: 1.25rem;
           }
         }
         @media (min-width: 1024px) {
           .grid-container {
             grid-template-columns: repeat(4, minmax(0, 1fr));
             gap: 2rem;
           }
            .main-title {
              font-size: 2.5rem;
           }
           .card-title {
             font-size: 0.9rem;
           }
           .card-description {
             font-size: 0.8rem;
           }
           .service-card {
             height: 200px;
             padding: 1rem;
           }
         }
         @media (min-width: 1280px) {
           .grid-container {
             grid-template-columns: repeat(4, minmax(0, 1fr));
             gap: 2.5rem;
           }
           .main-title {
              font-size: 2.75rem;
           }
           .card-title {
             font-size: 1rem;
           }
           .card-description {
             font-size: 0.85rem;
           }
           .service-card {
             height: 220px;
             padding: 1.25rem;
           }
         }
         @media (min-width: 1536px) {
           .grid-container {
             grid-template-columns: repeat(4, minmax(0, 1fr));
             gap: 3rem;
           }
            .main-title {
              font-size: 3rem;
           }
           .card-title {
             font-size: 1.1rem;
           }
           .card-description {
             font-size: 0.9rem;
           }
           .service-card {
             height: 240px;
             padding: 1.5rem;
           }
         }
      `}</style>
    </>
  );
}