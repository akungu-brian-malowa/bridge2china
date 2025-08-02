import React from 'react';
import { FaChartLine, FaGlobeAsia, FaUsers, FaShoppingCart, FaIndustry, FaShieldAlt } from 'react-icons/fa';

const WhyChina = () => {
  return (
    <div className="min-h-screen  max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="pt-24 mt-10 pb-4 px-4 text-center [#6a4f1d] text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-[#8a6725]">
            Why China Matters for Your Business
          </h1>
          <p className="text-md md:text-xl mb-6 text-black">
            Discover why China is the world's manufacturing powerhouse and a hub of endless opportunities
          </p>
          <div className="w-24 h-1 bg-[#e5d3c0] mx-auto mb-4"></div>
        </div>
      </div>

      {/* China's Economic Power */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 " />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <FaChartLine className="text-4xl text-[#8a6725] mr-4" />
                <h2 className="text-xl md:text-2xl font-bold text-[#8a6725]">
                  World's Second-Largest Economy
                </h2>
              </div>
              
              <p className="text-gray-700 mb-4 text-md md:text-lg">
                China has transformed from an agrarian society to the world's manufacturing hub in just a few decades. 
                With a GDP of over $17 trillion, it's the second-largest economy globally and the largest exporter by value.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="$3.5T+" label="Annual Exports" />
                <StatCard value="1.4B+" label="Population" />
                <StatCard value="#1" label="Manufacturing Output" />
                <StatCard value="120M+" label="Middle Class Consumers" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Reasons Section */}
      <section className="py-16 bg-[#8a6725] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6725] mb-4">
              Why China is Essential for Global Business
            </h2>
            <div className="w-24 h-1 bg-[#8a6725] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReasonCard 
              icon={<FaGlobeAsia />}
              title="Global Supply Chain Hub"
              description="China produces 28% of global manufacturing output and is integral to supply chains worldwide. Major multinational companies rely on China for manufacturing and sourcing products."
            />
            <ReasonCard 
              icon={<FaUsers />}
              title="Massive Consumer Market"
              description="With a growing middle class and rising incomes, China represents the world's largest consumer market, attracting businesses looking to expand sales and revenue."
            />
            <ReasonCard 
              icon={<FaShoppingCart />}
              title="Diverse Product Range"
              description="From electronics to textiles, China offers an unparalleled variety of products at competitive prices, making it ideal for sourcing across industries."
            />
            <ReasonCard 
              icon={<FaIndustry />}
              title="Manufacturing Ecosystem"
              description="China's complete industrial ecosystem allows for efficient production with access to raw materials, skilled labor, and advanced infrastructure."
            />
            <ReasonCard 
              icon={<FaShieldAlt />}
              title="Quality Improvement"
              description="Chinese manufacturers have significantly improved quality standards while maintaining cost advantages, offering excellent value."
            />
            <ReasonCard 
              icon={<div className="text-3xl">🚀</div>}
              title="Innovation Leader"
              description="China is now a global leader in technology innovation, particularly in e-commerce, fintech, and green energy solutions."
            />
          </div>
        </div>
      </section>

      {/* What to Shop in China */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8a6725] mb-4">
              What to Source from China
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              China offers diverse products across numerous categories at competitive prices
            </p>
            <div className="w-24 h-1 bg-[#8a6725] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCategory 
              title="Electronics & Gadgets" 
              items={['Phones & accessories', 'Computers & parts', 'Smart home devices', 'Power banks']}
              color="bg-blue-100"
            />
            <ProductCategory 
              title="Fashion & Apparel" 
              items={['Clothing & shoes', 'Bags & accessories', 'Jewelry & watches', 'Sunglasses']}
              color="bg-pink-100"
            />
            <ProductCategory 
              title="Home & Kitchen" 
              items={['Cookware & utensils', 'Home decor', 'Furniture', 'Lighting']}
              color="bg-green-100"
            />
            <ProductCategory 
              title="Industrial Supplies" 
              items={['Machinery parts', 'Raw materials', 'Packaging', 'Tools & equipment']}
              color="bg-yellow-100"
            />
          </div>
        </div>
      </section>

      {/* Vasha Advantage */}
      <section className="py-16 bg-[#8a6725] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Choose Vasha as Your Bridge to China?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AdvantageCard 
              title="Local Expertise"
              description="Our team has deep knowledge of both Kenyan and Chinese business cultures"
            />
            <AdvantageCard 
              title="End-to-End Service"
              description="From visa assistance to quality checks and shipping, we handle it all"
            />
            <AdvantageCard 
              title="Cost Efficiency"
              description="We help you navigate China's market to get the best value for your money"
            />
          </div>
          
          <div className="mt-16 bg-white text-[#8a6725] rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl italic">
              "With Vasha, we reduced our sourcing costs by 35% while improving product quality. Their on-ground team in China made all the difference in building reliable supplier relationships."
            </p>
            <div className="mt-6 flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
              <div>
                <p className="font-bold">Sarah Mwangi</p>
                <p className="text-sm">CEO, Nairobi Import Solutions</p>
              </div>
            </div>
          </div>
          
          <button className="mt-10 bg-[#e5d3c0] text-[#8a6725] font-bold py-3 px-8 rounded-full hover:bg-[#d4c0aa] transition-colors duration-300 text-lg">
            Start Your China Journey
          </button>
        </div>
      </section>
    </div>
  );
};

// Component for statistic cards
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-md border border-[#e5d3c0]">
    <div className="text-xl md:text-2xl font-bold text-[#8a6725]">{value}</div>
    <div className="text-gray-600 mt-1">{label}</div>
  </div>
);

// Component for reason cards
const ReasonCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="text-4xl text-[#8a6725] mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-[#8a6725]">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Component for product categories
const ProductCategory = ({ title, items, color }: { 
  title: string; 
  items: string[];
  color: string;
}) => (
  <div className={`${color} p-6 rounded-xl`}>
    <h3 className="text-lg font-bold mb-4 text-[#8a6725]">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-[#8a6725] mr-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Component for advantage cards
const AdvantageCard = ({ title, description }: { 
  title: string; 
  description: string;
}) => (
  <div>
    <div className="w-16 h-16 rounded-full bg-[#e5d3c0] text-[#8a6725] flex items-center justify-center text-xl font-bold mx-auto mb-4">
      ✓
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default WhyChina;
