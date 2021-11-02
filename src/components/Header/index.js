import { useState } from 'react'
import iconLogo from '../../assets/imgs/logo.png'
// import iconDesplegar from '../../assets/imgs/FlechaAbajoHeader.svg'
/* import { AuthContext } from '../../context/auth/AuthState' */
import Button from '../../components/Buttons/Button'
const Header = ({ setIsAuth }) => {
  const [showMenu, setShowMenu] = useState(false)
  const show = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="sticky top-0 z-90 h-24 flex w-full justify-between items-center md:justify-end px-6 bg-white border-b shadow-lg py-1">
      <div className="w-full lg:w-52 flex gap-x-2 justify-between md:justify-end items-center ">
        <img src={iconLogo} className="cursor-pointer w-50 h-11 " />
        <img
          src=''
          className={` cursor-pointer self-end mb-4  p-3 mt-6 ${showMenu
            ? 'rotate-180 transform transition-all duration-300 '
            : 'rotate-0 transform transition-all duration-700'
            }"`}
          onClick={show}
        />
        {showMenu && (
          <div className="animate__animated animate__bounceInDown absolute top-22 bg-white right-5 w-52 h-50 md:w-60 flex flex-col justify-center items-center z-99999  rounded-2xl shadow-xl">
            <img src='' className="w-2/5 mb-5" alt="" />
            <a className="cursor-pointer text-base font-medium w-full text-center text-primary py-3 px-2 underline">
              Ver perfil
            </a>
            <Button
              size="sm"
              className="text-primary font-medium text-base hover:bg-primary hover:text-white rounded-2xl"
              variant="outline"
              onClick={() => setIsAuth(false)}
            >
              Cerrar Sesión
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Header
