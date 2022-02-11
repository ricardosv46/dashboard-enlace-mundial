import { gql } from '@apollo/client'

export const CREATE_CATEGORYS = gql`
  mutation CreateCategoria($input: CategoriaInput) {
    CreateCategoria(input: $input) {
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
