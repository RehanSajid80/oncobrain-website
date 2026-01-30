'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300">
                How we collect, use, and protect your information
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto prose prose-lg prose-navy">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-text-secondary text-lg mb-8">
                This policy governs The OncoBrain website and services, including forums, events, and communication channels that reference this policy. It outlines the information collected, usage practices, and your data rights.
              </p>

              <p className="text-text-secondary mb-8">
                By using OncoBrain, you consent to this Privacy Policy's terms. The company may update this policy periodically and recommends regular review.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Information We Collect</h2>

              <ul className="space-y-4 text-text-secondary">
                <li>
                  <strong className="text-navy-800">Information You Provide</strong> - Data submitted during registration, discussions, or direct communication
                </li>
                <li>
                  <strong className="text-navy-800">Third-Party Sources</strong> - Information from affiliated partners, professional networks, or public sources
                </li>
                <li>
                  <strong className="text-navy-800">Automated Technologies</strong> - Data gathered through cookies and analytics tools during platform browsing
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">How We Use Your Information</h2>

              <ul className="space-y-3 text-text-secondary">
                <li>Provide and improve services</li>
                <li>Facilitate discussions and AI model evaluations</li>
                <li>Ensure security and prevent fraud</li>
                <li>Communicate updates and relevant information</li>
                <li>Conduct research and enhance AI-driven healthcare initiatives</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Sharing of Information</h2>

              <ul className="space-y-4 text-text-secondary">
                <li>
                  <strong className="text-navy-800">Service Providers</strong> - Supporting platform functionality and security
                </li>
                <li>
                  <strong className="text-navy-800">Community Members</strong> - During public discussions and model evaluations
                </li>
                <li>
                  <strong className="text-navy-800">Legal Authorities</strong> - When legally required or to prevent fraud and security risks
                </li>
                <li>
                  <strong className="text-navy-800">Research and AI Development Partners</strong> - Advancing AI-driven healthcare insights
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Your Rights and Choices</h2>

              <ul className="space-y-3 text-text-secondary">
                <li>Access, update, or delete personal information</li>
                <li>Manage communication preferences</li>
                <li>Opt out of data sharing where applicable</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Contact Us</h2>

              <p className="text-text-secondary">
                For inquiries about this Privacy Policy or your data, please contact us at{' '}
                <a href="mailto:info@oncobrain.ai" className="text-teal-600 hover:text-teal-700">
                  info@oncobrain.ai
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
