import { useMutation, useQuery } from '@apollo/client'
import { useDeleteTourMutation } from '../generated/graphql'
import { CREATE_TOUR } from '../graphql/mutation/createTour'
import { UPDATE_DESTACADO_TOUR } from '../graphql/mutation/updateDestacadoTour'
import { UPDATE_ESTADO_TOUR } from '../graphql/mutation/updateEstadoTour'
import { GET_ALL_TOURS } from '../graphql/query/getAllTours'

export const useToursServices = (
  input = { page: 0, numberPaginate: 10, estadoTour: '' }
) => {
  const {
    loading: loadingGetData,
    data,
    refetch
  } = useQuery(GET_ALL_TOURS, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Tours',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: { ...input }
  })

  const [deleteTourMutation] = useDeleteTourMutation({
    onError: (err) => {
      console.log('onError Delete Tour', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const [createTourMutation, { loading: loadingCrearTour }] = useMutation(
    CREATE_TOUR,
    {
      onError: (err) => {
        console.log('onError Create Tour', err?.graphQLErrors[0]?.debugMessage)
      }
    }
  )

  const [updateEstadoMutation] = useMutation(UPDATE_ESTADO_TOUR, {
    onError: (err) => {
      console.log(
        'onError get Estado Tours',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })

  const [updateDestacadoMutation] = useMutation(UPDATE_DESTACADO_TOUR, {
    onError: (err) => {
      console.log(
        'onError get Destacado Tours',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })
  const createTour = async (
    inputs = {
      tituloTour: '',
      estadoTour: '',
      precioBaseTour: '',
      nroHoras: '',
      nroDias: '',
      destacadoTour: '',
      keywordsTour: '',
      descripcionCortaTour: '',
      descripcionLargaTour: '',
      itinerarioTour: '',
      puntoPartidaTour: '',
      noIncluyeTour: '',
      notasTour: '',
      politicasTour: '',
      videoPresentacionTour: '',
      imagenPrincipalTour: '',
      imagenSecundariaTour: '',
      galeriaTour: '',
      IncluyeTour: '',
      ActividadesTour: '',
      DeparCodi: '',
      ProvCodi: '',
      slugCategoria: '',
      regionTour: '',
      ciudadTour: ''
    }
  ) => {
    const resp = await createTourMutation({
      variables: {
        input: { ...inputs }
      }
    })
    console.log(resp)
    refetch()
    if (resp?.data?.CreateTour) {
      return 'exito'
    }
  }

  const updateEstadoTour = async (inputs = { tourId: '', estadoTour: '' }) => {
    const resp = await updateEstadoMutation({
      variables: {
        input: { ...inputs }
      }
    })
    refetch()
    if (resp?.data?.UpdateTour) {
      return 'exito'
    }
  }

  const updateDestacadoTour = async (
    inputs = { tourId: '', destacadoTour: '' }
  ) => {
    const resp = await updateDestacadoMutation({
      variables: {
        input: { ...inputs }
      }
    })

    refetch()
    if (resp?.data?.UpdateTour) {
      return 'exito'
    }
  }

  const deleteTour = async (input = { tourId: '' }) => {
    const resp = await deleteTourMutation({
      variables: {
        input: {
          ...input
        }
      }
    })
    refetch()
    if (resp) {
      console.log(resp)
    }
  }

  return {
    data,
    loadingGetData,
    loadingCrearTour,
    deleteTour,
    updateEstadoTour,
    updateDestacadoTour,
    createTour
  }
}
