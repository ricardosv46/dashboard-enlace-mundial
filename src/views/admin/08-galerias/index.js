import React, { useEffect, useRef, useState } from 'react'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Modal from '../../../components/Modales/Modal'
import Spinner from '../../../components/Spinner/Spinner'
// import Spinner from '../../../components/Spinner/Spinner'
import { useGetImagenesQuery } from '../../../generated/graphql'
import { useModal } from '../../../hooks/useModal'
import EditarFoto from './EditarFoto'
import './index.css'

const Galerias = ({
  opcion,
  handleEdit,
  handleDelete,
  closeModalGaleria = () => { }
}) => {
  const [imagenes, setImagenes] = useState([])
  const { loading } = useGetImagenesQuery({
    fetchPolicy: 'network-only',
    onCompleted: (imagenes) => { setImagenes(imagenes.GetImagenes) }
  })

  const inputFile = useRef()
  const dropArea = useRef()
  const [url, setUrl] = useState('')
  const [alt, setAlt] = useState('')
  const [id, setId] = useState(null)
  const [selectView, setSelectView] = useState(true)
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const [dataFiles, setDataFiles] = useState([])
  const [value, setValue] = useState('')

  const dataNames = [{}]
  // console.log(dataFiles, inputFile.current)
  for (let index = 0; index < dataFiles.length; index++) {
    dataNames.push({
      name: dataFiles[index].name,
      url: URL.createObjectURL(dataFiles[index])
    })
  }

  // console.log(dataNames)
  const handleOpenModal = (url, alt, id) => {
    openModal()
    setUrl(url)
    setAlt(alt)
    setId(id)
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
        <Button size="md" onClick={() => setSelectView(!selectView)}>
          {' '}
          {selectView ? 'Subir Imágenes' : 'Ver Galeria'}
        </Button>
      </div>
      {/* eslint-disable-next-line multiline-ternary */}
      {selectView ? (
        <div className="gap-4 contenedor-imagenes">
          {
            loading
              ? <Spinner />
              : imagenes.map((image) => (
                <div
                  key={image.id}
                  className="contenedor-imagen rounded flex  justify-center overflow-hidden shadow-lg "
                >
                  <img
                    className="w-full"
                    src={image.url}
                    alt={image.descripcion}
                    onClick={() => handleOpenModal(image.url, image.descripcion, image.id)}
                  />
                </div>
              ))

          }
        </div>
      ) : (
        <div
          className="w-full min-h-40 text-gray-600  border-2 border-primary border-dashed cursor-pointer flex flex-col justify-center items-center px-4 text-center lg:px-50 py-10"
          onClick={handleSubmitImg}
          ref={dropArea}
        >
          <p className="text-xl">
            Arrastre imagenes o haga click aquí para seleccionar.Archivos
            permitidos: .jpg, .jpeg, .png
          </p>
          <div className="flex flex-wrap gap-4 text-sm mt-5">
            {dataNames.map(
              (dataImg, index) =>
                index > 0 && (
                  <>
                    <p
                      key={index}
                      className="py-1 px-2  text-gray-500 border rounded-lg flex gap-x-2"
                    >
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
        </div>
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
