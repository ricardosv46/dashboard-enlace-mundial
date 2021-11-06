import { gql } from '@apollo/client'

export const CREAR_SUSCRIPCION = gql`
mutation CrearSuscripcion($input:suscripcionInput!){
  CrearSuscripcion(input:$input) {
    suscripcionId
    email
  }
}
`
