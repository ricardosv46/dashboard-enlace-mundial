import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query GetAllUsers(
    $page: Int
    $numberPaginate: Int
    $tipoUsuario: String
    $estado: String
  ) {
    GetAllUsers(
      page: $page
      numberPaginate: $numberPaginate
      tipoUsuario: $tipoUsuario
      estado: $estado
    ) {
      nroTotalItems
      data {
        userId
        nombre
        apellidos
        email
        estado
        apiToken
      }
    }
  }
`
