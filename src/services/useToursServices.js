import swal from 'sweetalert'
import {
  useDeleteTourMutation,
  useGetAllTourQuery
} from '../generated/graphql'

export const useToursServices = () => {
  const { loading, data, refetch } = useGetAllTourQuery({
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoTour: ''
    }
  })
  const db = data ? data?.GetAllTour?.data : []
  const [deleteTourMutation] = useDeleteTourMutation({
    onError: (err) => {
      // validar errores
      console.log('onError delete', err?.graphQLErrors[0]?.debugMessage)
      swal('Error', 'Hubo un error en el servidor', 'error')
    }
  })

  const deleteTour = (tour) => {
    swal({
      title: `Desea eliminar el tour ${tour?.tituloTour}?`,
      text: 'Una vez eliminada, no podrás recuperar el tour!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(async (rpta) => {
      if (rpta) {
        await deleteTourMutation({
          variables: {
            input: {
              touId: tour.touId
            }
          }
        }).catch((error) => console.log('error', error))
        refetch()
        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente el tour',
          icon: 'success',
          button: 'Aceptar',
          timer: 5000
        })
      }
    })
  }

  return { db, loading, deleteTour }
}
