import { gql } from '@apollo/client'

export const UPDATE_CATEGORIA_BLOG = gql`
  mutation UpdateCategoriaBlog($input: CategoriaBlogInput) {
    UpdateCategoriaBlog(input: $input) {
      categoriaBlogId
      created_at
      descripcionCategoriaBlog
      estadoCategoriaBlog
      imagenPrincipalCategoriaBlog {
        url
        id
        descripcion
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
