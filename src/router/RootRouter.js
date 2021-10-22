import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Layout from '../components/layout'
import HomeView from '../views/admin/HomeView'
import LoginView from '../views/auth/LoginView'

const HomeRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomeView} />
      </Switch>
    </Layout>
  )
}

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={LoginView} />
    </Switch>
  )
}

const RootRouter = () => {
  const history = useHistory()
  const [isAuth] = useState(false)

  useEffect(() => {
    if (isAuth) {
      history.push('/')
    } else {
      history.push('/auth/login')
    }
  }, [isAuth])

  return <div>{isAuth ? HomeRoutes() : AuthRoutes()}</div>
}

export default RootRouter
