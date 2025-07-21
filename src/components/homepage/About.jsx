// src/components/AboutSection.jsx
import React from 'react';
import aboutImg from '../../assets/WE.jpg';

const About = () => {
    return (
        <section className="px-50 py-16 bg-white w-[100%] mx-auto mt-20">
            <div className="max-w-6xl flex flex-col md:flex-row items-center gap-20">
                {/* Left: About Text */}
                <div className="md:w-1/2 text-left">
                    {/* Label */}
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-px bg-gray-800 mr-4"></div>
                        <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">
                            KNOW ABOUT US
                        </span>
                    </div>
                    
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        We provide a place for women with special needs
                    </h2>
                    
                    {/* Description Paragraphs */}
                    <div className="space-y-4 mb-8">
                        <p className="text-gray-600 leading-relaxed">
                            We are on a mission to uplift women by creating space for growth, creativity, and leadership. 
                            Our comprehensive programs are designed to empower and support women in achieving their goals.
                        </p>
                        
                        <p className="text-gray-600 leading-relaxed">
                            Through dedicated support services, skill development programs, and community building initiatives, 
                            we create an environment where women can thrive and reach their full potential. Our approach 
                            focuses on individual strengths while fostering collaborative growth.
                        </p>
                    </div>
                    
                    {/* Learn More Button */}
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-md transition-colors duration-300">
                        Learn more
                    </button>
                </div>
                 
                {/* Right: Image */}
                <div className="md:w-1/2">
                    <img
                        src={aboutImg}
                        alt="Empowered women"
                        className="rounded-2xl shadow-lg w-100 h-150 object-cover max-h-[400px] rounded-t-full mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;