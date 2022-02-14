import { gql } from '@apollo/client'

export const CREATE_CRUCERO = gql`
mutation CreateCrucero($input: CruceroInput) {
  CreateCrucero(input: $input) {
    cruceroId
    tituloCrucero
    slugCrucero
    estadoCrucero
    precioBaseCrucero
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
      url
      descripcion
      id
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
        url
        descripcion
        id
      }
      imagenSecundariaCategoria {
        url
        descripcion
        id
      }
      created_at
      updated_at
    }
  }
}
`
