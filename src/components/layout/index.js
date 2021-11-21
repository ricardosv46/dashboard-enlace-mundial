import Navbar from '../Navbar'
import Sidebar from '../sidebar1'
import { useModal } from '../../hooks/useModal'

const Layout = ({ children }) => {
  const [isOpen, onOpen, onClose] = useModal()

  const sidebarStyles = [
    isOpen ? 'left-0 ' : '-left-full',
    'fixed h-screen w-full lg:hidden z-999 transition-all duration-500'
  ]

  return (
    <div className="max-w-full animate__fadeIn animate__animated">
      <div className="flex max-w-full relative ">
        {/* DESKTOP */}
        <div className="hidden md:block">
          <Sidebar handleShowBtn={onClose} />
        </div>
        {/* MOBILE */}
        <div className={sidebarStyles.join(' ')}>
          <div
            onClick={onClose}
            className="absolute w-full h-full  bg-black bg-opacity-50 "
          />
          <Sidebar handleShowBtn={onClose} />
        </div>
        <div className="w-full bg-gray-200 md:p-10">
          <Navbar onOpen={onOpen} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
