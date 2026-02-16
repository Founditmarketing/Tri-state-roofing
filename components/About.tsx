import React from 'react';
import { Map, Award, Users, Shield } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Image Section */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-primary/10 transform -rotate-3 rounded-3xl"></div>
            <img
              src="/24.png"
              alt="Our Team"
              className="relative rounded-3xl shadow-xl w-full object-cover transform rotate-0 hover:rotate-1 transition-transform duration-500"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Licensed & Insured</p>
                  <p className="text-sm text-gray-500">Fully bonded for your safety</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Your Trusted Partners in the <span className="text-primary">Tri-State Area</span>
            </h3>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For years, <strong>{COMPANY_NAME}</strong> has been the go-to choice for homeowners and businesses across
              Illinois, Missouri, and Iowa. From the bluffs of the **Mississippi River** to the historic districts, we are your neighbors dedicated to improving our community.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From the historic homes in Quincy to commercial buildings in Hannibal and Keokuk, we understand the unique weather challenges of the Midwest.
              Our commitment to quality craftsmanship and customer satisfaction is unmatched.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Map className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Local Experts</h4>
                  <p className="text-sm text-gray-500">Serving IL, MO, and IA with pride.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Family Owned</h4>
                  <p className="text-sm text-gray-500">Personal service you can rely on.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Quality Materials</h4>
                  <p className="text-sm text-gray-500">Owens Corning & top brands only.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Warranty Backed</h4>
                  <p className="text-sm text-gray-500">Peace of mind on every project.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
