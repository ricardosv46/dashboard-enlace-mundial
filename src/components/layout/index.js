// import Sidebar from '../Sidebar'
import './index.css'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import Sidebar1 from '../sidebar1'
import Header from '../Header'
import HamburguesBtn from '../Btn-Hamburguers/hamburguesBtn'
const Layout = ({ children, setIsAuth }) => {
  const { pathname } = useLocation()
  const [showProgressBsar, setShowProgressBar] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)
  const [screenX, setScreenX] = useState(window.screen.width)
  const handleShowBtn = () => {
    setShowBtn(!showBtn)
  }
  useEffect(() => {
    setShowProgressBar(true)
    setTimeout(() => {
      setShowProgressBar(false)
    }, 3000)
  }, [pathname])
  useEffect(() => {
    const detectScreenX = () => setScreenX(window.screen.width)
    window.addEventListener('resize', detectScreenX)

    if (screenX >= 960) {
      setShowSidebar(true)
    } else {
      setShowSidebar(showBtn)
    }
    return () => {
      window.removeEventListener('resize', detectScreenX)
    }
  }, [screenX, showBtn])
  return (
    <div className="max-w-full">
      {showProgressBsar && (
        <div className="container-progress relative bg-gray-200 h-1 rounded-lg">
          <div className="progress-bar bg-primary "></div>
        </div>
      )}
      <div className="flex max-w-full  relative ">
        <div
          className={` fixed  h-screen md:sticky md:top-0 z-99 left-0  md:left-auto right-0 md:right-auto bottom-0
       md:bottom-px top-0 bg-black  opacity-0 md:bg-white pointer-events-none 
       ${showSidebar &&
            'pointer-events-auto  duration-500 opacity-100 bg-opacity-50 transition-all'
            } `}
        >
          <Sidebar1 handleShowBtn={handleShowBtn} show={showBtn} />
        </div>
        <div className=" w-full ">
          <Header setIsAuth={setIsAuth} />
          {children}
        </div>
        <HamburguesBtn show={showBtn} handleClick={handleShowBtn} />
      </div>
    </div>

  )
}

export default Layout
