import type { BlogPost, ClinicInformation, ServiceDetail, TeamProfile } from './clinic-data';
export type DentistProfile = TeamProfile;

const phone = '+1 405-665-9682';
const photo = '/images/plumbing-technician.jpg';

export const CLINIC_INFO: ClinicInformation = {
  name: 'Davidson Plumbing LLC', legalName: 'Davidson Plumbing LLC',
  tagline: 'Residential plumbing repairs and replacements in El Reno, Oklahoma.',
  primaryLocation: { street: '1300 Sunset Dr', suite: '', city: 'El Reno', state: 'OK', postalCode: '73036', country: 'US', directions: '1300 Sunset Dr, El Reno, OK 73036, United States', landmarks: 'Based in El Reno, Oklahoma.' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone, website: 'https://www.davidsonplumbingllcok.com/' },
  identityHighlights: ['Slab leak repairs and reroutes', 'Water heater repair and replacement', 'Drain, septic and plumbing repairs'],
  schedule: [
    { day: 'Monday', hours: '8 AM–5 PM' }, { day: 'Tuesday', hours: '8 AM–5 PM' }, { day: 'Wednesday', hours: '8 AM–5 PM' },
    { day: 'Thursday', hours: '8 AM–5 PM' }, { day: 'Friday', hours: '8 AM–12 PM' }, { day: 'Saturday', hours: 'Closed' }, { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [{ value: 21, suffix: '', label: 'Google reviews', description: 'Customer rating and review count supplied for Davidson Plumbing LLC.' }], accreditations: [],
};

export const DENTISTS: TeamProfile[] = [{
  id: 'davidson-team', slug: 'davidson-plumbing-team', name: 'Davidson Plumbing Team', title: 'Plumbing professionals', qualifications: 'Davidson Plumbing LLC', specialization: 'Residential plumbing repair and replacement', experienceYears: 0,
  bio: 'The Davidson Plumbing team helps El Reno area homeowners with plumbing repairs, leak work, water heaters, drains, septic systems and related service.', philosophy: 'Arrive promptly, explain the work clearly and take care to complete the repair.', education: [], memberships: [], specialties: ['Slab leak repair', 'Water heater replacement', 'Drain and septic service'], image: photo, warmImage: '/images/plumbing-repair.jpg',
}];

const serviceEntries = [
  { slug: 'slab-leak-repair', name: 'Slab Leak Repair', description: 'Find and repair slab leaks, including rerouting a water line when that is the right solution.', focus: ['You suspect a leak beneath a concrete slab', 'Water is affecting floors or walls', 'You need to discuss a new line to resolve a slab leak'] },
  { slug: 'water-heater-repair', name: 'Water Heater Repair', description: 'Troubleshooting and repair when a water heater leaks, stops heating or needs attention.', focus: ['Your water heater has stopped working', 'The unit is leaking or behaving differently', 'You need a clear explanation of repair options'] },
  { slug: 'water-heater-replacement', name: 'Water Heater Replacement', description: 'Water heater replacement with practical options explained before installation.', focus: ['Your water heater needs replacing', 'An urgent failure has interrupted hot water', 'You want to compare a suitable replacement option'] },
  { slug: 'basement-water-removal', name: 'Basement Water Removal', description: 'Prompt help pumping water from a flooded basement and getting the drying process started.', focus: ['A basement has flooded after a storm', 'Standing water needs pumping out', 'You need help with fans and initial drying'] },
  { slug: 'drain-cleaning', name: 'Drain Cleaning & Clog Repair', description: 'Clear clogged drains and investigate recurring blockages and cleanout access.', focus: ['A sink, tub or drain is clogged', 'A blockage keeps returning', 'You need help with an exterior cleanout'] },
  { slug: 'septic-system-replacement', name: 'Septic System Replacement', description: 'Septic system replacement with clear answers to your questions throughout the work.', focus: ['Your septic system needs replacement', 'You have questions about the replacement work', 'You want to discuss next steps for your property'] },
  { slug: 'pipe-leak-repair', name: 'Pipe Leak Repair', description: 'Locate and repair leaking pipes, including small hidden leaks affecting an interior wall.', focus: ['You notice dampness or damage on a wall', 'A pipe appears to be leaking', 'You want the repair checked for leaks afterward'] },
  { slug: 'faucet-fixture-repair', name: 'Faucet & Fixture Installation', description: 'Install or replace faucets and plumbing fixtures, including work in older homes.', focus: ['You need a tub faucet replaced', 'A fixture is leaking or no longer working', 'You have a plumbing update in an older home'] },
];
const photoPairs: Record<string, [string, string]> = {
  'slab-leak-repair': ['/images/plumbing-pipes.jpg', '/images/plumbing-repair.jpg'], 'water-heater-repair': ['/images/plumbing-hot-water.jpg', '/images/plumbing-radiator.jpg'],
  'water-heater-replacement': ['/images/plumbing-radiator.jpg', '/images/plumbing-hot-water.jpg'], 'basement-water-removal': ['/images/plumbing-repair.jpg', '/images/plumbing-pipes.jpg'],
  'drain-cleaning': ['/images/plumbing-pipes.jpg', '/images/plumbing-repair.jpg'], 'septic-system-replacement': ['/images/plumbing-technician.jpg', '/images/plumbing-pipes.jpg'],
  'pipe-leak-repair': ['/images/plumbing-pipes.jpg', '/images/plumbing-repair.jpg'], 'faucet-fixture-repair': ['/images/plumbing-repair.jpg', '/images/plumbing-radiator.jpg'],
};
function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
  const images = photoPairs[entry.slug];
  const overview = 'Davidson Plumbing LLC provides plumbing service from El Reno, Oklahoma. Call to describe the issue, discuss the work and ask about availability.';
  const steps = [
    ['Tell us what is happening', 'First contact', 'Describe the plumbing issue and the property.', 'For a leak or flood, explain what is affected and whether water is still flowing.'],
    ['Assess the issue', 'By arrangement', 'The plumber reviews the problem and explains suitable next steps.', 'The work depends on the plumbing, access and condition of the affected area.'],
    ['Review the work', 'Before work begins', 'Discuss the recommended work, timing and quote.', 'Ask questions about the repair or replacement before proceeding.'],
    ['Complete the agreed service', 'As arranged', 'The agreed plumbing work is completed at your property.', 'Review the completed repair and any follow-up with the team.'],
  ];
  return {
    ...entry, shortDescription: entry.description, navLabel: entry.name, tagline: entry.name + ' in El Reno, Oklahoma.', clinicalExplanation: overview,
    whoNeeds: entry.focus, benefits: ['Clear communication about the work', 'Prompt response when available', 'Residential plumbing repair and replacement'], indications: entry.focus.map((condition) => ({ condition, explanation: 'Call Davidson Plumbing LLC to describe the issue and discuss a suitable next step.' })),
    procedureSteps: steps.map(([title, duration, description, clinicalDetails], index) => ({ stepNumber: index + 1, title, duration, description, clinicalDetails })),
    recoveryTimeline: [
      { period: 'Before the visit', expectedSensations: 'Share the plumbing concern and arrange a suitable time.', careProtocol: 'If water is leaking, shut off the nearest safe valve if you can and describe the leak when you call.' },
      { period: 'During the work', expectedSensations: 'The plumber assesses the issue and completes the agreed work.', careProtocol: 'Discuss access, the work scope and any property-specific arrangements with the team.' },
      { period: 'After the work', expectedSensations: 'Review the completed work and any follow-up notes.', careProtocol: 'Contact Davidson Plumbing LLC with questions about the completed service.' },
    ],
    costTransparency: { baseRange: 'Call to discuss the plumbing issue and request a quote.', factors: ['The type and condition of the plumbing', 'Property access and materials required', 'The agreed work scope'], whatIsIncluded: ['Discussion of the issue and options', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on the issue and agreed scope. Contact Davidson Plumbing LLC for a quote.' },
    beforeAfterCase: { category: entry.name, clinicalContext: 'Representative plumbing imagery. Contact Davidson Plumbing LLC to discuss work at your property.', beforeLabel: 'Plumbing issue', afterLabel: 'Completed plumbing work', beforeImage: images[0], afterImage: images[1], timeframe: 'Timing depends on the service and agreed work.' },
    assignedDentistId: 'davidson-team', faqs: [
      { question: 'How do I arrange ' + entry.name.toLowerCase() + '?', answer: 'Call ' + phone + ' to describe the plumbing issue and discuss availability.' },
      { question: 'Where is Davidson Plumbing LLC located?', answer: 'Davidson Plumbing LLC is located at 1300 Sunset Dr, El Reno, OK 73036. Call to confirm service availability for your address.' },
      { question: 'What are your hours?', answer: 'The listed hours are Monday through Thursday, 8 AM–5 PM; Friday, 8 AM–12 PM; and closed Saturday and Sunday. Hours may differ.' },
      { question: 'How do I request a quote?', answer: 'Call ' + phone + ' to describe the work and request a quote.' },
    ],
  };
}
export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'slab-leak-repair-options', title: 'Slab leak repair options: what to expect', category: 'Leak repair', readTime: '3 min read', publishDate: '2026-11-10', lastUpdated: '2026-11-10', authorId: 'davidson-team', excerpt: 'How a plumber can inspect a slab leak and discuss a repair or new water line.', leadImage: '/images/plumbing-pipes.jpg', relatedServiceSlug: 'slab-leak-repair', content: { intro: 'A slab leak can affect flooring and walls. A plumber can inspect the issue, explain the source and discuss repair options such as running a new line when appropriate.', sections: [{ heading: 'Describe what you noticed', body: 'Share where you see moisture or damage, when it began and any changes you have noticed in water use.' }, { heading: 'Discuss the repair plan', body: 'Ask about the recommended work, access, timing and quote before the repair begins.' }] } },
  { slug: 'when-a-water-heater-stops-working', title: 'When a water heater stops working', category: 'Water heaters', readTime: '3 min read', publishDate: '2026-11-10', lastUpdated: '2026-11-10', authorId: 'davidson-team', excerpt: 'What information helps when arranging a water heater repair or replacement.', leadImage: '/images/plumbing-hot-water.jpg', relatedServiceSlug: 'water-heater-repair', content: { intro: 'If your water heater stops working or starts leaking, describe the symptoms and ask a plumber to assess whether repair or replacement is a suitable option.', sections: [{ heading: 'Note the symptoms', body: 'Mention changes in hot water, visible leaks, unusual sounds and when the issue started.' }, { heading: 'Review your options', body: 'Discuss the proposed work, timing and quote before deciding how to proceed.' }] } },
  { slug: 'what-to-do-after-a-basement-flood', title: 'What to do after a basement flood', category: 'Flood response', readTime: '3 min read', publishDate: '2026-11-10', lastUpdated: '2026-11-10', authorId: 'davidson-team', excerpt: 'Steps to take when a storm leaves standing water in your basement.', leadImage: '/images/plumbing-repair.jpg', relatedServiceSlug: 'basement-water-removal', content: { intro: 'Standing water can damage belongings and building materials. Keep clear of electrical hazards and arrange safe pumping and drying help.', sections: [{ heading: 'Put safety first', body: 'Do not enter water if electrical equipment or outlets may be affected. Contact the appropriate utility or emergency service if there is an immediate hazard.' }, { heading: 'Start water removal and drying', body: 'Once the area is safe, arrange pumping and airflow to begin drying. Discuss the affected areas and next steps with the service team.' }] } },
];
export const CUSTOMER_REVIEWS: { name: string; date: string; text: string; rating: number }[] = [
  { name: 'Amber Keeler', date: 'a month ago', rating: 5, text: 'Davidson Plumbing repaired a slab leak, came out for a same-day walkthrough, and had a team run a new line the next day. They also identified a water heater that needed replacement.' },
  { name: 'Tricia Housley', date: '3 weeks ago', rating: 5, text: 'After a storm flooded their basement, Davidson Plumbing came the same day, pumped it out and helped with fans to get it drying.' },
  { name: 'William Liticker', date: '2 weeks ago', rating: 5, text: 'The crew replaced a water heater, explained everything from the start and provided respectful, professional service.' },
  { name: 'Jesse Vasquez', date: '2 weeks ago', rating: 5, text: 'Julian and Thomas arrived promptly, accurately diagnosed a leak and completed the repair with skill and care.' },
  { name: 'Savannah Ruesch', date: '6 months ago', rating: 5, text: 'The team responded quickly to a clog, capped a cleanout pipe and was fast, personable and knowledgeable. The pricing was fair.' },
  { name: 'Victor Renquist', date: '2 months ago', rating: 5, text: 'The plumbers found a small hidden bathroom pipe leak, replaced the damaged section and checked that no leaks remained.' },
  { name: 'Trust ISSUEZ', date: '2 months ago', rating: 5, text: 'When a water heater failed, Davidson Plumbing found a better and less expensive replacement solution and installed it quickly and professionally.' },
  { name: 'Brent Van Meter', date: '6 months ago', rating: 5, text: 'Davidson Plumbing installed a tub faucet in an older home, with good communication and timely service.' },
  { name: 'Dale Crump', date: '6 months ago', rating: 5, text: 'The team did a fantastic job resolving a slab leak, with top-notch work and invoicing.' },
  { name: 'Chastine Edwards', date: '7 months ago', rating: 5, text: 'The team replaced a septic system, answered every question politely and earned this customer’s trust for future plumbing needs.' },
];
