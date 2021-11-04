import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SubMenuLinks from './SubMenuLinks'

const MenuLink = ({
  nameLink,
  iconValue,
  getIcon,
  subMenu,
  subMenuData,
  linkPath,
  iconDeploy,
  handleShowBtn
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleShowSubMenu = () => {
    setShowSubMenu(value => !value)
    if (!subMenu) {
      handleShowBtn()
    }
  }

  return (
    <div className="w-full  mt-3">
      <div className="flex justify-between items-center relative " >
        <NavLink className=" flex  items-center  w-full cursor-pointer py-3  hover:bg-text hover:bg-gray-500 hover:text-white rounded-l-2xl transition-all duration-300 transform hover:-translate-x-2"
          onClick={handleShowSubMenu}
          to={linkPath}
          exact
          activeClassName="border-l-4 border-primary bg-text bg-gray-500 text-white  pl-1 rounded-l-2xl"

        >
          {iconValue && <img className="mr-3 w-6 h-6 " src={getIcon} />}
          <p className="">{nameLink}</p>
        </NavLink>

        {subMenu &&
          <img className={`absolute right-7 lg:right-20 top-4 cursor-pointer  w-5 h-5 ${showSubMenu ? 'transform rotate-0 transition-all  duration-150' : 'transform rotate-270 transition-all  duration-150'}`}
            src={iconDeploy}
            onClick={handleShowSubMenu}
          />
        }

      </div>
      {(subMenu &&
        <div className={`${showSubMenu ? 'block py-1  pl-4 animate__bounceInLeft animate__animated animate__faster' : 'hidden'} `}>
          <SubMenuLinks
            subMenuData={subMenuData}
            showSubMenu={showSubMenu}
            handleShowBtn={handleShowBtn}
          />
        </div>
      )}
    </div>

  )
}

export default MenuLink
