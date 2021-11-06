import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import {
  useDeleteCategoriaMutation,
  useGetCategoriaQuery
} from '../../../generated/graphql'
import { useState } from 'react'
import Spinner from '../../../components/Spinner/Spinner'
import swal from 'sweetalert'

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

  const armarFilasCategorias = (categorias, setDataBody, deleteCategoria) => {
    console.log('categorias filas ', categorias)
    const handleRedirectEditCategory = (id, objCategoria) => {
      history.push(`/categorias/editar-categoria/${id}`, objCategoria)
    }

    const filasCategorias = categorias.map((categoria) => ({
      imagen: (
        <img
          src={categoria?.imagenPrincipalCategoria?.url}
          className="w-26 h-22"
        />
      ),
      nombre: categoria?.tituloCategoria,
      estado: <BtnEstado estado={categoria?.estadoCategoria} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: (
        <BtnAcciones
          handleEdit={() =>
            handleRedirectEditCategory(categoria?.categoriaId, categoria)
          }
          handleDelete={() => deleteCategoria(categoria)}
        />
      )
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
      armarFilasCategorias(
        categorias.GetCategoria,
        setDataBody,
        deleteCategoria
      )
    }
  })

  const [deleteCategoriaMutation] = useDeleteCategoriaMutation({
    onCompleted: (data) => {
      console.log('onCompleted delete', data)
    },
    onError: (err) => {
      console.log('onError delete', err?.debugMessage)
      swal({
        title: 'Eliminando',
        icon: 'success'
      })
    }
  })

  const deleteCategoria = (categoria) => {
    swal({
      title: `Desea eliminar la categoria ${categoria?.tituloCategoria}?`,
      text: 'Una vez eliminada, no podrás recuperar la categoria!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(async (rpta) => {
      if (rpta) {
        deleteCategoriaMutation({
          variables: {
            input: {
              categoriaId: categoria.categoriaId
            }
          }
        })
      }
    })
  }

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
