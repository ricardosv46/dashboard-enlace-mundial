import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import BtnAcciones from '../../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../../components/BtnEstado/BtnEstado'
import Button from '../../../../components/Buttons/Button'
import Heading from '../../../../components/Heading'
import Spinner from '../../../../components/Spinner/Spinner'
import TableGeneral from '../../../../components/Tables/TableGeneral'
import { useCategoriasBlogServices } from '../../../../services/useCategoriasBlogServices'

const dataHead = [
  ['Id', 'min-w-10', 'left'],
  ['Imagen', 20, 'left'],
  ['Nombre', 52, 'left'],
  ['Estado', 20, 'center'],
  ['Destacar', 10, 'center'],
  ['Acciones', 24, 'center']
]
const ListarCategoriasBlog = () => {
  const history = useHistory()
  const [dataBody, setDataBody] = useState(null)
  const { db, loading, deleteCategoria } = useCategoriasBlogServices()

  const armarFilasCategorias = (
    data,
    setDataBody,
    deleteCategoria
  ) => {
    const filasCategorias = data.map((categoria) => ({
      id: categoria.categoriaBlogId,
      imagen: (
        <img
          src={categoria?.imagenPrincipalCategoriaBlog?.url}
          className="w-26 h-22"
        />
      ),
      nombre: categoria?.tituloCategoriaBlog,
      estado: <BtnEstado estado={categoria?.estadoCategoriaBlog} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: (
        <BtnAcciones
          handleEdit={() =>
            history.push('/')
          }
          handleDelete={() => deleteCategoria(categoria)}
        />
      )
    }))

    if (filasCategorias.length > 0) {
      setDataBody(filasCategorias)
    }
  }

  useEffect(() => {
    armarFilasCategorias(db, setDataBody, deleteCategoria)
  }, [db])

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">
      <div className="flex justify-between mb-5">
        <Heading>Categorias</Heading>

        <Button
          variant="primary"
          size="md"
          onClick={() => history.push('/blogs/categorias/crear-categoria')}
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

export default ListarCategoriasBlog
