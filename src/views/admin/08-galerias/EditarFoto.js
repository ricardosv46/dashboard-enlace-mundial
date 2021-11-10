import React, { useContext, useEffect, useState } from 'react'
// import { useEffect } from 'react'
import InputText from '../../../components/Forms/InputText/InputText'
import UseForm from '../../../hooks/UseForm'
import swal from 'sweetalert'
import { ImgContext } from '../../../context/auth/ImgContext'
import {
  useDeleteImageMutation,
  useUpdateImageMutation
} from '../../../generated/graphql'
const EditarFoto = ({
  url,
  alt,
  id,
  closeModal,
  opcion = false,
  closeModalGaleria = () => { }
}) =>
// opcion sirve para saber si voy a usar la galeria para escoger una imagen o para actualizarla, si opcion=true se muestra el btn escoger si no se muestar el btn actualizar
// eslint-disable-next-line brace-style
{
  const [deleteImage, { loading }] = useDeleteImageMutation({
    onError: (err) => {
      // validar errores
      console.log('onError delete', err?.graphQLErrors[0]?.debugMessage)
    }
  })
  const [updateImage, { loading: loadingUpadate }] = useUpdateImageMutation({
    onError: (err) => {
      // validar errores
      console.log('onError update', err?.graphQLErrors[0]?.debugMessage)
    }
  })
  const { form, handleInputChange, resetForm } = UseForm({ descripcion: alt })
  const { img, setImg } = useContext(ImgContext)
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    resetForm()
  }

  const validationDisabled = () => {
    if (form.descripcion.trim() === '' || form.descripcion.trim() === alt) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const handleUpdate = () => {
    if (loadingUpadate === false) {
      updateImage({
        variables: {
          input: {
            id: id,
            descripcion: form.descripcion
          }
        }
      })
    }
    swal({
      title: 'Actualizar',
      text: 'Se Actualizo correctamente el atributo Alt',
      icon: 'success',
      button: 'Aceptar',
      timer: 2000
    })
    resetForm()
    closeModal()
  }

  const handleDelete = () => {
    swal({
      title: 'Eliminar',
      text: '¿Esta seguro que desea eliminar este archivo?',
      icon: 'warning',
      buttons: ['NO', 'SI'],
      timer: 5000
    }).then((respuesta) => {
      if (respuesta) {
        if (loading === false) {
          deleteImage({
            variables: {
              input: {
                id: id
              }
            }
          })
        }

        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente el archivo',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
        resetForm()
        closeModal()
      }
    })
  }

  const handleChoose = () => {
    setImg({ ...img, url, alt })
    swal({
      title: 'SELECCIONADA',
      text: 'Imágen Seleccionada',
      icon: 'success',
      button: 'Aceptar',
      timer: 2000
    })
    closeModal()
    closeModalGaleria()
  }

  useEffect(() => {
    resetForm()
  }, [url, alt])

  useEffect(() => {
    validationDisabled()
  }, [form])

  return (
    <div className="w-full md:w-100 flex flex-col ">
      <h1 className="md:text-2xl font-semibold tracking-wide mb-5 flex items-center mx-auto">
        Información de la Imágen
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
            type="button"
            disabled={disabled}
            onClick={handleUpdate}
            className={`transition-all duration-300 ${disabled
              ? 'bg-gray-300  '
              : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:border-transparent '
              }  h-11 w-80 font-semibold border-2 rounded-lg`}
          >
            Actualiazar
          </button>

          {/* eslint-disable-next-line multiline-ternary */}
          {opcion ? (
            <button
              type="button"
              onClick={handleChoose}
              className="transition-all duration-300 bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent h-11 w-80 font-semibold border-2 rounded-lg"
            >
              Escoger
            </button>
          ) : (
            <button
              type="button"
              className="transition-all duration-300 bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white hover:border-transparent h-11 w-80 font-semibold border-2 rounded-lg"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default EditarFoto
