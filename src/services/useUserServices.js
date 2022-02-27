import { useMutation, useQuery } from '@apollo/client'
import { DELETE_USER } from '../graphql/mutation/deleteUser'
import { GET_ALL_USERS } from '../graphql/query/getAllUser'

// Obtenemos todas los usuarios
export const useUserServices = () => {
  const {
    data,
    refetch,
    loading: loadingGetData
  } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Users',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: {
      estado: '',
      numberPaginate: 12,
      page: 1,
      tipoUsuario: 2
    }
  })

  const db = data && data?.GetAllUsers.data

  const [deleteUsers, { loading: loadingDelete }] = useMutation(DELETE_USER, {
    onError: (err) => {
      console.log('onError Delete User ', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const deleteUser = async ({ id }) => {
    const resp = await deleteUsers({
      variables: {
        input: {
          userId: id
        }
      }
    })
    refetch()
    if (resp.data?.deleteUser) return 'exito'
  }

  return {
    db,
    loadingGetData,
    deleteUser,
    loadingDelete
  }
}
