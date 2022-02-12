import { Toaster, toast } from 'react-hot-toast'
import { useHistory } from 'react-router'
import swal from 'sweetalert'
import { IconDelete, IconEdit } from '../../../assets/icons/icons'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import { useCategoriasServices } from '../../../services/useCategoriaServices'

const Categorias = () => {
  const history = useHistory()
  const { db, loadingGetData, updateCategoriaEstado, deleteCategoria } =
    useCategoriasServices()
  return (
    <>
      <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen animate__fadeIn animate__animated">
        <div className="flex justify-between mb-5 ">
          <Toaster
            position="top-right"
            reverseOrder={true}
            containerClassName="top-18 md:top-5"
          />

          <Heading>Categorias</Heading>

          <Button
            variant="primary"
            size="md"
            onClick={() => history.push('/categorias/crear-categoria')}
          >
            + Agregar Categoria
          </Button>
        </div>
        {/* eslint-disable  */}
        {loadingGetData ? (
          <Spinner />
        ) : (
          <>
            <div className="w-full mb-8 overflow-hidden rounded-md md:shadow-xl max-h-screen overflow-y-auto ">
              <div className="w-full overflow-x-auto min-h-screen">
                <table className="w-full border-gray-100  text-left border-2 ">
                  <thead className="text-gray-700">
                    <tr className="text-lg font-semibold  tracking-wide bg-gray-100 text-center">
                      <th className="px-4 py-6 textgray-600 min-w-10 text-left">
                        ID
                      </th>
                      <th className="px-4 py-6 textgray-600 min-w-10 text-left">
                        Imagen
                      </th>
                      <th className="px-4 py-6 textgray-600 min-w-10 text-left">
                        Nombre
                      </th>
                      <th className="px-4 py-6 textgray-600 min-w-10 text-left">
                        Estado
                      </th>
                      <th className="px-4 py-6 textgray-600 min-w-10 text-center">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base bg-white border-gray-100 text-gray-700 ">
                    {db.map((category) => (
                      <tr
                        key={category?.categoriaId}
                        className="font-medium hover:shadow-md  transform transition-all duration-300  hover:-translate-y-1"
                      >
                        <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                          {category?.categoriaId}
                        </td>
                        <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                          <img
                            className="w-16 h-10 object-cover"
                            src={category?.imagenPrincipalCategoria.url}
                          />
                        </td>
                        <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 '>
                          {category?.tituloCategoria}
                        </td>
                        <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 '>
                          <button
                            className="cursor-pointer"
                            onClick={() => {
                              updateCategoriaEstado({
                                id: category?.categoriaId,
                                estado:
                                  category?.estadoCategoria === 'Activado'
                                    ? 'Desactivado'
                                    : 'Activado'
                              })
                              toast.success('Se modifico el estado')
                            }}
                          >
                            <BtnEstado
                              estado={
                                category?.estadoCategoria === 'Activado' ? 1 : 0
                              }
                            />
                          </button>
                        </td>
                        <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20">
                          <div className="flex gap-x-10 items-center justify-center">
                            <button
                              onClick={() =>
                                history.push(
                                  `/categorias/editar-categoria/${category?.slugCategoria}`,
                                  category
                                )
                              }
                            >
                              <IconEdit />
                            </button>
                            <button
                              onClick={() => {
                                swal({
                                  title: `Desea eliminar la categoria ${category?.tituloCategoria}?`,
                                  text: 'Se borraran todos los tours que esten asociados a esta categoria',
                                  icon: 'warning',
                                  buttons: true,
                                  dangerMode: true
                                }).then(async (rpta) => {
                                  if (rpta) {
                                    deleteCategoria({
                                      id: category?.categoriaId
                                    })
                                    toast.success('Categoría Eliminada!')
                                  }
                                })
                              }}
                            >
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
    </>
  )
}

export default Categorias
