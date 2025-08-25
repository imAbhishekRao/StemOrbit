"use client";
import { useEffect, useState } from "react";

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
    <nav
      className={`w-full fixed top-0 z-50 transition-colors duration-300 py-4 ${
        scrolled ? "bg-white/95 border-b border-gray-200 backdrop-blur" : "bg-transparent border-b-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <DynamicNavImage />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-6 bubblegum-sans">
              <a href="/" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">Home</a>
              <div className="relative group">
                <a href="/our-lab-offerings" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none flex items-center gap-1">
                  <span>Our Offerings</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-none shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a href="/courses" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 text-base font-bold rounded-none">Courses</a>
                  <a href="/our-lab-offerings" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 text-base font-bold rounded-none">Our Lab Offerings</a>
                  <a href="/hop-and-learn" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 text-base font-bold rounded-none">HOP and Learn</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 text-base font-bold rounded-none">Option 4</a>
                </div>
              </div>
              <a href="/gallery" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">Gallery</a>
              <a href="/about" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">About Us</a>
              <a href="/contact" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">Contact Us</a>
              <a href="/careers" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-bold transition-colors rounded-none">Careers</a>
            </div>
          </div>

          {/* Right Side Actions */}
          {/* Right Side Actions */}
          <div class="hidden md:flex items-center gap-3 min-h-0 bubblegum-sans">
            <button class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-base lg:text-lg font-medium transition-colors">
              Enquire Now
            </button>
          </div>

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
            <div className="px-2 pt-2 pb-3 space-y-2 border-t border-pink-200 bg-white bg-opacity-90 rounded-b-none bubblegum-sans">
  <a href="/" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-bold transition-all duration-300 rounded-none shadow-pink-100 hover:shadow-pink-300 hover:-translate-y-1 bubblegum-sans">Home</a>
  <a href="/our-lab-offerings" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-bold transition-all duration-300 rounded-none shadow-blue-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">Our Offerings</a>
  <a href="/hop-and-learn" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-bold transition-all duration-300 rounded-none shadow-pink-100 hover:shadow-pink-300 hover:-translate-y-1 bubblegum-sans ml-4">- HOP and Learn</a>
  <a href="/gallery" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-bold transition-all duration-300 rounded-none shadow-purple-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">Gallery</a>
  <a href="/about" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-bold transition-all duration-300 rounded-none shadow-yellow-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">About Us</a>
  <a href="/contact" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-bold transition-all duration-300 rounded-none shadow-green-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">Contact Us</a>
  <a href="/careers" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-bold transition-all duration-300 rounded-none shadow-orange-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">Careers</a>
  {/* Mobile Actions */}
  <div className="border-t border-pink-200 pt-3 mt-3">
    <div className="flex items-center justify-between px-3 py-2">
      <span className="text-gray-700 text-lg font-medium bubblegum-sans">🙋‍♂️ Ask Us</span>
      <div className="flex space-x-3">
        <button className="text-gray-700 hover:text-pink-500 transition-all duration-300 p-3 bg-white bg-opacity-80 rounded-none shadow hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-gray-700 hover:text-pink-500 transition-all duration-300 p-3 bg-white bg-opacity-80 rounded-none shadow hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
          </div>
        )}
      </div>
    </nav>
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
    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
      {/* Default Logo (visible at top of page) */}
      <img
        src="/logo.svg"
        alt="STEMOrbit Logo"
        style={{
          width: 56,
          height: 56,
          opacity: showRotating ? 0 : 1,
          transform: showRotating ? "scale(0.9) rotate(-8deg)" : "scale(1) rotate(0deg)",
          transition: "opacity 300ms ease, transform 300ms ease",
          position: "absolute"
        }}
      />

      {/* Rotating Icon (visible when scrolling) */}
      <img
        src="/favicon.svg"
        alt="Rotating Icon"
        style={{
          width: 56,
          height: 56,
          opacity: showRotating ? 1 : 0,
          transform: `scale(${showRotating ? 1 : 0.9}) rotate(${rotation}deg)`,
          transition: "opacity 300ms ease, transform 300ms ease",
          position: "absolute"
        }}
      />
    </div>
  );
}