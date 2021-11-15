import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import InputText from '../../../components/Forms/InputText/InputText'

const EditarFoto = ({
  image,
  isUpdate,
  onDelete = () => {},
  onUpdate = () => {},
  closeModal = () => {}
}) => {
  const [text, setText] = useState('')

  useEffect(() => {
    setText(image.descripcion)
  }, [image.descripcion])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleUpdate = () => {
    onUpdate(image.id, text)
    closeModal()
  }

  const handleDelete = () => {
    onDelete(image.id)
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
    <div className="w-full md:w-100 flex flex-col bg-white p-5 shadow rounded z-9999">
      <h2 className="mt-10 md:text-2xl font-semibold tracking-wide mb-5 flex items-center mx-auto">
        Información de la Imágen
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image.url}
          alt={image.descripcion}
          className="w-full h-full mx-auto"
        />
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
            onClick={isUpdate ? handleChoose : handleDelete}
            className={
              isUpdate
                ? 'btn btn-outline-blue w-full'
                : 'btn btn-outline-red w-full'
            }
          >
            {isUpdate ? 'Escoger' : 'Eliminar'}
          </button>
          <button
            type="button"
            disabled={btnDisabled}
            onClick={handleUpdate}
            className="btn btn-green w-full"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditarFoto
