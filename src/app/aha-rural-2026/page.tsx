'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  Unlock,
  Infinity,
  Headphones,
  ArrowRight,
  MapPin,
  Calendar,
  ExternalLink
} from 'lucide-react'
import { ahaRuralConference2026 } from '@/content/events'
import { HubSpotEmbed } from '@/components/forms'

const iconMap: Record<string, React.ElementType> = {
  unlock: Unlock,
  infinity: Infinity,
  checkCircle: CheckCircle,
  headset: Headphones,
}

export default function AHARuralConferencePage() {
  const content = ahaRuralConference2026

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081923] via-[#062F6E] to-[#0055FF] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#BBE4FF] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Event Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{content.event.dates}</span>
                <span className="text-white/50">•</span>
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{content.event.location}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {content.hero.headline}
              </h1>

              <p className="text-xl md:text-2xl text-[#BBE4FF] font-medium mb-4">
                {content.hero.subheadline}
              </p>

              <p className="text-lg text-white/80 mb-8 max-w-xl">
                {content.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 bg-white text-[#0055FF] px-6 py-3 rounded-lg font-semibold hover:bg-[#BBE4FF] transition-colors"
                >
                  {content.hero.ctaText}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={content.event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Conference Details
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right: Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {content.whyOncoBrain.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#081923] mb-4">
              {content.offer.headline}
            </h2>
            <p className="text-xl text-[#0055FF] font-semibold">
              {content.offer.subheadline}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.offer.items.map((item, index) => {
              const Icon = iconMap[item.icon] || CheckCircle
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#0055FF]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0055FF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#081923] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why OncoBrain Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#081923] mb-4">
                {content.whyOncoBrain.headline}
              </h2>
              <p className="text-xl text-[#0055FF] font-medium mb-4">
                {content.whyOncoBrain.subheadline}
              </p>
              <p className="text-gray-600 mb-8">
                {content.whyOncoBrain.description}
              </p>

              <ul className="space-y-4">
                {content.whyOncoBrain.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0055FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#081923] mb-6">
                {content.howItWorks.headline}
              </h3>
              <div className="space-y-6">
                {content.howItWorks.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0055FF] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#081923] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-12 bg-[#081923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                {content.validation.headline}
              </h3>
              <p className="text-[#BBE4FF]">
                {content.validation.tagline}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {content.validation.items.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#081923] mb-4">
              {content.form.headline}
            </h2>
            <p className="text-xl text-gray-600">
              {content.form.subheadline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
          >
            {/* HubSpot Form Embed - Replace with actual form ID */}
            <HubSpotEmbed
              portalId="YOUR_PORTAL_ID"
              formId="YOUR_AHA_EVENT_FORM_ID"
              region="na1"
            />

            <p className="text-xs text-gray-500 mt-6 text-center">
              {content.form.disclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-[#081923] mb-2">
            {content.cta.headline}
          </h3>
          <p className="text-gray-600">
            {content.cta.description}{' '}
            <a
              href={`mailto:${content.cta.email}`}
              className="text-[#0055FF] hover:underline font-medium"
            >
              {content.cta.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
