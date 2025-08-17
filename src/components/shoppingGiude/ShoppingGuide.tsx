// src/components/ShoppingGuide.tsx
import React from 'react';

const ShoppingGuide: React.FC = () => {
  const whatToShop = [
    "Electronics & Accessories",
    "Fashion & Apparel",
    "Beauty & Personal Care",
    "Home & Kitchen Items",
    "Bags & Travel Gear",
    "Office & Stationery",
    "Business Supplies",
    "Sports & Outdoor Equipment",
    "Health & Wellness Products",
    "Heavy Machinaries & Equipment",
    "Furnitures"
  ];

  // Added URLs for each shopping platform
  const whereToShop = [
    { name: "Alibaba", url: "https://www.alibaba.com" },
    { name: "AliExpress", url: "https://www.aliexpress.com" },
    { name: "Shein", url: "https://www.shein.com" },
    { name: "eBay", url: "https://www.ebay.com" },
    { name: "Amazon", url: "https://www.amazon.com" },
    { name: "JD", url: "https://www.jd.com" },
    { name: "Banggood", url: "https://www.banggood.com" },
    { name: "Taobao", url: "https://www.taobao.com" },
    { name: "Tmall", url: "https://www.tmall.com" },
    { name: "Etsy", url: "https://www.etsy.com" },
    { name: "Light in Thebox", url: "https://www.lightinthebox.com" },
    { name: "1688", url: "https://www.1688.com" },
    { name: "DHgate", url: "https://www.dhgate.com" },
    { name: "Made In China", url: "https://www.madeinchina.com" },
  ];

  return (
    <section id="shopping" className="py-16 bg-[rgb(250,249,247)] max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black relative pb-4">
          China Shopping Guide
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#8a6725] rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* What to Shop */}
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-2xl font-bold text-black mb-6">What to Shop in China</h3>
            <ul className="space-y-3">
              {whatToShop.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#8a6725] mr-3">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Where to Shop */}
          <div className="bg-white rounded-xl p-6 ">
            <h3 className="text-2xl font-bold text-black mb-6">Where to Shop</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              {whereToShop.map((platform, index) => (
                <a 
                  key={index} 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-md border-[#8a6725] border-[1px] rounded-lg p-2 text-center hover:shadow-lg transition-shadow hover:bg-[#f9f5eb]"
                >
                  <span className="text-gray-700 font-medium">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto bg-[#8a6725] text-white p-8 rounded-xl shadow-xl">
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
