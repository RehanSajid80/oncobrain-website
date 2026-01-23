'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Users } from 'lucide-react'
import { Card } from '@/components/ui'
import { TrustBadges } from '@/components/sections'
import { about } from '@/content/pages'

export default function AboutPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
                {about.hero.headline}
              </h1>
              <p className="text-xl text-text-secondary">
                {about.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-teal-500 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {about.mission.headline}
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                {about.mission.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8 text-center">
              {about.story.headline}
            </h2>
            <div className="prose prose-lg max-w-none">
              {about.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-secondary mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Patient First',
                description: 'Every feature we build asks one question: does this improve patient outcomes?',
              },
              {
                icon: Users,
                title: 'Clinician Partnership',
                description: 'We build with oncologists, not for them. Clinical expertise guides every decision.',
              },
              {
                icon: Target,
                title: 'Radical Transparency',
                description: 'No black boxes. Every recommendation is traceable to its source evidence.',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover className="h-full text-center">
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {about.team.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {about.team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center">
                  <div className="w-24 h-24 bg-gradient-teal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {member.bio}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <TrustBadges headline={about.partners.headline} />
    </>
  )
}
