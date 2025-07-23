import React, { useState } from 'react';
import { Calendar, Clock, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SingleProgram = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const title = "SCHOLARSHIP PROGRAMS IN RURAL AREAS";
  const subtitle = "Rural Education Support";
  const image =
    "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=";
  const description =
    "This program is aimed at supporting underprivileged children in rural areas by providing them with access to quality education, resources, and mentorship. Through this initiative, we are committed to breaking the cycle of poverty and building brighter futures.";

  const startDate = "Aug 1, 2025";
  const endDate = "Dec 15, 2025";
  const time = "10:00 AM - 12:00 PM";
  const days = ["Monday", "Tuesday"];

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start lg:items-end justify-between">
        {/* Left - Image Section */}
        <div className="lg:w-1/2">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-black font-medium flex items-center gap-2 mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </button>

          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {title}
          </h1>
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Right - Details Section */}
        <div className="lg:w-1/2 flex flex-col justify-end pt-14">
          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-black mb-7">{subtitle}</h2>
            <p className="text-black text-[20px] leading-relaxed mb-4">{description}</p>

            <div className="flex flex-wrap items-center gap-6 text-[18px] text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span><strong>Start:</strong> {startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-red-600" />
                <span><strong>End:</strong> {endDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span><strong>Time:</strong> {time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span><strong> Days:</strong> {days.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Enroll Button */}
          <div className="mb-8">
            <button
              onClick={() => setShowModal(true)}
              className="w-[200px] bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-2xl p-8 relative shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Heading */}
            <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center">
              Participate in <span className="text-black">"{subtitle}"</span>
            </h3>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2.5 rounded-md transition"
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

export default SingleProgram;
