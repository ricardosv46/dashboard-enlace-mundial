import { useState } from 'react'
import swal from 'sweetalert'
import {
  useDeleteTourMutation,
  useGetAllTourQuery
} from '../generated/graphql'

export const useToursServices = () => {
  const [data, setData] = useState([])

  const { loading } = useGetAllTourQuery({
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 12,
      page: 1,
      estadoTour: ''
    },
    onCompleted: (tours) => {
      if (tours.GetAllTour.data) {
        setData(tours.GetAllTour.data)
      }
    }

  })

  const [deleteTourMutation] = useDeleteTourMutation({
    onError: (err) => {
      // validar errores
      console.log('onError delete', err?.graphQLErrors[0]?.debugMessage)
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
        deleteTourMutation({
          variables: {
            input: {
              touId: tour.touId
            }
          }
        }).catch((error) => console.log('error', error))
      }
    })
  }

  return { data, loading, deleteTour }
}
