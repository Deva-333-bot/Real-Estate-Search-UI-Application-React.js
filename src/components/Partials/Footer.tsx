 import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-white inline-block pb-1">
            About
          </h3>
          <p className="text-sm text-green-100 leading-relaxed mt-2">
             
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-white inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-green-100">
            <li className="hover:text-white cursor-pointer">List Property</li>
            <li className="hover:text-white cursor-pointer">Rent Property</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Events</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-white inline-block pb-1">
            Company
          </h3>
          <ul className="space-y-2 text-green-100">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Codnify.dev</li>
            <li className="hover:text-white cursor-pointer">Arribion Technologies</li>
            <li className="hover:text-white cursor-pointer">DigitilizedDev</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-white inline-block pb-1">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
            <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-900 transition" />
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-200 transition" />
            </a>
            <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-200 transition" />
            </a>
            <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-200 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-green-100 mt-10 border-t border-green-300 pt-4 text-sm">
        © {new Date().getFullYear()} Oduor Daivine Oluoch | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
