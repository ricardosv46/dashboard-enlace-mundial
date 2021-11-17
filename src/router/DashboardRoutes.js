import { Route, Switch } from 'react-router'
import Tours from '../views/admin/02-tours'
import LunaDeMiel from '../views/admin/03-lunaDeMiel'
import Cruceros from '../views/admin/04-cruceros'
import Clientes from '../views/admin/05-clientes'
import Ofertas from '../views/admin/06-ofertas'
import Categorias from '../views/admin/07-categorias'
import Galerias from '../views/admin/08-galerias'
import Blogs from '../views/admin/09-blogs'
import Home from '../views/admin/01-home'
import CrearTour from '../views/admin/02-tours/CrearTour'
import CrearLunaDeMiel from '../views/admin/03-lunaDeMiel/CrearLunaDeMiel'
import CrearCrucero from '../views/admin/04-cruceros/CrearCrucero'
import EditarTour from '../views/admin/02-tours/EditarTour'
import EditarLunaDeMiel from '../views/admin/03-lunaDeMiel/EditarLunaDeMiel'
import EditarCrucero from '../views/admin/04-cruceros/EditarCrucero'
import CrearCliente from '../views/admin/05-clientes/CrearCliente'
import EditarCategoria from '../views/admin/07-categorias/editarCategoria'
import CrearCategoria from '../views/admin/07-categorias/CrearCategoria'
import CrearPublicacion from '../views/admin/09-blogs/CrearPublicacion'
import CrearOferta from '../views/admin/06-ofertas/CrearOferta'
import EditarOferta from '../views/admin/06-ofertas/EditarOferta'
import CalendarioTour from '../views/admin/02-tours/CalendarioTour'
import EditarCliente from '../views/admin/05-clientes/EditarCliente'
import EditarPublicacion from '../views/admin/09-blogs/EditarPublicacion'
import ListarCategoriasBlog from '../views/admin/09-blogs/categorias/ListaCategoriasBlog'
import CrearCategoriaBlog from '../views/admin/09-blogs/categorias/CrearCategoria'
import EditarCategoriaBlog from '../views/admin/09-blogs/categorias/editarCategoria'
import Layout from '../components/layout'

const DashboardRoutes = () => {
  return (
    <>
      <Layout >
      <Switch>
        <Route exact path="/" component={Home} />

        {/* VISTAS DE TOURS */}
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/tours/crear-tour" component={CrearTour} />
        <Route exact path="/tours/editar-tour/:id" component={EditarTour} />
        <Route exact path="/tour/calendario/:id" component={CalendarioTour} />

        {/* VISTAS DE LUNA DE MIEL */}
        <Route exact path="/luna-de-miel" component={LunaDeMiel} />
        <Route
          exact
          path="/luna-de-miel/crear-luna-de-miel"
          component={CrearLunaDeMiel}
        />
        <Route
          exact
          path="/luna-de-miel/editar-luna-de-miel/:id"
          component={EditarLunaDeMiel}
        />

        {/* VISTAS DE CRUCEROS */}
        <Route exact path="/cruceros" component={Cruceros} />
        <Route exact path="/cruceros/crear-crucero" component={CrearCrucero} />
        <Route exact path="/cruceros/editar-crucero" component={EditarCrucero} />

        {/* VISTAS DE CLEINTES */}
        <Route exact path="/clientes" component={Clientes} />
        <Route exact path="/clientes/crear-cliente" component={CrearCliente} />
        <Route exact path="/clientes/editar-cliente" component={EditarCliente} />

        {/* VISTAS DE OFERTAS */}
        <Route exact path="/ofertas" component={Ofertas} />
        <Route exact path="/ofertas/crear-oferta" component={CrearOferta} />
        <Route exact path="/ofertas/editar-oferta" component={EditarOferta} />

        {/* VISTAS DE CATEGORIAS */}
        <Route exact path="/categorias" component={Categorias} />
        <Route
          exact
          path="/categorias/editar-categoria/:id"
          component={EditarCategoria}
        />
        <Route
          exact
          path="/categorias/crear-categoria"
          component={CrearCategoria}
        />

        {/* VISTAS DE LA GALERIA */}
        <Route exact path="/galerias" component={Galerias} />

        {/* VISTAS DEL BLOG */}
        <Route exact path="/blogs" component={Blogs} />
        <Route
          exact
          path="/blogs/crear-publiacion"
          component={CrearPublicacion}
        />
        <Route
          exact
          path="/blogs/editar-publiacion"
          component={EditarPublicacion}
        />
        <Route exact path="/blogs/categorias" component={ListarCategoriasBlog} />
        <Route
          exact
          path="/blogs/categorias/crear-categoria"
          component={CrearCategoriaBlog}
        />
        <Route
          exact
          path="/blogs/categorias/editar-categoria"
          component={EditarCategoriaBlog}
        />
      </Switch>
      </Layout>
    </>

  )
}

export default DashboardRoutes
