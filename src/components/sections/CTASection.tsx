'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { HubSpotEmbed } from '@/components/forms/HubSpotEmbed'
import { hubspotForms } from '@/content/hubspot'

interface CTASectionProps {
  headline: string
  description: string
  ctaText: string
  features?: string[]
}

export function CTASection({ headline, description, features }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-dark text-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {headline}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {description}
            </p>

            {features && features.length > 0 && (
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-navy-800 mb-2">
                Get Started Today
              </h3>
              <p className="text-text-secondary mb-6">
                Fill out the form and our team will be in touch.
              </p>
              <HubSpotEmbed {...hubspotForms.demoRequest} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
