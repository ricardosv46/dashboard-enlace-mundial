import { useState } from 'react'
import Heading from '../../../components/Heading'
import Modal from '../../../components/Modales/Modal'
import Button from '../../../components/Buttons/Button'

import EditarFoto from './EditarFoto'
import { useModal } from '../../../hooks/useModal'
import DragAndDrop from '../../../components/DragAndDrop'
import useGaleriaServices from '../../../services/useGaleriaServices'

const Galerias = () => {
  const { imagenes, uploadImages } = useGaleriaServices()

  const [isGalery, setIsGalery] = useState(true)
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const [imgSelected, setImgSelected] = useState({
    url: '',
    id: null,
    descripcion: ''
  })

  const handleOpenModal = (image) => {
    openModal()
    setImgSelected(image)
  }

  const handleUpload = async (images) => {
    await uploadImages(images)
  }

  const renderImages = () => (
    <div className="grid grid-cols-auto gap-4">
      {imagenes.map((image) => (
        <div
          key={`image-${image.id}`}
          className="rounded flex justify-center overflow-hidden shadow-lg transition-all group"
        >
          <img
            src={image.url}
            alt={image.descripcion}
            onClick={() => handleOpenModal(image)}
            className="transform group-hover:scale-110 cursor-pointer transition-transform"
          />
        </div>
      ))}
    </div>
  )

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-8">
        <Heading>Galeria</Heading>
        <Button size="md" onClick={() => setIsGalery((s) => !s)}>
          {isGalery ? 'Subir Imágenes' : 'Ver Galeria'}
        </Button>
      </div>
      {isGalery ? renderImages() : <DragAndDrop onUpload={handleUpload} />}
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <EditarFoto image={imgSelected} closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default Galerias
