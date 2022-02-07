import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import { useEffect, useState } from 'react'
import Spinner from '../../../components/Spinner/Spinner'
import { useCategoriasServices } from '../../../services/useCategoriaServices'

const Departamentos = () => {
  const history = useHistory()
  const [dataBody, setDataBody] = useState([])
  const { db, loading, deleteCategoria, updateCategoriaEstado } =
    useCategoriasServices()

  // console.log('data vista ', db)

  const dataHead = [
    ['Id', 'min-w-10', 'left'],
    ['Imagen', 'min-w-20', 'left'],
    ['Nombre', 'min-w-52', 'left'],
    ['Estado', 'min-w-10', 'center'],
    ['Acciones', 'min-w-20', 'center']
  ]
  const armarFilasCategorias = (
    categorias,
    setDataBody,
    handleDeleteCategoria
  ) => {
    const filasCategorias = categorias.map((categoria) => ({
      id: categoria.categoriaId,
      imagen: (
        <img
          src={categoria?.imagenPrincipalCategoria?.url}
          className="w-16 h-10 object-cover"
        />
      ),
      nombre: categoria?.tituloCategoria,
      estado: (
        <div
          div
          className="flex justify-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 p-1"
          onClick={() => {
            updateCategoriaEstado({
              id: categoria?.categoriaId,
              estado:
                categoria?.estadoCategoria === 'Activado'
                  ? 'Desactivado'
                  : 'Activado'
            })
          }}
        >
          <BtnEstado
            estado={categoria?.estadoCategoria === 'Activado' ? 1 : 0}
          />
        </div>
      ),
      acciones: (
        <BtnAcciones
          handleEdit={() =>
            history.push(
              `/categorias/editar-categoria/${categoria?.slugCategoria}`,
              categoria
            )
          }
          handleDelete={() => handleDeleteCategoria(categoria)}
        />
      )
    }))

    if (filasCategorias.length > 0) {
      setDataBody(filasCategorias)
    }
  }
  useEffect(() => {
    if (db.length > 0) {
      armarFilasCategorias(db, setDataBody, deleteCategoria)
    }
  }, [db])

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen animate__fadeIn animate__animated">
      <div className="flex justify-between mb-5">
        <Heading>Categorias</Heading>

        <Button
          variant="primary"
          size="md"
          onClick={() => history.push('/categorias/crear-categoria')}
        >
          + Agregar Categoria
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

export default Departamentos
