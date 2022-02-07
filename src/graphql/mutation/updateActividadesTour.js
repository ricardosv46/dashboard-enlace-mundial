import { gql } from '@apollo/client'

export const UPDATE_ACTIVIDADES_TOUR = gql`
mutation UpdateActividadesTour($input: ActividadesTourInput) {
  UpdateActividadesTour(input: $input) {
    actividadId
    descripcion_actividad
    created_at
    updated_at
  }
}
`
