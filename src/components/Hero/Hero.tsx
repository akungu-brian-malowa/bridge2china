import React, { useState, useEffect } from "react";
import Banner2 from "../../assets/banner5.jpg";
import Banner1 from "../../assets/banner8.png";
import Banner from "../../assets/banner9.png";

interface Slide {
  image: string;
  title: string;
  description: string;
}

// Sample images - replace with your actual image paths
const slides: Slide[] = [
  {
    image: Banner2,
    title: "",
    description: "",
  },
  {
    image: Banner1,
    title: "",
    description: "",
  },
  {
    image: Banner,
    title: "",
    description: "",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden mt-10 md:mt-24 md:max-w-7xl md:mx-auto rounded-lg shadow-xl bg-gray-100"
    >
      {/* Slider container */}
      <div className="relative w-full h-full overflow-hidden rounded-lg" style={{ height: "60vh" }}>
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="flex items-center justify-center h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {(slide.title || slide.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="max-w-4xl mx-auto text-center">
                    {slide.title && (
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-lg text-white/90">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;