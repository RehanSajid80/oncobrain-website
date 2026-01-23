'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  Eye,
  Users,
  Shield,
  Plug,
  Target,
  LucideIcon,
} from 'lucide-react'
import { Card } from '@/components/ui'

const icons: Record<string, LucideIcon> = {
  book: BookOpen,
  eye: Eye,
  users: Users,
  shield: Shield,
  plug: Plug,
  target: Target,
}

interface Feature {
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  headline: string
  subheadline?: string
  items: Feature[]
}

export function FeaturesSection({ headline, subheadline, items }: FeaturesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((feature, index) => {
            const Icon = icons[feature.icon] || Target
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
