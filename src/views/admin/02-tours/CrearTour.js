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
import { useHistory } from 'react-router'
import Spinner from '../../../components/Spinner/Spinner'
import { useDepartamentosServices } from '../../../services/useDepartamentosServices'
import { useProvinciasServices } from '../../../services/useProvinciasServices'
import { useIncluyeServices } from '../../../services/useIncluyeServices'
import { useActividadesServices } from '../../../services/useActividadesServices'
const initialForm = {
  titulo: '',
  categorias: '1',
  departamento: '1',
  provincia: '1',
  descripcionCorta: '',
  descripcionLarga: '',
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
  if (!form.titulo.trim()) {
    errors.titulo = 'El campo Título es requerido'
  }
  if (!form.categorias.trim()) {
    errors.categoria = 'Debe de Seleccionar una Categoria'
  }
  if (!form.descripcionLarga.trim()) {
    errors.descripcionLarga = 'Debe de poner alguna descripcion para el Tour'
  }
  if (!form.puntoPartida.trim()) {
    errors.puntoPartida = 'Debe de Ingresar un punto de partida'
  }
  return errors
}
const otherErrors = {}

const CrearTour = () => {
  const { form, handleInputChange, handleBlur, errors, resetForm } = UseForm(
    initialForm,
    validationsForm
  )
  const history = useHistory()
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
  const { createTour, loadingCrearTour } = useToursServices()
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

  console.log(dataActividades)

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
      galery.length > 0
    ) {
      createTour({
        ActividadesTour: eliminarDuplicado(actividades),
        IncluyeTour: eliminarDuplicado(incluye),
        DeparCodi: form.departamento,
        ProvCodi: form.provincia,
        ciudadTour: form.ciudadTour,
        regionTour: form.regionTour,
        descripcionCortaTour: form.descripcionCorta,
        descripcionLargaTour: form.descripcionLarga,
        destacadoTour: 'Desactivado',
        estadoTour: 'Activado',
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
            title: 'Tour Creado',
            text: 'El Tour se ha creado exitosamente',
            icon: 'success',
            button: 'Aceptar',
            timer: 1000
          })
          history.push('/tours')
        } else {
          swal({
            title: 'Error',
            text: 'El Tour no se ha creado',
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
  }, [handleSubmit])

  return (
    <div className=" md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Crear Nuevo Tour</Heading>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:px-4 px-0 mx-auto py-10"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5 gap-y-5">
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
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.titulo}
              </p>
            )}
          </div>

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
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.categoria}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5">
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="departamento"
              className="block text-gray-700 text-left text-sm"
            >
              Departamento
            </label>
            <select
              required
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
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
              className="block text-gray-700 text-left text-sm"
            >
              Provincia
            </label>
            <select
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
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

        <div className="flex flex-col  lg:space-x-4  mb-5">
          <TextArea
            label="Descripción Larga"
            name="descripcionLarga"
            rows="2"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={form.descripcionLarga}
            required
          />
          {errors.descripcionLarga && (
            <p className="text-sm text-red-500 font-medium mt-2 ml-1">
              {errors.descripcionLarga}
            </p>
          )}
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <TextArea
            label="Descripción Corta"
            name="descripcionCorta"
            rows="1"
            onChange={handleInputChange}
            value={form.descripcionCorta}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start mb-5">
          <div className="w-full relative ">
            <img
              src={iconoAdd}
              alt=""
              className="rounded-full absolute right-2 bg-white top-8 border p-1 cursor-pointer"
              onClick={() => {
                if (textItinerario.trim() !== '') {
                  setItinerario((estado) => [...estado, textItinerario.trim()])
                  setTextItinerario('')
                }
              }}
            />
            {itinerario.length === 0 && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1 absolute -top-2 left-15">
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
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() => eliminarItem(item, itinerario, setItinerario)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">{item}</p>
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
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.puntoPartida}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start mb-5">
          <div className="w-full">
            <div className="flex gap-2">
              <p className=" text-sm left-0"> Inluye</p>
              {incluye.length === 0 && (
                <p className="text-sm text-red-500 font-medium">
                  {otherErrors.incluye}
                </p>
              )}
            </div>

            <select
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              id="incluye"
              name="incluye"
              onChange={(e) => {
                handleInputChange(e)
                console.log(e.target.value)
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
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.categoria}
              </p>
            )}

            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(incluye).map((item) => (
                <div
                  key={item}
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() => eliminarItem(item, incluye, setIncluye)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">
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

          <div className="w-full relative">
            {noIncluye.length === 0 && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1 absolute -top-2 left-15">
                {otherErrors.noIncluye}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="rounded-full absolute right-2 bg-white top-8  p-1 cursor-pointer"
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
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() => eliminarItem(item, noIncluye, setNoIncluye)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start mb-5">
          <div className="w-full">
            <div className="flex gap-2">
              <p className=" text-sm left-0">Actividades</p>
              {actividades.length === 0 && (
                <p className="text-sm text-red-500 font-medium">
                  {otherErrors.actividades}
                </p>
              )}
            </div>

            <select
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
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
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() =>
                    eliminarItem(item, actividades, setActividades)
                  }
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">
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
          <div className="w-full relative">
            {notas.length === 0 && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1 absolute -top-2 left-15">
                {otherErrors.notas}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="rounded-full absolute right-2 bg-white top-8  p-1 cursor-pointer"
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
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() => eliminarItem(item, notas, setNotas)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start mb-5">
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
          <div className="w-full relative">
            {politicas.length === 0 && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1 absolute -top-2 left-40">
                {otherErrors.politicas}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="rounded-full absolute right-2 bg-white top-8  p-1 cursor-pointer"
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
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() => eliminarItem(item, politicas, setPoliticas)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center gap-y-4 mb-5">
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

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center gap-y-4 mb-5">
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

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center gap-y-4 mb-5">
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
          // onChange={(imgs) => {
          //   setGalery([])
          //   imgs.map((image) => setGalery([...galery, image.id]))
          //   // console.log(imgs)
          // }}
          galery={galery || []}
          setGalery={setGalery}
        />

        <div className="my-10 text-center">
          {loadingCrearTour ? (
            <Spinner />
          ) : (
            <Button variant="primary" size="lg" type="submit">
              CREAR TOUR
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CrearTour
