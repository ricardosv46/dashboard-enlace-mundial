import { useQuery } from '@apollo/client'
import { GET_ALL_TOURS } from '../graphql/query/getAllTours'

export const useToursServices = (
  input = { page: 0, numberPaginate: 10, estadoTour: '' }
) => {
  const { loading: loadingGetData, data } = useQuery(GET_ALL_TOURS, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Tours',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: { ...input }
  })

  return {
    data,
    loadingGetData
  }
}
