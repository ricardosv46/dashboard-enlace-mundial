import React from 'react'

const Heading = ({ size = 'md', children }) => {
  const applySize = () => {
    switch (size) {
      case 'sm':
        return 'text-sm'
      case 'md':
        return 'text-md'
      case 'lg':
        return 'text-lg'
      default:
        return 'text-md'
    }
  }

  return (
    <p
      className={`flex items-center ${applySize()} md:text-2xl font-semibold tracking-wide mb-5`}
    >
      {children}
    </p>
  )
}

export default Heading
