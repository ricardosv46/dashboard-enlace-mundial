import { gql } from '@apollo/client'

export const DELETE_USER = gql`
  mutation DeleteUsuario($input: UserInput) {
    DeleteUsuario(input: $input)
  }
`
