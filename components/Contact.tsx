import React, { useState } from 'react';
import { Button } from './Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Residential Roofing',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-accent font-bold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl font-extrabold sm:text-4xl mb-6">
              Ready for a New Roof?
            </h3>
            <p className="text-blue-200 mb-10 text-lg">
              Contact us today for a free, no-obligation inspection and estimate.
              Our team is ready to answer your questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent mt-1 mr-4" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-blue-200">{PHONE_NUMBER}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent mt-1 mr-4" />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-blue-200">{EMAIL_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mt-1 mr-4" />
                <div>
                  <p className="font-bold">Office</p>
                  <p className="text-blue-200">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-accent mt-1 mr-4" />
                <div>
                  <p className="font-bold">Hours</p>
                  <p className="text-blue-200">Mon-Fri: 7am - 6pm <br /> Sat: 8am - 12pm</p>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="mt-10 h-64 bg-blue-800/50 rounded-xl overflow-hidden relative border border-blue-700 shadow-lg">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 border-0 filter grayscale hover:grayscale-0 transition-all duration-500"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=2400%20N%2030th%20St,%20Quincy,%20IL%2062305+(Tri-State%20Roofing)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thanks for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-primary hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-3 border"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-3 border"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-3 border"
                    placeholder="(217) 555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed</label>
                  <select
                    name="service"
                    id="service"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-3 border"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Residential Roofing</option>
                    <option>Commercial Roofing</option>
                    <option>Siding</option>
                    <option>Gutters</option>
                    <option>Repair / Emergency</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm p-3 border"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" fullWidth variant="primary">
                  Request Free Quote
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};