'use client'

import { motion } from 'framer-motion'
import { Check, FileText, Users, RefreshCw, Eye, Link, BarChart3, AlertTriangle } from 'lucide-react'
import { Badge, Card } from '@/components/ui'
import { clinicalValidation } from '@/content/pages'

export default function ClinicalValidationPage() {
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
                {clinicalValidation.hero.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
                {clinicalValidation.hero.headline}
              </h1>
              <p className="text-lg text-text-secondary">
                {clinicalValidation.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {clinicalValidation.methodology.headline}
            </h2>
            <p className="text-lg text-text-secondary">
              {clinicalValidation.methodology.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalValidation.methodology.steps.map((step, index) => {
              const icons = [FileText, Users, Check, RefreshCw]
              const Icon = icons[index]
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
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 md:py-24 bg-navy-800 text-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {clinicalValidation.metrics.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicalValidation.metrics.items.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient-teal mb-3">
                  {metric.value}
                </div>
                <div className="text-lg font-medium text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
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
                {clinicalValidation.transparency.headline}
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                {clinicalValidation.transparency.description}
              </p>
              <ul className="space-y-4">
                {clinicalValidation.transparency.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-teal-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <Eye className="w-5 h-5 text-teal-500" />
                    <span className="font-medium text-navy-800">Reasoning Chain</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-text-secondary">
                    <p className="mb-2">1. Patient has Stage IIIA NSCLC with EGFR mutation</p>
                    <p className="mb-2">2. NCCN Guidelines recommend targeted therapy for EGFR+</p>
                    <p className="mb-2">3. Osimertinib is preferred first-line per FLAURA trial</p>
                    <p>4. No contraindications identified in patient history</p>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Link className="w-5 h-5 text-teal-500" />
                    <span className="text-sm text-teal-600 font-medium">View source citations</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Guideline Sources
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              OncoBrain integrates the latest updates from leading oncology guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'NCCN', description: 'National Comprehensive Cancer Network' },
              { name: 'ASCO', description: 'American Society of Clinical Oncology' },
              { name: 'ESMO', description: 'European Society for Medical Oncology' },
            ].map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center">
                  <div className="text-3xl font-bold text-gradient-teal mb-2">
                    {guideline.name}
                  </div>
                  <p className="text-text-secondary">
                    {guideline.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
