import React from 'react'

const TextArea = ({ name = '', label = '', children, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="block text-gray-700 text-left text-sm">
        {label}
      </label>
      <textarea
        className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"

        id={name}
        name={name}
        {...props}
      >
        {children}
      </textarea>
    </div>
  )
}

export default TextArea
