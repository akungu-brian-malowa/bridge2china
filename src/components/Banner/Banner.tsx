import React from "react";
import Banner1 from "../../assets/services.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-between relative">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <img
                src={Banner1}
                alt="Kite Auto Fix and Spares"
                className="w-[95%] md:w-full mx-auto rounded-xl "
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-xl z-0"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 rounded-full opacity-20 blur-xl z-0"></div>
              
              {/* Quality badge */}
              {/* <div className="absolute -bottom-4 left-8 bg-white px-4 py-2 rounded-full shadow-lg flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                <span className="font-bold text-gray-800">ASE Certified</span>
              </div> */}
            </motion.div>
          </div>
          
          {/* text section */}
          <div className="space-y-5 flex justify-between flex-col xl:max-w-[500px] px-4">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold"
            >
              <span className="text-red-600">Premium</span> Auto Repair & Genuine Spare Parts
            </motion.h1>
            
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-600 text-base leading-7"
            >
              At Kite Auto Fix and Spares, we provide top-notch repair services
              and a wide range of genuine spare parts to get your vehicle back on the
              road quickly and efficiently. Your satisfaction is our priority.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { icon: "🔧", text: "Expert Technicians" },
                { icon: "⚙️", text: "Genuine Parts" },
                { icon: "⏱️", text: "Quick Service" },
                { icon: "💯", text: "Quality Guarantee" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={SlideUp(0.5 + index * 0.1)}
                  initial="initial"
                  whileInView="animate"
                  className="flex items-center gap-2"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <Link to={"/services"}>
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView="animate"
               className="primary-btn bg-red-600 text-white shadow-[5px_5px_0px_0px_#eb9999]"
              >
                Explore Our Services
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
