import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  const areas = [
    { state: 'Illinois', cities: ['Quincy', 'Liberty', 'Payson', 'Mendon', 'Camp Point', 'Ursa', 'Fowler'] },
    { state: 'Missouri', cities: ['Hannibal', 'Palmyra', 'Canton', 'Monroe City', 'New London', 'La Grange'] },
    { state: 'Iowa', cities: ['Keokuk', 'Fort Madison', 'Montrose', 'Farmington', 'Donnellson'] },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Abstract Map Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L20 80 L40 90 L60 70 L80 80 L100 60 V100 H0 Z" fill="currentColor" />
          <path d="M0 0 L30 20 L50 10 L80 30 L100 10 V0 H0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">Service Area</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Proudly Serving The Tri-State Area
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Based in Quincy, IL, our crews are ready to deploy across a 50-mile radius.
            If you're in the Tri-States, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">{area.state}</h4>
              </div>
              <ul className="space-y-3">
                {area.cities.map((city) => (
                  <li key={city} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>
                    {city}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 italic">And surrounding communities</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-2xl font-bold text-white mb-2">Not sure if we cover your area?</h4>
            <p className="text-blue-100">Give us a call. We often travel for major projects.</p>
          </div>
          <a
            href="tel:(217)222-1925"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-primary bg-white hover:bg-gray-50 shadow-lg transition-colors"
          >
            <Navigation className="w-5 h-5 mr-2" />
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
};
