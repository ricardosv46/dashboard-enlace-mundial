import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import BtnAccionesCalendary from '../../../components/btnAcciones/BtnAccionesCalendary'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import TableGeneral from '../../../components/Tables/TableGeneral'
import { useLunaMielServices } from '../../../services/useLunaMielServices'

const LunaDeMiel = () => {
  const dataHead = [
    ['Id', 'min-w-4', 'left'],
    ['Foto', 'min-w-30', 'left'],
    ['Titulo', 'min-w-50', 'left'],
    ['Categoría', 'min-w-50', 'left'],
    ['Estado', '', 'center'],
    ['Destacado', '', 'center'],
    ['Acciones', '', 'left']
  ]

  const history = useHistory()
  const { db, deleteLunaMiel, loading, loadingDelete } = useLunaMielServices()
  console.log('valor de data luna miel', db.length)
  const [dataBody, setDataBody] = useState([])
  // console.log('valor de data luna miel', dataBody)
  console.log('valor loadind delete', loadingDelete)
  useEffect(() => {
    if (db.length >= 0) {
      db.map((lunaMiel) =>
        setDataBody([
          ...dataBody,

          {
            id: lunaMiel?.lunaMielId,
            imagen: (
              <img
                src={lunaMiel?.imagenPrincipalLuna?.url}
                className="w-26 h-22"
              />
            ),
            nombre: lunaMiel?.tituloLuna,
            categoria: lunaMiel?.Categoria?.tituloCategoria,
            estado: <BtnEstado estado={lunaMiel?.estadoLuna} />,
            descatar: <BtnDestacado estado={false} />,
            acciones: (
              <BtnAccionesCalendary
                handleEdit={() =>
                  history.push(
                    `/luna-de-miel/editar-luna-de-miel/${lunaMiel?.slugLuna}`,
                    lunaMiel
                  )
                }
                handleDelete={() => deleteLunaMiel(lunaMiel)}
              />
            )
          }
        ])
      )
    }
  }, [db])
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Lunas de Miel</Heading>
        <Button
          onClick={() => history.push('/luna-de-miel/crear-luna-de-miel')}
          size="md"
        >
          + Agregar Luna de Miel
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

export default LunaDeMiel
