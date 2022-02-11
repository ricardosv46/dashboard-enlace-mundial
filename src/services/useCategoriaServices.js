import { useMutation, useQuery } from '@apollo/client'
import { CREATE_CATEGORYS } from '../graphql/mutation/createCategoria'
// import swal from 'sweetalert'
// import {
//   useCreateCategoriaMutation,
//   useDeleteCategoriaMutation,
//   useUpdateCategoriaMutation
// } from '../generated/graphql'
import { GET_ALL_CATEGORYS } from '../graphql/query/getAllCategorias'

// Obtenemos todas las categorias
export const useCategoriasServices = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_CATEGORYS, {
    fetchPolicy: 'network-only',
    variables: {
      estadoCategoria: ''
    },
    onError: (err) => {
      console.log(
        'onError getAllData Categorys',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })
  refetch()
  const db = data && data?.GetCategoria

  const [createCategory, { loading: loadingCreate }] = useMutation(
    CREATE_CATEGORYS,
    {
      onError: (err) => {
        console.log(
          'onError Update Actividades Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const createcategorysTour = async ({
    titulo,
    descripcion,
    keywords,
    idImgPrincipal,
    idImgSecundaria
  }) => {
    const resp = await createCategory({
      variables: {
        input: {
          tituloCategoria: titulo,
          descripcion: descripcion,
          keywordsCategoria: keywords.join(','),
          imagenPrincipalCategoria: idImgPrincipal,
          imagenSecundariaCategoria: idImgSecundaria
        }
      }
    })
    console.log('CreateCategorysTour', resp)
    refetch()
    if (resp.data?.CreateActividadesTour) return 'exito'
  }

  // const [
  //   createCategoriaMutation,
  //   { loading: loadingCreate, error: errorCreate }
  // ] = useCreateCategoriaMutation({
  //   onError: (err) => {
  //     // validar errores
  //     console.log(
  //       'onError creacion Categoria',
  //       err?.graphQLErrors[0]?.debugMessage
  //     )
  //   }
  // })
  // const [
  //   deleteCategoriaMutation,
  //   { loading: loadingDelete, error: errorDelete }
  // ] = useDeleteCategoriaMutation({
  //   onError: (err) => {
  //     // validar errores
  //     console.log('onError delete', err?.graphQLErrors[0]?.debugMessage)
  //   }
  // })
  // const [
  //   updateCategoriaMutation,
  //   { loading: loadingUpdate, error: errorUpdate }
  // ] = useUpdateCategoriaMutation({
  //   onError: (err) => {
  //     // validar errores
  //     console.log(
  //       'onError Update Categoria',
  //       err?.graphQLErrors[0]?.debugMessage
  //     )
  //   }
  // })

  // const createCategoria = async ({
  //   titulo,
  //   descripcion,
  //   estado,
  //   keywords,
  //   idImgPrincipal,
  //   idImgSecundaria
  // }) => {
  //   if (loadingCreate === false) {
  //     const res = await createCategoriaMutation({
  //       variables: {
  //         input: {
  //           tituloCategoria: titulo,
  //           descripcion: descripcion,
  //           estadoCategoria: estado,
  //           keywordsCategoria: keywords.join(','),
  //           imagenPrincipalCategoria: idImgPrincipal,
  //           imagenSecundariaCategoria: idImgSecundaria
  //         }
  //       }
  //     }).catch((error) => console.error('error', error))
  //     console.log(res, errorDelete)
  //     refetch()
  //   }
  // }

  // const deleteCategoria = async ({ id }) => {
  //   if (loadingDelete === false) {
  //     const res = await deleteCategoriaMutation({
  //       variables: {
  //         input: {
  //           categoriaId: id
  //         }
  //       }
  //     }).catch((error) => console.log('error', error))
  //     console.log(res, errorCreate)
  //     refetch()
  //   }
  // }

  // const updateCategoria = async ({
  //   titulo,
  //   descripcion,
  //   estado,
  //   keywords,
  //   idImgPrincipal,
  //   idImgSecundaria,
  //   id
  // }) => {
  //   if (loadingUpdate === false) {
  //     const res = await updateCategoriaMutation({
  //       variables: {
  //         input: {
  //           categoriaId: id,
  //           tituloCategoria: titulo,
  //           descripcion: descripcion,
  //           estadoCategoria: estado,
  //           keywordsCategoria: keywords.join(','),
  //           imagenPrincipalCategoria: idImgPrincipal,
  //           imagenSecundariaCategoria: idImgSecundaria
  //         }
  //       }
  //     }).catch((error) => console.error('error', error))
  //     console.log(res, errorUpdate)
  //     refetch()
  //     if (!errorCreate) {
  //       swal({
  //         title: 'ACTUALIZAR',
  //         text: 'Se actualizo correctamente la Categoria',
  //         icon: 'success',
  //         button: 'Aceptar',
  //         timer: 2000
  //       })
  //     }
  //   }
  // }

  // const updateCategoriaEstado = async ({ estado, id }) => {
  //   if (loadingUpdate === false) {
  //     const res = await updateCategoriaMutation({
  //       variables: {
  //         input: {
  //           categoriaId: id,
  //           estadoCategoria: estado
  //         }
  //       }
  //     }).catch((error) => console.error('error', error))
  //     console.log(res, errorCreate)
  //     refetch()
  //   }
  // }

  return {
    db,
    loading,
    loadingCreate,
    createcategorysTour
    // deleteCategoria,
    // loadingCreate,
    // loadingUpdate,
    // errorCreate,
    // errorUpdate,
    // createCategoria,
    // updateCategoria,
    // updateCategoriaEstado
  }
}
