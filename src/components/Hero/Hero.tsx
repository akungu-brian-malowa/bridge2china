import React, { useState, useEffect } from "react";
import Banner2 from "../../assets/banner5.jpg";
import Banner1 from "../../assets/banner8.png";
import Banner from "../../assets/banner9.png";

interface Slide {
  image: string;
  title: string;
  description: string;
}

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
      className="relative w-full overflow-hidden bg-gray-100 md:rounded-lg shadow-xl mt-14 md:mt-24 md:max-w-7xl md:mx-auto"
    >
      {/* Slider container with increased height on mobile */}
      <div className="relative w-full overflow-hidden md:rounded-lg h-[35vh] sm:h-[70vh] md:h-[60vh] lg:aspect-[21/9] lg:h-auto">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative flex items-center justify-center w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              />
              
              {/* Text overlay with improved mobile responsiveness */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30">
                <div className="px-4 mx-auto max-w-[90%] md:max-w-4xl">
                  {slide.title && (
                    <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
                      {slide.title}
                    </h2>
                  )}
                  {slide.description && (
                    <p className="text-base text-white/90 sm:text-lg md:text-xl lg:text-2xl max-w-[90%] mx-auto sm:max-w-[80%] drop-shadow-md">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows with better mobile positioning */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20 sm:left-4"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20 sm:right-4"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators with better mobile visibility */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
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