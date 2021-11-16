import { useMemo } from 'react'

import Modal from './Modal'
// import Imagen from '../Image'
import Image from '../Image'
import useGaleriaServices from '../../services/useGaleriaServices'
import { IconCircleOutline, IconCircleSolid } from '../../assets/icons/icons'

const ModalSelectImage = ({
  isOpen,
  isMultiple,
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
            {imagenes.map((image) => {
              const has = imagesSelected.has(image)
              return (
                <div key={`modal-image-${image.id}`} className="relative group">
                  {/* eslint-disable */}
                  {isMultiple ? (
                    has ? (
                      <IconCircleSolid className="w-5 h-5 absolute top-2 left-2 z-9999" />
                    ) : (
                      <IconCircleOutline className="w-5 h-5 absolute top-2 left-2 z-9999 opacity-0 group-hover:opacity-100" />
                    )
                  ) : null}
                  <Image
                    lazy={false}
                    src={image.url}
                    alt={image.descripcion}
                    onClick={() => handleSelectImage(image)}
                    className="rounded cursor-pointer"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalSelectImage
