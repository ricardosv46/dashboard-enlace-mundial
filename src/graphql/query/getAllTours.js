import { gql } from '@apollo/client'

export const GET_ALL_TOURS = gql`
  query GetAllTour($page: Int, $numberPaginate: Int, $estadoTour: String) {
    GetAllTour(
      page: $page
      numberPaginate: $numberPaginate
      estadoTour: $estadoTour
    ) {
      nroTotalItems
      data {
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
          estadoCategoria
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
      }
    }
  }
`
