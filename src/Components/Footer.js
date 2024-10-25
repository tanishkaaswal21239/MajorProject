import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="text-gray-400">
            GreenXchange builds technology to unlock climate action at scale.
          </p>
          <div className="mt-6">
            <p className="text-sm font-semibold">Sign up to our newsletter</p>
            <button className="mt-4 px-6 py-2 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy & Complaints</a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms of service</a>
            </li>
            <li>
              <a href="/cookie" className="text-gray-400 hover:text-white">Cookie policy</a>
            </li>
            <li>
              <a href="/legal-notice" className="text-gray-400 hover:text-white">Legal notice</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">Contact us</a>
            </li>
            <li>
              <a href="/blog" className="text-gray-400 hover:text-white">Blog</a>
            </li>
            <li>
              <a href="/jobs" className="text-gray-400 hover:text-white">Jobs</a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">About GreenXchange</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Community</h3>
          <ul className="space-y-2">
            <li>
              <a href="/github" className="text-gray-400 hover:text-white">Github</a>
            </li>
            <li>
              <a href="/documentation" className="text-gray-400 hover:text-white">Documentation</a>
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="/twitter" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} /> {/* Correctly using FontAwesomeIcon */}
            </a>
            <a href="/linkedin" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} /> {/* Correctly using FontAwesomeIcon */}
            </a>
            <a href="/discord" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faDiscord} /> {/* Correctly using FontAwesomeIcon */}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        © 2024 GreenXchange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
