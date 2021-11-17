import { useState } from 'react'
import InputText from '../../../components/Forms/InputText/InputText'
import InputToggle from '../../../components/Forms/InputToggle/InputToggle'
import { useHistory } from 'react-router'
import { IconBackArrow } from '../../../assets/icons/icons'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import { useModal } from '../../../hooks/useModal'
import Galerias from '../08-galerias'
import Modal from '../../../components/Modales/Modal'

const CrearCliente = () => {
  const history = useHistory()
  const [Toggle, SetToggle] = useState(false)
  const [isOpenModal, openModal, closeModal] = useModal(false)
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex justify-center pt-3 relative">
        <span
          onClick={() => history.goBack()}
          className="absolute left-0 top-0 cursor-pointer text-primary hover:bg-primary hover:text-white rounded-full"
        >
          <IconBackArrow />
        </span>
        <Heading>Crear Nuevo Cliente</Heading>
      </div>
      <form onSubmit={() => { }} className="w-full  lg:px-4 px-0 mx-auto py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5 gap-y-5">
          <InputText
            name="nombres"
            label="Nombres"
            placeholder="Ingrese el Nombre"
          />
          <InputText
            name="apellidos"
            label="Apellidos"
            placeholder="Ingrese el Apellidos"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-10 gap-y-5">
          <div className="flex flex-col w-full ">
            <InputText
              name="email"
              label="Email"
              placeholder="Ingrese el Email"
            />
          </div>
          <div className="flex flex-col w-full ">
            <p className="block text-gray-700 text-left text-sm">Estado</p>
            <div className="h-full flex mt-2 items-center justify-start">
              <InputToggle Toggle={Toggle} SetToggle={SetToggle} box="box" />
            </div>
          </div>
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

export default CrearCliente
