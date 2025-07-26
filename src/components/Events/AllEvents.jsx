import React, { useState, useEffect } from 'react';
import { Calendar, CalendarClock, Clock, X } from 'lucide-react';
import { getAllEvents, participateInEvent } from '../../services/api'; 

const EventsComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getAllEvents();
        let eventsArray = [];

        if (Array.isArray(response)) {
          eventsArray = response;
        } else if (response?.events && Array.isArray(response.events)) {
          eventsArray = response.events;
        } else if (response?.data && Array.isArray(response.data)) {
          eventsArray = response.data;
        } else {
          throw new Error('Invalid data structure');
        }

        const transformed = eventsArray.map(event => ({
          id: event._id || event.id,
          title: event.name || event.title,
          description: event.description,
          image: event.image?.startsWith('http')
            ? event.image
            : `http://localhost:8000/uploads/${event.image}`,
          date: event.date ? new Date(event.date).toLocaleDateString() : 'TBD',
          day: event.date ? new Date(event.date).toLocaleDateString('en-US', { weekday: 'long' }) : 'TBD',
          time: event.time || 'TBD',
          location: event.location || 'TBD'
        }));

        setEvents(transformed);
      } catch (err) {
        setError(err.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleParticipate = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
    setSelectedEvent(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const participantData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      eventId: selectedEvent.id
    };

    try {
      await participateInEvent(participantData);
      alert('Participation successful!');
      closeModal();
    } catch (err) {
      alert('Error submitting participation: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading events...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen relative z-0">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-800 leading-tight">
          We Arrange Many Social Events<br />
          For Charity Donations
        </h1>
      </div>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events available.</p>
      ) : (
        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden group relative z-10">
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="md:w-2/3 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-yellow-600 transition">
                      {event.title}
                    </h3>
                    <button
                      onClick={() => handleParticipate(event)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105 shadow-md"
                    >
                      Participate
                    </button>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{event.description}</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-teal-100 p-2 rounded-lg">
                        <CalendarClock className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Date</p>
                        <p className="font-bold text-gray-800">{event.day}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-teal-100 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Day</p>
                        <p className="font-bold text-gray-800">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Time</p>
                        <p className="font-bold text-gray-800">{event.time}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Participate in "{selectedEvent?.title}"
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsComponent;
