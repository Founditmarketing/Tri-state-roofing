import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero section
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="grid grid-cols-2 gap-3">
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center gap-2 bg-gray-100 text-gray-900 font-bold py-3 rounded-lg active:bg-gray-200 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 bg-secondary text-white font-bold py-3 rounded-lg active:bg-red-800 transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          Free Quote
        </button>
      </div>
    </div>
  );
};
