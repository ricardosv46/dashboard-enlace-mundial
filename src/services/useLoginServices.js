import { useMutation } from '@apollo/client'
import { LOGIN_USUARIO } from '../graphql/mutation/LoginUsuario'

// Obtenemos todas las categorias
export const useLoginServices = () => {
  const [LoginUsuario, { loading: loadingLogin }] = useMutation(LOGIN_USUARIO, {
    onError: (err) => {
      console.log('onError Login Usuario', err?.graphQLErrors[0]?.debugMessage)
    }
  })

  const loginUsuario = async ({ email, password }) => {
    const res = await LoginUsuario({
      variables: {
        input: {
          email: email,
          password: password
        }
      }
    })
    console.log('LoginUsuario', res)

    if (res.data?.login?.tipoUsuario === 1) {
      return 'exito'
    }
  }

  return {
    loadingLogin,

    loginUsuario
  }
}
