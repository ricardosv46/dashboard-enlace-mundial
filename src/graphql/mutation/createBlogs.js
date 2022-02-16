import { gql } from '@apollo/client'

export const CREATE_BLOG = gql`
  mutation CreateBlog($input: BlogInput) {
    CreateBlog(input: $input) {
      blogId
      CategoriaBlog {
        imagenPrincipalCategoriaBlog {
          url
          id
          descripcion
        }
        estadoCategoriaBlog
        descripcionCategoriaBlog
        created_at
        categoriaBlogId
        keywordsCategoriaBlog
        imagenSecundariaCategoriaBlog {
          url
          id
          descripcion
        }
        tituloCategoriaBlog
        updated_at
        slugCategoriaBlog
      }
      categoriaBlogId
      created_at
      descripcionCortaBlog
      descripcionLargaBlog
      destacadoBlog
      estadoBlog
      galeriaBlog {
        url
        id
        descripcion
      }
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
      tituloBlog
      updated_at
    }
  }
`
