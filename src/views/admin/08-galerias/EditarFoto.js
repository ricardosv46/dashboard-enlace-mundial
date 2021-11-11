import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import InputText from '../../../components/Forms/InputText/InputText'
import useGaleriaServices from '../../../services/useGaleriaServices'

const EditarFoto = ({ image, opcion = false, closeModal = () => {} }) => {
  const [text, setText] = useState('')
  const { deleteImagen, updateImagen } = useGaleriaServices()

  useEffect(() => {
    setText(image.descripcion)
  }, [image.descripcion])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleUpdate = () => {
    updateImagen(image.id, text)
    closeModal()
  }

  const handleDelete = () => {
    deleteImagen(image.id)
    closeModal()
  }

  const handleChoose = () => {
    swal({
      icon: 'success',
      button: 'Aceptar',
      title: 'SELECCIONADA',
      text: 'Imágen Seleccionada',
      timer: 2000
    })
    closeModal()
  }

  const btnDisabled = text.trim() === ''

  return (
    <div className="w-full md:w-100 flex flex-col">
      <h1 className="md:text-2xl font-semibold tracking-wide mb-5 flex items-center mx-auto">
        Información de la Imágen
      </h1>
      <div className="w-full md:w-60  mx-auto">
        <img src={image.url} alt={image.descripcion} className="h-50" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row lg:space-x-4 my-5">
          <InputText
            name="descripcion"
            label="Descripción"
            placeholder="Ingrese una descripción para la imagén"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 my-5 gap-y-4">
          <button
            type="button"
            onClick={opcion ? handleChoose : handleDelete}
            className={opcion ? 'btn btn-outline-blue' : 'btn btn-outline-red'}
          >
            {opcion ? 'Escoger' : 'Eliminar'}
          </button>
          <button
            type="button"
            disabled={btnDisabled}
            onClick={handleUpdate}
            className="btn btn-green"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditarFoto
