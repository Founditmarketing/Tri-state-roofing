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
import { } from 'lucide-react';

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
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            </svg>
          </a>
          <a
            href="https://www.yelp.com/biz/tri-state-roofing-ii-quincy-2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[#FF1A1A] transition-colors cursor-pointer flex items-center justify-center text-white"
            aria-label="Yelp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026" />
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
