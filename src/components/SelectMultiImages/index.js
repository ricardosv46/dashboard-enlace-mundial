import { useEffect, useState } from 'react'

import Image from '../Image'
import ModalSelectImage from '../Modales/ModalSelectImage'

import styles from './index.module.css'

const SelectMultiImages = ({ value, onChange = () => { } }) => {
  const [images, setImages] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (Array.isArray(value)) setImages(value)
  }, [value])

  const handleSelect = (img) => {
    onChange(img)
    setImages(img)
    // setIsOpen(false)
  }

  return (
    <div className="w-full h-full mb-10">
      <div className={styles.grid_images}>
        {images.map((image) => (
          <div key={`multi-image-${image.id}`}>
            <Image
              src={image.url}
              alt={image.descripcion}
              className="rounded cursor-pointer hover:shadow-lg transition-shadow"
            />
          </div>
        ))}
        <div
          onClick={() => setIsOpen(true)}
          className="w-full h-full aspect-w-16 aspect-h-9"
        >
          <div className="w-full h-full grid place-items-center border border-gray-200 rounded cursor-pointer">
            <p className="text-gray-400">Agregar imagen</p>
          </div>
        </div>
      </div>

      <ModalSelectImage
        isMultiple
        isOpen={isOpen}
        onChange={handleSelect}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  )
}

export default SelectMultiImages
