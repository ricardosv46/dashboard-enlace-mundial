import React, { useState } from 'react'
import BtnDestacado from '../../../../components/BtnDestacado/BtnDestacado'
import Button from '../../../../components/Buttons/Button'
import ButtonBack from '../../../../components/Buttons/ButtonBack'
import InputText from '../../../../components/Forms/InputText/InputText'
import InputToggle from '../../../../components/Forms/InputToggle/InputToggle'
import TextArea from '../../../../components/Forms/TextArea'
import Heading from '../../../../components/Heading'
import { useModal } from '../../../../hooks/useModal'
import Modal from '../../../../components/Modales/Modal'
import Galerias from '../../08-galerias'
const CrearCategoriaBlog = () => {
  const [destacado, setDestacado] = useState(false)
  // console.log(destacado)
  const [isOpenModal, openModal, closeModal] = useModal(false)
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Crear Nueva Categoria</Heading>
      </div>
      <form
        onSubmit={() => { }}
        className="w-full lg:shadow-md lg:px-4 px-0 mx-auto py-10"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5 gap-y-5">
          <InputText
            name="titulo"
            label="Titulo"
            placeholder="Ingrese el nombre para la categoría"
          />
          <InputText
            name="keywords"
            label="Keywords"
            placeholder="Ingrese las Keywords"
          />

        </div>

        <div className="flex justify-between sm:justify-around lg:justify-start  my-5">
          <div className="flex  items-center lg:w-full">
            <label
              htmlFor="estado"
              className="block text-gray-700 text-left text-sm"
            >
              Estado
            </label>
            <div className="ml-7">
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
            <div onClick={() => setDestacado(!destacado)} className="ml-7">
              <BtnDestacado disabled={false} />
            </div>
          </div>
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

        <div className="flex flex-col gap-y-5 sm:flex-row lg:space-x-4 items-center mb-5 ">
          <div className="sm:w-1/2 flex items-center justify-evenly w-full ">
            <Button onClick={openModal}>Imágen Principal</Button>
            <div className="border-dashed border-2 border-primary w-30 h-30 shadow-lg">
              <img
                src=""
                alt="sube la imágen principal"
                className="text-gray-500 text-md text-center "
              />
            </div>
          </div>
          <div className="sm:w-1/2 flex items-center justify-evenly w-full">
            <Button onClick={openModal}>Imágen Secundaria</Button>
            <div className="border-dashed w-30 h-30 border-2 border-primary shadow-lg">
              <img
                src=""
                alt="sube la imágen secundaria"
                className="text-gray-500 text-md text-center "
              />
            </div>
          </div>
        </div>
        <div className="my-10 text-center">
          <Button variant="primary" size="lg">
            CREAR
          </Button>
        </div>
      </form>
      <Modal closeModal={closeModal} isOpen={isOpenModal}>
        <Galerias opcion={true} />
      </Modal>
    </div>
  )
}

export default CrearCategoriaBlog
