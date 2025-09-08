import React from "react";

export default function SassyContactSection() {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center text-center bg-white">
      <h2 className="text-4xl md:text-5xl font-comicneue font-extrabold text-pink-600 mb-6 drop-shadow-lg">
        Do you have a question or you want to connect?
      </h2>
      <p className="text-xl font-bubblegum text-cyan-800 mb-8 max-w-2xl mx-auto">
        We're here to help! Whether you have a query, need more information, or just want to start a conversation, our team is ready to assist you. Reach out and let's make something great together.
      </p>
      <a href="/contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-comicneue text-xl py-4 px-10 rounded-full shadow-lg transition-all duration-200">
        Contact Us
      </a>
    </section>
  );
} 