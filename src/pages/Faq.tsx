import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaShippingFast, FaPassport, FaSearch, FaHandshake, FaWhatsapp } from 'react-icons/fa';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqCategories = [
    {
      title: "Visa Services",
      icon: <FaPassport className="text-2xl" />,
      questions: [
        {
          question: "How long does the China visa process take?",
          answer: "Typically, the visa process takes 5-10 business days. However, we offer expedited services for urgent cases which can take as little as 3-5 business days. We recommend applying at least 3 weeks before your planned travel date."
        },
        {
          question: "What documents do I need for a China visa application?",
          answer: "You'll need a valid passport (with at least 6 months validity), completed application form, passport-sized photos, proof of travel arrangements, and supporting documents depending on visa type (invitation letters for business visas, hotel bookings for tourism, etc.)."
        },
        {
          question: "Can you help with visa applications for groups?",
          answer: "Yes, we specialize in group visa applications for business delegations, student groups, and tour groups. We offer discounted rates for groups of 5 or more applicants."
        }
      ]
    },
    {
      title: "Product Sourcing",
      icon: <FaSearch className="text-2xl" />,
      questions: [
        {
          question: "How do you ensure product quality from Chinese suppliers?",
          answer: "We implement a 3-step quality control process: 1) Supplier vetting and factory audits, 2) Pre-production sample approval, and 3) On-site inspections during production and before shipment. Our quality inspectors are located in major manufacturing regions across China."
        },
        {
          question: "What is the minimum order quantity (MOQ) for sourcing?",
          answer: "MOQs vary by product and supplier. We negotiate with suppliers to secure the lowest possible MOQs for our clients. For many products, we can secure orders as small as 50-100 units, and sometimes even less for custom products."
        },
        {
          question: "Can you help with custom product manufacturing?",
          answer: "Absolutely! We specialize in connecting clients with manufacturers for custom products. We assist with design specifications, prototyping, material selection, and production oversight to ensure your custom products meet your exact requirements."
        }
      ]
    },
    {
      title: "Shipping & Logistics",
      icon: <FaShippingFast className="text-2xl" />,
      questions: [
        {
          question: "What shipping methods do you offer?",
          answer: "We offer multiple shipping options including air freight (5-10 days), sea freight (30-45 days), and express courier services (3-7 days). We'll recommend the best option based on your budget, timeline, and shipment size."
        },
        {
          question: "How do you handle customs clearance?",
          answer: "Our logistics team handles all aspects of customs clearance in both China and Kenya. We prepare all necessary documentation, pay duties and taxes on your behalf (which we'll invoice you for), and ensure smooth clearance through customs."
        },
        {
          question: "What is your shipping cost structure?",
          answer: "Shipping costs depend on weight, volume, shipping method, and destination. We provide transparent quotes that include all charges: freight costs, customs duties, taxes, and our service fee. There are no hidden charges."
        }
      ]
    },
    {
      title: "Business Partnerships",
      icon: <FaHandshake className="text-2xl" />,
      questions: [
        {
          question: "How do you find reliable business partners in China?",
          answer: "We leverage our extensive network across China's industrial regions and use a rigorous vetting process that includes factory audits, license verification, reference checks, and quality assessments. We've built relationships with trusted partners over 8+ years in business."
        },
        {
          question: "Can you arrange business meetings in China?",
          answer: "Yes, we offer full business trip support including arranging meetings with potential partners, providing interpreters, transportation, and accommodation. We also assist with cultural preparation and negotiation strategy."
        },
        {
          question: "Do you help with contract negotiations?",
          answer: "Our team provides negotiation support, helping you secure favorable terms while navigating cultural differences. We review contracts to ensure they protect your interests and comply with both Chinese and Kenyan laws."
        }
      ]
    }
  ];
  
  const generalQuestions = [
    {
      question: "What are your service fees?",
      answer: "Our standard service fee is Ksh 10,000, which covers basic consultation and coordination. Additional fees depend on the services required (visa assistance, sourcing, inspections, etc.). We provide transparent pricing with no hidden fees."
    },
    {
      question: "How do I get started with Vasha's services?",
      answer: "Getting started is simple: 1) Contact us via phone, email, or WhatsApp, 2) Schedule a free consultation, 3) Share your requirements, and 4) We'll develop a customized service plan. No upfront payment is required until you approve the plan."
    },
    {
      question: "Do you have representatives in China?",
      answer: "Yes, we have a dedicated team in Guangzhou, China's manufacturing hub. Our on-ground team speaks Mandarin and local dialects, understands Chinese business culture, and can visit factories, conduct inspections, and resolve issues quickly."
    },
    {
      question: "What makes Vasha different from other China-Kenya facilitators?",
      answer: "Our unique value comes from: 1) Dual presence in Kenya and China, 2) End-to-end service coverage, 3) Cultural understanding, 4) Personalized approach, and 5) Quality assurance focus. We're not just facilitators - we're your trusted partners in China."
    }
  ];

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 text-center bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Find answers to common questions about our services, processes, and how we can help you connect with China
          </p>
          <div className="w-24 h-1 bg-[#e5d3c0] mx-auto mb-10"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions or topics..."
              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8a6725] focus:border-transparent shadow-lg"
            />
            <button title='btn' className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#8a6725] text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {faqCategories.map((category, index) => (
            <button
              key={index}
              className="flex items-center bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow font-medium text-[#8a6725]"
            >
              {category.icon}
              <span className="ml-2">{category.title}</span>
            </button>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Category FAQs */}
          <div>
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-16">
                <h2 className="text-2xl font-bold text-[#8a6725] mb-6 flex items-center">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                      <button
                        className="w-full flex justify-between items-center p-6 text-left"
                        onClick={() => toggleAccordion(catIndex * 10 + index)}
                      >
                        <span className="font-medium text-lg">{item.question}</span>
                        {activeIndex === catIndex * 10 + index ? (
                          <FaChevronUp className="text-[#8a6725] flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-[#8a6725] flex-shrink-0" />
                        )}
                      </button>
                      
                      {activeIndex === catIndex * 10 + index && (
                        <div className="px-6 pb-6 text-gray-700">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* General Questions */}
          <div>
            <h2 className="text-2xl font-bold text-[#8a6725] mb-6">General Questions</h2>
            
            <div className="space-y-4 mb-16">
              {generalQuestions.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleAccordion(100 + index)}
                  >
                    <span className="font-medium text-lg">{item.question}</span>
                    {activeIndex === 100 + index ? (
                      <FaChevronUp className="text-[#8a6725] flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-[#8a6725] flex-shrink-0" />
                    )}
                  </button>
                  
                  {activeIndex === 100 + index && (
                    <div className="px-6 pb-6 text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Contact Card */}
            <div className="bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6">
                Our team is ready to assist you with any inquiries about our services or your China-related needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaWhatsapp className="text-xl mr-4" />
                  <span>+254 721 176 973</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info.vashathebridgetochina@gmail.com</span>
                </div>
              </div>
              
              <button 
                className="mt-8 w-full bg-white text-[#8a6725] font-bold py-3 px-6 rounded-lg hover:bg-[#f0e6d8] transition"
                onClick={() => window.open("https://wa.me/254721176973", "_blank")}
              >
                <div className="flex items-center justify-center">
                  <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-[#e5d3c0] p-6 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#8a6725]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#8a6725] mb-4">Need more specific help?</h2>
              <p className="text-gray-700 mb-6">
                If you have specialized questions about importing to Kenya, customs regulations, or need assistance with a complex project, schedule a personalized consultation with our experts.
              </p>
              <button className="bg-[#8a6725] text-white font-bold py-3 px-8 rounded-full hover:bg-[#6a4f1d] transition">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] py-12 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your China journey?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Let Vasha be your trusted bridge to opportunities in China. Contact us today to get started.
          </p>
          <button 
            className="bg-white text-[#8a6725] font-bold py-3 px-8 rounded-full hover:bg-[#f0e6d8] transition"
            onClick={() => window.open("https://wa.me/254721176973", "_blank")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;