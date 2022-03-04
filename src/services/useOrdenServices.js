import { useMutation, useQuery } from '@apollo/client'
import { UPDATE_ORDEN_TOUR } from '../graphql/mutation/updateOrdenTour'

import { GET_ALL_ORDEN_TOUR } from '../graphql/query/getAllOrdenTour'

export const useOrdenServices = (
  input = { page: 0, numberPaginate: 10, estadoOrdenTour: '' }
) => {
  const {
    data,
    loading: loadingGetData,
    refetch
  } = useQuery(GET_ALL_ORDEN_TOUR, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllOrdenTour ',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: {
      ...input
    }
  })

  const dataOrden = data ? data?.GetAllOrdenTour?.data : []
  const nroTotalItems = data ? data?.GetAllOrdenTour?.nroTotalItems : []

  const [UpdateOrdenTourEstado, { loading: loadingUpdate }] = useMutation(
    UPDATE_ORDEN_TOUR,
    {
      onError: (err) => {
        console.log(
          'onError Update Orden Tour Estado',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const updateOrdenTourEstado = async ({ ordenTourId, estadoOrdenTour }) => {
    const resp = await UpdateOrdenTourEstado({
      variables: {
        input: {
          ordenTourId,
          estadoOrdenTour
        }
      }
    })
    refetch()
    console.log('UpdateOrdenTourEstado')
    if (resp.data?.UpdateOrdenTour) return 'exito'
  }

  return {
    dataOrden,
    nroTotalItems,
    loadingGetData,
    updateOrdenTourEstado,
    loadingUpdate
  }
}
