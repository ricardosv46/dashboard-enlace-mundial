import swal from 'sweetalert'
import { useDeleteCruceroMutation, useGetAllCruceroQuery } from '../generated/graphql'
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

  return { db, loading, deleteCrucero }
}
