import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  id: string;
  slug: string;
  service: ServiceItem;
  metaTitle: string; // <60 chars, format "[Service] | [Business Name]"
  metaDescription: string; // <155 chars, leads with technique/equipment, includes city name
  intro: string[]; // body paragraphs, 300+ words combined
  faqs: ServiceFAQ[];
}

const CONTENT: Record<string, { slug: string; metaTitle: string; metaDescription: string; intro: string[]; faqs: ServiceFAQ[] }> = {
  residential: {
    slug: 'residential-roofing',
    metaTitle: 'Residential Roofing | Tri-State Roofing & Construction',
    metaDescription: 'Owens Corning architectural shingles and 26-gauge standing seam metal roofing for homes in Quincy, IL, Hannibal, MO & Keokuk, IA. Free inspections.',
    intro: [
      "Your roof is one of the most expensive single components of your home, and in the Tri-State area — Quincy, IL, Hannibal, MO, and Keokuk, IA — it has to handle everything from summer hailstorms rolling up the Mississippi River valley to heavy winter ice. Tri-State Roofing & Construction has been installing and repairing residential roofs across Illinois, Missouri, and Iowa since 2005, and we build every system around the specific weather exposure of where your home sits, not a one-size-fits-all spec.",
      "We're an Owens Corning Preferred Contractor, which means we install architectural shingles backed by manufacturer warranties of up to 50 years, plus our own workmanship warranty on every job. For homeowners who want a longer-lasting, lower-maintenance option, we also fabricate and install standing seam metal roofs from 26-gauge steel in a range of colors — a popular choice for both historic homes in downtown Quincy and Hannibal and newer builds throughout the region. Class 4 impact-resistant shingles are available for homeowners who want maximum protection against hail, and every residential job wraps up with a full magnetic nail sweep of the yard.",
      "Whether you need a full tear-off and replacement, a repair after a storm, or help navigating an insurance claim, our process starts with a free, no-obligation 21-point inspection so you know exactly what condition your roof is in before you commit to anything.",
    ],
    faqs: [
      { question: 'How much does a residential roof replacement cost in the Tri-State area?', answer: 'Cost depends on roof size, pitch, material choice (architectural shingle vs. standing seam metal), and whether decking repair is needed. We provide a detailed, written estimate after a free inspection — no hidden fees.' },
      { question: 'How long does a residential roof replacement take?', answer: 'Most residential roof replacements are completed in 1-2 days, depending on the size and complexity of the roof.' },
      { question: 'What roofing materials do you install for homes?', answer: 'We install architectural asphalt shingles (Owens Corning), standing seam metal roofing (26-gauge steel), and flat roof systems, with Class 4 impact-resistant shingles available.' },
      { question: 'Do you offer a warranty on residential roofing?', answer: 'Yes — manufacturer material warranties up to 50 years through our Owens Corning Preferred Contractor status, plus our own workmanship warranty.' },
      { question: 'Can you help with a homeowners insurance claim for storm damage?', answer: 'Yes. We document damage thoroughly and work directly with insurance adjusters to help make sure your claim reflects the actual scope of repair or replacement needed.' },
      { question: 'Do you clean up after a roof replacement?', answer: 'Every job includes a full cleanup and a magnetic nail sweep of the yard so no debris or stray nails are left behind.' },
      { question: 'What is a Class 4 impact-resistant shingle?', answer: 'Class 4 shingles are independently tested to withstand impact from hail better than standard shingles, and choosing them can sometimes qualify homeowners for an insurance discount.' },
      { question: 'Do you offer financing for a new roof?', answer: 'Yes, we partner with lenders to offer flexible payment plans, including same-as-cash financing for qualified buyers.' },
      { question: 'How do I know if I need a repair or a full replacement?', answer: 'Our free 21-point inspection assesses the age, decking condition, and extent of damage to your roof and gives you an honest recommendation — we don\'t push a replacement if a repair will do.' },
      { question: 'Are you licensed and insured to do residential roofing?', answer: 'Yes, Tri-State Roofing is fully licensed, bonded, and insured in Illinois, Missouri, and Iowa.' },
    ],
  },
  commercial: {
    slug: 'commercial-roofing',
    metaTitle: 'Commercial Roofing | Tri-State Roofing & Construction',
    metaDescription: 'TPO, EPDM, and standing seam metal roofing for commercial buildings in Quincy, IL, Hannibal, MO & Keokuk, IA. 24/7 emergency leak repair.',
    intro: [
      "Commercial roofing has different priorities than residential work: minimizing downtime, protecting equipment and inventory, and keeping a facility watertight through every season without disrupting the business inside it. Tri-State Roofing & Construction provides commercial roofing across Quincy, IL, Hannibal, MO, Keokuk, IA, and the surrounding Tri-State area, with certified installers for TPO, EPDM, PVC, modified bitumen, and standing seam metal systems.",
      "We work on retail buildings, industrial facilities, and office space, including flat-roof systems near institutions like Quincy University and Hannibal-LaGrange University, and we schedule projects around your operating hours whenever possible to keep disruption to a minimum. Energy-efficient reflective coatings are available for facilities looking to cut cooling costs, and we offer preventative maintenance plans so small issues get caught before they turn into leaks.",
      "Because a leaking commercial roof can mean lost inventory, damaged equipment, or an unsafe work environment, we also provide 24/7 emergency leak repair for existing commercial customers throughout the Tri-State region.",
    ],
    faqs: [
      { question: 'What commercial roofing systems do you install?', answer: 'We install TPO, EPDM, PVC, modified bitumen, and standing seam metal roofing systems for retail, industrial, and office buildings.' },
      { question: 'Do you offer emergency repair for commercial roofs?', answer: 'Yes, we provide 24/7 emergency leak repair for commercial customers throughout Quincy, Hannibal, Keokuk, and the surrounding Tri-State area.' },
      { question: 'Can you work around our business hours?', answer: 'Yes, we schedule commercial projects to minimize disruption to your operations whenever possible.' },
      { question: 'Do you offer preventative maintenance plans?', answer: 'Yes, we offer preventative maintenance plans designed to catch small issues before they become costly leaks.' },
      { question: 'What is an energy-efficient reflective roof coating?', answer: 'Reflective coatings reduce how much heat a flat commercial roof absorbs, which can lower cooling costs for the building below.' },
      { question: 'Do you handle both new construction and re-roofing for commercial buildings?', answer: 'Yes, we handle both new commercial roof installations and re-roofing or repair of existing commercial buildings.' },
      { question: 'How do you handle storm damage on commercial properties?', answer: 'We document damage thoroughly and work with your insurance adjuster and property manager to scope and complete repairs quickly.' },
      { question: 'Are you licensed for commercial roofing work in Illinois, Missouri, and Iowa?', answer: 'Yes, Tri-State Roofing is fully licensed, bonded, and insured for commercial roofing work across all three states.' },
      { question: 'How long does a commercial roof replacement take?', answer: 'Timelines vary with building size and roof system, but we provide a detailed project schedule upfront so you can plan around it.' },
      { question: 'Do you offer financing for commercial roofing projects?', answer: 'Yes, financing options are available for qualifying commercial projects — ask during your free inspection.' },
    ],
  },
  siding: {
    slug: 'siding',
    metaTitle: 'Siding Solutions | Tri-State Roofing & Construction',
    metaDescription: 'Vinyl, James Hardie fiber cement, and 26-gauge board-and-batten metal siding for homes in Quincy, IL, Hannibal, MO & Keokuk, IA.',
    intro: [
      "Siding does double duty: it's the single biggest factor in your home's curb appeal, and it's your first line of defense against Midwest weather. Tri-State Roofing & Construction installs premium vinyl siding, James Hardie fiber cement siding, and heavy-duty 26-gauge steel board-and-batten metal siding across Quincy, IL, Hannibal, MO, and Keokuk, IA.",
      "High-performance vinyl and fiber cement siding resist fading, cracking, and hail damage far better than older siding materials, while our board-and-batten metal option offers maximum impact resistance for homeowners in storm-prone areas. Every siding package is available in a wide range of colors, patterns, and textures — including realistic wood grain finishes — and every installation includes soffit and fascia repair so the whole exterior envelope is protected, not just the wall panels.",
      "New siding also has a real impact on energy bills: insulated siding options add another layer of thermal protection, which matters through both Midwest summers and winters. We provide a free inspection and detailed estimate before any work begins.",
    ],
    faqs: [
      { question: 'What siding materials do you install?', answer: 'We install premium vinyl siding, James Hardie fiber cement siding, and 26-gauge steel board-and-batten metal siding.' },
      { question: 'Can new siding lower my energy bills?', answer: 'Yes, insulated siding options add an extra layer of thermal protection that can noticeably reduce heating and cooling costs.' },
      { question: 'Does siding come in different colors and textures?', answer: 'Yes, our siding is available in a wide range of colors, patterns, and textures, including realistic wood grain finishes.' },
      { question: 'Is board-and-batten metal siding durable against storms?', answer: 'Yes, our 26-gauge steel board-and-batten siding is built for maximum impact resistance, making it a strong choice for storm-prone areas.' },
      { question: 'Do you repair soffit and fascia as part of a siding job?', answer: 'Yes, soffit and fascia repair is included as part of our siding installations.' },
      { question: 'How long does a siding installation take?', answer: 'Most residential siding projects take a few days to a week depending on the size of the home and the material chosen.' },
      { question: 'Can siding help with hail damage compared to older materials?', answer: 'Yes, modern vinyl and fiber cement siding resist fading, cracking, and hail damage significantly better than older, thinner siding materials.' },
      { question: 'Do you help with insurance claims for hail-damaged siding?', answer: 'Yes, we document siding damage and work with insurance adjusters the same way we do for roofing claims.' },
      { question: 'Do you offer financing for siding projects?', answer: 'Yes, flexible financing and same-as-cash options are available for qualifying siding projects.' },
      { question: 'Are you licensed to install siding in Illinois, Missouri, and Iowa?', answer: 'Yes, Tri-State Roofing is fully licensed, bonded, and insured for siding installation in all three states.' },
    ],
  },
  windows: {
    slug: 'windows-doors',
    metaTitle: 'Windows & Doors | Tri-State Roofing & Construction',
    metaDescription: 'Energy Star double- and triple-pane windows and entry doors, custom-fit for homes in Quincy, IL, Hannibal, MO & Keokuk, IA.',
    intro: [
      "Drafty, aging windows and doors are one of the most common sources of energy loss in Midwest homes, and they're also a common point of storm-related failure. Tri-State Roofing & Construction installs energy-efficient replacement windows and secure entry doors across Quincy, IL, Hannibal, MO, and Keokuk, IA, custom-measured for a precise, airtight fit rather than a generic size.",
      "Our windows are Energy Star rated and available in double- and triple-pane glass with Low-E coatings that reflect heat, helping keep homes cooler in the summer and warmer in the winter. We offer vinyl, wood, and fiberglass frame options to match different architectural styles, from historic homes in downtown Quincy and Hannibal to newer builds throughout the Tri-State area, and every installation is done by our own professional crews for a tight, weatherproof seal.",
    ],
    faqs: [
      { question: 'Are your replacement windows energy efficient?', answer: 'Yes, our windows are Energy Star rated and available with double- or triple-pane glass and Low-E coatings to reduce heat transfer.' },
      { question: 'What window frame materials do you offer?', answer: 'We offer vinyl, wood, and fiberglass frame options to match different home styles and budgets.' },
      { question: 'Can you match windows to a historic home?', answer: 'Yes, we work with homeowners in historic districts in Quincy and Hannibal to select styles appropriate to the home\'s architecture.' },
      { question: 'Do you install entry doors as well as windows?', answer: 'Yes, we install secure, energy-efficient entry doors in addition to replacement windows.' },
      { question: 'How are your windows measured and installed?', answer: 'Every window is custom-measured for your specific openings and installed by our professional crews for an airtight seal.' },
      { question: 'Will new windows lower my energy bills?', answer: 'Yes, replacing drafty older windows with Energy Star rated, Low-E coated windows typically reduces heating and cooling costs.' },
      { question: 'How long does window replacement take?', answer: 'Most residential window replacement projects are completed in a single day, depending on the number of windows.' },
      { question: 'Do you offer financing for window and door replacement?', answer: 'Yes, financing options are available for qualifying window and door projects.' },
      { question: 'Can storm-damaged windows be covered by insurance?', answer: 'In many cases, yes — we can help document storm damage to windows as part of a broader insurance claim.' },
      { question: 'Are you licensed for window and door installation?', answer: 'Yes, Tri-State Roofing is fully licensed, bonded, and insured for window and door installation across Illinois, Missouri, and Iowa.' },
    ],
  },
  gutters: {
    slug: 'gutters',
    metaTitle: 'Seamless Gutters | Tri-State Roofing & Construction',
    metaDescription: 'On-site fabricated 5" and 6" K-style seamless aluminum gutters for homes in Quincy, IL, Hannibal, MO & Keokuk, IA. Leaf guards available.',
    intro: [
      "Gutters are easy to overlook until they fail, and a failed gutter system can mean foundation damage, basement leaks, and rotted fascia — problems that cost far more to fix than the gutters themselves. Tri-State Roofing & Construction fabricates seamless aluminum gutters on-site for homes across Quincy, IL, Hannibal, MO, and Keokuk, IA, in both 5-inch and 6-inch K-style profiles.",
      "Because we fabricate gutters on-site to the exact length needed, there are no seams to leak or clog along the run — just clean corners and downspouts. We offer leaf guard protection for homeowners who want to cut down on cleaning, custom colors to match your siding, and careful attention to downspout placement so water is directed away from your foundation, which matters especially for homes near the Mississippi River floodplain in Hannibal and Keokuk.",
    ],
    faqs: [
      { question: 'What gutter sizes do you offer?', answer: 'We offer 5-inch and 6-inch K-style seamless aluminum gutters, sized to the roof area they need to handle.' },
      { question: 'Are your gutters seamless?', answer: 'Yes, we fabricate gutters on-site to the exact length needed, eliminating the seams that typically leak or clog.' },
      { question: 'Do you install leaf guards?', answer: 'Yes, leaf guard protection is available to reduce how often gutters need to be cleaned.' },
      { question: 'Can gutters be matched to my siding color?', answer: 'Yes, custom colors are available to match your siding or trim.' },
      { question: 'Why does downspout placement matter?', answer: 'Proper downspout placement directs water away from your foundation, which is especially important for homes near river floodplains in Hannibal and Keokuk.' },
      { question: 'How do I know if my gutters need to be replaced?', answer: 'Signs include separating seams, sagging sections, water pooling near the foundation, or paint peeling below the gutter line — we can assess this during a free inspection.' },
      { question: 'Do you repair gutters or only replace them?', answer: 'We do both — repair where it makes sense, full replacement when the system has failed structurally.' },
      { question: 'How long does gutter installation take?', answer: 'Most residential gutter installations are completed in a single day.' },
      { question: 'Do you offer financing for gutter projects?', answer: 'Yes, financing is available for qualifying gutter installation projects, often bundled with a roofing or siding job.' },
      { question: 'Are you licensed and insured for gutter installation?', answer: 'Yes, Tri-State Roofing is fully licensed, bonded, and insured for gutter installation across Illinois, Missouri, and Iowa.' },
    ],
  },
  decks: {
    slug: 'decks-additions',
    metaTitle: 'Decks & Additions | Tri-State Roofing & Construction',
    metaDescription: 'Custom cedar and Trex composite decks and home additions with 3D design renderings for homes in Quincy, IL, Hannibal, MO & Keokuk, IA.',
    intro: [
      "A well-built deck extends your living space outdoors and is one of the highest-value home improvements you can make. Tri-State Roofing & Construction builds custom decks and home additions across Quincy, IL, Hannibal, MO, and Keokuk, IA, using either natural cedar or low-maintenance composite decking like Trex.",
      "Every deck project includes custom railing systems, full permit handling, and code compliance, so you don't have to navigate city or county permitting on your own. For larger projects, we offer 3D design renderings up front so you can see exactly what the finished deck or addition will look like before construction starts.",
    ],
    faqs: [
      { question: 'Do you build custom decks or only standard designs?', answer: 'Every deck we build is custom to your home and yard, from cedar to composite materials like Trex.' },
      { question: 'What decking materials do you offer?', answer: 'We offer both natural cedar and low-maintenance composite (Trex) decking options.' },
      { question: 'Do you handle permits for deck construction?', answer: 'Yes, we handle permit applications and ensure the project meets local code requirements.' },
      { question: 'Can I see a design before construction starts?', answer: 'Yes, for larger projects we offer 3D design renderings so you can visualize the finished deck or addition beforehand.' },
      { question: 'Do you build home additions in addition to decks?', answer: 'Yes, we build custom home additions as well as decks, expanding your living space with quality craftsmanship.' },
      { question: 'How long does it take to build a deck?', answer: 'Timeline depends on size and materials, but most residential deck projects are completed within one to two weeks.' },
      { question: 'What railing options are available?', answer: 'We offer custom railing systems to match your deck material and home style.' },
      { question: 'Is composite decking worth the extra cost over wood?', answer: 'Composite decking like Trex costs more upfront but requires far less maintenance over its lifespan than natural wood — we can walk you through the tradeoffs for your situation.' },
      { question: 'Do you offer financing for deck and addition projects?', answer: 'Yes, financing options are available for qualifying deck and home addition projects.' },
      { question: 'Are you licensed for deck construction in Illinois, Missouri, and Iowa?', answer: 'Yes, Tri-State Roofing is fully licensed, bonded, and insured for deck and addition construction across all three states.' },
    ],
  },
};

export const PAGE_SERVICES: ServicePageContent[] = SERVICES.map((service) => ({
  id: service.id,
  slug: CONTENT[service.id]?.slug ?? service.id,
  service,
  metaTitle: CONTENT[service.id]?.metaTitle ?? `${service.title} | Tri-State Roofing & Construction`,
  metaDescription: CONTENT[service.id]?.metaDescription ?? service.description,
  intro: CONTENT[service.id]?.intro ?? [service.longDescription ?? service.description],
  faqs: CONTENT[service.id]?.faqs ?? [],
}));

export const getServiceBySlug = (slug: string) => PAGE_SERVICES.find((s) => s.slug === slug);
