import { useQuery } from '@apollo/client'
import swal from 'sweetalert'
import {
  useCreateLunaMielMutation,
  useDeleteLunaMielMutation,
  useUpdateLunaMielMutation
} from '../generated/graphql'
import { GET_ALL_LUNA_DE_MIEL } from '../graphql/query/getAllLunaMiel'

export const useLunaMielServices = (
  input = { page: 0, numberPaginate: 10, estadoLuna: '' }
) => {
  const { loading, data, refetch } = useQuery(GET_ALL_LUNA_DE_MIEL, {
    fetchPolicy: 'network-only',
    onError: (err) => {
      console.log(
        'onError getAllData Luna',
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: { ...input }
  })

  const db = data ? data?.GetAllLunaMiel?.data : []
  const dbTotalItems = data ? data?.GetAllLunaMiel : []

  const [deleteLunaMielMutation, { loading: loadingDelete }] =
    useDeleteLunaMielMutation({
      onError: (err) => {
        // validar errores
        // eslint-disable-next-line eqeqeq
        console.log(err?.graphQLErrors)
      }
    })

  const [
    createLunaMielMutation,
    { loading: loadingUpadate, error: errorCreate }
  ] = useCreateLunaMielMutation({
    onError: (err) => {
      // validar errores
      console.log(
        'onError creacion Luna Miel',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })
  // llamando al metodo updateTour

  const deleteLunaMiel = async ({ id }) => {
    if (loadingDelete === false) {
      const res = await deleteLunaMielMutation({
        variables: {
          input: {
            lunaMielId: id
          }
        }
      }).catch((error) => console.log('error', error))
      refetch()
      console.log(res)
    }
  }

  const [
    updateLunaMielMutation,
    { loading: loadingUpdate, error: errorUpdate }
  ] = useUpdateLunaMielMutation({
    onError: (err) => {
      // validar errores
      console.log(
        'onError Update Luna Miel',
        err?.graphQLErrors[0]?.debugMessage
      )
    }
  })
  const createLunaMiel = async ({
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
    precioBaseLuna,
    keywords
  }) => {
    if (loadingUpadate === false) {
      const res = await createLunaMielMutation({
        variables: {
          input: {
            tituloLuna: titulo,
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
            slugCategoria: slugCategoria,
            precioBaseLuna: precioBaseLuna
          }
        }
      }).catch((error) => console.error(' error', error))
      console.log(res)
      refetch()
      if (!errorCreate) {
        swal({
          title: 'CREAR',
          text: 'Se creo correctamente la Luna Miel',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    }
  }

  const updateLunaMiel = async ({
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
    precioBaseLuna,
    keywords
  }) => {
    if (loadingUpdate === false) {
      const res = await updateLunaMielMutation({
        variables: {
          input: {
            lunaMielId: id,
            tituloLuna: titulo,
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
            slugCategoria: slugCategoria,
            precioBaseLuna: precioBaseLuna
          }
        }
      }).catch((error) => console.error('que error', error))
      refetch()
      console.log(res)
      console.log(errorUpdate)
      if (!errorUpdate) {
        swal({
          title: 'ACTUALIZAR',
          text: 'Se actualizo correctamente la Luna Miel',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    }
  }

  const updateLunaMielEstado = async ({ id, estado }) => {
    if (loadingUpdate === false) {
      const res = await updateLunaMielMutation({
        variables: {
          input: {
            lunaMielId: id,
            estadoLuna: estado
          }
        }
      }).catch((error) => console.error('que error', error))
      refetch()
      console.log(res)
    }
  }

  const updateLunaMielDestacado = async ({ id, destacado }) => {
    if (loadingUpdate === false) {
      const res = await updateLunaMielMutation({
        variables: {
          input: {
            lunaMielId: id,
            destacadoLuna: destacado
          }
        }
      }).catch((error) => console.error('que error', error))

      refetch()
      if (res?.data?.UpdateLunaMiel) {
        return 'exito'
      }
    }
  }
  return {
    db,
    loading,
    deleteLunaMiel,
    createLunaMiel,
    updateLunaMiel,
    updateLunaMielEstado,
    updateLunaMielDestacado,
    loadingUpdate,
    errorUpdate,
    loadingDelete,
    dbTotalItems
  }
}
