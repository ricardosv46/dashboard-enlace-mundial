import React, { useState } from 'react'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Modal from '../../../components/Modales/Modal'
import Spinner from '../../../components/Spinner/Spinner'
// import Spinner from '../../../components/Spinner/Spinner'

import { useModal } from '../../../hooks/useModal'
import useGaleriaServices from '../../../services/useGaleriaServices'
import EditarFoto from './EditarFoto'
import Drogo from './ejemplo'
import './index.css'

const Galerias = ({
  opcion,
  handleEdit,
  handleDelete,
  closeModalGaleria = () => { }
}) => {
  const { imagenes, loading } = useGaleriaServices()
  const [url, setUrl] = useState('')
  const [alt, setAlt] = useState('')
  const [id, setId] = useState(null)
  const [selectView, setSelectView] = useState(true)
  const [isOpenModal, openModal, closeModal] = useModal(false)

  const handleOpenModal = (url, alt, id) => {
    openModal()
    setUrl(url)
    setAlt(alt)
    setId(id)
  }

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-8">
        <Heading>Galeria</Heading>
        <Button size="md" onClick={() => setSelectView(!selectView)}>
          {' '}
          {selectView ? 'Subir Imágenes' : 'Ver Galeria'}
        </Button>
      </div>
      {/* eslint-disable */}
      {selectView ? (
        <div className="gap-4 contenedor-imagenes">
          {loading ? (
            <Spinner />
          ) : (
            imagenes.map((image) => (
              <div
                key={image.id}
                className="contenedor-imagen rounded flex  justify-center overflow-hidden shadow-lg "
              >
                <img
                  className="w-full"
                  src={image.url}
                  alt={image.descripcion}
                  onClick={() =>
                    handleOpenModal(image.url, image.descripcion, image.id)
                  }
                />
              </div>
            ))
          )}
        </div>
      ) : (
        <Drogo />
      )}
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <EditarFoto
          url={url}
          alt={alt}
          id={id}
          closeModal={closeModal}
          opcion={opcion}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          closeModalGaleria={closeModalGaleria}
        />
      </Modal>
    </div>
  )
}

export default Galerias
