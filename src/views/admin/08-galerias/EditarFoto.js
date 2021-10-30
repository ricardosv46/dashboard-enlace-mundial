import React, { useEffect } from 'react'
// import { useEffect } from 'react'
import InputText from '../../../components/Forms/InputText/InputText'
import UseForm from '../../../hooks/UseForm'

const EditarFoto = ({ url, alt, closeModal }) => {
  const { form, handleInputChange, resetForm } = UseForm({ descripcion: alt })
  const handleSubmit = (e) => {
    e.preventDefault()
    resetForm()
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
            disabled={`${
              form.descripcion.trim() === '' || form.descripcion.trim() === alt
                ? true
                : ''
            }`}
            onClick={() => alert(alt)}
            className={`transition-all duration-300 ${
              form.descripcion.trim() === '' || form.descripcion.trim() === alt
                ? 'bg-gray-300  '
                : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:border-transparen '
            } 
            t
             h-11 w-80 font-semibold border-2 rounded-lg`}
          >
            Actualiazar
          </button>
          <button
            type="button"
            className="transition-all duration-300 bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white hover:border-transparent h-11 w-80 font-semibold border-2 rounded-lg"
          >
            Eliminar
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditarFoto
