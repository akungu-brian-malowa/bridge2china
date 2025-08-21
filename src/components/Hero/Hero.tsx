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
      className="relative w-full overflow-hidden bg-gray-100 rounded-lg shadow-xl mt-14 md:mt-24 md:max-w-7xl md:mx-auto"
    >
      {/* Slider container */}
      <div className="relative w-full overflow-hidden rounded-lg aspect-video md:aspect-[21/9]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Responsive image with multiple sizes */}
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              />
              
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30">
                <div className="px-4 mx-auto max-w-[90%] md:max-w-4xl">
                  {slide.title && (
                    <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:mb-4 drop-shadow-md">
                      {slide.title}
                    </h2>
                  )}
                  {slide.description && (
                    <p className="text-sm text-white/90 sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[90%] mx-auto sm:max-w-[80%] drop-shadow-md">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-20 sm:left-4 sm:p-3"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-20 sm:right-4 sm:p-3"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 sm:bottom-4 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide ? "bg-white w-6 sm:w-8" : "bg-white/50 w-2 h-2 sm:w-3 sm:h-3"
              } h-2 sm:h-3`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;