import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

// import styles from './sidebar.module.css'

const SidebarCollapse = ({ icon: Icon, label, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(!isOpen)

  return (
    <>
      <button onClick={onToggle} className="w-full relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6 transition-colors">
        <span className="inline-flex justify-center items-center ml-4">
          <Icon className="w-5 h-5" />
        </span>
        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
          {label}
        </span>

        <span className="ml-auto">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <div className={`pl-4 overflow-hidden transition-all ${isOpen ? 'max-h-28' : 'max-h-0'}`}>{children}</div>
    </>
  )
}

export default SidebarCollapse
