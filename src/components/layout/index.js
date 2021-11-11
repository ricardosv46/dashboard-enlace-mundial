// import Sidebar from '../Sidebar'
// import { useLocation } from 'react-router'

import { useState } from 'react'
import './index.css'

import Sidebar1 from '../sidebar1'
const Layout = ({ children }) => {
  // const { pathname } = useLocation()
  // const [showSidebar, setShowSidebar] = useState(true)
  // const [screenX, setScreenX] = useState(window.outerWidth)
  // const [showProgressBsar, setShowProgressBar] = useState(false)

  const [showBtn, setShowBtn] = useState(false)
  const handleShowBtn = () => {
    setShowBtn(!showBtn)
  }
  // useEffect(() => {
  //   setShowProgressBar(true)
  //   setTimeout(() => {
  //     setShowProgressBar(false)
  //   }, 2000)
  // }, [pathname])
  // useEffect(() => {
  //   const detectScreenX = () => setScreenX(window.outerWidth)
  //   window.addEventListener('resize', detectScreenX)
  //   // console.log(screenX)
  //   if (screenX >= 1280) {
  //     setShowSidebar(true)
  //   } else {
  //     setShowSidebar(showBtn)
  //   }
  //   return () => {
  //     window.removeEventListener('resize', detectScreenX)
  //   }
  // }, [screenX, showBtn])
  return (
    <div className="max-w-full">
      {/* {showProgressBsar && (
        <div className="fixed z-9999 top-0 w-full ">
          <div className="container-progress relative bg-gray-200 h-1 rounded-lg">
            <div className="progress-bar bg-primary "></div>
          </div>
        </div>
      )} */}
      <div className="flex max-w-full relative">
        <Sidebar1 handleShowBtn={handleShowBtn} show={showBtn} />
        <div className="w-full bg-gray-200 p-10">{children}</div>
      </div>
    </div>
  )
}

export default Layout
