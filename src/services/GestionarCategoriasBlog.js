import { useEffect, useState } from 'react'
import BtnAcciones from '../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../components/BtnEstado/BtnEstado'
import {
  useGetAllCategoriaBlogQuery
} from '../generated/graphql'

export const useGestionarCategoriasBlog = () => {
  const getAllCategoriasBlog = (handleEdit = () => { }, handleDelete = () => { }) => {
    const [dataBod, setDataBod] = useState([])
    const { data, loading } = useGetAllCategoriaBlogQuery({
      variables: { estadoCategoriaBlog: '' }
    })
    const createDataBody = loading ? [] : data?.GetAllCategoriaBlog

    useEffect(() => {
      createDataBody.map((category) =>
        setDataBod((data) => [
          ...data,
          {
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
    }, [loading, createDataBody])

    return [dataBod, setDataBod, data]
  }

  return { getAllCategoriasBlog }
}
