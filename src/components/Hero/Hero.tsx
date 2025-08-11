import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[50vh] max-h-[55vh] w-full overflow-hidden md:mt-20"
    >
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 mx-auto  max-w-7xl"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2873687/pexels-photo-2873687.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.4)] to-[rgba(229,211,192,0.3)]"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Main heading with responsive sizing */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl  font-bold mb-4 md:mb-6 uppercase tracking-tight">
            <span className="block text-[#e5d3c0]">Business Support & International Trade Services</span>
          </h1>
          
          {/* Subheading with responsive sizing */}
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-8 text-[#f8f4f0] font-medium leading-relaxed">
            Bridge To China, Vasha The Place is your trusted gateway to opportunities and business networks in China. 
            Whether you're planning trips, sourcing products, or looking to invest, we help you cross 
            the bridge with confidence.
          </p>
          
          {/* CTA Button with hover effects */}
          <div className="mt-4 sm:mt-6">
            <a
              href="#contact"
              className="inline-block bg-[#8a6725] hover:bg-[#a07a38] text-[#f8f4f0] font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8a6725] focus:ring-opacity-50"
              style={{
                boxShadow: '0 4px 14px rgba(138, 103, 37, 0.4)'
              }}
            >
              BOOK OUR SERVICES HERE!
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="mt-10 flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-[#8a6725] opacity-70"
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg 
          className="w-6 h-6 text-[#8a6725]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;