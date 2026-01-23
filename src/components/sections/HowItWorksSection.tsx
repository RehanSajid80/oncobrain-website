'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Brain, CheckCircle, LucideIcon } from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  brain: Brain,
  checkCircle: CheckCircle,
}

interface Step {
  number: string
  title: string
  description: string
  icon: string
}

interface HowItWorksSectionProps {
  headline: string
  subheadline?: string
  steps: Step[]
}

export function HowItWorksSection({ headline, subheadline, steps }: HowItWorksSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {subheadline}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = icons[step.icon] || CheckCircle
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-200 to-teal-100" />
                )}

                <div className="relative bg-white rounded-2xl p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-teal text-white text-sm font-bold px-4 py-1 rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-teal-50 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-teal-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-navy-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
