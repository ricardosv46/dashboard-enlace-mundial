import React from 'react'
import { NavLink } from 'react-router-dom'

const SubMenuLinks = ({ subMenuData, showSubMenu, handleShowBtn }) => {
  return (
    <div className={`${showSubMenu ? '' : ''}`}>
      {subMenuData.map((data) => (
        <NavLink
          className="cursor-pointer flex ml-2   py-2 my-1 items-center hover:border-l-2 hover:border-primary hover:bg-text hover:bg-opacity-20 hover:pl-1 transition-all duration-100"
          key={data.nameLink}
          onClick={() => handleShowBtn()}
          to={data.path}
          exact
          activeClassName="border-l-4 border-primary bg-text bg-gray-500 text-white  pl-1 rounded-l-2xl "
        >
          {data.icono.value && (
            <img src={data.icono.getIcon} className="w-3 h-3 mr-2 " />
          )}
          <p className="text-md">{data.nameLink}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default SubMenuLinks
