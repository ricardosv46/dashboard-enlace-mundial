import { gql } from '@apollo/client'

export const GET_INCLUYE_TOUR = gql`
query GetIncluyeTour {
  GetIncluyeTour {
    incluyeId
    descripcionIncluye
    created_at
    updated_at
  }
}
`
