import { useMutation, useQuery } from '@apollo/client'
import { GET_INCLUYE_TOUR } from '../graphql/query/getIncluyeTour'
import { CREATE_INCLUYE_TOUR } from '../graphql/mutation/createIncluyeTour'
import { UPDATE_INCLUYE_TOUR } from '../graphql/mutation/updateIncluyeTour'
import { DELETE_INCLUYE_TOUR } from '../graphql/mutation/deleteIncluyeTour'
export const useIncluyeServices = () => {
  const {
    data,
    loading: loadingGetData,
    refetch
  } = useQuery(GET_INCLUYE_TOUR, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Incluye',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })

  const db = data && data?.GetIncluyeTour

  const [createIncluye, { loading: loadingCreate }] = useMutation(
    CREATE_INCLUYE_TOUR,
    {
      onError: (err) => {
        console.log(
          'onError Update Incluye Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const [updateIncluye, { loading: loadingUpdate }] = useMutation(
    UPDATE_INCLUYE_TOUR,
    {
      onError: (err) => {
        console.log(
          'onError Update Incluye Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const [deleteIncluye, { loading: loadingDelete }] = useMutation(
    DELETE_INCLUYE_TOUR,
    {
      onError: (err) => {
        console.log(
          'onError Delete Incluye Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const updateIncluyeTour = async (
    inputs = { incluyeId: '', descripcionIncluye: '' }
  ) => {
    const resp = await updateIncluye({
      variables: {
        input: {
          ...inputs
        }
      }
    })
    console.log('UpdateIncluyeTour', resp)
    refetch()
    if (resp.data?.UpdateIncluyeTour) return 'exito'
  }

  const createIncluyeTour = async (
    inputs = { descripcionIncluye: '' }
  ) => {
    const resp = await createIncluye({
      variables: {
        input: {
          ...inputs
        }
      }
    })
    console.log('CreateIncluyeTour', resp)
    refetch()
    if (resp.data?.CreateIncluyeTour) return 'exito'
  }

  const deleteIncluyeTour = async (inputs = { incluyeId: '' }) => {
    try {
      const resp = await deleteIncluye({
        variables: {
          input: {
            ...inputs
          }
        }
      })
      refetch()
      console.log(resp)
    } catch (err) {
      console.log('error ', err)
    }
  }

  return {
    db,
    loadingGetData,
    loadingUpdate,
    loadingDelete,
    loadingCreate,
    updateIncluyeTour,
    deleteIncluyeTour,
    createIncluyeTour
  }
}
