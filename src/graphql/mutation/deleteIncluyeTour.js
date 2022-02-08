import { gql } from '@apollo/client'

export const DELETE_INCLUYE_TOUR = gql`
  mutation DeleteIncluyeTour($input: IncluyeTourInput) {
    DeleteIncluyeTour(input: $input)
  }
`
