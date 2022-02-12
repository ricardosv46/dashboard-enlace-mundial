import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../graphql/query/getAllUser'

// Obtenemos todas los usuarios
export const useUserServices = () => {
  const { data, loading: loadingGetData } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Users',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: {
      estado: '',
      numberPaginate: 1,
      page: 1,
      tipoUsuario: 1
    }
  })

  const db = data && data?.GetAllUsers.data

  return {
    db,
    loadingGetData
  }
}
