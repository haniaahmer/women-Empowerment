import React, { useState } from 'react';
import { Link } from "react-router-dom";
const AllPrograms = () => {
  const [filter, setFilter] = useState('all');

  const programs = [
    {
      id: 1,
      title: "Renewable Tech Bootcamp",
      description: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor vel...",
      image: "https://www.robertwalters.co.nz/insights/hiring-advice/e-guide/hiring-for-potential-in-the-fourth-industrial-revolution/_jcr_content/root/responsivegrid/article-detail/image.coreimg.85.1024.jpeg/1673392580840/gl-c91-working-on-laptop-932x530.jpeg"
    },
    {
      id: 2,
      title: "Women in Data Science",
      description: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel...",
      image: "/api/placeholder/250/150"
    },
    {
      id: 3,
      title: "Scholarships Program :Rural Areas",
      description: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a.",
      image: "/api/placeholder/250/150"
    },
    {
      id: 4,
      title: "InnovateHER",
      description: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel...",
      image: "/api/placeholder/250/150"
    },
    {
      id: 5,
      title: "STEM Horizons",
      description: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel...",
      image: "/api/placeholder/250/150"
    },
    {
      id: 6,
      title: "NextGen Leaders",
      description: "Dolor donec eget morbi nisl. Eu ut et enim ornare nisl vel auctor odio a. Curabitur porttitor quis gravida porttitor vel...",
      image: "/api/placeholder/250/150"
    }
  ];

  const filteredPrograms = () => {
    if (filter === 'latest') {
      return [...programs].sort((a, b) => b.id - a.id).slice(0, 3);
    } else if (filter === 'old') {
      return [...programs].sort((a, b) => a.id - b.id).slice(0, 3);
    }
    return programs;
  };

  return (
    <div className="bg-gray-50 mt-20 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-900">All Programs</h1>

          {/* Select (Mobile) */}
          <div className="sm:hidden">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All</option>
              <option value="latest">Latest</option>
              <option value="old">Old</option>
            </select>
          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden sm:flex space-x-2">
            {['all', 'latest', 'old'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${filter === type
                    ? 'bg-yellow-700 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Intro Description */}
        <p className="text-gray-700 text-lg mb-8 max-w-3xl">
          We provide cutting-edge programs to empower women in technology, leadership, and entrepreneurship. Our initiatives focus on education, access, and growth across all backgrounds and regions.
        </p>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms().map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {program.description}
                </p>
                <Link
                  to="/singleProgram"
                  className="w-full bg-yellow-700 text-white py-3 px-4 rounded-lg font-medium text-center cursor-pointer block"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPrograms;
