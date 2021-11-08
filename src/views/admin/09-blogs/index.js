import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import TableGeneral from '../../../components/Tables/TableGeneral'
import { useBlogsServices } from '../../../services/useBlogsServices'

const dataHead = [
  ['Id', 'min-w-10', 'left'],
  ['Foto', 'min-w-30', 'left'],
  ['Título', 'min-w-50', 'left'],
  ['Categoria', 'min-w-40', 'left'],
  ['Estado', '', 'center'],
  ['Destacar', '', 'center'],
  ['Acciones', '', 'center']
]

const Blogs = () => {
  const history = useHistory()
  const [dataBody, setDataBody] = useState(null)

  const { data, loading, deleteBlog } = useBlogsServices()
  const armarFilasBlogs = (data, setDataBody, deleteCategoria) => {
    const filasBlogs = data.map((blog) => ({
      id: blog.blogId,
      imagen: (
        <img src={blog?.imagenPrincipalBlog?.url} className="w-26 h-22" />
      ),
      nombre: blog?.tituloBlog,
      categoria: blog?.CategoriaBlog?.tituloCategoriaBlog,
      estado: <BtnEstado estado={blog?.estadoBlog} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: (
        <BtnAcciones
          handleEdit={() => history.push('/')}
          handleDelete={() => deleteCategoria(blog)}
        />
      )
    }))

    if (filasBlogs.length > 0) {
      setDataBody(filasBlogs)
    }
  }
  useEffect(() => {
    armarFilasBlogs(data, setDataBody, deleteBlog)
  }, [data])

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">
      <div className="flex justify-between mb-5">
        <Heading>Publiacaciones Blog</Heading>
        <Button
          variant="primary"
          size="md"
          onClick={() => history.push('/blogs/crear-publiacion')}
        >
          + Agregar Publiación
        </Button>
      </div>
      {/* eslint-disable  */}
      {loading ? (
        <Spinner />
      ) : (
        <TableGeneral dataBody={dataBody} dataHead={dataHead} />
      )}
    </div>
  )
}

export default Blogs
