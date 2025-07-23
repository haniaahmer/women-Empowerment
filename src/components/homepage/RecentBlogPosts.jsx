import React from 'react';

const RecentBlogPosts = () => {
  const projects = [
    {
      id: 1,
      title: "Renewable Tech Bootcamp",
      description: "Join our bootcamp to learn cutting-edge green energy technologies and sustainable solutions.",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
    },
    {
      id: 2,
      title: "Women in Data Science",
      description: "Explore data science through the lens of women leading innovation and analytics globally.",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg",
    },
    {
      id: 3,
      title: "Scholarship Program: Rural Areas",
      description: "Empowering girls from rural communities with access to quality education and scholarships.",
      image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-10 h-px bg-gray-800 mr-3"></div>
            <p className="text-xs font-medium text-gray-600 tracking-widest uppercase">
              Projects We Have Done
            </p>
          </div>
          <h2 className="px-6 text-2xl font-bold text-gray-900 leading-tight max-w-4xl">
            We're building a world where women lead, thrive, and are equally represented in every field.
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: '300px' }}
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
              </div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-white text-xs mb-4 leading-snug opacity-90">
                  {project.description}
                </p>
                <button className="self-start bg-yellow-700 text-white px-4 py-2 rounded-md font-semibold text-xs hover:bg-yellow-900 transition-all duration-200 transform hover:-translate-y-1 shadow">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogPosts;
