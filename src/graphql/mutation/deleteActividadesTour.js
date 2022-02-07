import { gql } from '@apollo/client'

export const DELETE_ACTIVIDADES_TOUR = gql`
  mutation DeleteActividadesTour($input: ActividadesTourInput) {
    DeleteActividadesTour(input: $input)
  }
`
