import Button from '../../../components/Buttons/Button'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import InputText from '../../../components/Forms/InputText/InputText'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'
import SelectImage from '../../../components/SelectImage'
import iconoAdd from '../../../assets/imgs/add.png'
import { useEffect, useState } from 'react'
import { useCategoriasBlogServices } from '../../../services/useCategoriasBlogServices'
import SelectMultiImages from '../../../components/SelectMultiImages'
import UseForm from '../../../hooks/UseForm'
import { useBlogsServices } from '../../../services/useBlogsServices'
import swal from 'sweetalert'
import { useHistory, useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'
import { isEmpty } from '../../../utils/isEmpty'
import EditorAdvanzado from '../../../components/EditorAdvanzado/EditorAdvanzado'
const initialForm = {
  titulo: '',
  descripcionCorta: '',
  categorias: ''
}
const validationsForm = (form) => {
  // eslint-disable-next-line prefer-const
  let errors = {}
  if (isEmpty(form.titulo)) {
    errors.titulo = 'El campo Título es requerido'
  }
  if (isEmpty(form.categorias)) {
    errors.categoria = 'Debe de Seleccionar una Categoria'
  }
  if (isEmpty(form.descripcionCorta)) {
    errors.descripcionCorta =
      'Debe de poner alguna descripción corta para la publicación'
  }

  return errors
}
const otherErrors = {}
const EditarPublicacion = () => {
  const { state: objetoBlog } = useLocation()
  const history = useHistory()
  const [keywords, setKeywords] = useState([])
  const [textKeywords, setTextKeywords] = useState('')
  const [galery, setGalery] = useState([])
  const [mainImage, setMainImage] = useState(null)
  const [secondaryImage, setSecondaryImage] = useState(null)
  const { form, handleInputChange, handleBlur, errors, resetForm } = UseForm(
    initialForm,
    validationsForm
  )
  const { updateBlog } = useBlogsServices()
  const [descripcionLarga, setDescripcionLarga] = useState('')
  const { db: dataCategoriaBlogs, loading } = useCategoriasBlogServices()

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
    if (
      keywords.length > 0 &&
      mainImage &&
      secondaryImage &&
      galery.length > 0 &&
      descripcionLarga.length > 0
    ) {
      updateBlog({
        id: objetoBlog.blogId,
        titulo: form.titulo,
        slugCategoria: form.categorias,
        descripcionLarga,
        descripcionCorta: form.descripcionCorta,
        estado: objetoBlog.estadoBlog,
        destacado: objetoBlog.destacadoBlog,
        keywords: eliminarDuplicado(keywords),
        idImgPrincipal: mainImage.id,
        idImgSecundaria: secondaryImage.id,
        galeria: galery.map((img) => img.id)
      }).then((res) => {
        if (res === 'exito') {
          resetForm()
          setKeywords([])
          setMainImage(null)
          setSecondaryImage(null)
          setGalery([])
          toast.success('Se actualizo el Blog')
          history.push('/blogs')
        } else {
          toast.success('No se pudo actualizar el Blog')
        }
      })
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
    console.log({ objetoBlog })
    form.titulo = objetoBlog.tituloBlog
    form.descripcionCorta = objetoBlog.descripcionCortaBlog
    setDescripcionLarga(objetoBlog.descripcionLargaBlog)
    form.categorias = objetoBlog.slugCategoriaBlog
    setKeywords(objetoBlog?.keywordsBlog.split(','))
    setMainImage(objetoBlog.imagenPrincipalBlog)
    setSecondaryImage(objetoBlog.imagenSecundariaBlog)
    setGalery(objetoBlog?.galeriaBlog || [])
  }, [])

  useEffect(() => {
    if (keywords.length === 0) {
      otherErrors.keywords = '( Ingrese al menos una keyword )'
    }
    if (isEmpty(descripcionLarga)) {
      otherErrors.descripcionLarga = 'Debe de poner alguna descripción larga para la publicación'
    }
  }, [descripcionLarga, keywords])

  return (
    <div className="p-5 py-10 bg-white shadow md:rounded md:p-10 animate__fadeIn animate__animated">
      <div className="relative flex justify-center pt-3">
        <ButtonBack />

        <Heading>Editar Publicación</Heading>
      </div>
      <form
        onSubmit={() => { }}
        className="w-full px-0 py-10 mx-auto lg:shadow-md lg:px-4"
      >
        <div className="flex flex-col mb-5 lg:flex-row lg:space-x-4">
          <InputText
            name="titulo"
            label="Titulo"
            placeholder="Ingrese un título para tu Publicación"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={form.titulo}
            required
          />
          {errors.titulo && (
            <p className="mt-2 ml-1 text-sm font-medium text-red-500">
              {errors.titulo}
            </p>
          )}
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="categorias"
              className="block text-sm text-left text-gray-700"
            >
              Categorias
            </label>
            <select
              className="w-full px-4 py-3 mt-2 text-sm text-black transition duration-150 ease-in bg-gray-200 border rounded-lg cursor-pointer focus:border-blue-500 focus:bg-white focus:outline-none"
              id="categorias"
              name="categorias"
              autoComplete="off"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={form.categorias}
              required
            >
              <option defaultValue className="cursor-pointer">
                Selecciona
              </option>
              {dataCategoriaBlogs.map((categoria) => (
                <option
                  key={categoria.categoriaBlogId}
                  value={categoria.slugCategoriaBlog}
                >
                  {categoria.tituloCategoriaBlog}
                </option>
              ))}
            </select>{' '}
            {errors.categoria && (
              <p className="mt-2 ml-1 text-sm font-medium text-red-500">
                {errors.categoria}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col mb-5 lg:space-x-4">
          {!loading &&
            <EditorAdvanzado titulo='Descripcion Larga' content={descripcionLarga} setContent={setDescripcionLarga} />}
          {descripcionLarga.length === 0 && (
            <p className="mt-2 ml-1 text-sm font-medium text-red-500">
              {otherErrors.descripcionLarga}
            </p>
          )}
        </div>
        <div className="flex flex-col mb-5 lg:space-x-4">
          <TextArea
            label="Descripción Corta"
            name="descripcionCorta"
            rows="1"
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={form.descripcionCorta}
          />
          {errors.descripcionCorta && (
            <p className="mt-2 ml-1 text-sm font-medium text-red-500">
              {errors.descripcionCorta}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center mb-5 lg:flex-row lg:space-x-4">
          <div className="relative w-full">
            {keywords.length === 0 && (
              <p className="absolute mt-2 ml-1 text-sm font-medium text-red-500 -top-2 left-15">
                {otherErrors.keywords}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="absolute p-1 bg-white rounded-full cursor-pointer right-2 top-8"
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
                  className="flex items-center px-2 cursor-pointer gap-x-3 "
                  onClick={() => eliminarItem(item, keywords, setKeywords)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="inline-block text-sm text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mb-3 text-sm text-left text-gray-700">
          Agregar imagen principal y secundaria
        </p>
        <div className="grid max-w-4xl gap-4 mx-auto mb-5 grid-cols-auto">
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
        <p className="mb-3 text-sm text-left text-gray-700">
          Agregar imagen a la galeria
        </p>
        <SelectMultiImages
          setGalery={setGalery}
          galery={galery}
        />
        <div className="my-10 text-center">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            ACTUALIZAR
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditarPublicacion
