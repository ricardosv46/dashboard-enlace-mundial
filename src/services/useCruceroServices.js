import { useQuery } from '@apollo/client'
import {
  useCreateCruceroMutation,
  useUpdateCruceroMutation,
  useDeleteCruceroMutation
} from '../generated/graphql'
import { GET_ALL_CRUCERO } from '../graphql/query/getAllCrucero'

export const useCruceroServices = (
  input = { page: 0, numberPaginate: 10, estadoCrucero: '' }
) => {
  const { loading, data, refetch } = useQuery(GET_ALL_CRUCERO, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Luna',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: { ...input }
  })

  const db = data ? data?.GetAllCrucero?.data : []
  const dbTotalItems = data ? data?.GetAllCrucero : []

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
      }
    })

  const deleteCrucero = async ({ id }) => {
    if (loadingDelete === false) {
      const res = await deleteCruceroMutation({
        variables: {
          input: {
            cruceroId: id
          }
        }
      }).catch((error) => console.log('error', error))
      refetch()
      if (res?.data?.DeleteCrucero) {
        return 'exito'
      }
    }
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
      refetch()

      if (res?.data?.CreateCrucero) {
        return 'exito'
      }
    }
  }
  // funcion que me permite actualizar un crucero
  const updateCrucero = async ({
    id,
    titulo,
    region,
    ciudad,
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
      if (res?.data?.UpdateCrucero) {
        return 'exito'
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
      if (res?.data?.UpdateCrucero) {
        return 'exito'
      }
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
      if (res?.data?.UpdateCrucero) {
        return 'exito'
      }
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
    loadingDelete,
    dbTotalItems
  }
}
