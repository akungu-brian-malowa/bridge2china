// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8a6725] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-blue-400">Vasha</span>
            <span className="text-teal-400">ThePlace</span>
          </div>
          
          <p className="text-lg mb-6">
            Your trusted link to the Chinese market
          </p>
          
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} VashaThePlace. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

