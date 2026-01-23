'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  organization: string
  image?: string
}

interface TestimonialsSectionProps {
  headline: string
  items: Testimonial[]
}

export function TestimonialsSection({ headline, items }: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            {headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-teal-100">
                <Quote className="w-10 h-10" />
              </div>

              {/* Quote */}
              <p className="text-text-primary mb-6 relative z-10 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-navy-800">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-text-muted">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
