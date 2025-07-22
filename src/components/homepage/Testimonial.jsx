import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const testimonials = [
  {
    id: 1,
    name: "Kusha Raha",
    title: "CEO & Founder",
    company: "HeadGeeks",
    quote:
      "We were losing money on charged and exchange fees when receiving payments to India and struggled finding a payment solution that works with all our clients across the world. I can summarize how Payoneer's helped me in three words: simple, hassle-free, low cost.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechFlow",
    quote:
      "The global payment infrastructure provided by Payoneer has been instrumental in scaling our business internationally. Their platform made cross-border transactions seamless.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80"
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Founder",
    company: "Digital Solutions",
    quote:
      "Payoneer transformed how we handle international payments. The low fees and reliable service have saved us thousands while improving our cash flow.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80"
  }
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[currentIndex];

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  const goToNext = () =>
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
           Our Success Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            See the impact we are creating to change lives
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-testimonial-shadow max-w-3xl mx-auto mb-8">
          {/* Avatar */}
          <div className="mb-6">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-20 h-20 rounded-full mx-auto object-cover  shadow-md"
            />
          </div>

          {/* Name & Title */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {current.name}
            </h3>
            <p className="text-muted-foreground">
              {current.title} of {current.company}
            </p>
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl leading-relaxed text-foreground italic">
            "{current.quote}"
          </blockquote>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="w-9 h-9 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

       
          {/* Next Button */}
          <button
            onClick={goToNext}
            className="w-9 h-9 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;