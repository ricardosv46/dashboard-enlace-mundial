import { gql } from '@apollo/client'

export const UPDATE_INCLUYE_TOUR = gql`
  mutation UpdateIncluyeTour($input: IncluyeTourInput) {
    UpdateIncluyeTour(input: $input) {
      incluyeId
      descripcionIncluye
      created_at
      updated_at
    }
  }
`
