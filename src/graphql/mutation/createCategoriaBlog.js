import { gql } from '@apollo/client'

export const CREATE_CATEGORIA_BLOG = gql`
  mutation CreateCategoriaBlog($input: CategoriaBlogInput) {
    CreateCategoriaBlog(input: $input) {
      categoriaBlogId
      created_at
      descripcionCategoriaBlog
      estadoCategoriaBlog
      imagenPrincipalCategoriaBlog {
        descripcion
        id
        url
      }
      imagenSecundariaCategoriaBlog {
        url
        id
        descripcion
      }
      keywordsCategoriaBlog
      slugCategoriaBlog
      tituloCategoriaBlog
      updated_at
    }
  }
`
