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
import peru from '../../../data/peru.json'
const CrearTour = () => {
  const [destacado, setDestacado] = useState(false)
  const [isOpenModalGalria, openModalGaleria, closeModalGaleria] =
    useModal(false)
  const [img1, setImge1] = useState({})
  const [img2, setImge2] = useState({})
  const [state, setState] = useState(true)
  const { img, setImg } = useContext(ImgContext)
  const [incluye, setIncluye] = useState([])
  const [text, setText] = useState('')
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
  console.log(peru.Amazonas.Bagua.Imaza)
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Crear Nuevo Tour</Heading>
      </div>
      <form
        onSubmit={() => { }}
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
              <option>CATA DE VINO Y LICORES</option>
              <option>NATURALEZA Y PAISAJES</option>
              <option value="">RUTAS Y RECORRIDOS</option>
              <option value="">TURISMO ECOLÓGICO</option>
              <option value="">TURISMOS GASTRONÓMICO</option>
              <option value="" className="cursor-pointer">
                TURISMO DE SOL Y PLAYA
              </option>
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
          <InputText
            name="horarios"
            label="Horarios"
            placeholder="Ingrese algunos horarios"
          />
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

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="itinerario"
            label="Itinerario"
            placeholder="Itinerario"
          />
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
                setText(e.target.value)
              }}
              onKeyDown={({ code }) => {
                if (code === 'Enter') {
                  setIncluye((estado) => [...estado, text])
                  setText('')
                }
              }}
              value={text}
            />
            {incluye.map(item => <p key={item}>{item}</p>)}
          </div>

          <InputText
            name="noIncluye"
            label="No Incluye"
            placeholder="Ingresar lo que no incluye"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="actividades"
            label="Actividades"
            placeholder="Ingresa las actividades"
          />
          <InputText
            name="notas"
            label="Notas"
            placeholder="Ingresa algunas notas"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <TextArea
            label="Politicas de cancelación"
            name="politicas"
            placeholder="Politicas de cancelación"
            rows="1"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center mb-5">
          <InputText
            name="keywords"
            label="Keywords"
            placeholder="ingrese las plabras claves separadas con comas"
            type="text"
          />
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
