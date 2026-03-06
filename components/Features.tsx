import React from 'react';
import { FileCheck, BadgeDollarSign, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
            <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <FileCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance Specialists</h3>
            <p className="text-gray-600">
              Storm damage? We speak the language of insurance adjusters. We document everything to ensure your claim is fully covered.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-red-50 hover:bg-red-100 transition-colors duration-300">
            <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Warranty</h3>
            <p className="text-gray-600">
              As preferred contractors for top brands, we offer extended material and workmanship warranties that others can't match.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors duration-300">
            <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <BadgeDollarSign className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Financing</h3>
            <p className="text-gray-600">
              Don't delay necessary repairs. We offer competitive financing options to help fit your new roof into your budget.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
