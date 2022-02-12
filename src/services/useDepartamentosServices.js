import { useMutation, useQuery } from '@apollo/client'
import { UPDATE_DEPARTAMENTO } from '../graphql/mutation/updateDepartamento'
import { GET_ALL_DEPARTAMENTOS } from '../graphql/query/getAllDepartamentos'

export const useDepartamentosServices = () => {
  const {
    data,
    loading: loadingGetData,
    refetch
  } = useQuery(GET_ALL_DEPARTAMENTOS, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Departamentos',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: {
      destacado: ''
    }
  })
  const db = data && data?.GetDepartamentos
  const [updateDepartamentosMutation, { loading: loadingUpdate }] = useMutation(
    UPDATE_DEPARTAMENTO,
    {
      onError: (err) => {
        console.log(
          'onError Update Departamentos ',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    }
  )

  const updateDepartamentos = async (
    inputs = {
      DeparCodi: '',
      DestacadoDepartamento: 0,
      imagenPrincipal: null,
      imagenSecundaria: null
    }
  ) => {
    const resp = await updateDepartamentosMutation({
      variables: {
        input: {
          ...inputs
        }
      }
    })

    refetch()
    if (resp.data?.UpdateDepartamento) {
      return 'exito'
    }
  }
  return {
    db,
    loadingGetData,
    loadingUpdate,
    updateDepartamentos
  }
}
