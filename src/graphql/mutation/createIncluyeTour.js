import { gql } from '@apollo/client'

export const CREATE_INCLUYE_TOUR = gql`
  mutation CreateIncluyeTour($input: IncluyeTourInput) {
    CreateIncluyeTour(input: $input) {
      incluyeId
      descripcionIncluye
      created_at
      updated_at
    }
  }
`
