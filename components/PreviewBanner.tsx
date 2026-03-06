import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export const PreviewBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the banner has been dismissed previously
    const dismissed = localStorage.getItem('preview_banner_dismissed_v2');
    if (!dismissed) {
      // Show after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('preview_banner_dismissed_v2', 'true');
  };

  const handleContact = () => {
    window.location.href = "mailto:trevor@founditmarketing.com?subject=Tri-State%20Roofing%20Template%20Inquiry";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-[100] animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 relative overflow-hidden">
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>

        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col gap-3 mt-1">
          <div>
            <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live Preview
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              This is a high-performance React template for roofing & construction businesses.
            </p>
          </div>

          <div className="flex gap-2 mt-1">
            <button
              onClick={handleContact}
              className="flex-1 bg-gray-900 hover:bg-black text-white text-sm font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              Get This Site
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="text-[10px] text-gray-400 text-center">
            Developed by Found It Marketing
          </div>
        </div>
      </div>
    </div>
  );
};
