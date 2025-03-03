
import { isEmail } from '../utils/isEmail'

export const validateFields = ({ user, password }) => {
  const errores = {}
  // if (!user.trim()) {
  //     errores.nombre = 'Por favor ingrese un nombre';
  // } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(user)) {
  //     errores.nombre = 'El nombre solo puede contener letras y espacios';
  // }
  if (!user.trim()) {
    errores.user = 'Por favor ingrese un correo de usuario'
  } else if (!isEmail(user)) {
    errores.user = 'Ingrese un correo válido'
  }
  if (!password.trim()) {
    errores.password = 'Por favor ingrese su contraseña'
  }
  return errores
}

export const validacionesParaCreacionDeTours = ({ categorias }) => {
  const errores = {}
  if (categorias === '') {
    errores.categorias = 'debe de seleccionar una categoria'
  } else {
    errores.categorias = 'correcto'
  }
  return errores
}
