import { gql } from '@apollo/client'

export const UPDATE_DESTACADO_TOUR = gql`
  mutation UpdateTour($input: TourInput) {
    UpdateTour(input: $input) {
      tourId
      destacadoTour
    }
  }
`
