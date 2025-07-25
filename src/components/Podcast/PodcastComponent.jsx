import React, { useState } from 'react';
import { X } from 'lucide-react';

const PodcastComponent = () => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  // ✅ Replace with YouTube-allowed public videos
  const podcasts = [
    {
      id: 1,
      title: 'Top AI Trends 2025',
      description: 'Explore how AI is transforming the world.',
      videoId: '2ePf9rue1Ao', // ✅ Working YouTube video
      SpeakerIntro: 'Speaker: John Doe, AI Researcher at FutureTech Labs',
    },
    {
      id: 2,
      title: 'Startups & Hustle',
      description: 'Real-world advice from startup founders.',
      videoId: 'Q6_8ZwUuYJk', // ✅ Working video
      SpeakerIntro: 'Host: Sarah Khan, Entrepreneur & Angel Investor',
    },
    {
      id: 3,
      title: 'Digital Wellbeing',
      description: 'Managing your time and mental health online.',
      videoId: 'hHW1oY26kxQ', // ✅ Public meditation music video
      SpeakerIntro: 'Guest: Mindfulness Coach Lisa Ray',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen relative z-0">
      {/* Header */}
      <div className="text-center mb-12">
        
        <h1 className="text-4xl md:text-5xl font-bold text-navy-800 leading-tight">
          Tune Into Our Latest Podcasts
        </h1>
      </div>

      {/* Podcast Cards */}
      <div className="space-y-8">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            <div className="md:flex">
              {/* Video Thumbnail using YouTube static image */}
              <div className="md:w-1/3">
                <img
                  className="w-full h-64 md:h-full object-cover"
                  src={`https://img.youtube.com/vi/${podcast.videoId}/hqdefault.jpg`}
                  alt={podcast.title}
                />
              </div>

              {/* Info */}
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{podcast.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">{podcast.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Speaker Introduction
                  </p>
                  <p className="text-gray-700 leading-relaxed">{podcast.SpeakerIntro}</p>
                </div>
                <button
                  onClick={() => setSelectedPodcast(podcast)}
                  className="mt-8 bg-yellow-600 hover:bg-yellow-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedPodcast && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4">
          <div className="relative w-full max-w-6xl h-[600px] bg-black rounded-xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedPodcast(null)}
              className="absolute top-3 right-3 text-white hover:text-red-500 z-50"
            >
              <X size={28} />
            </button>
            <iframe
              className=" mt-20 w-full h-full"
              src={`https://www.youtube.com/embed/${selectedPodcast.videoId}?autoplay=1`}
              title={selectedPodcast.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastComponent;
