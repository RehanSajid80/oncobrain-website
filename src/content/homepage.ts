// Homepage Content - Easy to edit!

export const homepage = {
  // Hero Section
  hero: {
    badge: 'By Clinicians, For Clinicians',
    headline: 'Think Like an Oncologist',
    subheadline: 'Clinical reasoning that surfaces the questions you didn\'t know to ask. Guideline-concordant decision support built for the realities of cancer care.',
    ctaText: 'Request Early Access',
    ctaSecondaryText: 'Watch Demo',
    // Optional: Add a video URL for the demo
    demoVideoUrl: 'https://www.youtube.com/embed/your-video-id',
  },

  // Problem Statement Section
  problem: {
    headline: 'The Challenge of Modern Oncology',
    description: 'The challenge is no longer access to information\u2014it\'s translating rapidly evolving knowledge into confident decisions at the point of care.',
    quote: {
      text: 'Chat tools answer the question you ask. Oncology requires surfacing the questions you didn\'t know to ask.',
      author: 'OncoBrain Clinical Team',
    },
  },

  // Statistics Section
  stats: [
    {
      value: '30-50%',
      label: 'of global cancer care is non-guideline concordant',
      description: 'Patients receive care that doesn\'t align with best practices',
    },
    {
      value: '80%',
      label: 'of patients treated outside academic centers',
      description: 'Community oncologists lack specialist consultation access',
    },
    {
      value: '73 days',
      label: 'for medical knowledge to double',
      description: 'Impossible for any clinician to keep pace manually',
    },
  ],

  // How It Works Section
  howItWorks: {
    headline: 'How OncoBrain Works',
    subheadline: 'Clinical intelligence that fits your workflow',
    steps: [
      {
        number: '01',
        title: 'Input Case Details',
        description: 'Enter patient history, imaging, pathology, and biomarkers through an intuitive clinical interface.',
        icon: 'clipboard',
      },
      {
        number: '02',
        title: 'Guideline Analysis',
        description: 'OncoBrain reasons through NCCN, ASCO, and ESMO guidelines to identify the most relevant recommendations.',
        icon: 'brain',
      },
      {
        number: '03',
        title: 'Validated Recommendations',
        description: 'Receive evidence-based therapy options with full citations, rationale, and confidence scoring.',
        icon: 'checkCircle',
      },
    ],
  },

  // Features Section
  features: {
    headline: 'Built for Clinical Reality',
    subheadline: 'Safe, scalable, specialist expertise at the speed of AI',
    items: [
      {
        title: 'Evidence-Based',
        description: 'Every recommendation traced to peer-reviewed sources and clinical guidelines.',
        icon: 'book',
      },
      {
        title: 'Fully Transparent',
        description: 'See the complete reasoning chain. No black boxes. Full explainability.',
        icon: 'eye',
      },
      {
        title: 'Clinician-Validated',
        description: 'Developed and tested with oncologists at Moffitt Cancer Center.',
        icon: 'users',
      },
      {
        title: 'HIPAA Compliant',
        description: 'Enterprise-grade security. Your patient data stays protected.',
        icon: 'shield',
      },
      {
        title: 'EMR Ready',
        description: 'Designed for seamless integration with Epic, Cerner, and other systems.',
        icon: 'plug',
      },
      {
        title: '99.8% Accuracy',
        description: 'Rigorous clinical validation against gold-standard oncology cases.',
        icon: 'target',
      },
    ],
  },

  // Testimonials Section
  testimonials: {
    headline: 'Trusted by Oncologists',
    items: [
      {
        quote: 'OncoBrain helps me stay current with rapidly evolving treatment landscapes. It\'s like having a tumor board on call 24/7.',
        author: 'Dr. Sarah Chen',
        role: 'Medical Oncologist',
        organization: 'Community Cancer Center',
        image: '/images/testimonials/doctor-1.jpg',
      },
      {
        quote: 'The transparency is what convinced me. I can see exactly why OncoBrain made each recommendation and verify it myself.',
        author: 'Dr. Michael Torres',
        role: 'Hematology-Oncology',
        organization: 'Regional Medical Center',
        image: '/images/testimonials/doctor-2.jpg',
      },
      {
        quote: 'For complex cases with multiple comorbidities, OncoBrain surfaces considerations I might have missed under time pressure.',
        author: 'Dr. Emily Rodriguez',
        role: 'Breast Oncology Specialist',
        organization: 'University Health System',
        image: '/images/testimonials/doctor-3.jpg',
      },
    ],
  },

  // CTA Section
  cta: {
    headline: 'Ready to Transform Your Practice?',
    description: 'Join the community of oncologists using evidence-based AI to deliver guideline-concordant care.',
    ctaText: 'Request Early Access',
    features: [
      'Free pilot program',
      'Dedicated onboarding support',
      'No credit card required',
    ],
  },
}
