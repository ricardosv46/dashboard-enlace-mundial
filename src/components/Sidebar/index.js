import { useState } from 'react'
import { Home, LogOut, MoreVertical, Settings, User } from 'react-feather'
import {
  IconBlogs,
  IconClients,
  IconGalleries,
  IconMessage,
  IconOffer,
  IconShip,
  IconTour
} from '../../assets/icons/icons'

// import useAuth from '@/hooks/useAuth'
import SidebarLink from './SidebarLink'
// import SidebarCollapse from './SidebarCollapse'

const Sidebar = () => {
  // const { LogoutAction } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(!isOpen)

  const LogoutAction = (params) => {}

  return (
    <>
      <div
        className={`fixed z-20 transition-all flex flex-col top-0 md:left-0 w-64 bg-secondary-700 h-full shadow-lg ${
          isOpen ? 'left-0' : '-left-full'
        }`}
      >
        <div className="flex items-center pl-6 h-20 border-b border-gray-800">
          <div className="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blue-500" />
          <div className="ml-1">
            <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">
              NOMBRE_USUARIO
            </p>
            <div className="badge">
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">
                Conductor
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-6 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                  Dashboard
                </div>
              </div>
            </li>
            <li>
              <SidebarLink icon={Home} label="Inicio" to="/" />
            </li>
            <li>
              <SidebarLink icon={IconTour} label="Tours" to="/tours" />
            </li>
            <li>
              <SidebarLink
                icon={Home}
                to="/luna-de-miel"
                label="Luna De Miel"
              />
            </li>
            <li>
              <SidebarLink icon={IconShip} label="Cruceros" to="/cruceros" />
            </li>
            <li>
              <SidebarLink icon={IconClients} label="Clientes" to="/clientes" />
            </li>
            <li>
              <SidebarLink icon={IconOffer} label="Ofertas" to="/ofertas" />
            </li>
            <li>
              <SidebarLink icon={Home} label="Categorias" to="/categorias" />
            </li>
            <li>
              <SidebarLink
                icon={IconGalleries}
                label="Galerias"
                to="/galerias"
              />
            </li>
            <li>
              <SidebarLink icon={IconBlogs} label="Blogs" to="/blogs" />
            </li>
            <li>
              <SidebarLink icon={Home} label="Comentarios" to="/comentarios" />
            </li>
            <li>
              <SidebarLink
                icon={IconMessage}
                label="Contactos"
                to="/contactos"
              />
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">
                  Configuraciones
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6 transition-colors"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <User className="w-5 h-5" />
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Perfil
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6 transition-colors"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <Settings className="w-5 h-5" />
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Cuenta
                </span>
              </a>
            </li>
            <li>
              <button
                onClick={LogoutAction}
                className="relative w-full flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 text-red-400">
                  <LogOut className="w-5 h-5" />
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Cerrar sesion
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="fixed md:hidden bottom-5 right-5 rounded-full bg-blue-500 text-white p-2"
      >
        <MoreVertical />
      </button>
    </>
  )
}

export default Sidebar
