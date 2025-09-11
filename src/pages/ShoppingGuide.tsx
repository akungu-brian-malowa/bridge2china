import {
  FaShoppingCart,
  FaShippingFast,
  FaSearch,
  FaCheckCircle,
  FaStar,
  FaTruck,
} from "react-icons/fa";

const ShoppingGuide = () => {
  // What to shop in China
  const categories = [
    {
      title: "Electronics & Gadgets",
      items: [
        "Phones & accessories",
        "Computers & parts",
        "Smart home devices",
        "Power banks",
        "Smart watches",
        "Camera equipment",
      ],
      icon: "📱",
    },
    {
      title: "Fashion & Apparel",
      items: [
        "Clothing & shoes",
        "Bags & accessories",
        "Jewelry & watches",
        "Sunglasses",
        "Sportswear",
        "Traditional outfits",
      ],
      icon: "👗",
    },
    {
      title: "Home & Kitchen",
      items: [
        "Cookware & utensils",
        "Home decor",
        "Furniture",
        "Lighting",
        "Bedding",
        "Smart appliances",
      ],
      icon: "🏠",
    },
    {
      title: "Beauty & Personal Care",
      items: [
        "Skincare products",
        "Makeup",
        "Hair care",
        "Fragrances",
        "Beauty tools",
        "Personal gadgets",
      ],
      icon: "💄",
    },
    {
      title: "Toys & Games",
      items: [
        "Educational toys",
        "Electronic toys",
        "Board games",
        "Outdoor toys",
        "Collectibles",
        "Puzzles",
      ],
      icon: "🧸",
    },
    {
      title: "Industrial Supplies",
      items: [
        "Machinery parts",
        "Raw materials",
        "Packaging",
        "Tools & equipment",
        "Safety gear",
        "Electrical components",
      ],
      icon: "⚙️",
    },
  ];

  // Where to shop - updated with URLs and logos
  const platforms = [
    {
      name: "Alibaba",
      type: "B2B Marketplace",
      bestFor: "Wholesale purchases",
      url: "https://www.alibaba.com",
      logo: "/logos/alibaba.png",
    },
    {
      name: "AliExpress",
      type: "Retail Marketplace",
      bestFor: "Small quantity orders",
      url: "https://www.aliexpress.com",
      logo: "/logos/aliexpress.png",
    },
    {
      name: "Shein",
      type: "Fashion Retailer",
      bestFor: "Trendy clothing",
      url: "https://www.shein.com",
      logo: "/logos/shein.png",
    },
    {
      name: "JD.com",
      type: "E-commerce Platform",
      bestFor: "Electronics & appliances",
      url: "https://www.jd.com",
      logo: "/logos/jd.png",
    },
    {
      name: "Taobao",
      type: "C2C Marketplace",
      bestFor: "Unique items & crafts",
      url: "https://www.taobao.com",
      logo: "/logos/taobao.png",
    },
    {
      name: "Tmall",
      type: "B2C Marketplace",
      bestFor: "Branded products",
      url: "https://www.tmall.com",
      logo: "/logos/tmall.png",
    },
    {
      name: "DHgate",
      type: "Wholesale Marketplace",
      bestFor: "Small business owners",
      url: "https://www.dhgate.com",
      logo: "/logos/dhgate.png",
    },
    {
      name: "Banggood",
      type: "Retailer",
      bestFor: "Gadgets & electronics",
      url: "https://www.banggood.com",
      logo: "/logos/banggood.png",
    },
    {
      name: "1688",
      type: "Wholesale Marketplace",
      bestFor: "Gadgets & electronics",
      url: "https://www.1688.com",
      logo: "/logos/banggood.png",
    },
    {
      name: "Made In China",
      type: "Supplier",
      bestFor: "Gadgets & electronics",
      url: "https://www.madeinchina.com",
      logo: "/logos/banggood.png",
    },
    {
      name: "dhgate",
      type: "E-commerce Platform",
      bestFor: "Gadgets & electronics",
      url: "https://www.dhgate.com",
      logo: "/logos/banggood.png",
    },
  ];

  // Shopping tips
  const tips = [
    {
      title: "Verify Suppliers",
      icon: <FaSearch />,
      description: "Always check seller ratings and reviews before purchasing",
    },
    {
      title: "Order Samples",
      icon: <FaCheckCircle />,
      description: "Request product samples before placing large orders",
    },
    {
      title: "Negotiate Prices",
      icon: <FaStar />,
      description:
        "Most suppliers are open to negotiation, especially on bulk orders",
    },
    {
      title: "Understand Shipping",
      icon: <FaTruck />,
      description:
        "Factor in shipping costs and timelines when planning orders",
    },
  ];

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 text-center bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] text-white mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            China Shopping Guide
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your comprehensive resource for sourcing products from China's vast
            market
          </p>
          <div className="w-24 h-1 bg-[#e5d3c0] mx-auto mb-10"></div>
        </div>
      </div>

      {/* What to Shop Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6725] mb-4">
              What to Buy in China
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              China offers an unparalleled variety of products across numerous
              categories
            </p>
            <div className="w-24 h-1 bg-[#8a6725] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#8a6725] text-white p-4 flex items-center">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#8a6725] mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Shop Section - Updated with links and logos */}
      <section className="py-16 bg-[#e5d3c0] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6725] mb-4">
              Where to Shop in China
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Top platforms for sourcing products from China
            </p>
            <div className="w-24 h-1 bg-[#8a6725] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow hover:bg-[#f9f5eb]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <h3 className="text-md font-bold text-[#8a6725]">
                      {platform.name}
                    </h3>
                  </div>
                  <span className="bg-[#e5d3c0] text-[#8a6725] px-1 py-1 rounded text-xs font-bold">
                    {platform.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{platform.bestFor}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">4.8</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-6xl text-[#8a6725]">💡</div>
              <div>
                <h3 className="text-xl font-bold text-[#8a6725] mb-3">
                  Platform Selection Tip
                </h3>
                <p className="text-gray-700">
                  Choose platforms based on your needs: Alibaba and DHgate are
                  best for wholesale, AliExpress for small quantity orders, and
                  Tmall for authentic branded products. For fashion, Shein
                  offers trendy items at competitive prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6725] mb-4">
              Smart Shopping Tips
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Essential advice for successful sourcing from China
            </p>
            <div className="w-24 h-1 bg-[#8a6725] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-[#e5d3c0]"
              >
                <div className="text-3xl text-[#8a6725] mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#8a6725]">
                  {tip.title}
                </h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#8a6725] text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Avoid These Common Mistakes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Not verifying supplier credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Ignoring shipping costs in budget planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Failing to request product samples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Not considering import duties and taxes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#8a6725]">
                Best Practices
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#8a6725] mr-2">•</span>
                  <span>Start with small orders to test suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8a6725] mr-2">•</span>
                  <span>Use secure payment methods with buyer protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8a6725] mr-2">•</span>
                  <span>
                    Communicate clearly and confirm all details in writing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8a6725] mr-2">•</span>
                  <span>Factor in extra time for customs clearance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vasha Advantage Section */}
      <section className="py-16 bg-gradient-to-r from-[#8a6725] to-[#6a4f1d] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-2xl font-bold mb-4">
              Why Shop Through Bridge To China?
            </h2>
            <div className="w-24 h-1 bg-[#e5d3c0] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#e5d3c0] text-[#8a6725] w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <FaShoppingCart />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Sourcing</h3>
              <p>
                We handle supplier identification, negotiation, and ordering
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#e5d3c0] text-[#8a6725] w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <FaSearch />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p>
                Our team performs thorough quality inspections before shipping
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#e5d3c0] text-[#8a6725] w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <FaShippingFast />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Reliable Assisted Shipping
              </h3>
              <p>Door-to-door delivery with customs clearance handled</p>
            </div>
          </div>

          <div className="mt-16 bg-white text-[#8a6725] rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-5xl">📦</div>
              <div>
                <h3 className="text-sm md:text-xl font-bold mb-3">
                  Ready to Start Shopping in China?
                </h3>
                <p className="mb-6">
                  Let Bridge To China handle your China sourcing needs. Our
                  local expertise and on-ground team ensure you get quality
                  products at competitive prices with minimal hassle.
                </p>
                <button className="bg-[#8a6725] text-white font-bold py-3 px-8 rounded-full hover:bg-[#6a4f1d] transition">
                  Start Your Sourcing Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24" />
            <div>
              <p className="text-base italic text-gray-700 mb-4">
                "Bridge To China makes sourcing easy for both individuals who
                can’t meet China MOQ and wholesale buyers. From supplier vetting
                to shipping, they saved us money and ensured smooth delivery."
              </p>

              <div>
                <p className="font-bold text-[#8a6725]">Sarah Kinyua</p>
                <p className="text-gray-600">Owner, Nairobi Boutique</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingGuide;
