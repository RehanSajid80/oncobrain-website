'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface ProblemSectionProps {
  headline: string
  description: string
  stats?: string[]
  whyItMatters?: string
  quote?: {
    text: string
    author: string
  }
}

export function ProblemSection({ headline, description, stats, whyItMatters, quote }: ProblemSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
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
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          {/* Stats as bullet points */}
          {stats && stats.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left max-w-2xl mx-auto mb-8 space-y-3"
            >
              {stats.map((stat, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-text-secondary">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>{stat}</span>
                </li>
              ))}
            </motion.ul>
          )}

          {/* Why it matters */}
          {whyItMatters && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto mb-8"
            >
              <p className="text-lg font-semibold text-navy-800 mb-2">Why it matters</p>
              <p className="text-lg text-text-secondary">{whyItMatters}</p>
            </motion.div>
          )}

          {/* Closing statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto"
          >
            The challenge is no longer access to information. It's translating that information into confident decisions at the point of care.
          </motion.p>

          {quote && (
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-4 left-0 text-teal-100">
                <Quote className="w-16 h-16" />
              </div>
              <blockquote className="relative z-10 bg-teal-50 rounded-2xl p-8 md:p-12">
                <p className="text-xl md:text-2xl font-medium text-navy-800 italic mb-4">
                  "{quote.text}"
                </p>
                <footer className="text-text-secondary">
                  - {quote.author}
                </footer>
              </blockquote>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
