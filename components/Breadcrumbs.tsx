import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Crumb } from '../utils/schema';

export const Breadcrumbs: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => (
  <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
    <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-wrap gap-1 text-sm text-gray-500">
      {crumbs.map((crumb, idx) => {
        const isLast = idx === crumbs.length - 1;
        return (
          <li key={crumb.path} className="flex items-center gap-1">
            {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
            {isLast ? (
              <span className="font-medium text-gray-700" aria-current="page">{crumb.name}</span>
            ) : (
              <Link to={crumb.path} className="hover:text-primary transition-colors">{crumb.name}</Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
