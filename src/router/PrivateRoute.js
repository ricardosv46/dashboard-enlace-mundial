import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        // eslint-disable-next-line multiline-ternary
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to="auth/login" />

      }
    />
  )
}

export default PrivateRoute
