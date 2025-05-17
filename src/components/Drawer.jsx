import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Drawer = ({ isOpen, onClose, links }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white shadow-xl z-60 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Drawer Header */}
          <div className="p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <Logo className="h-8 w-auto" />
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              Belgrand Pharmaceuticals: Innovating with Bel Vit, Oacal, Bel Nerve Tablet, and more.
            </p>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 p-8 overflow-y-auto bg-white">
            <nav className="mb-12">
              <h3 className="text-base font-semibold text-gray-800 mb-6">Menu</h3>
              <ul className="space-y-5">
                {links && links.length > 0 ? (
                  links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`block py-3 px-4 text-base font-medium rounded-md transition-all duration-200 ${
                          isActive(link.path)
                            ? 'bg-green-500 text-white'
                            : 'text-gray-800 hover:bg-gray-100 hover:text-green-500'
                        }`}
                        onClick={onClose}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No navigation links available</li>
                )}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="mb-12">
              <h3 className="text-base font-semibold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <a
                  href="tel:+918985383540"
                  className="flex items-center text-gray-800 hover:text-green-500 transition-colors text-base"
                >
                  <Phone size={18} className="mr-2" />
                  <span>+91 89853 83540</span>
                </a>
                <a
                  href="mailto:belgrandpharma@gmail.com"
                  className="flex items-center text-gray-800 hover:text-green-500 transition-colors text-base"
                >
                  <Mail size={18} className="mr-2" />
                  <span>belgrandpharma@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-12">
              <h3 className="text-base font-semibold text-gray-800 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="p-2 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  className="p-2 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-2 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  className="p-2 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Book Appointment Button */}
            <Link
              to="/appointment"
              className="block text-center py-3 px-4 bg-green-500 text-white text-base font-semibold rounded-md hover:bg-green-600 transition-all duration-200"
              onClick={onClose}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;