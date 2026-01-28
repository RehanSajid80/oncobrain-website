import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  TrustBadges,
  WhatItDoesSection,
  ValidationSection,
} from '@/components/sections'
import { homepage } from '@/content/homepage'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        badge={homepage.hero.badge}
        headline={homepage.hero.headline}
        subheadline={homepage.hero.subheadline}
        description={homepage.hero.description}
        ctaText={homepage.hero.ctaText}
        ctaSecondaryText={homepage.hero.ctaSecondaryText}
      />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Problem Statement */}
      <ProblemSection
        headline={homepage.problem.headline}
        description={homepage.problem.description}
        stats={homepage.problem.stats}
        whyItMatters={homepage.problem.whyItMatters}
        quote={homepage.problem.quote}
      />

      {/* What OncoBrain Does */}
      <WhatItDoesSection
        headline={homepage.whatItDoes.headline}
        description={homepage.whatItDoes.description}
        points={homepage.whatItDoes.points}
        result={homepage.whatItDoes.result}
      />

      {/* Early Validation */}
      <ValidationSection
        headline={homepage.validation.headline}
        description={homepage.validation.description}
        stats={[
          { value: '5.0 / 5.0', label: 'Efficiency' },
          { value: '4.6 / 5.0', label: 'Accuracy' },
          { value: '4.8 / 5.0', label: 'Safety & Reliability' },
        ]}
        ctaText={homepage.validation.ctaText}
      />

      {/* How It Works */}
      <HowItWorksSection
        headline={homepage.howItWorks.headline}
        subheadline={homepage.howItWorks.subheadline}
        steps={homepage.howItWorks.steps}
      />

      {/* Features */}
      <FeaturesSection
        headline={homepage.features.headline}
        subheadline={homepage.features.subheadline}
        items={homepage.features.items}
      />

      {/* Testimonials */}
      <TestimonialsSection
        headline={homepage.testimonials.headline}
        items={homepage.testimonials.items}
      />

      {/* CTA Section */}
      <CTASection
        headline={homepage.cta.headline}
        description={homepage.cta.description}
        ctaText={homepage.cta.ctaText}
        features={homepage.cta.features}
      />
    </>
  )
}
