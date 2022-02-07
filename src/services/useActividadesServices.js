import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_ACTIVIDADES } from '../graphql/query/getAllActividades'
import { UPDATE_ACTIVIDADES_TOUR } from '../graphql/mutation/updateActividadesTour'
import { DELETE_ACTIVIDADES_TOUR } from '../graphql/mutation/deleteActividadesTour'
import { CREATE_ACTIVIDADES_TOUR } from '../graphql/mutation/createActividades'

export const useActividadesServices = () => {
  const {
    data,
    loading: loadingGetData,
    refetch
  } = useQuery(GET_ALL_ACTIVIDADES, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Actividades',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })

  const db = data && data?.GetActividadesTour

  const [createActividades, { loading: loadingCreate }] = useMutation(
    CREATE_ACTIVIDADES_TOUR,
    {
      onError: (err) => {
        console.log(
          'onError Update Actividades Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const [updateActividades, { loading: loadingUpdate }] = useMutation(
    UPDATE_ACTIVIDADES_TOUR,
    {
      onError: (err) => {
        console.log(
          'onError Update Actividades Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const [deleteActividades, { loading: loadingDelete }] = useMutation(
    DELETE_ACTIVIDADES_TOUR,
    {
      onError: (err) => {
        console.log(
          'onError Delete Actividades Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const updateActividadesTour = async (
    inputs = { actividadId: '', descripcion_actividad: '' }
  ) => {
    const resp = await updateActividades({
      variables: {
        input: {
          ...inputs
        }
      }
    })
    console.log('updateActividadesTour', resp)
    refetch()
    if (resp.data?.UpdateActividadesTour) return 'exito'
  }

  const createActividadesTour = async (
    inputs = { descripcion_actividad: '' }
  ) => {
    const resp = await createActividades({
      variables: {
        input: {
          ...inputs
        }
      }
    })
    console.log('CreateActividadesTour', resp)
    refetch()
    if (resp.data?.CreateActividadesTour) return 'exito'
  }

  const deleteActividadesTour = async (inputs = { actividadId: '' }) => {
    try {
      const resp = await deleteActividades({
        variables: {
          input: {
            ...inputs
          }
        }
      })
      refetch()
      console.log(resp)
    } catch (err) { console.log('error ', err) }
  }

  return {
    db,
    loadingGetData,
    loadingUpdate,
    loadingDelete,
    loadingCreate,
    updateActividadesTour,
    deleteActividadesTour,
    createActividadesTour
  }
}
