import { gql } from '@apollo/client'

export const DELETE_CATEGORY = gql`
  mutation DeleteCategoria($input: CategoriaInput) {
    DeleteCategoria(input: $input)
  }
`
