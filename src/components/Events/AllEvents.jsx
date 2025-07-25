import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X } from 'lucide-react';

const EventsComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleParticipate = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
    setSelectedEvent(null);
  };

  const events = [
    {
      id: 1,
      title: "Donation is Hope",
      description: "Join us for a heartwarming community gathering where we collect donations to support underprivileged families in our local area. Every contribution makes a difference in someone's life.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
      date: "18.01.2025",
      day: "Saturday",
      time: "8:30 - 9:30am",
      location: "Athens, Greece"
    },
    {
      id: 2,
      title: "A Hand for Children",
      description: "A special fundraising event dedicated to supporting children's education and healthcare needs. Together, we can build a brighter future for the next generation.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1000&q=80",
      date: "25.01.2025",
      day: "Saturday",
      time: "10:00 - 12:00pm",
      location: "Athens, Greece"
    },
    {
      id: 3,
      title: "Community Food Drive",
      description: "Help us collect non-perishable food items for local food banks. Your generosity will help ensure that no family in our community goes hungry during these challenging times.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80",
      date: "02.02.2025",
      day: "Sunday",
      time: "9:00 - 11:30am",
      location: "Thessaloniki, Greece"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8  min-h-screen relative z-0">
      {/* Header Section */}
      <div className="text-center mb-12">
       
        <h1 className="text-4xl md:text-5xl font-bold text-navy-800 leading-tight">
          We Arrange Many Social Events<br />
          For Charity Donations
        </h1>
      </div>

      {/* Events Grid */}
      <div className="space-y-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative z-10"
          >
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/3 relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <button
                      onClick={() => handleParticipate(event)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2"
                    >
                      <span>Participate</span>
                    </button>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 text-gray-700 z-10">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Date</p>
                      <p className="font-bold text-gray-800">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.day}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-700 z-10">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Time</p>
                      <p className="font-bold text-gray-800">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-700 z-10">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase tracking-wide">Location</p>
                      <p className="font-bold text-gray-800">{event.location}</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
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

      {/* Popup Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Participate in "{selectedEvent?.title}"</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition"
              >
                Participate
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsComponent;
