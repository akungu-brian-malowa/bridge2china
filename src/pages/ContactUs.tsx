import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaPaperPlane, FaWhatsapp, FaCar } from 'react-icons/fa';
import WhatsApp from '../components/whatsApp/WhatsApp';

const ContactUs: React.FC = () => {

  const handleWhatsAppClick = () => {
    // WhatsApp link
    window.open(
      "https://wa.me/707854674?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services",
      "_blank"
    );
  };


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
  
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-red-600">Kite Auto Fix & Spares</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're conveniently located at Dagoretti Corner, Nairobi. Visit us or get in touch for all your automotive needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Nairobi Location</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                  <FaMapMarkerAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">Dagoretti Corner </p>
                  <p className="text-gray-600">Plot 6</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                  <FaPhoneAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+254 707 854 674</p>
                  {/* <p className="text-gray-600">+254 733 987 654 (Emergency)</p> */}
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                  <FaEnvelope className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@kiteautofix.co.ke</p>
                  {/* <p className="text-gray-600">service@kiteautofix.co.ke</p> */}
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-4 rounded-full mr-4 flex-shrink-0">
                  <FaClock className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" title="Visit our Facebook page" className="bg-gray-200 hover:bg-blue-600 text-gray-800 hover:text-white p-3 rounded-full transition-colors duration-300">
                  <FaFacebookF />
                </a>
                <a href="#" title="Follow us on Twitter" className="bg-gray-200 hover:bg-blue-400 text-gray-800 hover:text-white p-3 rounded-full transition-colors duration-300">
                  <FaTwitter />
                </a>
                <a href="#"  title="Follow us on Instagram" className="bg-gray-200 hover:bg-pink-600 text-gray-800 hover:text-white p-3 rounded-full transition-colors duration-300">
                  <FaInstagram />
                </a>
                <a href="#" onClick={handleWhatsAppClick} title="Chat with us on WhatsApp" className="bg-gray-200 hover:bg-green-500 text-gray-800 hover:text-white p-3 rounded-full transition-colors duration-300">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="John Kamau"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="john@example.com"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
        
        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-96 w-full">
            <iframe 
              title="Kite Auto Fix & Spares Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810099514651!2d36.76643661475774!3d-1.2836795359800003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a2e3a5e3a5b%3A0x3e1f1a2e3a5e3a5b!2sDagoretti%20Corner%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1650000000000!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Visit Our Auto Shop at Dagoretti Corner</h3>
              <a 
                href="https://goo.gl/maps/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
        
        {/* Service Booking Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
            <div className="flex items-start mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <FaCar className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Book a Service Appointment</h3>
                <p className="mt-2 opacity-90">Schedule your vehicle maintenance at your convenience</p>
              </div>
            </div>
            <button onClick={handleWhatsAppClick} className="w-full bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
              Book Now
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
            <div className="flex items-start mb-6">
              <div  className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Chat with Us on WhatsApp</h3>
                <p className="mt-2 opacity-90">Get instant responses to your queries</p>
              </div>
            </div>
            <button onClick={handleWhatsAppClick} className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition">
              Message Us
            </button>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900">How quickly can I get an appointment?</h3>
              <p className="mt-2 text-gray-600">We typically have same-day or next-day appointments available. For urgent repairs, we'll do our best to accommodate you immediately.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900">Do you offer warranties on repairs?</h3>
              <p className="mt-2 text-gray-600">Yes, all our repairs come with a 12-month/20,000km warranty, whichever comes first.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-600">We accept M-Pesa, cash, all major credit cards, and mobile banking options.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Do you service all makes and models?</h3>
              <p className="mt-2 text-gray-600">Yes, our certified technicians are trained to work on domestic, European, and Asian vehicles of all makes and models.</p>
            </div>
          </div>
        </div>
      </div>
      <WhatsApp/>
    </div>
  );
}

export default ContactUs;
