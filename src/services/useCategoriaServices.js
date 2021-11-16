import swal from 'sweetalert'
import {
  useCreateCategoriaMutation,
  useDeleteCategoriaMutation,
  useGetCategoriaQuery,
  useUpdateCategoriaMutation
} from '../generated/graphql'

export const useCategoriasServices = () => {
  const { loading, data, refetch } = useGetCategoriaQuery({
    fetchPolicy: 'network-only',
    variables: {
      estadoCategoria: ''
    }
  })

  const db = data ? data?.GetCategoria : []
  const [
    createCategoriaMutation,
    { loading: loadingCreate, error: errorCreate }
  ] = useCreateCategoriaMutation({
    onError: (err) => {
      // validar errores
      console.log(
        'onError creacion Categoria',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })
  const [deleteCategoriaMutation] = useDeleteCategoriaMutation({
    onError: (err) => {
      // validar errores
      console.log('onError delete', err?.graphQLErrors[0]?.debugMessage)
    }
  })
  const [
    updateCategoriaMutation,
    { loading: loadingUpdate, error: errorUpdate }
  ] = useUpdateCategoriaMutation({
    onError: (err) => {
      // validar errores
      console.log(
        'onError Update Categoria',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })

  const deleteCategoria = (categoria) => {
    swal({
      title: `Desea eliminar la categoria ${categoria?.tituloCategoria}?`,
      text: 'Se borraran todos los tours que esten asociados a esta categoria',
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
        }).catch((error) => console.log('error', error))
        refetch()
        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente la categoria',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    })
  }

  const createCategoria = async ({
    titulo,
    descripcion,
    estado,
    keywords,
    idImgPrincipal,
    idImgSecundaria
  }) => {
    if (loadingCreate === false) {
      const res = await createCategoriaMutation({
        variables: {
          input: {
            tituloCategoria: titulo,
            descripcion: descripcion,
            estadoCategoria: estado,
            keywordsCategoria: keywords.join(','),
            imagenPrincipalCategoria: idImgPrincipal,
            imagenSecundariaCategoria: idImgSecundaria
          }
        }
      }).catch((error) => console.error('error', error))
      console.log(res, errorCreate)
      refetch()

      if (!errorCreate) {
        swal({
          title: 'CREAR',
          text: 'Se creo correctamente la Categoria',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    }
  }

  const updateCategoria = async ({
    titulo,
    descripcion,
    estado,
    keywords,
    idImgPrincipal,
    idImgSecundaria,
    id
  }) => {
    if (loadingUpdate === false) {
      const res = await updateCategoriaMutation({
        variables: {
          input: {
            categoriaId: id,
            tituloCategoria: titulo,
            descripcion: descripcion,
            estadoCategoria: estado,
            keywordsCategoria: keywords.join(','),
            imagenPrincipalCategoria: idImgPrincipal,
            imagenSecundariaCategoria: idImgSecundaria
          }
        }
      }).catch((error) => console.error('error', error))
      console.log(res, errorCreate)
      refetch()
      if (!errorCreate) {
        swal({
          title: 'ACTUALIZAR',
          text: 'Se actualizo correctamente la Categoria',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    }
  }

  return {
    db,
    loading,
    deleteCategoria,
    loadingCreate,
    loadingUpdate,
    errorCreate,
    errorUpdate,
    createCategoria,
    updateCategoria
  }
}
