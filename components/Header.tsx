import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer, Clock, AlertCircle } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Utility Top Bar */}
      <div className="bg-primary text-white text-xs sm:text-sm py-2 px-4 hidden md:block">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>Mon-Fri: 7am - 6pm</span>
            </span>
            <span className="flex items-center gap-2 font-semibold text-yellow-300">
              <AlertCircle className="w-4 h-4" />
              <span>24/7 Emergency Storm Response Available</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#contact" className="hover:text-accent transition-colors">Request Inspection</a>
            <span>|</span>
            <a href="#contact" className="hover:text-accent transition-colors">Careers</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-white shadow-lg py-2 border-gray-100' : 'bg-white/95 backdrop-blur-sm py-4 md:bg-transparent md:text-white'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <img
                  src="/tristatelogo.png"
                  alt="Tri-State Roofing Logo"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${isScrolled
                    ? 'text-gray-700 hover:text-secondary'
                    : 'text-gray-100 hover:text-white text-shadow'
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className={`hidden md:flex items-center space-x-2 font-bold ${isScrolled ? 'text-secondary' : 'text-white'}`}
              >
                <Phone className="h-4 w-4" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-md ${isScrolled || window.innerWidth < 768 ? 'text-gray-700' : 'text-white bg-black/20 backdrop-blur-sm'}`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200 animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-100 my-2 pt-2">
                <p className="px-3 text-xs text-secondary font-bold uppercase mb-2">Emergency Service</p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="block w-full text-center px-3 py-3 rounded-md text-base font-medium bg-secondary text-white shadow-sm"
                >
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
