// HubSpot Configuration - Easy to edit!
// Replace the placeholder values with your actual HubSpot portal ID and form IDs

export const hubspotConfig = {
  // Your HubSpot Portal ID - find this in HubSpot Settings > Account Setup > Account Info
  portalId: 'YOUR_PORTAL_ID',

  // Your HubSpot region (na1 for North America, eu1 for Europe)
  region: 'na1',
}

export const hubspotForms = {
  // Early Access / Demo Request Form (Homepage Hero)
  earlyAccess: {
    portalId: hubspotConfig.portalId,
    formId: 'YOUR_EARLY_ACCESS_FORM_ID',
    region: hubspotConfig.region,
  },

  // Contact Sales Form (Health Systems page)
  contactSales: {
    portalId: hubspotConfig.portalId,
    formId: 'YOUR_CONTACT_SALES_FORM_ID',
    region: hubspotConfig.region,
  },

  // General Contact Form (Contact page)
  contact: {
    portalId: hubspotConfig.portalId,
    formId: 'YOUR_CONTACT_FORM_ID',
    region: hubspotConfig.region,
  },

  // Demo Request Form (Multiple pages)
  demoRequest: {
    portalId: hubspotConfig.portalId,
    formId: 'YOUR_DEMO_REQUEST_FORM_ID',
    region: hubspotConfig.region,
  },

  // Newsletter Signup (Footer)
  newsletter: {
    portalId: hubspotConfig.portalId,
    formId: 'YOUR_NEWSLETTER_FORM_ID',
    region: hubspotConfig.region,
  },
}

/*
HOW TO GET YOUR FORM IDS:

1. Log into HubSpot
2. Go to Marketing > Lead Capture > Forms
3. Create a new form or select an existing one
4. Click "Publish" or "Share"
5. Copy the form ID from the embed code

The form ID looks like: "abc123de-4567-89fg-hijk-lmnopqrstuv0"

EXAMPLE EMBED CODE FROM HUBSPOT:
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "12345678",        <-- This is your portal ID
    formId: "abc123de-..."       <-- This is your form ID
  });
</script>
*/
