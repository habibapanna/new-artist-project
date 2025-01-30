const MyStory = () => {
    const handleReadMoreClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    return (
        <div className="pt-12">
                  <section
        className="bg-gray-900 text-white py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://i.postimg.cc/Ss2djr5T/artist-3013762-1280.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-12 mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-2/3 flex flex-col lg:flex-row text-white gap-10 bg-white">
            <div className="text-left lg:w-2/5">
              <img
                src="https://i.postimg.cc/4Ntyf93J/dushawn-jovic-2p6o-J4-HQJl0-unsplash.jpg"
                alt="Grace Jones"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-3/5 py-12 lg:text-left text-center px-5">
              <p className="text-amber-500 text-center text-2xl mt-10 font-semibold">
                My Story
              </p>
  
              <p className="mt-4 text-lg text-black">
                Imperdiet lacus sit amet scelerisque commodo. Praesent nec lectus ante. Nulla ultrices ligula vitae pellentesque ullamcorper. Quisque scelerisque varius mattis. Integer ac libero congue, fermentum odio vel, posuere est. Morbi neque elit, pulvinar eu velit non, maximus bibendum arcu. Ut sollicitudin ante sed aliquam lobortis. Curabitur gravida, ipsum ut malesuada congue, metus tellus ornare dui, eget interdum arcu nisi id elit.
              </p>
              <button onClick={handleReadMoreClick} className="mt-6 text-amber-500 hover:underline">
                Read More
              </button>
            </div>
          </div>
  
          <div className="lg:w-1/3 text-white lg:text-left">
            <div className="px-3">
              <p>
                “Donec non ex ultricies, luctus magna ac, auctor felis. Nam ornare, orci vel dapibus dapibus, orci justo lacinia dui, viverra felis neque at sapien.”
              </p>
              <p className="mt-6 text-right text-xl">Grace Jones</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
  };
  
  export default MyStory;
  