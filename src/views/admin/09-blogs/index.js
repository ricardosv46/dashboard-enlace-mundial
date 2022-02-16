import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { IconDelete, IconEdit } from '../../../assets/icons/icons'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'

import { useBlogsServices } from '../../../services/useBlogsServices'

const Blogs = () => {
  const history = useHistory()
  const [nroPagina, setNroPagina] = useState(1)
  const [arregloSelect, setArregloSelect] = useState([])

  const {
    db: dbBlog,
    loading: loadingGetData,
    dbTotalItems
  } = useBlogsServices({
    page: nroPagina,
    numberPaginate: 10,
    estadoBlog: ''
  })
  useEffect(() => {
    if (!loadingGetData) {
      setArregloSelect(
        new Array(Math.ceil(parseFloat(dbTotalItems?.nroTotalItems / 10))).fill(
          1
        )
      )
    }
  }, [loadingGetData])

  console.log(dbBlog, dbTotalItems)
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen animate__fadeIn animate__animated ">
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
      {loadingGetData ? (
        <Spinner />
      ) : (
        <>
          <div className="flex-col gap-y-10 gap-x-14  flex items-center  sm:flex-row  mb-5">
            <p className="text-gray-800 text-xl">
              {' '}
              Total de Datos{' '}
              <span className="font-bold">
                {dbTotalItems?.nroTotalItems}
              </span>{' '}
            </p>
            <div className="text-gray-700">
              <label htmlFor="paginas" className="mr-2">
                Numero de Páginas
              </label>
              <select
                id="paginas"
                className="p-1 w-20 text-center text-gray-600 "
                onChange={(e) => setNroPagina(e.target.value)}
                value={nroPagina}
              >
                {arregloSelect?.map((elemento, index) => (
                  <option
                    className="font-bold"
                    key={elemento + index}
                    value={elemento + index}
                  >
                    {elemento + index}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full mb-8 overflow-hidden rounded-md md:shadow-xl max-h-screen overflow-y-auto  ">
            <div className="w-full overflow-x-auto min-h-screen">
              <table className="w-full border-gray-100  text-left border-2 ">
                <thead className="text-gray-700">
                  <tr className="text-lg font-semibold  tracking-wide bg-gray-100 text-center">
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      #
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Imágen
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Título
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Categoría
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Estado
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Destacado
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base bg-white border-gray-100 text-gray-700 ">
                  {dbBlog.map((blog, index) => (
                    <tr
                      key={blog?.blogId}
                      className="font-medium hover:shadow-md  transform transition-all duration-300  hover:-translate-y-1"
                    >
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {(nroPagina - 1) * 10 + index + 1}
                      </td>

                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        <img
                          src={blog?.imagenPrincipalBlog?.url}
                          alt=""
                          className="max-w-20 max-h-24"
                        />
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        {blog?.tituloBlog}
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        {blog?.CategoriaBlog?.descripcionCategoriaBlog}
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        <BtnEstado
                          estado={blog?.estadoBlog === '1' ? true : false}
                        />
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        <BtnDestacado
                          estado={blog?.destacadoBlog === '1' ? true : false}
                        />
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        <div className="flex gap-x-5 lg:gap-x-10 items-center justify-center">
                          <button>
                            <IconEdit />
                          </button>
                          <button>
                            <IconDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Blogs
