import { gql } from '@apollo/client'

export const CREATE_TOUR = gql`
  mutation CreateTour($input: TourInput) {
    CreateTour(input: $input) {
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
      slugCategoria
      categoriaId
      Categoria {
        categoriaId
        slugCategoria
        tituloCategoria
      }
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
        DeparCodi
      }
      created_at
      updated_at
    }
  }
`
