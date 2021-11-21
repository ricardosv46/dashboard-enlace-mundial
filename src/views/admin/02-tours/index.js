import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import BtnAccionesCalendary from '../../../components/btnAcciones/BtnAccionesCalendary'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import { useToursServices } from '../../../services/useToursServices'
import Spinner from '../../../components/Spinner/Spinner'

const Tours = () => {
  const history = useHistory()
  const [dataBody, setDataBody] = useState([])
  const { db, loading, deleteTour, updateTourDestacado, updateTourEstado } =
    useToursServices()
  // console.log('data es ', db)
  console.log('valor de databody', dataBody)
  console.log('valor de loading', loading)
  const dataHead = [
    ['Id', 'min-w-10', 'left'],
    ['Foto', 'min-w-20 ', 'left'],
    ['Titulo', 'min-w-52', 'left'],
    ['Categoria', 'min-w-52', 'left'],
    ['Estado', 'min-w-10', 'center'],
    ['Destacado', 'min-w-10', 'center'],
    ['Acciones', 'min-w-20', 'left']
  ]

  const armarFilasTours = (data, setDataBody, handleDelete) => {
    const filasTours = data.map((tour) => {
      return {
        id: tour?.tourId,
        imagen: (
          <img
            src={tour?.imagenPrincipalTour?.url}
            className="w-16 h-10 object-cover"
          />
        ),
        nombre: tour?.tituloTour,
        categoria: tour?.Categoria?.tituloCategoria,
        estado: (
          <div
            div
            className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
            onClick={() => {
              updateTourEstado({
                id: tour?.tourId,
                estado:
                  tour?.estadoTour === 'Activado' ? 'Desactivado' : 'Activado'
              })
            }}
          >
            <BtnEstado estado={tour?.estadoTour === 'Activado' ? 1 : 0} />
          </div>
        ),
        descatar: (
          <div
            div
            className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
            onClick={() => {
              updateTourDestacado({
                id: tour?.tourId,
                destacado:
                  tour?.destacadoTour === 'Activado'
                    ? 'Desactivado'
                    : 'Activado'
              })
            }}
          >
            <BtnDestacado estado={tour?.destacadoTour === 'Activado' && true} />
          </div>
        ),
        acciones: (
          <BtnAccionesCalendary
            handleEdit={() =>
              history.push(`/tours/editar-tour/${tour?.tourId}`, tour)
            }
            handleDelete={() => handleDelete(tour)}
            handleCalendary={() =>
              history.push(`/tour/calendario/${tour?.tourId}`)
            }
          />
        )
      }
    })

    if (filasTours.length > 0) {
      setDataBody(filasTours)
    }
  }

  useEffect(() => {
    if (db.length > 0) {
      armarFilasTours(db, setDataBody, deleteTour)
    }
  }, [db])

  return (
    <div className="shadow  md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex-col gap-y-9  flex items-center  sm:flex-row sm:justify-between mb-5">
        <Heading size="xl" className="text-3xl text-gray-800">
          Tours
        </Heading>
        <Button
          size="md"
          className="border"
          onClick={() => history.push('/tours/crear-tour')}
        >
          + Agregar Tour
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

export default Tours
