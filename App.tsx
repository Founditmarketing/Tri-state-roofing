import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Financing } from './components/Financing';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { ServiceAreas } from './components/ServiceAreas';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { PreviewBanner } from './components/PreviewBanner';
import { COMPANY_NAME } from './constants';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 pb-24 md:pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center space-x-2 text-white mb-4">
          <img
            src="/tristatelogo.png"
            alt="Tri-State Roofing Logo"
            className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1"
          />
        </div>
        <p className="max-w-xs text-sm mb-6">
          Providing top-tier roofing, siding, and construction services to Quincy, IL, Hannibal, MO, and Keokuk, IA.
          Family owned and operated since 2005.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/tristateroofingii/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[#1877F2] transition-colors cursor-pointer flex items-center justify-center text-white"
            aria-label="Facebook"
          >
            <Facebook size={18} fill="currentColor" />
          </a>
          <a
            href="https://www.yelp.com/biz/tri-state-roofing-ii-quincy-2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[#FF1A1A] transition-colors cursor-pointer flex items-center justify-center text-white"
            aria-label="Yelp"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12.188 18.003L12.585 14.51C12.721 13.313 13.125 12.871 13.918 12.98L17.228 13.439C17.702 13.504 18.067 13.193 18.04 12.723L17.848 9.389C17.821 8.919 17.433 8.571 16.98 8.608L13.674 8.878C12.882 8.943 12.378 8.636 12.164 7.868L11.266 4.594C11.137 4.128 10.707 3.864 10.301 3.999L7.207 5.029C6.801 5.163 6.649 5.626 6.864 6.06L8.434 9.215C8.809 9.969 8.618 10.499 7.863 10.822L4.698 12.174C4.244 12.368 4.103 12.871 4.381 13.298L6.474 15.932C6.752 16.359 7.234 16.398 7.549 16.02L9.851 13.253C10.4 12.595 10.966 12.639 11.116 13.435L11.751 16.892C11.841 17.388 12.441 17.653 12.894 17.456L15.992 16.104" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
          <li><a href="#portfolio" className="hover:text-white transition-colors">Our Work</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
        <ul className="space-y-2 text-sm">
          <li>Storm Damage Restoration</li>
          <li>Residential Roofing</li>
          <li>Commercial Roofing</li>
          <li>Siding & Gutters</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        <a
          href="https://www.bbb.org/us/il/quincy/profile/roofing-contractors/tri-state-roofing-ii-llc-0734-1000040355/#sealclick"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 hover:opacity-80 transition-opacity"
        >
          <img
            src="/BBBseal.png"
            alt="BBB Accredited A+"
            className="h-10 w-auto bg-white rounded-sm p-0.5"
          />
        </a>
      </div>
      <p className="mt-2 md:mt-0 text-gray-600">Licensed • Bonded • Insured</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Features />
        <Services />
        <BeforeAfter />
        <Process />
        <Financing />
        <About />
        <Portfolio />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
      <ChatWidget />
      <PreviewBanner />
    </div>
  );
}

export default App;
