import { useEffect, useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import Heading from '../../../components/Heading'
import Button from '../../../components/Buttons/Button'
import TableGeneral from '../../../components/Tables/TableGeneral'
import { useHorariosServices } from '../../../services/useHorariosServices'
import { useParams } from 'react-router'
// import ModalCrearCalendario from '../../../components/Modales/ModalCrearCalendario'
import ButtonBack from '../../../components/Buttons/ButtonBack'
import { useModal } from '../../../hooks/useModal'
import ModalCustomer from '../../../components/Modales/ModalCustomer'
import CrearCalendarioTours from './CrearCalendarioTours'
import { IconDelete, IconEdit } from '../../../assets/icons/icons'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import ActualizarCalendarioTour from './ActualizarCalendarioTour'
import UseForm from '../../../hooks/UseForm'

const dataHead = [
  ['Fecha', 'min-w-20 ', 'left'],
  ['Horario', 'min-w-20 ', 'left'],
  ['Cupos', 'min-w-20', 'left'],
  ['Precio', 'min-w-30', 'left'],
  ['Estado', '', 'center'],
  ['Acciones', '', 'center']
]
const initialForm = {
  cupos: '',
  precio: '',
  hora: ''
}
const CalendarioTour = () => {
  const { handleInputChange, form, resetForm } = UseForm(initialForm)
  const [
    isOpenModalCrearCalendario,
    openModalCrearCalendario,
    closeModalCrearCalendario
  ] = useModal(false)

  const [
    isOpenModalActualizarCalendario,
    openModalActualizarCalendario,
    closeModalActualizarCalendario
  ] = useModal(false)
  const [db, setDb] = useState({})
  console.log('valor db', db)
  // const [isOpenModalCrear, setIsOpenModalCrear] = useState(false)
  // seleccionamos el id del tour
  const { id } = useParams()
  const {
    data,
    loading,
    fetchTourHorario,
    createHorario,
    deleteHorario,
    updateHorario,
    updateHorarioEstado
  } = useHorariosServices(id)
  // console.log('data vista ', data)
  const armarFilas = (data) => {
    // console.log('data horarios ', data)
    const filas = data.map((horario) => ({
      fecha: horario.fecha,
      horario: horario.hora,
      cupos: horario.cupos,
      precio: `s/. ${horario.precio}.00`,
      editar: (
        <div
          div
          className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
          onClick={() => {
            updateHorarioEstado({
              horarioTourId: horario.horarioTourId,
              estado: horario.estado === 'Activado' ? 'Desactivado' : 'Activado'
            })
          }}
        >
          <BtnEstado estado={horario.estado === 'Activado' ? 1 : 0} />
        </div>
      ),
      acciones: (
        <div className="flex justify-center gap-x-2">
          <div
            className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
            onClick={() => {
              openModalActualizarCalendario()
              setDb(horario)
            }}
          >
            <IconEdit />
          </div>
          <div
            className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
            onClick={() => deleteHorario(horario)}
          >
            <IconDelete />
          </div>
        </div>
      )
    }))
    return filas
  }

  useEffect(() => {
    if (id) {
      fetchTourHorario(id)
    }
  }, [id])
  useEffect(() => {
    form.cupos = db.cupos
    form.precio = db.precio
    form.hora = db.hora
  }, [db])

  return (
    <>
      <div className="shadow  md:rounded bg-white p-5 py-10 md:p-10 ">
        <div className="flex-col gap-y-9  flex items-center  sm:flex-row sm:justify-between mb-5">
          <div className="flex justify-center pt-3 w-3/4 relative">
            <ButtonBack />

            <Heading>Fechas Asignadas</Heading>
          </div>
          <Button
            size="md"
            className="border"
            onClick={openModalCrearCalendario}
          >
            + Agregar Fecha
          </Button>
        </div>
        {/* eslint-disable  */}

          <TableGeneral dataBody={armarFilas(data)} dataHead={dataHead} />

      </div>
      // Modal para llamar la ventana crear calendario
      <ModalCustomer
        isOpen={isOpenModalCrearCalendario}
        closeModal={closeModalCrearCalendario}
      >
        <CrearCalendarioTours
          onCreateHorario={createHorario}
          loading={loading}
          tourId={id}
          closeModal={closeModalCrearCalendario}
        />
      </ModalCustomer>
      //Modal para actualizar calendario
      <ModalCustomer
        isOpen={isOpenModalActualizarCalendario}
        closeModal={closeModalActualizarCalendario}
      >
        <ActualizarCalendarioTour
          updateHorario={updateHorario}
          loading={loading}
          tourId={id}
          closeModal={closeModalActualizarCalendario}
          horario={db}
          setHorario={setDb}
          loading={loading}
          handleInputChange={handleInputChange}
          form={form}
          resetForm={resetForm}
        />
      </ModalCustomer>
    </>
  )
}

export default CalendarioTour
