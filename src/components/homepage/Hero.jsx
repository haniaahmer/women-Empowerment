// src/components/HeroBanner.jsx
import React from 'react';
import '@fontsource/playfair-display';
import '@fontsource/inter';
import banner_img from '../../assets/WE.jpg';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center relative text-white min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${banner_img})`,
      }}
    >
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      
      {/* Main content area */}
      <div className=" px-30 relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-12 mt-30">
          <div className="max-w-4xl">
            {/* Main heading with better typography */}
            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] leading-tight mb-8">
              Unlock Advanced Resources And AI-
              <span className="block">Driven Opportunities To Transform</span>
              <span className="block text-[#FFD700]">Futures.</span>
            </h1>
            
            {/* Description text */}
            <p className="text-lg md:text-xl font-light text-gray-200 mb-12 max-w-2xl leading-relaxed">
              Libero mauris sed sed proin. Blandit aliquet ipsum faucibus 
              dictum natoque arcu. Potenti ante sed in amet massa aliquet. 
              Enim dui urna mauris volutpat
            </p>
            
            {/* Statistics section */}
            <div className="flex flex-wrap items-center gap-8 md:gap-16 mb-16">
              <div className="flex items-center gap-4">
                <span className="text-4xl md:text-5xl font-bold text-[#FFD700] font-mono">
                  Rs.1,284,528
                </span>
                <span className="text-sm md:text-base text-gray-300 font-medium">
                  Donation
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-4xl md:text-5xl font-bold text-[#FFD700] font-mono">
                  12,460
                </span>
                <span className="text-sm md:text-base text-gray-300 font-medium">
                  Women Placed In STEM Careers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partner logos section at bottom */}
      <div className="px-30 relative z-10 py-8 border-t border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-start gap-8 md:gap-12 opacity-70">
            {/* Partner Logo 1 - TechCorp */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <span className="text-white font-medium text-sm">TechCorp</span>
            </div>
            
            {/* Partner Logo 2 - InnovateLab */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                </svg>
              </div>
              <span className="text-white font-medium text-sm">InnovateLab</span>
            </div>
            
            {/* Partner Logo 3 - FutureTech */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
              <span className="text-white font-medium text-sm">FutureTech</span>
            </div>
            
            {/* Partner Logo 4 - AI Solutions */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7M12,14C10.67,14 8,14.67 8,16V18H16V16C16,14.67 13.33,14 12,14Z"/>
                </svg>
              </div>
              <span className="text-white font-medium text-sm">AI Solutions</span>
            </div>
            
            {/* Partner Logo 5 - WomenTech */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                </svg>
              </div>
              <span className="text-white font-medium text-sm">WomenTech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;