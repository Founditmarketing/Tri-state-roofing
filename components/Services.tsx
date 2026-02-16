import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceModal } from './ServiceModal';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">What We Do</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Exterior Solutions
          </h3>
          <p className="mt-4 text-xl text-gray-600">
            We don't just fix roofs; we protect your entire investment.
            Quality materials and certified installers for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ${service.id === 'residential' ? 'object-top' : 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{service.description}</p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-secondary font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Learn more <span className="ml-1">&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
