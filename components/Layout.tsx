import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileStickyCTA } from './MobileStickyCTA';
import { ChatWidget } from './ChatWidget';
import { PreviewBanner } from './PreviewBanner';

export const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change (or to the hash target on the homepage anchors)
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
      <ChatWidget />
      <PreviewBanner />
    </div>
  );
};
