const Hero: React.FC = () => {
  return (
    //@ts-ignore
    <section
      id="home"
      
      className="pt-24 pb-16 md:pt-32 md:pb-24 text-white h-[55vh] text-center items-center flex bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(229, 211, 192, 0.3)), url('https://images.pexels.com/photos/2873687/pexels-photo-2873687.jpeg')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl iteme-center text-center my-auto">
        <h1 className="text-lg md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6 uppercase text-center">
          Discover THE WORLD
        </h1>
        <p className="text-sm md:text-xl mb-2 md:mb-8 text-center  text-white font-bold ">
          Bridge To China, Vasha The Place is your trusted gateway and
          opportunities and bussiness network to China whether you are planning
          for trips, sourcing products or looking to invest, we help you cross
          the bridge with confidence{" "}
        </p>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-[#8a6725] hover:bg-[#e5d3c0] text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
          >
            START YOUR ADVENTURE!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
