import { useState } from 'react'
import swal from 'sweetalert'
import {
  useCreateHorarioTourMutation,
  useGetHorariosTourQuery
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

  const fetchTourHorario = (id) => {
    setTourId(id)
  }

  // pipes
  const loading = loadingGet || loadingCreate
  console.log('data query ', data)
  return { data, loading, createHorario, fetchTourHorario }
}
