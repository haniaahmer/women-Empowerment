// src/components/SuccessStoriesCarousel.jsx
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import girl from '../../assets/download.jpeg'

const stories = [
  {
    quote: "This program changed my life and gave me a new purpose!",
    name: "Ayesha R.",
    image: girl,
  },
  {
    quote: "I started my own business thanks to the support here.",
    name: "Fatima K.",
    image: girl,
  },
  {
    quote: "I've built confidence and leadership skills I never had.",
    name: "Sara M.",
    image: girl,
  },
  {
    quote: "The mentorship and sisterhood here is unmatched.",
    name: "Zainab L.",
    image: girl,
  },
  {
    quote: "A safe space where women truly grow and shine.",
    name: "Hina Q.",
    image: girl,
  },
  {
    quote: "Thanks to this platform, I'm now mentoring others!",
    name: "Nimra A.",
    image: girl,
  },
];

const SuccessStoriesCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1.2;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-6 py-16 bg-pink-50 relative">
      <h2 className="text-3xl font-semibold text-center mb-12 ">Success Stories</h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-pink-100 z-10"
      >
        <ChevronLeft className="w-6 h-6 " />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-pink-100 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{
          scrollbarWidth: 'none',      // Firefox
          msOverflowStyle: 'none',     // IE/Edge
        }}
        onWheel={(e) => {
          if (e.deltaY !== 0) {
            e.preventDefault();
            scrollRef.current.scrollLeft += e.deltaY;
          }
        }}
      >
        {stories.map((story, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-6 rounded-xl w-72 flex-shrink-0 text-center hover:shadow-lg transition duration-300"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-pink-200"
            />
            <p className="italic text-gray-700 mb-2">"{story.quote}"</p>
            <p className="mt-3 font-semibold ">{story.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;
