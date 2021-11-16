import { useState } from 'react'

import Imagen from '../Image'
import ModalSelectImage from '../Modales/ModalSelectImage'

const SelectImage = ({
  value,
  label = 'Agregar imagen',
  onChange = () => {}
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   if (value) setImage(value)
  // }, [value])

  const handleSelect = (img) => {
    onChange(img)
    setIsOpen(false)
  }

  return (
    <div className="w-full h-full">
      <div
        onClick={() => setIsOpen(true)}
        className="w-full h-full cursor-pointer"
      >
        {/* eslint-disable */}
        {!value ? (
          <div className="grid place-items-center border border-gray-200 w-full h-full rounded">
            <p className="text-gray-400">{label}</p>
          </div>
        ) : (
          <Imagen
            src={value.url}
            alt={value.descripcion}
            className="rounded hover:shadow-lg transition-shadow"
          />
        )}
      </div>
      <ModalSelectImage
        isOpen={isOpen}
        onChange={handleSelect}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  )
}

export default SelectImage
