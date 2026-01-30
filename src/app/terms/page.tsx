'use client'

import { motion } from 'framer-motion'

export default function TermsOfUsePage() {
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
                Terms of Use
              </h1>
              <p className="text-xl text-gray-300">
                Last Updated: January 09, 2026
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
              <h2 className="text-2xl font-bold text-navy-800 mt-8 mb-6">Agreement to Terms</h2>

              <p className="text-text-secondary mb-6">
                OncoBrain, Inc is registered in Florida at 5450 N River Shore Dr, Tampa, FL 33603. We operate www.oncobrain.ai and related services.
              </p>

              <p className="text-text-secondary mb-8">
                By accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. Users under 18 cannot access the platform.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Services Restrictions</h2>

              <p className="text-text-secondary mb-6">
                Our services are not intended to be compliant with HIPAA, FISMA, or GLBA regulations. Users should not submit protected health information or other regulated data through our platform.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Intellectual Property</h2>

              <p className="text-text-secondary mb-6">
                The Company owns all content and grants users a limited non-commercial use license. All trademarks, logos, and content on the platform are the property of OncoBrain, Inc or its licensors.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">User Representations</h2>

              <p className="text-text-secondary mb-6">
                By using our Services, you represent and warrant that:
              </p>

              <ul className="space-y-3 text-text-secondary mb-8">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update it as necessary</li>
                <li>You have the legal capacity and agree to comply with these Terms of Use</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Payments</h2>

              <p className="text-text-secondary mb-6">
                We accept major credit cards and PayPal for payment. Subscriptions may auto-renew unless cancelled prior to the renewal date.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Prohibited Activities</h2>

              <p className="text-text-secondary mb-4">
                You may not access or use the Services for any purpose other than that for which we make the Services available. Prohibited activities include:
              </p>

              <ul className="space-y-3 text-text-secondary mb-8">
                <li>Data scraping or systematic retrieval of content</li>
                <li>Fraud or misrepresentation</li>
                <li>Circumventing security measures</li>
                <li>Harassment or abuse of other users</li>
                <li>Commercial misuse without authorization</li>
                <li>Interfering with the proper working of the Services</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">User Generated Contributions</h2>

              <p className="text-text-secondary mb-6">
                By submitting content to our platform, you grant OncoBrain an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free license to use, reproduce, modify, and distribute your contributions.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Dispute Resolution</h2>

              <p className="text-text-secondary mb-6">
                Any disputes arising from these Terms or your use of the Services shall be resolved through binding arbitration. These Terms shall be governed by and construed in accordance with the laws of the State of Florida.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Limitation of Liability</h2>

              <p className="text-text-secondary mb-6">
                The Company disclaims all warranties and limits liability to the amounts paid by you in the prior 6 months. In no event shall OncoBrain be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Termination</h2>

              <p className="text-text-secondary mb-6">
                We reserve the right to deny access to the Services to any user without notice or reason. We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.
              </p>

              <h2 className="text-2xl font-bold text-navy-800 mt-12 mb-6">Contact Us</h2>

              <p className="text-text-secondary">
                For questions about these Terms of Use, please contact us at{' '}
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
