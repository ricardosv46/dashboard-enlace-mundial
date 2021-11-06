import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import BtnAcciones from '../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../components/BtnEstado/BtnEstado'
import {
  useDeleteCategoriaBlogMutation,
  useGetAllCategoriaBlogQuery
} from '../generated/graphql'

export const useGestionarCategoriasBlog = () => {
  const history = useHistory()
  const [deleteCtegory] = useDeleteCategoriaBlogMutation({ onError: (error) => { console.log(error.graphQLErrors[0]) } })
  const { data, loading } = useGetAllCategoriaBlogQuery({
    fetchPolicy: 'network-only',
    variables: { estadoCategoriaBlog: '' }
  })
  const getAllCategoriasBlog = () => {
    const [dataBody, setDataBody] = useState([])
    const createDataBody = loading ? [] : data?.GetAllCategoriaBlog
    const handleEdit = () => {
      history.push('/blogs/categorias/editar-categoria')
    }
    // Funcion para Eliminar una categoria
    const handleDelete = async (id) => {
      try {
        await deleteCtegory({
          variables: {

            input: {
              categoriaBlogId: id
            }

          }
        })
      } catch (error) { console.log(error) }
    }
    useEffect(() => {
      createDataBody.map((category) =>
        setDataBody((data) => [
          ...data,
          {
            id: category.categoriaBlogId,
            imagen: (
              <img
                src={category.imagenPrincipalCategoriaBlog.url}
                alt={category.imagenPrincipalCategoriaBlog.descripcion}
                className="w-26 h-22"
              />
            ),
            nombre: category.tituloCategoriaBlog,

            estado: (
              <BtnEstado
                estado={
                  // eslint-disable-next-line no-unneeded-ternary
                  category.estadoCategoriaBlog === 'Activo' ? true : false
                }
              />
            ),
            descatar: <BtnDestacado estado={true} />,
            acciones: (
              <BtnAcciones
                handleEdit={handleEdit}
                handleDelete={() => handleDelete(category.categoriaBlogId)}
              />
            )
          }
        ])
      )
    }, [loading])

    return [dataBody, setDataBody, data]
  }

  return { getAllCategoriasBlog }
}
