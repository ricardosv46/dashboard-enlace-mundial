import { useState } from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md'
import Image from '../Image'
import ModalSelectImage from '../Modales/ModalSelectImage'

import styles from './index.module.css'

const SelectMultiImages = ({ galery, setGalery }) => {
  console.log({ galery })
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   if (Array.isArray(galery)) setImages(galery)
  // }, [value])

  const handleSelect = (img) => {
    // setGalery([...galery, ...img])
    setGalery([...img])
    // setIsOpen(false)
  }

  const handleDeleteImg = (image) => {
    setGalery(galery.filter((img) => img.id !== image.id))
  }

  return (
    <div className="w-full h-full mb-10">
      <div className={styles.grid_images}>
        {galery && galery.map((image) => (
          <div key={`multi-image-${image.id}`} className="relative ">
            <div
              onClick={() => handleDeleteImg(image)}
              className='absolute top-0 right-0 rounded-bl-lg cursor-pointer w-7 h-7 z-80 hover:bg-red-500'>
              <MdOutlineDeleteForever className="w-full h-full text-red-700 hover:text-white" />
            </div>
            <Image
              src={image.url}
              alt={image.descripcion}
              className="transition-shadow rounded hover:shadow-lg"
            />
          </div>
        ))}
        <div
          onClick={() => setIsOpen(true)}
          className="w-full h-full aspect-w-16 aspect-h-9"
        >
          <div className="grid w-full h-full border border-gray-200 rounded cursor-pointer place-items-center">
            <p className="text-gray-400">Agregar imagen</p>
          </div>
        </div>
      </div>

      <ModalSelectImage
        isMultiple
        isOpen={isOpen}
        selectedImg={galery}
        onChange={handleSelect}
        closeModal={() => setIsOpen(false)}
      />
    </div >
  )
}

export default SelectMultiImages
