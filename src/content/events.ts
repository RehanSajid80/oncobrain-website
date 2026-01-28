// Event Landing Pages Content

export const ahaRuralConference2026 = {
  // Event Details
  event: {
    name: 'AHA Rural Health Care Leadership Conference',
    shortName: 'AHA Rural 2026',
    dates: 'February 8-11, 2026',
    location: 'San Antonio, TX',
    url: 'https://www.aha.org/education-events/2026-aha-rural-health-care-leadership-conference',
  },

  // Hero Section
  hero: {
    badge: 'AHA Rural Healthcare Conference 2026',
    headline: 'Experience OncoBrain',
    subheadline: 'Get 4 weeks of unlimited access to the world\'s first oncology-specific clinical reasoning engine.',
    description: 'See how OncoBrain helps community and rural oncologists make faster, guideline-concordant treatment decisions, without sacrificing safety or clinical judgment.',
    ctaText: 'Start Your Free Trial',
  },

  // What You Get Section
  offer: {
    headline: 'Your Exclusive Conference Offer',
    subheadline: '4 Weeks of Unlimited OncoBrain Access',
    items: [
      {
        title: 'Full Platform Access',
        description: 'Experience every feature of OncoBrain with no restrictions during your trial period.',
        icon: 'unlock',
      },
      {
        title: 'Unlimited Case Consultations',
        description: 'Run as many patient cases as you need through our clinical reasoning engine.',
        icon: 'infinity',
      },
      {
        title: 'Guideline-Concordant Insights',
        description: 'Get real-time recommendations aligned with NCCN, ASCO, and peer-reviewed evidence.',
        icon: 'checkCircle',
      },
      {
        title: 'Dedicated Support',
        description: 'Access to our clinical support team to help you get the most from your trial.',
        icon: 'headset',
      },
    ],
  },

  // Why OncoBrain for Rural/Community Oncologists
  whyOncoBrain: {
    headline: 'Built for Oncologists Like You',
    subheadline: 'Expert-level support at the speed of care',
    description: 'Community and rural oncologists face unique challenges. OncoBrain was designed to help.',
    stats: [
      {
        value: '80%',
        label: 'of cancer patients are treated outside academic centers',
      },
      {
        value: '73 days',
        label: 'for medical knowledge to double',
      },
      {
        value: '241+',
        label: 'annual guideline updates from NCCN & ASCO',
      },
      {
        value: '<1%',
        label: 'hallucination rate vs 40-50% for general AI',
      },
    ],
    benefits: [
      'Subspecialty-level reasoning without the wait for consults',
      'Stay current with rapidly evolving guidelines automatically',
      'Reduce cognitive burden on high-volume case days',
      'Full transparency. See exactly why each recommendation is made',
    ],
  },

  // How It Works (Quick Overview)
  howItWorks: {
    headline: 'See It in Action',
    steps: [
      {
        number: '1',
        title: 'Enter Case Details',
        description: 'Input patient history, staging, biomarkers, and clinical context.',
      },
      {
        number: '2',
        title: 'OncoBrain Reasons',
        description: 'Our engine synthesizes guidelines, literature, and patient-specific factors.',
      },
      {
        number: '3',
        title: 'Review Recommendations',
        description: 'Get explainable, guideline-concordant insights with full citations.',
      },
    ],
  },

  // Validation/Trust Section
  validation: {
    headline: 'Validated by Clinicians',
    items: [
      { value: '5.0/5.0', label: 'Efficiency' },
      { value: '4.8/5.0', label: 'Safety & Reliability' },
      { value: '4.6/5.0', label: 'Accuracy' },
    ],
    tagline: 'Developed in collaboration with Moffitt Cancer Center',
  },

  // Registration Form Section
  form: {
    headline: 'Start Your Free Trial',
    subheadline: 'Register now for 4 weeks of unlimited access',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      { name: 'lastName', label: 'Last Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
      { name: 'organization', label: 'Practice/Organization', type: 'text', required: true },
      { name: 'role', label: 'Role', type: 'select', required: true, options: [
        'Medical Oncologist',
        'Hematologist-Oncologist',
        'Surgical Oncologist',
        'Radiation Oncologist',
        'Advanced Practice Provider',
        'Other',
      ]},
      { name: 'specialty', label: 'Primary Tumor Type Focus', type: 'select', required: false, options: [
        'General Oncology / Multiple',
        'Breast',
        'Lung',
        'GI / Colorectal',
        'GU / Prostate',
        'Hematologic Malignancies',
        'Gynecologic',
        'Other',
      ]},
    ],
    submitText: 'Get My Free Trial',
    disclaimer: 'By registering, you agree to receive communications from OncoBrain about your trial and related product updates. You can unsubscribe at any time.',
  },

  // Footer CTA
  cta: {
    headline: 'Questions?',
    description: 'Stop by our booth or reach out directly.',
    email: 'hello@oncobrain.ai',
  },
}
