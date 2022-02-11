import { gql } from '@apollo/client'

export const GET_ALL_ACTIVIDADES = gql`
  query GetActividadesTour {
    GetActividadesTour {
      actividadId
      descripcion_actividad
      created_at
      updated_at
    }
  }
`
