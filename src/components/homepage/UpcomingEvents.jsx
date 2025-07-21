// src/components/UpcomingEvents.jsx
import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight, CalendarClock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Leadership Workshop',
    date: 'Aug 5, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1616587894060-7980b9e9b22d?auto=format&fit=crop&w=800&q=80',
    category: 'Workshop',
    time: '10:00 AM - 2:00 PM'
  },
  {
    title: 'Creative Women Panel',
    date: 'Aug 15, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1616587894060-7980b9e9b22d?auto=format&fit=crop&w=800&q=80',
    category: 'Panel Discussion',
    time: '3:00 PM - 5:00 PM'
  },
  {
    title: 'Startup Pitch Day',
    date: 'Sep 2, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
    category: 'Competition',
    time: '9:00 AM - 6:00 PM'
  },
  {
    title: 'Digital Skills Bootcamp',
    date: 'Sep 10, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    category: 'Training',
    time: '8:00 AM - 4:00 PM'
  },
  {
    title: 'Tech Innovation Summit',
    date: 'Sep 25, 2025',
    link: '#',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    category: 'Conference',
    time: '9:00 AM - 7:00 PM'
  },
];

const UpcomingEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="bg-gradient-to-b from-indigo-100 to-white px-6 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-100 opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-100 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-100 opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6 text-gray-800"
        >
          Upcoming <span className="text-indigo-600">Events</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Join our exciting events designed to inspire, educate and connect you with industry leaders.
        </motion.p>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          {loaded && slider.current && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => slider.current?.prev()}
                className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-indigo-50 transition text-indigo-600"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => slider.current?.next()}
                className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-indigo-50 transition text-indigo-600"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </motion.button>
            </>
          )}

          <div ref={sliderRef} className="keen-slider pb-4">
            {events.map((event, i) => (
              <motion.div
                key={i}
                className="keen-slider__slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <CalendarClock className="w-4 h-4 mr-2 text-indigo-500" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {event.title}
                    </h3>
                    
                    <div className="mt-auto">
                      <motion.a
                        href={event.link}
                        className="inline-flex items-center text-indigo-600 font-semibold group"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-2">Register Now</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        {loaded && slider.current && (
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(slider.current.track.details.slides.length)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-yellow-400 w-6' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;