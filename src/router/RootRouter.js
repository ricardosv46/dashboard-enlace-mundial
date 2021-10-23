import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Layout from '../components/layout'
import LoginView from '../views/auth/LoginView'
import Tours from '../views/admin/02-tours'
import LunaDeMiel from '../views/admin/03-lunaDeMiel'
import Cruceros from '../views/admin/04-cruceros'
import Clientes from '../views/admin/05-clientes'
import Ofertas from '../views/admin/06-ofertas'
import Categorias from '../views/admin/07-categorias'
import Galerias from '../views/admin/08-galerias'
import Blogs from '../views/admin/09-blogs'
import Comentarios from '../views/admin/10-comentarios'
import Contactos from '../views/admin/11-contactos'
import Home from '../views/admin/01-home'
import CrearTour from '../views/admin/02-tours/CrearTour'
import CrearLunaDeMiel from '../views/admin/03-lunaDeMiel/CrearLunaDeMiel'
import CrearCrucero from '../views/admin/04-cruceros/CrearCrucero'

const HomeRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/tours/crear-tour" component={CrearTour} />
        <Route exact path="/luna-de-miel" component={LunaDeMiel} />
        <Route
          exact
          path="/luna-de-miel/crear-luna-de-miel"
          component={CrearLunaDeMiel}
        />
        <Route exact path="/cruceros/crear-crucero" component={CrearCrucero} />
        <Route exact path="/cruceros" component={Cruceros} />

        <Route exact path="/clientes" component={Clientes} />
        <Route exact path="/ofertas" component={Ofertas} />
        <Route exact path="/categorias" component={Categorias} />
        <Route exact path="/galerias" component={Galerias} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/comentarios" component={Comentarios} />
        <Route exact path="/contactos" component={Contactos} />
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
  const [isAuth] = useState(true)

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
