import React from 'react'

const InputText = ({ name = '', label = '', ...props }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="block text-gray-700 text-left text-sm">
        {label}
      </label>
      <input
        className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        id={name}
        name={name}
        type="text"
        {...props}
      />
    </div>
  )
}

export default InputText
