import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import { IconDelete, IconEdit } from '../../../assets/icons/icons'
import { Toaster, toast } from 'react-hot-toast'
import { useModal } from '../../../hooks/useModal'
import { useState } from 'react'
import { useIncluyeServices } from '../../../services/useIncluyeServices'
import ModalRegistrarIncluye from './ModalRegistrarIncluye'
import ModalActualizarIncluye from './ModalActualizarIncluye'
const Incluye = () => {
  const {
    db: dbIncluye,
    deleteIncluyeTour,
    loadingGetData
  } = useIncluyeServices()
  const [incluye, setIncluye] = useState({})
  const [isOpenModalActualizar, openModalActualizar, closeModalActualizar] =
    useModal()
  const [isOpenModalRegistrar, openModalRegistrar, closeModalRegistrar] =
    useModal()
  return (
    <>
      <ModalActualizarIncluye
        isOpen={isOpenModalActualizar}
        closeModal={closeModalActualizar}
        incluye={incluye}
      />
      <ModalRegistrarIncluye
        isOpen={isOpenModalRegistrar}
        closeModal={closeModalRegistrar}
      />
      <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen animate__fadeIn animate__animated">
        <div className="flex justify-between mb-5">
          <Toaster
            position="top-right"
            reverseOrder={true}
            containerClassName="top-18 md:top-5"
          />
          <Heading>Incluye</Heading>

          <Button
            variant="primary"
            size="md"
            onClick={() => openModalRegistrar()}
          >
            + Agregar Incluye
          </Button>
        </div>
        {/* eslint-disable  */}
        {loadingGetData ? (
          <Spinner />
        ) : (
          <>
            <div className="w-full mb-8 overflow-hidden rounded-md md:shadow-xl max-h-screen overflow-y-auto  ">
              <div className="w-full overflow-x-auto min-h-screen">
                <table className="w-full border-gray-100  text-left border-2 ">
                  <thead className="text-gray-700">
                    <tr className="text-lg font-semibold  tracking-wide bg-gray-100 text-center">
                      <th className="px-4 py-6 textgray-600 min-w-10 text-left">
                        ID
                      </th>
                      <th className="px-4 py-6 textgray-600 min-w-24 text-left">
                        Descripcion
                      </th>
                      <th className="px-4 py-6 textgray-600 min-w-10 text-center">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base bg-white border-gray-100 text-gray-700 ">
                    {dbIncluye.map((incluye) => (
                      <tr
                        key={incluye?.incluyeId}
                        className="font-medium hover:shadow-md  transform transition-all duration-300  hover:-translate-y-1"
                      >
                        <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                          {incluye?.incluyeId}
                        </td>
                        <td className='className="text-start uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                          {incluye?.descripcionIncluye}
                        </td>
                        <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20">
                          <div className="flex gap-x-10 items-center justify-center">
                            <button
                              onClick={() => {
                                openModalActualizar()
                                setIncluye({
                                  id: incluye?.incluyeId,
                                  descripcion: incluye?.descripcionIncluye
                                })
                              }}
                            >
                              <IconEdit />
                            </button>
                            <button
                              onClick={() => {
                                deleteIncluyeTour({
                                  incluyeId: incluye?.incluyeId
                                })
                                toast.success('Incluye Eliminado!')
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

export default Incluye
