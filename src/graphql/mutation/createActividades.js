import { gql } from '@apollo/client'

export const CREATE_ACTIVIDADES_TOUR = gql`
mutation CreateActividadesTour($input: ActividadesTourInput) {
  CreateActividadesTour(input: $input) {
    actividadId
    descripcion_actividad
    created_at
    updated_at
  }
}
`
