import { types } from '../types/types'
// const state = {
//   name: 'fernando',
//   logged: true
// }

// const loginAction = {
//   type: types.login,
//   payload: {
//     email: 'percy@hotmail.com'
//   }
// }
// logged=registrado
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login: // retorno el obejto con la informacion
      return {
        ...action.payload,
        logged: true
      }
    case types.logout:
      return {
        logged: false
      }

    default:
      return state
  }
}
