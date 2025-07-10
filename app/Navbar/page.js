"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white border-b border-gray-200 sticky top-0 z-50 text-black">
      <div className="font-bold text-lg tracking-tight">STEMOrbit</div>
      <div className="flex-1 flex justify-center">
        <DynamicNavImage />
      </div>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/robotics-labs" className="hover:underline">Robotics Labs</a></li>
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        <li><a href="/careers" className="hover:underline">Careers</a></li>
      </ul>
    </nav>
  );
}

function DynamicNavImage() {
  const [rotation, setRotation] = useState(0);
  const [showRotating, setShowRotating] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show rotating image immediately when scroll happens
      if (currentScrollY > 0) {
        setShowRotating(true);
      } else {
        setShowRotating(false);
      }
      
      // Update rotation
      setRotation(currentScrollY * 0.1);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Logo - fades out when scrolling */}
      <img
        src="/logo.svg"
                      alt="STEMOrbit Logo"
        style={{
          width: 80,
          height: 80,
          opacity: showRotating ? 0 : 1,
          transform: showRotating ? 'scale(0.8) rotate(-10deg)' : 'scale(1) rotate(0deg)',
          transition: 'all 0.5s ease-in-out',
          position: 'absolute'
        }}
      />
      
      {/* Rotating Image - fades in when scrolling */}
      <img
        src="/favicon.svg"
        alt="Rotating Floating"
        style={{
          width: 80,
          height: 80,
          opacity: showRotating ? 1 : 0,
          transform: `scale(${showRotating ? 1 : 0.8}) rotate(${rotation}deg)`,
          transition: 'all 0.5s ease-in-out',
          position: 'absolute'
        }}
      />
    </div>
  );
} 