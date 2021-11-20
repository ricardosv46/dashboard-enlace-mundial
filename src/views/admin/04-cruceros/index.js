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
  const {
    db,
    loading,
    deleteCrucero,
    updateCruceroDestacado,
    updateCruceroEstado
  } = useCruceroServices()

  // console.log('data vista ', db)

  const armarFilasCrucero = (data, setDataBody, handleDeleteCrucero) => {
    const filasCrucero = data.map((crucero) => ({
      id: crucero?.cruceroId,
      imagen: (
        <img src={crucero?.imagenPrincipalCrucero?.url} className="w-26 h-22" />
      ),
      nombre: crucero?.tituloCrucero,
      categoria: crucero?.Categoria?.tituloCategoria,
      estado: (
        <div
          div
          className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
          onClick={() => {
            updateCruceroEstado({
              id: crucero?.cruceroId,
              estado:
                crucero?.estadoCrucero === 'Activado'
                  ? 'Desactivado'
                  : 'Activado'
            })
          }}
        >
          <BtnEstado estado={crucero?.estadoCrucero === 'Activado' ? 1 : 0} />
        </div>
      ),
      descatar: (
        <div
          div
          className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
          onClick={() => {
            updateCruceroDestacado({
              id: crucero?.cruceroId,
              destacado:
                crucero?.destacadoCrucero === 'Activado'
                  ? 'Desactivado'
                  : 'Activado'
            })
          }}
        >
          <BtnDestacado estado={crucero?.destacadoCrucero === 'Activado' && true} />
        </div>
      ),
      acciones: (
        <BtnAccionesCalendary
          handleEdit={() =>
            history.push(
              `/cruceros/editar-crucero/${crucero.cruceroId}`,
              crucero
            )
          }
          handleDelete={() => handleDeleteCrucero(crucero)}
        />
      )
    }))

    if (filasCrucero.length > 0) {
      setDataBody(filasCrucero)
    }
  }

  useEffect(() => {
    armarFilasCrucero(db, setDataBody, deleteCrucero)
  }, [db, loading])

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
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
