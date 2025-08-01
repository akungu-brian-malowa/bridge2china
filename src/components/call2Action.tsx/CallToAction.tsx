// src/components/CallToAction.tsx
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="py-16 bg-white text-black max-w-7xl mx-auto"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative pb-4 inline-block">
            Ready to Travel?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#8a6725] rounded-full"></div>
          </h2>
          
          <p className="text-xl mb-10">
            Take the guesswork out of doing business with China. From visa support to sourcing and shipping, 
            Bridge to China is your one-stop partner for navigating the Chinese market with confidence and ease—at a flat, affordable service fee.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="bg-[#8a6725] rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-lg">+254 721 176 973</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#8a6725] rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg">info.vashathebridgetochina@gmail.com</span>
            </div>
          </div>
          
          <a 
            href="mailto:info.vashathebridgetochina@gmail.com" 
            className="inline-block bg-[#8a6725] text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg transform hover:scale-105 text-lg"
          >
            BOOK US TODAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;