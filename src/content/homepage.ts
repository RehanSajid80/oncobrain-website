// Homepage Content - Easy to edit!

export const homepage = {
  // Hero Section
  hero: {
    badge: 'For Clinicians. By Clinicians.',
    headline: 'The Only Oncology Clinical Reasoning Engine.',
    subheadline: 'Turning intelligence into expertise at the speed of care.',
    description: '',
    ctaText: 'Schedule a Conversation',
    ctaSecondaryText: 'See How It Works',
  },

  // Problem Statement Section
  problem: {
    headline: 'Cancer care is evolving faster than humans can track',
    description: 'The pace and complexity of oncology has outgrown traditional decision-making models:',
    stats: [
      'Over 1.9 million new cancer cases diagnosed annually in the US',
      '30-50% of global cancer care remains non-guideline-concordant',
      '80% of cancer patients are treated outside academic medical centers',
      '32 million Americans live in counties without access to an oncologist',
    ],
    whyItMatters: 'Non-concordant care is directly associated with poorer five-year survival outcomes.',
    quote: {
      text: 'General AI tools answer the question you ask. Oncology requires surfacing the questions you didn\'t know to ask.',
      author: 'OncoBrain Clinical Team',
    },
  },

  // The Gap Section
  gap: {
    headline: 'Information exists. Decision support does not.',
    description: 'Today\'s options force clinicians to choose between speed, safety, and scalability:',
    items: [
      {
        problem: 'General AI tools',
        issue: 'Deliver fast answers, but carry up to 40-50% hallucination rates risk in specific clinical settings.',
      },
      {
        problem: 'Expert consult models',
        issue: 'Are accurate, but slow and difficult to scale',
      },
      {
        problem: 'Guidelines alone',
        issue: 'Are comprehensive, but too complex to synthesize in real time',
      },
    ],
    positioning: 'OncoBrain delivers safe, scalable, specialist-level expertise at the speed of AI, without replacing clinician judgment.',
  },

  // Statistics Section
  stats: [
    {
      value: '5.0/5.0',
      label: 'Efficiency',
      description: 'Physician-rated in clinical evaluations',
    },
    {
      value: '4.6/5.0',
      label: 'Accuracy',
      description: 'Clinically validated recommendations',
    },
    {
      value: '4.8/5.0',
      label: 'Safety & Reliability',
      description: 'Trust signals that matter most',
    },
    {
      value: '<1%',
      label: 'Hallucination Rate',
      description: 'vs 40-50% for general LLMs',
    },
  ],

  // What OncoBrain Does Section
  whatItDoes: {
    headline: 'The world\'s first oncology-specific clinical reasoning engine',
    description: 'OncoBrain reasons through cancer cases the way an expert oncologist would:',
    points: [
      'Synthesizes clinical guidelines, medical literature, precision oncology data, and patient-specific context.',
      'Helps clinicians navigate complex decisions at the speed of a click — without autonomous decision-making.',
      'Delivers real-time, guideline-concordant insights while preserving clinician judgment.',
      'Acts as a clinical assurance layer, not a replacement for expertise.',
    ],
    result: 'The result: clearer decisions, made faster, with confidence.',
  },

  // How It Works Section
  howItWorks: {
    headline: 'How OncoBrain Works',
    subheadline: 'Consumes. Interprets. Advises. Anticipates.',
    description: 'OncoBrain is built to mirror expert clinical reasoning, not keyword search.',
    steps: [
      {
        number: '01',
        title: 'Consumes',
        description: 'Ingests structured and unstructured clinical data from patient records, imaging, and pathology.',
        icon: 'clipboard',
      },
      {
        number: '02',
        title: 'Interprets',
        description: 'Processes that data using an oncology-specific inference layer trained on 1M+ patients.',
        icon: 'brain',
      },
      {
        number: '03',
        title: 'Advises',
        description: 'Delivers peer-level, explainable reasoning grounded in NCCN, ASCO, and peer-reviewed literature.',
        icon: 'checkCircle',
      },
      {
        number: '04',
        title: 'Anticipates',
        description: 'Surfaces missed considerations and next clinical questions before you ask them.',
        icon: 'lightbulb',
      },
    ],
  },

  // Features Section
  features: {
    headline: 'Built for Safety You Can See',
    subheadline: 'Explainability and Traceability are the feature',
    description: 'Trust in clinical AI depends on transparency. OncoBrain is designed with safety and explainability at its core.',
    items: [
      {
        title: 'Specialized Inference Engine',
        description: 'Oncology-specific reasoning, not general medical AI adapted for cancer.',
        icon: 'brain',
      },
      {
        title: 'Multiple Verification Loops',
        description: 'Recommendations are verified multiple times before being surfaced.',
        icon: 'shield',
      },
      {
        title: '<1% Hallucination Rate',
        description: 'Our patented hallucination detection algorithms reduce hallucinations from 30-40% in specific clinical situations to less than 1%.',
        icon: 'target',
      },
      {
        title: 'Full Traceability',
        description: 'Every recommendation traced to NCCN, ASCO, and peer-reviewed literature.',
        icon: 'book',
      },
      {
        title: 'Human-in-the-Loop',
        description: 'Acts as a clinical assurance layer, not an autonomous decision-maker.',
        icon: 'users',
      },
      {
        title: 'Enterprise-Ready',
        description: 'Private cloud deployment. Health systems retain full data ownership.',
        icon: 'lock',
      },
    ],
  },

  // Speed Section
  speed: {
    headline: 'Faster decisions without cutting corners',
    description: 'OncoBrain delivers guidance in seconds, while reducing time spent on high-burden tasks:',
    tasks: [
      'Real-time search and dynamic reconciling of guidelines',
      'Reviewing dense patient histories',
      'Identifying relevant clinical trials and new therapies',
      'Recommending optimal, guideline-concordant treatment planning',
    ],
    result: 'The result is speed that strengthens care, not speed that compromises it.',
  },

  // Early Validation Section
  validation: {
    headline: 'Designed for trust. Validated by clinicians.',
    description: 'In clinical evaluations, clinicians rated OncoBrain highly across the dimensions that matter most.',
    ctaText: 'See How It Works',
  },

  // Testimonials Section
  testimonials: {
    headline: 'Trusted by Oncologists',
    items: [
      {
        quote: 'OncoBrain helps me stay current with rapidly evolving treatment landscapes. It\'s like having a tumor board on call 24/7.',
        author: 'Community Oncologist',
        role: 'Medical Oncologist',
        organization: 'Community Cancer Center',
      },
      {
        quote: 'The transparency is what convinced me. I can see exactly why OncoBrain made each recommendation and verify it myself.',
        author: 'Health System Physician',
        role: 'Hematology-Oncology',
        organization: 'Regional Medical Center',
      },
      {
        quote: 'For complex cases with multiple comorbidities, OncoBrain surfaces considerations I might have missed under time pressure.',
        author: 'Breast Oncology Specialist',
        role: 'Breast Oncology',
        organization: 'University Health System',
      },
    ],
  },

  // CTA Section
  cta: {
    headline: 'Ready to Transform Your Practice?',
    description: 'Join leading oncologists using evidence-based AI to deliver guideline-concordant care at the speed your patients deserve.',
    ctaText: 'Schedule a Conversation',
    features: [
      'Early access available',
      'Dedicated clinical onboarding',
      'Enterprise-grade security',
    ],
  },
}
