// src/components/UpcomingEvents.jsx
import React from 'react';
import { CalendarClock } from 'lucide-react';

const events = [
  {
    title: 'Leadership Workshop',
    date: 'Aug 5, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
    description: 'Join us for a hands-on workshop where emerging leaders learn to drive impact, manage teams effectively, and foster innovation through real-world exercises and expert guidance.',
    time: '10:00 AM - 2:00 PM',
  },
  {
    title: 'Creative Women Panel',
    date: 'Aug 15, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
    description: 'A celebration of women driving creativity across industries. Engage with successful creatives sharing their journeys, challenges, and the future of women in the arts and media.',
    time: '3:00 PM - 5:00 PM',
  },
  {
    title: 'Startup Pitch Day',
    date: 'Sep 2, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
    description: 'Watch early-stage startups pitch their ideas to investors and mentors. A perfect networking opportunity for innovators and a sneak peek into the future of entrepreneurship.',
    time: '9:00 AM - 6:00 PM',
  },
  {
    title: 'Digital Skills Bootcamp',
    date: 'Sep 10, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'Upgrade your skills with our intensive bootcamp covering essential digital tools, social media marketing, and web design — perfect for beginners and pros alike.',
    time: '8:00 AM - 4:00 PM',
  },
];

const AllEvents = () => {
  return (
    <section className="bg-gradient-to-l from-indigo-50 to-white px-4 md:px-6 py-16 relative overflow-hidden">
      

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          Upcoming <span className="text-yellow-600">Events</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Join our exciting events designed to inspire, educate and connect you with industry leaders.
        </p>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row"
            >
              {/* Text Block */}
              <div className="p-4 flex flex-col justify-between md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <CalendarClock className="w-4 h-4 mr-2 text-yellow-600" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 flex-grow mb-2">
                  {event.description}
                </p>
                <a href={event.link} className="text-yellow-600 font-medium underline">View More</a>
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

        {/* View All Events Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 text-center w-full sm:w-auto"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
