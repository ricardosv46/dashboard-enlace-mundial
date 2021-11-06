import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import { useGetCategoriaQuery } from '../../../generated/graphql'
import { useState } from 'react'
import Spinner from '../../../components/Spinner/Spinner'

const Categorias = () => {
  const history = useHistory()
  const [dataBody, setDataBody] = useState([])

  const dataHead = [
    ['Imagen', 20, 'left'],
    ['Nombre', 52, 'left'],
    ['Estado', 20, 'center'],
    ['Destacar', 10, 'center'],
    ['Acciones', 24, 'center']
  ]

  const handleRedirectNewCategory = () => {
    history.push('/categorias/crear-categoria')
  }

  const armarFilasCategorias = (categorias, setDataBody) => {
    const handleRedirectEditCategory = () => {
      history.push('/categorias/editar-categoria')
    }

    const filasCategorias = categorias.map((categoria) => ({
      id: categoria?.categoriaId,
      imagen: (
        <img
          src={categoria?.imagenPrincipalCategoria?.url}
          className="w-26 h-22"
        />
      ),
      nombre: categoria?.tituloCategoria,
      estado: <BtnEstado estado={categoria?.estadoCategoria} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    }))

    if (filasCategorias.length > 0) {
      setDataBody(filasCategorias)
    }
  }

  // TRAE LA DATA
  const { loading } = useGetCategoriaQuery({
    fetchPolicy: 'network-only',
    variables: {
      estadoCategoria: ''
    },
    onCompleted: (categorias) => {
      armarFilasCategorias(categorias.GetCategoria, setDataBody)
    }
  })

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">
      <div className="flex justify-between mb-5">
        <Heading>Categorias</Heading>

        <Button variant="primary" size="md" onClick={handleRedirectNewCategory}>
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
