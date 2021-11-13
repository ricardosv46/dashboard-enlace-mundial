import swal from 'sweetalert'
import {
  useCreateImageMutation,
  useDeleteImageMutation,
  useGetImagenesQuery,
  useUpdateImageMutation
} from '../generated/graphql'

const handleError = (err) => {
  // validar errores
  // eslint-disable-next-line eqeqeq
  console.log(err?.graphQLErrors)
  swal('Error', 'Hubo un error en el servidor', 'error')
}

const useGaleriaServices = () => {
  const { loading, data, refetch } = useGetImagenesQuery({
    fetchPolicy: 'network-only'
  })

  const [uploadImagesMutation] = useCreateImageMutation({
    onError: handleError
  })

  const [deleteImagenMutation, { loading: loadingDelete }] =
    useDeleteImageMutation({
      onError: handleError
    })

  const [updateImagenMutation, { loading: loadingUpadate }] =
    useUpdateImageMutation({
      onError: handleError
    })
  // Retorno la data en la variable imagenes
  const imagenes = data ? data?.GetImagenes : []

  // Funciones para manejar la galeria

  const uploadImages = async (images) => {
    if (Array.isArray(images)) {
      const promises = images.map((image) => {
        return uploadImagesMutation({
          variables: {
            imagen: image,
            input: { descripcion: 'Test' }
          }
        })
      })
      const data = await Promise.all([...promises])
      console.log('ARRAY', data)
    } else {
      const res = await uploadImagesMutation({
        variables: {
          imagen: images,
          input: { descripcion: 'Test' }
        }
      })
      console.log('OBJECT', res)
    }

    refetch()
  }

  const deleteImagen = (id) => {
    swal({
      title: '¿Esta seguro que desea eliminar esta Imágen?',
      text: 'Una vez eliminada, no podrás recuperar la imágen!',
      icon: 'warning',
      buttons: ['NO', 'SI'],
      timer: 5000,
      dangerMode: true
    }).then(async (respuesta) => {
      if (respuesta) {
        if (loadingDelete === false) {
          const res = await deleteImagenMutation({
            variables: {
              input: {
                id: id
              }
            }
          }).catch((error) => console.log('error', error))
          console.log(res)
          refetch()
          swal({
            title: 'Eliminado',
            text: 'Se elimino correctamente la Imágen',
            icon: 'success',
            button: 'Aceptar',
            timer: 2000
          })
        }
      }
    })
  }

  const updateImagen = async (id, descripcion) => {
    if (loadingUpadate === false) {
      const res = await updateImagenMutation({
        variables: {
          input: {
            id: id,
            descripcion: descripcion
          }
        }
      }).catch((error) => console.error(error))
      console.log(res)
      refetch()
      swal({
        title: 'Actualizar',
        text: 'Se Actualizo correctamente el atributo Alt',
        icon: 'success',
        button: 'Aceptar',
        timer: 2000
      })
    }
  }
  return { imagenes, loading, deleteImagen, updateImagen, uploadImages }
}

export default useGaleriaServices
