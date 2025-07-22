// src/components/UpcomingEvents.jsx
import React from 'react';
import { CalendarClock } from 'lucide-react';

const events = [
  {
    title: 'Leadership Workshop',
    date: 'Aug 5, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
    description: 'All the Lorem Ipsum generators...',
    time: '10:00 AM - 2:00 PM',
  },
  {
    title: 'Creative Women Panel',
    date: 'Aug 15, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
    description: 'All the Lorem Ipsum generators...',
    time: '3:00 PM - 5:00 PM',
  },
  {
    title: 'Startup Pitch Day',
    date: 'Sep 2, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
    description: 'All the Lorem Ipsum generators...',
    time: '9:00 AM - 6:00 PM',
  },
  {
    title: 'Digital Skills Bootcamp',
    date: 'Sep 10, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'All the Lorem Ipsum generators...',
    time: '8:00 AM - 4:00 PM',
  },
];

const truncateWords = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const UpcomingEvents = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-100 to-white px-4 md:px-6 py-16 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-100 opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-100 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-100 opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          Upcoming <span className="text-yellow-500">Events</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Join our exciting events designed to inspire, educate and connect you with industry leaders.
        </p>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {events.slice(0, 4).map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row"
            >
              {/* Text Block */}
              <div className="p-4 flex flex-col justify-between md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <CalendarClock className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 flex-grow mb-2">
                  {truncateWords(event.description, 30)}{' '}
                  <a href={event.link} className="text-yellow-500 font-medium underline">View More</a>
                </p>
              </div>

              {/* Image */}
              <div className="md:w-1/2 h-48 md:h-auto relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
