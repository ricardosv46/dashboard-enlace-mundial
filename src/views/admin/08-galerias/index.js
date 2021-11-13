import { useEffect, useState } from 'react'
import Heading from '../../../components/Heading'
import Modal from '../../../components/Modales/Modal'
import Button from '../../../components/Buttons/Button'

import EditarFoto from './EditarFoto'
import { useModal } from '../../../hooks/useModal'
import DragAndDrop from '../../../components/DragAndDrop'
import useGaleriaServices from '../../../services/useGaleriaServices'

const initialState = {
  url: '',
  id: null,
  descripcion: ''
}

const Galerias = () => {
  const [isGalery, setIsGalery] = useState(true)
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const [imgSelected, setImgSelected] = useState(initialState)

  const { imagenes, loading, ...actions } = useGaleriaServices()

  useEffect(() => {
    console.log('NEW_FETCH')
  }, [imagenes])

  const handleOpenModal = (image) => {
    setImgSelected(image)
    openModal()
    console.log('SELECT', image)
  }

  const handleCloseModal = () => {
    setImgSelected(initialState)
    closeModal()
    console.log('CLEAR')
  }

  const handleUpload = async (images) => {
    await actions.uploadImages(images)
  }

  const Images = () => (
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

  const reload = loading || isGalery

  return (
    <>
      <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
        <div className="flex justify-between mb-8">
          <Heading>Galeria</Heading>
          <Button size="md" onClick={() => setIsGalery((s) => !s)}>
            {isGalery ? 'Subir Imágenes' : 'Ver Galeria'}
          </Button>
        </div>
        {reload ? <Images /> : <DragAndDrop onUpload={handleUpload} />}
      </div>
      <Modal isOpen={isOpenModal} closeModal={handleCloseModal}>
        <EditarFoto
          image={imgSelected}
          closeModal={handleCloseModal}
          onDelete={actions.deleteImagen}
          onUpdate={actions.updateImagen}
        />
      </Modal>
    </>
  )
}

export default Galerias
