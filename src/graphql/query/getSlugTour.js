import { gql } from '@apollo/client'

export const GET_SLUG_TOUR = gql`
  query GetSlugTour($slugTour: String) {
    GetSlugTour(slugTour: $slugTour) {
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
      imagenSecundariaTour {
        id
        url
      }
      galeriaTour {
        id
        url
      }
      slugCategoria
      categoriaId
      IncluyeTour {
        incluyeId
        descripcionIncluye
      }
      ActividadesTour {
        actividadId
        descripcion_actividad
      }
      Departamento {
        DeparCodi
        DeparNom
      }
      Provincia {
        ProvCodi
        ProvNom
      }
    }
  }
`
