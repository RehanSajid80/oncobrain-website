'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Flag, Heart, Zap, Users, Shield, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui'
import { about } from '@/content/pages'

// Map value titles to icons
const valueIcons: Record<string, typeof Heart> = {
  'Clinical Integrity': Shield,
  'Expertise Over Ego': Users,
  'Speed with Intention': Zap,
  'Precision for All': Target,
  'Trust Through Transparency': Eye,
  'Customer First, Always': Heart,
}

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
            </motion.div>
          </div>
        </div>
      </section>

      {/* About OncoBrain - Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg max-w-none">
              {about.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20 bg-teal-500 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Eye className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {about.vision.headline}
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                {about.vision.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-navy-800 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Target className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {about.mission.headline}
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                {about.mission.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Flag className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {about.goal.headline}
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                {about.goal.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
                {about.values.headline}
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.values.items.map((value, index) => {
              const Icon = valueIcons[value.title] || Sparkles
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-teal-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-800 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-text-secondary">
                          {value.description}
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

      {/* Meet Our Team CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#081923] to-[#0a2540] text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-16 h-16 mx-auto mb-6 text-teal-400" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                OncoBrain is built by a team of oncologists, AI researchers, and healthcare leaders committed to transforming cancer care.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-colors"
              >
                View Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
