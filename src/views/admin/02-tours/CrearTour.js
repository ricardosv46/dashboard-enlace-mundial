import React, { useState } from 'react'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import Button from '../../../components/Buttons/Button'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import InputText from '../../../components/Forms/InputText/InputText'
import InputToggle from '../../../components/Forms/InputToggle/InputToggle'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'

const CrearTour = () => {
  const [destacado, setDestacado] = useState(false)
  // console.log(destacado)
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
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="categorias"
              className="block text-gray-700 text-left text-sm"
            >
              Categorias
            </label>
            <select
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              id="categorias"
              name="categorias"
              autoComplete="off"
            >
              <option defaultValue className="cursor-pointer">
                Selecciona
              </option>
              <option>CATA DE VINO Y LICORES</option>
              <option>NATURALEZA Y PAISAJES</option>
              <option value="">RUTAS Y RECORRIDOS</option>
              <option value="">TURISMO ECOLÓGICO</option>
              <option value="">TURISMOS GASTRONÓMICO</option>
              <option value="" className="cursor-pointer">
                TURISMO DE SOL Y PLAYA
              </option>
            </select>
          </div>
        </div>

        <div className="flex justify-between sm:justify-around lg:justify-start  my-5">
          <div className="flex  items-center lg:w-full">
            <label
              htmlFor="estado"
              className="block text-gray-700 text-left text-sm"
            >
              Estado
            </label>
            <div className="ml-7" >
              <InputToggle />
            </div>
          </div>
          <div className="flex  items-center lg:w-full ml-4">
            <label
              htmlFor="destacado"
              className="block text-gray-700 text-left text-sm"
            >
              Destacado
            </label>
            <div
              onClick={() => setDestacado(!destacado)}
              className="ml-7"
            >
              <BtnDestacado disabled={false} />
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
