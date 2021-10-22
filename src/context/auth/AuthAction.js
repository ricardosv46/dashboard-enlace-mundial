import { LOGIN, LOGOUT } from './types'

export const AuthActions = (state, dispatch) => {
  const loginAction = (user) => {
    dispatch({ type: LOGIN, payload: user })
  }

  const logoutAction = () => {
    dispatch({ type: LOGOUT })
  }

  return { loginAction, logoutAction }
}
