import swal from 'sweetalert'
import {
  useCreateLunaMielMutation,
  useDeleteLunaMielMutation,
  useGetAllLunaMielQuery
} from '../generated/graphql'

export const useLunaMielServices = () => {
  const { loading, data, refetch } = useGetAllLunaMielQuery({
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoLuna: ''
    }
  })
  const db = data ? data?.GetAllLunaMiel?.data : []
  const [deleteLunaMielMutation] = useDeleteLunaMielMutation({
    onError: (err) => {
      // validar errores
      // eslint-disable-next-line eqeqeq
      console.log(err?.graphQLErrors)
      swal('Error', 'Hubo un error en el servidor', 'error')
    }
  })

  const [createLunaMielMutation, { loading: loadingUpadate }] =
    useCreateLunaMielMutation({
      onError: (err) => {
        // validar errores
        console.log(
          'onError creacion Luna Miel',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    })

  const deleteLunaMiel = (lunaMiel) => {
    swal({
      title: `Desea eliminar la Luna de Miel ${lunaMiel?.tituloLuna}?`,
      text: 'Una vez eliminada, no podrás recuperar el Luna de Miel!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(async (rpta) => {
      if (rpta) {
        await deleteLunaMielMutation({
          variables: {
            input: {
              lunaMielId: lunaMiel.lunaMielId
            }
          }
        }).catch((error) => console.log('error', error))
        refetch()
        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente la Luna de Miel',
          icon: 'success',
          button: 'Aceptar',
          timer: 5000
        })
      }
    })
  }

  const createLunaMiel = async ({
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
    if (loadingUpadate === false) {
      const res = await createLunaMielMutation({
        variables: {
          input: {
            tituloLuna: titulo,
            estadoLuna: estado,
            destacadoLuna: destacado,
            keywordsLuna: keywords.join(','),
            regionLuna: region,
            ciudadLuna: ciudad,
            descripcionCortaLuna: descripcionCorta,
            descripcionLargaLuna: descripcionLarga,
            itinerarioLuna: itinerario.join(','),
            puntoPartidaLuna: puntoPartida,
            incluyeLuna: incluye.join(','),
            noIncluyeLuna: noIncluye.join(','),
            actividadesLuna: actividades.join(','),
            notasLuna: notas.join(','),
            politicasLuna: politicas.join(','),
            videoPresentacionLuna: video,
            imagenPrincipalLuna: idImgPrincipal,
            imagenSecundariaLuna: idImgSecundaria,
            galeriaLuna: galeria,
            slugCategoria: slugCategoria
          }
        }
      }).catch((error) => console.error(' error', error))
      console.log(res)
      refetch()
      swal({
        title: 'CREAR',
        text: 'Se creo correctamente la Luna Miel',
        icon: 'success',
        button: 'Aceptar',
        timer: 2000
      })
    }
  }

  return { db, loading, deleteLunaMiel, createLunaMiel }
}
