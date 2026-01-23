'use client'

import { motion } from 'framer-motion'
import { Clock, BookOpen, Users, Puzzle, Check, ArrowRight } from 'lucide-react'
import { Button, Badge, Card } from '@/components/ui'
import { HubSpotEmbed } from '@/components/forms/HubSpotEmbed'
import { hubspotForms } from '@/content/hubspot'
import { forOncologists } from '@/content/pages'

const icons = {
  clock: Clock,
  book: BookOpen,
  users: Users,
  puzzle: Puzzle,
}

export default function ForOncologistsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="teal" className="mb-6">
                {forOncologists.hero.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
                {forOncologists.hero.headline}
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                {forOncologists.hero.subheadline}
              </p>
              <Button variant="primary" size="lg" href="#request-access">
                Request Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
                <div className="aspect-video bg-navy-800 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-white text-center">
                    <p className="text-sm opacity-80">Product Demo</p>
                  </div>
                </div>
                <p className="text-sm text-text-muted text-center">
                  See how OncoBrain works in a real clinical scenario
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {forOncologists.painPoints.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {forOncologists.painPoints.items.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons] || Clock
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-l-4 border-l-amber-400">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {forOncologists.benefits.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {forOncologists.benefits.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="request-access" className="py-16 md:py-24 bg-gradient-dark text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {forOncologists.cta.headline}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {forOncologists.cta.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-400" />
                  <span>Free pilot program for qualified practices</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-400" />
                  <span>No credit card required</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-400" />
                  <span>Dedicated onboarding support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-navy-800 mb-2">
                Request Early Access
              </h3>
              <p className="text-text-secondary mb-6">
                Fill out the form and we'll be in touch within 24 hours.
              </p>
              <HubSpotEmbed {...hubspotForms.demoRequest} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
