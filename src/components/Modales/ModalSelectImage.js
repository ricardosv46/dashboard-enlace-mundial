import { useMemo } from 'react'

import Modal from './Modal'
// import Imagen from '../Image'
import useGaleriaServices from '../../services/useGaleriaServices'
import { IconCircleOutline, IconCircleSolid } from '../../assets/icons/icons'
import Image from '../Image'

const Circle = ({ value }) => {
  const circleStyle =
    'w-5 h-5 absolute top-2 left-2 z-9999 group-hover:scale-105'
  /* eslint-disable */
  return value ? (
    <IconCircleSolid className={circleStyle} />
  ) : (
    <IconCircleOutline className={circleStyle} />
  )
}
/* eslint-enable */

const ModalSelectImage = ({
  isOpen,
  isMultiple = true,
  onChange = () => {},
  closeModal = () => {}
}) => {
  const { imagenes } = useGaleriaServices()
  const imagesSelected = useMemo(() => new Set(), [])

  const handleSelectImage = (image) => {
    if (isMultiple) {
      if (imagesSelected.has(image)) {
        imagesSelected.delete(image)
      } else {
        imagesSelected.add(image)
      }

      onChange([...imagesSelected])
    } else {
      onChange(image)
    }
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="bg-white rounded p-5 w-screen-9/10 h-screen-9/10">
        <div className="w-full h-full">
          <h2 className="mb-5 w-max">Selecciona una imagen</h2>

          <div className="grid grid-cols-auto gap-3">
            {imagenes.map((image) => (
              <div key={`modal-image-${image.id}`} className="relative group">
                <Circle value={imagesSelected.has(image)} />
                <Image
                  lazy={false}
                  src={image.url}
                  alt={image.descripcion}
                  onClick={() => handleSelectImage(image)}
                  className="rounded cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalSelectImage
