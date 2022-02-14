import InputText from '../../../components/Forms/InputText/InputText'
import { useHistory } from 'react-router'
import { IconBackArrow } from '../../../assets/icons/icons'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'

const CrearCliente = () => {
  const history = useHistory()
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
      <form onSubmit={() => {}} className="w-full  lg:px-4 px-0 mx-auto py-10">
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
