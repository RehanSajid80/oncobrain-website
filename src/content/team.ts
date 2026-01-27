// Team Page Content - Easy to edit!
// To add/remove team members, just edit the arrays below

export const teamPage = {
  hero: {
    headline: 'Our Team',
    subheadline: 'OncoBrain is built by a multidisciplinary team with deep experience across oncology, clinical research, health systems, data science, and healthcare innovation.',
  },

  // Leadership Team
  leadership: {
    headline: 'Leadership',
    members: [
      {
        name: 'Gilmer Valdes PhD, DABR',
        role: 'Founder and CEO',
        organization: 'OncoBrain',
        image: '/team/gilmer-valdes.jpg', // Add image to public/team/
      },
      {
        name: 'Philippe E Spiess, MD, MS, FRCS(C), FACS',
        role: 'Chief Medical Officer',
        organization: 'OncoBrain',
        image: '/team/philippe-spiess.jpg',
      },
      {
        name: 'Nisha Gandhi, RN, MBA',
        role: 'Chief Growth Officer',
        organization: 'OncoBrain',
        image: '/team/nisha-gandhi.jpg',
      },
      {
        name: 'Yaser Martinez, PhD',
        role: 'Chief Technology Officer',
        organization: 'OncoBrain',
        image: '/team/yaser-martinez.jpg',
      },
      {
        name: 'Elier Delgado, MSc',
        role: 'Chief Information Officer',
        organization: 'OncoBrain',
        image: '/team/elier-delgado.jpg',
      },
    ],
  },

  // Product & Engineering Team
  productTeam: {
    headline: 'Product & Engineering',
    members: [
      {
        name: 'Meag Doherty',
        role: 'VP, Product',
        organization: 'AccelerOnc Studio',
        image: '/team/meag-doherty.jpg',
      },
      {
        name: 'Carlos Garcia, PhD',
        role: 'VP Inference',
        organization: 'OncoBrain',
        image: '/team/carlos-garcia.jpg',
      },
      {
        name: 'Isaac Jr. Rodriguez, PhD',
        role: 'VP of Search',
        organization: 'OncoBrain',
        image: '/team/isaac-rodriguez.jpg',
      },
    ],
  },

  // Board & Advisors
  boardAdvisors: {
    headline: 'Board & Advisors',
    members: [
      {
        name: 'Kamal Jethwani, MD, MPH',
        role: 'Chief Executive Officer',
        organization: 'AccelerOnc Studio',
        secondaryRole: 'Board Chair, OncoBrain',
        image: '/team/kamal-jethwani.jpg',
      },
      {
        name: 'Xavier Avat',
        role: 'EVP, Chief Business Officer',
        organization: 'Moffitt Cancer Center',
        secondaryRole: 'Board Member, OncoBrain',
        image: '/team/xavier-avat.jpg',
      },
      {
        name: 'Stan Lupidis',
        role: 'Founder Advisor',
        organization: 'Former CEO & Founder, Exact Sciences',
        image: '/team/stan-lupidis.jpg',
      },
    ],
  },

  // Partner & Advisor Affiliations
  // To add logos: place image files in /public/logos/affiliations/ and add logo path
  affiliations: {
    headline: 'Our Team\'s Experience Includes',
    logos: [
      { name: 'Loyola University Chicago' },
      { name: 'World Health Organization' },
      { name: 'UCLA' },
      { name: 'Chewy' },
      { name: 'Harvard Medical School' },
      { name: 'Partners Healthcare' },
      { name: 'T-Mobile' },
      { name: 'KPMG' },
      { name: 'BCG' },
      { name: 'Penn' },
      { name: 'MGH' },
      { name: 'UCSF' },
    ],
  },
}
