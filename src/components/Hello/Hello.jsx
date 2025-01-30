import { MapPin, Phone, Mail } from 'lucide-react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Hello = () => {
  return (
    <div className="px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-20 py-12 px-10 items-center">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[500px] bg-gray-200 rounded-xl shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096674!2d144.95373531550465!3d-37.816279779751595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f81fb5%3A0x1d5c2a2f4517a00!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sbd!4v1676877267579!5m2!1sen!2sbd"
            className="w-full h-full rounded-xl"
            loading="lazy"
          ></iframe>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          {/* Heading and Description */}
          <div className='items-center'>
            <h1 className="text-amber-500 text-4xl lg:text-7xl font-semibold mb-4">Say "Hello"</h1>
            <p className="">
              Consectetur adipisicing elit, send do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullamco.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Get in Touch */}
            <div>
              <h2 className="text-amber-500 text-2xl lg:text-3xl mb-4">Get in Touch</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-black hover:text-amber-500 transition-colors">
                  <Mail className="text-xl" />
                  <span>hello@example.com</span>
                </li>
                <li className="flex items-center gap-3 text-black hover:text-amber-500 transition-colors">
                  <Phone className="text-xl" />
                  <span>+123 456 789</span>
                </li>
                <li className="flex items-center gap-3 text-black hover:text-amber-500 transition-colors">
                  <MapPin className="text-xl" />
                  <span>123 Main Street, Melbourne</span>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h2 className="text-amber-500 text-2xl lg:text-3xl mb-4">Connect</h2>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={`Social link ${index + 1}`}
                    className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all"
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
