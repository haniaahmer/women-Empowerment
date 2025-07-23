import React, { useState } from 'react';
import {  ChevronLeft, ChevronRight } from 'lucide-react';

const OurTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample volunteer data - you can replace with actual data
  const volunteers = [
    {
      id: 1,
      name: "Volunteer",
      title: "Volunteer",
      image: "https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740"
     
    },
    {
      id: 2,
      name: "Volunteer",
      title: "Volunteer", 
      image: null,
     
    },
    {
      id: 3,
      name: "Volunteer",
      title: "Volunteer",
      image: null,
     
    },
    {
      id: 4,
      name: "Sarah Johnson",
      title: "Community Outreach",
      image: null,
     
    },
    {
      id: 5,
      name: "Mike Chen",
      title: "Event Coordinator",
      image: null,
   
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, volunteers.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, volunteers.length - 2)) % Math.max(1, volunteers.length - 2));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-amber-50 py-16 px-4 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Our Team
        </h2>
        
        {/* Volunteer Cards Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {volunteers.map((volunteer, index) => (
              <div 
                key={volunteer.id}
                className="w-full md:w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Profile Image Placeholder */}
                  <div className="w-48 h-48 mx-auto mb-6 bg-gray-300 rounded-2xl flex items-center justify-center overflow-hidden">
                    {volunteer.image ? (
                      <img 
                        src={volunteer.image} 
                        alt={volunteer.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-32 h-32 bg-gray-400 rounded-full opacity-60"></div>
                    )}
                  </div>
                  
                  {/* Volunteer Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {volunteer.name}
                    </h3>
                    <p className="text-orange-500 font-medium">
                      {volunteer.title}
                    </p>
                  </div>
                  
              
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
            aria-label="Previous volunteers"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          {/* Dot Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: Math.max(1, volunteers.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index 
                    ? 'bg-orange-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
            aria-label="Next volunteers"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;