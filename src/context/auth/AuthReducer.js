import { LOGIN, LOGOUT } from './types'
import { initialState } from './AuthState'

const AuthReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        email: payload.email,
        rol: payload.rol
      }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default AuthReducer
