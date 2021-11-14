import React, { useState } from 'react'
import { Calendar, utils } from 'react-modern-calendar-datepicker'
import { useHorariosServices } from '../../services/useHorariosServices'
import Button from '../Buttons/Button'
import Spinner from '../Spinner/Spinner'
import Modal from './Modal'

const ModalCrearCalendario = ({ isOpen, closeModal, tourId }) => {
  const today = new Date()
  const todayValue = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  }
  console.log('today value ', todayValue)
  const [selectedDay, setSelectedDay] = useState(todayValue)
  const [formFecha, setFormFecha] = useState({
    cupos: '',
    precio: '',
    estado: '',
    hora: ''
  })

  const { loading, createHorario } = useHorariosServices()

  const handleChangeForm = (e) => {
    setFormFecha((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createHorario({
      hora: formFecha.hora,
      cupos: formFecha.cupos,
      precio: formFecha.precio,
      tourId: tourId,
      fecha: `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`,
      estado: formFecha.estado
    }).then((rpta) => {
      if (rpta === 'ok') {
        // reseteamos el formulario
        setFormFecha({
          cupos: '',
          precio: '',
          estado: '',
          hora: ''
        })
        // reseteamos el calendario a la fecha actual
        setSelectedDay(todayValue)
      }
    })
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="flex gap-7 bg-gray-50 p-8 pr-16 rounded-xl">
        {/* CONTENEDOR CALENDARIO  */}
        <div>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            minimumDate={utils().getToday()}
            shouldHighlightWeekends
            calendarClassName="shadow-lg"
          />
        </div>

        {/* FORMULARIO CREAR HORARIO  */}
        <form onSubmit={handleSubmit} className="w-full mt-4 max-w-80">
          <p className="text-center font-semibold text-xl text-gray-600">
            Fecha:{' '}
            {`${selectedDay.day} - ${selectedDay.month} - ${
              selectedDay.year
            }`}
          </p>
          {/* Inputs  */}
          <div className="w-full  grid grid-cols-2 gap-3 mt-5">
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
            </div>
            <div>
              <label
                htmlFor="cupos"
                className="block text-gray-700 text-left text-lg"
              >
                Estado
              </label>
              <select
                name="estado"
                id="estado"
                className="w-full shadow-sm text-lg px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
                value={formFecha.estado}
                onChange={handleChangeForm}
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>
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
    </Modal>
  )
}

export default ModalCrearCalendario
