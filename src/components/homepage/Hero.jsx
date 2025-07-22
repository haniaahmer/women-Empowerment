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
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Main content area */}
      <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 lg:px-30">
        <div className="container mx-auto py-10 sm:py-20">
          <div className="max-w-4xl text-center md:text-left">
            {/* Heading */}
            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] leading-tight mb-6 sm:mb-8">
              Empowering Women to Lead,Create and
              <span className="block text-[#FFD700]">Thrive.</span>
            </h1>

            {/* Description */}
           <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 max-w-4xl mx-auto md:mx-0">
  <p className="text-base sm:text-lg md:text-xl font-light text-gray-200 leading-relaxed">
    Libero mauris sed sed proin. Blandit aliquet ipsum faucibus dictum natoque arcu. Potenti ante sed in amet massa aliquet. Enim dui urna mauris volutpat
  </p>

  <a
    href="#donate"
    className=" bg-[#FFD700] text-black px-10 py-3 rounded-full font-bold shadow-md hover:bg-yellow-500 hover:scale-105 transition-all duration-300 animate-bounce"
  >
    Donate Now
  </a>
</div>

            {/* Stats and Donate Button Aligned with Paragraph */}
            <div className="mt-6 space-y-6 md:space-y-4">
             

              {/* Donate Button */}
              
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="relative z-10 py-6 sm:py-8 border-t border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 opacity-70">
            {[
              { name: 'TechCorp', rounded: 'rounded-full' },
              { name: 'InnovateLab', rounded: 'rounded-lg' },
              { name: 'FutureTech', rounded: 'rounded' },
              { name: 'AI Solutions', rounded: 'rounded-full' },
              { name: 'WomenTech', rounded: 'rounded-lg' },
            ].map(({ name, rounded }, idx) => (
              <div className="flex items-center gap-2" key={idx}>
                <div className={`w-10 h-10 bg-white/20 ${rounded} flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2L2,7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
