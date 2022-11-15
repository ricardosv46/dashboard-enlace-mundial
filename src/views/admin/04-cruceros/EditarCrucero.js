import { useEffect, useState } from 'react'
import iconoAdd from '../../../assets/imgs/add.png'
import Button from '../../../components/Buttons/Button'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import InputText from '../../../components/Forms/InputText/InputText'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'
import { useCategoriasServices } from '../../../services/useCategoriaServices'
import UseForm from '../../../hooks/UseForm'
import { Ciudades, Regiones } from '../../../data/dataPeru'
import { useHistory, useLocation } from 'react-router'
import SelectImage from '../../../components/SelectImage'
import SelectMultiImages from '../../../components/SelectMultiImages'
import { useCruceroServices } from '../../../services/useCruceroServices'
import toast from 'react-hot-toast'
import { isEmail } from '../../../utils/isEmail'
import EditorAdvanzado from '../../../components/EditorAdvanzado/EditorAdvanzado'
const initialForm = {
  titulo: '',
  categorias: '',
  region: '',
  ciudad: '',
  precioBase: '',
  descripcionCorta: '',
  puntoPartida: '',
  video: ''
}
const validationsForm = (form) => {
  // eslint-disable-next-line prefer-const
  let errors = {}
  if (isEmail(form.titulo)) {
    errors.titulo = 'El campo Título es requerido'
  }
  if (isEmail(form.categorias)) {
    errors.categoria = 'Debe de Seleccionar una Categoria'
  }
  if (isEmail(form.region)) {
    errors.region = 'Debe de Seleccionar una Region'
  }
  if (isEmail(form.ciudad)) {
    errors.ciudad = 'Debe de Seleccionar una Ciudad'
  }
  if (isEmail(form.puntoPartida)) {
    errors.puntoPartida = 'Debe de Ingresar un punto de partida'
  }
  return errors
}
const otherErrors = {}

const EditarCrucero = () => {
  const history = useHistory()
  const { state: objetoCrucero } = useLocation()
  const { db: dataCategoria } = useCategoriasServices()
  const { updateCrucero, loading } = useCruceroServices()
  const { form, handleInputChange, handleBlur, errors } = UseForm(
    initialForm,
    validationsForm
  )
  const [incluye, setIncluye] = useState([])
  const [textIncluye, setTextIncluye] = useState('')
  const [noIncluye, setNoIncluye] = useState([])
  const [textNoIncluye, setTextNoIncluye] = useState('')
  const [actividades, setActividades] = useState([])
  const [textAactividades, setTextActividaes] = useState('')
  const [textItinerario, setTextItinerario] = useState('')
  const [itinerario, setItinerario] = useState([])
  const [textNotas, setTextNotas] = useState('')
  const [keywords, setKeywords] = useState([])
  const [textKeywords, setTextKeywords] = useState('')
  const [politicas, setPoliticas] = useState([])
  const [textPoliticas, setTextPoliticas] = useState('')
  const [notas, setNotas] = useState([])
  const [mainImage, setMainImage] = useState(null)
  const [secondaryImage, setSecondaryImage] = useState(null)
  const [galery, setGalery] = useState([])
  const [descripcionLarga, setDescripcionLarga] = useState('')
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      itinerario.length > 0 &&
      incluye.length > 0 &&
      noIncluye.length > 0 &&
      actividades.length > 0 &&
      notas.length > 0 &&
      keywords.length > 0 &&
      politicas.length > 0 &&
      mainImage &&
      secondaryImage &&
      galery.length > 0 && descripcionLarga.length > 0
    ) {
      await updateCrucero({
        id: objetoCrucero.cruceroId,
        titulo: form.titulo,
        slugCategoria: form.categorias,
        region: form.region,
        ciudad: form.ciudad,
        descripcionCorta: form.descripcionCorta,
        descripcionLarga,
        itinerario: eliminarDuplicado(itinerario),
        puntoPartida: form.puntoPartida,
        incluye: eliminarDuplicado(incluye),
        noIncluye: eliminarDuplicado(noIncluye),
        actividades: eliminarDuplicado(actividades),
        notas: eliminarDuplicado(notas),
        politicas: eliminarDuplicado(politicas),
        video: form.video,
        precioBaseCrucero: form.precioBase,
        idImgPrincipal: mainImage.id,
        idImgSecundaria: secondaryImage.id,
        keywords: eliminarDuplicado(keywords),
        galeria: galery.map((img) => img.id)
      }).then((res) => {
        if (res === 'exito') {
          toast.success('Se actualizo el Crucero')
          history.push('/cruceros')
        } else {
          toast.error('Nose puedo actualizar el Crucero')
        }
      })
    }
  }

  useEffect(() => {
    form.titulo = objetoCrucero?.tituloCrucero
    form.categorias = objetoCrucero?.slugCategoria
    form.region = objetoCrucero?.regionCrucero
    form.ciudad = objetoCrucero?.ciudadCrucero
    form.descripcionLarga = objetoCrucero?.descripcionLargaCrucero
    form.descripcionCorta = objetoCrucero?.descripcionCortaCrucero
    form.puntoPartida = objetoCrucero?.puntoPartidaCrucero
    form.video = objetoCrucero?.videoPresentacionCrucero
    form.precioBase = objetoCrucero?.precioBaseCrucero
    setItinerario(objetoCrucero?.itinerarioCrucero.split(','))
    setIncluye(objetoCrucero?.incluyeCrucero.split(','))
    setNoIncluye(objetoCrucero?.noIncluyeCrucero.split(','))
    setActividades(objetoCrucero?.actividadesCrucero.split(','))
    setGalery(objetoCrucero?.galeriaCrucero || [])
    setNotas(objetoCrucero?.notasCrucero.split(','))
    setKeywords(objetoCrucero?.keywordsCrucero.split(','))
    setPoliticas(objetoCrucero?.politicasCrucero.split(','))
    setMainImage(objetoCrucero.imagenPrincipalCrucero)
    setSecondaryImage(objetoCrucero.imagenSecundariaCrucero)
    setDescripcionLarga(objetoCrucero?.descripcionLargaCrucero)
  }, [])

  useEffect(() => {
    if (itinerario.length === 0) {
      otherErrors.itinerario = '( Ingrese al menos un Itinerario )'
    }
    if (incluye.length === 0) {
      otherErrors.incluye = '( Ingrese al menos una opcion que incluya )'
    }
    if (noIncluye.length === 0) {
      otherErrors.noIncluye = '( Ingrese una opcion que no incluya )'
    }
    if (actividades.length === 0) {
      otherErrors.actividades = '( Ingrese al menos una actividad )'
    }
    if (notas.length === 0) {
      otherErrors.notas = '( Ingrese al menos una nota )'
    }
    if (keywords.length === 0) {
      otherErrors.keywords = '( Ingrese al menos una keyword )'
    }
    if (politicas.length === 0) {
      otherErrors.politicas = '( Ingrese una política )'
    }
    if (descripcionLarga.length === 0) {
      otherErrors.descripcionLarga = 'Debe de poner alguna descripción larga para la publicación'
    }
  }, [itinerario, incluye, noIncluye, actividades, notas, keywords, politicas, descripcionLarga])

  return (
    <div className="p-5 py-10 bg-white shadow md:rounded md:p-10 animate__fadeIn animate__animated">
      <div className="relative flex justify-center pt-3">
        <ButtonBack />

        <Heading>Editar Crucero</Heading>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full px-0 py-10 mx-auto lg:shadow-md lg:px-4"
      >
        <div className="flex flex-col mb-5 lg:flex-row lg:space-x-4 gap-y-5">
          <div className="w-full">
            <InputText
              name="titulo"
              label="Titulo"
              placeholder="Ingrese un título para el tour"
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
          </div>

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
              <option className="cursor-pointer" defaultValue>
                Selecciona una Categoria
              </option>
              {dataCategoria &&
                dataCategoria.map((item) => (
                  <option key={item.categoriaId} value={item.slugCategoria}>
                    {item.tituloCategoria}
                  </option>
                ))}
            </select>
            {errors.categoria && (
              <p className="mt-2 ml-1 text-sm font-medium text-red-500">
                {errors.categoria}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col mb-5 lg:flex-row lg:space-x-4">
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="region"
              className="block text-sm text-left text-gray-700"
            >
              Región
            </label>
            <select
              required
              className="w-full px-4 py-3 mt-2 text-sm text-black transition duration-150 ease-in bg-gray-200 border rounded-lg cursor-pointer focus:border-blue-500 focus:bg-white focus:outline-none"
              id="region"
              name="region"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={form.region}
            >
              <option className="cursor-pointer" defaultValue>
                Selecciona una Region
              </option>
              {Regiones.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && (
              <p className="mt-2 ml-1 text-sm font-medium text-red-500">
                {errors.region}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="ciudad"
              className="block text-sm text-left text-gray-700"
            >
              Ciudad
            </label>
            <select
              className="w-full px-4 py-3 mt-2 text-sm text-black transition duration-150 ease-in bg-gray-200 border rounded-lg cursor-pointer focus:border-blue-500 focus:bg-white focus:outline-none"
              id="ciudad"
              name="ciudad"
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              value={form.ciudad}
            >
              <option className="cursor-pointer" defaultValue>
                Selecciona una Ciudad
              </option>
              {Ciudades(form.region).map((ciudad) => (
                <option key={ciudad} value={ciudad}>
                  {ciudad}
                </option>
              ))}
            </select>
            {errors.ciudad && (
              <p className="mt-2 ml-1 text-sm font-medium text-red-500">
                {errors.ciudad}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col mb-5 lg:space-x-4">
          {!loading && <EditorAdvanzado titulo='Descripcion Larga' content={descripcionLarga} setContent={setDescripcionLarga} />}
          {descripcionLarga.length === 0 && (
            <p className="mt-2 ml-1 text-sm font-medium text-red-500">
              {otherErrors.descripcionLarga}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center mb-5 lg:flex-row lg:space-x-4">
          <TextArea
            label="Descripción Corta"
            name="descripcionCorta"
            rows="1"
            onChange={handleInputChange}
            value={form.descripcionCorta}
          />
        </div>

        <div className="flex flex-col items-start mb-5 lg:flex-row lg:space-x-4">
          <div className="relative w-full ">
            <img
              src={iconoAdd}
              alt=""
              className="absolute p-1 bg-white border rounded-full cursor-pointer right-2 top-8"
              onClick={() => {
                console.log(textItinerario)
                if (textItinerario.trim() !== '') {
                  setItinerario((estado) => [...estado, textItinerario.trim()])
                  setTextItinerario('')
                }
              }}
            />
            {itinerario.length === 0 && (
              <p className="absolute mt-2 ml-1 text-sm font-medium text-red-500 -top-2 left-15">
                {otherErrors.itinerario}
              </p>
            )}
            <InputText
              name="itinerario"
              label="Itinerario"
              placeholder="Ingrese el Itinerario"
              onChange={(e) => {
                setTextItinerario(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  if (textItinerario.trim() !== '') {
                    setItinerario((estado) => [
                      ...estado,
                      textItinerario.trim()
                    ])
                    setTextItinerario('')
                  }
                }
              }}
              value={textItinerario}
            />
            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(itinerario).map((item) => (
                <div
                  key={item}
                  className="flex items-center px-2 cursor-pointer gap-x-3 "
                  onClick={() => eliminarItem(item, itinerario, setItinerario)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="inline-block text-sm text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <InputText
              name="puntoPartida"
              onChange={handleInputChange}
              value={form.puntoPartida}
              label="Punto de partida"
              placeholder="Punto de Partida"
              onBlur={handleBlur}
              required
            />

            {errors.puntoPartida && (
              <p className="mt-2 ml-1 text-sm font-medium text-red-500">
                {errors.puntoPartida}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start mb-5 lg:flex-row lg:space-x-4">
          <div className="relative w-full">
            {incluye.length === 0 && (
              <p className="absolute mt-2 ml-1 text-sm font-medium text-red-500 -top-2 left-12">
                {otherErrors.incluye}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="absolute p-1 bg-white rounded-full cursor-pointer right-2 top-8"
              onClick={() => {
                if (textIncluye.trim() !== '') {
                  setIncluye((estado) => [...estado, textIncluye.trim()])
                  setTextIncluye('')
                }
              }}
            />
            <InputText
              name="incluye"
              label="Incluye"
              placeholder="Ingresar lo que incluye"
              onChange={(e) => {
                setTextIncluye(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  if (textIncluye.trim() !== '') {
                    setIncluye((estado) => [...estado, textIncluye.trim()])
                    setTextIncluye('')
                  }
                }
              }}
              value={textIncluye}
            />
            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(incluye).map((item) => (
                <div
                  key={item}
                  className="flex items-center px-2 cursor-pointer gap-x-3 "
                  onClick={() => eliminarItem(item, incluye, setIncluye)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="inline-block text-sm text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            {noIncluye.length === 0 && (
              <p className="absolute mt-2 ml-1 text-sm font-medium text-red-500 -top-2 left-15">
                {otherErrors.noIncluye}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="absolute p-1 bg-white rounded-full cursor-pointer right-2 top-8"
              onClick={() => {
                if (textNoIncluye.trim() !== '') {
                  setNoIncluye((estado) => [...estado, textNoIncluye.trim()])
                  setTextNoIncluye('')
                }
              }}
            />
            <InputText
              name="noIncluye"
              label="No Incluye"
              placeholder="Ingresar lo que no incluye"
              onChange={(e) => {
                setTextNoIncluye(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  if (textNoIncluye.trim() !== '') {
                    setNoIncluye((estado) => [...estado, textNoIncluye.trim()])
                    setTextNoIncluye('')
                  }
                }
              }}
              value={textNoIncluye}
            />
            <div className="flex flex-col gap-5 my-5 ">
              {eliminarDuplicado(noIncluye).map((item) => (
                <div
                  key={item}
                  className="flex items-center px-2 cursor-pointer gap-x-3 "
                  onClick={() => eliminarItem(item, noIncluye, setNoIncluye)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="inline-block text-sm text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mb-5 lg:flex-row lg:space-x-4">
          <div className="relative w-full">
            {actividades.length === 0 && (
              <p className="absolute mt-2 ml-1 text-sm font-medium text-red-500 -top-2 left-20">
                {otherErrors.actividades}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="absolute p-1 bg-white rounded-full cursor-pointer right-2 top-8"
              onClick={() => {
                if (textAactividades.trim() !== '') {
                  setActividades((estado) => [
                    ...estado,
                    textAactividades.trim()
                  ])
                  setTextActividaes('')
                }
              }}
            />
            <InputText
              name="actividades"
              label="Actividades"
              placeholder="Ingrese las Actividades"
              onChange={(e) => {
                setTextActividaes(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  if (textAactividades.trim() !== '') {
                    setActividades((estado) => [
                      ...estado,
                      textAactividades.trim()
                    ])
                    setTextActividaes('')
                  }
                }
              }}
              value={textAactividades}
            />
            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(actividades).map((item) => (
                <div
                  key={item}
                  className="flex items-center px-2 cursor-pointer gap-x-3 "
                  onClick={() =>
                    eliminarItem(item, actividades, setActividades)
                  }
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="inline-block text-sm text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full">
            {notas.length === 0 && (
              <p className="absolute mt-2 ml-1 text-sm font-medium text-red-500 -top-2 left-15">
                {otherErrors.notas}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="absolute p-1 bg-white rounded-full cursor-pointer right-2 top-8"
              onClick={() => {
                if (textNotas.trim() !== '') {
                  setNotas((estado) => [...estado, textNotas.trim()])
                  setTextNotas('')
                }
              }}
            />
            <InputText
              name="notas"
              label="Notas"
              placeholder="Ingrese algunas notas"
              onChange={(e) => {
                setTextNotas(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  if (textNotas.trim() !== '') {
                    setNotas((estado) => [...estado, textNotas.trim()])
                    setTextNotas('')
                  }
                }
              }}
              value={textNotas}
            />

            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(notas).map((item) => (
                <div
                  key={item}
                  className="flex items-center px-2 cursor-pointer gap-x-3 "
                  onClick={() => eliminarItem(item, notas, setNotas)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="inline-block text-sm text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mb-5 lg:flex-row lg:space-x-4">
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
          <div className="relative w-full">
            {politicas.length === 0 && (
              <p className="absolute mt-2 ml-1 text-sm font-medium text-red-500 -top-2 left-40">
                {otherErrors.politicas}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="absolute p-1 bg-white rounded-full cursor-pointer right-2 top-8"
              onClick={() => {
                if (textPoliticas.trim() !== '') {
                  setPoliticas((estado) => [...estado, textPoliticas.trim()])
                  setTextPoliticas('')
                }
              }}
            />
            <InputText
              name="politicasCancelacion"
              label="Políticas de Cancelación"
              placeholder="Ingrese algunas notas"
              onChange={(e) => {
                setTextPoliticas(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  if (textPoliticas.trim() !== '') {
                    setPoliticas((estado) => [...estado, textPoliticas.trim()])
                    setTextPoliticas('')
                  }
                }
              }}
              value={textPoliticas}
            />

            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(politicas).map((item) => (
                <div
                  key={item}
                  className="flex items-center px-2 cursor-pointer gap-x-3 "
                  onClick={() => eliminarItem(item, politicas, setPoliticas)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="inline-block text-sm text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-5 lg:flex-row lg:space-x-4">
          <InputText
            name="precioBase"
            label="Precio Base"
            placeholder="Ingresa un precio base"
            type="number"
            onChange={handleInputChange}
            required
            value={form.precioBase}
          />
        </div>
        <div className="flex flex-col items-center mb-5 lg:flex-row lg:space-x-4">
          <InputText
            name="video"
            label="Video de Presentacion"
            placeholder="Ingresa la URL del video"
            type="text"
            onChange={handleInputChange}
            required
            value={form.video}
          />
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
        {/* La propiedad value recibe un Array de objetos con id, url y descripcion */}
        {/* La propiedad onChange devuelve un Array de objetos con id, url y descripcion */}
        <SelectMultiImages
          galery={galery || []}
          setGalery={setGalery}
        />

        <div className="my-10 text-center">
          <Button variant="primary" size="lg" type="submit">
            ACTUALIZAR
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditarCrucero
