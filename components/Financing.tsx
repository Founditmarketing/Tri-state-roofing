import React, { useState } from 'react';
import { Calculator, CheckCircle2, DollarSign, CalendarRange, Percent } from 'lucide-react';
import { Button } from './Button';

export const Financing: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(12000);
  const [creditTier, setCreditTier] = useState<'excellent' | 'good' | 'fair'>('excellent');
  const [termMonths] = useState(60); // 5 years

  // Simple PMT calculation for demo purposes
  const calculatePayment = () => {
    let rate = 0;
    switch (creditTier) {
      case 'excellent': rate = 0.0599; break; // 5.99%
      case 'good': rate = 0.0999; break;      // 9.99%
      case 'fair': rate = 0.1499; break;      // 14.99%
    }

    const monthlyRate = rate / 12;
    // PMT formula
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
    return Math.round(payment);
  };

  const monthlyPayment = calculatePayment();

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200 mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold uppercase tracking-wide">Flexible Payment Plans</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Don't Let Budget Delay <br />
              <span className="text-primary">Your Necessary Repairs</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe every homeowner deserves a safe roof. That's why we partner with top lenders to offer flexible financing options that fit your monthly budget.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Percent className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">0% Interest Options</h4>
                  <p className="text-sm text-gray-500">Same-as-cash financing available for qualified buyers (12-18 months).</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <CalendarRange className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Low Monthly Payments</h4>
                  <p className="text-sm text-gray-500">Spread the cost over 5, 10, or even 15 years to keep payments low.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">High Approval Rates</h4>
                  <p className="text-sm text-gray-500">Soft credit pulls available to check your rate without hurting your score.</p>
                </div>
              </div>
            </div>

            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply for Pre-Approval
            </Button>
          </div>

          {/* Right: Calculator */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calculator className="w-32 h-32 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Monthly Payment Estimator</h3>

            {/* Loan Amount Slider */}
            <div className="mb-8 relative z-10">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Estimated Project Cost</label>
                <span className="font-bold text-primary">${loanAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="50000"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$5k</span>
                <span>$50k</span>
              </div>
            </div>

            {/* Credit Tier Selector */}
            <div className="mb-8 relative z-10">
              <label className="block text-sm font-medium text-gray-700 mb-2">Credit Profile (Estimate)</label>
              <div className="grid grid-cols-3 gap-2">
                {(['excellent', 'good', 'fair'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setCreditTier(tier)}
                    className={`py-2 text-sm font-medium rounded-md border transition-colors ${creditTier === tier
                        ? 'bg-white border-primary text-primary shadow-sm ring-1 ring-primary'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {tier.charAt(0).toUpperCase() + tier.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Result Display */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center relative z-10">
              <p className="text-sm text-gray-500 mb-1">Estimated Monthly Payment*</p>
              <div className="flex items-baseline justify-center text-primary">
                <span className="text-2xl font-bold align-top mt-1">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{monthlyPayment}</span>
                <span className="text-gray-400 font-medium ml-1">/mo</span>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                *Based on a {termMonths}-month term. Actual rates and terms vary based on credit approval.
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Call (217) 222-1925 for exact rates.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
