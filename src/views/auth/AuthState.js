import { useReducer, createContext } from 'react'
import AuthReducer from './AuthReducer'
import { AuthActions } from './AuthAction'

export const initialState = {
  user: '',
  email: '',
  password: '',
  loggout: true,
  rol: null
}

// crecion de mi context
export const AuthContext = createContext()

// creacion de mi funcion que me devolvera un provider
const AuthState = ({ children }) => {
  /* useaReducer(1,2,3)
  1. funcion para manejar los eventos,
  2. el valor que devuelve,(en este caso no esta)
  3. la funcion donde inicializo mis valores
  */
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  /* objeto con las siguientes propiedades
  state->funcion que me ayudara a manejar mi useReducer
  AuthActions-> me devolvera dos funciones para login y logout
  */
  const props = {
    ...state,
    ...AuthActions(state, dispatch)
  }
  // pasamos como parametros las props para poder usarlas en todo lo que envuelva el provider
  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
}

export default AuthState
