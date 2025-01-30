import { motion } from "framer-motion";

const Banner = () => {
  const handleSeeGalleryClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero min-h-screen mt-16 lg:mt-24 px-6 lg:px-16 pb-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16">
        {/* Framer Motion for hover effect */}
        <motion.img
          className="w-full bg-gray-200 border-8 border-gray-800 p-5 lg:w-1/2 shadow-lg"
          src="https://i.postimg.cc/R0RD1NpK/steve-johnson-e5-Ldl-AMpk-Ew-unsplash.jpg"
          whileHover={{ y: -10 }} // Move image up by 10px on hover
          transition={{ type: "spring", stiffness: 200 }}
          alt="Nature-Inspired Artwork"
        />
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-2xl font-bold mb-3">All My Artworks Are</h1>
          <h1 className="text-3xl lg:text-7xl text-amber-500 font-bold">
            Inspired by Nature
          </h1>
          <p className="py-6 text-sm lg:text-base">
            Vestibulum mollis nisi at mauris accumsan dapibus. In dictum dui
            quis sem ullamcorper, eu convallis massa ultricies. Nulla viverra
            rutrum dolor, at varius lectus ultrices id. Mauris ipsum eros,
            pulvinar eu elit luctus, cursus mattis libero.
          </p>
          <button
            onClick={handleSeeGalleryClick}
            className="border-2 hover:border-amber-500 border-white py-2 px-8 font-semibold hover:bg-amber-500"
          >
            SEE GALLERY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
