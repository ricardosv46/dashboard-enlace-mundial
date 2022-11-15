import { useEffect, useState } from 'react'
import iconoAdd from '../../../assets/imgs/add.png'
import Button from '../../../components/Buttons/Button'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import InputText from '../../../components/Forms/InputText/InputText'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'
import { useCategoriasServices } from '../../../services/useCategoriaServices'
import UseForm from '../../../hooks/UseForm'
import { useToursServices } from '../../../services/useToursServices'
import swal from 'sweetalert'
import SelectImage from '../../../components/SelectImage'
import SelectMultiImages from '../../../components/SelectMultiImages'
import { useHistory, useParams, useLocation } from 'react-router'
import Spinner from '../../../components/Spinner/Spinner'
import { useDepartamentosServices } from '../../../services/useDepartamentosServices'
import { useProvinciasServices } from '../../../services/useProvinciasServices'
import { useIncluyeServices } from '../../../services/useIncluyeServices'
import { useActividadesServices } from '../../../services/useActividadesServices'
import { useQuery } from '@apollo/client'
import { GET_SLUG_TOUR } from '../../../graphql/query/getSlugTour'
import { isEmpty } from '../../../utils/isEmpty'
import EditorAdvanzado from '../../../components/EditorAdvanzado/EditorAdvanzado'

const initialForm = {
  titulo: '',
  categorias: '1',
  departamento: '1',
  provincia: '1',
  descripcionCorta: '',
  puntoPartida: '',
  video: '',
  incluye: ' ',
  precioBase: '',
  regionTour: '',
  ciudadTour: '',
  actividades: ' ',
  numeroDias: '',
  numeroHoras: ''
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
  if (isEmpty(form.puntoPartida)) {
    errors.puntoPartida = 'Debe de Ingresar un punto de partida'
  }
  return errors
}

const otherErrors = {}

const EditarTour = () => {
  const { form, handleInputChange, handleBlur, errors, resetForm } = UseForm(
    initialForm,
    validationsForm
  )
  const history = useHistory()
  const params = useParams()
  const { id: slugTour } = params
  const { data, loading: loadingSlugTour } = useQuery(GET_SLUG_TOUR, {
    variables: { slugTour }
  })
  const { db: dataCategoria, loadingGetData: loadingCategorias } =
    useCategoriasServices()
  const { db: dataDepartamentos, loadingGetData: loadingDepartamentos } =
    useDepartamentosServices()
  const { db: dataProvincias, loadingGetData: loadingProvincias } =
    useProvinciasServices(form.departamento)
  const { db: dataIncluye, loadingGetData: loadingIncluye } =
    useIncluyeServices()
  const { db: dataActividades, loadingGetData: loadingActividades } =
    useActividadesServices()
  const { state: objetoTour } = useLocation()
  const { updateTour, loadingUpdateTour } = useToursServices()
  const [incluye, setIncluye] = useState([])
  const [noIncluye, setNoIncluye] = useState([])
  const [textNoIncluye, setTextNoIncluye] = useState('')
  const [actividades, setActividades] = useState([])
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
  const [descripcionLargaTour, setDescripcionLargaTour] = useState('')
  console.log({ descripcionLargaTour })
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
      itinerario.length > 0 &&
      incluye.length > 0 &&
      noIncluye.length > 0 &&
      actividades.length > 0 &&
      notas.length > 0 &&
      keywords.length > 0 &&
      politicas.length > 0 &&
      mainImage &&
      secondaryImage &&
      galery.length > 0 && descripcionLargaTour.length > 0
    ) {
      updateTour({
        tourId: data.GetSlugTour?.tourId,
        ActividadesTour: eliminarDuplicado(actividades),
        IncluyeTour: eliminarDuplicado(incluye),
        DeparCodi: form.departamento,
        ProvCodi: form.provincia,
        ciudadTour: form.ciudadTour,
        regionTour: form.regionTour,
        descripcionCortaTour: form.descripcionCorta,
        descripcionLargaTour,
        // galeriaTour: galery.map((img) => JSON.stringify(img)).join(','),
        galeriaTour: galery.map((img) => img.id),
        imagenPrincipalTour: mainImage?.id,
        imagenSecundariaTour: secondaryImage?.id,
        itinerarioTour: eliminarDuplicado(itinerario).join(','),
        keywordsTour: eliminarDuplicado(keywords).join(','),
        notasTour: eliminarDuplicado(notas).join(','),
        noIncluyeTour: eliminarDuplicado(noIncluye).join(','),
        nroDias: form.numeroDias,
        nroHoras: form.numeroHoras,
        precioBaseTour: form.precioBase,
        politicasTour: eliminarDuplicado(politicas).join(','),
        puntoPartidaTour: form.puntoPartida,
        tituloTour: form.titulo,
        videoPresentacionTour: form.video,
        slugCategoria: form.categorias
      }).then((resp) => {
        if (resp === 'exito') {
          resetForm()
          setActividades([])
          setIncluye([])
          setNoIncluye([])
          setItinerario([])
          setActividades([])
          setNotas([])
          setPoliticas([])
          setKeywords([])
          setMainImage(null)
          setSecondaryImage(null)
          setGalery([])
          swal({
            title: 'Tour Editado',
            text: 'El Tour se ha edito exitosamente',
            icon: 'success',
            button: 'Aceptar',
            timer: 1000
          })
          history.push('/tours')
        } else {
          swal({
            title: 'Error',
            text: 'El Tour no se edito',
            icon: 'error',
            button: 'Aceptar',
            timer: 1000
          })
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
    if (isEmpty(descripcionLargaTour)) {
      otherErrors.descripcionLargaTour = 'Debe de poner alguna descripción larga para la publicación'
    }
  }, [descripcionLargaTour, keywords, itinerario, incluye, noIncluye, actividades, notas, politicas])

  useEffect(() => {
    if (!loadingSlugTour) {
      form.titulo = data.GetSlugTour?.tituloTour
      form.categorias = data.GetSlugTour?.slugCategoria
      form.departamento = data.GetSlugTour?.Departamento?.DeparCodi
      form.provincia = data.GetSlugTour?.Provincia?.ProvCodi
      form.descripcionCorta = data.GetSlugTour?.descripcionCortaTour
      form.numeroDias = data.GetSlugTour?.nroDias
      form.numeroHoras = data.GetSlugTour?.nroHoras
      form.precioBase = data.GetSlugTour?.precioBaseTour
      form.puntoPartida = data.GetSlugTour?.puntoPartidaTour
      form.video = data.GetSlugTour?.videoPresentacionTour
      form.ciudadTour = data.GetSlugTour?.ciudadTour
      form.regionTour = data.GetSlugTour?.regionTour
      setMainImage(data.GetSlugTour?.imagenPrincipalTour)
      setSecondaryImage(data.GetSlugTour?.imagenSecundariaTour)
      data.GetSlugTour?.ActividadesTour.map((el) =>
        setActividades((actividad) => [el.actividadId, ...actividad])
      )
      data.GetSlugTour?.IncluyeTour.map((el) =>
        setIncluye((incluye) => [el.incluyeId, ...incluye])
      )
      setNotas(data.GetSlugTour?.notasTour.split(','))
      setKeywords(data.GetSlugTour?.keywordsTour.split(','))
      setPoliticas(data.GetSlugTour?.politicasTour.split(','))
      setItinerario(data.GetSlugTour?.itinerarioTour.split(','))
      setNoIncluye(data.GetSlugTour?.noIncluyeTour.split(','))
      setGalery(data?.GetSlugTour?.galeriaTour || [])
    }
  }, [loadingSlugTour])

  useEffect(() => {
    setDescripcionLargaTour(objetoTour?.descripcionLargaTour)
  }, [])

  return (
    <div className="p-5 py-10 bg-white md:rounded md:p-10 animate__fadeIn animate__animated">
      <div className="relative flex justify-center pt-3">
        <ButtonBack />

        <Heading>Editar Nuevo Tour</Heading>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full px-0 py-10 mx-auto lg:px-4"
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
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={form.categorias}
              required
            >
              {/* eslint-disable  */}
              {loadingCategorias ? (
                <option value={null}>Cargando...</option>
              ) : (
                dataCategoria?.map((item) => (
                  <option key={item.categoriaId} value={item.slugCategoria}>
                    {item.tituloCategoria}
                  </option>
                ))
              )}
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
              htmlFor="departamento"
              className="block text-sm text-left text-gray-700"
            >
              Departamento
            </label>
            <select
              required
              className="w-full px-4 py-3 mt-2 text-sm text-black transition duration-150 ease-in bg-gray-200 border rounded-lg cursor-pointer focus:border-blue-500 focus:bg-white focus:outline-none"
              id="departamento"
              name="departamento"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={form.departamento}
            >
              {loadingDepartamentos ? (
                <option value={null}>Cargando...</option>
              ) : (
                dataDepartamentos?.map((item) => (
                  <option key={item?.DeparCodi} value={item?.DeparCodi}>
                    {item?.DeparNom}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="provincia"
              className="block text-sm text-left text-gray-700"
            >
              Provincia
            </label>
            <select
              className="w-full px-4 py-3 mt-2 text-sm text-black transition duration-150 ease-in bg-gray-200 border rounded-lg cursor-pointer focus:border-blue-500 focus:bg-white focus:outline-none"
              id="provincia"
              name="provincia"
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              value={form.provincia}
            >
              {loadingProvincias ? (
                <option value={null}>Cargando...</option>
              ) : (
                dataProvincias?.map((item) => (
                  <option key={item?.ProvCodi} value={item?.ProvCodi}>
                    {item?.ProvNom}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>

        <div className="flex flex-col mb-5 lg:space-x-4">
          {!loadingSlugTour &&
            <EditorAdvanzado titulo='Descripcion Larga' content={descripcionLargaTour} setContent={setDescripcionLargaTour} />}
          {descripcionLargaTour.length === 0 && (
            <p className="mt-2 ml-1 text-sm font-medium text-red-500">
              {otherErrors.descripcionLargaTour}
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
              label="Punto de partida"
              placeholder="Punto de Partida"
              onBlur={handleBlur}
              required
              value={form.puntoPartida}
            />

            {errors.puntoPartida && (
              <p className="mt-2 ml-1 text-sm font-medium text-red-500">
                {errors.puntoPartida}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start mb-5 lg:flex-row lg:space-x-4">
          <div className="w-full">
            <div className="flex gap-2">
              <p className="left-0 text-sm "> Inluye</p>
              {incluye.length === 0 && (
                <p className="text-sm font-medium text-red-500">
                  {otherErrors.incluye}
                </p>
              )}
            </div>

            <select
              className="w-full px-4 py-3 mt-2 text-sm text-black transition duration-150 ease-in bg-gray-200 border rounded-lg cursor-pointer focus:border-blue-500 focus:bg-white focus:outline-none"
              id="incluye"
              name="incluye"
              onChange={(e) => {
                handleInputChange(e)
                if (e.target.value.trim() !== '') {
                  setIncluye((estado) => [...estado, e.target.value])
                }
              }}
              onBlur={handleBlur}
              value={form.incluye}
              required
            >
              {/* eslint-disable  */}
              {loadingIncluye ? (
                <option value={null}>Cargando...</option>
              ) : (
                dataIncluye?.map((item) => (
                  <option key={item?.incluyeId} value={item?.incluyeId}>
                    {item?.incluyeId} - {item?.descripcionIncluye}
                  </option>
                ))
              )}
            </select>
            {errors.categoria && (
              <p className="mt-2 ml-1 text-sm font-medium text-red-500">
                {errors.categoria}
              </p>
            )}

            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(incluye).map((item) => (
                <div
                  key={item}
                  className="flex items-center px-2 cursor-pointer gap-x-3 "
                  onClick={() => eliminarItem(item, incluye, setIncluye)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="inline-block text-sm text-gra">
                    {
                      dataIncluye?.find(
                        (value) => parseInt(value?.incluyeId) === parseInt(item)
                      ).descripcionIncluye
                    }
                  </p>
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
          <div className="w-full">
            <div className="flex gap-2">
              <p className="left-0 text-sm ">Actividades</p>
              {actividades.length === 0 && (
                <p className="text-sm font-medium text-red-500">
                  {otherErrors.actividades}
                </p>
              )}
            </div>

            <select
              className="w-full px-4 py-3 mt-2 text-sm text-black transition duration-150 ease-in bg-gray-200 border rounded-lg cursor-pointer focus:border-blue-500 focus:bg-white focus:outline-none"
              id="actividades"
              name="actividades"
              onChange={(e) => {
                handleInputChange(e)
                if (e.target.value.trim() !== '') {
                  setActividades((estado) => [...estado, e.target.value])
                }
              }}
              onBlur={handleBlur}
              value={form.actividades}
              required
            >
              {/* eslint-disable  */}
              {loadingActividades ? (
                <option value={null}>Cargando...</option>
              ) : (
                dataActividades?.map((item) => (
                  <option key={item?.actividadId} value={item?.actividadId}>
                    {item?.actividadId} - {item?.descripcion_actividad}
                  </option>
                ))
              )}
            </select>

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
                  <p className="inline-block text-sm text-gra">
                    {
                      dataActividades?.find(
                        (value) =>
                          parseInt(value?.actividadId) === parseInt(item)
                      ).descripcion_actividad
                    }
                  </p>
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
        <div className="flex flex-col items-center mb-5 lg:flex-row lg:space-x-4 gap-y-4">
          <InputText
            name="regionTour"
            label="Region"
            placeholder="Ingresa la Region "
            type="text"
            onChange={handleInputChange}
            required
            value={form.regionTour}
          />
          <InputText
            name="ciudadTour"
            label="Ciudad"
            placeholder="Ingrese la ciudad"
            type="text"
            onChange={handleInputChange}
            required
            value={form.ciudadTour}
          />
        </div>

        <div className="flex flex-col items-center mb-5 lg:flex-row lg:space-x-4 gap-y-4">
          <InputText
            name="video"
            label="Video de Presentacion"
            placeholder="Ingresa la URL del video"
            type="text"
            onChange={handleInputChange}
            value={form.video}
          />
          <InputText
            name="precioBase"
            label="Precio Base"
            placeholder="Ingresa el Precio Base"
            type="text"
            onChange={handleInputChange}
            required
            value={form.precioBase}
          />
        </div>

        <div className="flex flex-col items-center mb-5 lg:flex-row lg:space-x-4 gap-y-4">
          <InputText
            name="numeroDias"
            label="Número de Días"
            placeholder="Ingresa el número de días del tour"
            type="text"
            onChange={handleInputChange}
            required
            value={form.numeroDias}
          />
          <InputText
            name="numeroHoras"
            label="Número de Horas"
            placeholder="Ingresa el número de horas"
            type="text"
            onChange={handleInputChange}
            required
            value={form.numeroHoras}
          />
        </div>

        <p className="mb-3 text-sm text-left text-gray-700">
          Agregar imagen principal y secundaria
        </p>
        <div className="grid max-w-4xl gap-4 mx-auto mb-5 grid-cols-auto ">
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

        <p className="mb-3 text-sm text-left text-gray-700 ">
          Agregar imagen a la galeria
        </p>
        {/* La propiedad value recibe un Array de objetos con id, url y descripcion */}
        {/* La propiedad onChange devuelve un Array de objetos con id, url y descripcion */}

        <SelectMultiImages
          galery={galery || []}
          setGalery={setGalery}
        // onChange={(imgs) => {
        //   imgs.map((image) => setGalery([...galery, image]))
        // }}
        />

        <div className="my-10 text-center">
          {loadingUpdateTour ? (
            <Spinner />
          ) : (
            <Button variant="primary" size="lg" type="submit">
              EDITAR TOUR
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default EditarTour
