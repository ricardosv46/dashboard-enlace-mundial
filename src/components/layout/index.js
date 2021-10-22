import Sidebar from '../Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="min-h-screen md:ml-64 bg-white md:bg-gray-200">
        <div className="max-w-7xl md:w-11/12 mx-auto md:py-8">{children}</div>
      </div>
    </div>
  )
}

export default Layout
