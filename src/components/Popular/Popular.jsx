import { useEffect, useRef } from 'react';

const Popular = () => {
  const containerRef = useRef(null);
  const images = [
    "https://i.postimg.cc/9fTrLg4H/europeana-ryi-Q0-NISRJ4-unsplash.jpg",
    "https://i.postimg.cc/P50Czn5M/painting-3135875-1280.jpg",
    "https://i.postimg.cc/3xkyvxYR/oil-painting-547989-1280.jpg",
    "https://i.postimg.cc/CxyWJLwN/jene-stephaniuk-MCr-F6hnoj-U-unsplash.jpg",
    "https://i.postimg.cc/8zhxYQ5V/raimond-klavins-p31-Hn01-WBe-U-unsplash.jpg",
    "https://i.postimg.cc/HWQ05ZcN/colorful-2468874-1280.jpg",
  ];

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scrollImages = () => {
      if (container) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll for a seamless loop
        }
        container.style.transform = `translateX(-${scrollAmount}px)`;
      }
    };

    const intervalId = setInterval(scrollImages, 20); // Smooth continuous scroll

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Section - Carousel */}
            <div className="w-full overflow-hidden">
              <div
                ref={containerRef}
                className="flex w-max transition-transform duration-500 gap-4"
                style={{ whiteSpace: "nowrap" }}
              >
                {/* Duplicate images for infinite scroll */}
                {[...images, ...images].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-[300px] h-[250px] bg-gray-100 p-2 border-8 rounded-md shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Right Section - Text and Button */}
            <div className="lg:w-2/3 text-center lg:text-left space-y-6">
              <h2 className="text-4xl font-semibold text-amber-500 mb-4">
                Popular Paintings
              </h2>
              <p className="text-lg text-gray-800">
                Aliquam viverra orci ac nisl maximus blandit. Nullam pulvinar libero quis gravida pharetra.
                Donec ut enim vitae dolor laoreet aliquam. Donec vel dolor vestibulum, tristique turpis sed,
                vulputate justo.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-8 py-3 border-2 font-semibold hover:bg-amber-500 hover:text-white transition-colors"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popular;
