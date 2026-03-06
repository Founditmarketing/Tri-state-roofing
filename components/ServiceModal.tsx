import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { Button } from './Button';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="w-full md:w-2/5 relative h-64 md:h-auto">
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="bg-secondary/90 p-3 rounded-xl inline-block mb-3 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-3/5 p-8 md:p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.longDescription || service.description}
            </p>

            {service.benefits && (
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Key Benefits</h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4 border-t border-gray-100">
              <Button 
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                fullWidth
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <button 
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
