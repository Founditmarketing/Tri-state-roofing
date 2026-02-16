import React from 'react';
import { ClipboardCheck, FileText, Hammer, Smile } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Free Inspection",
      description: "We perform a thorough 21-point inspection to identify damage and assess the health of your roof.",
      icon: ClipboardCheck
    },
    {
      id: 2,
      title: "Transparent Quote",
      description: "You get a detailed, written estimate. No hidden fees, no surprise costs. Just honest pricing.",
      icon: FileText
    },
    {
      id: 3,
      title: "Expert Installation",
      description: "Our certified crew installs your new roof using premium materials and industry-best practices.",
      icon: Hammer
    },
    {
      id: 4,
      title: "Cleanup & Warranty",
      description: "We magnet-sweep your yard for nails and register your warranty for long-term peace of mind.",
      icon: Smile
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">How It Works</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Simple 4-Step Process
          </h3>
          <p className="mt-4 text-xl text-gray-600">
            From the first call to the final nail, we make home improvement stress-free.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center text-center bg-white p-4">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center mb-6 shadow-sm z-10 group hover:border-secondary transition-colors duration-300">
                    <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                      {step.id}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
