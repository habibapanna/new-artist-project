const Grace = () => {
    return (
      <div className="py-12">
        <section
          className="py-12 px-10 bg-gray-800"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://i.postimg.cc/4Ntyf93J/dushawn-jovic-2p6o-J4-HQJl0-unsplash.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container py-12 mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-white">
              <div className="">
                {/* Any additional content can go here */}
              </div>
              <p className="text-4xl">I am</p>
              <h2 className="text-6xl font-semibold mt-8 text-amber-500">Grace Jones</h2>
              <p className="mt-6 leading-relaxed">
                "Imperdiet lacus sit amet scelerisque commodo. Praesent nec lectus ante. Nulla ultrices ligula vitae pellentesque ullamcorper. Quisque scelerisque varius mattis. Integer ac libero congue, fermentum odio vel, posuere est. Morbi neque elit, pulvinar eu velit non, maximus bibendum arcu. Ut sollicitudin ante sed aliquam lobortis. Curabitur gravida, ipsum ut malesuada congue, metus tellus ornare dui, eget interdum arcu nisi id elit."
              </p>
              <p className="mt-12 text-right text-2xl">
                -grace jones
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Grace;
  