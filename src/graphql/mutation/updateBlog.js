import { gql } from '@apollo/client'

export const UPDATE_BLOG = gql`
  mutation UpdateBlog($input: BlogInput) {
    UpdateBlog(input: $input) {
      blogId
      created_at
      tituloBlog
      estadoBlog
      galeriaBlog {
        url
        id
        descripcion
      }
      categoriaBlogId
      CategoriaBlog {
        estadoCategoriaBlog
        imagenPrincipalCategoriaBlog {
          url
          id
          descripcion
        }
        created_at
        descripcionCategoriaBlog
        categoriaBlogId
        imagenSecundariaCategoriaBlog {
          url
          id
          descripcion
        }
        slugCategoriaBlog
        keywordsCategoriaBlog
        tituloCategoriaBlog
        updated_at
      }
      descripcionCortaBlog
      descripcionLargaBlog
      destacadoBlog
      imagenPrincipalBlog {
        url
        id
        descripcion
      }
      imagenSecundariaBlog {
        url
        id
        descripcion
      }
      keywordsBlog
      slugBlog
      slugCategoriaBlog
      updated_at
    }
  }
`
