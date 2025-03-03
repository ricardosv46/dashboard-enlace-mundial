import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './router/AppRouter'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}
const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App
