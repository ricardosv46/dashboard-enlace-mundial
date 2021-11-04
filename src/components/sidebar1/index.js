import React from 'react'
import { menuData } from './menuData'
import MenuLink from './menuLink'
import logo from '../../assets/imgs/logo.png'

const Sidebar1 = ({ handleShowBtn }) => {
  // const [isOpen, setIsOpen] = useState(false)
  // const onToggle = () => setIsOpen(!isOpen)
  // console.log(onToggle)
  return (
    <div className=" text-primary  font-semibold  top-0 bg-white w-64 lg:w-80 pl-7 lg:pl-10 z-90 min-h-screen border-r-2 ">
      <img src={logo} className=" pt-7 mb-5  cursor-pointer  pr-3 w-50" />
      {menuData.map(data =>
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
      )}

    </div>
  )
}

export default Sidebar1
