import React from 'react';

const AboutOrganization = () => {
    return (
        <div className="max-w-6xl mx-auto p-10 bg-white">
            <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center mb-10">About our Organization</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-start">
                {/* Content Section */}
                <div className="space-y-8">
                    {/* Our Mission */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-700 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-black  text-[20px] mb-3">Our Mission</h2>
                            <p className="text-black text-[18px] leading-relaxed">
                                To build an inclusive and empowered society
                                where every woman has the opportunity,
                                resources, and recognition to grow financially
                                and contribute to national development.
                            </p>
                        </div>
                    </div>

                    {/* Our Vision */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-700 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-black text-[20px] mb-3">Our Vision</h2>
                            <p className="text-black text-[18px] leading-relaxed">
                                To empower women across Pakistan through
                                entrepreneurship, skill development, financial
                                literacy, and inclusive business ecosystems—
                                turning homes into hubs of innovation, income,
                                and impact
                            </p>
                        </div>
                    </div>


                </div>

                <div className="w-full flex flex-col space-y-4 mt-2">
    <div className="  relative overflow-hidden rounded-lg shadow-lg">
      <img
        src="https://images.pexels.com/photos/12094881/pexels-photo-12094881.jpeg"
        alt="Father with two children in traditional setting"
        className="w-full h-90 object-cover"
      />
    </div>
    
  </div>
</div>
</div>
    );
};

export default AboutOrganization;