import { gql } from '@apollo/client'

export const GET_PROVINCIAS = gql`
  query GetProvincias($depCode: String) {
    GetProvincias(DepCode: $depCode) {
      ProvCodi
      DeparCodi
      ProvNom
      DeparNom
    }
  }
`
