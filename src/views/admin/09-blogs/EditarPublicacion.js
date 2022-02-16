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
const initialForm = {
  titulo: '',
  descripcionCorta: '',
  descripcionLarga: '',
  categorias: ''
}
const validationsForm = (form) => {
  // eslint-disable-next-line prefer-const
  let errors = {}
  if (!form.titulo.trim()) {
    errors.titulo = 'El campo Título es requerido'
  }
  if (!form.categorias.trim()) {
    errors.categoria = 'Debe de Seleccionar una Categoria'
  }
  if (!form.descripcionLarga.trim()) {
    errors.descripcionLarga =
      'Debe de poner alguna descripción larga para la publicación'
  }
  if (!form.descripcionCorta.trim()) {
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

  const { db: dataCategoriaBlogs } = useCategoriasBlogServices()

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
      galery.length > 0
    ) {
      updateBlog({
        id: objetoBlog.blogId,
        titulo: form.titulo,
        slugCategoria: form.categorias,
        descripcionLarga: form.descripcionLarga,
        descripcionCorta: form.descripcionCorta,
        estado: objetoBlog.estadoBlog,
        destacado: objetoBlog.destacadoBlog,
        keywords: eliminarDuplicado(keywords),
        idImgPrincipal: mainImage.id,
        idImgSecundaria: secondaryImage.id,
        galeria: eliminarDuplicado(galery)
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
    form.titulo = objetoBlog.tituloBlog
    form.descripcionCorta = objetoBlog.descripcionCortaBlog
    form.descripcionLarga = objetoBlog.descripcionLargaBlog
    form.categorias = objetoBlog.slugCategoriaBlog
    setKeywords(objetoBlog?.keywordsBlog.split(','))
    setMainImage(objetoBlog.imagenPrincipalBlog)
    setSecondaryImage(objetoBlog.imagenSecundariaBlog)

    if (keywords.length === 0) {
      otherErrors.keywords = '( Ingrese al menos una keyword )'
    }
  }, [])

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Editar Publicación</Heading>
      </div>
      <form
        onSubmit={() => {}}
        className="w-full lg:shadow-md lg:px-4 px-0 mx-auto py-10"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5">
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
            <p className="text-sm text-red-500 font-medium mt-2 ml-1">
              {errors.titulo}
            </p>
          )}
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
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.categoria}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col  lg:space-x-4  mb-5">
          <TextArea
            label="Descripción Larga"
            name="descripcionLarga"
            rows="2"
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={form.descripcionLarga}
          />
          {errors.descripcionLarga && (
            <p className="text-sm text-red-500 font-medium mt-2 ml-1">
              {errors.descripcionLarga}
            </p>
          )}
        </div>
        <div className="flex flex-col lg:space-x-4 mb-5">
          <TextArea
            label="Descripción Corta"
            name="descripcionCorta"
            rows="1"
            onBlur={handleBlur}
            onChange={handleInputChange}
            value={form.descripcionCorta}
          />
          {errors.descripcionCorta && (
            <p className="text-sm text-red-500 font-medium mt-2 ml-1">
              {errors.descripcionCorta}
            </p>
          )}
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
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
        <p className="mb-3 text-gray-700 text-left text-sm">
          Agregar imagen a la galeria
        </p>
        {/* La propiedad value recibe un Array de objetos con id, url y descripcion */}
        {/* La propiedad onChange devuelve un Array de objetos con id, url y descripcion */}
        <SelectMultiImages
          onChange={(imgs) => {
            setGalery([])
            imgs.map((image) => setGalery([...galery, image.id]))
            // console.log(imgs)
          }}
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
