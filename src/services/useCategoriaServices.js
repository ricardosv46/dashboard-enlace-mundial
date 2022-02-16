import { useMutation, useQuery } from '@apollo/client'
import { CREATE_CATEGORYS } from '../graphql/mutation/createCategoria'
import { UPDATE_CATEGORYS } from '../graphql/mutation/updateCategoria'
import { DELETE_CATEGORY } from '../graphql/mutation/deleteCategoria'

import { GET_ALL_CATEGORYS } from '../graphql/query/getAllCategorias'

// Obtenemos todas las categorias
export const useCategoriasServices = () => {
  const {
    data,
    loading: loadingGetData,
    refetch
  } = useQuery(GET_ALL_CATEGORYS, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Categorys',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: {
      estadoCategoria: ''
    }
  })

  const db = data && data?.GetCategoria

  const [CreateCategoria, { loading: loadingCreate }] = useMutation(
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

  const createCategoria = async ({
    titulo,
    descripcion,
    estado,
    keywords,
    idImgPrincipal,
    idImgSecundaria
  }) => {
    const resp = await CreateCategoria({
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
    })
    console.log('CreateCategorysTour', resp)
    refetch()
    if (resp.data?.createCategoria) return 'exito'
  }

  const [updateCategorys, { loading: loadingUpdate }] = useMutation(
    UPDATE_CATEGORYS,
    {
      onError: (err) => {
        console.log(
          'onError Update Categorys Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const updateCategoria = async ({
    titulo,
    descripcion,
    estado,
    keywords,
    idImgPrincipal,
    idImgSecundaria,
    id
  }) => {
    const resp = await updateCategorys({
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
    })
    refetch()
    if (resp.data?.updateCategoria) return 'exito'
  }

  const [deleteCategorys, { loading: loadingDelete }] = useMutation(
    DELETE_CATEGORY,
    {
      onError: (err) => {
        console.log(
          'onError Delete Categoria Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const deleteCategoria = async ({ id }) => {
    const resp = await deleteCategorys({
      variables: {
        input: {
          categoriaId: id
        }
      }
    })
    refetch()
    if (resp.data?.deleteCategoria) return 'exito'
  }

  const updateCategoriaEstado = async ({ estado, id }) => {
    const resp = await updateCategorys({
      variables: {
        input: {
          categoriaId: id,
          estadoCategoria: estado
        }
      }
    })
    refetch()
    if (resp.data?.updateCategoria) return 'exito'
  }

  return {
    db,
    loadingGetData,
    loadingCreate,
    loadingUpdate,
    loadingDelete,
    createCategoria,
    updateCategoria,
    deleteCategoria,
    updateCategoriaEstado
  }
}
