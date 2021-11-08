import { useState } from 'react'
import swal from 'sweetalert'
import { useDeleteBlogMutation, useGetAllBlogQuery } from '../generated/graphql'

export const useBlogsServices = () => {
  const [data, setData] = useState([])

  const { loading } = useGetAllBlogQuery({
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoBlog: ''
    },
    onCompleted: (blogs) => {
      if (blogs.GetAllBlog.data.length > 0) {
        setData(blogs.GetAllBlog.data)
      }
    }
  })

  const [deleteBlogMutation] = useDeleteBlogMutation({
    onError: (err) => {
      // validar errores
      console.log('onError delete', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const deleteBlog = (blog) => {
    swal({
      title: `Desea eliminar el blog ${blog?.tituloBlog}?`,
      text: 'Una vez eliminada, no podrás recuperar el blog!',
      icon: 'warning',
      buttons: ['NO', 'SI'],
      timer: 5000,
      dangerMode: true
    }).then((rpta) => {
      if (rpta) {
        deleteBlogMutation({
          variables: {
            input: {
              categoriaBlogId: blog.blogId
            }
          }
        }).catch((error) => console.log('error', error))
        const newData = data.filter(
          (el) => el.blogId !== blog.blogId
        )
        setData(newData)
        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente el Blog',
          icon: 'success',
          button: 'Aceptar',
          timer: 5000
        })
      }
    })
  }

  return { data, loading, deleteBlog }
}
