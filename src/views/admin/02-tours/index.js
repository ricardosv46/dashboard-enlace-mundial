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
  const dataHead = [
    ['Id', 'min-w-4', 'left'],
    ['Foto', 'min-w-30 ', 'left'],
    ['Titulo', 'min-w-50', 'left'],
    ['Categoria', 'min-w-50', 'left'],
    ['Estado', '', 'center'],
    ['Destacado', '', 'center'],
    ['Acciones', '', 'left']
  ]

  // console.log('data vista ', db)

  const armarFilasTours = (data, setDataBody, handleDeleteTour) => {
    const filasTours = data.map((tour) => ({
      id: tour?.tourId,
      imagen: (
        <img src={tour?.imagenPrincipalTour?.url} className="w-26 h-22" />
      ),
      nombre: tour?.tituloTour,
      categoria: tour?.Categoria?.tituloCategoria,
      estado: <BtnEstado estado={tour?.estadoTour} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: (
        <BtnAccionesCalendary
          handleEdit={() =>
            history.push(`/tours/editar-tour/${tour.slugTour}`, tour)
          }
          handleDelete={() => handleDeleteTour(tour)}
        />
      )
    }))

    if (filasTours.length > 0) {
      setDataBody(filasTours)
    }
  }

  useEffect(() => {
    armarFilasTours(db, setDataBody, deleteTour)
  }, [db])
  return (
    <div className="shadow  md:rounded bg-white p-5 py-10 md:p-10">
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
