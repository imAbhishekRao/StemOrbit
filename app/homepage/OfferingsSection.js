import React from 'react';

export default function OfferingsSection() {
  const services = [
    {
      id: 1,
      title: "STEM Classes (Grade 1-12)",
      description: "Engaging technology sessions in robotics, 3D design, AI, IoT, coding, game development, and drone operation for all grade levels.",
      emoji: "🔬",
      vector: "/stem-classes.svg",
      gradient: "linear-gradient(to right, #ef4444, #dc2626)",
      buttonColor: "#ef4444"
    },
    {
      id: 2,
      title: "STEM/Atal Tinkering Lab Setup",
      description: "Complete support for schools setting up ATLs with effective operation aligned with NITI Aayog's innovation vision for the nation.",
      emoji: "🏗️",
      vector: "/atl-lab.svg",
      gradient: "linear-gradient(to right, #ef4444, #dc2626)",
      buttonColor: "#ef4444"
    },
    {
      id: 3,
      title: "School Sessions",
      description: "Customized curriculum sessions integrating interactive STEM activities, demonstrations, and experiments for enhanced learning experiences.",
      emoji: "🎓",
      vector: "/school-sessions.svg",
      gradient: "linear-gradient(to right, #f97316, #ea580c)",
      buttonColor: "#f97316"
    },
    {
      id: 4,
      title: "Technical Event Support",
      description: "End-to-end support for organizing technical events including planning, resource procurement, mentorship, and seamless coordination.",
      emoji: "🎪",
      vector: "/technical-events.svg",
      gradient: "linear-gradient(to right, #06b6d4, #0891b2)",
      buttonColor: "#06b6d4"
    },
    {
      id: 5,
      title: "Teacher Training Program",
      description: "Hands-on STEM modules integrating 3D printing, Drones, IoT, and Robotics with design mindset and computational thinking skills.",
      emoji: "👩‍🏫",
      vector: "/teacher-training.svg",
      gradient: "linear-gradient(to right, #3b82f6, #2563eb)",
      buttonColor: "#3b82f6"
    },
    {
      id: 6,
      title: "Skill Summer/Winter Camp",
      description: "Exciting camps featuring hands-on workshops, project-based learning, and team-building activities at our technical lab facility.",
      emoji: "🏕️",
      vector: "/summer-camp.svg",
      gradient: "linear-gradient(to right, #22c55e, #16a34a)",
      buttonColor: "#22c55e"
    },
    {
      id: 7,
      title: "Technical Competition Support",
      description: "Specialized coaching and mentoring for technical competitions with problem-solving strategies, teamwork skills, and innovation focus.",
      emoji: "🏆",
      vector: "/competition-support.svg",
      gradient: "linear-gradient(to right, #a855f7, #9333ea)",
      buttonColor: "#a855f7"
    },
    {
      id: 8,
      title: "Industrial Training Program",
      description: "Six-week internship program offering engineering students practical industry experience, professional mentorship, and hands-on projects.",
      emoji: "🏭",
      vector: "/industrial-training.svg",
      gradient: "linear-gradient(to right, #6366f1, #4f46e5)",
      buttonColor: "#6366f1"
    }
  ];

  return (
    <>
      <section className="offerings-section">
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
                       <img 
                         src={service.vector} 
                         alt={service.title}
                         className="vector-icon"
                       />
                     </div>
                   </div>
          </div>

                 {/* Connecting Line */}
                 <div className="connecting-line"></div>
                 
                 {/* Card Content */}
                 <div className="service-card">
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
          background-color: #f9fafb;
          font-family: sans-serif;
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
         }
         .service-card {
           background-color: transparent;
           border: 2px solid #374151;
           border-radius: 0.75rem;
           padding: 1.5rem;
           display: flex;
           flex-direction: column;
           align-items: center;
           transition: all 0.3s ease;
           width: 100%;
           max-width: 300px;
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
          font-size: 1rem;
          font-weight: 700;
          color: #1f2937;
          text-align: center;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
         .card-description {
           color: #4b5563;
           font-size: 0.875rem;
           text-align: center;
           line-height: 1.6;
           margin-bottom: 0;
         }
         .button-wrapper {
           text-align: center;
           margin-top: 1rem;
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

        /* Animation */
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
             gap: 4rem;
           }
           .main-title {
              font-size: 2.25rem;
           }
         }
         @media (min-width: 1024px) {
           .grid-container {
             grid-template-columns: repeat(4, minmax(0, 1fr));
             gap: 3rem;
           }
            .main-title {
              font-size: 3rem;
           }
         }
      `}</style>
    </>
  );
}