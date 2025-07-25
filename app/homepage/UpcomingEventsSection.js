import React from "react";

import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const UpcomingEvents = () => {
  return (
    <section className="relative bg-sky-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-indigo-900 mb-4 leading-tight">
            🎉 Upcoming <br />
            <span className="text-pink-600">STEM-tastic</span> Events!
          </h2>
          <p className="text-lg text-indigo-800 mb-6">
            Get ready to explore, build, and create with exciting activities in robotics, AI,
            3D printing, and more. Join us and spark your imagination!
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300">
            See Full Schedule
          </button>
        </div>

        {/* Right Illustration + Event Cards */}
        <div className="lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3279/3279336.png"
            alt="Upcoming Events"
            className="w-72 h-auto drop-shadow-xl"
          />

          {/* Event Cards */}
          <div className="flex flex-col gap-4 ml-4">
            {[
              { date: "Aug 05, 2025", title: "AI Robot Workshop" },
              { date: "Aug 12, 2025", title: "3D Printing Lab Day" },
              { date: "Aug 19, 2025", title: "STEM Game Jam" },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-[#0A6375] text-white rounded-2xl shadow-lg p-6 w-72 flex items-start gap-4"
              >
                <CalendarDaysIcon className="h-8 w-8 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold">{event.date}</p>
                  <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#7dd3fc"
            fillOpacity="1"
            d="M0,128L40,138.7C80,149,160,171,240,160C320,149,400,107,480,96C560,85,640,107,720,112C800,117,880,107,960,106.7C1040,107,1120,117,1200,112C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default UpcomingEvents;
