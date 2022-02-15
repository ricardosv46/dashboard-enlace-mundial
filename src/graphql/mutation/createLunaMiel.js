import { gql } from '@apollo/client'

export const CREATE_LUNA_DE_MIEL = gql`
  mutation CreateLunaMiel($input: LunaMielInput) {
    CreateLunaMiel(input: $input) {
      lunaMielId
      ciudadLuna
      created_at
      categoriaId
      Categoria {
        categoriaId
        created_at
        descripcion
        estadoCategoria
        imagenPrincipalCategoria {
          id
          url
          descripcion
        }
        imagenSecundariaCategoria {
          url
          id
          descripcion
        }
        keywordsCategoria
        slugCategoria
        tituloCategoria
        updated_at
      }
      actividadesLuna
      descripcionCortaLuna
      descripcionLargaLuna
      destacadoLuna
      estadoLuna
      galeriaLuna {
        descripcion
        id
        url
      }
      imagenPrincipalLuna {
        url
        id
        descripcion
      }
      imagenSecundariaLuna {
        id
        url
        descripcion
      }
      itinerarioLuna
      incluyeLuna
      keywordsLuna
      noIncluyeLuna
      notasLuna
      politicasLuna
      precioBaseLuna
      puntoPartidaLuna
      regionLuna
      slugCategoria
      slugLuna
      tituloLuna
      updated_at
      videoPresentacionLuna
    }
  }
`
