import { menuData } from './menuData'
import MenuLink from './menuLink'
import logo from '../../assets/imgs/logo.png'
import iconDesplegar from '../../assets/imgs/desplegable.png'
import { useContext, useState } from 'react'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

const Sidebar1 = ({ handleShowBtn }) => {
  const { dispatch } = useContext(AuthContext)
  const [showLogout, setShowLogout] = useState(false)

  return (
    <div className="text-primary font-semibold top-0 bg-white w-64 pl-10 lg:w-80 z-90 h-screen sticky shadow-lg">
      <div className="flex items-center md:gap-x-3 relative">
        <img src={logo} className="pt-7 mb-5 cursor-pointer pr-3 w-50  " />
        <img
          src={iconDesplegar}
          alt=""
          className={`w-5 h-5 cursor-pointer  ${showLogout}  transform -ml-2 md:ml-0`}
          onClick={() => {
            setShowLogout((state) => !state)
          }}
        />
        {showLogout && (
          <div className="w-full rounded-lg shadow-md h-30 right-2 top-24 z-30 absolute px-10 flex items-center bg-white animate__animated animate__bounceInDown">
            <button
              className="btn btn-outline-blue w-full"
              onClick={() => {
                dispatch({
                  type: types.logout
                })
              }}
            >
              {' '}
              Salir{' '}
            </button>
          </div>
        )}
      </div>

      {menuData.map((data) => (
        <MenuLink
          key={data.nameLink}
          nameLink={data.nameLink}
          iconValue={data.icono.value}
          getIcon={data.icono.getIcon}
          subMenu={data.subMenu.value}
          subMenuData={data.subMenu.links}
          linkPath={data.path}
          iconDeploy={data.subMenu.iconDeploy}
          handleShowBtn={handleShowBtn}
        />
      ))}
    </div>
  )
}

export default Sidebar1
