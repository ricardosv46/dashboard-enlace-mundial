import { gql } from '@apollo/client'

export const LOGIN_USUARIO = gql`
  mutation Login($input: loginInput!) {
    login(input: $input) {
      apellidos
      apiToken
      created_at
      email
      tipoDocumento
      numDocumento
      celular
      estado
      nombre
      updated_at
      tipoUsuario
      userId
    }
  }
`
