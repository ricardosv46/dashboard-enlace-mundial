import { useState, useEffect } from 'react'

import Modal from './Modal'
// import Imagen from '../Image'
import Image from '../Image'
import useGaleriaServices from '../../services/useGaleriaServices'
// import { IconCircleOutline, IconCircleSolid } from '../../assets/icons/icons'
import { MdOutlineCheckCircle } from 'react-icons/md'

const ModalSelectImage = ({
  isOpen,
  isMultiple,
  onChange = () => { },
  closeModal = () => { },
  selectedImg
}) => {
  const { imagenes } = useGaleriaServices()
  const [imgSelected, setimgSelected] = useState([])
  const [changeSelect, setchangeSelect] = useState(false)
  // const imagesSelected = useMemo(() => new Set(), [])

  const handleSelectImage = (image) => {
    // if (isMultiple) {
    //   if (imagesSelected.has(image)) {
    //     imagesSelected.delete(image)
    //   } else {
    //     imagesSelected.add(image)
    //   }

    //   onChange([...imagesSelected])
    // } else {
    //   onChange(image)
    // }

    if (isMultiple) {
      if (imgSelected.find((img) => img.id === image.id)) {
        setimgSelected(imgSelected.filter((img) => img.id !== image.id))
        setchangeSelect(!changeSelect)
      } else {
        setimgSelected((current) => ([...current, image]))
        setchangeSelect(!changeSelect)
      }
      // if (imagesSelected.has(image)) {
      //   imagesSelected.delete(image)
      // } else {
      //   imagesSelected.add(image)
      // }
      // onChange([...imagesSelected])
    } else {
      onChange(image)
    }
  }

  // useEffect(() => {
  //   onChange(imgSelected)
  // }, [imgSelected])

  useEffect(() => {
    onChange(imgSelected)
  }, [changeSelect])

  useEffect(() => {
    setimgSelected(selectedImg)
  })

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="bg-white rounded py-6 border px-2 w-screen-9/10 h-screen-9/10 overflow-y-auto">
        <div className="w-full h-full">
          <h2 className="mb-5 w-max">Selecciona una imagen</h2>

          <div className="grid grid-cols-auto gap-3">
            {imagenes.map((image) => {
              // const has = imagesSelected.has(image)
              return (
                <div key={`modal-image-${image.id}`} className="relative">
                  {/* eslint-disable */}
                  {/* {isMultiple ? (
                    has ? (
                      <IconCircleSolid className="w-5 h-5 absolute top-2 left-2 z-9999" />
                    ) : (
                      <IconCircleOutline className="w-5 h-5 absolute top-2 left-2 z-9999 opacity-0 group-hover:opacity-100" />
                    )
                  ) : null} */}
                  {isMultiple ? (
                    imgSelected.find((img2) => img2.id == image.id) ? (
                      <MdOutlineCheckCircle
                        onClick={() => handleSelectImage(image)}
                        className="w-7 h-7 absolute top-2 left-2 z-9999  text-green-700 border-2 rounded-full border-green-700 cursor-pointer"
                      />
                    ) :
                      <div
                        onClick={() => handleSelectImage(image)}
                        className='w-7 h-7 absolute top-2 left-2 z-9999 text-green-700 border-2 rounded-full border-green-700 cursor-pointer'
                      />
                    // <MdOutlineCheckCircle className="w-7 h-7 absolute top-2 left-2 z-9999  text-green-700 border-2  rounded-full border-green-700" />
                  ) : null}
                  <Image
                    lazy={false}
                    src={image.url}
                    alt={image.descripcion}
                    onClick={() => handleSelectImage(image)}
                    className="rounded cursor-pointer z-10"
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
