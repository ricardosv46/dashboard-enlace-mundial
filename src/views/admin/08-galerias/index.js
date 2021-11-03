import React, { useEffect, useRef, useState } from 'react'
import Button from '../../../components/Buttons/Button'
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
const Galerias = ({ opcion, handleEdit, handleDelete }) => {
  const inputFile = useRef()
  const dropArea = useRef()
  const [url, setUrl] = useState('')
  const [alt, setAlt] = useState('')
  const [selectView, setSelectView] = useState(true)
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const [dataFiles, setDataFiles] = useState([])
  const [value, setValue] = useState('')

  const dataNames = [{}]
  // console.log(dataFiles, inputFile.current)
  for (let index = 0; index < dataFiles.length; index++) {
    dataNames.push({
      name: (dataFiles[index].name),
      url: URL.createObjectURL(dataFiles[index])
    })
  }

  // console.log(dataNames)
  const handleOpenModal = (url, alt) => {
    openModal()
    setUrl(url)
    setAlt(alt)
  }
  const handleSubmitImg = () => {
    inputFile.current.click()
  }

  useEffect(() => {
    const handleChangue = (e) => {
      setDataFiles(e.target.files)
      // console.log('url', URL.createObjectURL(e.target.files[0]))
      setValue(e.target.value)
    }

    if (selectView === false) {
      inputFile.current.addEventListener('change', handleChangue)
    } else {
      setDataFiles([])
      setValue('')
    }
  }, [selectView])

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-8">
        <Heading>Galeria</Heading>
        <Button size="md" onClick={() => setSelectView(!selectView)}> {selectView ? 'Subir Imágenes' : 'Ver Galeria'}</Button>
      </div>
      {selectView
        ? (<div className="gap-4 contenedor-imagenes">
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
        </div>)
        : (<div
          className="w-full min-h-40 text-gray-600  border-2 border-primary border-dashed cursor-pointer flex flex-col justify-center items-center px-4 text-center lg:px-50 py-10"
          onClick={handleSubmitImg}
          ref={dropArea}
        >
          <p className="text-xl">
            Arrastre imagenes o haga click aquí para seleccionar.Archivos permitidos: .jpg, .jpeg, .png
          </p>
          <div className="flex flex-wrap gap-4 text-sm mt-5">
            {dataNames.map((dataImg, index) =>
              (index > 0) &&
              (
                <>
                  <p key={index} className="py-1 px-2  text-gray-500 border rounded-lg flex gap-x-2">
                    {dataImg.name}
                    <img src={dataImg.url} alt="" className="w-5" />
                  </p>

                </>
              )
            )}
          </div>

          <input
            type="file"
            ref={inputFile}
            className="hidden"
            multiple
            value={value}
            accept="image/*"
          />
        </div>)

      }
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <EditarFoto
          url={url}
          alt={alt}
          closeModal={closeModal}
          opcion={opcion}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </Modal>
    </div>
  )
}

export default Galerias
