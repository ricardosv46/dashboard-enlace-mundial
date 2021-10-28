import React from 'react'
import Button from '../../../components/Buttons/Button'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import InputText from '../../../components/Forms/InputText/InputText'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'

const CrearTour = () => {
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Crear Nuevo Tour</Heading>
      </div>
      <form
        onSubmit={() => {}}
        className="w-full md:shadow-md lg:px-4 px-0 mx-auto"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5">
          <InputText
            name="titulo"
            label="Titulo"
            placeholder="Ingrese un título para el tour"
          />
          <InputText name="slug" label="Slug" placeholder="slug" />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5">
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
              <option defaultValue>Selecciona un estado</option>
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

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="destacado"
              className="block text-gray-700 text-left text-sm"
            >
              Categorias
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <label className="cursor-pointer my-2 text-secondary-500 text-md">
                <input type="checkbox" className="mr-2" />
                Cata de Vinos y Licores
              </label>
              <label className="cursor-pointer my-2 text-secondary-500 text-md">
                <input type="checkbox" className="mr-2" />
                Naturaleza y paisaje
              </label>
              <label className="cursor-pointer my-2 text-secondary-500 text-md">
                <input type="checkbox" className="mr-2" />
                Rutas y Recorridos
              </label>
              <label className="cursor-pointer my-2 text-secondary-500 text-md">
                <input type="checkbox" className="mr-2" />
                Turismo Ecológico
              </label>
              <label className="cursor-pointer my-2 text-secondary-500 text-md">
                <input type="checkbox" className="mr-2" />
                Turismo Gastronómico
              </label>
              <label className="cursor-pointer my-2 text-secondary-500 text-md">
                <input type="checkbox" className="mr-2" />
                Turismo de Sol y Playa
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="horarios"
            label="Horarios"
            placeholder="Ingrese algunos horarios"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <TextArea
            label="Descripción Corta"
            name="DescripcionCorta"
            rows="1"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <TextArea
            label="Descripción Larga"
            name="DescripcionLarga"
            rows="2"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="itinerario"
            label="Itinerario"
            placeholder="Itinerario"
          />
          <InputText
            name="puntoPartida"
            label="Punto de partida"
            placeholder="Punto de Partida"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="incluye"
            label="Incluye"
            placeholder="Ingresar lo que incluye"
          />

          <InputText
            name="noIncluye"
            label="No Incluye"
            placeholder="Ingresar lo que no incluye"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="actividades"
            label="Actividades"
            placeholder="Ingresa las actividades"
          />
          <InputText
            name="notas"
            label="Notas"
            placeholder="Ingresa algunas notas"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <TextArea
            label="Politicas de cancelación"
            name="politicas"
            placeholder="Politicas de cancelación"
            rows="1"
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

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="videoPresentacion"
            label="Video de Presentacion"
            placeholder="Ingresa el video"
            type="file"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
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
      </form>
    </div>
  )
}

export default CrearTour
