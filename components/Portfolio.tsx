import React from 'react';
import { MapPin } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "Stone Coated Metal Roof",
    location: "Quincy, IL",
    image: "/tristatestonecoatedmetal.png",
    category: "Residential"
  },
  {
    id: 2,
    title: "Commercial Flat Roof System",
    location: "Hannibal, MO",
    image: "/tristateflatroofs.jpg",
    category: "Commercial"
  },
  {
    id: 3,
    title: "Standing Seam Metal Roof",
    location: "Keokuk, IA",
    image: "/tristatestandingseam.png",
    category: "Metal Roofing"
  },
  {
    id: 4,
    title: "Emergency Roof Repair",
    location: "Liberty, IL",
    image: "/tristateroofrepairs.png",
    category: "Emergency"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Recent Projects in Your Neighborhood
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            See the difference quality craftsmanship makes. We take pride in every shingle, siding panel, and gutter we install.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-secondary text-xs font-bold rounded mb-2">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold leading-tight mb-1">{project.title}</h4>
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="w-3 h-3 mr-1" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
            View Full Gallery <span className="ml-1 text-lg">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
