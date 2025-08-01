import React from "react";
import { FaUser, FaCar, FaTools, FaHeadset, FaCog } from "react-icons/fa"; 
import WhatsApp from "../components/whatsApp/WhatsApp";

const OurTeam: React.FC = () => {
  const team = [
    {
      name: "Calvin Bwire",
      role: "Lead Mechanic & Founder",
      bio: "With 15 years of experience in automotive engineering, Calvin founded Kite Auto Fix to bring world-class service to Nairobi.",
      // social: {
      //   linkedin: "#",
      //   twitter: "#",
      //   email: "mailto:kelvin@kiteautofix.co.ke"
      // }
    },
    {
      name: "Wanjiku Mwangi",
      role: "Customer Service Manager",
      bio: "Wanjiku ensures every customer receives exceptional service with her 8 years of experience in client relations.",
      // social: {
      //   linkedin: "#",
      //   email: "mailto:wanjiku@kiteautofix.co.ke",
      //   whatsapp: "#"
      // }
    },
    {
      name: "Abraham Ochieng",
      role: "Spare Parts Specialist",
      bio: "Abraham's extensive knowledge of auto parts ensures we always have the right components for any repair job.",
      // social: {
      //   linkedin: "#",
      //   email: "mailto:david@kiteautofix.co.ke"
      // }
    },
    {
      name: "Aisha Hassan",
      role: "Electrical Systems Expert",
      bio: "Specializing in modern vehicle electronics, Aisha solves complex electrical issues with precision.",
      // social: {
      //   linkedin: "#",
      //   twitter: "#"
      // }
    }
  ];

  const departments = [
    {
      name: "Mechanical Services",
      icon: <FaTools className="text-3xl text-red-600" />,
      count: "8 Experts"
    },
    {
      name: "Customer Support",
      icon: <FaHeadset className="text-3xl text-red-600" />,
      count: "5 Specialists"
    },
    {
      name: "Parts & Inventory",
      icon: <FaCog className="text-3xl text-red-600" />,
      count: "3 Managers"
    },
    {
      name: "Roadside Assistance",
      icon: <FaCar className="text-3xl text-red-600" />,
      count: "4 Teams"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet the <span className="text-red-600">Kite Auto Fix</span> Team
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our skilled team of automotive experts in Nairobi is dedicated to providing exceptional service for your vehicle.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                {/* Replaced image with FaUser icon */}
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-5xl" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-xl font-bold text-white">{member.name}</h2>
                  <p className="text-red-300">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {/* {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      className="bg-gray-200 hover:bg-blue-600 text-gray-800 hover:text-white p-2 rounded-full transition-colors"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedin />
                    </a>
                  )} */}
                  {/* {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      className="bg-gray-200 hover:bg-blue-400 text-gray-800 hover:text-white p-2 rounded-full transition-colors"
                      title="Twitter Profile"
                    >
                      <FaTwitter />
                    </a>
                  )} */}
                  {/* {member.social.email && (
                    <a 
                      href={member.social.email} 
                      className="bg-gray-200 hover:bg-red-600 text-gray-800 hover:text-white p-2 rounded-full transition-colors"
                      title="Send Email"
                    >
                      <FaEnvelope />
                    </a>
                  )} */}
                  {/* {member.social.whatsapp && (
                    <a 
                      href={member.social.whatsapp} 
                      className="bg-gray-200 hover:bg-green-500 text-gray-800 hover:text-white p-2 rounded-full transition-colors"
                      title="WhatsApp Profile"
                    >
                      <FaWhatsapp />
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Departments Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-gray-600">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Team Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 mr-3 flex items-center justify-center">1</div>
                Expertise
              </h3>
              <p>Continuous training on the latest automotive technologies and repair techniques.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 mr-3 flex items-center justify-center">2</div>
                Integrity
              </h3>
              <p>Honest assessments and transparent pricing with no hidden fees.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 mr-3 flex items-center justify-center">3</div>
                Community
              </h3>
              <p>Supporting local initiatives and giving back to Nairobi community.</p>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                At Kite Auto Fix & Spares, we're always looking for passionate automotive professionals to join our growing team in Nairobi.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Competitive salaries with performance bonuses</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Continuous professional development opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Modern workshop with state-of-the-art equipment</span>
                </li>
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Current Openings
              </button>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center text-gray-500">
              Team Photo
            </div>
          </div>
        </div>
      </div>
      <WhatsApp/>
    </div>
  );
};

export default OurTeam;
