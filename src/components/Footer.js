import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sargas</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              AI-powered web and mobile development company delivering high-quality solutions in record time.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contacts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Web Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Mobile Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Support and Maintenance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Sargas. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;