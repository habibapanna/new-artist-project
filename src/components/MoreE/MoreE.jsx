import { motion } from "framer-motion";

const MoreE = () => {
  return (
    <div className="mx-auto">
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First item */}
            <div className="flex flex-col items-center text-center">
              <motion.img
                src="https://i.postimg.cc/cJbHXMHN/europeana-5-TK1-F5-Vfd-Ik-unsplash.jpg"
                className="w-[300px] h-[400px] bg-gray-200 p-3 border-8 border-gray-800"
                whileHover={{ y: -10 }} // Hover animation to move the image up
                transition={{ type: "spring", stiffness: 200 }}
              />
              <p className="mt-5">02 May 2018 - 10 May 2018</p>
              <h3 className="text-2xl font-semibold text-amber-500 mb-5">Vegas Art Exhibition</h3>
            </div>

            {/* Second item */}
            <div className="flex flex-col items-center text-center">
              <motion.img
                src="https://i.postimg.cc/W43zGfsn/josefin-xv-Ka-F5e-Ntv8-unsplash.jpg"
                className="w-[300px] h-[400px] bg-gray-200 p-3 border-8 border-gray-800"
                whileHover={{ y: -10 }} // Hover animation to move the image up
                transition={{ type: "spring", stiffness: 200 }}
              />
              <p className="mt-5">12 Apr 2018 - 20 Apr 2018</p>
              <h3 className="text-2xl font-semibold text-amber-500 mb-5">Lyon Mega Exhibition</h3>
            </div>

            {/* Third item */}
            <div className="flex flex-col items-center text-center">
              <motion.img
                src="https://i.postimg.cc/65r8tvHd/boston-public-library-f9c-P4-unmg-unsplash.jpg"
                className="w-[300px] h-[400px] bg-gray-200 p-3 border-8 border-gray-800"
                whileHover={{ y: -10 }} // Hover animation to move the image up
                transition={{ type: "spring", stiffness: 200 }}
              />
              <p className="mt-5">20 Feb 2018 - 01 Mar 2018</p>
              <h3 className="text-2xl mb-5 font-semibold text-amber-500">Paris Painting Exhibition</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreE;
