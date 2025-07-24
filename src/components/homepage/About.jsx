// src/components/AboutSection.jsx
import React from 'react';
import aboutImg from '../../assets/logo2.png';

const About = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-white mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-left">
          {/* Label */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-px bg-gray-800 mr-4"></div>
            <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">
              Know About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We provide a place for women with special needs
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            <p className="text-black  text-[18px] leading-relaxed">
              We are on a mission to uplift women by creating space for growth, creativity, and leadership.
              Our comprehensive programs are designed to empower and support women in achieving their goals.
            </p>
            <p className="text-black text-[18px]  leading-relaxed">
              Through dedicated support services, skill development programs, and community building initiatives,
              we create an environment where women can thrive and reach their full potential. Our approach
              focuses on individual strengths while fostering collaborative growth.
            </p>
          </div>

          {/* Button */}
          <button className="bg-yellow-600 hover:bg-yellow-800 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300">
            Learn more
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="Empowered women"
            className="w-full max-w-md mx-auto h-auto max-h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
