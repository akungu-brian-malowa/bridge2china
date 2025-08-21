const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-[#333] max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative py-8 md:py-16 md:px-8 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-[#8a6725]">
            About Us
          </h1>
          <p className="text-lg md:text-2xl text-center max-w-3xl mx-auto mb-8 md:lg-12 font-bold">
            Your Journey to China Starts Here with Us!!
          </p>

          <div className="bg-[#e5d3c0] rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-center italic">
              "At BridgeToChina, we believe in creating meaningful connections
              between Your businesses and individuals with the dynamic Chinese
              market. Our expertise and dedication make the journey seamless and
              rewarding."
            </p>
          </div>
          <div className="bg-white rounded-2xl p-3 max-w-4xl mx-auto">
            <p className="text-md md:text-xl text-center italic">
              <span className="font-bold">
                Bridge <span className="text-red-700">To</span>China
                VashaThePlace{" "}
              </span>{" "}
              is your trusted gateway to the opportunities and business networks
              of China. We provide seamless, affordable, and reliable services
              for individuals and businesses aiming to explore, connect with,
              and thrive in the Chinese market. Whether you're planning a trip,
              sourcing products, or looking to invest, we help you cross the
              bridge with confidence. We don’t just open doors—we walk the
              journey with you. From paperwork to purchases, we've got your
              back. Let’s help you bridge the gap between where you are and the
              opportunities that await in China.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="md:py-6 py-2 px-4 md:px-8 md:mb-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8a6725] block text-center">
            Our Story
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96">
                <img
                  alt="our"
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                  className="object-cover h-full w-full rounded-md"
                />
              </div>
            </div>
            <div className="md:w-1/2">
               {/* <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#8a6725] md:block hidden bg-red-500">
                Our Story
              </h2> */}
            <div className="md:w-full">
             
              <p className="text-md md:text-lg mb-4 text-center md:text-start">
                Founded in 2018, VashaThePlace began as a small consultancy
                helping Entrepreneurs navigate the complexities of importing
                goods from China. What started as a passion project quickly grew
                into a full-service agency as we recognized the growing demand
                for reliable China to the other parts of the world trade
                facilitation.
              </p>
              <p className="text-md md:text-lg mb-4 text-center md:text-start">
                Today, we've helped over 500 businesses and individuals
                successfully establish connections with Chinese suppliers,
                source quality products, and navigate the import/export process
                with confidence.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="bg-[#8a6725] text-white px-4 py-2 rounded-md text-sm">
                  500+ Clients Served
                </div>
                <div className="bg-[#8a6725] text-white px-4 py-2 rounded-md text-sm">
                  7 Team Members
                </div>
                <div className="bg-[#8a6725] text-white px-4 py-2 rounded-md text-sm">
                  20+ Industries
                </div>
              </div>
            </div>

            </div>
          
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 md:px-8 bg-[#e5d3c0]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8a6725]">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-[#8a6725] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-[#8a6725] text-5xl mb-4">🌉</div>
              <h3 className="text-2xl font-bold mb-4 text-[#8a6725]">
                Our Mission
              </h3>
              <p className="text-md md:text-lg">
                To bridge the gap between Kenyan businesses and the Chinese
                market by providing reliable, efficient, and personalized
                services that simplify cross-border trade and travel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-[#8a6725] text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold mb-4 text-[#8a6725]">
                Our Vision
              </h3>
              <p className="text-md md:text-lg">
                To become East Africa's premier China trade facilitator,
                empowering Kenyan entrepreneurs to compete globally through
                access to quality Chinese products and market opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8a6725]">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#8a6725] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤝",
                title: "Integrity",
                desc: "Honest, transparent dealings in all our relationships",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "Constantly improving our services to better serve you",
              },
              {
                icon: "🎯",
                title: "Excellence",
                desc: "Striving for the highest quality in everything we do",
              },
              {
                icon: "❤️",
                title: "Empathy",
                desc: "Understanding and addressing your unique needs",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#f8f4f0] p-6 rounded-2xl text-center border border-[#e5d3c0]"
              >
                <div className="text-4xl mb-4 text-[#8a6725]">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#8a6725]">
                  {value.title}
                </h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 px-4 md:px-8 bg-[#e5d3c0]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8a6725]">
              Meet Our Team
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Our diverse team brings together expertise in international trade, logistics, and Chinese business culture.
            </p>
            <div className="w-24 h-1 bg-[#8a6725] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Wang Li", role: "Founder & CEO", exp: "10+ years in China-Kenya trade" },
              { name: "Amina Hassan", role: "Operations Director", exp: "Logistics & Supply Chain Expert" },
              { name: "Chen Wei", role: "Market Analyst", exp: "Chinese market specialist" },
              { name: "James Omondi", role: "Client Relations", exp: "Multilingual business consultant" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#8a6725]">{member.name}</h3>
                  <p className="font-semibold mb-2">{member.role}</p>
                  <p className="text-sm">{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#8a6725] rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Opportunities in China?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us guide you through the process with our expertise and
              personalized service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#e5d3c0] text-[#8a6725] font-bold py-3 px-8 rounded-full hover:bg-[#d4c0aa] transition">
                Contact Us
              </button>
              <button className="bg-transparent border-2 border-[#e5d3c0] text-[#e5d3c0] font-bold py-3 px-8 rounded-full hover:bg-[#9e7a3a] transition">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
