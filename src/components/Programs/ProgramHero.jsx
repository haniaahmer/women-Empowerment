import React from 'react';

const ProgramHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('/hero-background.jpg')`,
            backgroundAttachment: 'fixed',
            backgroundColor: '#1a1a1a', // Fallback background color
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full py-20">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Programs That</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
              Create Lasting Impact
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering communities through innovative education, skill development, and transformative initiatives that unlock human potential and drive meaningful change.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="relative bg-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg overflow-hidden group"
              aria-label="Explore our programs"
            >
              <span className="relative z-10">Explore Programs</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              className="relative border-2 border-gray-300 bg-gray-500/30 text-white hover:bg-gray-500/50 hover:border-gray-200 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group overflow-hidden"
              aria-label="Learn more about our initiatives"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/40 rounded-full blur-xl animate-float-fast" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/40 rounded-full blur-xl animate-float-fast" />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-blue-400/40 rounded-full blur-lg animate-float-fast" />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-purple-400/30 rounded-full blur-lg animate-float-fast" />
      

      
    </section>
  );
};

export default ProgramHero;