import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import InputText from '../../../components/Forms/InputText/InputText'
import ModalCustomer from '../../../components/Modales/ModalCustomer'
import { useActividadesServices } from '../../../services/useActividadesServices'

const ModalActualizarActividad = ({ closeModal, isOpen, actividad }) => {
  const { id, descripcion } = actividad
  const [text, setText] = useState('')
  const { updateActividadesTour } = useActividadesServices()
  const handleSubtmit = (e) => {
    e.preventDefault()
    if (text) {
      updateActividadesTour({
        actividadId: id,
        descripcion_actividad: text
      }).then((res) => {
        if (res === 'exito') {
          swal({
            icon: 'success',
            button: 'Aceptar',
            title: 'ACTUALIZADO',
            text: 'Se actualizó correctamente la actividad',
            timer: 2000
          })
          closeModal()
        } else {
          swal({
            icon: 'error',
            button: 'Aceptar',
            title: 'ERROR',
            text: 'Hubo un error al actualizar la actividad',
            timer: 2000
          })
          closeModal()
        }
      })
    } else {
      swal({
        icon: 'warning',
        button: 'Aceptar',
        title: 'DATOS INCOMPLETOS',
        text: 'Ingrese los datos solicitados',
        timer: 2000
      })
    }
  }
  useEffect(() => {
    if (descripcion) {
      setText(descripcion)
    } else {
      setText('')
    }
  }, [isOpen])

  return (
    <>
      <ModalCustomer isOpen={isOpen} closeModal={closeModal}>
        <h2 className="mt-10 md:text-2xl font-semibold tracking-wide text-center">
          Editar Actividad
        </h2>
        <form
          onSubmit={handleSubtmit}
          className="w-full md:w-100 flex flex-col bg-white p-5  rounded z-9999 min-w-72"
        >
          <div className=" lg:space-x-4 my-4">
            <InputText
              name="descripcion"
              label="Actividad"
              placeholder="Ingrese la Actividad"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {!text && (
              <div className="text-red-600 text-sm mt-2">Complete el campo</div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-4 my-5 gap-y-4">
            <button type="submit" className="btn btn-outline-blue w-full">
              Actualizar
            </button>
          </div>
        </form>
      </ModalCustomer>
    </>
  )
}

export default ModalActualizarActividad
