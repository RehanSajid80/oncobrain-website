'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, BookOpen, Users, AlertTriangle, Check, ArrowRight, Play } from 'lucide-react'
import { Button, Badge, VideoModal } from '@/components/ui'
import { forOncologists } from '@/content/pages'

const DEMO_VIDEO_URL = 'https://244017401.fs1.hubspotusercontent-na2.net/hubfs/244017401/Videos/OncoBrain%20-%2060%20Sec%20Demo.mp4'

// Challenge-Solution pairs
const challengeSolutions = [
  {
    challenge: 'Knowledge Overload',
    challengeShort: 'Guidelines update 241+ times/year',
    solution: 'Always Current',
    solutionShort: 'OncoBrain stays current so you can focus on care',
    challengeIcon: BookOpen,
    challengeColor: 'amber',
  },
  {
    challenge: 'Limited Specialist Access',
    challengeShort: '80% of patients treated outside academic centers',
    solution: 'Expert Reasoning On-Demand',
    solutionShort: 'Subspecialty-level thinking without the wait',
    challengeIcon: Users,
    challengeColor: 'amber',
  },
  {
    challenge: 'Cognitive Burden',
    challengeShort: 'High-burden tasks take time from patients',
    solution: 'Faster Decisions',
    solutionShort: 'NCCN/ASCO-aligned recommendations in seconds',
    challengeIcon: Clock,
    challengeColor: 'amber',
  },
  {
    challenge: 'Fear of Missing Updates',
    challengeShort: 'Critical changes can affect outcomes',
    solution: 'Confidence Without Doubt',
    solutionShort: 'Clinical assurance that strengthens every decision',
    challengeIcon: AlertTriangle,
    challengeColor: 'amber',
  },
]

export default function ForOncologistsPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      {/* Video Modal */}
      <VideoModal
        videoUrl={DEMO_VIDEO_URL}
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

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
              <Button variant="primary" size="lg" href="/contact-us">
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
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-full aspect-video bg-navy-800 rounded-xl flex items-center justify-center mb-4 group cursor-pointer hover:bg-navy-700 transition-colors relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white font-medium">Watch Demo</p>
                  </div>
                </button>
                <p className="text-sm text-text-muted text-center">
                  See how OncoBrain works in a real clinical scenario
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Challenge → Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Your Challenges, Solved
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                OncoBrain addresses the daily realities of oncology practice
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {challengeSolutions.map((item, index) => {
              const ChallengeIcon = item.challengeIcon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="grid md:grid-cols-2 gap-0 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Challenge Side */}
                    <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 bg-gradient-to-r from-amber-50 to-gray-50">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <ChallengeIcon className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-1">Challenge</p>
                          <h3 className="text-lg font-semibold text-navy-800 mb-1">
                            {item.challenge}
                          </h3>
                          <p className="text-text-secondary text-sm">
                            {item.challengeShort}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Solution Side */}
                    <div className="p-6 md:p-8 bg-gradient-to-r from-gray-50 to-teal-50 relative">
                      {/* Arrow connector for desktop */}
                      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                        <ArrowRight className="w-4 h-4 text-teal-500" />
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-teal-600 uppercase tracking-wider mb-1">Solution</p>
                          <h3 className="text-lg font-semibold text-navy-800 mb-1">
                            {item.solution}
                          </h3>
                          <p className="text-text-secondary text-sm">
                            {item.solutionShort}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-dark text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {forOncologists.cta.headline}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {forOncologists.cta.description}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Check className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-lg font-semibold">OncoBrain Direct access available for individuals and enterprises</span>
                </li>
                <li className="flex items-center gap-4">
                  <Check className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-lg font-semibold">No credit card required</span>
                </li>
                <li className="flex items-center gap-4">
                  <Check className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-lg font-semibold">Dedicated onboarding support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-navy-800 mb-2">
                Request Early Access
              </h3>
              <p className="text-text-secondary mb-6">
                Ready to see how OncoBrain can support your practice?
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
