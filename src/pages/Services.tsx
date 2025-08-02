import React from 'react';
import { 
  FaPassport, 
  FaChartLine, 
  FaSearch, 
  FaShoppingCart, 
  FaHandshake,
  FaShippingFast,
  FaCheckCircle
} from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'China Visa Booking Assistance', 
      icon: <FaPassport className="text-4xl" />, 
      description: 'Smooth and fast China visa application processes to ensure timely travel',
      benefits: ['Document preparation', 'Appointment scheduling', 'Application tracking', 'Expedited processing']
    },
    { 
      title: 'Guided Access to China Market', 
      icon: <FaChartLine className="text-4xl" />, 
      description: 'Support for exploring and navigating the China market for shopping, sourcing or investment',
      benefits: ['Market research', 'Supplier identification', 'Cultural guidance', 'Business matchmaking']
    },
    { 
      title: 'Product Sourcing & Quality Inspection', 
      icon: <FaSearch className="text-4xl" />, 
      description: 'Identifying reliable suppliers and ensuring quality before shipping',
      benefits: ['Factory audits', 'Sample evaluation', 'Production monitoring', 'Quality assurance']
    },
    { 
      title: 'Personal Buying & Shipping Assistance', 
      icon: <FaShoppingCart className="text-4xl" />, 
      description: 'Handling the buying process and ensuring safe delivery to your location',
      benefits: ['Order placement', 'Payment processing', 'Logistics management', 'Customs clearance']
    },
    { 
      title: 'Business Partnership Facilitation', 
      icon: <FaHandshake className="text-4xl" />, 
      description: 'Connecting Kenyan businesses with reliable Chinese partners',
      benefits: ['Due diligence', 'Contract negotiation', 'Relationship management', 'Ongoing support']
    },
    { 
      title: 'Customized Logistics Solutions', 
      icon: <FaShippingFast className="text-4xl" />, 
      description: 'End-to-end shipping and logistics tailored to your needs',
      benefits: ['Air freight', 'Sea freight', 'Door-to-door delivery', 'Tracking systems']
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 pt-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8a6725] mb-4">
            Our Professional Services
          </h1>
          <div className="w-24 h-1 bg-[#8a6725] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Vasha The Place offers comprehensive services to bridge the gap between Kenya and China's vast market opportunities
          </p>
        </div>
        
        {/* Pricing Banner */}
        <div className="bg-[#8a6725] text-white rounded-2xl p-6 mb-16 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Affordable Service Fee</h2>
              <p className="text-lg">Flat rate of Ksh 10,000 for professional and efficient support</p>
            </div>
            <button className="bg-white text-[#8a6725] font-bold py-3 px-8 rounded-full hover:bg-[#f0e6d8] transition-colors duration-300 whitespace-nowrap">
              Book Service Now
            </button>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className="bg-[#8a6725] text-white p-6 flex items-center">
                <div className="mr-4 text-white">{service.icon}</div>
                <h2 className="text-xl font-bold">{service.title}</h2>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                <h3 className="font-semibold text-[#8a6725] mb-3 flex items-center">
                  <FaCheckCircle className="mr-2" /> Key Benefits:
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#8a6725] mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-[#e5d3c0] text-[#8a6725] font-medium py-2 rounded-lg hover:bg-[#d4c0aa] transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Service Process */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#8a6725] text-center mb-12">
            Our Seamless Service Process
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {/* Vertical line for mobile */}
            <div className="hidden md:block absolute top-12 bottom-12 left-1/2 transform -translate-x-1/2 w-0.5 bg-[#8a6725]"></div>
            
            {/* Process Steps */}
            {[
              { step: 1, title: 'Consultation', desc: 'Understand your needs and goals' },
              { step: 2, title: 'Planning', desc: 'Develop customized strategy' },
              { step: 3, title: 'Execution', desc: 'Handle all necessary processes' },
              { step: 4, title: 'Delivery', desc: 'Ensure successful outcome' }
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center mb-10 md:mb-0 relative w-full md:w-auto">
                <div className="w-16 h-16 rounded-full bg-[#8a6725] text-white flex items-center justify-center text-xl font-bold mb-4 z-10">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-[#8a6725]">{process.title}</h3>
                <p className="text-gray-700 text-center mt-1 max-w-[150px]">{process.desc}</p>
                
                {/* Horizontal connector for mobile */}
                {index < 3 && (
                  <div className="md:hidden absolute top-12 -bottom-10 w-0.5 h-16 bg-[#8a6725]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start">
            <FaQuoteLeft className="text-4xl text-[#e5d3c0] mr-4" />
            <div>
              <p className="text-lg italic text-gray-700 mb-4">
                "Vasha The Place made our expansion into the Chinese market seamless. Their expertise in product sourcing and quality inspection saved us time and money. The team's dedication to our success was evident throughout the entire process."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-4" />
                <div>
                  <p className="font-bold text-[#8a6725]">James Kariuki</p>
                  <p className="text-gray-600">CEO, Kenya Export Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;