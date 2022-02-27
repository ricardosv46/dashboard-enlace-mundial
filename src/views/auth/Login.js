import logo from '../../assets/imgs/logo.png'
import portada from '../../assets/imgs/portada.jpg'
import { useContext, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useHistory } from 'react-router'
import { validateFields } from '../../validateFields/valeidatefields'
import pestanaFalse from '../../assets/imgs/pestana.png'
import pestanaTrue from '../../assets/imgs/eye.svg'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import { useLoginServices } from '../../services/useLoginServices'
const Login = () => {
  const { dispatch } = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const [FormReady, setFormReady] = useState(false)
  const initial = {
    user: '',
    password: ''
  }

  const history = useHistory()

  const handleClick = () => {
    history.push('/auth/login/olvidaste-contrasena')
  }

  const { loginUsuario } = useLoginServices()

  return (
    <div className="h-screen flex justify-center px-4 md:px-0 ">
      <img
        className="hidden md:block md:w-1/2 h-full object-cover animate__bounceInUp animate__animated"
        src={portada}
        alt=""
      />
      <div className="flex flex-col items-center justify-center  md:w-1/2  max-w-120 w-full md:mx-auto ">
        <img className="w-48 sm:w-52 mb-7 " src={logo} alt="" />
        <Formik
          className=""
          initialValues={initial}
          validate={({ user, password }) => validateFields({ user, password })}
          onSubmit={({ user, password }, { resetForm }) => {
            loginUsuario({ email: user, password: password }).then((res) => {
              if (res === 'exito') {
                const action = {
                  type: types.login,
                  payload: {
                    usuario: user,
                    contraseña: password
                  }
                }
                dispatch(action)
                history.push('/')
              }
            })
            setFormReady(true)
            setTimeout(() => setFormReady(false), 6000)
          }}
        >
          {({ errors, values }) => (
            <Form className="w-full py-8 shadow-2xl px-6 md:px-8 md:mt-12 animate__bounceInUp animate__animated ">
              <div className="flex flex-col ">
                <label
                  className=" text-black mb-2 text-lg tracking-wide font-bold "
                  htmlFor="user"
                >
                  Usuario
                </label>
                <Field
                  className={`w-full rounded-xl text-gray-800 border-2 ${
                    errors.user ? 'border-red-600' : 'border-primary-500'
                  } mb-1 outline-none py-2 pl-4
                        focus:ring-2  focus:ring-2 focus:ring-accent focus:border-primary-800`}
                  type="text"
                  id="user"
                  name="user"
                  placeholder="Tu Usuario"
                  value={values.user.trim()}
                />
                <ErrorMessage
                  name="user"
                  component={() => (
                    <div className="text-sm text-center text-red-600">
                      {errors.user}
                    </div>
                  )}
                />
                <label
                  className=" text-black mb-2 mt-4 text-lg tracking-wide font-bold"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <Field
                    className={`w-full rounded-xl text-gray-800 border-2 ${
                      errors.password ? 'border-red-600' : 'border-primary-500'
                    } mb-1 outline-none py-2 pl-4 focus:ring-2  focus:ring-2 focus:ring-accent focus:border-primary-800`}
                    type={show ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="**************"
                  />

                  <img
                    src={show ? pestanaTrue : pestanaFalse}
                    className="w-5 absolute top-3 right-4 cursor-pointer"
                    onClick={() => setShow(!show)}
                  />
                </div>

                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="text-sm text-center text-red-600">
                      {errors.password}
                    </div>
                  )}
                />

                <a
                  className="text-primary text-sm my-2 underline italic cursor-pointer"
                  onClick={handleClick}
                >
                  Olvidaste la contraseña
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-56 sm:mx-auto bg-primary text-white px-4 font-semibold py-2 rounded-lg mt-4 outline-none disabled:opacity-50"
                >
                  Iniciar Sesión
                </button>
                {FormReady && (
                  <p className="text-red-600 text-center mt-5 text-sm ">
                    El Usuario o Contraseña es incorrecto
                  </p>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
