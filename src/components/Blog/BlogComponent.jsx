import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const BlogComponent = () => {
  const blogs = [
    {
      id: 1,
      title: "How Donations Change Lives",
      description:
        "Discover how even small donations can create a ripple effect of change in underprivileged communities. This post dives into real-life stories of hope and transformation.",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80",
      date: "18.01.2025",
      day: "Saturday",
      readTime: "4 min read",
      location: "Athens, Greece",
    },
    {
      id: 2,
      title: "Volunteering: The Power of Giving Time",
      description:
        "In a fast-paced world, giving your time to volunteer work can be even more valuable than money. Learn the surprising benefits volunteers experience and how you can start.",
      image:
        "https://images.unsplash.com/photo-1544476915-ed1370594142?auto=format&fit=crop&w=1000&q=80",
      date: "22.01.2025",
      day: "Wednesday",
      readTime: "5 min read",
      location: "Lahore, Pakistan",
    },
    {
      id: 3,
      title: "Behind the Scenes of Our Food Drive",
      description:
        "Go behind the scenes of our most recent food drive. Find out how it was organized, the challenges faced, and the lives impacted by your contributions.",
      image:
        "https://images.unsplash.com/photo-1584940120743-c50b4c2fdb0a?auto=format&fit=crop&w=1000&q=80",
      date: "02.02.2025",
      day: "Sunday",
      readTime: "3 min read",
      location: "Karachi, Pakistan",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen relative z-0">
      {/* Header Section */}
      <div className="text-center mb-12">
        
        <h1 className="text-4xl md:text-5xl font-bold text-navy-800 leading-tight">
          Read Our Latest Blog Posts
        </h1>
      </div>

      {/* Blogs Grid */}
      <div className="space-y-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative z-10"
          >
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/3 relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg line-clamp-3">
                    {blog.description}
                  </p>
                </div>

                {/* Blog Meta */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Date</p>
                      <p className="font-bold text-gray-800">{blog.date}</p>
                      <p className="text-sm text-gray-600">{blog.day}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Read Time</p>
                      <p className="font-bold text-gray-800">{blog.readTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Location</p>
                      <p className="font-bold text-gray-800">{blog.location}</p>
                    </div>
                  </div>
                </div>

                {/* Learn More */}
                <div className="mt-8">
                  <button className="bg-yellow-500 hover:bg-yellow-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
