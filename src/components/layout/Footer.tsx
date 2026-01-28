import Link from 'next/link'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { siteConfig } from '@/content/site'
import { HubSpotEmbed } from '@/components/forms/HubSpotEmbed'
import { hubspotForms } from '@/content/hubspot'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/logos/oncobrain-logo.png"
                alt="OncoBrain"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-sm">
              Clinical intelligence that thinks like an oncologist. Guideline-concordant decision support for cancer care.
            </p>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm font-medium text-white mb-3">
                Stay updated
              </p>
              <HubSpotEmbed
                {...hubspotForms.newsletter}
                className="max-w-sm"
              />
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {siteConfig.footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} OncoBrain. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              An{' '}
              <a
                href="https://acceleronc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300"
              >
                AccelerOnc Studio
              </a>{' '}
              Product
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
