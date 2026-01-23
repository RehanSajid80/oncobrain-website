import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/content/site'

const barlow = Barlow({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-barlow' })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['oncology', 'clinical decision support', 'cancer care', 'AI healthcare', 'guideline concordant care'],
  authors: [{ name: 'OncoBrain', url: 'https://oncobrain.ai' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oncobrain.ai',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <head>
        {/* HubSpot Tracking Code - Replace YOUR_PORTAL_ID with your actual HubSpot portal ID */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
