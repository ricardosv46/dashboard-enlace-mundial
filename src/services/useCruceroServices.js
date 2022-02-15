import swal from 'sweetalert'
import {
  useCreateCruceroMutation,
  useGetAllCruceroQuery,
  useUpdateCruceroMutation,
  useDeleteCruceroMutation
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

  const [
    createCruceroMutation,
    { loading: loadingCreate, error: errorCreate }
  ] = useCreateCruceroMutation({
    onError: (err) => {
      // validar errores
      console.log(
        'onError creacion Crucero',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })

  const [
    updateCruceroMutation,
    { loading: loadingUpdate, error: errorUpdate }
  ] = useUpdateCruceroMutation({
    onError: (err) => {
      // validar errores
      console.log('onError Update Crucero', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const [deleteCruceroMutation, { loading: loadingDelete }] =
    useDeleteCruceroMutation({
      onError: (err) => {
        // validar errores
        // eslint-disable-next-line eqeqeq
        console.log(err?.graphQLErrors)
        swal('Error', 'Hubo un error en el servidor', 'error')
      }
    })

  const deleteCrucero = (crucero) => {
    swal({
      title: `Desea eliminar el crucero ${crucero?.tituloCrucero}?`,
      text: 'Una vez eliminada, no podrás recuperar el Crucero!',
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
          text: 'Se elimino correctamente el Crucero',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    })
  }

  const createCrucero = async ({
    titulo,
    region,
    ciudad,
    estado = 'Activado',
    destacado = 'Desactivado',
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
    precioBaseCrucero,
    keywords
  }) => {
    if (loadingCreate === false) {
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
            slugCategoria: slugCategoria,
            precioBaseCrucero: precioBaseCrucero
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
  // funcion que me permite actualizar un tour
  const updateCrucero = async ({
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
    precioBaseCrucero,
    keywords
  }) => {
    if (loadingUpdate === false) {
      const res = await updateCruceroMutation({
        variables: {
          input: {
            cruceroId: id,
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
            slugCategoria: slugCategoria,
            precioBaseCrucero: precioBaseCrucero
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
  const updateCruceroEstado = async ({ id, estado }) => {
    if (loadingUpdate === false) {
      const res = await updateCruceroMutation({
        variables: {
          input: {
            cruceroId: id,

            estadoCrucero: estado
          }
        }
      }).catch((error) => console.error('que error', error))
      refetch()
      console.log(res)
    }
  }
  const updateCruceroDestacado = async ({ id, destacado }) => {
    if (loadingUpdate === false) {
      const res = await updateCruceroMutation({
        variables: {
          input: {
            cruceroId: id,
            destacadoCrucero: destacado
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
    deleteCrucero,
    createCrucero,
    updateCrucero,
    updateCruceroEstado,
    updateCruceroDestacado,
    errorUpdate,
    errorCreate,
    loadingUpdate,
    loadingCreate,
    loadingDelete
  }
}
