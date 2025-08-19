"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 h-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center h-24 md:h-24">
            <div className="flex-shrink-0 flex items-center">
              <DynamicNavImage />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-6 bubblegum-sans">
  <a href="/" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-medium transition-colors rounded-md">Home</a>
  <a href="/our-lab-offerings" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-medium transition-colors rounded-md">Our Lab Offerings</a>
  <a href="/gallery" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-medium transition-colors rounded-md">Gallery</a>
  <a href="/about" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-medium transition-colors rounded-md">About Us</a>
  <a href="/contact" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-medium transition-colors rounded-md">Contact Us</a>
  <a href="/careers" className="text-gray-700 hover:text-pink-500 px-2 py-1 text-base lg:text-lg font-medium transition-colors rounded-md">Careers</a>
</div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3 min-h-0 bubblegum-sans">
  <button className="flex items-center gap-1 text-gray-700 hover:text-pink-500 transition-colors px-3 py-2 text-base lg:text-lg font-medium">
    <span>🙋‍♂️</span>
    <span>Ask Us</span>
  </button>
  <button className="text-gray-700 hover:text-pink-500 transition-colors p-2">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>
  <button className="text-gray-700 hover:text-pink-500 transition-colors p-2">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
    </svg>
  </button>
  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-base lg:text-lg font-medium transition-colors">
    Enquire Now
  </button>
</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-2 border-t border-pink-200 bg-white bg-opacity-90 rounded-b-3xl bubblegum-sans">
  <a href="/" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl shadow-pink-100 hover:shadow-pink-300 hover:-translate-y-1 bubblegum-sans">Home</a>
  <a href="/our-lab-offerings" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl shadow-blue-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">Our Lab Offerings</a>
  <a href="/gallery" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl shadow-purple-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">Gallery</a>
  <a href="/about" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl shadow-yellow-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">About Us</a>
  <a href="/contact" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl shadow-green-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">Contact Us</a>
  <a href="/careers" className="text-gray-700 hover:text-pink-500 block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl shadow-orange-100 hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">Careers</a>
  {/* Mobile Actions */}
  <div className="border-t border-pink-200 pt-3 mt-3">
    <div className="flex items-center justify-between px-3 py-2">
      <span className="text-gray-700 text-lg font-medium bubblegum-sans">🙋‍♂️ Ask Us</span>
      <div className="flex space-x-3">
        <button className="text-gray-700 hover:text-pink-500 transition-all duration-300 p-3 bg-white bg-opacity-80 rounded-xl shadow hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-gray-700 hover:text-pink-500 transition-all duration-300 p-3 bg-white bg-opacity-80 rounded-xl shadow hover:shadow-pink-200 hover:-translate-y-1 bubblegum-sans">
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
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Default Logo (visible at top of page) */}
      <img
        src="/logo.svg"
        alt="STEMOrbit Logo"
        style={{
          width: 64,
          height: 64,
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
          width: 64,
          height: 64,
          opacity: showRotating ? 1 : 0,
          transform: `scale(${showRotating ? 1 : 0.9}) rotate(${rotation}deg)`,
          transition: "opacity 300ms ease, transform 300ms ease",
          position: "absolute"
        }}
      />
    </div>
  );
}