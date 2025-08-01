import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import { FaQuoteLeft, FaUser } from "react-icons/fa"; // Added FaUser import

const TestimonialData = [
  {
    id: 1,
    name: "John Kamau",
    designation: "Toyota Owner",
    text: "The service at Kite Auto Fix is unparalleled. My car was repaired quickly and efficiently after an accident!",
    rating: 5,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Sarah Atieno",
    designation: "Nissan Owner",
    text: "I trust Kite Auto Fix for all my car needs. They use quality parts and have exceptional customer service.",
    rating: 5,
    delay: 0.4,
  },
  {
    id: 3,
    name: "David Ochieng",
    designation: "Business Owner",
    text: "The team is professional and always delivers on time. Saved my business when our delivery van broke down!",
    rating: 5,
    delay: 0.6,
  },
  {
    id: 4,
    name: "Amina Hassan",
    designation: "Subaru Owner",
    text: "Quick and reliable service. Fixed my engine issue in half the time quoted by other garages. Highly recommend!",
    rating: 5,
    delay: 0.3,
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container">
        {/* heading title */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold"
          >
            What Our <span className="text-red-600">Customers Say</span>
          </motion.h1>
          <div className="w-24 h-1 bg-red-600 mx-auto my-4"></div>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-600 text-lg"
          >
            Hear from satisfied customers who've experienced our exceptional service
          </motion.p>
        </div>
        
        {/* testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TestimonialData.map((card) => (
            <motion.div
              variants={SlideLeft(card.delay)}
              initial="initial"
              whileInView="animate"
              key={card.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-600 opacity-10 rounded-full -m-4 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10">
                <FaQuoteLeft className="text-red-600 text-3xl mb-6 opacity-30" />
                
                <div className="flex items-center gap-4 mb-6">
                  {/* Replaced img with FaUser icon */}
                  <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-red-600 flex items-center justify-center">
                    <FaUser className="text-red-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{card.name}</p>
                    <p className="text-gray-500 text-sm">{card.designation}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{card.text}"
                </p>
                
                <div className="flex gap-1">
                  {[...Array(card.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            variants={SlideLeft(0.8)}
            initial="initial"
            whileInView="animate"
            className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-8 text-white flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Service?</h3>
            <p className="mb-6 text-red-100">
              Join hundreds of satisfied customers who trust us with their vehicles
            </p>
            <button className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors w-full">
              Book Appointment
            </button>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div 
          variants={SlideUp(0.8)}
          initial="initial"
          whileInView={"animate"}
          className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "98%", label: "Customer Satisfaction Rate" },
              { value: "500+", label: "Vehicles Serviced Monthly" },
              { value: "10+", label: "Years of Trusted Service" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;