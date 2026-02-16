import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
             <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">Common Questions</h2>
             <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
               Got Questions? <br/> We Have Answers.
             </h3>
             <p className="text-lg text-gray-600 mb-8">
               We believe in transparency. Here are answers to the most common questions our customers ask about roofing, insurance, and repairs.
             </p>
             <p className="text-lg text-gray-600">
               Don't see your question? Call us anytime at <span className="font-bold text-primary">(217) 222-1925</span>.
             </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg border transition-all duration-200 ${openIndex === index ? 'border-primary shadow-md' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-5 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
