import { useState } from 'react'
import swal from 'sweetalert'
import {
  useCreateHorarioTourMutation,
  useDeleteHorarioTourMutation,
  useGetHorariosTourQuery,
  useUpdateHorarioTourMutation
} from '../generated/graphql'

export const useHorariosServices = () => {
  const [tourId, setTourId] = useState(null)

  const {
    loading: loadingGet,
    data: dataHorarios,
    refetch
  } = useGetHorariosTourQuery({
    fetchPolicy: 'network-only',
    variables: {
      tourId: tourId,
      anio: null,
      mes: null
    }
    // onCompleted: (data) => {
    //   if (data.GetHorariosTour) {
    //     setData(data?.GetHorariosTour)
    //   }
    // }
  })

  const data = dataHorarios ? dataHorarios.GetHorariosTour : []

  // MUTATION PARA CREAR HORARIO
  const [createHorarioMutation, { loading: loadingCreate }] =
    useCreateHorarioTourMutation({
      onError: (error) => {
        // validar errores
        console.log('onError creacion horario ', error)
      }
    })

  const [deleteHorarioMutation, { loading: loadingDelete }] =
    useDeleteHorarioTourMutation({
      onError: (err) => {
        // validar errores
        console.log('Error delete Horario', err?.graphQLErrors[0]?.debugMessage)
      }
    })

  const [
    updateHorarioMutation,
    { loading: loadingUpdate, error: errorUpdate }
  ] = useUpdateHorarioTourMutation({
    onError: (err) => {
      // validar errores
      console.log('onError Update Horario', err?.graphQLErrors[0]?.debugMessage)
    }
  })
  // FUNCION QUE CONSUME EL MUTATION PARA CREAR HORARIO
  const createHorario = async (horario) => {
    const response = await createHorarioMutation({
      variables: {
        input: {
          hora: horario.hora,
          cupos: horario.cupos,
          precio: horario.precio,
          tourId: horario.tourId,
          fecha: horario.fecha,
          estado: horario.estado
        }
      }
    })

    if (response?.data?.CreateHorarioTour) {
      swal({
        title: 'Horario creado',
        icon: 'success',
        timer: 1200
      })
      refetch({
        tourId: response?.data?.CreateHorarioTour.tourId,
        anio: null,
        mes: null
      })
      console.log('horario creado ', response.data?.CreateHorarioTour)
      return 'ok'
    }
  }

  const deleteHorario = (horario) => {
    swal({
      title: `Desea eliminar la fecha ${horario?.fecha}?`,
      text: 'Una vez eliminada, no podrás recuperar el tour!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(async (rpta) => {
      if (rpta) {
        await deleteHorarioMutation({
          variables: {
            input: {
              horarioTourId: horario.horarioTourId
            }
          }
        }).catch((error) => console.log('error', error))
        refetch()
        swal({
          title: 'Eliminado',
          text: 'Se elimino correctamente la fecha para el Tour',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
      }
    })
  }
  const fetchTourHorario = (id) => {
    setTourId(id)
  }

  const updateHorario = async ({
    horarioTourId,
    hora,
    cupos,
    fecha,
    precio,
    tourId
  }) => {
    if (loadingUpdate === false) {
      const res = await updateHorarioMutation({
        variables: {
          input: {
            horarioTourId: horarioTourId,
            hora: hora,
            cupos: cupos,
            fecha: fecha,
            precio: precio,
            tourId: tourId
          }
        }
      })

      if (res?.data?.UpdateHorarioTour) {
        swal({
          title: 'ACTUALIZAR',
          text: 'Se actualizo correctamente la Fecha',
          icon: 'success',
          button: 'Aceptar',
          timer: 2000
        })
        refetch()
        console.log('horario creado ', res.data?.UpdateTour)
        return 'ok'
      } else {
        swal({
          title: 'ERROR',
          text: 'Se prudujo un error en el servidor',
          icon: 'error',
          button: 'Aceptar',
          timer: 2000
        })
        console.log(errorUpdate)
      }
    }
  }
  const updateHorarioEstado = async ({ horarioTourId, estado }) => {
    if (loadingUpdate === false) {
      const res = await updateHorarioMutation({
        variables: {
          input: {
            horarioTourId: horarioTourId,
            estado: estado
          }
        }
      })

      if (res?.data?.UpdateHorarioTour) {
        refetch()
        console.log('horario creado ', res.data?.UpdateTour)
        return 'ok'
      }
    }
  }
  // pipes
  const loading = loadingGet || loadingCreate || loadingUpdate
  // console.log('data query ', data)
  return {
    data,
    loading,
    createHorario,
    deleteHorario,
    updateHorario,
    updateHorarioEstado,
    loadingDelete,
    fetchTourHorario,
    errorUpdate
  }
}
