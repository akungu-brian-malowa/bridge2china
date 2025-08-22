import React from "react";
import Hero from "../components/Hero/Hero";

import WhatsApp from "../components/whatsApp/WhatsApp";
import Services from "../components/services/Services";
import WhyChina from "../components/whyChina/WhyChina";
import ShoppingGuide from "../components/shoppingGiude/ShoppingGuide";
import CallToAction from "../components/call2Action.tsx/CallToAction";
import AboutUs from "../components/aboutus/Aboutus";

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-white md:w-[70%]  mx-auto">
      <Hero />
      <AboutUs/>
      <Services />
      <WhyChina/>
      <ShoppingGuide/>
      <CallToAction/>
    
      {/* ______ WhatsApp Icon ______ */}
      {/* <div className="text-3xl text-white fixed bottom-10 bg-[#e5d3c0 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
        <a href="">
          <FaWhatsapp color="green" />
        </a>
      </div> */}
      <WhatsApp/>
    </div>
  );
};

export default HomePage;
