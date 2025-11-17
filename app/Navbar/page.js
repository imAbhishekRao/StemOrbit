
"use client";
import { useEffect, useState } from "react";
import { handleBookCallClick } from "../../lib/calendly";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Strip - Hidden on mobile */}
      <div className={`hidden md:block w-full fixed top-0 z-50 bg-pink-400 text-white transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between py-2 text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>stemorbit@gmail.com</span>
              </div>
              <div className="w-px h-4 bg-white opacity-50"></div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 160 501 0684</span>
              </div>
            </div>

            {/* Right Side - Navigation Links and Enquire Button */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <a href="/blogs" className="hover:text-pink-200 transition-colors">Blogs</a>
                <div className="w-px h-4 bg-white opacity-50"></div>
                <a href="/careers" className="hover:text-pink-200 transition-colors">Career</a>
                <div className="w-px h-4 bg-white opacity-50"></div>
                <a href="/contact" className="hover:text-pink-200 transition-colors">Contact Us</a>
                <div className="w-px h-4 bg-white opacity-50"></div>
                <a href="/about" className="hover:text-pink-200 transition-colors">About Us</a>
                <div className="w-px h-4 bg-white opacity-50"></div>
                <a href="/gallery" className="hover:text-pink-200 transition-colors">Gallery</a>
              </div>
              <div className="w-px h-4 bg-white opacity-50"></div>
              <button onClick={handleBookCallClick} className="bg-white text-pink-500 hover:bg-pink-50 px-4 py-1 rounded text-sm font-medium transition-colors">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full fixed z-40 transition-all duration-300 bg-white border-b border-gray-200 ${scrolled ? 'top-0' : 'md:top-10 top-0'}`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="block">
                <DynamicNavImage />
              </a>
            </div>
            <span className="md:hidden ml-2 text-xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              STEMOrbit
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-6 bubblegum-sans">
              <a href="/whats-stem-lab" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">STEM Lab</a>
              <a href="/courses" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">Courses</a>
              <a href="/our-lab-offerings" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">For School</a>
              <a href="/3d-printing" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">3D Printing</a>
              <a href="/summercamp" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">STEM Camps</a>
              <a href="/what-we-provide" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">Programs and Services</a>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/login"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Login
            </a>
            <button className="text-gray-700 hover:text-pink-500 transition-all duration-300 p-2 bg-white bg-opacity-80 rounded-lg shadow hover:shadow-pink-200 hover:-translate-y-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
              </svg>
            </button>
          </div>

          {/* Right Side Actions - Removed Enquire Now button as it's now in top strip */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-none transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-0 pt-2 pb-4 space-y-1 border-t border-gray-200 bg-white rounded-b-none overflow-y-auto max-h-[calc(100vh-80px)]">
              {/* Top Strip Links - Mobile Only */}
              <div className="border-b border-gray-200 pb-3 mb-3">
                <div className="px-4 py-2 space-y-1">
                  <a 
                    href="/blogs" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-medium transition-colors rounded-md"
                  >
                    Blogs
                  </a>
                  <a 
                    href="/careers" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-medium transition-colors rounded-md"
                  >
                    Career
                  </a>
                  <a 
                    href="/contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-medium transition-colors rounded-md"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="/about" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-medium transition-colors rounded-md"
                  >
                    About Us
                  </a>
                  <a 
                    href="/gallery" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-medium transition-colors rounded-md"
                  >
                    Gallery
                  </a>
                </div>
              </div>
              
              {/* Main Navigation Links */}
              <div className="px-4 space-y-1">
                <a 
                  href="/whats-stem-lab" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-bold transition-colors rounded-md bubblegum-sans"
                >
                  STEM Lab
                </a>
                <a 
                  href="/courses" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-bold transition-colors rounded-md bubblegum-sans"
                >
                  Courses
                </a>
                <a 
                  href="/our-lab-offerings" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-bold transition-colors rounded-md bubblegum-sans"
                >
                  For School
                </a>
                <a 
                  href="/3d-printing" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-bold transition-colors rounded-md bubblegum-sans"
                >
                  3D Printing
                </a>
                <a 
                  href="/summercamp" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-bold transition-colors rounded-md bubblegum-sans"
                >
                  STEM Camps
                </a>
                <a 
                  href="/what-we-provide" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-500 hover:bg-pink-50 block px-4 py-2.5 text-base font-bold transition-colors rounded-md bubblegum-sans"
                >
                  Programs and Services
                </a>
              </div>
              
  {/* Mobile Actions */}
              <div className="border-t border-gray-200 pt-3 mt-3 px-4 space-y-3">
                <a
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full block text-center bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Login
                </a>
                <button 
                  onClick={() => {
                    handleBookCallClick();
                    setIsMobileMenuOpen(false);
                  }} 
                  className="w-full bg-pink-500 text-white hover:bg-pink-600 px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enquire Now
        </button>
  </div>
</div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}

function DynamicNavImage() {
  const [rotation, setRotation] = useState(0);
  const [showRotating, setShowRotating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      setShowRotating(currentScrollY > 0);
      setRotation(currentScrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24">
      {/* Default Logo (visible at top of page) */}
      <img
        src="/With Strock (2).png"
        alt="STEMOrbit Logo"
        style={{
          width: "100%",
          height: "100%",
          opacity: showRotating ? 0 : 1,
          transform: showRotating ? "scale(0.9) rotate(-8deg)" : "scale(1) rotate(0deg)",
          transition: "opacity 300ms ease, transform 300ms ease",
          position: "absolute",
          objectFit: "contain"
        }}
      />

      {/* Rotating Icon (visible when scrolling) */}
      <img
        src="/favicon.svg"
        alt="Rotating Icon"
        style={{
          width: "60%",
          height: "60%",
          opacity: showRotating ? 1 : 0,
          transform: `scale(${showRotating ? 1 : 0.9}) rotate(${rotation}deg)`,
          transition: "opacity 300ms ease, transform 300ms ease",
          position: "absolute",
          objectFit: "contain",
          top: "20%",
          left: "20%"
        }}
      />
    </div>
  );
}