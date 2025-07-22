import React from 'react';

const JoinOurEfforts = () => {
  const handleVolunteerClick = () => {
    console.log('Volunteer button clicked');
    // Add your volunteer logic here
  };

  const handleDonateClick = () => {
    console.log('Donate button clicked');
    // Add your donation logic here
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Join Our Efforts
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Lorem dictum sit purus ut vel sit egestas. Ut ac mattis conubia sit 
          suspendisse vitae vel nulla etiam. Est eros lacinia sem nisi a. Vitae 
          et fusce purus consectetur.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleVolunteerClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200 min-w-[160px]"
          >
            Join as a volunteer
          </button>
          
          <button
            onClick={handleDonateClick}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 min-w-[160px]"
          >
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinOurEfforts;