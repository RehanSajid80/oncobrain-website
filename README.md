# OncoBrain Website

Clinical intelligence website for OncoBrain - an oncology-specific decision support platform.

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the website folder:
```bash
cd OncoBrain/website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
website/
├── src/
│   ├── app/                    # Pages (Next.js App Router)
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Root layout
│   │   ├── for-oncologists/    # For Oncologists page
│   │   ├── for-health-systems/ # For Health Systems page
│   │   ├── clinical-validation/# Clinical Validation page
│   │   ├── about/              # About page
│   │   └── contact/            # Contact page
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── sections/           # Page section components
│   │   ├── forms/              # Form components (HubSpot)
│   │   └── layout/             # Header, Footer
│   ├── content/                # ⭐ EDIT CONTENT HERE
│   │   ├── site.ts             # Site config, navigation, footer
│   │   ├── homepage.ts         # Homepage content
│   │   ├── pages.ts            # Other pages content
│   │   └── hubspot.ts          # HubSpot form configuration
│   └── lib/                    # Utilities
├── public/                     # Static assets (images, logos)
├── tailwind.config.ts          # Design system colors/fonts
└── package.json                # Dependencies
```

## Editing Content

### Easy Content Updates

All website content is stored in TypeScript files in `src/content/`. You can edit these files directly:

| File | What it controls |
|------|------------------|
| `site.ts` | Site name, navigation links, footer links, social media |
| `homepage.ts` | Homepage hero, stats, features, testimonials, CTA |
| `pages.ts` | All other page content |
| `hubspot.ts` | HubSpot form IDs and configuration |

### Example: Changing Homepage Headline

Edit `src/content/homepage.ts`:
```typescript
export const homepage = {
  hero: {
    headline: 'Your New Headline Here',
    subheadline: 'Your new subheadline here.',
    ...
  },
  ...
}
```

## HubSpot Integration

### Setting Up HubSpot Forms

1. Log into your HubSpot account
2. Go to Marketing > Lead Capture > Forms
3. Create your forms (or use existing ones)
4. Click "Publish" and copy the Portal ID and Form ID

5. Edit `src/content/hubspot.ts`:
```typescript
export const hubspotConfig = {
  portalId: '12345678',  // Your HubSpot Portal ID
  region: 'na1',          // na1 for North America, eu1 for Europe
}

export const hubspotForms = {
  earlyAccess: {
    portalId: hubspotConfig.portalId,
    formId: 'abc123-your-form-id',  // Your form ID
    region: hubspotConfig.region,
  },
  // ... configure other forms
}
```

### HubSpot Tracking Code

The HubSpot tracking script is in `src/app/layout.tsx`. Replace `YOUR_PORTAL_ID`:
```html
<script src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
```

## Adding Images

1. Place images in `public/images/` folder
2. Reference them in content files as `/images/your-image.jpg`

### Recommended Image Sizes
- Hero images: 1920x1080px
- Team photos: 400x400px (square)
- Logos: SVG or PNG with transparent background

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Option 2: Static Export
Add to `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
}
```
Then run `npm run build` - static files will be in the `out` folder.

### Option 3: Self-Hosted
```bash
npm run build
npm run start
```
Runs on port 3000 by default.

## Environment Variables (Optional)

Create a `.env.local` file for sensitive configuration:
```
# HubSpot API (only if using API integration)
HUBSPOT_API_KEY=your-api-key

# Other environment variables
NEXT_PUBLIC_SITE_URL=https://oncobrain.ai
```

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: HubSpot Embed
- **Language**: TypeScript

## Design System

### Colors (defined in `tailwind.config.ts`)
- **Primary Teal**: #0D7377
- **Navy**: #0A1628
- **Amber**: #F5A623
- **Background**: #F8FAFC

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## Support

For questions about the website, contact [hello@oncobrain.ai](mailto:hello@oncobrain.ai).

---

Built with care by AccelerOnc Studio
