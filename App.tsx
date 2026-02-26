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
          {/* Social Placeholders */}
          <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-primary transition-colors cursor-pointer flex items-center justify-center text-white font-bold">f</div>
          <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-primary transition-colors cursor-pointer flex items-center justify-center text-white font-bold">t</div>
          <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-primary transition-colors cursor-pointer flex items-center justify-center text-white font-bold">in</div>
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
