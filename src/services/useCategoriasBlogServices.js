// import { useHistory } from 'react-router'
import swal from 'sweetalert'
import {
  useDeleteCategoriaBlogMutation,
  useGetAllCategoriaBlogQuery
} from '../generated/graphql'

export const useCategoriasBlogServices = () => {
  // const history = useHistory()
  // const [confirmacion, setConfirmacion] = useState(false)
  // history.push('/blogs/categorias/editar-categoria')
  const { loading, data, refetch } = useGetAllCategoriaBlogQuery({
    fetchPolicy: 'network-only',
    variables: {
      estadoCategoriaBlog: ''
    }
  })
  const db = data ? data?.GetAllCategoriaBlog : []
  const [deleteCategoriaBlog] = useDeleteCategoriaBlogMutation({
    onError: (err) => {
      // validar errores
      // eslint-disable-next-line eqeqeq
      console.log(err?.graphQLErrors)
      swal('Error', 'Hubo un error en el servidor', 'error')
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
    }).then(async (respuesta) => {
      if (respuesta) {
        const res = await deleteCategoriaBlog({
          variables: {
            input: {
              categoriaBlogId: categoriaBlog.categoriaBlogId
            }
          }
        }).catch((error) => console.log('error', error))
        console.log(res)
        refetch()
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
