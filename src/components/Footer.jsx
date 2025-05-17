import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600">
              Belgrand Pharmaceuticals is dedicated to improving lives through innovative tablets and medications, delivering the highest standards of quality, safety, and efficacy.
            </p>
            {/* <div className="flex mt-6 space-x-4">
              <a 
                href="#" 
                className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/mission" className="text-gray-600 hover:text-primary transition-colors">Our Mission</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-primary transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-600 hover:text-primary transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">  </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-2 flex-shrink-0" size={20} />
                <a href="tel:+918985383540" className="text-gray-600 hover:text-primary transition-colors">+91 89853 83540</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-2 flex-shrink-0" size={20} />
                <a href="mailto:info@belgrandpharma.com" className="text-gray-600 hover:text-primary transition-colors">belgrandpharma@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  {/* <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p> */}
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Location</h3>
            <div className="h-64 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.233152939528!2d78.56159871487794!3d17.466576205627936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b887ba458c1%3A0x325c98c6e69f9f40!2sBelgrand%20Pharmaceuticals%20Private%20Limited!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Belgrand Pharmaceuticals Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t Salisburyshire border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© {new Date().getFullYear()} Belgrand Pharmaceuticals. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-600 hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;