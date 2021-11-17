import { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import PaginSinConexion from '../views/admin/Page Error/PaginSinConexion'
import Login from '../views/auth/Login'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  const {
    user: { logged }
  } = useContext(AuthContext)

  const [conexion, setConexion] = useState(navigator.onLine)
  useEffect(() => {
    const isOnline = () => {
      if (navigator.onLine) {
        setConexion(true)
      } else {
        setConexion(false)
      }
    }
    window.addEventListener('online', () => isOnline())
    window.addEventListener('offline', () => isOnline())
  }, [conexion])

  return (
    <Router>
      <div>
        <Switch>
          {conexion
            ? (
              // eslint-disable-next-line indent
              logged
                // eslint-disable-next-line indent
                ? <>
                  <Route path="/" component={DashboardRoutes} />
                  <Redirect to='/' />
                </>
                // eslint-disable-next-line indent
                : <>
                  <Route exact path="/auth/login" component={Login} />
                  <Redirect to='/auth/login' />
                </>)
            : <>
              <Route path='/sin-conexion' component={PaginSinConexion} />
              <Redirect to='/sin-conexion' />
            </>
          }
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
