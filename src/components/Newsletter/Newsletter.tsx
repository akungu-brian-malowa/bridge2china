import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Newsletter: React.FC = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
        Subscribe to Our Newsletter
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[300px] mx-auto text-gray-500 text-sm text-center"
      >
        Stay updated with the latest services, offers, and tips for your vehicle!
      </motion.p>
      {/* form here */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="mt-10 mx-4 md:mx-0 flex justify-center "
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        <button className="bg-red-600 text-white px-6 py-4 uppercase">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
