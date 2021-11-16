import React, { useEffect, useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import Heading from '../../../components/Heading'
import Button from '../../../components/Buttons/Button'
import TableGeneral from '../../../components/Tables/TableGeneral'
import Spinner from '../../../components/Spinner/Spinner'
import { useHorariosServices } from '../../../services/useHorariosServices'
import { useParams } from 'react-router'
import ModalCrearCalendario from '../../../components/Modales/ModalCrearCalendario'

const dataHead = [
  ['Fecha', 'min-w-30 ', 'left'],
  ['Horario', 'min-w-30 ', 'left'],
  ['Cupos', 'min-w-50', 'left'],
  ['Precio', 'min-w-50', 'left'],
  ['Estado', '', 'center']
]

const CalendarioTour = () => {
  const [isOpenModalCrear, setIsOpenModalCrear] = useState(false)
  const { id } = useParams()
  const { data, loading, fetchTourHorario, createHorario } =
    useHorariosServices(id)

  console.log('data vista ', data)

  const armarFilas = (data) => {
    console.log('data horarios ', data)
    const filas = data.map((horario) => ({
      fecha: horario.fecha,
      horario: horario.hora,
      cupos: horario.cupos,
      precio: horario.precio,
      estado: horario.estado
    }))
    return filas
  }

  useEffect(() => {
    if (id) {
      fetchTourHorario(id)
    }
  }, [id])

  return (
    <>
      <ModalCrearCalendario
        onCreateHorario={createHorario}
        loading={loading}
        tourId={id}
        isOpen={isOpenModalCrear}
        closeModal={() => setIsOpenModalCrear(false)}
      />
      <div className="shadow  md:rounded bg-white p-5 py-10 md:p-10">
        <div className="flex-col gap-y-9  flex items-center  sm:flex-row sm:justify-between mb-5">
          <Heading size="xl" className="text-3xl text-gray-800">
            Horarios del Tour {id}
          </Heading>
          <Button
            size="md"
            className="border"
            onClick={() => setIsOpenModalCrear(true)}
          >
            + Agregar horario
          </Button>
        </div>
        {/* eslint-disable  */}
        {loading ? (
          <Spinner />
        ) : (
          <TableGeneral dataBody={armarFilas(data)} dataHead={dataHead} />
        )}
      </div>
    </>
  )
}

export default CalendarioTour
