import { FaFacebook, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-12">
        <footer className="bg-black py-12 px-10">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center text-center mb-10">
        {/* Contact Information */}
        <div className="text-white mb-6">
          <h3 className="font-semibold text-amber-500 text-xl mb-2">Contact</h3>
          <p>+01234-56789</p>
          <p>+123-456-7890</p>
        </div>

        {/* Location Information */}
        <div className="text-white lg:text-center mb-6 lg:mb-0">
          <h3 className="font-semibold text-amber-500 text-xl mb-2">Location</h3>
          <p>36 Battersea Square</p>
          <p>London (U.K.)</p>
        </div>

        {/* Social Media Links */}
        <div className="text-white">
          <h3 className="font-semibold text-amber-500 text-xl mb-2">Follow</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-amber-500">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-amber-500">
              <FaBehance className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-amber-500">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-white pt-12">
        <p>&copy; Copyright © 2025 Artist | Powered by Artist</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
