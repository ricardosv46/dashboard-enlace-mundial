import { gql } from '@apollo/client'

export const GET_ALL_CRUCERO = gql`
  query GetAllCrucero(
    $estadoCrucero: String
    $page: Int
    $numberPaginate: Int
  ) {
    GetAllCrucero(
      estadoCrucero: $estadoCrucero
      page: $page
      numberPaginate: $numberPaginate
    ) {
      nroTotalItems
      data {
        cruceroId
        tituloCrucero
        precioBaseCrucero
        slugCrucero
        estadoCrucero
        destacadoCrucero
        keywordsCrucero
        regionCrucero
        ciudadCrucero
        descripcionCortaCrucero
        descripcionLargaCrucero
        itinerarioCrucero
        puntoPartidaCrucero
        incluyeCrucero
        noIncluyeCrucero
        actividadesCrucero
        notasCrucero
        politicasCrucero
        videoPresentacionCrucero
        imagenPrincipalCrucero {
          id
          descripcion
          url
        }
        imagenSecundariaCrucero {
          id
          descripcion
          url
        }
        galeriaCrucero {
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
          descripcion
          estadoCategoria
          keywordsCategoria
          imagenPrincipalCategoria {
            id
            descripcion
            url
          }
          imagenSecundariaCategoria {
            id
            descripcion
            url
          }
        }
      }
    }
  }
`
