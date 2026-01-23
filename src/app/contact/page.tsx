'use client'

import { motion } from 'framer-motion'
import { Play, Building2, Mail, MapPin, Clock, Phone } from 'lucide-react'
import { Card } from '@/components/ui'
import { HubSpotEmbed } from '@/components/forms/HubSpotEmbed'
import { hubspotForms } from '@/content/hubspot'
import { contact } from '@/content/pages'

const icons = {
  play: Play,
  building: Building2,
  mail: Mail,
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
                {contact.hero.headline}
              </h1>
              <p className="text-xl text-text-secondary">
                {contact.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contact.options.map((option, index) => {
              const Icon = icons[option.icon as keyof typeof icons] || Mail
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover className="h-full text-center">
                    <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-7 h-7 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-text-secondary mb-6">
                      {option.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-navy-800 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Email</h3>
                    <a href={`mailto:${contact.info.email}`} className="text-teal-600 hover:text-teal-700">
                      {contact.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Location</h3>
                    <p className="text-text-secondary">{contact.info.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Hours</h3>
                    <p className="text-text-secondary">{contact.info.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-teal-50 rounded-2xl">
                <h3 className="font-semibold text-navy-800 mb-2">
                  Prefer to talk?
                </h3>
                <p className="text-text-secondary mb-4">
                  Schedule a call with our team to discuss your needs.
                </p>
                <a
                  href="#schedule"
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-navy-800 mb-2">
                  Send us a message
                </h3>
                <p className="text-text-secondary mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <HubSpotEmbed {...hubspotForms.contact} />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does implementation take?',
                a: 'Most practices are up and running within 1-2 weeks. Health systems with EMR integration typically take 4-6 weeks.',
              },
              {
                q: 'Is my patient data secure?',
                a: 'Yes. OncoBrain is HIPAA compliant and SOC 2 Type II certified. We never store or train on patient data.',
              },
              {
                q: 'What guidelines does OncoBrain support?',
                a: 'We integrate NCCN, ASCO, ESMO, and subspecialty guidelines, updated within days of publication.',
              },
              {
                q: 'Can I try OncoBrain before committing?',
                a: 'Yes! We offer a free pilot program for qualified practices. Request access to get started.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="font-semibold text-navy-800 mb-2">{faq.q}</h3>
                  <p className="text-text-secondary">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
