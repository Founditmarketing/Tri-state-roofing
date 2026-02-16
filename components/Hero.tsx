import React from 'react';
import { Button } from './Button';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-start sm:items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/tristateherovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-primary/80 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-32 pb-16 sm:pt-20 sm:pb-0">
        <div className="sm:max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-white mb-6 shadow-lg border border-red-500">
            <ShieldAlert className="w-4 h-4 text-white mr-2" />
            <span className="text-sm font-bold uppercase tracking-wide">Storm Damage Experts</span>
          </div>

          <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-7xl mb-6 leading-tight drop-shadow-lg">
            Restoring Homes Across <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Quincy, Hannibal & Keokuk</span>
          </h1>

          <p className="mt-4 text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl shadow-black drop-shadow-sm">
            Don't let storm damage compromise your home. We specialize in insurance claims, emergency repairs, and premium roof replacements for IL, MO, and IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Free Inspection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="white" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              View Our Work
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap gap-8 items-center text-white/90">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-accent">20+</span>
              <span className="text-sm text-gray-300">Years Experience</span>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-accent">A+</span>
              <span className="text-sm text-gray-300">BBB Rating</span>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-accent">500+</span>
              <span className="text-sm text-gray-300">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
