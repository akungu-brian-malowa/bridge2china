import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link
    window.open(
      "https://wa.me/721176973?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services",
      "_blank"
    );
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="text-3xl text-green-400 fixed bottom-10 bg-red-500 rounded-full md:p-2 p-1 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference cursor-pointer"
    >
      <FaWhatsapp color="white" />
    </div>
  );
};

export default WhatsApp;
