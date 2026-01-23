'use client'

import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsSectionProps {
  stats: Stat[]
  headline?: string
  description?: string
}

export function StatsSection({ stats, headline, description }: StatsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-navy-800 text-white">
      <div className="container-wide">
        {(headline || description) && (
          <div className="text-center mb-12">
            {headline && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
            )}
            {description && (
              <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-teal mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-white mb-2">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
