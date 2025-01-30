import Hello from "../../Hello/Hello";


const Contact = () => {
    return (
        <div>
                        <div
        className="w-full h-screen flex justify-center items-center lg:justify-start"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/3J3ZMm7v/greg-rosenke-kr67-X9ral-R0-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-amber-500 text-center lg:text-left lg:px-10 text-8xl font-semibold">
        Contact Me.
        </h1>
      </div>
      <Hello></Hello>
        </div>
    );
};

export default Contact;