import { useState } from 'react'
import swal from 'sweetalert'
import {
  useDeleteCategoriaMutation,
  useGetCategoriaQuery
} from '../generated/graphql'

export const useCategoriasServices = () => {
  const [data, setData] = useState([])

  const { loading } = useGetCategoriaQuery({
    fetchPolicy: 'network-only',
    variables: {
      estadoCategoria: ''
    },
    onCompleted: (categorias) => {
      if (categorias.GetCategoria) {
        setData(categorias.GetCategoria)
      }
    }
  })

  const [deleteCategoriaMutation] = useDeleteCategoriaMutation({
    onError: (err) => {
      // validar errores
      console.log('onError delete', err?.graphQLErrors[0]?.debugMessage)
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
        }).catch((error) => console.log('error', error))
      }
    })
  }

  return { data, loading, deleteCategoria }
}
