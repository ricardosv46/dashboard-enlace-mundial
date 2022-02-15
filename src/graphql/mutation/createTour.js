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
    categoriaId
    IncluyeTour {
      incluyeId
    }
    ActividadesTour {
      actividadId
    }
    Departamento {
      DeparCodi
    }
    Provincia {
      ProvCodi
    }
    created_at
    updated_at
  }
}
`
