import { gql } from '@apollo/client'

export const GET_ALL_LUNA_DE_MIEL = gql`
  query GetAllLunaMiel($estadoLuna: String, $page: Int, $numberPaginate: Int) {
    GetAllLunaMiel(
      estadoLuna: $estadoLuna
      page: $page
      numberPaginate: $numberPaginate
    ) {
      nroTotalItems
      data {
        lunaMielId
        tituloLuna
        precioBaseLuna
        slugLuna
        estadoLuna
        destacadoLuna
        keywordsLuna
        regionLuna
        ciudadLuna
        descripcionCortaLuna
        descripcionLargaLuna
        itinerarioLuna
        puntoPartidaLuna
        incluyeLuna
        noIncluyeLuna
        actividadesLuna
        notasLuna
        politicasLuna
        videoPresentacionLuna
        imagenPrincipalLuna {
          id
          descripcion
          url
        }
        imagenSecundariaLuna {
          id
          descripcion
          url
        }
        galeriaLuna {
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
