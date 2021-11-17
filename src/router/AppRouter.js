import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import Login from '../views/auth/Login'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/auth/login" component={Login} />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
