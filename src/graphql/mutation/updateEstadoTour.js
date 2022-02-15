import { gql } from '@apollo/client'

export const UPDATE_ESTADO_TOUR = gql`
  mutation UpdateTour($input: TourInput) {
    UpdateTour(input: $input) {
      tourId
      estadoTour
    }
  }
`
