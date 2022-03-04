import { gql } from '@apollo/client'

export const GET_ALL_ORDEN_TOUR = gql`
  query GetAllOrdenTour(
    $page: Int
    $numberPaginate: Int
    $estadoOrdenTour: String
  ) {
    GetAllOrdenTour(
      page: $page
      numberPaginate: $numberPaginate
      estadoOrdenTour: $estadoOrdenTour
    ) {
      nroTotalItems
      data {
        ordenTourId
        tipoPago
        nroOperacion
        estadoOrdenTour
        descuento
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
            imagenPrincipalTour {
              id
              url
            }
            slugCategoria
            categoriaId
            created_at
            updated_at
          }
        }
      }
    }
  }
`
