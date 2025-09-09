import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/bloodlink-logo.webp" alt="BloodLink Logo" className="w-16 h-16 object-contain"/>
              <h1 className="font-bold text-xl sm:text-2xl">BloodLink</h1>
            </div>
            <p className="text-base sm:text-lg">
              Connecting donors and recipients seamlessly. Join our community to save lives and make a difference.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg sm:text-2xl">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-lg">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-red-500">
                  <FaChevronRight /> About Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-red-500">
                  <FaChevronRight /> Events
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-red-500">
                  <FaChevronRight /> Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-red-500">
                  <FaChevronRight /> Volunteers
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-red-500">
                  <FaChevronRight /> FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg sm:text-2xl">Contact Info</h3>
            <p className="text-sm sm:text-lg flex items-center gap-2">
              <FaPhoneAlt className='text-red-500' /> +98 765 43210
            </p>
            <p className="text-sm sm:text-lg flex items-center gap-2">
              <FaEnvelope className='text-red-500' /> Donors@support.com
            </p>
            <p className="text-sm sm:text-lg flex items-center gap-2">
              <FaMapMarkerAlt className='text-red-500' /> Gulshan, Dhaka, Bangladesh
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-md w-full">
            <h3 className="font-semibold mb-2 text-lg sm:text-2xl">Newsletter</h3>
            <p className="text-sm sm:text-lg mb-2">
              Subscribe to Our Newsletter to receive the newest updates and info.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 py-2 rounded-md text-gray-800 focus:outline-none bg-white w-full"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; 2025 BloodLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
