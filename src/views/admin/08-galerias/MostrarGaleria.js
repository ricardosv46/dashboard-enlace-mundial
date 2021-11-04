import React, { useEffect, useReducer } from 'react'
import Button from '../../../components/Buttons/Button'
import Modal from '../../../components/Modales/Modal'
import { useModal } from '../../../hooks/useModal'
import SeleccionarFotos from './SeleccionarFotos'
import { imagenesReducer } from './imagenesReducer'
const initialState = [{
  id: '',
  url: '',
  alt: '',
  marcado: false
}]
const MostrarGaleria = () => {
  const [isOpenModal, openModal, closeModal] = useModal()
  const [galeria, dispatch] = useReducer(imagenesReducer, initialState)
  useEffect(() => {
    dispatch({
      type: 'resetImage'
    })
  }, [])
  return (
    <div className=" flex flex-col gap-y-6 md:flex-row items-center gap-x-3 w-full shadow-lg sm:py-4">
      <Button onClick={() => openModal()}>Galeria Principal</Button>
      <div className=" max-w-full  flex gap-2 flex-wrap">
        {
          galeria.map((imagen, index) =>
            imagen.marcado && <img
              key={index}
              src={imagen.url}
              alt=""
              className="w-20"
            />
          )
        }

      </div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <SeleccionarFotos
          galeria={galeria}
          dispatch={dispatch}
        />
      </Modal>
    </div>
  )
}

export default MostrarGaleria
