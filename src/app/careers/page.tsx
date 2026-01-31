'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Heart, Zap, Users, Globe, Briefcase, GraduationCap } from 'lucide-react'
import { Button, Badge, Card } from '@/components/ui'
import Link from 'next/link'

const values = [
  {
    icon: Heart,
    title: 'Patient-First Mission',
    description: 'Everything we build is designed to improve cancer care outcomes for patients worldwide.',
  },
  {
    icon: Zap,
    title: 'Move Fast, Stay Safe',
    description: 'We innovate rapidly while maintaining the highest standards of clinical accuracy and safety.',
  },
  {
    icon: Users,
    title: 'Collaborative Excellence',
    description: 'We bring together clinicians, engineers, and researchers to solve complex problems together.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Our work has the potential to democratize access to expert oncology guidance worldwide.',
  },
]

const benefits = [
  'Competitive salary and equity',
  'Comprehensive health, dental, and vision',
  'Flexible remote work options',
  'Professional development budget',
  'Unlimited PTO policy',
  'Home office stipend',
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#081923] via-[#0a2540] to-[#081923] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="teal" className="mb-6">
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Build the Future of Cancer Care
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join a team of clinicians, engineers, and researchers working to transform oncology through AI-powered clinical reasoning.
              </p>
              <Button variant="primary" size="lg" href="#open-positions">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-text-secondary">
                OncoBrain is building the world's first oncology-specific clinical reasoning engine. We're on a mission to ensure every cancer patient receives guideline-concordant care, regardless of where they're treated. Join us in democratizing access to expert oncology guidance.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-teal-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {value.description}
                    </p>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
                Why Join OncoBrain?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                We offer competitive compensation and benefits designed to support you in doing your best work while maintaining a healthy work-life balance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0" />
                    <span className="text-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800">Growth & Learning</h3>
                  <p className="text-text-secondary">Continuous development opportunities</p>
                </div>
              </div>
              <p className="text-text-secondary">
                Work alongside world-class clinicians and engineers. Access to conferences, courses, and mentorship programs. Shape the future of healthcare AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-text-secondary">
                We're always looking for exceptional talent to join our mission.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy-800 mb-2">
                No Open Positions Currently
              </h3>
              <p className="text-text-secondary mb-6">
                We don't have any open positions at the moment, but we're always interested in hearing from talented individuals who are passionate about improving cancer care.
              </p>
              <p className="text-text-secondary">
                Send your resume to{' '}
                <a href="mailto:info@oncobrain.ai" className="text-teal-600 hover:text-teal-700 font-medium">
                  info@oncobrain.ai
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-dark text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Interested in Learning More?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Even if we don't have an open position that fits your skills, we'd love to hear from you. Reach out and tell us how you'd like to contribute to our mission.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
