import { gql } from '@apollo/client'

export const GET_ALL_CATEGORYS = gql`
  query GetCategoria($estadoCategoria: String) {
    GetCategoria(estadoCategoria: $estadoCategoria) {
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
`
