import React from 'react';

export const Brands: React.FC = () => {
  const brands = [
    "Owens Corning Preferred",
    "GAF Certified",
    "BBB Accredited",
    "HomeAdvisor Top Rated",
    "CertainTeed"
  ];

  return (
    <section className="py-10 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
          Trusted By Major Manufacturers & Organizations
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale">
           {brands.map((brand, index) => (
             <div key={index} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300 cursor-default select-none">
               {brand}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
