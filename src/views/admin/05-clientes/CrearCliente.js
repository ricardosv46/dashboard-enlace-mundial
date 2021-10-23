import { useState } from 'react'
import InputText from '../../../components/Forms/InputText/InputText'
import InputToggle from '../../../components/Forms/InputToggle/InputToggle'
import { useHistory } from 'react-router'
import { IconBackArrow } from '../../../assets/icons/icons'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'

const CrearCliente = () => {
  const history = useHistory()
  const [Toggle, SetToggle] = useState(false)
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-center pt-3 relative">
        <span
          onClick={() => history.goBack()}
          className="absolute left-0 top-0 cursor-pointer text-primary hover:bg-primary hover:text-white rounded-full"
        >
          <IconBackArrow />
        </span>
        <Heading>Crear Nuevo Cliente</Heading>
      </div>
      <form
        onSubmit={() => { }}
        className="w-full max-w-xl lg:px-4 px-0 mx-auto"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-3">
          <InputText
            name="nombres"
            label="Nombres"
            placeholder="Ingrese el Nombre"
          />
          <InputText name="apellidos" label="Apellidos" placeholder="Ingrese el Apellidos" />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-3">
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <InputText name="email" label="Email" placeholder="Ingrese el Email" />
          </div>
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <p className="block text-gray-700 text-left text-sm">Estado</p>
            <div className="h-full flex mt-2 items-center justify-start">
              <InputToggle Toggle={Toggle} SetToggle={SetToggle} />
            </div>

          </div>

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

export default CrearCliente
