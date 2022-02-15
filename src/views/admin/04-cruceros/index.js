import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import { useEffect, useState } from 'react'
// import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
// import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import { useCruceroServices } from '../../../services/useCruceroServices'
import Spinner from '../../../components/Spinner/Spinner'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import { IconDelete, IconEdit } from '../../../assets/icons/icons'
import toast, { Toaster } from 'react-hot-toast'

const Cruceros = () => {
  const history = useHistory()
  const [nroPagina, setNroPagina] = useState(1)
  const [arregloSelect, setArregloSelect] = useState([])
  const {
    db: dbCrucero,
    loading: loadingGetData,
    dbTotalItems,
    updateCruceroDestacado,
    updateCruceroEstado,
    deleteCrucero
  } = useCruceroServices({
    page: nroPagina,
    estadoCrucero: '',
    numberPaginate: 10
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
  console.log(dbCrucero)
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex justify-between mb-5">
        <Toaster
          position="top-right"
          reverseOrder={true}
          containerClassName="top-18 md:top-5"
        />
        <Heading>Cruceros</Heading>
        <Button
          onClick={() => history.push('/cruceros/crear-crucero')}
          size="md"
        >
          + Agregar Crucero
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
                      Destacado
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Estado
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base bg-white border-gray-100 text-gray-700 ">
                  {dbCrucero.map((crucero, index) => (
                    <tr
                      key={crucero?.cruceroId}
                      className="font-medium hover:shadow-md  transform transition-all duration-300  hover:-translate-y-1"
                    >
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {(nroPagina - 1) * 10 + index + 1}
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        <img
                          src={crucero?.imagenPrincipalCrucero?.url}
                          alt=""
                          className="max-w-20 max-h-24"
                        />
                      </td>

                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        {crucero?.tituloCrucero}
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        {crucero?.Categoria.tituloCategoria}
                      </td>

                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        <button
                          onClick={() => {
                            updateCruceroDestacado({
                              id: crucero?.cruceroId,
                              destacado:
                                crucero?.destacadoCrucero === 'Activado'
                                  ? 'Desactivado'
                                  : 'Activado'
                            }).then((res) => {
                              toast.success('Se modifico el destacado')
                            })
                          }}
                        >
                          <BtnDestacado
                            estado={
                              crucero?.destacadoCrucero === 'Activado' && true
                            }
                          />
                        </button>
                      </td>
                      <td className="text-left  uppercase text-gray-600 py-6 px-4 min-h-20">
                        <button
                          onClick={() => {
                            updateCruceroEstado({
                              id: crucero?.cruceroId,
                              estado:
                                crucero?.estadoCrucero === 'Activado'
                                  ? 'Desactivado'
                                  : 'Activado'
                            }).then((res) => {
                              toast.success('Se modifico el estado')
                            })
                          }}
                        >
                          <BtnEstado
                            estado={
                              crucero?.estadoCrucero === 'Desactivado'
                                ? false
                                : true
                            }
                          />
                        </button>
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 ">
                        <div className="flex gap-x-5 lg:gap-x-10 items-center justify-center">
                          <button
                            onClick={() =>
                              history.push(
                                `/cruceros/editar-crucero/${crucero?.cruceroId}`,
                                crucero
                              )
                            }
                          >
                            <IconEdit />
                          </button>
                          <button>
                            <IconDelete
                              onClick={() => {
                                swal({
                                  title:
                                    'Eliminaras el crucero' +
                                    ' ' +
                                    crucero?.tituloCrucero,
                                  text: 'No podras revertir esto!',
                                  icon: 'warning',
                                  buttons: true,
                                  dangerMode: true
                                }).then((res) => {
                                  if (res) {
                                    deleteCrucero({
                                      id: crucero?.cruceroId
                                    })
                                    swal(
                                      'Eliminado',
                                      'El crucero fue eliminado',
                                      'success'
                                    )
                                  }
                                })
                              }}
                            />
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

export default Cruceros
