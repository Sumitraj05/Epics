
const Home = () => {
  
  return (
    <section className="relative w-full overflow-hidden bg-gray-100 py-10">
      <div className="container mx-auto flex items-center gap-x-10 justify-center">
       
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center p-5">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Crime App</h1>
            <p className="text-gray-700 mb-4">Description</p>
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Read More
            </a>
          </div>
          <div className="md:w-1/2">
            <img src="public/slider-img.png" alt="Slide" className="w-full h-auto" />
          </div>
        </div>
        
      </div>
      
    
    </section>
  );
};

export default Home;
