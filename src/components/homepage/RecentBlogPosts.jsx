// src/components/RecentBlogPosts.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import post1Img from '../../assets/WE.jpg'; // Replace with your actual image path


const posts = [
  {
    title: '5 Ways to Empower Women in Your Community',
    date: 'July 10, 2025',
    link: '#',
    image: post1Img,
  },
  {
    title: 'Interview with Female Entrepreneurs',
    date: 'July 15, 2025',
    link: '#',
    image: post1Img,
  },
];

const RecentBlogPosts = () => {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-12 ">
        Recent Blog Posts
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-2xl font-semibold text-gray-800  mb-4 transition-colors">
                {post.title}
              </h3>
              <a
                href={post.link}
                className="inline-flex items-center  font-medium hover:underline"
              >
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogPosts;
