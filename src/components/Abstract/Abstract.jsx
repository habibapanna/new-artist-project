import { motion } from "framer-motion";

const Abstract = () => {
  const handleSeeGalleryClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-12">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
            {/* Left Section - Text */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl lg:text-6xl font-semibold text-amber-500 mb-4">
                Abstract Paintings
              </h2>
              <p className="text-lg text-gray-800 mb-6">
                Aliquam viverra orci ac nisl maximus blandit. Nullam pulvinar libero quis
                gravida pharetra. Donec ut enim vitae dolor laoreet aliquam. Donec vel
                dolor vestibulum, tristique turpis sed, vulputate justo.
              </p>
              <button
                onClick={handleSeeGalleryClick}
                className="px-8 py-3 border-2 font-semibold hover:bg-amber-500 hover:text-white transition-colors"
              >
                BUY NOW
              </button>
            </div>

            {/* Right Section - Images */}
            <div className="lg:w-2/3 flex flex-col lg:flex-row lg:gap-4 items-center lg:mr-8">
              {/* First Column - Images */}
              <div className="flex flex-col gap-8 lg:w-1/2">
                <motion.img
                  src="https://i.postimg.cc/HWQ05ZcN/colorful-2468874-1280.jpg"
                  alt="Abstract Painting 1"
                  className="w-full lg:w-[350px] h-[400px] lg:h-[300px] bg-gray-200 p-3 border-8 border-gray-800 shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <motion.img
                  src="https://i.postimg.cc/8zhxYQ5V/raimond-klavins-p31-Hn01-WBe-U-unsplash.jpg"
                  alt="Abstract Painting 2"
                  className="w-full lg:w-[350px] h-[400px] lg:h-[300px] bg-gray-200 p-3 border-8 border-gray-800 shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>

              {/* Second Column - Image */}
              <div className="lg:w-1/2 pt-8 w-full">
                <motion.img
                  src="https://i.postimg.cc/CxyWJLwN/jene-stephaniuk-MCr-F6hnoj-U-unsplash.jpg"
                  alt="Abstract Painting 3"
                  className="w-full h-[400px]  bg-gray-200 p-3 border-8 border-gray-800 shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abstract;
