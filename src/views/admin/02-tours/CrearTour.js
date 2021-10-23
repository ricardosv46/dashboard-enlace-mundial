import React from 'react'
import InputText from '../../../components/Forms/InputText/InputText'

const CrearTour = () => {
  return (
    <form onSubmit={() => {}} className="w-full max-w-xl lg:px-4 px-0 mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-4 mb-3">
        <div className="flex flex-col w-full mb-4 lg:mb-0">
          <label
            htmlFor="titulo"
            className="block text-gray-700 text-left text-sm"
          >
            Titulo
          </label>

          <input
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autoComplete="off"
            required
            id="titulo"
            name="titulo"
            type="text"
            placeholder="Título de la guía"
          />
        </div>

        <div className="flex flex-col w-full">
          <InputText name="slug" label="Slug" placeholder="slug" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4 mb-3">
        <div className="flex flex-col w-full mb-4 lg:mb-0">
          <label className="block text-gray-700 text-left text-sm">
            Cantidad de bultos
          </label>
          <input
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
            id="Bultos"
            name="Bultos"
            type="number"
            placeholder="Ingresa la cantidad de Bultos"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="Peso"
            className="block text-gray-700 text-left text-sm"
          >
            Peso
          </label>
          <input
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
            id="Peso"
            name="Peso"
            type="number"
            placeholder="Ingresa Peso"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-3">
        <div className="flex flex-col w-full mb-4 lg:mb-0">
          <label
            htmlFor="Serie"
            className="block text-gray-700 text-left text-sm"
          >
            Serie
          </label>
          <input
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
            id="Serie"
            name="Serie"
            type="text"
            placeholder="Ingresa Serie"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="Numero"
            className="block text-gray-700 text-left text-sm"
          >
            Número
          </label>
          <input
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
            id="Numero"
            name="Numero"
            type="number"
            placeholder="Ingresa Numero"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-3">
        <div className="flex flex-col w-full mb-4 lg:mb-0">
          <label
            htmlFor="SerieGT"
            className="block text-gray-700 text-left text-sm"
          >
            Serie GT
          </label>
          <input
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
            id="SerieGT"
            name="SerieGT"
            type="text"
            placeholder="Ingresa SerieGT"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="NumeroGT"
            className="block text-gray-700 text-left text-sm"
          >
            Número GT
          </label>
          <input
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
            id="NumeroGT"
            name="NumeroGT"
            type="number"
            placeholder="Ingresa NumeroGT"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-3">
        <div className="flex flex-col w-full mb-4 lg:mb-0">
          <label
            htmlFor="Llegada"
            className="block text-gray-700 text-left text-sm"
          >
            Llegada
          </label>
          <input
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
            id="Llegada"
            name="Llegada"
            type="text"
            placeholder="Ingresa Llegada"
          />
        </div>

        <div className="flex flex-col w-full mb-4 lg:mb-0">
          <label
            htmlFor="IdDestino"
            className="block text-gray-700 text-left text-sm"
          >
            Destino
          </label>
          <select
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            id="IdDestino"
            name="IdDestino"
            autoComplete="off"
            placeholder="Destino"
          >
            <option defaultValue></option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-3">
        <div className="flex flex-col w-full">
          <label
            htmlFor="IdEstado"
            className="block text-gray-700 text-left text-sm"
          >
            Estado
          </label>
          <select
            className="w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            type="text"
            id="IdEstado"
            name="IdEstado"
            autoComplete="off"
          ></select>
        </div>
        <div className="flex flex-col w-full"></div>
      </div>

      <button className="w-full md:max-w-max mt-4 btn-primary px-4">
        Enviar
      </button>
    </form>
  )
}

export default CrearTour
