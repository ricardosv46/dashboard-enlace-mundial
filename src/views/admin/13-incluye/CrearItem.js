import { useEffect, useState } from 'react'
import Button from '../../../components/Buttons/Button'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import InputText from '../../../components/Forms/InputText/InputText'
import iconoAdd from '../../../assets/imgs/add.png'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'
import UseForm from '../../../hooks/UseForm'
import swal from 'sweetalert'
import { useCategoriasServices } from '../../../services/useCategoriaServices'
import SelectImage from '../../../components/SelectImage'
import { useHistory } from 'react-router'
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

const CrearItem = () => {
  const history = useHistory()
  const { createCategoria, errorCreate } = useCategoriasServices()
  const { form, handleInputChange, handleBlur, errors, resetForm } = UseForm(
    initialForm,
    validationsForm
  )
  const [mainImage, setMainImage] = useState(null)
  const [secondaryImage, setSecondaryImage] = useState(null)
  const [keywords, setKeywords] = useState([])
  const [textKeywords, setTextKeywords] = useState('')

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

    if (keywords.length > 0 && mainImage && secondaryImage) {
      createCategoria({
        titulo: form.titulo,
        keywords: eliminarDuplicado(keywords),
        descripcion: form.descripcion,
        idImgPrincipal: mainImage.id,
        idImgSecundaria: secondaryImage.id
      })
      // console.log(errorCreate)
      if (errorCreate) {
        swal({
          title: 'ERROR',
          text: 'OACURRIO UN ERROR EN EL SERVIDOR',
          icon: 'error',
          button: 'Aceptar',
          timer: 2000
        })
      } else {
        resetForm()
        setKeywords([])
        setSecondaryImage(null)
        setMainImage(null)
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
    if (keywords.length === 0) {
      otherErrors.keywords = '( Ingrese al menos una keyword )'
    }
  }, [handleSubmit])
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Crear Nueva Categoria</Heading>
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
        <p className="mb-3 text-gray-700 text-left text-sm">
          Agregar imagen principal y secundaria
        </p>
        <div className="grid grid-cols-auto gap-4 max-w-4xl mx-auto mb-5">
          <div className="aspect-w-16 aspect-h-9">
            {/* La propiedad value recibe un objecto con id, url y descripcion */}
            {/* La propiedad onChange devuelve un objecto con id, url y descripcion */}
            <SelectImage
              label="Agregar imagen principal"
              onChange={(img) => setMainImage(img)}
              value={mainImage}
            />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <SelectImage
              label="Agregar imagen secundaria"
              onChange={(img) => setSecondaryImage(img)}
              value={secondaryImage}
            />
          </div>
        </div>

        <div className="my-10 text-center">
          <Button variant="primary" size="lg" type="submit">
            CREAR
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CrearItem
