import { gql } from '@apollo/client'

export const UPDATE_DEPARTAMENTO = gql`
  mutation UpdateDepartamento($input: DepartamentoInput) {
    UpdateDepartamento(input: $input) {
      DeparCodi
      DeparNom
      UbiDepCodi
      DestacadoDepartamento
      updated_at
      created_at
      imagenPrincipal {
        id
        descripcion
        url
      }
      imagenSecundaria {
        url
        descripcion
        id
      }
    }
  }
`
