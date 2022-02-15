import { gql } from '@apollo/client'

export const UPDATE_TOUR = gql`
  mutation UpdateTour($input: TourInput) {
    UpdateTour(input: $input) {
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
        url
        descripcion
      }
      galeriaTour {
        id
        descripcion
        url
      }
      slugCategoria
      Categoria {
        categoriaId
        slugCategoria
      }
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
      created_at
      updated_at
    }
  }
`
