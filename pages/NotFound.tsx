import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { PHONE_DISPLAY } from '../constants';

export const NotFound: React.FC = () => (
  <>
    <SEO
      title="Page Not Found | Tri-State Roofing"
      description="The page you're looking for doesn't exist."
      path="/404"
      noindex
    />
    <section className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-24">
      <div className="text-center max-w-lg px-4">
        <p className="text-secondary font-bold uppercase tracking-wide text-sm mb-3">404</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">We couldn&apos;t find that page</h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for may have moved. Head back home, or call us directly at{' '}
          <span className="font-bold text-primary">{PHONE_DISPLAY}</span>.
        </p>
        <Link to="/">
          <Button variant="primary">Back to Homepage</Button>
        </Link>
      </div>
    </section>
  </>
);
