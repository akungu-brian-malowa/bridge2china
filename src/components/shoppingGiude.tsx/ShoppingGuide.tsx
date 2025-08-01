// src/components/ShoppingGuide.tsx
import React from 'react';

const ShoppingGuide: React.FC = () => {
  const whatToShop = [
    "Electronics & Accessories",
    "Fashion & Apparel",
    "Beauty & Personal Care",
    "Home & Kitchen Items",
    "Baby & Kids Products",
    "Bags & Travel Gear",
    "Watches & Jewelry",
    "Office & Stationery",
    "Gift Items & Party Supplies",
    "Business Supplies"
  ];

  const whereToShop = [
    "Alibaba", "AliExpress", "Shein", "eBay", "Amazon", 
    "JD", "Banggood", "Taobao", "Tmall", "Etsy", "Light in Thebox"
  ];

  return (
    <section id="shopping" className="py-16 bg-[rgb(250,249,247)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800 relative pb-4">
          China Shopping Guide
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-500 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* What to Shop */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">What to Shop in China</h3>
            <ul className="space-y-3">
              {whatToShop.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Where to Shop */}
          <div className="bg-teal-50 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Where to Shop</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {whereToShop.map((platform, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-700 font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Your Trusted Link to the Chinese Market</h3>
          <p className="text-lg">
            Whether you're traveling to China, sourcing products, or exploring business opportunities, 
            we make the process seamless and stress-free. From visa assistance to quality checks and shipping, 
            we handle it all—professionally and affordably.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShoppingGuide;
