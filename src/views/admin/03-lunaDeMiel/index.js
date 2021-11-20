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
  const {
    db,
    deleteLunaMiel,
    updateLunaMielEstado,
    loading,
    updateLunaMielDestacado,
    loadingUpdate
  } = useLunaMielServices()
  console.log('valor update', loadingUpdate)
  // console.log('valor de data luna miel', db)
  const [dataBody, setDataBody] = useState([])

  const armarFilasLunaMiel = (data, setDataBody, handleDeleteTour) => {
    const filasLunaMiel = data.map((lunaMiel) => {
      return {
        id: lunaMiel?.lunaMielId,
        imagen: (
          <img src={lunaMiel?.imagenPrincipalLuna?.url} className="w-26 h-22" />
        ),
        nombre: lunaMiel?.tituloLuna,
        categoria: lunaMiel?.Categoria?.tituloCategoria,
        estado: (
          <div
            div
            className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
            onClick={() => {
              updateLunaMielEstado({
                id: lunaMiel?.lunaMielId,
                estado:
                  lunaMiel?.estadoLuna === 'Activado'
                    ? 'Desactivado'
                    : 'Activado'
              })
            }}
          >
            <BtnEstado estado={lunaMiel?.estadoLuna === 'Activado' ? 1 : 0} />
          </div>
        ),
        descatar: (
          <div
            div
            className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
            onClick={() => {
              updateLunaMielDestacado({
                id: lunaMiel?.lunaMielId,
                destacado:
                  lunaMiel?.destacadoLuna === 'Activado'
                    ? 'Desactivado'
                    : 'Activado'
              })
            }}
          >
            <BtnDestacado
              estado={lunaMiel?.destacadoLuna === 'Activado' && true}
            />
          </div>
        ),
        acciones: (
          <BtnAccionesCalendary
            handleEdit={() =>
              history.push(
                `/luna-de-miel/editar-luna-de-miel/${lunaMiel?.slugLuna}`,
                lunaMiel
              )
            }
            handleDelete={() => handleDeleteTour(lunaMiel)}
          />
        )
      }
    })
    if (filasLunaMiel.length > 0) {
      setDataBody(filasLunaMiel)
    }
  }
  useEffect(() => {
    if (db.length > 0) {
      armarFilasLunaMiel(db, setDataBody, deleteLunaMiel)
    }
  }, [db, loadingUpdate])
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
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
