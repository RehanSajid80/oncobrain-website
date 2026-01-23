'use client'

import { motion } from 'framer-motion'
import { Plug, Shield, BarChart3, Headset, ArrowRight } from 'lucide-react'
import { Button, Badge, Card } from '@/components/ui'
import { HubSpotEmbed } from '@/components/forms/HubSpotEmbed'
import { hubspotForms } from '@/content/hubspot'
import { forHealthSystems } from '@/content/pages'

const icons = {
  plug: Plug,
  shield: Shield,
  chart: BarChart3,
  headset: Headset,
}

export default function ForHealthSystemsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="teal" className="mb-6">
                {forHealthSystems.hero.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
                {forHealthSystems.hero.headline}
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                {forHealthSystems.hero.subheadline}
              </p>
              <Button variant="primary" size="lg" href="#contact-sales">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {forHealthSystems.challenges.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forHealthSystems.challenges.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="text-4xl font-bold text-gradient-teal mb-3">
                    {item.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {forHealthSystems.capabilities.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {forHealthSystems.capabilities.items.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons] || Plug
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover className="h-full">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-teal-500" />
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

      {/* Integration Logos */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container-wide">
          <p className="text-center text-sm font-medium text-text-muted uppercase tracking-wider mb-8">
            Integrates With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {['Epic', 'Cerner', 'MEDITECH', 'Allscripts'].map((name) => (
              <div key={name} className="bg-gray-100 rounded-lg px-6 py-3 text-text-muted font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-sales" className="py-16 md:py-24 bg-gradient-dark text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {forHealthSystems.cta.headline}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {forHealthSystems.cta.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <Shield className="w-8 h-8 text-teal-400" />
                  <div>
                    <div className="font-semibold">HIPAA Compliant</div>
                    <div className="text-sm text-gray-400">SOC 2 Type II certified</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <Headset className="w-8 h-8 text-teal-400" />
                  <div>
                    <div className="font-semibold">Dedicated Support</div>
                    <div className="text-sm text-gray-400">Implementation & training included</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-navy-800 mb-2">
                Contact Our Sales Team
              </h3>
              <p className="text-text-secondary mb-6">
                Tell us about your health system and we'll prepare a customized proposal.
              </p>
              <HubSpotEmbed {...hubspotForms.contactSales} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
