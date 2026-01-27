'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui'

interface ValidationStat {
  value: string
  label: string
}

interface ValidationSectionProps {
  headline: string
  description: string
  stats: ValidationStat[]
  ctaText: string
}

export function ValidationSection({ headline, description, stats, ctaText }: ValidationSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto">
            {description}
          </p>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <p className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-medium text-navy-800">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="primary" size="lg" href="/clinical-validation">
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
