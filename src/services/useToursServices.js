import swal from 'sweetalert'
import {
  useCreateTourMutation,
  useDeleteTourMutation,
  useGetAllTourQuery
} from '../generated/graphql'

export const useToursServices = () => {
  const { loading, data, refetch } = useGetAllTourQuery({
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoTour: ''
    }
  })
  const db = data ? data?.GetAllTour?.data : []
  const [deleteTourMutation] = useDeleteTourMutation({
    onError: (err) => {
      // validar errores
      console.log('', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const [createTourMutation, { loading: loadingUpadate }] =
    useCreateTourMutation({
      onError: (err) => {
        // validar errores
        console.log('onError creacion Tour', err?.graphQLErrors[0]?.debugMessage)
      }
    })
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
          timer: 5000
        })
      }
    })
  }

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
    galeria
  }) => {
    if (loadingUpadate === false) {
      const res = await createTourMutation({
        variables: {
          input: {
            tituloTour: titulo,
            regionTour: region,
            ciudadTour: ciudad,
            estadoTour: estado,
            destacadoTour: destacado,
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
      console.log(res)
      refetch()
      swal({
        title: 'CREAR',
        text: 'Se creo correctamente el Tour',
        icon: 'success',
        button: 'Aceptar',
        timer: 2000
      })
    }
  }
  return { db, loading, deleteTour, createTour }
}
