import Heading from '../../../components/Heading'
import InputText from '../../../components/Forms/InputText/InputText'
import { IconBackArrow } from '../../../assets/icons/icons'
import Button from '../../../components/Buttons/Button'
import { useHistory } from 'react-router'

const EditarOferta = () => {
  const history = useHistory()
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-center pt-3 relative">
        <span
          onClick={() => history.goBack()}
          className="absolute left-0 top-0 cursor-pointer text-primary hover:bg-primary hover:text-white rounded-full"
        >
          <IconBackArrow />
        </span>
        <Heading>Editar Oferta</Heading>
      </div>
      <form
        onSubmit={() => { }}
        className="w-full max-w-xl lg:px-4 px-0 mx-auto"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-3">
          <InputText
            name="oferta"
            label="Oferta"
            placeholder="Ingrese el tipo de oferta"
          />
          <InputText name="titulo" label="Titulo" placeholder="Ingrese el Titulo" />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-3">
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <InputText
              name="imagen"
              label="Imagen"
              placeholder="Ingresa la imágen"
              type="file"
            />
          </div>
        </div>
        <div className="my-10 text-center">
          <Button variant="primary" size="lg">
            EDITAR OFERTA
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditarOferta
