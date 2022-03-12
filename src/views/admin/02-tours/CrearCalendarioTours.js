import { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, utils } from 'react-modern-calendar-datepicker'
import Button from '../../../components/Buttons/Button'
import Spinner from '../../../components/Spinner/Spinner'
import toast, { Toaster } from 'react-hot-toast'

const CrearCalendarioTours = ({
  tourId,
  onCreateHorario = () => {},
  loading,
  closeModal
}) => {
  const today = new Date()
  const todayValue = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  }
  const [selectedDay, setSelectedDay] = useState(todayValue)
  const [formFecha, setFormFecha] = useState({
    cupos: '',
    precio: '',
    horaIncial: '',
    horaFinal: ''
  })
  console.log(formFecha)
  const handleChangeForm = (e) => {
    if (e.target.name === 'cupos' || e.target.name === 'precio') {
      if (e.target.value < 0) {
        return
      }
    }

    setFormFecha((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const hora = [formFecha.horaIncial, formFecha.horaFinal]

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreateHorario({
      hora: hora,
      cupos: formFecha.cupos,
      precio: formFecha.precio,
      tourId: tourId,
      fecha: `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`,
      estado: 'Activado'
    }).then((rpta) => {
      // console.log(rpta)
      if (rpta === 'ok') {
        // reseteamos el formulario
        setFormFecha({
          cupos: '',
          precio: '',
          horaIncial: '',
          horaFinal: ''
        })
        // reseteamos el calendario a la fecha actual
        setSelectedDay(todayValue)
        // Cerramos el Modal
        closeModal()
        toast.success('Se modifico el destacado')
      }
    })
  }
  return (
    <div className="flex flex-col  bg-gray-white   rounded-xl justify-center items-center ">
      <Toaster
        position="top-right"
        reverseOrder={true}
        containerClassName="top-18 md:top-5"
      />
      {/* CONTENEDOR CALENDARIO  */}
      <div className=" mt-10 border">
        <Calendar
          value={selectedDay}
          onChange={setSelectedDay}
          minimumDate={utils().getToday()}
          shouldHighlightWeekends
          calendarClassName="responsive-calendar"
          colorPrimary={'#23CE6B'}
        />
      </div>

      {/* FORMULARIO CREAR HORARIO  */}
      <form onSubmit={handleSubmit} className="w-full mt-4 max-w-100 ">
        <p className="text-center font-semibold text-xl text-gray-600">
          Fecha:{' '}
          {`${selectedDay.day} - ${selectedDay.month} - ${selectedDay.year}`}
        </p>
        {/* Inputs  */}
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
          <div className="flex flex-col">
            <label
              htmlFor="cupos"
              className="block text-gray-700 text-left text-lg"
            >
              Cupos
            </label>
            <input
              className="shadow-sm text-lg px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
              id="cupos"
              name="cupos"
              type="number"
              value={formFecha.cupos}
              onChange={handleChangeForm}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="precio"
              className="block text-gray-700 text-left text-lg"
            >
              Precio
            </label>
            <input
              className="shadow-sm text-lg px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
              id="precio"
              name="precio"
              type="number"
              value={formFecha.precio}
              onChange={handleChangeForm}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="hora"
              className="block text-gray-700 text-left text-lg"
            >
              Hora Inicial
            </label>
            <input
              className="shadow-sm text-lg px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
              id="horaInical"
              name="horaIncial"
              type="time"
              min="09:00"
              max="18:00"
              value={formFecha.horaIncial}
              onChange={handleChangeForm}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="hora"
              className="block text-gray-700 text-left text-lg"
            >
              Hora final
            </label>
            <input
              className="shadow-sm text-lg px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
              id="horaFinal"
              name="horaFinal"
              type="time"
              min="09:00"
              max="18:00"
              value={formFecha.horaFinal}
              onChange={handleChangeForm}
            />
          </div>
          {/* <div className="flex flex-col">
            <label
              htmlFor="hora"
              className="block text-gray-700 text-left text-lg"
            >
              Hora
            </label>
            <input
              className="shadow-sm text-lg px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
              id="hora"
              name="hora"
              type="text"
              value={formFecha.hora}
              onChange={handleChangeForm}
            />
          </div> */}
        </div>

        <div className="mt-8 text-center">
          {/* eslint-disable */}
          {loading ? (
            <Spinner />
          ) : (
            <Button type="submit" size="lg">
              Crear fecha
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CrearCalendarioTours
