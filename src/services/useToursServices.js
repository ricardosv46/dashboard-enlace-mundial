
import swal from 'sweetalert'
import {
  useCreateTourMutation,
  useDeleteTourMutation,
  useGetAllTourQuery,
  useUpdateTourMutation
} from '../generated/graphql'

export const useToursServices = () => {
  // inicializacion de variables

  const { loading, refetch, data } = useGetAllTourQuery({
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoTour: ''
    }
  })

  const db = data ? data?.GetAllTour?.data : []
  // llamando al metodo createTour
  const [createTourMutation, { loading: loadingCreate, error: errorCreate }] =
    useCreateTourMutation({
      onError: (err) => {
        // validar errores
        console.log(
          'onError creacion Tour',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    })
  // llamando al metodo deleteTour
  const [deleteTourMutation, { loading: loadingDelete }] = useDeleteTourMutation({
    onError: (err) => {
      // validar errores
      console.log('Error delete Tour', err?.graphQLErrors[0]?.debugMessage)
    }
  })
  // llamando al metodo updateTour
  const [updateTourMutation, { loading: loadingUpdate, error: errorUpdate }] =
    useUpdateTourMutation({
      onError: (err) => {
        // validar errores
        console.log('onError Update Tour', err?.graphQLErrors[0]?.debugMessage)
      }
    })

  // funcion que me permite crear un tour
  const createTour = async ({
    titulo,
    region,
    ciudad,
    estado,
    destacado,
    descripcionCorta,
    descripcionLarga,
    itinerario,
    puntoPartida,
    incluye,
    noIncluye,
    actividades,
    notas,
    politicas,
    video,
    idImgPrincipal,
    idImgSecundaria,
    slugCategoria,
    galeria,
    keywords
  }) => {
    const res = await createTourMutation({
      variables: {
        input: {
          tituloTour: titulo,
          regionTour: region,
          ciudadTour: ciudad,
          estadoTour: estado,
          destacadoTour: destacado,
          keywordsTour: keywords.join(','),
          descripcionCortaTour: descripcionCorta,
          descripcionLargaTour: descripcionLarga,
          itinerarioTour: itinerario.join(','),
          puntoPartidaTour: puntoPartida,
          incluyeTour: incluye.join(','),
          noIncluyeTour: noIncluye.join(','),
          actividadesTour: actividades.join(','),
          notasTour: notas.join(','),
          politicasTour: politicas.join(','),
          videoPresentacionTour: video,
          imagenPrincipalTour: idImgPrincipal,
          imagenSecundariaTour: idImgSecundaria,
          galeriaTour: galeria,
          slugCategoria: slugCategoria
        }
      }
    })
    if (res?.data?.CreateTour) {
      swal({
        title: 'CREAR',
        text: 'Se creo correctamente el Tour',
        icon: 'success',
        button: 'Aceptar',
        timer: 1000
      })
      refetch()
      return 'exito'
    } else {
      swal({
        title: 'ERROR',
        text: 'Hubo un error en el servidor',
        icon: 'error',
        button: 'Aceptar',
        timer: 2000
      })
      return 'error'
    }
  }
  // funcion que me permite eliminar un tour
  const deleteTour = (tour) => {
    swal({
      title: `Desea eliminar el tour ${tour?.tituloTour}?`,
      text: 'Una vez eliminada, no podrás recuperar el tour!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(async (rpta) => {
      if (rpta) {
        await deleteTourMutation({
          variables: {
            input: {
              tourId: tour.tourId
            }
          }
        }).catch((error) => console.log('error', error))
        refetch()
        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente el tour',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    })
  }
  // funcion que me permite actualizar un tour
  const updateTour = async ({
    id,
    titulo,
    region,
    ciudad,
    estado,
    destacado,
    descripcionCorta,
    descripcionLarga,
    itinerario,
    puntoPartida,
    incluye,
    noIncluye,
    actividades,
    notas,
    politicas,
    video,
    idImgPrincipal,
    idImgSecundaria,
    slugCategoria,
    galeria,
    keywords
  }) => {
    if (loadingUpdate === false) {
      const res = await updateTourMutation({
        variables: {
          input: {
            tourId: id,
            tituloTour: titulo,
            regionTour: region,
            ciudadTour: ciudad,
            estadoTour: estado,
            destacadoTour: destacado,
            keywordsTour: keywords.join(','),
            descripcionCortaTour: descripcionCorta,
            descripcionLargaTour: descripcionLarga,
            itinerarioTour: itinerario.join(','),
            puntoPartidaTour: puntoPartida,
            incluyeTour: incluye.join(','),
            noIncluyeTour: noIncluye.join(','),
            actividadesTour: actividades.join(','),
            notasTour: notas.join(','),
            politicasTour: politicas.join(','),
            videoPresentacionTour: video,
            imagenPrincipalTour: idImgPrincipal,
            imagenSecundariaTour: idImgSecundaria,
            galeriaTour: galeria,
            slugCategoria: slugCategoria
          }
        }
      }).catch((error) => console.error('que error', error))
      refetch()
      console.log(res)
      if (!errorUpdate) {
        swal({
          title: 'ACTUALIZAR',
          text: 'Se actualizo correctamente el Tour',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    }
  }

  const updateTourEstado = async ({ id, estado }) => {
    if (loadingUpdate === false) {
      const res = await updateTourMutation({
        variables: {
          input: {
            tourId: id,
            estadoTour: estado
          }
        }
      }).catch((error) => console.error('que error', error))
      refetch()
      console.log(res)
    }
  }

  const updateTourDestacado = async ({ id, destacado }) => {
    if (loadingUpdate === false) {
      const res = await updateTourMutation({
        variables: {
          input: {
            tourId: id,
            destacadoTour: destacado
          }
        }
      }).catch((error) => console.error('que error', error))
      refetch()
      console.log(res)
    }
  }
  return {
    db,
    loading,
    loadingDelete,
    deleteTour,
    createTour,
    updateTour,
    updateTourDestacado,
    updateTourEstado,
    errorCreate,
    errorUpdate,
    loadingCreate,
    loadingUpdate
  }
}
