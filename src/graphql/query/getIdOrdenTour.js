import { gql } from '@apollo/client'

export const GET_ID_ORDEN_TOUR = gql`
query GetIdOrdenTour($ordenTourId:Int){
  GetIdOrdenTour(ordenTourId:$ordenTourId) {
      ordenTourId
      tipoPago
      nroOperacion
      estadoOrdenTour
      descuento
      fechaCompra
      fechaReserva
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
        Tour{
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
          imagenPrincipalTour {
            id
            descripcion
            url
          }
          imagenSecundariaTour {
            id
            descripcion
            url
          }
          galeriaTour {
            id
            descripcion
            url
          }
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
