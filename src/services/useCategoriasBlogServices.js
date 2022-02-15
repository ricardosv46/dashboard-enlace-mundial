// import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'
import {
  useDeleteCategoriaBlogMutation,
  useGetAllCategoriaBlogQuery
} from '../generated/graphql'
import { CREATE_CATEGORIA_BLOG } from '../graphql/mutation/createCategoriaBlog'

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

  const [CreateCategoriaBlog, { loading: loadingCreate }] = useMutation(
    CREATE_CATEGORIA_BLOG,
    {
      onError: (err) => {
        console.log(
          'onError Create categoria blog',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const createCategoriaBlog = async ({
    titulo,
    descripcion,
    estado,
    keywords,
    idImgPrincipal,
    idImgSecundaria
  }) => {
    const resp = await CreateCategoriaBlog({
      variables: {
        input: {
          tituloCategoriaBlog: titulo,
          descripcionCategoriaBlog: descripcion,
          estadoCategoriaBlog: estado,
          keywordsCategoriaBlog: keywords.join(','),
          imagenPrincipalCategoriaBlog: idImgPrincipal,
          imagenSecundariaCategoriaBlog: idImgSecundaria
        }
      }
    })
    console.log('CreateCategoriaBlog', resp)
    refetch()
    if (resp.data?.createCategoriaBlog) return 'exito'
  }

  const [deleteCategoriaBlogMutation, { loading: loadingDelete }] =
    useDeleteCategoriaBlogMutation({
      onError: (err) => {
        // validar errores
        // eslint-disable-next-line eqeqeq
        console.log(err?.graphQLErrors)
      }
    })

  const deleteCategoriaBlog = async ({ id }) => {
    if (loadingDelete === false) {
      const res = await deleteCategoriaBlogMutation({
        variables: {
          input: {
            categoriaBlogId: id
          }
        }
      }).catch((error) => console.log('error', error))
      refetch()
      if (res?.data?.DeleteCategoriaBlog) {
        return 'exito'
      }
    }
  }

  // const [deleteCategoriaBlog] = useDeleteCategoriaBlogMutation({
  //   onError: (err) => {
  //     // validar errores
  //     // eslint-disable-next-line eqeqeq
  //     console.log(err?.graphQLErrors)
  //     swal('Error', 'Hubo un error en el servidor', 'error')
  //   }
  // })

  // const deleteCategoria = (categoriaBlog) => {
  //   swal({
  //     title: `Desea eliminar la categoria ${categoriaBlog.tituloCategoriaBlog}?`,
  //     text: 'Una vez eliminada, no podrás recuperar la categoria!',
  //     icon: 'warning',
  //     buttons: ['NO', 'SI'],
  //     timer: 5000,
  //     dangerMode: true
  //   }).then(async (respuesta) => {
  //     if (respuesta) {
  //       const res = await deleteCategoriaBlog({
  //         variables: {
  //           input: {
  //             categoriaBlogId: categoriaBlog.categoriaBlogId
  //           }
  //         }
  //       }).catch((error) => console.log('error', error))
  //       console.log(res)
  //       refetch()
  //       swal({
  //         title: 'Eliminado',
  //         text: 'Se elimino correctamente la Categoria',
  //         icon: 'success',
  //         button: 'Aceptar',
  //         timer: 2000
  //       })
  //     }
  //   })
  // }
  return {
    db,
    loading,
    loadingDelete,
    deleteCategoriaBlog,
    loadingCreate,
    createCategoriaBlog
  }
}
