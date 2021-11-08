import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import swal from 'sweetalert'
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
    const handleDelete = (id) => {
      try {
        swal({
          title: 'Eliminar',
          text: '¿Esta seguro que desea eliminar esta categoria?',
          icon: 'warning',
          buttons: ['NO', 'SI'],
          timer: 5000
        }).then(respuesta => {
          if (respuesta) {
            deleteCtegory({
              variables: {

                input: {
                  categoriaBlogId: id
                }

              }
            })
            swal({
              title: 'ELIMINADO',
              text: 'Se elimino correctamente la categoria',
              icon: 'success',
              button: 'Aceptar',
              timer: 2000
            })
            dataBody.filter(category => category.id !== id)
            setDataBody(dataBody)
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
    }, [loading, deleteCtegory])

    return [dataBody, setDataBody, data]
  }

  return { getAllCategoriasBlog }
}
