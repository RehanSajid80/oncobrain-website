import {
  HeroSection,
  ProblemSection,
  StatsSection,
  HowItWorksSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  TrustBadges,
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
        quote={homepage.problem.quote}
      />

      {/* Statistics */}
      <StatsSection
        stats={homepage.stats}
        headline="The Guideline Gap in Cancer Care"
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
