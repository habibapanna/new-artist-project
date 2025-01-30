import { motion } from "framer-motion";

const Exhibitions = () => {
    return (
        <div className="pt-12">
            <section className="py-12">
  <div className="container mx-auto px-6 lg:px-8"> 
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20"> 

      <div className="lg:w-1/2 text-center lg:text-right"> 
        <h2 className="font-semibold text-amber-500 text-4xl lg:text-7xl mb-4">Exhibitions</h2> 
        <p className=" leading-relaxed text-gray-800">
          Vestibulum mollis nisi at mauris accumsan dapibus. In dictum dui quis sem
          ullamcorper, eu convallis massa ultricies. Nulla viverra rutrum dolor, at
          varius lectus ultrices id. Mauris ipsum eros, pulvinar eu elit luctus, cursus
          mattis libero. Nulla eget felis elementum, semper purus eu, imperdiet leo.
        </p>
      </div>
      
      <div className="lg:w-1/2"> 
        <div className=""> 
          <motion.img
            src="https://i.postimg.cc/HWQ05ZcN/colorful-2468874-1280.jpg"
            alt="Exhibition Artwork"
            className="w-full bg-gray-200 p-3 border-8 border-gray-800"
            whileHover={{ y: -10 }} // Hover animation to move the image up
                transition={{ type: "spring", stiffness: 200 }} 
          />
          <p className="pt-5 text-center">10 Jun 2018 - 20 Jun 2018</p>
            <p className="text-2xl text-center font-semibold text-amber-500">Italian Artist Mega Meet</p> 
          
        </div>
      </div>

    </div>
  </div>
</section>
        </div>
    );
};

export default Exhibitions;