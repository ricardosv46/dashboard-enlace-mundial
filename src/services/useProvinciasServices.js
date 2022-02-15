import { useQuery } from '@apollo/client'
import { GET_PROVINCIAS } from '../graphql/query/getProvincias'

export const useProvinciasServices = (idDepa) => {
  const {
    data,
    loading: loadingGetData
  } = useQuery(GET_PROVINCIAS, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError get Provincias',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: {
      depCode: idDepa
    }
  })
  const db = data ? data?.GetProvincias : []

  return {
    db,
    loadingGetData
  }
}
