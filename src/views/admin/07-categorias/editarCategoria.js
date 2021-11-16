import { useEffect, useState } from 'react'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import Button from '../../../components/Buttons/Button'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import InputText from '../../../components/Forms/InputText/InputText'
import iconoAdd from '../../../assets/imgs/add.png'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'
import { useModal } from '../../../hooks/useModal'
import Modal from '../../../components/Modales/Modal'
import Galerias from '../08-galerias'
import UseForm from '../../../hooks/UseForm'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import swal from 'sweetalert'
import { useCategoriasServices } from '../../../services/useCategoriaServices'
import { useHistory, useLocation } from 'react-router'
const initialForm = {
  titulo: '',
  descripcion: ''
}
const validationsForm = (form) => {
  // eslint-disable-next-line prefer-const
  let errors = {}
  if (!form.titulo.trim()) {
    errors.titulo = 'El campo Título es requerido'
  }

  if (!form.descripcion.trim()) {
    errors.descripcion = 'Debe de poner alguna descripcion '
  }
  return errors
}

const otherErrors = {}

const EditarCategoria = () => {
  const history = useHistory()
  const { state: objetoCategoria } = useLocation()
  const { updateCategoria, errorUpdate } = useCategoriasServices()
  const { form, handleInputChange, handleBlur, errors } = UseForm(
    initialForm,
    validationsForm
  )
  const [seleccionarImagen, setSeleccionarImagen] = useState(1)
  const [estado, setEstado] = useState(false)
  const [destacado, setDestacado] = useState(false)
  const [keywords, setKeywords] = useState([])
  const [textKeywords, setTextKeywords] = useState('')
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const handleImg1 = () => {
    setSeleccionarImagen(1)
    openModal()
  }
  const eliminarItem = (value, data, setData) => {
    if (data.length === 0) {
      setData([])
    } else {
      const newData = data.filter((item) => item !== value)
      setData(newData)
    }
  }
  const eliminarDuplicado = (data) => {
    const newData = new Set(data)
    return [...newData]
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (keywords.length > 0) {
      updateCategoria({
        id: objetoCategoria.categoriaId,
        titulo: form.titulo,
        keywords: eliminarDuplicado(keywords),
        estado: estado ? 'Activo' : 'Inactivo',
        destacado: destacado ? 'Activo' : 'Inactivo',
        descripcion: form.descripcion,
        idImgPrincipal: 12,
        idImgSecundaria: 4
      })
      console.log(errorUpdate)
      if (errorUpdate) {
        swal({
          title: 'ERROR',
          text: 'OACURRIO UN ERROR EN EL SERVIDOR',
          icon: 'error',
          button: 'Aceptar',
          timer: 2000
        })
      } else {
        history.push('/categorias')
      }
    } else {
      swal({
        title: 'DATOS INCOMPLETOS',
        text: 'Complete todos los datos requeridos',
        icon: 'warning',
        button: 'Aceptar',
        timer: 2000
      })
    }
  }

  useEffect(() => {
    form.titulo = objetoCategoria.tituloCategoria
    form.descripcion = objetoCategoria.descripcion
    setDestacado(objetoCategoria?.destacadoCategoria === 'Activo' && true)
    setEstado(objetoCategoria?.estadoCategoria === 'Activo' && true)
    setKeywords(objetoCategoria?.keywordsCategoria.split(','))
    if (keywords.length === 0) {
      otherErrors.keywords = '( Ingrese al menos una keyword )'
    }
  }, [])
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Editar Categoria</Heading>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:shadow-md lg:px-4 px-0 mx-auto py-10"
      >
        <div className="flex flex-col lg:flex-row items-start lg:space-x-4 mb-5 gap-y-5">
          <div className="w-full">
            <InputText
              name="titulo"
              label="Titulo"
              placeholder="Ingrese el nombre para la categoría"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={form.titulo}
              required
            />
            {errors.titulo && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.titulo}
              </p>
            )}
          </div>

          <div className="w-full relative">
            {keywords.length === 0 && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1 absolute -top-2 left-15">
                {otherErrors.keywords}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="rounded-full absolute right-2 bg-white top-8  p-1 cursor-pointer"
              onClick={() => {
                if (textKeywords.trim() !== '') {
                  setKeywords((estado) => [...estado, textKeywords.trim()])
                  setTextKeywords('')
                }
              }}
            />
            <InputText
              name="keywords"
              label="Keywords"
              placeholder="Ingrese las Keywords"
              onChange={(e) => {
                setTextKeywords(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  if (textKeywords.trim() !== '') {
                    setKeywords((estado) => [...estado, textKeywords.trim()])
                    setTextKeywords('')
                  }
                }
              }}
              value={textKeywords}
            />
            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(keywords).map((item) => (
                <div
                  key={item}
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() => eliminarItem(item, keywords, setKeywords)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">{item}</p>
                </div>
              ))}
            </div>
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
            <div
              className="ml-7 cursor-pointer"
              onClick={() => setEstado(!estado)}
            >
              <BtnEstado estado={estado} />
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
              className="ml-7 cursor-pointer"
            >
              <BtnDestacado estado={destacado} />
            </div>
          </div>
        </div>

        <div className="flex flex-col  lg:space-x-4  mb-5">
          <TextArea
            label="Descripción"
            name="descripcion"
            rows="4"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={form.descripcion}
            required
          />
          {errors.descripcion && (
            <p className="text-sm text-red-500 font-medium mt-2 ml-1">
              {errors.descripcion}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-5 sm:flex-row lg:space-x-4 items-center my-10 ">
          <div className="sm:w-1/2 flex flex-col items-center justify-evenly w-full py-4 gap-y-5 shadow-lg">
            <div className="max-w-30 max-h-30">
              <img
                src=""
                alt=""
                className="text-gray-500 text-md text-center w-full h-full object-cover "
              />
            </div>
            <Button onClick={handleImg1} className="btn1">
              Imágen Principal
            </Button>
          </div>
          <div className="sm:w-1/2 flex flex-col gap-y-5 items-center justify-evenly w-full shadow-lg py-4">
            <div className=" max-w-30 max-h-30 ">
              <img
                src=""
                alt=""
                className="text-gray-500 text-md text-center w-full h-full object-cover"
              />
            </div>
            <Button>Imágen Secundaria</Button>
          </div>
        </div>
        <div className="my-10 text-center">
          <Button variant="primary" size="lg" type="submit">
            ACTUALIZAR
          </Button>
        </div>
      </form>
      <Modal closeModal={closeModal} isOpen={isOpenModal}>
        <Galerias
          opcion="botonEscoger"
          seleccionarImagen={seleccionarImagen}
          closeModalGaleria={closeModal}
        />
      </Modal>
    </div>
  )
}

export default EditarCategoria
