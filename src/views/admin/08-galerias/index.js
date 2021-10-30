import React, { useState } from 'react'
import Heading from '../../../components/Heading'
import Modal from '../../../components/Modales/Modal'
import { useModal } from '../../../hooks/useModal'
import EditarFoto from './EditarFoto'
import './index.css'
const imgsList = [
  {
    url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/93/05/49.jpg',
    alt: 'sol y playa'
  },
  {
    url: 'https://turismoi.pe/uploads/photo/version2/photo_file/54018/optimized_2187-1.jpg',
    alt: 'lagunas'
  },
  {
    url: 'https://cde.peru.com//ima/0/1/9/4/6/1946830/924x530/laguna-azulcocha.jpg',
    alt: ''
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Valdivia-Antioquia.jpg/1200px-Valdivia-Antioquia.jpg',
    alt: 'nevados'
  },
  {
    url: 'https://www.nupciasmagazine.com/wp-content/uploads/2020/04/nupcias-maldivas.jpg',
    alt: 'sierra'
  },
  {
    url: 'https://www.nupciasmagazine.com/wp-content/uploads/2020/07/Azulik.jpg',
    alt: ''
  },
  {
    url: 'https://www.evento.love/blog/wp-content/uploads/2018/06/Origen-de-la-luna-de-miel-pareja-marido-mujer-atardecer-1200x720.png',
    alt: ''
  }
]
const Galerias = () => {
  const [url, setUrl] = useState('')
  const [alt, setAlt] = useState('')
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const handleOpenModal = (url, alt) => {
    openModal()
    setUrl(url)
    setAlt(alt)
  }
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <Heading>Galerias</Heading>
      <div className="gap-4 contenedor-imagenes">
        {imgsList.map((image, index) => (
          <div
            key={index}
            className="contenedor-imagen rounded flex  justify-center overflow-hidden shadow-lg "
          >
            <img
              className="w-full"
              src={image.url}
              alt={image.alt}
              onClick={() => handleOpenModal(image.url, image.alt)}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={isOpenModal}
        closeModal={closeModal}
      >
        <EditarFoto url={url} alt={alt} closeModal={closeModal}/>
      </Modal>
    </div>
  )
}

export default Galerias
