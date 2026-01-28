'use client'

import { motion } from 'framer-motion'
import { Zap, Users, BookOpen, AlertTriangle, Clock, Layers } from 'lucide-react'

interface GapItem {
  problem: string
  issue: string
}

interface GapSectionProps {
  headline: string
  description: string
  items: GapItem[]
  positioning: string
}

export function GapSection({ headline, description, items, positioning }: GapSectionProps) {
  const icons = [Zap, Users, BookOpen]
  const issueIcons = [AlertTriangle, Clock, Layers]
  const colors = [
    { bg: 'bg-red-500/10', border: 'border-red-500/20', icon: 'text-red-400' },
    { bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: 'text-amber-400' },
    { bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: 'text-blue-400' },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#081923] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#081923] to-[#061218]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Gap Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {items.map((item, index) => {
            const Icon = icons[index]
            const IssueIcon = issueIcons[index]
            const color = colors[index]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative p-8 rounded-2xl border ${color.border} ${color.bg} backdrop-blur-sm`}
              >
                {/* Problem Icon */}
                <div className={`w-14 h-14 rounded-xl ${color.bg} border ${color.border} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${color.icon}`} />
                </div>

                {/* Problem Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.problem}
                </h3>

                {/* Issue */}
                <div className="flex items-start gap-3">
                  <IssueIcon className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 leading-relaxed">
                    {item.issue}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Positioning Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <span className="text-teal-400 text-sm font-medium">The OncoBrain Difference</span>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed">
              {positioning}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
