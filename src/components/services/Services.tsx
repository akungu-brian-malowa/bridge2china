// src/components/Services.tsx
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#e5d3c0] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className=" bg-[#8a6725]  text-white p-5 flex justify-center">
        <span className="text-4xl text-white">{icon}</span>
      </div>
      <div className="p-6">
        <h3 className="text-md md:text-xl font-bold text-black mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: "🛂",
      title: "China Visa Booking Assistance",
      description: "We help clients with smooth and fast China visa application processes to ensure timely travel."
    },
    {
      icon: "🌐",
      title: "Guided Access to China Market",
      description: "We support individuals and businesses in exploring the China market for shopping, sourcing, or investment opportunities."
    },
    {
      icon: "🔍",
      title: "Product Sourcing & Quality Inspection",
      description: "We assist in identifying reliable suppliers and ensure quality before shipping to avoid losses."
    },
    {
      icon: "📦",
      title: "Personal Buying & Shipping Assistance",
      description: "We handle the buying process for you and ensure safe delivery to your location."
    }
  ];

  //bg-[#fff7f0]

  return (
    <section id="services" className="py-16 bg-[#FAF9F7] max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#8a6725] relative pb-4">
          Our Services
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#e5d3c0]  rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-[#8a6725] rounded-xl p-8 text-white max-w-2xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Affordable Service Fee</h3>
          <p className="text-lg">
            Our service fee is Ksh 10,000 (fare exclusive), offering great value for professional and efficient support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;