// import iconDesplegar from '../../assets/imgs/icon_desplegar_sidebar.png'
import iconInicio from '../../assets/imgs/home.svg'
import iconLunaMiel from '../../assets/imgs/luna-de-miel.png'
import iconTours from '../../assets/imgs/tours.png'
import iconCrucero from '../../assets/imgs/crucero.png'
import iconClientes from '../../assets/imgs/clientes.png'
import iconOfertas from '../../assets/imgs/ofertas.png'
import iconCategorias from '../../assets/imgs/category.png'
import iconGaleria from '../../assets/imgs/galeria.png'
import iconBlogs from '../../assets/imgs/blogs.png'
import iconDesplegar from '../../assets/imgs/desplegable.png'
import iconBall from '../../assets/imgs/ball.png'
export const menuData = [
  {
    nameLink: 'Dashboard',
    icono: {
      value: true,
      getIcon: iconInicio
    },

    path: '/',

    subMenu: {
      value: false
    }
  },
  {
    nameLink: 'Galeria',
    icono: {
      value: true,
      getIcon: iconGaleria
    },

    path: '/galerias',

    subMenu: {
      value: false
    }
  },
  {
    nameLink: 'Tours',
    icono: {
      value: true,
      getIcon: iconTours
    },

    path: '/tours',

    subMenu: {
      value: false
    }
  },
  {
    nameLink: 'Luna de Miel',
    icono: {
      value: true,
      getIcon: iconLunaMiel
    },

    path: '/luna-de-miel',

    subMenu: {
      value: false
    }
  },
  {
    nameLink: 'Cruceros',
    icono: {
      value: true,
      getIcon: iconCrucero
    },

    path: '/cruceros',

    subMenu: {
      value: false
    }
  },
  {
    nameLink: 'Blogs',
    icono: {
      value: true,
      getIcon: iconBlogs
    },

    path: '/blogs',

    subMenu: {
      value: true,
      iconDeploy: iconDesplegar,
      links: [

        {
          nameLink: 'Categorias',
          icono: {
            value: true,
            getIcon: iconBall
          },
          path: '/blogs/categorias'
        }
      ]
    }
  },
  {
    nameLink: 'Clientes',
    icono: {
      value: true,
      getIcon: iconClientes
    },

    path: '/clientes',

    subMenu: {
      value: false
    }
  },
  {
    nameLink: 'Ofertas',
    icono: {
      value: true,
      getIcon: iconOfertas
    },

    path: '/ofertas',

    subMenu: {
      value: false
    }
  },
  {
    nameLink: 'Categorias',
    icono: {
      value: true,
      getIcon: iconCategorias
    },

    path: '/categorias',

    subMenu: {
      value: false
    }
  }
]
