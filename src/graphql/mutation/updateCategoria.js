import { gql } from '@apollo/client'

export const UPDATE_CATEGORYS = gql`
  mutation UpdateCategoria($input: CategoriaInput) {
    UpdateCategoria(input: $input) {
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
