import React, { useEffect, useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
// import { Calendar, utils } from 'react-modern-calendar-datepicker'
import Heading from '../../../components/Heading'
import Button from '../../../components/Buttons/Button'
import TableGeneral from '../../../components/Tables/TableGeneral'
import Spinner from '../../../components/Spinner/Spinner'
import { useHorariosServices } from '../../../services/useHorariosServices'
import { useParams } from 'react-router'

const dataHead = [
  ['Fecha', 'min-w-30 ', 'left'],
  ['Horario', 'min-w-30 ', 'left'],
  ['Cupos', 'min-w-50', 'left'],
  ['Precio', 'min-w-50', 'left'],
  ['Estado', '', 'center']
]

const CalendarioTour = () => {
  const [dataBody, setDataBody] = useState([])
  const { id } = useParams()
  const { data, loading } = useHorariosServices(id)

  const armarFilas = (data) => {
    const filas = data.map((horario) => ({
      fecha: horario.fecha,
      horario: horario.hora,
      cupos: horario.cupos,
      precio: horario.precio,
      estado: horario.estado
    }))
    data.forEach((element) => {
      filas.push([
        element.fecha,
        element.horario,
        element.cupos,
        element.precio,
        element.estado
      ])
    })

    if (filas.length > 0) {
      setDataBody(filas)
    }
  }

  useEffect(() => {
    if (data.length > 0) {
      armarFilas(data)
    }
  }, [data])

  // const today = new Date()
  // const todayValue = {
  //   year: today.getFullYear(),
  //   month: today.getMonth() + 1,
  //   day: today.getDate()
  // }
  // const [fechasGuardadas, setFechasGuardadas] = useState([])

  // const [fechaSeleccionada, setFechaSeleccionada] = useState('')
  // const [selectedDays, setSelectedDays] = useState([])

  // const [formFecha, setFormFecha] = useState({
  //   cupos: '',
  //   precio: '',
  //   estado: ''
  // })

  // const handleChangeCalendar = (date) => {
  //   setFechaSeleccionada(date[date.length - 1])
  // }

  // const handleChangeForm = (e) => {
  //   setFormFecha((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value
  //   }))
  // }

  // const guardarFecha = () => {
  //   const fecha = {
  //     año: fechaSeleccionada.year,
  //     mes: fechaSeleccionada.month,
  //     dia: fechaSeleccionada.day,
  //     cupos: formFecha.cupos,
  //     precio: formFecha.precio,
  //     estado: formFecha.estado
  //   }
  //   setFechasGuardadas([...fechasGuardadas, fecha])
  //   setSelectedDays((prev) => [...prev, fechaSeleccionada])
  // }

  // console.log('fechas guardadas ', fechasGuardadas)

  return (
    // <div className="flex flex-col sm:flex-row w-full gap-10">
    //   <div className="p-5 flex-1 rounded-xl">
    //     <div className="">
    //       <Heading>Fechas</Heading>
    //       <div>
    //         {fechasGuardadas.map((fecha, i) => {
    //           return (
    //             <div
    //               key={i}
    //               className="bg-white py-1 px-7 rounded-full mt-4 flex justify-between"
    //             >
    //               {/* <p className="text-gray-400 text-lg">{`Cupos: ${fecha.cupos}  Precio: ${fecha.precio}  Estado: ${fecha.estado}`}</p> */}
    //               <div className="text-center flex flex-col  flex-1 pr-2 border-black border-opacity-20">
    //                 <p className="text-md text-gray-500">Fecha</p>
    //                 <p className="">{`${fecha.dia} / ${fecha.mes} / ${fecha.año}`}</p>
    //               </div>
    //               <div className="text-center flex flex-col flex-1 pr-2 pl-2 border-black border-opacity-20">
    //                 <p className="text-md text-gray-500">Cupos</p>
    //                 <p className="">{fecha.cupos}</p>
    //               </div>
    //               <div className="flex flex-col flex-1 mr-2 text-center pl-2 pr-2 border-black border-opacity-20">
    //                 <p className="text-md text-gray-500">Precio</p>
    //                 <p className="">{fecha.precio}</p>
    //               </div>
    //               <div className="text-center flex flex-col flex-1 pl-2">
    //                 <p className="text-md text-gray-500">Estado</p>
    //                 <p className="">{fecha.estado}</p>
    //               </div>
    //             </div>
    //           )
    //         })}
    //       </div>
    //         {fechasGuardadas.length === 0 && (
    //           <div className="bg-white py-2 px-4 rounded-full w-60 mt-4">
    //             Sin fechas seleccionadas
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="">
    //     <Calendar
    //       value={selectedDays}
    //       onChange={handleChangeCalendar}
    //       minimumDate={utils().getToday()}
    //       shouldHighlightWeekends
    //       calendarClassName=""
    //     />
    //     <div className="w-full max-w-72">
    //       <div className="w-full  grid grid-cols-2 gap-3 mt-4">
    //         <div className="flex flex-col">
    //           <label
    //             htmlFor="cupos"
    //             className="block text-gray-700 text-left text-lg"
    //           >
    //             Cupos
    //           </label>
    //           <input
    //             className="shadow-sm text-sm px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
    //             required
    //             id="cupos"
    //             name="cupos"
    //             type="number"
    //             value={formFecha.cupos}
    //             onChange={handleChangeForm}
    //           />
    //         </div>
    //         <div className="flex flex-col">
    //           <label
    //             htmlFor="precio"
    //             className="block text-gray-700 text-left text-lg"
    //           >
    //             Precio
    //           </label>
    //           <input
    //             className="shadow-sm text-sm px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
    //             required
    //             id="precio"
    //             name="precio"
    //             type="number"
    //             value={formFecha.precio}
    //             onChange={handleChangeForm}
    //           />
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="cupos"
    //             className="block text-gray-700 text-left text-lg"
    //           >
    //             Estado
    //           </label>
    //           <select
    //             name="estado"
    //             id="estado"
    //             className="w-full shadow-sm text-lg px-3 py-2 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
    //             value={formFecha.estado}
    //             onChange={handleChangeForm}
    //           >
    //             <option value="activo">Activo</option>
    //             <option value="inactivo">Inactivo</option>
    //           </select>
    //         </div>
    //       </div>
    //       <div className="mt-8 text-center">
    //         <Button onClick={guardarFecha} size="full">
    //           Crear fecha
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="shadow  md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex-col gap-y-9  flex items-center  sm:flex-row sm:justify-between mb-5">
        <Heading size="xl" className="text-3xl text-gray-800">
          Horarios
        </Heading>
        <Button
          size="md"
          className="border"
          onClick={() => alert('crear categoria')}
        >
          + Agregar horario
        </Button>
      </div>
      {/* eslint-disable  */}
      {loading ? (
        <Spinner />
      ) : (
        <TableGeneral dataBody={dataBody} dataHead={dataHead} />
      )}
    </div>
  )
}

export default CalendarioTour
