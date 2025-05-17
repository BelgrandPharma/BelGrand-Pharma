import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Drawer from './Drawer';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Mission', path: '/mission' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/15 backdrop-blur-md border-b border-white/25 py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-base font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-secondary'
                    : isScrolled
                    ? 'text-gray-800 hover:text-primary'
                    : isHomePage
                    ? 'text-white hover:text-primary'
                    : 'text-primary hover:text-primary-dark'
                } group`}
              >
                {link.name}
                {/* Animated underline */}
                {!isActive(link.path) && (
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transform transition-all duration-300 ease-in-out ${
                      isScrolled ? 'group-hover:w-full' : 'group-hover:w-full'
                    } w-0`}
                  ></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918985383540"
              className={`flex items-center transition-colors ${
                isScrolled
                  ? 'text-primary hover:text-primary-dark'
                  : isHomePage
                  ? 'text-white hover:text-primary'
                  : 'text-primary hover:text-primary-dark'
              }`}
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+91 89853 83540</span>
            </a>
            <Link to="/appointment" className="btn btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden focus:outline-none p-2 ${
              isScrolled ? 'text-gray-800' : isHomePage ? 'text-white' : 'text-primary'
            }`}
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} onClose={toggleDrawer} links={navLinks} />
    </header>
  );
};

export default Header;