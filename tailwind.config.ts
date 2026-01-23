import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // OncoBrain Brand Colors
        brand: {
          blue: '#0055FF',       // Bright Blue - primary
          deep: '#062F6E',       // Moffitt Deep Blue
          midnight: '#081923',   // Midnight Blue - darkest
          light: '#BBE4FF',      // Light Blue
          grey: '#C1C1C1',       // Grey
        },
        teal: {
          DEFAULT: '#0055FF',
          50: '#EBF3FF',
          100: '#D6E8FF',
          200: '#ADD0FF',
          300: '#85B9FF',
          400: '#3D8FFF',
          500: '#0055FF',
          600: '#0044CC',
          700: '#003399',
          800: '#062F6E',
          900: '#081923',
        },
        navy: {
          DEFAULT: '#081923',
          50: '#E8EDF2',
          100: '#C5D0DB',
          200: '#9FAFC2',
          300: '#798EAB',
          400: '#536F94',
          500: '#2D507D',
          600: '#1E3A5F',
          700: '#142847',
          800: '#0A1628',
          900: '#050B14',
        },
        amber: {
          DEFAULT: '#F5A623',
          50: '#FEF7E6',
          100: '#FDECC0',
          200: '#FCE099',
          300: '#FAD573',
          400: '#F9C94C',
          500: '#F5A623',
          600: '#D4901F',
          700: '#B37A1A',
          800: '#926416',
          900: '#714E11',
        },
        // Text Colors
        'text-primary': '#1E293B',
        'text-secondary': '#64748B',
        'text-muted': '#94A3B8',
        // Background Colors
        'bg-light': '#F8FAFC',
        'bg-card': '#FFFFFF',
        // Success/Status
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow-teal': '0 0 40px rgba(13, 115, 119, 0.15)',
        'glow-amber': '0 0 40px rgba(245, 166, 35, 0.15)',
      },
      backgroundImage: {
        'gradient-teal': 'linear-gradient(135deg, #0055FF 0%, #062F6E 100%)',
        'gradient-amber': 'linear-gradient(135deg, #F5A623 0%, #F7B84B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #081923 0%, #062F6E 100%)',
        'gradient-hero': 'linear-gradient(180deg, #F8FAFC 0%, #EBF3FF 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
