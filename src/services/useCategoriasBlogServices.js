import { useState } from 'react'
// import { useHistory } from 'react-router'
import swal from 'sweetalert'
import {
  useDeleteCategoriaBlogMutation,
  useGetAllCategoriaBlogQuery
} from '../generated/graphql'

export const useCategoriasBlogServices = () => {
  // const history = useHistory()
  const [db, setDb] = useState([])
  // const [confirmacion, setConfirmacion] = useState(false)
  // history.push('/blogs/categorias/editar-categoria')
  const { loading } = useGetAllCategoriaBlogQuery({
    fetchPolicy: 'network-only',
    variables: {
      estadoCategoriaBlog: ''
    },
    onCompleted: (categoriasBlog) => {
      if (categoriasBlog.GetAllCategoriaBlog) {
        setDb(categoriasBlog.GetAllCategoriaBlog)
      }
    }
  })

  const [deleteCategoriaBlog] = useDeleteCategoriaBlogMutation({
    onError: (err) => {
      // validar errores
      // eslint-disable-next-line eqeqeq
      console.log(err?.graphQLErrors)
      // swal('Error', 'Hubo un error en el servidor', 'error')
    }
  })

  const deleteCategoria = (categoriaBlog) => {
    swal({
      title: `Desea eliminar la categoria ${categoriaBlog.tituloCategoriaBlog}?`,
      text: 'Una vez eliminada, no podrás recuperar la categoria!',
      icon: 'warning',
      buttons: ['NO', 'SI'],
      timer: 5000,
      dangerMode: true
    }).then((respuesta) => {
      if (respuesta) {
        deleteCategoriaBlog({
          variables: {
            input: {
              categoriaBlogId: categoriaBlog.categoriaBlogId
            }
          },
          refetchQueries: [{ query: useGetAllCategoriaBlogQuery }]
        }).catch((error) => console.log('error', error))

        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente la Categoria',
          icon: 'success',
          button: 'Aceptar',
          timer: 5000
        })
      }
    })
  }
  return { db, loading, deleteCategoria }
}
