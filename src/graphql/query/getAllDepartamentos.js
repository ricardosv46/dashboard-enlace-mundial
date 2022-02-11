import { gql } from '@apollo/client'

export const GET_ALL_DEPARTAMENTOS = gql`
  query GetDepartamentos($destacado: String) {
    GetDepartamentos(destacado: $destacado) {
      DeparCodi
      DeparNom
      UbiDepCodi
      DestacadoDepartamento
      imagenPrincipal {
        id
        url
        descripcion
      }
      imagenSecundaria {
        id
        url
        descripcion
      }
      created_at
      updated_at
    }
  }
`
