import { useEffect, useState } from 'react'
import swal from 'sweetalert'
// import swal from 'sweetalert'
import ModalCustomer from '../../../components/Modales/ModalCustomer'
import SelectImage from '../../../components/SelectImage'
import { useDepartamentosServices } from '../../../services/useDepartamentosServices'

const ModalActualizarDepartamento = ({ closeModal, isOpen, departamento }) => {
  // console.log(departamento)
  const [imagenPrincipal, setImagenPrincipal] = useState({})
  const [imagenSecundaria, setImagenSecundaria] = useState({})
  const { updateDepartamentos } = useDepartamentosServices()
  useEffect(() => {
    if (departamento) {
      setImagenPrincipal({
        id: departamento.imagenPrincipal?.id,
        url: departamento.imagenPrincipal?.url,
        descripcion: departamento.imagenPrincipal?.descripcion
      })
      setImagenSecundaria({
        id: departamento.imagenSecundaria?.id,
        url: departamento.imagenSecundaria?.url,
        descripcion: departamento.imagenSecundaria?.descripcion
      })
    }
  }, [isOpen, departamento])

  const handleSubtmit = (e) => {
    e.preventDefault()
    if (imagenPrincipal.id && imagenSecundaria.id) {
      updateDepartamentos({
        DeparCodi: departamento?.DeparCodi,
        imagenPrincipal: imagenPrincipal.id,
        imagenSecundaria: imagenSecundaria.id,
        DestacadoDepartamento: departamento?.DestacadoDepartamento
      }).then((res) => {
        if (res === 'exito') {
          swal({
            icon: 'success',
            button: 'Aceptar',
            title: 'ACTUALIZADO',
            text: 'Se actualizó correctamente el Departamento',
            timer: 2000
          })
          closeModal()
        } else {
          swal({
            icon: 'error',
            button: 'Aceptar',
            title: 'ERROR',
            text: 'Hubo un error al actualizar el departamento',
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
        text: 'Seleccione una imagen principal y secundaria',
        timer: 2000
      })
    }
  }

  return (
    <>
      <ModalCustomer isOpen={isOpen} closeModal={closeModal}>
        <h2 className="mt-5 md:text-2xl font-semibold tracking-wide text-center">
          Editar Departamento de {departamento?.DeparNom}
        </h2>
        <form
          onSubmit={handleSubtmit}
          className="w-full md:w-100 flex flex-col bg-white p-5  rounded z-99 min-w-72"
        >
          <div className="flex flex-col gap-y-1">
            <p className="text-gray-600 text-base mb-1 ">Imagen Principal</p>
            <div className="aspect-w-16 aspect-h-9 mb-3">
              {/* La propiedad value recibe un objecto con id, url y descripcion */}
              {/* La propiedad onChange devuelve un objecto con id, url y descripcion */}

              <SelectImage
                label="Agregar imagen principal"
                onChange={(img) => setImagenPrincipal(img)}
                value={imagenPrincipal}
              />
            </div>
            <p className="text-gray-600 text-base mb-1 ">Imagen Secundaria</p>
            <div className="aspect-w-16 aspect-h-9">
              <SelectImage
                label="Agregar imagen secundaria"
                onChange={(img) => setImagenSecundaria(img)}
                value={imagenSecundaria}
              />
            </div>
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

export default ModalActualizarDepartamento
