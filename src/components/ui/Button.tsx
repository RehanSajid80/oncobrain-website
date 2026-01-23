import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gradient-teal text-white hover:opacity-90 focus:ring-teal-500 shadow-soft hover:shadow-lg',
    secondary: 'bg-navy-800 text-white hover:bg-navy-700 focus:ring-navy-500',
    outline: 'border-2 border-teal-500 text-teal-500 hover:bg-teal-50 focus:ring-teal-500',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-gray-100 focus:ring-gray-300',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
