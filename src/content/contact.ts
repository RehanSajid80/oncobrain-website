// Contact Page Content - Easy to edit!

export const contactPage = {
  hero: {
    headline: 'Get in Touch',
    subheadline: 'Interested in learning more about OncoBrain, scheduling a demo, or exploring partnership opportunities?',
  },

  form: {
    headline: 'Send Us a Message',
    description: 'Fill out the form below and our team will get back to you within 24 hours.',
    // Dropdown options for inquiry type
    inquiryTypes: [
      { value: 'early-access', label: 'Early Access Interest' },
      { value: 'demo', label: 'Request a Demo' },
      { value: 'community-oncologist', label: 'Community Oncologist' },
      { value: 'health-system', label: 'Health System' },
      { value: 'strategic-partner', label: 'Strategic Partner' },
      { value: 'media', label: 'Media Inquiry' },
      { value: 'general', label: 'General Inquiry' },
    ],
  },

  meeting: {
    headline: 'Schedule a Meeting',
    description: 'Prefer to talk directly? Book a time with our team to discuss how OncoBrain can support your practice or organization.',
    ctaText: 'Schedule a Call',
    // Opens in a new tab to HubSpot meeting scheduler
    meetingLink: 'https://244017401.hubspotpreview-na2.com/_hcms/preview/preview-interactive?previewInteractiveId=306091202242&_preview=true&portalId=244017401',
  },

  info: {
    headline: 'Contact Information',
    email: 'info@oncobrain.ai',
    items: [
      {
        label: 'All Enquiries',
        email: 'info@oncobrain.ai',
      },
    ],
  },

  offices: {
    headline: 'Our Offices',
    locations: [
      {
        city: 'Tampa, FL',
        description: 'Moffitt Cancer Center Partnership',
      },
    ],
  },
}
