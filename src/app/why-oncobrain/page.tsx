'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Database, Cloud, Users } from 'lucide-react'
import { whyOncobrain } from '@/content/why-oncobrain'

export default function WhyOncobrainPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800">
                {whyOncobrain.hero.headline}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Proprietary Clinical Moat */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
                {whyOncobrain.clinicalMoat.headline}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-text-secondary mb-8">
              {whyOncobrain.clinicalMoat.description}
            </p>

            <ul className="space-y-4 mb-8">
              {whyOncobrain.clinicalMoat.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 text-lg text-text-secondary"
                >
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl font-semibold text-navy-800 border-l-4 border-teal-500 pl-6 py-2"
            >
              {whyOncobrain.clinicalMoat.conclusion}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Enterprise-Ready by Design */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
                {whyOncobrain.enterpriseReady.headline}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-text-secondary mb-8">
              {whyOncobrain.enterpriseReady.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {whyOncobrain.enterpriseReady.points.map((point, index) => {
                const icons = [Cloud, Shield, Users]
                const Icon = icons[index] || CheckCircle
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  >
                    <Icon className="w-8 h-8 text-teal-500 mb-4" />
                    <p className="text-lg font-medium text-navy-800">{point}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-semibold text-navy-800 text-center"
            >
              {whyOncobrain.enterpriseReady.conclusion}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
