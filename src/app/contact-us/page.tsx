'use client'

import { motion } from 'framer-motion'
import { Mail, Calendar, Send } from 'lucide-react'
import { contactPage } from '@/content/contact'
import { HubSpotEmbed } from '@/components/forms/HubSpotEmbed'
import { hubspotForms } from '@/content/hubspot'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#081923] via-[#0a2540] to-[#081923] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {contactPage.hero.headline}
              </h1>
              <p className="text-xl text-gray-300">
                {contactPage.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Send className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-800">
                    {contactPage.form.headline}
                  </h2>
                </div>
                <p className="text-text-secondary mb-8">
                  {contactPage.form.description}
                </p>

                {/* HubSpot Form Embed */}
                <HubSpotEmbed
                  portalId={hubspotForms.contact.portalId}
                  formId={hubspotForms.contact.formId}
                  region={hubspotForms.contact.region}
                  className="hubspot-contact-form"
                />
              </div>
            </motion.div>

            {/* Sidebar - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Schedule a Meeting Card */}
              <div className="bg-gradient-to-br from-[#081923] to-[#0a2540] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {contactPage.meeting.headline}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {contactPage.meeting.description}
                </p>
                <a
                  href={contactPage.meeting.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center py-3 px-6 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  {contactPage.meeting.ctaText}
                </a>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800">
                    {contactPage.info.headline}
                  </h3>
                </div>

                <div className="space-y-4">
                  {contactPage.info.items.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <p className="text-sm text-text-muted mb-1">{item.label}</p>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                      >
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HubSpot Form Styling */}
      <style jsx global>{`
        .hubspot-contact-form .hs-form {
          font-family: inherit;
        }
        .hubspot-contact-form .hs-form-field {
          margin-bottom: 1.25rem;
        }
        .hubspot-contact-form .hs-form-field label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #081923;
          margin-bottom: 0.5rem;
        }
        .hubspot-contact-form .hs-form-field .input {
          width: 100%;
        }
        .hubspot-contact-form .hs-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .hubspot-contact-form .hs-input:focus {
          outline: none;
          border-color: #14b8a6;
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
        }
        .hubspot-contact-form select.hs-input {
          background-color: white;
        }
        .hubspot-contact-form textarea.hs-input {
          min-height: 120px;
          resize: vertical;
        }
        .hubspot-contact-form .hs-button {
          width: 100%;
          padding: 1rem 1.5rem;
          background: linear-gradient(to right, #14b8a6, #0d9488);
          color: white;
          font-weight: 600;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .hubspot-contact-form .hs-button:hover {
          background: linear-gradient(to right, #0d9488, #0f766e);
        }
        .hubspot-contact-form .hs-error-msgs {
          margin-top: 0.25rem;
          font-size: 0.75rem;
          color: #ef4444;
        }
        .hubspot-contact-form .submitted-message {
          text-align: center;
          padding: 2rem;
          color: #059669;
          font-weight: 500;
        }
        .hubspot-contact-form .hs-form-required {
          color: #ef4444;
          margin-left: 0.25rem;
        }
        .hubspot-contact-form .legal-consent-container {
          margin-top: 1rem;
          font-size: 0.75rem;
          color: #6b7280;
        }
        .hubspot-contact-form .legal-consent-container .hs-form-booleancheckbox-display {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .hubspot-contact-form .legal-consent-container input[type="checkbox"] {
          margin-top: 0.25rem;
        }
      `}</style>
    </>
  )
}
