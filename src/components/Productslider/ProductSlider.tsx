import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  onSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "KSh 12,999",
    originalPrice: "KSh 15,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviews: 124,
    onSale: true
  },
  {
    id: 2,
    name: "Smartphone Pro Max",
    price: "KSh 89,999",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 89,
    isNew: true
  },
  {
    id: 3,
    name: "Luxury Smartwatch Series 7",
    price: "KSh 34,999",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    reviews: 67
  },
  {
    id: 4,
    name: "Ultra-Slim Laptop Pro",
    price: "KSh 129,999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 143
  },
  {
    id: 5,
    name: "Wireless Earbuds Pro",
    price: "KSh 17,999",
    originalPrice: "KSh 19,999",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.4,
    reviews: 98,
    onSale: true
  },
  {
    id: 6,
    name: "DSLR Camera Kit",
    price: "KSh 84,999",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: 112
  },
  {
    id: 7,
    name: "Gaming Console X",
    price: "KSh 49,999",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 201,
    isNew: true
  },
  {
    id: 8,
    name: "Noise Cancelling Headphones",
    price: "KSh 28,999",
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.2,
    reviews: 76
  }
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Auto slide interval reference
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setItemsPerView(1);
        setIsMobile(true);
      } else if (width < 640) {
        setItemsPerView(2);
        setIsMobile(true);
      } else if (width < 768) {
        setItemsPerView(2);
        setIsMobile(true);
      } else if (width < 1024) {
        setItemsPerView(3);
        setIsMobile(false);
      } else {
        setItemsPerView(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, []);

  // Auto slide effect for mobile
  useEffect(() => {
    if (isMobile && !isHovered) {
      // Clear any existing interval
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      
      // Set new interval for auto sliding
      const interval = setInterval(() => {
        setCurrent(prev => 
          prev + 1 >= Math.ceil(products.length / itemsPerView) ? 0 : prev + 1
        );
      }, 3000); // Slide every 3 seconds
      
      // Store interval reference
      autoSlideRef.current = interval;
    }
    
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isMobile, isHovered, itemsPerView]);

  const nextSlide = useCallback(() => {
    setCurrent(prev => 
      prev + 1 >= Math.ceil(products.length / itemsPerView) ? 0 : prev + 1
    );
  }, [itemsPerView]);

  const prevSlide = useCallback(() => {
    setCurrent(prev => 
      prev === 0 ? Math.ceil(products.length / itemsPerView) - 1 : prev - 1
    );
  }, [itemsPerView]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm lg:text-2xl font-bold text-gray-800 flex items-center gap-2">
          Featured Products 
          <span className="text-xs bg-[#8a6725] px-2 py-1 text-white rounded-md">coming soon</span>
        </h2>
        <div className="flex space-x-2">
          <button
            title="Previous Slide"
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            title="Next Slide"
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="flex"
          animate={{ x: `-${current * (100 / itemsPerView)}%` }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="p-3">
                <motion.div 
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    <button title="like" className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    {product.isNew && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-[#8a6725] text-white text-xs font-bold rounded-full">
                        NEW
                      </span>
                    )}
                    {product.onSale && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        SALE
                      </span>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                    
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center">
                        <span className="text-sm font-bold text-gray-800">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-500 line-through ml-2">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows - Only show on hover for desktop, always show for mobile */}
        <AnimatePresence>
          {(isHovered || isMobile) && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                title="Previous Slide"
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                title="Next Slide"
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            title={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-[#8a6725] w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;