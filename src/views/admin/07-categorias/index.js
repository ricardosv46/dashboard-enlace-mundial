import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import { useEffect, useState } from 'react'
import Spinner from '../../../components/Spinner/Spinner'
import { useCategoriasServices } from '../../../services/useCategoriaServices'

const Categorias = () => {
  const history = useHistory()
  const [dataBody, setDataBody] = useState([])
  const { db, loading, deleteCategoria } = useCategoriasServices()

  // console.log('data vista ', db)

  const dataHead = [
    ['Id', 5, 'left'],
    ['Imagen', 20, 'left'],
    ['Nombre', 52, 'left'],
    ['Estado', 10, 'center'],
    ['Destacar', 10, 'center'],
    ['Acciones', 16, 'center']
  ]

  useEffect(() => {
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
        estado: <BtnEstado estado={categoria?.estadoCategoria} />,
        descatar: <BtnDestacado estado={false} />,
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
    armarFilasCategorias(db, setDataBody, deleteCategoria)
  }, [db, loading])

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

export default Categorias
