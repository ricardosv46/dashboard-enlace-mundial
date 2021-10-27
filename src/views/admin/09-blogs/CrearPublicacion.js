import React from 'react'
import { useHistory } from 'react-router'
import { IconBackArrow } from '../../../assets/icons/icons'
import Button from '../../../components/Buttons/Button'
import EditorText from '../../../components/EditorText/EditorText'
import InputText from '../../../components/Forms/InputText/InputText'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'

const CrearPublicacion = () => {
  const history = useHistory()
  return (
    <div className=" md:rounded bg-white p-5 py-10 md:p-10 border ">
      <div className="flex justify-center pt-3 relative">
        <span
          onClick={() => history.goBack()}
          className="absolute left-0 top-0 cursor-pointer text-primary hover:bg-primary hover:text-white rounded-full"
        >
          <IconBackArrow />
        </span>
        <Heading>Crea Publicación</Heading>
      </div>
      <form
        onSubmit={() => { }}
        className="w-full  lg:px-4 px-0 mx-auto py-3 md:shadow-md"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5 gap-y-5">
          <InputText
            name="titulo"
            label="Titulo"
            placeholder="Ingrese un título para la categoria"
          />
          <InputText name="slug" label="Slug" placeholder="slug" />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5 gap-y-5">
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="IdDestino"
              className="block text-gray-700 text-left text-sm"
            >
              Estado
            </label>
            <select
              className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              id="estado"
              name="estado"
              autoComplete="off"
            >
              <option defaultValue>Selecciona</option>
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
          </div>
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="destacado"
              className="block text-gray-700 text-left text-sm"
            >
              Destacado
            </label>
            <select
              className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              id="destacado"
              name="destacado"
              autoComplete="off"
            >
              <option defaultValue>Selecciona</option>
              <option>Destacado</option>
              <option>No destacado</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5 border  ">
          <EditorText />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <TextArea
            label="Descripción corta"
            name="DescripcionCorta"
            rows="2"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="keywords"
            label="Keywords"
            placeholder="ingrese las plabras claves separadas con comas"
            type="text"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5 gap-y-5">
          <InputText
            name="imagenPrincipal"
            label="Imagen Principal"
            placeholder="Ingresa la imágen principal"
            type="file"
          />
          <InputText
            name="imagenSecundaria"
            label="Imagen Secundaria"
            placeholder="Ingresa la imágen secundaria"
            type="file"
          />
        </div>
        <div className="my-10 text-center">
          <Button variant="primary" size="lg">
            CREAR
          </Button>
        </div>
      </form >
    </div >
  )
}

export default CrearPublicacion
