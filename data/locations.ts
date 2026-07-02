export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string; // used in the URL: /locations/{slug}
  city: string;
  state: string; // abbreviation, e.g. "IL"
  stateFull: string; // "Illinois"
  county: string;
  zip: string;
  metaTitle: string; // <60 chars, format "[City], [State] Roofing | [Business Name]"
  metaDescription: string; // <155 chars, leads with technique/equipment, includes city name
  lat: number; // city-center coordinates (no branch office exists in this city)
  lng: number;
  highways: string[];
  landmarks: string[];
  heroBlurb: string;
  intro: string[]; // paragraphs
  mapEmbedSrc: string;
  faqs: LocationFAQ[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: 'quincy-il',
    city: 'Quincy',
    state: 'IL',
    stateFull: 'Illinois',
    county: 'Adams County',
    zip: '62305',
    metaTitle: 'Quincy, IL Roofing | Tri-State Roofing & Construction',
    metaDescription: 'Owens Corning shingles and standing seam metal roofing for Quincy, IL homes near the Mississippi bluffs. Free inspections, licensed & insured.',
    lat: 39.9577,
    lng: -91.3858,
    highways: ['US-24', 'US-36', 'IL-104'],
    landmarks: [
      'the Mississippi River bluffs',
      'the Bayview Bridge',
      "downtown Quincy's historic district, home to one of the largest collections of 19th-century architecture in the Midwest",
      'Quincy University',
      'John Wood Community College',
    ],
    heroBlurb: "Quincy's roofing and exterior contractor for bluff-top homes, historic districts, and everything in between.",
    intro: [
      "Tri-State Roofing & Construction is based right here in Quincy, IL — our office on Melody Lane is a few minutes from downtown, the riverfront, and most of the neighborhoods we serve every week. Quincy sits on bluffs above the Mississippi River in Adams County, and that geography shapes how we build: homes near the bluff edge and the Bayview Bridge corridor take a different kind of wind load than houses further inland along US-24 and US-36, and we account for that in every inspection and estimate.",
      "A large share of our Quincy work is on the city's historic housing stock — the steep-pitched Victorians and early-1900s homes that make Quincy's downtown historic district one of the largest 19th-century residential districts in the Midwest. Matching rooflines, restoring original trim profiles, and working within historic-district guidelines is routine for our crews, not a special request.",
      "We also handle a steady flow of commercial and institutional roofing around Quincy University and John Wood Community College, plus new-construction and re-roof work in the newer subdivisions east of town along IL-104. Whatever part of Quincy you're in, our crews are typically on-site for a free inspection within a day or two of your call.",
    ],
    mapEmbedSrc:
      'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Quincy%2C%20IL&t=&z=11&ie=UTF8&iwloc=B&output=embed',
    faqs: [
      {
        question: 'Do you offer free roof inspections in Quincy, IL?',
        answer:
          "Yes. We offer free, no-obligation roof inspections throughout Quincy and Adams County, including neighborhoods along the bluffs, downtown's historic district, and the newer subdivisions off IL-104. Most inspections are scheduled within a day or two of your call.",
      },
      {
        question: 'Can you work on historic homes in downtown Quincy?',
        answer:
          "Absolutely — a significant portion of our Quincy business is historic-home roofing. We're experienced matching period-appropriate rooflines, trim, and materials for homes in Quincy's historic district, and we're familiar with the district's guidelines.",
      },
      {
        question: 'How does living near the Mississippi River bluffs affect my roof?',
        answer:
          'Homes near the bluffs and the Bayview Bridge corridor are exposed to stronger, more consistent wind than homes further inland. We factor wind exposure into fastening patterns, shingle class selection, and flashing details for every bluff-area inspection.',
      },
      {
        question: 'Do you help with storm and hail insurance claims in Adams County?',
        answer:
          "Yes. We document every storm-damaged roof thoroughly and work directly with insurance adjusters covering Adams County. We'll walk you through the claims process and make sure the scope of work reflects the actual damage.",
      },
      {
        question: 'What roofing materials do you install most often in Quincy?',
        answer:
          "For Quincy homes we most often install architectural asphalt shingles (Owens Corning) and standing seam metal roofing in 26-gauge steel. For commercial and flat-roof buildings near Quincy University and downtown, we install TPO, EPDM, and modified bitumen systems.",
      },
      {
        question: 'Do you serve areas outside Quincy proper, like Liberty or Payson?',
        answer:
          "Yes. From our Quincy office we regularly cover Liberty, Payson, Mendon, Camp Point, Ursa, Fowler, and the rest of Adams County along US-24 and US-36.",
      },
      {
        question: 'How long does a roof replacement take on a typical Quincy home?',
        answer:
          'Most residential roof replacements in Quincy are completed in 1-2 days, depending on roof size, pitch, and whether it involves a historic-home tear-off with additional decking repair.',
      },
      {
        question: 'Are you licensed to do roofing work in Illinois?',
        answer:
          'Yes, Tri-State Roofing is fully licensed, bonded, and insured to perform roofing, siding, and construction work in Illinois. Proof of insurance is available on request.',
      },
      {
        question: 'Do you offer financing for roof replacements in Quincy?',
        answer:
          'Yes. We partner with lenders to offer flexible payment plans, including same-as-cash options for qualified buyers, so a necessary roof replacement doesn\'t have to wait.',
      },
      {
        question: 'What warranty do you offer on roofs installed in Quincy?',
        answer:
          "We offer manufacturer material warranties up to 50 years through our Owens Corning Preferred Contractor status, plus our own workmanship warranty on every Quincy installation.",
      },
    ],
  },
  {
    slug: 'hannibal-mo',
    city: 'Hannibal',
    state: 'MO',
    stateFull: 'Missouri',
    county: 'Marion County',
    zip: '63401',
    metaTitle: 'Hannibal, MO Roofing | Tri-State Roofing & Construction',
    metaDescription: "Owens Corning shingles and standing seam metal roofing for Hannibal, MO's riverfront and historic homes. Free inspections, licensed & insured.",
    lat: 39.7084,
    lng: -91.3585,
    highways: ['US-61', 'MO-79'],
    landmarks: [
      'the Mississippi River waterfront',
      "Mark Twain's boyhood home and the historic downtown district",
      'Hannibal-LaGrange University',
      'the bridge connecting Hannibal to Illinois',
    ],
    heroBlurb: "Roofing, siding, and storm restoration for Hannibal's riverfront homes and historic neighborhoods.",
    intro: [
      "Hannibal, MO — the seat of Marion County and the town Mark Twain grew up in — sits directly on the Mississippi River, and our crews cover it as part of our core Tri-State service area alongside Quincy and Keokuk. Homes along the riverfront and in Hannibal's historic downtown, near the Mark Twain Boyhood Home, tend to be older builds that need careful tear-off work and roofing details that respect the original architecture.",
      "Outside the historic core, Hannibal has grown along US-61 and MO-79, and we do steady residential and light-commercial work in those newer areas as well as around Hannibal-LaGrange University. River-adjacent humidity and seasonal flooding risk make gutter and drainage work especially important here — we pay close attention to downspout placement and grading whenever we're on a Hannibal roof or siding job.",
      "Whether it's storm damage from a Midwest thunderstorm rolling up the river valley, a full roof replacement, or new siding on a historic home, our Hannibal customers get the same insurance-claim support and Owens Corning-backed materials we use across the Tri-State area.",
    ],
    mapEmbedSrc:
      'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Hannibal%2C%20MO&t=&z=12&ie=UTF8&iwloc=B&output=embed',
    faqs: [
      {
        question: 'Do you offer free roof inspections in Hannibal, MO?',
        answer:
          "Yes. We provide free, no-obligation roof inspections throughout Hannibal and Marion County, including the historic downtown near the Mark Twain Boyhood Home and the newer areas along US-61.",
      },
      {
        question: "Can you match roofing on Hannibal's older, historic homes?",
        answer:
          "Yes. We regularly work on older homes in Hannibal's historic districts and take care to match rooflines and trim details appropriate to the home's age and style.",
      },
      {
        question: 'Does being near the Mississippi River affect roofing or siding choices in Hannibal?',
        answer:
          'Riverfront humidity and periodic flooding make drainage and moisture management a priority. We pay close attention to gutter sizing, downspout placement, and flashing on every Hannibal project to help manage that exposure.',
      },
      {
        question: 'Do you handle storm and insurance claims in Marion County?',
        answer:
          'Yes. We document storm and hail damage thoroughly and have extensive experience working with adjusters covering Marion County and the surrounding river valley.',
      },
      {
        question: 'What areas around Hannibal do you cover?',
        answer:
          'From Hannibal we regularly serve Palmyra, Canton, Monroe City, New London, La Grange, and the rest of the MO-79 and US-61 corridor.',
      },
      {
        question: 'What roofing materials work best for Hannibal homes?',
        answer:
          'Architectural asphalt shingles and standing seam metal (26-gauge steel) are our most common installs in Hannibal, chosen for durability against river-valley storms and Midwest temperature swings.',
      },
      {
        question: 'How quickly can you respond after a storm in Hannibal?',
        answer:
          "We offer 24/7 emergency response for storm damage in Hannibal and can typically get a crew out for tarping or emergency repairs the same day a storm passes through.",
      },
      {
        question: 'Are you licensed to work in Missouri?',
        answer:
          'Yes, Tri-State Roofing is fully licensed, bonded, and insured to perform roofing, siding, and construction work in Missouri.',
      },
      {
        question: 'Do you install siding in Hannibal, not just roofing?',
        answer:
          'Yes. We install vinyl, James Hardie fiber cement, and board-and-batten metal siding on Hannibal homes, including historic-district properties where trim detail matters.',
      },
      {
        question: 'Do you offer financing for Hannibal customers?',
        answer:
          'Yes, the same flexible financing and same-as-cash options available across our service area are available to Hannibal customers.',
      },
    ],
  },
  {
    slug: 'keokuk-ia',
    city: 'Keokuk',
    state: 'IA',
    stateFull: 'Iowa',
    county: 'Lee County',
    zip: '52632',
    metaTitle: 'Keokuk, IA Roofing | Tri-State Roofing & Construction',
    metaDescription: 'Owens Corning shingles and standing seam metal roofing for Keokuk, IA homes near Lock and Dam No. 19. Free inspections, licensed & insured.',
    lat: 40.3978,
    lng: -91.3849,
    highways: ['US-61', 'US-218'],
    landmarks: [
      'Lock and Dam No. 19 on the Mississippi River',
      'the bridge connecting Keokuk to Hamilton, Illinois',
      'downtown Keokuk',
    ],
    heroBlurb: 'Serving Keokuk and Lee County with storm-ready roofing, siding, and gutter installation.',
    intro: [
      "Keokuk sits at the southeastern tip of Iowa in Lee County, where the Mississippi River drops through Lock and Dam No. 19 — one of the largest lock-and-dam structures on the river. That location means Keokuk sees its share of river-valley weather, and homes here, whether close to downtown or out toward US-61 and US-218, need roofing systems built for wind and heavy seasonal rain.",
      "We've been doing roofing, siding, and gutter work in Keokuk for years as part of our core Tri-State coverage area alongside Quincy and Hannibal. Downtown Keokuk's older housing stock calls for the same careful, detail-matched approach we use in Quincy's and Hannibal's historic districts, while homes further out toward Fort Madison and Montrose tend to be newer builds where we focus on efficient, code-compliant installations.",
      "From storm damage restoration and insurance claim support to full roof and siding replacements, Keokuk customers get the same Owens Corning-backed materials, licensed crews, and workmanship warranty we provide everywhere in the Tri-State area.",
    ],
    mapEmbedSrc:
      'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Keokuk%2C%20IA&t=&z=12&ie=UTF8&iwloc=B&output=embed',
    faqs: [
      {
        question: 'Do you offer free roof inspections in Keokuk, IA?',
        answer:
          'Yes. We offer free, no-obligation roof inspections throughout Keokuk and Lee County, including downtown and the areas out toward US-61 and US-218.',
      },
      {
        question: 'Do you cover areas near Keokuk like Fort Madison or Montrose?',
        answer:
          'Yes. In addition to Keokuk itself, we regularly serve Fort Madison, Montrose, Farmington, and Donnellson.',
      },
      {
        question: 'How does river-valley weather near Lock and Dam No. 19 affect roofing in Keokuk?',
        answer:
          "The Mississippi River valley around Keokuk sees strong seasonal storms and heavy rain. We select materials and fastening patterns rated for that wind and rain exposure and make sure drainage details are sized correctly to keep water moving away from the home.",
      },
      {
        question: 'Do you help with storm and hail insurance claims in Lee County?',
        answer:
          'Yes. We thoroughly document storm damage and work directly with insurance adjusters covering Lee County to help make sure your claim reflects the actual scope of damage.',
      },
      {
        question: 'What roofing materials do you recommend for Keokuk homes?',
        answer:
          'Architectural asphalt shingles and standing seam metal roofing (26-gauge steel) are our most common recommendations for Keokuk, chosen for wind resistance and longevity.',
      },
      {
        question: 'Can you work on older homes in downtown Keokuk?',
        answer:
          "Yes. We're experienced with the older housing stock in and around downtown Keokuk and take the same detail-matching approach we use in Quincy's and Hannibal's historic neighborhoods.",
      },
      {
        question: 'How fast can you respond to storm damage in Keokuk?',
        answer:
          "We provide 24/7 emergency storm response in Keokuk and can typically get a crew out for emergency tarping or repairs the same day.",
      },
      {
        question: 'Are you licensed to perform roofing work in Iowa?',
        answer:
          'Yes, Tri-State Roofing is fully licensed, bonded, and insured to perform roofing, siding, and construction work in Iowa.',
      },
      {
        question: 'Do you install gutters and siding in Keokuk, or just roofs?',
        answer:
          'We install seamless aluminum gutters, vinyl and fiber cement siding, and board-and-batten metal siding in Keokuk in addition to full roofing services.',
      },
      {
        question: 'Do you offer financing for Keokuk customers?',
        answer:
          'Yes, our flexible financing and same-as-cash options are available to Keokuk customers on qualifying projects.',
      },
    ],
  },
];
