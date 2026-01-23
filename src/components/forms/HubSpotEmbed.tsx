'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface HubSpotEmbedProps {
  portalId: string
  formId: string
  region?: string
  className?: string
  onFormSubmit?: () => void
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string
          portalId: string
          formId: string
          target: string
          onFormSubmit?: () => void
        }) => void
      }
    }
  }
}

export function HubSpotEmbed({
  portalId,
  formId,
  region = 'na1',
  className,
  onFormSubmit,
}: HubSpotEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const formCreated = useRef(false)

  useEffect(() => {
    // Don't create form if IDs are placeholders
    if (portalId === 'YOUR_PORTAL_ID' || formId.includes('YOUR_')) {
      return
    }

    const loadForm = () => {
      if (window.hbspt && containerRef.current && !formCreated.current) {
        formCreated.current = true
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#hubspot-form-${formId}`,
          onFormSubmit,
        })
      }
    }

    // Check if HubSpot script is already loaded
    if (window.hbspt) {
      loadForm()
    } else {
      // Load HubSpot forms script
      const script = document.createElement('script')
      script.src = '//js.hsforms.net/forms/embed/v2.js'
      script.charset = 'utf-8'
      script.type = 'text/javascript'
      script.onload = loadForm
      document.head.appendChild(script)
    }

    return () => {
      formCreated.current = false
    }
  }, [portalId, formId, region, onFormSubmit])

  // Show placeholder if using placeholder IDs
  if (portalId === 'YOUR_PORTAL_ID' || formId.includes('YOUR_')) {
    return (
      <div className={cn('p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200', className)}>
        <p className="text-sm text-text-secondary text-center">
          HubSpot form will appear here.
          <br />
          <span className="text-xs text-text-muted">
            Configure your form IDs in <code className="bg-gray-100 px-1 rounded">src/content/hubspot.ts</code>
          </span>
        </p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      id={`hubspot-form-${formId}`}
      className={cn('hubspot-form-container', className)}
    />
  )
}
