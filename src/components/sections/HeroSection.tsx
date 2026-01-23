'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button, Badge } from '@/components/ui'
import { ProductDemo } from './ProductDemo'

interface HeroSectionProps {
  badge?: string
  headline: string
  subheadline: string
  ctaText: string
  ctaSecondaryText?: string
}

export function HeroSection({
  badge,
  headline,
  subheadline,
  ctaText,
  ctaSecondaryText,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BBE4FF] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <Badge variant="teal" className="mb-6">
                {badge}
              </Badge>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight mb-6">
              {headline.split(' ').map((word, i) => (
                <span key={i}>
                  {word === 'Oncologist' ? (
                    <span className="text-gradient-teal">{word}</span>
                  ) : (
                    word
                  )}{' '}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/contact">
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {ctaSecondaryText && (
                <Button variant="outline" size="lg" href="#demo">
                  <Play className="mr-2 h-5 w-5" />
                  {ctaSecondaryText}
                </Button>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex items-center gap-8 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>99.8% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Moffitt Validated</span>
              </div>
            </div>
          </motion.div>

          {/* Product Demo */}
          <div>
            <ProductDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
