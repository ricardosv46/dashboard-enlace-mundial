import React, { useEffect, useContext, useState } from 'react'
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
import { ImgContext } from '../../../context/auth/ImgContext'
import MostrarGaleria from '../08-galerias/MostrarGaleria'
// import peru from '../../../data/peru.json'
import { useCategoriasServices } from '../../../services/useCategoriaServices'
// import UseForm from '../../../hooks/UseForm'
// const initialForm = {
//   titulo: '',
//   categorias: '',
//   region: '',
//   ciudad: '',
//   horaios: '',
//   descripcionCorta: '',
//   descripcionLara: '',
//   itinerario: '',
//   puntoPartida: '',
//   incluye: '',
//   noIncluye: '',
//   actividades: '',
//   notas: '',
//   politicasCancelacion: '',
//   keywords: '',
//   video: ''
// }
const CrearTour = () => {
  const { data } = useCategoriasServices()
  // console.log(data)
  const [destacado, setDestacado] = useState(false)
  // const { form, handleInputChange } = UseForm(initialForm)
  const [isOpenModalGalria, openModalGaleria, closeModalGaleria] =
    useModal(false)
  const [img1, setImge1] = useState({})
  const [img2, setImge2] = useState({})
  const [state, setState] = useState(true)
  const { img, setImg } = useContext(ImgContext)
  const [incluye, setIncluye] = useState([])
  const [textIncluye, setTextIncluye] = useState('')
  const [Noincluye, setNoIncluye] = useState([])
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
  const eliminarItem = (value, data, setData) => {
    const newData = data.filter((item) => item !== value)
    setData(newData)
  }
  // console.log(incluye.join(','))
  const handleImg1 = () => {
    openModalGaleria()
    setState(true)
  }
  const handleImg2 = () => {
    openModalGaleria()
    setState(false)
  }
  useEffect(() => {
    if (state) {
      setImge1(img)
    } else {
      setImge2(img)
    }
  }, [img, state, img1, img2])
  useEffect(() => {
    setImg({})
  }, [])
  // console.log(peru.Amazonas.Bagua.Imaza)
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Crear Nuevo Tour</Heading>
      </div>
      <form
        onSubmit={() => {}}
        className="w-full lg:shadow-md lg:px-4 px-0 mx-auto py-10"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5">
          <InputText
            name="titulo"
            label="Titulo"
            placeholder="Ingrese un título para el tour"
          />
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
            >
              <option defaultValue className="cursor-pointer">
                Selecciona
              </option>
              {data.map((item) => (
                <option key={item.categoriaId}>{item.tituloCategoria}</option>
              ))}
            </select>
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
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              id="region"
              name="region"
              autoComplete="off"
            >
              <option defaultValue className="cursor-pointer">
                Selecciona una Region
              </option>
              <option>PIURA</option>
              <option>LAMBAYEQUE</option>
              <option value="">TUMBES</option>
              <option value="">CAJAMARCA</option>
              <option value="">LIMA</option>
              <option value="">ÁNCASH</option>
            </select>
          </div>
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label
              htmlFor="categorias"
              className="block text-gray-700 text-left text-sm"
            >
              Ciudad
            </label>
            <select
              className="cursor-pointer w-full text-sm text-black transition ease-in duration-150 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              id="ciudad"
              name="ciudad"
              autoComplete="off"
            >
              <option defaultValue className="cursor-pointer">
                Selecciona una ciudad
              </option>
              <option>PIURA</option>
              <option>CHICLAYO</option>
              <option value="">AREQUIPA</option>
              <option value="">LIMA</option>
              <option value="">PASCO</option>
              <option value="">TRUJILLO</option>
            </select>
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
            <div className="ml-7">
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

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <TextArea
            label="Descripción Corta"
            name="DescripcionCorta"
            rows="1"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <TextArea
            label="Descripción Larga"
            name="DescripcionLarga"
            rows="2"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start mb-5">
          <div className="w-full">
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
                    setItinerario((estado) => [...estado, textItinerario])
                    setTextItinerario('')
                  }
                }
              }}
              onBlur={() => {
                if (itinerario.length > 0) {
                  setTextItinerario('Campo LLeno')
                } else {
                  setTextItinerario('')
                }
              }}
              value={textItinerario}
            />
            <div className="flex flex-col gap-5 my-5">
              {itinerario.map((item) => (
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
          <InputText
            name="puntoPartida"
            label="Punto de partida"
            placeholder="Punto de Partida"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start mb-5">
          <div className="w-full">
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
                    setIncluye((estado) => [...estado, textIncluye])
                    setTextIncluye('')
                  }
                }
              }}
              onBlur={() => {
                if (incluye.length > 0) {
                  setTextIncluye('Campo LLeno')
                } else {
                  setTextIncluye('')
                }
              }}
              value={textIncluye}
            />
            <div className="flex flex-col gap-5 my-5">
              {incluye.map((item) => (
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

          <div className="w-full">
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
                    setNoIncluye((estado) => [...estado, textNoIncluye])
                    setTextNoIncluye('')
                  }
                }
              }}
              onBlur={() => {
                if (Noincluye.length > 0) {
                  setTextNoIncluye('Campo LLeno')
                } else {
                  setTextNoIncluye('')
                }
              }}
              value={textNoIncluye}
            />
            <div className="flex flex-col gap-5 my-5 ">
              {Noincluye.map((item) => (
                <div
                  key={item}
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() => eliminarItem(item, Noincluye, setNoIncluye)}
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
            <InputText
              name="actividades"
              label="Actividaes"
              placeholder="Ingrese las Actividades"
              onChange={(e) => {
                setTextActividaes(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  if (textAactividades.trim() !== '') {
                    setActividades((estado) => [...estado, textAactividades])
                    setTextActividaes('')
                  }
                }
              }}
              onBlur={() => {
                if (actividades.length > 0) {
                  setTextActividaes('Campo LLeno')
                } else {
                  setTextActividaes('')
                }
              }}
              value={textAactividades}
            />
            <div className="flex flex-col gap-5 my-5">
              {actividades.map((item) => (
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
          <div className="w-full">
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
                    setNotas((estado) => [...estado, textNotas])
                    setTextNotas('')
                  }
                }
              }}
              onBlur={() => {
                if (notas.length > 0) {
                  setTextNotas('Campo LLeno')
                } else {
                  setTextNotas('')
                }
              }}
              value={textNotas}
            />

            <div className="flex flex-col gap-5 my-5">
              {notas.map((item) => (
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
          <div className="w-full">
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
                    setKeywords((estado) => [...estado, textKeywords])
                    setTextKeywords('')
                  }
                }
              }}
              onBlur={() => {
                if (keywords.length > 0) {
                  setTextKeywords('Campo LLeno')
                } else {
                  setTextKeywords('')
                }
              }}
              value={textKeywords}
            />
            <div className="flex flex-col gap-5 my-5">
              {keywords.map((item) => (
                <div
                  key={item}
                  className="flex  items-center  gap-x-3 px-2 cursor-pointer "
                  onClick={() =>
                    eliminarItem(item, keywords, setKeywords)
                  }
                >
                  <span className="text-sm text-red-600">X</span>
                  <p className="text-sm  inline-block text-gra">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
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
                    setPoliticas((estado) => [...estado, textPoliticas])
                    setTextPoliticas('')
                  }
                }
              }}
              onBlur={() => {
                if (politicas.length > 0) {
                  setTextPoliticas('Campo LLeno')
                } else {
                  setTextPoliticas('')
                }
              }}
              value={textPoliticas}
            />

            <div className="flex flex-col gap-5 my-5">
              {politicas.map((item) => (
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
            name="videoPresentacion"
            label="Video de Presentacion"
            placeholder="Ingresa la URL del video"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-y-5 sm:flex-row lg:space-x-4 items-center mb-5 ">
          <div className="sm:w-1/2 flex flex-col items-center justify-evenly w-full py-4 gap-y-5 shadow-lg">
            <div className="max-w-30 max-h-30">
              <img
                src={img1.url}
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
                src={img2.url}
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
          <Button variant="primary" size="lg">
            CREAR
          </Button>
        </div>
      </form>
      <Modal closeModal={closeModalGaleria} isOpen={isOpenModalGalria}>
        <Galerias opcion={true} closeModalGaleria={closeModalGaleria} />
      </Modal>
    </div>
  )
}

export default CrearTour
