import logo from '../../assets/imgs/CatapultaLogo.svg'
import imagenLogin from '../../assets/imgs/huella.png'
import { useState } from 'react'
import { Alerta } from '../../components/Alert'
import mail from '../../assets/imgs/mail.svg'
import { useHistory } from 'react-router'
const ForgotPassword = () => {
  const [popUp, setpopUp] = useState(false)
  const history = useHistory()
  const togglePopUp = () => {
    setpopUp(!popUp)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="h-screen flex">
      <img
        className="hidden md:block w-full h-full object-cover"
        src={imagenLogin}
        alt=""
      />

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center w-11/12">
          <img className="w-72 sm:w-80 mb-7" src={logo} alt="" />
          <div className=" w-full md:w-2/3 mb-5 pl-1 flex items-center">
            <a
              className="text-3xl mr-2  px-2 cursor-pointer text-primary font-bold"
              onClick={() => history.push('/auth/login')}
            > {'<-'}
            </a>
            <p className="text-text">Regresar</p>
          </div>
          < div className="w-80 sm:w-100  border-primary border-2 px-8 py-8 rounded-3xl" >
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <p className="font-normal text-base text-text mb-10 leading-7">Ingresa tu usuario y te enviaremos un correo para recuperar tu contraseña.</p>
              <input
                className="border-b-2 text-base border-on-warn-400 w-full mb-8 outline-none text-on-warn-400 "
                type="text"
                placeholder="Ingresar Usuario"
              ></input>
              <button className="px-15 py-1 bg-white border-2 w-full sm:w-52 sm:mx-auto rounded-lg font-semibold border-primary text-primary hover:bg-primary-500
                               hover:text-white"
                onClick={togglePopUp}>
                Enviar
              </button>
              {
                popUp && (
                  <Alerta

                    togglePopUp={togglePopUp}
                    titulo="Usuario enviado"
                    texto="Te hemos enviado un enlace para reestablecer tu contraseña a tu correo electrónico."
                    icon={mail} />)
              }
            </form>
          </div >
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
