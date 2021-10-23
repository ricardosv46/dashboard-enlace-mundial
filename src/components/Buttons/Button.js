import React from 'react'

const Button = ({
  children,
  variant = 'primary-outline',
  size = 'md',
  onClick = () => {},
  type = 'button',
  className = ''
}) => {
  const applyVariant = (variant) => {
    if (variant === 'primary') {
      return 'bg-primary text-white hover:bg-primary-400'
    }
    if (variant === 'primary-outline') {
      return 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:border-transparent'
    }
    if (variant === 'secondary') {
      return 'bg-secondary text-white hover:bg-secondary-400'
    }
    if (variant === 'secondary-outline') {
      return 'bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-white hover:border-transparent'
    }
  }

  const applySize = (size) => {
    if (size === 'sm') {
      return 'h-10 w-32 font-medium border-2 rounded-lg'
    }
    if (size === 'md') {
      return 'h-10 w-48 font-semibold border-2 rounded-lg'
    }
    if (size === 'lg') {
      return 'h-11 w-80 font-semibold border-2 rounded-lg'
    }
    if (size === 'full') {
      return 'w-full h-11 font-semibold border-2 rounded-lg'
    }
  }

  return (
    <button
      type={type}
      className={`
      ${applyVariant(variant)} 
      ${applySize(size)} 
      ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
