import { useEffect, useState } from 'react'
import iconoAdd from '../../../assets/imgs/add.png'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import Button from '../../../components/Buttons/Button'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import InputText from '../../../components/Forms/InputText/InputText'
import InputToggle from '../../../components/Forms/InputToggle/InputToggle'
import TextArea from '../../../components/Forms/TextArea'
import Heading from '../../../components/Heading'
import { useModal } from '../../../hooks/useModal'
import Modal from '../../../components/Modales/Modal'
import Galerias from '../08-galerias'
// import { ImgContext } from '../../../context/auth/ImgContext'
import MostrarGaleria from '../08-galerias/MostrarGaleria'
import { useCategoriasServices } from '../../../services/useCategoriaServices'
import UseForm from '../../../hooks/UseForm'
import { Ciudades, Regiones } from '../../../data/dataPeru'
import { useToursServices } from '../../../services/useToursServices'
import swal from 'sweetalert'
const initialForm = {
  titulo: '',
  categorias: '',
  region: '',
  ciudad: '',
  descripcionCorta: '',
  descripcionLarga: '',
  puntoPartida: '',
  video: ''
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
  if (!form.region.trim()) {
    errors.region = 'Debe de Seleccionar una Region'
  }
  if (!form.ciudad.trim()) {
    errors.ciudad = 'Debe de Seleccionar una Ciudad'
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
  console.log('othe', otherErrors)
  const { data: dataCategoria } = useCategoriasServices()
  const { createTour } = useToursServices()
  // console.log(createTour)
  const { form, handleInputChange, handleBlur, errors, resetForm } = UseForm(
    initialForm,
    validationsForm
  )

  const [isOpenModalGalria, openModalGaleria, closeModalGaleria] =
    useModal(false)

  // const { imgPrincipal, setImgPrincipal, imgSecundaria, setImgSecundaria, galeria } =
  //   useContext(ImgContext)
  // console.log(imgPrincipal, imgSecundaria)

  const [seleccionarImagen, setSeleccionarImagen] = useState(1)
  const [estado, setEstado] = useState(false)
  const [destacado, setDestacado] = useState(false)
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
  // console.log(form)
  const eliminarItem = (value, data, setData) => {
    const newData = data.filter((item) => item !== value)
    setData(newData)
  }
  const eliminarDuplicado = (data) => {
    const newData = new Set(data)
    return [...newData]
  }
  // console.log(incluye.join(','))
  const handleImg1 = () => {
    setSeleccionarImagen(1)
    openModalGaleria()
  }
  const handleImg2 = () => {
    setSeleccionarImagen(2)
    openModalGaleria()
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
      politicas.length > 0
    ) {
      createTour({
        titulo: form.titulo,
        slugCategoria: form.categorias,
        region: form.region,
        ciudad: form.ciudad,
        estado: estado ? 'Activo' : 'Inactivo',
        destacado: destacado ? 'Activo' : 'Inactivo',
        descripcionCorta: form.descripcionCorta,
        descripcionLarga: form.descripcionLarga,
        itinerario: eliminarDuplicado(itinerario),
        puntoPartida: form.puntoPartida,
        incluye: eliminarDuplicado(incluye),
        noIncluye: eliminarDuplicado(noIncluye),
        actividades: eliminarDuplicado(actividades),
        notas: eliminarDuplicado(notas),
        politicas: eliminarDuplicado(politicas),
        video: form.video,
        idImgPrincipal: 3,
        idImgSecundaria: 3,
        galeria: []
      })
      resetForm()
      setActividades([])
      setIncluye([])
      setNoIncluye([])
      setItinerario([])
      setActividades([])
      setNotas([])
      setPoliticas([])
      setKeywords([])
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
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Crear Nuevo Tour</Heading>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:shadow-md lg:px-4 px-0 mx-auto py-10"
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
              required
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
              autoComplete="off"
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            >
              <option className="cursor-pointer" value="">
                Selecciona una Categoria
              </option>
              {dataCategoria.map((item) => (
                <option key={item.categoriaId} value={item.slugCategoria}>
                  {item.tituloCategoria}
                </option>
              ))}
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
              htmlFor="region"
              className="block text-gray-700 text-left text-sm"
            >
              Región
            </label>
            <select
              required
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              id="region"
              name="region"
              autoComplete="off"
              onChange={handleInputChange}
              onBlur={handleBlur}
            >
              <option value="" className="cursor-pointer">
                Selecciona una Region
              </option>
              {Regiones.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.region}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="ciudad"
              className="block text-gray-700 text-left text-sm"
            >
              Ciudad
            </label>
            <select
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              id="ciudad"
              name="ciudad"
              autoComplete="off"
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            >
              <option value="" className="cursor-pointer">
                Selecciona una Ciudad
              </option>
              {Ciudades(form.region).map((ciudad) => (
                <option key={ciudad} value={ciudad}>
                  {ciudad}
                </option>
              ))}
            </select>
            {errors.ciudad && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.ciudad}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between sm:justify-around lg:justify-start  my-5">
          <div className="flex  items-center lg:w-full">
            <label
              htmlFor="estado"
              className="block text-gray-700 text-left text-sm"
            >
              Estados
            </label>
            <div onClick={() => setEstado(!estado)} className="ml-7">
              <InputToggle />
            </div>
          </div>
          <div className="flex  items-center lg:w-full ml-4">
            <label
              htmlFor="destacado"
              className="block text-gray-700 text-left text-sm"
            >
              Destacado
            </label>
            <div onClick={() => setDestacado(!destacado)} className="ml-7">
              <BtnDestacado disabled={false} />
            </div>
          </div>
        </div>

        <div className="flex flex-col  lg:space-x-4  mb-5">
          <TextArea
            label="Descripción Larga"
            name="descripcionLarga"
            rows="2"
            onChange={handleInputChange}
            onBlur={handleBlur}
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
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start mb-5">
          <div className="w-full relative ">
            <img
              src={iconoAdd}
              alt=""
              className="rounded-full absolute right-2 bg-white top-8 border p-1 cursor-pointer"
              onClick={() => {
                console.log(textItinerario)
                if (textItinerario.trim() !== '') {
                  setItinerario((estado) => [...estado, textItinerario.trim()])
                  setTextItinerario('')
                }
              }}
            />
            {otherErrors.itinerario && (
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
              onBlur={() => {
                console.log(itinerario.length)
                if (itinerario.length === 0) {
                  otherErrors.itinerario = '( Ingrese al menos un Itinerario )'
                } else {
                  otherErrors.itinerario = false
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
            />

            {errors.puntoPartida && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1">
                {errors.puntoPartida}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start mb-5">
          <div className="w-full relative">
            {otherErrors.incluye && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1 absolute -top-2 left-12">
                {otherErrors.incluye}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="rounded-full absolute right-2 bg-white top-8  p-1 cursor-pointer"
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
              onBlur={() => {
                if (incluye.length > 0) {
                  otherErrors.incluye = ''
                } else {
                  otherErrors.incluye =
                    '( Ingrese al menos una opcion que incluya )'
                }
              }}
              value={textIncluye}
            />
            <div className="flex flex-col gap-5 my-5">
              {eliminarDuplicado(incluye).map((item) => (
                <div
                  key={item}
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() => eliminarItem(item, incluye, setIncluye)}
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full relative">
            {otherErrors.noIncluye && (
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
              onBlur={() => {
                if (noIncluye.length > 0) {
                  otherErrors.noIncluye = ''
                } else {
                  otherErrors.noIncluye = '(Ingrese una opcion que no incluya)'
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
          <div className="w-full relative">
            {otherErrors.actividades && (
              <p className="text-sm text-red-500 font-medium mt-2 ml-1 absolute -top-2 left-20">
                {otherErrors.actividades}
              </p>
            )}
            <img
              src={iconoAdd}
              alt=""
              className="rounded-full absolute right-2 bg-white top-8  p-1 cursor-pointer"
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
              onBlur={() => {
                if (actividades.length > 0) {
                  otherErrors.actividades = ''
                } else {
                  otherErrors.actividades = '(Ingrese al menos una actividad)'
                }
              }}
              value={textAactividades}
            />
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
                  <p className="text-sm  inline-block text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative">
            {otherErrors.notas && (
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
              onBlur={() => {
                if (notas.length > 0) {
                  otherErrors.notas = ''
                } else {
                  otherErrors.notas = '(Ingrese al menos una nota)'
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
            {otherErrors.keywords && (
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
              onBlur={() => {
                if (keywords.length > 0) {
                  otherErrors.keywords = ''
                } else {
                  otherErrors.keywords = '(Ingrese al menos una Keyword)'
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
            {otherErrors.politicas && (
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
              onBlur={() => {
                if (politicas.length > 0) {
                  otherErrors.politicas = ''
                } else {
                  otherErrors.politicas = '( Ingrese una política )'
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
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="video"
            label="Video de Presentacion"
            placeholder="Ingresa la URL del video"
            type="text"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-y-5 sm:flex-row lg:space-x-4 items-center mb-5 ">
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
            <Button onClick={handleImg2}>Imágen Secundaria</Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 sm:flex-row lg:space-x-4 items-center mb-5 ">
          <MostrarGaleria />
        </div>

        <div className="my-10 text-center">
          <Button variant="primary" size="lg" type="submit">
            CREAR
          </Button>
        </div>
      </form>
      <Modal closeModal={closeModalGaleria} isOpen={isOpenModalGalria}>
        <Galerias
          opcion="botonEscoger"
          seleccionarImagen={seleccionarImagen}
          closeModalGaleria={closeModalGaleria}
        />
      </Modal>
    </div>
  )
}

export default CrearTour
