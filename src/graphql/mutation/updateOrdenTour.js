import { gql } from '@apollo/client'

export const UPDATE_ORDEN_TOUR = gql`
  mutation UpdateOrdenTour($input: OrdenTourInput) {
    UpdateOrdenTour(input: $input) {
      ordenTourId
      tipoPago
      nroOperacion
      estadoOrdenTour
      descuento
      total
      User {
        userId
        tipoUsuario
        nombre
        apellidos
        email
        celular
        tipoDocumento
        numDocumento
        estado
        apiToken
        created_at
        updated_at
      }
      Pasajes {
        pasajeId
        estadoPasaje
        nombresVisitante
        apellidosVisitante
        edadVisitante
        fechaReserva
        precioTour
        tituloTour
        Tour {
          tourId
          tituloTour
          slugTour
          regionTour
          ciudadTour
          estadoTour
          precioBaseTour
          nroHoras
          nroDias
          destacadoTour
          keywordsTour
          descripcionCortaTour
          descripcionLargaTour
          itinerarioTour
          puntoPartidaTour
          noIncluyeTour
          notasTour
          politicasTour
          videoPresentacionTour
          slugCategoria
          categoriaId
          created_at
          updated_at
        }
      }
    }
  }
`
