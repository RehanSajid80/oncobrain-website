'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { partners } from '@/content/site'

interface TrustBadgesProps {
  headline?: string
}

export function TrustBadges({ headline = 'Backed By' }: TrustBadgesProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
      <div className="container-wide">
        <p className="text-center text-sm font-medium text-text-muted uppercase tracking-wider mb-8">
          {headline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Placeholder for partner logos */}
              <div className="h-12 md:h-16 flex items-center justify-center px-4 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="bg-gray-200 rounded-lg px-6 py-3 text-text-muted text-sm font-medium">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
