'use client'

import cn from '@/lib/clsx'
import { ButtonProps } from '../types/Button.types'
import { buttonVariants } from '../utils'

export function Button({
  type = 'button',
  onClick,
  text = 'Button',
  isDisabled = false,
  className = '',
  variant = 'primary',
  size = 'medium'
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {text}
    </button>
  )
}
