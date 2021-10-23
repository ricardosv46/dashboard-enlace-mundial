import React from 'react'

const Input = ({
  type,
  placeholder = 'Ingrese un valor',
  id,
  name,
  color = 'black-200',
  focusColor = 'red-500'
}) => {
  const borderColor = `border-${color}`
  const rign = `ring-${color}`
  const focusC = `border-${focusColor}`
  const focusR = `ring-${focusColor}`

  return (
    <div>
      <input
        className={`focus:${borderColor} 
        focus:ring-1 focus:${rign} 
        focus:outline-none w-full text-sm text-black ${borderColor} border outline-none
         placeholder-gray-500  rounded-md py-2 pl-10 focus:outline-none
         focus:${focusC} focus:${focusR}
         `}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
      />
    </div>
  )
}

export default Input
