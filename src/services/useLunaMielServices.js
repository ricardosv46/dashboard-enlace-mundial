import swal from 'sweetalert'
import { useDeleteLunaMielMutation, useGetAllLunaMielQuery } from '../generated/graphql'

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

  return { db, loading, deleteLunaMiel }
}
