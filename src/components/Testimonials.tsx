import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jane L.",
      role: "Clinic Manager",
      company: "Memphis Health Center",
      content: "Their software saved us hundreds of hours in manual work! The Medisearch platform has completely transformed how we handle patient data and medication management. The team's attention to detail and understanding of healthcare requirements is exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael R.",
      role: "CEO",
      company: "TechStart Solutions",
      content: "HannaWest Solutions delivered exactly what we needed - a scalable e-commerce platform that grows with our business. Their virtual assistant consulting also helped us optimize our workflow processes significantly.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah M.",
      role: "Operations Director",
      company: "Digital Marketing Agency",
      content: "The virtual assistant integration they set up for our team increased our productivity by 60%. Their process optimization strategies are top-notch, and the ongoing support has been fantastic.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 fade-in-up">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="h-8 w-8 text-white/30" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: currentTest.rating }, (_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed font-light">
                "{currentTest.content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="text-white font-semibold text-lg mb-1">
                  {currentTest.name}
                </div>
                <div className="text-white/80">
                  {currentTest.role}, {currentTest.company}
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;