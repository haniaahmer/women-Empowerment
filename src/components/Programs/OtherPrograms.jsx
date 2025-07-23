import React from 'react';

const OtherPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "NextGen Leaders",
      description: "Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices...",
      image: "/api/placeholder/230/120"
    },
    {
      id: 2,
      title: "InnovateHER",
      description: "Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices...",
      image: "/api/placeholder/230/120"
    },
    {
      id: 3,
      title: "Renewable Tech Bootcamp",
      description: "Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices...",
      image: "/api/placeholder/230/120"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-5xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
        Related Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {program.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {program.description}
              </p>

              <div className="w-full bg-yellow-700 text-white py-3 px-4 rounded-lg font-medium text-center cursor-default">
                  VIEW DETAILS
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherPrograms;
