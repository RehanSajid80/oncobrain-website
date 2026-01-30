import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/content/site'

const barlow = Barlow({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-barlow' })

const siteUrl = 'https://oncobrain.ai'

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  // SEO Keywords
  keywords: [
    'oncology AI',
    'clinical decision support',
    'cancer care',
    'guideline concordant care',
    'NCCN guidelines',
    'ASCO guidelines',
    'oncology clinical reasoning',
    'cancer treatment recommendations',
    'AI healthcare',
    'medical AI',
    'oncology decision support',
    'cancer care AI',
    'clinical AI',
    'healthcare technology',
    'precision oncology',
  ],

  // Authors & Creator
  authors: [{ name: 'OncoBrain', url: siteUrl }],
  creator: 'OncoBrain',
  publisher: 'OncoBrain',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/oncobrain-website/logos/oncobrain-logo.png',
        width: 1200,
        height: 630,
        alt: 'OncoBrain - Clinical Intelligence for Oncology',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/oncobrain-website/logos/oncobrain-logo.png'],
    creator: '@oncobrain',
  },

  // Icons & Favicon
  icons: {
    icon: [
      { url: '/oncobrain-website/icons/oncobrain-icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/oncobrain-website/logos/oncobrain-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Additional Meta
  category: 'Healthcare Technology',
  classification: 'Medical AI, Clinical Decision Support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T3B9XK2L');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3B9XK2L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
