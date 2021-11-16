import { useState } from 'react'

import Imagen from '../Image'
import ModalSelectImage from '../Modales/ModalSelectImage'

const SelectImage = () => {
  const [image, setImage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelectImage = (img) => {
    setImage(img)
    setIsOpen(false)
  }

  const renderAddImage = () => {
    return (
      <div className="grid place-items-center border border-gray-400 w-full h-full">
        <p className="text-gray-400">Agregar imagen</p>
      </div>
    )
  }

  const renderImage = () => {
    return <Imagen src={image.src} alt={image.descripcion} />
  }

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="aspect-w-16 aspect-h-9 cursor-pointer"
    >
      <div>{image ? renderImage() : renderAddImage()}</div>

      <ModalSelectImage
        isOpen={isOpen}
        onChange={handleSelectImage}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  )
}

export default SelectImage
