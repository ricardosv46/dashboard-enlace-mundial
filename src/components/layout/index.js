import Sidebar from '../Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="min-h-screen md:ml-64 bg-white ">
        <div className="max-w-7xl md:w-full mx-auto ">{children}</div>
      </div>
    </div>
  )
}

export default Layout
