import React from "react";

export default function SassyContactSection() {
  return (
    <section className="w-full py-6 sm:py-8 lg:py-10 flex flex-col items-center justify-center text-center bg-white px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-comicneue font-extrabold text-pink-600 mb-4 sm:mb-5 drop-shadow-lg">
        Do you have a question or you want to connect?
      </h2>
      <p className="text-base sm:text-lg lg:text-xl font-bubblegum text-cyan-800 mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
        We're here to help! Whether you have a query, need more information, or just want to start a conversation, our team is ready to assist you. Reach out and let's make something great together.
      </p>
      <a href="/contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-comicneue text-lg sm:text-xl py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg transition-all duration-200 hover:scale-105 transform">
        Contact Us
      </a>
    </section>
  );
} 