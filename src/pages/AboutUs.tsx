import React from "react";
import { FaUser } from "react-icons/fa"; // Import FaUser
import WhatsApp from "../components/whatsApp/WhatsApp";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">Kite Auto Fix & Spares</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted automotive partner since 2010, delivering excellence in
            every repair
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Technician working"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Modern equipment"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Customer service"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Vehicle inspection"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-xl w-3/4">
              <p className="text-xl font-bold">10+ Years</p>
              <p className="text-sm">of automotive excellence</p>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 by automotive engineer Calvin Bwire, Kite Auto
                Fix & Spares began as a small neighborhood garage in Dagorreti
                Coner. What started as a two-bay operation with just three
                employees has grown into a premier automotive service center
                with 12 certified technicians and state-of-the-art diagnostic
                equipment.
              </p>
              <p className="text-gray-600">
                Our growth has been fueled by a simple philosophy: treat every
                customer's vehicle as if it were our own. This commitment to
                excellence has earned us the "Best Auto Repair" award from the
                three years running.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-red-600 rounded-full mr-3 flex items-center justify-center text-white text-sm">
                    1
                  </span>
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To provide transparent, reliable automotive services that
                  exceed expectations while maintaining the highest standards of
                  integrity and craftsmanship.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-6 h-6 bg-red-600 rounded-full mr-3 flex items-center justify-center text-white text-sm">
                    2
                  </span>
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To revolutionize auto repair through continuous innovation
                  while preserving the personal touch of neighborhood service.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      ASE Certified Technicians
                    </h4>
                    <p className="text-gray-600 text-sm">
                      All technicians certified with ongoing training
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">3-Year Warranty</h4>
                    <p className="text-gray-600 text-sm">
                      Industry-leading warranty on all repairs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Genuine Parts</h4>
                    <p className="text-gray-600 text-sm">
                      OEM and premium aftermarket options
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Free Pickup/Delivery
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Within 15 miles of our location
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Calvin Bwire",
                role: "Founder & CEO",
                bio: "15+ years in automotive engineering",
              },
              {
                name: "Tracey Ochabo",
                role: "Service Manager",
                bio: "Sales Representative",
              },
              {
                name: "Abraham Ochieng",
                role: "Parts Director",
                bio: "Supply chain specialist with 15 years experience",
              },
              {
                name: "Emily Atieno",
                role: "Customer Relations",
                bio: "Dedicated to exceptional service experiences",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Replaced image with FaUser icon */}
                <div className="w-full h-64 bg-gray-50 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-5xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-2">{person.role}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gray-900 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Vehicles Serviced" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "45 min", label: "Average Wait Time" },
              { value: "24/7", label: "Roadside Assistance" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-red-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WhatsApp />
    </div>
  );
};

export default AboutUs;
