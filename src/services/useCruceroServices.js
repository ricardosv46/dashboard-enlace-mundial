import swal from 'sweetalert'
import {
  useCreateCruceroMutation,
  useDeleteCruceroMutation,
  useGetAllCruceroQuery
} from '../generated/graphql'
export const useCruceroServices = () => {
  const { loading, data, refetch } = useGetAllCruceroQuery({
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoCrucero: ''
    }
  })
  const db = data ? data?.GetAllCrucero?.data : []
  const [deleteCruceroMutation] = useDeleteCruceroMutation({
    onError: (err) => {
      // validar errores
      // eslint-disable-next-line eqeqeq
      console.log(err?.graphQLErrors)
      swal('Error', 'Hubo un error en el servidor', 'error')
    }
  })

  const [createCruceroMutation, { loading: loadingUpadate }] =
    useCreateCruceroMutation({
      onError: (err) => {
        // validar errores
        console.log(
          'onError creacion Crucero',
          err?.graphQLErrors[0]?.debugMessage
        )
      }
    })

  const deleteCrucero = (crucero) => {
    swal({
      title: `Desea eliminar el crucero ${crucero?.tituloCrucero}?`,
      text: 'Una vez eliminada, no podrás recuperar el Luna de Miel!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(async (rpta) => {
      if (rpta) {
        await deleteCruceroMutation({
          variables: {
            input: {
              cruceroId: crucero.cruceroId
            }
          }
        }).catch((error) => console.log('error', error))
        refetch()
        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente el crucero',
          icon: 'success',
          button: 'Aceptar',
          timer: 5000
        })
      }
    })
  }

  const createCrucero = async ({
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
      const res = await createCruceroMutation({
        variables: {
          input: {
            tituloCrucero: titulo,
            estadoCrucero: estado,
            destacadoCrucero: destacado,
            keywordsCrucero: keywords.join(','),
            regionCrucero: region,
            ciudadCrucero: ciudad,
            descripcionCortaCrucero: descripcionCorta,
            descripcionLargaCrucero: descripcionLarga,
            itinerarioCrucero: itinerario.join(','),
            puntoPartidaCrucero: puntoPartida,
            incluyeCrucero: incluye.join(','),
            noIncluyeCrucero: noIncluye.join(','),
            actividadesCrucero: actividades.join(','),
            notasCrucero: notas.join(','),
            politicasCrucero: politicas.join(','),
            videoPresentacionCrucero: video,
            imagenPrincipalCrucero: idImgPrincipal,
            imagenSecundariaCrucero: idImgSecundaria,
            galeriaCrucero: galeria,
            slugCategoria: slugCategoria
          }
        }
      }).catch((error) => console.error('que error', error))
      console.log(res)
      refetch()
      swal({
        title: 'CREAR',
        text: 'Se creo correctamente el Crucero',
        icon: 'success',
        button: 'Aceptar',
        timer: 2000
      })
    }
  }

  return { db, loading, deleteCrucero, createCrucero }
}
