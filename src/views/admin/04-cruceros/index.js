import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import BtnAccionesCalendary from '../../../components/btnAcciones/BtnAccionesCalendary'
import { useCruceroServices } from '../../../services/useCruceroServices'

const Cruceros = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 'min-w-4', 'left'],
    ['Foto', 'min-w-30', 'left'],
    ['Título', 'min-w-40', 'left'],
    ['Categoría', 'min-w-50', 'left'],
    ['Estado', '', 'center'],
    ['Destacado', '', 'center'],
    ['Acciones', '', 'left']
  ]

  const [dataBody, setDataBody] = useState([])
  const { db, loading, deleteCrucero } = useCruceroServices()

  console.log('data vista ', db)

  const armarFilasCrucero = (
    data,
    setDataBody,
    handleDeleteCrucero
  ) => {
    const filasCrucero = data.map((crucero) => ({
      id: crucero?.cruceroId,
      imagen: (
        <img
          src={crucero?.imagenPrincipalCrucero?.url}
          className="w-26 h-22"
        />
      ),
      nombre: crucero?.tituloCrucero,
      categoria: crucero?.Categoria?.tituloCategoria,
      estado: <BtnEstado estado={crucero?.estadoCrucero} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: (
        <BtnAccionesCalendary
          handleEdit={() =>
            history.push(
              `/tour/editar-tour/${crucero.cruceroId}`,
              crucero
            )
          }
          handleDelete={() => handleDeleteCrucero(crucero)}
        />
      )
    }))

    if (filasCrucero.length >= 0) {
      setDataBody(filasCrucero)
    }
  }

  useEffect(() => {
    armarFilasCrucero(db, setDataBody, deleteCrucero)
  }, [db, loading])

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Cruceros</Heading>
        <Button
          onClick={() => history.push('/cruceros/crear-crucero')}
          size="md"
        >
          + Agregar Crucero
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Cruceros
