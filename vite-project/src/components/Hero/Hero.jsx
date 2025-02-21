const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} // Replace with your image path
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
      
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Fitness Journey</h1>
        <p className="text-lg md:text-xl mb-6">Join the best gym and achieve your fitness goals today.</p>
        
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
