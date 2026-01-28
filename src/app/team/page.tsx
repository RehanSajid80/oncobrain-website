'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui'
import { teamPage } from '@/content/team'

// Team member card component
function TeamMemberCard({
  member,
  index
}: {
  member: {
    name: string
    role: string
    organization: string
    secondaryRole?: string
    image: string
  }
  index: number
}) {
  // Generate initials for placeholder
  const initials = member.name
    .split(' ')
    .filter(n => !n.includes(',') && !n.includes('PhD') && !n.includes('MD') && !n.includes('MBA') && !n.includes('RN') && !n.includes('MSc'))
    .slice(0, 2)
    .map(n => n[0])
    .join('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover className="h-full text-center p-6">
        {/* Photo or Placeholder */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
          {/* Placeholder with initials - replace with actual images */}
          <span className="text-white text-3xl font-bold">{initials}</span>
          {/* Uncomment when images are added:
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          */}
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-navy-800 mb-1">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-teal-600 font-medium text-sm mb-1">
          {member.role}
        </p>

        {/* Organization */}
        <p className="text-text-secondary text-sm">
          {member.organization}
        </p>

        {/* Secondary Role (for board members) */}
        {member.secondaryRole && (
          <p className="text-text-muted text-xs mt-2 italic">
            {member.secondaryRole}
          </p>
        )}
      </Card>
    </motion.div>
  )
}

// Affiliation logo component
function AffiliationLogo({
  logo,
  index
}: {
  logo: { name: string; logo?: string }
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all h-24"
    >
      {logo.logo ? (
        <img
          src={logo.logo}
          alt={logo.name}
          className="max-h-14 max-w-full object-contain"
        />
      ) : (
        <span className="text-sm font-semibold text-gray-700 text-center leading-tight">
          {logo.name}
        </span>
      )}
    </motion.div>
  )
}

export default function TeamPage() {
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
                {teamPage.hero.headline}
              </h1>
              <p className="text-xl text-text-secondary">
                {teamPage.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              {teamPage.leadership.headline}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamPage.leadership.members.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Product & Engineering Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              {teamPage.productTeam.headline}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {teamPage.productTeam.members.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Board & Advisors Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              {teamPage.boardAdvisors.headline}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {teamPage.boardAdvisors.members.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              {teamPage.affiliations.headline}
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {teamPage.affiliations.logos.map((logo, index) => (
              <AffiliationLogo key={logo.name} logo={logo} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
