import React from 'react';
import { 
  FaWrench, FaCarAlt, FaOilCan, FaTachometerAlt, FaBatteryFull, 
  FaFan, FaTired, FaStopCircle, FaPlug, FaWind, 
  FaGasPump, FaCogs, FaBurn, FaShieldAlt, FaArrowsAltH,
  FaSnowflake, FaBolt, FaTrailer, FaKey, FaCalendarCheck
} from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    { title: 'Repair & Maintenance', icon: <FaWrench />, description: 'High-quality repair and regular maintenance.' },
    { title: 'Vehicle Inspection', icon: <FaCarAlt />, description: 'Comprehensive vehicle checks and safety inspection.' },
    { title: 'Oil Change', icon: <FaOilCan />, description: 'Fast and affordable oil changes for all vehicles.' },
    { title: 'Engine Diagnostics', icon: <FaTachometerAlt />, description: 'Advanced diagnostics to find engine issues.' },
    { title: 'Battery Service', icon: <FaBatteryFull />, description: 'Testing, replacement and charging solutions.' },
    { title: 'AC Service', icon: <FaFan />, description: 'Cooling system repair and refrigerant recharge.' },
    { title: 'Tire Service', icon: <FaTired />, description: 'Rotation, balancing and replacement services.' },
    { title: 'Brake Repair', icon: <FaStopCircle />, description: 'Pad replacement and brake system maintenance.' },
    { title: 'Electrical Systems', icon: <FaPlug />, description: 'Wiring, lighting and electronic component repair.' },
    { title: 'Windshield Repair', icon: <FaWind />, description: 'Crack repair and full windshield replacement.' },
    { title: 'Fuel System Service', icon: <FaGasPump />, description: 'Injector cleaning and fuel pump replacement.' },
    { title: 'Transmission Service', icon: <FaCogs />, description: 'Flush, repair and maintenance for all transmission types.' },
    { title: 'Exhaust Repair', icon: <FaBurn />, description: 'Muffler and catalytic converter replacement.' },
    { title: 'Suspension Repair', icon: <FaShieldAlt />, description: 'Shock absorbers and strut replacement.' },
    { title: 'Wheel Alignment', icon: <FaArrowsAltH />, description: 'Precision alignment for better handling.' },
    { title: 'Winter Prep Service', icon: <FaSnowflake />, description: 'Winter tire installation and antifreeze check.' },
    { title: 'Hybrid/Electric Service', icon: <FaBolt />, description: 'Specialized maintenance for electric vehicles.' },
    { title: 'Towing & Recovery', icon: <FaTrailer />, description: '24/7 emergency towing and roadside assistance.' },
    { title: 'Key Replacement', icon: <FaKey />, description: 'Key fob programming and ignition repair.' },
    { title: 'Scheduled Maintenance', icon: <FaCalendarCheck />, description: 'Manufacturer-recommended service packages.' }
  ];

  return (
    <div className="container mx-auto py-16 px-4 md:w-[90%] min-h-screen items-center justify-center flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-12">Our Automotive Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="border p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            <div className="text-4xl mb-4 text-red-600 flex justify-center">{service.icon}</div>
            <h2 className="text-xl font-bold mb-3">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;