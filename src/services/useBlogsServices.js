import { useMutation } from '@apollo/client'
import { useGetAllBlogQuery } from '../generated/graphql'
import { CREATE_BLOG } from '../graphql/mutation/createBlogs'
import { DELETE_BLOG } from '../graphql/mutation/deleteBolg'
import { UPDATE_BLOG } from '../graphql/mutation/updateBlog'

export const useBlogsServices = (
  input = { page: 0, numberPaginate: 10, estadoBlog: '' }
) => {
  const { data, loading, refetch } = useGetAllBlogQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data ? data?.GetAllBlog?.data : []
  const dbTotalItems = data ? data?.GetAllBlog : []

  const [CreateBlog, { loading: loadingCreate }] = useMutation(CREATE_BLOG, {
    onError: (err) => {
      console.log('onError Create blog', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const createBlog = async ({
    titulo,
    slugCategoria,
    descripcionLarga,
    descripcionCorta,
    estado,
    destacado,
    keywords,
    idImgPrincipal,
    idImgSecundaria,
    galeria
  }) => {
    const resp = await CreateBlog({
      variables: {
        input: {
          tituloBlog: titulo,
          slugCategoriaBlog: slugCategoria,
          descripcionLargaBlog: descripcionLarga,
          descripcionCortaBlog: descripcionCorta,
          estadoBlog: estado,
          destacadoBlog: destacado,
          keywordsBlog: keywords.join(','),
          imagenPrincipalBlog: idImgPrincipal,
          imagenSecundariaBlog: idImgSecundaria,
          galeriaBlog: galeria
        }
      }
    })
    refetch()
    console.log('CreateBlog')
    if (resp.data?.CreateBlog) return 'exito'
  }

  const [UpdateBlog, { loading: loadingUpdate }] = useMutation(UPDATE_BLOG, {
    onError: (err) => {
      console.log('onError Update blog', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const updateBlog = async ({
    id,
    titulo,
    slugCategoria,
    descripcionLarga,
    descripcionCorta,
    estado,
    destacado,
    keywords,
    idImgPrincipal,
    idImgSecundaria,
    galeria
  }) => {
    const resp = await UpdateBlog({
      variables: {
        input: {
          blogId: id,
          tituloBlog: titulo,
          slugCategoriaBlog: slugCategoria,
          descripcionLargaBlog: descripcionLarga,
          descripcionCortaBlog: descripcionCorta,
          estadoBlog: estado,
          destacadoBlog: destacado,
          keywordsBlog: keywords.join(','),
          imagenPrincipalBlog: idImgPrincipal,
          imagenSecundariaBlog: idImgSecundaria,
          galeriaBlog: galeria
        }
      }
    })
    refetch()
    if (resp?.data?.UpdateBlog) {
      return 'exito'
    }
  }

  const updateBlogEstado = async ({
    id,
    titulo,
    slugCategoria,
    descripcionLarga,
    descripcionCorta,
    estado,
    destacado,
    keywords,
    idImgPrincipal,
    idImgSecundaria,
    galeria
  }) => {
    const resp = await UpdateBlog({
      variables: {
        input: {
          blogId: id,
          tituloBlog: titulo,
          slugCategoriaBlog: slugCategoria,
          descripcionLargaBlog: descripcionLarga,
          descripcionCortaBlog: descripcionCorta,
          estadoBlog: estado,
          destacadoBlog: destacado,
          keywordsBlog: keywords,
          imagenPrincipalBlog: idImgPrincipal,
          imagenSecundariaBlog: idImgSecundaria,
          galeriaBlog: galeria
        }
      }
    })
    refetch()
    console.log('UpdateBlogEstado')
    if (resp.data?.updateBlogEstado) return 'exito'
  }

  const [DeleteBlog, { loading: loadingDelete }] = useMutation(DELETE_BLOG, {
    onError: (err) => {
      console.log('onError Delete blog', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const deleteBlog = async ({ id }) => {
    const resp = await DeleteBlog({
      variables: {
        input: {
          blogId: id
        }
      }
    })

    console.log('DeleteBlog', resp)
    refetch()
    if (resp.data?.deleteBlog) return 'exito'
  }

  return {
    db,
    loading,
    dbTotalItems,
    createBlog,
    loadingCreate,
    deleteBlog,
    loadingDelete,
    loadingUpdate,
    updateBlog,
    updateBlogEstado
  }
}
