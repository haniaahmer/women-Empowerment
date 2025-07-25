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
];

const truncateWords = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const UpcomingEvents = () => {
  return (
    <section className="bg-gradient-to-l from-indigo-50 to-white px-4 md:px-6 py-16 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-300 opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-300 opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          Upcoming <span className="text-yellow-600">Events</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Join our exciting events designed to inspire, educate and connect you with industry leaders.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* View More Button */}
          <div className="absolute top-0 -mt-9 ml-260 z-10">
            <a
              href={events[0].link}
              className="bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-yellow-700 transition"
            >
              View More
            </a>
          </div>

          {/* Left Card (3 cols wide) */}
          <div className="col-span-1 md:col-span-3 bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={events[0].image}
              alt={events[0].title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <CalendarClock className="w-4 h-4 mr-2 text-yellow-600" />
                <span>{events[0].date} • {events[0].time}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{events[0].title}</h3>
              <p className="text-gray-600">{truncateWords(events[0].description, 40)}</p>
            </div>
          </div>

          {/* Right Two Cards (2 cols wide) */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
            {events.slice(1, 3).map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row h-full"
              >
                <div className="w-full md:w-32 h-40 md:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center items-start text-left flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {truncateWords(event.description, 20)}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarClock className="w-4 h-4 mr-2 text-yellow-600" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
