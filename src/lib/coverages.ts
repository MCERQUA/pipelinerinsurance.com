export interface Coverage {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  whatsCovered: string[];
  whoNeedsThis: string;
  whyCCA: string;
  faqs: Array<{ q: string; a: string }>;
  metaTitle: string;
  metaDescription: string;
}

export const coverages: Coverage[] = [
  {
    slug: 'general-liability',
    title: 'General Liability Insurance for Pipeline Contractors',
    shortTitle: 'General Liability',
    description: 'Core protection against third-party bodily injury and property damage claims for pipeline construction and installation operations.',
    icon: 'Shield',
    whatsCovered: [
      'Third-party bodily injury',
      'Property damage to client and adjacent property',
      'Completed operations liability',
      'Products liability',
      'Personal and advertising injury',
      'Medical payments',
      'Legal defense costs',
    ],
    whoNeedsThis: 'Every pipeline contractor, from single-operator installers to multi-crew pipeline construction companies, needs general liability insurance. Most pipeline construction contracts and state licensing requirements mandate minimum GL coverage.',
    whyCCA: 'Standard insurers often struggle to place GL for pipeline contractors due to the high-risk nature of pipeline work. Our carrier relationships allow us to find competitive rates even for contractors working in oil & gas, high-pressure gas lines, and cross-country pipeline projects.',
    faqs: [
      { q: 'How much general liability coverage do I need?', a: 'Most pipeline construction contracts require at least $1M per occurrence / $2M aggregate. Large infrastructure projects often require $5M or higher. We help you match coverage to your contract requirements.' },
      { q: 'Does general liability cover pollution from pipeline leaks?', a: 'Standard GL policies have pollution exclusions. For pipeline contractors, you need a separate Pollution Liability policy to cover environmental incidents. We offer both bundled together.' },
      { q: 'Can I get a certificate of insurance quickly?', a: 'Yes. Once bound, we issue certificates same-day. We can accommodate rush COI requests for active bids and contract starts.' },
    ],
    metaTitle: 'General Liability Insurance for Pipeline Contractors | CCA',
    metaDescription: 'Specialized general liability insurance for oil, gas, and underground pipeline contractors. Get covered fast — 15-minute quotes, all 50 states.',
  },
  {
    slug: 'workers-compensation',
    title: 'Workers Compensation for Pipeline Workers',
    shortTitle: 'Workers Compensation',
    description: 'High-risk workers comp for pipeline construction crews, welders, equipment operators, and field technicians.',
    icon: 'Users',
    whatsCovered: [
      'Medical treatment for work injuries',
      'Lost wage replacement',
      'Permanent disability benefits',
      'Rehabilitation and retraining costs',
      'Death benefits for surviving family',
      'Legal defense for employer liability claims',
      'Coverage across multiple states simultaneously',
    ],
    whoNeedsThis: 'Pipeline construction is one of the most hazardous occupations in America. Workers comp is required in virtually every state where you employ workers. Multi-state pipeline projects require policies that respond in all jurisdictions.',
    whyCCA: 'Pipeline workers carry some of the highest workers comp class codes. We have access to carriers who specialize in oil & gas and pipeline construction, often securing rates that standard markets refuse to quote.',
    faqs: [
      { q: 'What class codes apply to pipeline contractors?', a: 'Common codes include 6233 (underground pipeline), 6235 (gas main installation), and 7538 (oil field operations). The correct code significantly affects your rate — we make sure you\'re classified accurately.' },
      { q: 'Do I need workers comp if I only use subcontractors?', a: 'Possibly. If your subs don\'t have their own coverage, you may be liable for their injuries. We can structure your policy to address subcontractor risk properly.' },
      { q: 'How is the premium calculated?', a: 'Workers comp premium is based on your payroll and the applicable class code rate. We audit your payroll annually to ensure accurate premiums — no surprise end-of-year bills.' },
    ],
    metaTitle: 'Workers Compensation for Pipeline Contractors | CCA',
    metaDescription: 'Workers compensation insurance for pipeline construction crews. High-risk class codes, multi-state coverage, competitive rates. Get a quote today.',
  },
  {
    slug: 'commercial-auto',
    title: 'Commercial Auto Insurance for Pipeline Contractors',
    shortTitle: 'Commercial Auto',
    description: 'Fleet and single-vehicle commercial auto coverage for pipeline contractors — including heavy equipment haulers, service trucks, and specialty vehicles.',
    icon: 'Truck',
    whatsCovered: [
      'Liability coverage for owned, leased, and hired vehicles',
      'Collision and comprehensive',
      'Uninsured/underinsured motorist',
      'Medical payments',
      'Hired and non-owned auto',
      'Equipment hauling endorsements',
      'DOT compliance filing (MCS-90)',
    ],
    whoNeedsThis: 'Pipeline contractors operating any vehicles for business purposes — whether a single pickup truck or a fleet of excavators and pipe-hauling rigs — need commercial auto insurance. Personal auto policies exclude business use.',
    whyCCA: 'We understand the unique vehicles pipeline contractors operate: long-haul pipe trailers, welding rigs, hydrovac trucks, and directional drilling equipment carriers. We find policies that actually cover your fleet.',
    faqs: [
      { q: 'Do I need DOT authority for my vehicles?', a: 'If your vehicles exceed 10,001 lbs GVWR and cross state lines, DOT authority may apply. We can assist with MCS-90 filings for carriers subject to FMCSA regulations.' },
      { q: 'Can I add hired and non-owned auto to my policy?', a: 'Yes. HNOA coverage protects you when employees use their personal vehicles for work tasks — critical for pipeline crews who may drive client vehicles or rented equipment.' },
      { q: 'What about vehicles parked at a job site?', a: 'Vehicles at active job sites may have different coverage needs than vehicles on the road. We structure policies to address both scenarios.' },
    ],
    metaTitle: 'Commercial Auto Insurance for Pipeline Contractors | CCA',
    metaDescription: 'Commercial auto insurance for pipeline contractor fleets. Covers trucks, trailers, welding rigs, and specialty equipment. Get a quote in 15 minutes.',
  },
  {
    slug: 'equipment-coverage',
    title: 'Pipeline Equipment Insurance & Inland Marine Coverage',
    shortTitle: 'Equipment Coverage',
    description: 'Inland marine and equipment coverage for pipeline contractors\'s expensive machinery — directional drills, excavators, fusion equipment, and more.',
    icon: 'Wrench',
    whatsCovered: [
      'Directional drilling equipment',
      'Excavators and trenching machines',
      'Pipe fusion and welding equipment',
      'Hydrovac trucks',
      'Testing and inspection equipment',
      'Hand tools and small equipment',
      'Leased and rented equipment',
    ],
    whoNeedsThis: 'Pipeline contractors invest hundreds of thousands — sometimes millions — in specialized equipment. A single equipment breakdown or theft on a remote job site can halt a project and cost far more than any insurance premium.',
    whyCCA: 'Equipment floater policies for high-value pipeline equipment require specialists. We know the replacement values and depreciation schedules for directional drilling rigs, pipe processors, and HDD equipment.',
    faqs: [
      { q: 'Does equipment coverage apply at all job sites?', a: 'Yes. Inland marine equipment floater policies follow your equipment to wherever it operates — including remote job sites, storage yards, and transit.' },
      { q: 'What about rented equipment?', a: 'We can add rented/leased equipment coverage to your policy, protecting equipment you don\'t own but are responsible for on a job.' },
      { q: 'Is breakdown coverage different from physical damage?', a: 'Yes. Physical damage covers external events (theft, collision, fire). Equipment breakdown/boiler & machinery coverage addresses mechanical and electrical failures. We recommend both for critical pipeline equipment.' },
    ],
    metaTitle: 'Pipeline Equipment Insurance | Inland Marine for Contractors | CCA',
    metaDescription: 'Equipment insurance for pipeline contractors. Covers directional drills, excavators, fusion equipment, and more. All job sites, all 50 states.',
  },
  {
    slug: 'pollution-liability',
    title: 'Pollution Liability Insurance for Pipeline Contractors',
    shortTitle: 'Pollution Liability',
    description: 'Essential pollution and environmental liability coverage for pipeline contractors working with oil, gas, chemicals, and underground utilities.',
    icon: 'AlertTriangle',
    whatsCovered: [
      'Third-party bodily injury from pollution',
      'Property damage from pollutant release',
      'Clean-up and remediation costs',
      'Regulatory defense and fines',
      'First-party site clean-up',
      'Transportation pollution',
      'Emergency response costs',
    ],
    whoNeedsThis: 'Any pipeline contractor handling petroleum products, natural gas, chemicals, or even disturbing contaminated soil needs pollution liability. Standard GL policies have broad pollution exclusions — a single leak or spill without PLI coverage can be financially catastrophic.',
    whyCCA: 'Pollution liability for pipeline contractors is a specialty line that most general brokers can\'t effectively place. Our carrier relationships include E&S specialists who understand pipeline construction risk — including high-pressure gas and crude oil operations.',
    faqs: [
      { q: 'Does my general liability policy cover pollution?', a: 'Almost certainly not. Standard commercial general liability policies include an "absolute pollution exclusion" that eliminates coverage for nearly all pollution events. Pipeline contractors need a separate pollution liability policy.' },
      { q: 'What triggers a pollution liability claim?', a: 'A triggered claim can arise from a pipeline leak or spill, disturbing contaminated soil during excavation, hydrostatic test water discharge, or drill fluid migration during HDD operations.' },
      { q: 'How much pollution liability coverage do I need?', a: 'Project contracts often specify minimum requirements of $1M-$5M. Pipeline projects in sensitive environmental areas or involving large-diameter lines may require $10M or more. We help you match limits to contract requirements.' },
    ],
    metaTitle: 'Pollution Liability Insurance for Pipeline Contractors | CCA',
    metaDescription: 'Specialized pollution liability coverage for pipeline contractors. Protect against spills, leaks, and environmental incidents. Get a quote today.',
  },
  {
    slug: 'contractor-bonds',
    title: 'Contractor License Bonds for Pipeline Contractors',
    shortTitle: 'Contractor Bonds',
    description: 'License bonds, performance bonds, and payment bonds for pipeline contractors — fast approval, competitive rates.',
    icon: 'Award',
    whatsCovered: [
      'Contractor license bonds (state-required)',
      'Performance bonds for pipeline projects',
      'Payment bonds (Miller Act & Little Miller Act)',
      'Maintenance bonds',
      'Bid bonds',
      'Supply bonds',
      'Subdivision bonds',
    ],
    whoNeedsThis: 'Pipeline contractors need bonds for state licensing, government contracts, and many large private projects. Performance and payment bonds are typically required for public works projects over $150,000 under the Miller Act.',
    whyCCA: 'Getting surety bonds for pipeline contractors — especially newer companies or those with challenging credit — requires working with surety specialists. We have relationships with surety companies experienced in pipeline contractor bonding.',
    faqs: [
      { q: 'How is a bond different from insurance?', a: 'Insurance protects you. A bond protects the project owner or public from your non-performance or non-payment. When a bond is called, the surety pays the claim — but you must reimburse the surety.' },
      { q: 'Can I get bonded with bad credit?', a: 'Possibly. Some surety markets specialize in hard-to-place bonds. Bond limits may be lower, and premiums higher, but we work to find solutions for contractors with credit challenges.' },
      { q: 'How quickly can I get a bond?', a: 'Small license bonds (under $25K) can often be issued same-day. Larger performance bonds require underwriting that can take 3-5 business days, sometimes longer for large projects.' },
    ],
    metaTitle: 'Contractor Bonds for Pipeline Contractors | CCA',
    metaDescription: 'License bonds, performance bonds, and payment bonds for pipeline contractors. Fast approval, all 50 states. Get bonded today.',
  },
];

export function getCoverageBySlug(slug: string): Coverage | undefined {
  return coverages.find((c) => c.slug === slug);
}
