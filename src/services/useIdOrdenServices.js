import { useQuery } from '@apollo/client'
import { GET_ID_ORDEN_TOUR } from '../graphql/query/getIdOrdenTour'

export const useIdOrdenServices = ({ ordenTourId }) => {
  const { data, loading: loadingGetData } = useQuery(GET_ID_ORDEN_TOUR, {
    fetchPolicy: 'network-only',
    variables: {
      ordenTourId
    },
    onError: (err) => {
      console.log(
        'onError getAllData Orden tour user',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })

  const dataIdOrden = data && data?.GetIdOrdenTour

  return {
    dataIdOrden,
    loadingGetData
  }
}
