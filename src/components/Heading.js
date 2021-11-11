import React from 'react'

const Heading = ({ size = 'md', children, ...props }) => {
  const applySize = () => {
    switch (size) {
      case 'sm':
        return 'text-sm'
      case 'md':
        return 'text-md'
      case 'lg':
        return 'text-lg'
      case 'xl':
        return 'text-xl'
      default:
        return 'text-md'
    }
  }

  return (
    <p
      className={`flex items-center ${applySize()} md:text-2xl font-semibold tracking-wide`}
      {...props}
    >
      {children}
    </p>
  )
}

export default Heading
