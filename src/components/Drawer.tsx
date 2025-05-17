import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; path: string }[];
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, links }) => {
  const location = useLocation();

  // Close drawer on location change
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-primary">Menu</h2>
            </div>
            <nav className="mb-8">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`block py-2 text-base font-medium ${
                        isActive(link.path)
                          ? 'text-primary border-l-4 border-secondary pl-3'
                          : 'text-gray-600 hover:text-primary'
                      }`}
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-4">
              <a
                href="tel:+911234567890"
                className="flex items-center text-primary hover:text-primary-dark transition-colors"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">+91 1234 567 890</span>
              </a>
              <Link
                to="/appointment"
                className="btn btn-primary w-full text-center"
                onClick={onClose}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;