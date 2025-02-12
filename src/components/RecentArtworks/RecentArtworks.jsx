import { motion } from "framer-motion";

const RecentArtworks = () => {
  const handleSeeGalleryClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-white px-8 md:px-24">
      <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
        {/* Left Section: Image and Description */}
        <div className="flex flex-col lg:gap-10 md:w-1/2">
          <div className="text-center lg:text-left">
              <motion.img
                className="w-full h-[500px] object-cover shadow-2xl bg-gray-200 p-4 border-8 border-gray-800"
                src="https://i.postimg.cc/k5VzXFpc/pexels-didsss-3041254.jpg"
                alt="Abstract Acrylic"
                whileHover={{ y: -10 }} // Hover animation to move the image up
                transition={{ type: "spring", stiffness: 200 }}
              />
            <h3 className="mt-10 text-amber-500 text-2xl font-semibold">Abstract Artwork</h3>
            <p className="text-sm mt-2">
              Duconvallis massa ultricies. Nulla viverra rutrum dolor, at varius lectus ultrices id. Mauris ipsum eros, pulvinar eu elit luctus.
            </p>
          </div>
        </div>

        {/* Right Section: Recent Artworks */}
        <div className="text-center flex flex-col gap-10 md:w-1/2 md:pl-12 lg:mt-8 md:text-left">
<div>
<h2 className="text-4xl text-amber-500 lg:text-7xl lg:text-left">Recent Artworks</h2>
          <p className="mt-8 text-lg lg:text-left">
            Vestibulum mollis nisi at mauris accumsan dapibus. In dictum dui quis sem ullamcorper, eu convallis massa ultricies. Nulla viverra rutrum dolor, at varius lectus ultrices id. Mauris ipsum eros, pulvinar eu elit luctus, cursus mattis libero.
          </p>
          <button
            onClick={handleSeeGalleryClick}
            className="mt-8 px-8 py-3 border-2 mb-10 font-semibold hover:border-amber-500 
           hover:text-white hover:bg-amber-500 transition-colors"
          >
            SEE GALLERY
          </button>
</div>
          <div className="text-center md:text-left">
            <motion.img
              className="w-full shadow-2xl bg-gray-200 p-4 border-8 border-gray-800 lg:mx-0"
              src="https://i.postimg.cc/VkyPrhXh/pexels-mccutcheon-1212408.jpg"
              alt="Abstract Artwork"
              whileHover={{ y: -10 }} // Hover animation to move the image up
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="mt-10 text-amber-500 text-2xl font-semibold">Abstract Acrylic</h3>
            <p className="text-sm mt-2">
              Duconvallis massa ultricies. Nulla viverra rutrum dolor, at varius lectus ultrices id. Mauris ipsum eros, pulvinar eu elit luctus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArtworks;
