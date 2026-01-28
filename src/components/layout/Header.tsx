'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#081923]/95 backdrop-blur-md border-b border-white/10">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/oncobrain-website/logos/oncobrain-logo.png"
              alt="OncoBrain"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" size="sm" href="/contact">
              Request Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#081923] border-t border-white/10"
          >
            <div className="container-wide py-4 space-y-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button variant="primary" className="w-full" href="/contact">
                  Request Access
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
