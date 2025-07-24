import React from 'react';

const ProgramHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ 
            backgroundImage: `url('/hero-background.jpg')`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-black/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full py-20">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Programs That</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient-shift">
              Create Lasting Impact
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering communities through innovative education, skill development, and transformative initiatives that unlock human potential and drive meaningful change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg overflow-hidden group"
              aria-label="Explore our programs"
            >
              <span className="relative z-10">Explore Programs</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button
              className="relative border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group overflow-hidden"
              aria-label="Learn more about our initiatives"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up delay-300">
          {[
            { value: "500+", label: "Lives Transformed" },
            { value: "25+", label: "Active Programs" },
            { value: "10", label: "Years of Impact" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-float-slow hidden md:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-float-medium hidden md:block" />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-blue-400/20 rounded-full blur-lg animate-float-fast hidden md:block" />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-purple-400/15 rounded-full blur-lg animate-float-slow hidden md:block" />

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: floatMedium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: floatFast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProgramHero;