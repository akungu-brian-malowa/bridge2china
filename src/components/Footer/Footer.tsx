import React from "react";
import Logo from "../../assets/Logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              {/* <img src={Logo} alt="Kite Auto Fix and Spares Logo" className="w-10 h-6 md:w-24 md:h-14" /> */}
              <p className="text-xl font-semibold">Bridge To China</p>
            </div>
            <p>Nairobi, Kenya</p>
           
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About Us</h1>
              <ul className="text-sm space-y-4">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Service Booking</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Warranty Information</a></li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+254 721 176 973</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:info@kiteautofix.com">info@bridgetochina.co.ke</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-5">
        &copy; {currentYear} Bridge To China. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
