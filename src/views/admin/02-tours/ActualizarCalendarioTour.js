import Button from '../../../components/Buttons/Button'
import Spinner from '../../../components/Spinner/Spinner'

const ActualizarCalendarioTour = ({
  updateHorario,
  loading,
  resetForm,
  form,
  handleInputChange,
  closeModal
}) => {
  console.log(form)
  const handleSubmit = (e) => {
    e.preventDefault()
    updateHorario({
      cupos: form.cupos,
      fecha: form.fecha,
      precio: form.precio,
      hora: [form.horaIncial, form.horaFinal],
      horarioTourId: form.horarioTourId,
      tourId: form.tourId
    }).then((rpta) => {
      // console.log(rpta)
      if (rpta === 'ok') {
        closeModal()
        resetForm()
      }
    })
  }

  return (
    <div className="flex flex-col  bg-gray-white   rounded-xl justify-center items-center ">
      {/* FORMULARIO CREAR HORARIO  */}
      <form onSubmit={handleSubmit} className="w-full mt-4 max-w-100 ">
        <p className="text-center font-semibold text-xl text-gray-600">
          Fecha: {form.fecha}
        </p>
        {/* Inputs  */}
        <div className="w-full  grid grid-cols-1  gap-3 mt-5">
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
              value={form.cupos}
              onChange={handleInputChange}
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
              value={form.precio}
              onChange={handleInputChange}
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
              value={form.horaIncial}
              onChange={handleInputChange}
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
              value={form.horaFinal}
              onChange={handleInputChange}
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
              value={form.hora}
              onChange={handleInputChange}
            />
          </div> */}
        </div>

        <div className="mt-8 text-center">
          {/* eslint-disable */}
          {loading ? (
            <Spinner />
          ) : (
            <Button type="submit" size="lg">
              Actualizar fecha
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default ActualizarCalendarioTour
