import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Don't Just Take Our Word For It
            </h3>
          </div>
          <div className="mt-4 md:mt-0">
             <div className="flex items-center gap-2">
               <span className="text-4xl font-bold text-gray-900">5.0</span>
               <div className="flex text-accent">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
               </div>
             </div>
             <p className="text-sm text-gray-500 mt-1">Based on 150+ Local Reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 rotate-180" />
              <div className="flex text-accent mb-4">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 fill-current" />
                 ))}
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.content}"</p>
              <div className="border-t pt-6">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
