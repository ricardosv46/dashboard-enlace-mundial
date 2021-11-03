import React, { useContext, useEffect } from 'react'
// import { useEffect } from 'react'
import InputText from '../../../components/Forms/InputText/InputText'
import UseForm from '../../../hooks/UseForm'
import swal from 'sweetalert'
import { ImgContext } from '../../../context/auth/ImgContext'
const EditarFoto = (
  {
    url,
    alt,
    closeModal,
    opcion = false,
    handleEdit = () => { }
  }
) => {
  const { form, handleInputChange, resetForm } = UseForm({ descripcion: alt })
  const { img, setImg } = useContext(ImgContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    resetForm()
    swal({
      title: 'Actualizar',
      text: 'Se Actualizo correctamente el atributo Alt',
      icon: 'success',
      button: 'Aceptar',
      timer: 2000
    })
    closeModal()
  }

  const handleDelete = () => {
    swal({
      title: 'Eliminar',
      text: '¿Esta seguro que desea eliminar este archivo?',
      icon: 'warning',
      buttons: ['NO', 'SI'],
      timer: 5000
    }).then(respuesta => {
      if (respuesta) {
        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente el archivo',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
        closeModal()
      }
    })
  }

  const handleChoose = () => {
    setImg({ ...img, url, alt })
    closeModal()
  }

  useEffect(() => {
    resetForm()
  }, [url, alt])
  return (
    <div className="w-full md:w-100 flex flex-col ">
      <h1 className="md:text-2xl font-semibold tracking-wide mb-5 flex items-center mx-auto">
        Información de la Imagen
      </h1>
      <div className="w-full md:w-60  mx-auto">
        <img src={url} alt={alt} className="h-50" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row lg:space-x-4 my-5">
          <InputText
            name="descripcion"
            label="Descripción"
            placeholder="Ingrese una descripción para la imagén"
            onChange={handleInputChange}
            value={form.descripcion}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 my-5 gap-y-4">
          <button
            type="submit"
            disabled={`${form.descripcion.trim() === '' || form.descripcion.trim() === alt
              ? true
              : ''
              }`}
            onClick={() => handleEdit}
            className={`transition-all duration-300 ${form.descripcion.trim() === '' || form.descripcion.trim() === alt
              ? 'bg-gray-300  '
              : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:border-transparen '
              } 
            t
             h-11 w-80 font-semibold border-2 rounded-lg`}
          >
            Actualiazar
          </button>
          {opcion
            ? <button
              type="button"
              onClick={handleChoose}
              className="transition-all duration-300 bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent h-11 w-80 font-semibold border-2 rounded-lg"
            >
              Escoger
            </button>

            : <button
              type="button"
              className="transition-all duration-300 bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white hover:border-transparent h-11 w-80 font-semibold border-2 rounded-lg"
              onClick={handleDelete}
            >
              Eliminar
            </button>

          }
        </div>
      </form>
    </div>
  )
}

export default EditarFoto
