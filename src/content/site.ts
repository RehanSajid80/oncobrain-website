// Site-wide configuration - Easy to edit!
export const siteConfig = {
  name: 'OncoBrain',
  description: 'Clinical intelligence that thinks like an oncologist. Guideline-concordant decision support for cancer care.',
  tagline: 'Think Like an Oncologist',
  url: 'https://oncobrain.ai',

  // Navigation Links
  navigation: [
    { name: 'For Oncologists', href: '/for-oncologists' },
    { name: 'For Health Systems', href: '/for-health-systems' },
    { name: 'Why OncoBrain', href: '/why-oncobrain' },
    { name: 'Clinical Validation', href: '/clinical-validation' },
    { name: 'About', href: '/about' },
  ],

  // Footer Links
  footerLinks: {
    product: [
      { name: 'For Oncologists', href: '/for-oncologists' },
      { name: 'For Health Systems', href: '/for-health-systems' },
      { name: 'Why OncoBrain', href: '/why-oncobrain' },
      { name: 'Clinical Validation', href: '/clinical-validation' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact-us' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    events: [
      { name: 'AHA Rural 2026', href: '/aha-rural-2026' },
    ],
  },

  // Social Links
  social: {
    linkedin: 'https://linkedin.com/company/oncobrain',
    twitter: 'https://twitter.com/oncobrain',
  },

  // Contact Info
  contact: {
    email: 'info@oncobrain.ai',
    address: 'Tampa, Florida',
  },
}

// Trust badges / Partners
export const partners = [
  {
    name: 'Moffitt Cancer Center',
    logo: '/logos/moffitt.png',
    description: 'Developed in collaboration with Moffitt Cancer Center',
  },
  {
    name: 'National Science Foundation',
    logo: '/logos/nsf.png',
    description: 'Supported by NSF',
  },
  {
    name: 'Innovations Montreal',
    logo: '/logos/montreal.png',
    description: 'Supported by Innovations Montreal',
  },
]
