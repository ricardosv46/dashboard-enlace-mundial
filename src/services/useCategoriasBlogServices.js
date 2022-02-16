import { useMutation } from '@apollo/client'
import {
  useDeleteCategoriaBlogMutation,
  useGetAllCategoriaBlogQuery
} from '../generated/graphql'
import { CREATE_CATEGORIA_BLOG } from '../graphql/mutation/createCategoriaBlog'
import { UPDATE_CATEGORIA_BLOG } from '../graphql/mutation/updateCategoriaBlog'

export const useCategoriasBlogServices = () => {
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
    if (resp.data?.CreateCategoriaBlog) return 'exito'
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

  const [UpdateCategoriaBlog, { loading: loadingUpdate }] = useMutation(
    UPDATE_CATEGORIA_BLOG,
    {
      onError: (err) => {
        console.log(
          'onError Update Categoria Blog',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const updateCategoriaBlog = async ({
    titulo,
    descripcion,
    keywords,
    idImgPrincipal,
    idImgSecundaria,
    id
  }) => {
    const resp = await UpdateCategoriaBlog({
      variables: {
        input: {
          categoriaBlogId: id,
          tituloCategoriaBlog: titulo,
          descripcionCategoriaBlog: descripcion,
          keywordsCategoriaBlog: keywords.join(','),
          imagenPrincipalCategoriaBlog: idImgPrincipal,
          imagenSecundariaCategoriaBlog: idImgSecundaria
        }
      }
    })
    refetch()
    if (resp.data?.UpdateCategoriaBlog) return 'exito'
  }
  const updateCategoriaBlogEstado = async ({ estado, id }) => {
    const resp = await UpdateCategoriaBlog({
      variables: {
        input: {
          categoriaBlogId: id,
          estadoCategoriaBlog: estado
        }
      }
    })
    refetch()
    if (resp.data?.UpdateCategoriaBlog) return 'exito'
  }

  return {
    db,
    loading,
    loadingDelete,
    deleteCategoriaBlog,
    loadingCreate,
    createCategoriaBlog,
    updateCategoriaBlog,
    loadingUpdate,
    updateCategoriaBlogEstado
  }
}
