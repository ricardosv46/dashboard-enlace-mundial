import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({ icon: Icon, label, to = '/' }) => {
  return (
    <NavLink
      activeClassName="bg-primary-700 text-gray-200 text-lg"
      exact
      to={to}
      className="flex focus:outline-none text-md hover:bg-primary-600 text-gray-300 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 transition-colors"
    >
      <p className="flex items-center h-11 w-full transform hover:translate-x-2 duration-300">
        <span className="inline-flex justify-center items-center ml-4">
          {Icon ? <Icon className="w-7 h-5" /> : null}
        </span>
        <span className="ml-2 font-medium tracking-wide truncate font-sans">
          {label}
        </span>
      </p>
    </NavLink>
  )
}

export default SidebarLink
