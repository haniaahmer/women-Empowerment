import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Kusha Raha",
    title: "CEO & Founder",
    company: "HeadGeeks",
    quote:
      "We were losing money on fees when receiving payments to India. Payoneer helped in three words: simple, hassle-free, low cost.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechFlow",
    quote:
      "Payoneer's platform made global transactions seamless and helped us scale across borders.",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Founder",
    company: "Digital Solutions",
    quote:
      "Reliable service and low fees—Payoneer has improved our cash flow significantly.",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
  {
    id: 4,
    name: "Amira El-Sayed",
    title: "Freelancer",
    company: "Remote Egypt",
    quote:
      "Receiving international payments was a hassle before Payoneer made it easy.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
  {
    id: 5,
    name: "Carlos Rivera",
    title: "Marketing Director",
    company: "Latam Leads",
    quote:
      "Their platform is intuitive and allows us to manage client payments across continents.",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
  {
    id: 6,
    name: "Aisha Khan",
    title: "Blogger",
    company: "Travel Tells",
    quote:
      "Payoneer makes it easy for me to get paid by brands globally while traveling.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
  {
    id: 7,
    name: "Tom Nakamura",
    title: "Operations Head",
    company: "JapanEx",
    quote:
      "Cross-border transactions are no longer a nightmare—thanks to Payoneer!",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
];

export function Testimonial() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Success Stories
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          See the impact we are creating to change lives
        </p>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-yellow-600 text-white p-2 rounded-full shadow hover:bg-yellow-700"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-yellow-600 text-white p-2 rounded-full shadow hover:bg-yellow-700"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scrollable Card Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 scrollbar-hide"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-[calc(100%/1.2)] sm:w-[calc(100%/2.2)] md:w-[calc(100%/3.2)] lg:w-[calc(100%/4.2)] flex-shrink-0 snap-start bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto object-cover shadow mb-4"
              />
              <h3 className="text-lg font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {item.title} of {item.company}
              </p>
              <blockquote className="text-sm text-foreground italic">
                "{item.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
