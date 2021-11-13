import { useState } from 'react'
import swal from 'sweetalert'
import {
  useCreateHorarioTourMutation,
  useGetHorariosTourQuery
} from '../generated/graphql'

export const useHorariosServices = (id) => {
  const [loading, setLoading] = useState(false)

  const { loading: loadingGet, data: dataHorarios } = useGetHorariosTourQuery({
    fetchPolicy: 'network-only',
    variables: {
      tourId: id,
      anio: null,
      mes: null
    }
  })

  const data = dataHorarios ? dataHorarios?.GetHorariosTour : []

  // MUTATION PARA CREAR HORARIO
  const [createHorarioMutation, { loading: loadingCreate }] =
    useCreateHorarioTourMutation({
      onError: (error) => {
        // validar errores
        console.log('onError creacion horario ', error)
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
      console.log('horario creado ', response.data?.CreateHorarioTour)
      return 'ok'
    }
  }

  if (loadingGet === true || loadingCreate === true) {
    if (loading === false) {
      setLoading(true)
    }
  } else {
    if (loading === true) {
      setLoading(false)
    }
  }

  return { data, loading, createHorario }
}
