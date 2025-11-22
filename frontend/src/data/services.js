// Static definition of Home Buddy services and their schedules
const SERVICES = [
  {
    id: 'wall-crust',
    name: 'Wall Crust Detection & Repair',
    frequencyLabel: '1 time per year',
    frequencyPerYear: 1,
    purpose:
      'Annual inspection and repair of wall crust issues to maintain structural integrity and aesthetics.',
    category: 'Structural',
    type: 'inspection',
  },
  {
    id: 'plumbing',
    name: 'Plumbing Inspection / Repair',
    frequencyLabel: '12 times per year',
    frequencyPerYear: 12,
    purpose:
      'Monthly plumbing checks and repairs to prevent leaks, clogs, and water damage.',
    category: 'Utilities',
    type: 'inspection',
  },
  {
    id: 'electrical',
    name: 'Electrical Inspection / Repair',
    frequencyLabel: '12 times per year',
    frequencyPerYear: 12,
    purpose:
      'Monthly electrical inspections to ensure safety, compliance, and functionality.',
    category: 'Utilities',
    type: 'inspection',
  },
  {
    id: 'pest-control',
    name: 'Pest & Control Service',
    frequencyLabel: '2 times per year',
    frequencyPerYear: 2,
    purpose:
      'Biannual pest control to prevent infestations and maintain a healthy home.',
    category: 'Health & Safety',
    type: 'maintenance',
  },
  {
    id: 'paint-sealant',
    name: 'Paint & Sealant Assessment',
    frequencyLabel: '1 time per year',
    frequencyPerYear: 1,
    purpose:
      'Annual assessment of paint and sealants to protect surfaces and improve appearance.',
    category: 'Aesthetics',
    type: 'assessment',
  },
  {
    id: 'device-integration',
    name: 'Smart Device Integration',
    frequencyLabel: '12 times per year',
    frequencyPerYear: 12,
    purpose:
      'Monthly integration and checkups for smart devices like CCTV and video doorbells.',
    category: 'Smart Home',
    type: 'integration',
  },
  {
    id: 'home-health-report',
    name: 'Home Health Report',
    frequencyLabel: '4 times per year',
    frequencyPerYear: 4,
    purpose:
      'Quarterly overview of the overall health of your home with improvement suggestions.',
    category: 'Reports',
    type: 'report',
  },
  {
    id: 'scan-interior',
    name: 'Scan Interior Design',
    frequencyLabel: 'Anytime in the app',
    frequencyPerYear: null,
    purpose:
      'On-demand scan of your interior to get layout and design suggestions.',
    category: 'Aesthetics',
    type: 'on_demand',
  },
  {
    id: 'support-24-7',
    name: '24/7 Support',
    frequencyLabel: 'Available anytime',
    frequencyPerYear: null,
    purpose:
      'Round-the-clock access to support for urgent home issues.',
    category: 'Support',
    type: 'support',
  },
];

export default SERVICES;
