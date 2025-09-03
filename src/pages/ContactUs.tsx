import React, { useState } from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebookF, 
  FaInstagram, 
  FaPaperPlane,
  FaWhatsapp,
  FaPassport,
  FaShoppingCart,
} from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';


const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/254721176973?text=Hello%20Vasha%20Team,%20I%20would%20like%20to%20learn%20more%20about%20your%20services",
      "_blank"
    );
  };
  
  return (
    <div className="min-h-screen bg-white py-16 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#221d13] mb-4">
            Contact <span className="text-[#6a4f1d]">Vasha The Place</span>
          </h1>
          <div className="w-24 h-1 bg-[#8a6725] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your trusted bridge to China. Get in touch with us for visa assistance, product sourcing, and market exploration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#8a6725] mb-6">Our Contact Details</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#e5d3c0] p-4 rounded-full mr-4 flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#8a6725] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Main Office</h3>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                  <p className="text-gray-600">Ruiru, next to PCEA Mukuyu Church</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#e5d3c0] p-4 rounded-full mr-4 flex-shrink-0">
                  <FaPhoneAlt className="text-[#8a6725] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+254 721 176 973</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#e5d3c0] p-4 rounded-full mr-4 flex-shrink-0">
                  <FaEnvelope className="text-[#8a6725] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info.vashathebridgetochina@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#e5d3c0] p-4 rounded-full mr-4 flex-shrink-0">
                  <FaClock className="text-[#8a6725] text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#8a6725] mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://web.facebook.com/BridgetochinaToursandTravel" title="Visit our Facebook page" className="bg-gray-200  hover:bg-gray-100 text-[#8a6725] hover:text-white p-3 rounded-full transition-colors duration-300">
                  <FaFacebookF color='blue'/>
                </a>
                
                <a href="#"  title="Follow us on Instagram" className="bg-gray-200  hover:bg-gray-100 text-[#8a6725] hover:text-white p-3 rounded-full transition-colors duration-300">
                  <FaInstagram color='pink' className='font-extrabold'/>
                </a>
                <a href="https://wa.me/721176973?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services" onClick={handleWhatsAppClick} title="Chat with us on WhatsApp" className="bg-gray-200  hover:bg-gray-100 text-[#8a6725] hover:text-white p-3 rounded-full transition-colors duration-300">
                  <FaWhatsapp color='green'/>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#8a6725] mb-6">Send Us a Message</h2>
            
            {submitSuccess && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Success! </strong>
                <span className="block sm:inline">Your message has been sent. We'll get back to you soon.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a6725] focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a6725] focus:border-transparent transition"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a6725] focus:border-transparent transition"
                  placeholder="Service Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a6725] focus:border-transparent transition"
                  placeholder="How can we help you connect with China?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#8a6725] hover:bg-[#6a4f1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8a6725] transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Service Booking Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] rounded-2xl p-8 text-white">
            <div className="flex items-start mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <FaPassport className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Visa Assistance</h3>
                <p className="mt-2 opacity-90">Get help with your China visa application</p>
              </div>
            </div>
            <button 
              onClick={() => window.location.hash = '#contact'} 
              className="w-full bg-white text-[#8a6725] font-bold py-3 px-6 rounded-lg hover:bg-[#f0e6d8] transition"
            >
              Book Consultation
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] rounded-2xl p-8 text-white">
            <div className="flex items-start mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <FaShoppingCart className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Product Sourcing</h3>
                <p className="mt-2 opacity-90">Find reliable suppliers in China</p>
              </div>
            </div>
            <button 
              onClick={() => window.location.hash = '#contact'} 
              className="w-full bg-white text-[#8a6725] font-bold py-3 px-6 rounded-lg hover:bg-[#f0e6d8] transition"
            >
              Start Sourcing
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] rounded-2xl p-8 text-white">
            <div className="flex items-start mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Chat with Us</h3>
                <p className="mt-2 opacity-90">Get instant responses on WhatsApp</p>
              </div>
            </div>
            <button 
              onClick={handleWhatsAppClick} 
              className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition"
            >
              Message on WhatsApp
            </button>
          </div>
        </div>
        
        {/* FAQ Section */}
        {/* <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-[#8a6725] mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900">How long does the visa process take?</h3>
              <p className="mt-2 text-gray-600">Typically 5-10 business days, but we offer expedited services for urgent cases.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900">Can you help with quality inspections?</h3>
              <p className="mt-2 text-gray-600">Yes, we provide comprehensive quality inspection services before shipping to ensure product standards.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900">What are your service fees?</h3>
              <p className="mt-2 text-gray-600">Our standard service fee is Ksh 10,000, with additional costs depending on the specific services required.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Do you handle shipping to Kenya?</h3>
              <p className="mt-2 text-gray-600">Yes, we provide end-to-end shipping solutions including customs clearance and door-to-door delivery.</p>
            </div>
          </div>
        </div> */}
        
        {/* Testimonial Section */}
        <div className="mt-16 bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <FaQuoteLeft className="text-4xl text-[#e5d3c0] mx-auto mb-6" />
            <p className="text-lg md:text-xl italic mb-8">
              "Vasha The Place transformed our sourcing experience. Their team in China handled everything from supplier identification to quality checks, saving us time and money. The shipping process was seamless, and the quality exceeded our expectations."
            </p>
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
              <div>
                <p className="font-bold">Michael Ochieng</p>
                <p className="text-[#e5d3c0]">Director, Nairobi Import Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;