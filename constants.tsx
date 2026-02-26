import { Home, ShieldCheck, Warehouse, Droplets, AppWindow, Trees } from 'lucide-react';
import { ServiceItem, NavItem, Testimonial } from './types';

export const COMPANY_NAME = "Tri-State Roofing & Construction";
export const PHONE_NUMBER = "(217) 222-1925";
export const EMAIL_ADDRESS = "tylertristateroofing@gmail.com";
export const ADDRESS = "2400 N 30th St, Quincy, IL 62305";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Roofing',
    description: 'Expert installation of asphalt shingles, metal roofing, and flat roofs. We use top-tier brands like Owens Corning for lasting protection.',
    longDescription: 'Your home is your biggest investment. Our residential roofing systems are designed to withstand Midwest storms while enhancing your home’s curb appeal. We offer a full range of architectural shingles and metal options.',
    benefits: [
      'Owens Corning Preferred Contractor',
      '50-Year Material Warranty Options',
      'Class 4 Impact Resistance Available',
      'Thorough cleanup (magnetic nail sweep)'
    ],
    icon: Home,
    image: '/tristateresidentialroofs.png'
  },
  {
    id: 'commercial',
    title: 'Commercial Roofing',
    description: 'Certified installers for TPO, EPDM, and modified bitumen. We keep your business running while we secure your facility.',
    longDescription: 'We understand that commercial roofing projects need to be completed on time and on budget with minimal disruption to your operations. We specialize in flat roof systems for retail, industrial, and office buildings.',
    benefits: [
      'TPO, EPDM, and PVC expertise',
      'Energy-efficient reflective coatings',
      'Preventative maintenance plans',
      '24/7 Emergency leak repair'
    ],
    icon: Warehouse,
    image: '/tristatecommercialroofs.png'
  },
  {
    id: 'siding',
    title: 'Siding Solutions',
    description: 'Boost curb appeal and energy efficiency with premium vinyl or fiber cement siding. Professional color matching and trim work.',
    longDescription: 'Transform the look of your home while lowering energy bills. We install high-performance vinyl and fiber cement siding that resists fading, cracking, and hail damage.',
    benefits: [
      'Insulated siding options',
      'James Hardie Fiber Cement',
      'Wide variety of colors and textures',
      'Soffit and fascia repair included'
    ],
    icon: ShieldCheck,
    image: '/tristateroofingsiding.png'
  },
  {
    id: 'windows',
    title: 'Windows & Doors',
    description: 'Energy-efficient replacement windows and secure entry doors. diverse styles to match your home\'s architecture.',
    longDescription: 'Drafty windows cost you money. Our replacement windows are Energy Star rated and custom-measured to fit your home perfectly, ensuring maximum efficiency and security.',
    benefits: [
      'Double and Triple Pane Glass',
      'Low-E coatings to reflect heat',
      'Vinyl, Wood, and Fiberglass options',
      'Professional, airtight installation'
    ],
    icon: AppWindow,
    image: '/tristatewindowsanddoors.png'
  },
  {
    id: 'gutters',
    title: 'Seamless Gutters',
    description: 'Custom-fabricated seamless gutters and downspouts designed to divert water effectively and protect your foundation.',
    longDescription: 'Water management is critical for foundation health. We fabricate seamless aluminum gutters on-site to ensure a perfect fit that prevents leaks and clogs.',
    benefits: [
      '5-inch and 6-inch K-style options',
      'Custom colors to match siding',
      'Leaf guard protection available',
      'Proper downspout placement'
    ],
    icon: Droplets,
    image: '/tristategutters.jpg'
  },
  {
    id: 'decks',
    title: 'Decks & Additions',
    description: 'Custom deck building and home additions. We expand your living space with quality craftsmanship and durable materials.',
    longDescription: 'Expand your outdoor living space with a custom-built deck. Whether you prefer the natural look of cedar or the low maintenance of composite, we build structures that last.',
    benefits: [
      'Composite (Trex) and Wood options',
      'Custom railing systems',
      'Permit handling and code compliance',
      '3D Design rendering available'
    ],
    icon: Trees,
    image: '/tristatedeck.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Gary Thompson",
    role: "Quincy, IL",
    content: "Tri-State replaced our roof and gutters after the hail storm last year. They handled the insurance claim perfectly and the crew was done in two days.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Hannibal, MO",
    content: "We hired them for new siding and windows. The difference in our heating bill is already noticeable. Honest pricing and great communication.",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Davis",
    role: "Keokuk, IA",
    content: "Best contractors in the tri-state area. They showed up on time, kept the job site clean, and the new deck looks fantastic. Highly recommend!",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "Do you offer free inspections?",
    answer: "Yes! We offer completely free, no-obligation roof inspections. We'll assess the condition of your roof, identify any storm damage, and provide a detailed report."
  },
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements are completed in 1-2 days, depending on the size and complexity of the roof. We work efficiently to minimize disruption to your daily life."
  },
  {
    question: "Do you help with insurance claims?",
    answer: "Absolutely. We specialize in storm damage restoration and have extensive experience working with insurance adjusters. We can help guide you through the claims process to ensure you get the coverage you deserve."
  },
  {
    question: "What kind of warranties do you provide?",
    answer: "We offer industry-leading manufacturer warranties (up to 50 years on materials) and our own workmanship warranty. Specific terms depend on the materials chosen."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Tri-State Roofing is fully licensed, bonded, and insured in Illinois, Missouri, and Iowa. We can provide proof of insurance upon request."
  }
];
