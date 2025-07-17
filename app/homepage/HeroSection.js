"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12 md:py-24 gap-8 md:gap-0 min-h-[70vh]">
      {/* Decorative Drone SVG Top Left */}
      <div className="hidden md:block absolute top-12 left-12 z-10 animate-ambient-float">
        <svg width="80" height="60" viewBox="0 0 100 100" fill="#ec4899" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.53 28.49a3.852 3.852 0 0 0-3.533 2.343C6.706 31.364-.029 32.257 0 32.955c.027.693 6.712.997 15.928.724c.32.862.936 1.58 1.738 2.027H16.17v2.742h-1.83a.874.874 0 0 0-.875.874v1.954c0 .483.391.874.874.874h12.316c3.103.73 3.45 1.843 5.774 3.88c-.38 2.113-.94 4.42-1.378 6.414v16.973a2.092 2.092 0 1 0 4.185 0V61.21c-.048-6.9 1.066-9.69 4.905-15.031l.965-.448c0 4.146 2.866 4.395 6.908 5.32h-3.036c-.924 0-1.674.75-1.674 1.675v10c0 .924.75 1.674 1.674 1.674h10.044c.924 0 1.674-.75 1.674-1.674v-10c0-.925-.75-1.674-1.674-1.674h-3.033c4.041-.928 6.905-1.176 6.905-5.321l.965.448c4.857 5.026 4.905 8.447 4.905 15.03v8.207a2.092 2.092 0 0 0 4.185 0V52.444c-.513-2.191-1.062-4.487-1.58-6.762c2.199-2.155 3.101-2.64 5.956-3.532h12.336a.874.874 0 0 0 .874-.874v-1.954a.874.874 0 0 0-.874-.874H83.83v-2.742h-1.496a3.852 3.852 0 0 0 1.738-2.027c9.216.273 15.901-.031 15.928-.724c.029-.698-6.706-1.59-15.997-2.122a3.852 3.852 0 0 0-6.943-.302c-9.307-.283-16.103.018-16.142.716c-.029.693 6.615 1.58 15.827 2.112a3.852 3.852 0 0 0 1.839 2.347h-1.496v2.742C67.654 38.426 60.352 33.685 50 33.49c-10.003.212-18.38 4.958-27.088 4.958v-2.742h-1.496a3.852 3.852 0 0 0 1.839-2.347c9.212-.532 15.856-1.42 15.827-2.112c-.039-.698-6.835-1-16.142-.716a3.852 3.852 0 0 0-3.41-2.04zM50 53.503c2.347 0 4.276 1.929 4.276 4.276c0 2.347-1.929 4.277-4.276 4.277c-2.347 0-4.278-1.93-4.278-4.277c0-2.347 1.93-4.276 4.278-4.276zm0 2.51c-.99 0-1.767.776-1.767 1.766s.777 1.766 1.767 1.766c.99 0 1.765-.776 1.765-1.766S50.99 56.013 50 56.013z" fill="#ec4899"/>
        </svg>
      </div>
      {/* Decorative Drone SVG Bottom Right */}
      <div className="hidden md:block absolute bottom-8 right-24 z-10 animate-ambient-float">
        <svg width="80" height="60" viewBox="0 0 100 100" fill="#ec4899" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.53 28.49a3.852 3.852 0 0 0-3.533 2.343C6.706 31.364-.029 32.257 0 32.955c.027.693 6.712.997 15.928.724c.32.862.936 1.58 1.738 2.027H16.17v2.742h-1.83a.874.874 0 0 0-.875.874v1.954c0 .483.391.874.874.874h12.316c3.103.73 3.45 1.843 5.774 3.88c-.38 2.113-.94 4.42-1.378 6.414v16.973a2.092 2.092 0 1 0 4.185 0V61.21c-.048-6.9 1.066-9.69 4.905-15.031l.965-.448c0 4.146 2.866 4.395 6.908 5.32h-3.036c-.924 0-1.674.75-1.674 1.675v10c0 .924.75 1.674 1.674 1.674h10.044c.924 0 1.674-.75 1.674-1.674v-10c0-.925-.75-1.674-1.674-1.674h-3.033c4.041-.928 6.905-1.176 6.905-5.321l.965.448c4.857 5.026 4.905 8.447 4.905 15.03v8.207a2.092 2.092 0 0 0 4.185 0V52.444c-.513-2.191-1.062-4.487-1.58-6.762c2.199-2.155 3.101-2.64 5.956-3.532h12.336a.874.874 0 0 0 .874-.874v-1.954a.874.874 0 0 0-.874-.874H83.83v-2.742h-1.496a3.852 3.852 0 0 0 1.738-2.027c9.216.273 15.901-.031 15.928-.724c.029-.698-6.706-1.59-15.997-2.122a3.852 3.852 0 0 0-6.943-.302c-9.307-.283-16.103.018-16.142.716c-.029.693 6.615 1.58 15.827 2.112a3.852 3.852 0 0 0 1.839 2.347h-1.496v2.742C67.654 38.426 60.352 33.685 50 33.49c-10.003.212-18.38 4.958-27.088 4.958v-2.742h-1.496a3.852 3.852 0 0 0 1.839-2.347c9.212-.532 15.856-1.42 15.827-2.112c-.039-.698-6.835-1-16.142-.716a3.852 3.852 0 0 0-3.41-2.04zM50 53.503c2.347 0 4.276 1.929 4.276 4.276c0 2.347-1.929 4.277-4.276 4.277c-2.347 0-4.278-1.93-4.278-4.277c0-2.347 1.93-4.276 4.278-4.276zm0 2.51c-.99 0-1.767.776-1.767 1.766s.777 1.766 1.767 1.766c.99 0 1.765-.776 1.765-1.766S50.99 56.013 50 56.013z" fill="#ec4899"/>
        </svg>
      </div>
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center relative min-w-[320px]">
        {/* Organic Blob Shape */}
        <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[370px] h-[300px] md:w-[420px] md:h-[340px] -left-4 md:left-0 z-0">
          <path d="M60 60 Q210 0 360 60 Q420 170 360 280 Q210 340 60 280 Q0 170 60 60Z" fill="#FFA726"/>
        </svg>
        <div className="relative w-[320px] h-[240px] md:w-[370px] md:h-[270px] rounded-[60%_40%_40%_60%/60%_40%_60%_40%] overflow-hidden shadow-strong z-10">
          <Image src="/about-img.webp" alt="Kids learning STEM" fill className="object-cover animate-ambient-zoom" priority />
        </div>
        {/* Decorative Dot */}
        <div className="absolute top-2 left-1/2 w-8 h-8 bg-orange-300 rounded-full z-20" />
        <div className="absolute bottom-6 right-8 w-4 h-4 bg-orange-400 rounded-full z-20" />
      </div>
      {/* Right: Text Content */}
      <div className="flex-1 flex flex-col items-start justify-center pl-0 md:pl-16 mt-12 md:mt-0 relative z-20">
        <div className="flex items-center gap-2 mb-2">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5l-10-5V17a2 2 0 002 2h16a2 2 0 002-2v-6.5l-10 5z" stroke="#888" strokeWidth="1.5"/></svg>
          <span className="text-pink-600 font-bold text-lg font-bubblegum">About Us</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight font-fredoka">
          We Nurture Curiosity & Essential Skills!
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl font-quicksand">
          At STEM Orbit, we spark curiosity and empower young minds through hands-on STEM learning. Our programs blend creativity, collaboration, and real-world problem-solving—preparing students for a future driven by innovation and technology.
        </p>
        <button className="px-8 py-3 bg-pink-600 text-white font-semibold text-lg rounded-full shadow-soft hover:bg-pink-700 transition-all duration-300 font-fredoka">
          Read More
        </button>
        {/* Decorative Boy Image */}
        
      </div>
      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-8 z-0">
        <svg viewBox="0 0 600 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 20 Q50 0 100 20 T200 20 T300 20 T400 20 T500 20 T600 20" stroke="#3B82F6" strokeWidth="3" fill="none"/>
        </svg>
      </div>
    </section>
  );
} 