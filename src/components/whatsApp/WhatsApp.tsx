import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link
    window.open(
      "https://wa.me/707854674?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services",
      "_blank"
    );
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference cursor-pointer"
    >
      <FaWhatsapp color="green" />
    </div>
  );
};

export default WhatsApp;
