import { useGetHorariosTourQuery } from '../generated/graphql'

export const useHorariosServices = (id) => {
  const { loading, data: dataHorarios } = useGetHorariosTourQuery({
    fetchPolicy: 'network-only',
    variables: {
      tourId: id,
      anio: null,
      mes: null
    }
  })

  const data = dataHorarios ? dataHorarios?.GetHorariosTour : []

  return { data, loading }
}
