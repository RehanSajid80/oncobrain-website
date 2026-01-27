'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface WhatItDoesSectionProps {
  headline: string
  description: string
  points: string[]
  result: string
}

export function WhatItDoesSection({ headline, description, points, result }: WhatItDoesSectionProps) {
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
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-3xl mx-auto">
            {description}
          </p>

          {/* Points as bullet list */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left max-w-2xl mx-auto mb-10 space-y-4"
          >
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-4 text-lg text-text-secondary">
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>

          {/* Result statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-semibold text-navy-800 max-w-3xl mx-auto"
          >
            {result}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
