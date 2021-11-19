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
  const { db, loading, deleteTour } = useToursServices()
  console.log('data es ', db)
  const dataHead = [
    ['Id', 'min-w-4', 'left'],
    ['Foto', 'min-w-20 ', 'left'],
    ['Titulo', 'min-w-50', 'left'],
    ['Categoria', 'min-w-50', 'left'],
    ['Estado', '', 'center'],
    ['Destacado', '', 'center'],
    ['Acciones', '', 'left']
  ]

  const armarFilasTours = (data, setDataBody, handleDeleteTour) => {
    const filasTours = data.map((tour) => {
      return {
        id: tour?.tourId,
        imagen: (
          <img src={tour?.imagenPrincipalTour?.url} className="w-16 h-10 object-cover" />
        ),
        nombre: tour?.tituloTour,
        categoria: tour?.Categoria?.tituloCategoria,
        estado: <BtnEstado estado={tour?.estadoTour} />,
        descatar: <BtnDestacado estado={false} />,
        acciones: (
          <BtnAccionesCalendary
            handleEdit={() =>
              history.push(`/tours/editar-tour/${tour?.tourId}`, tour)
            }
            handleDelete={() => handleDeleteTour(tour)}
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
