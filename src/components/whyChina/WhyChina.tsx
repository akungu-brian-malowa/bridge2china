// src/components/WhyChina.tsx
import React from 'react';

interface ReasonCardProps {
  number: number;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="w-10 h-10 bg-[#8a6725] rounded-full flex items-center justify-center text-white font-bold mb-4">
        {number}
      </div>
      <h3 className="text-md md:text-xl font-bold text-black mb-3">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

const WhyChina: React.FC = () => {
  const reasonsData = [
    {
      number: 1,
      title: "Economic Powerhouse",
      description: "China is the world's second-largest economy and the largest exporter by value. Its exports have grown rapidly since the 1970s, contributing to its integration into the global trading system."
    },
    {
      number: 2,
      title: "Influencing Global Supply Chains",
      description: "Many multinational companies rely on China for manufacturing and sourcing products. Disruptions to Chinese supply chains can significantly impact businesses worldwide."
    },
    {
      number: 3,
      title: "Growing Consumer Market",
      description: "China's large population, growing middle class, and rising incomes create a massive consumer market. This attracts businesses looking to expand their sales and revenue."
    }
  ];

  return (
    <section id="why-china" className="py-16 bg-[#e5d3c0] max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#8a6725] relative pb-4">
          Why China?
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#8a6725] rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasonsData.map((reason) => (
            <ReasonCard 
              key={reason.number}
              number={reason.number}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-black mb-4">China's Top Exports & Imports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-black mb-2">Top Exports:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Integrated Circuits</li>
                <li>Telephones</li>
                <li>Computers</li>
                <li>Cars</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Top Imports:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Integrated Circuits</li>
                <li>Crude Petroleum</li>
                <li>Iron Ore</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChina;