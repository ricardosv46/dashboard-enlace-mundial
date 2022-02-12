// import { IconDelete, IconEdit } from '../../../assets/icons/icons'
// import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import { IconDelete, IconEdit } from '../../../assets/icons/icons'
import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import { useUserServices } from '../../../services/useUserServices'

const Clientes = () => {
  // variables: {
  //   numberPaginate: 12,
  //   page: 1,
  //   tipoUsuario: '',
  //   estado: ''
  // }

  const { db, loadingGetData } = useUserServices()
  console.log(db, loadingGetData)

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex justify-between mb-5">
        <Heading>Clientes</Heading>
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
                      Nombre
                    </th>
                    <th className="px-4 py-6 textgray-600 min-w-10 text-left">
                      Apellidos
                    </th>
                    <th className="px-4 py-6 textgray-600 min-w-10 text-left">
                      E-mail
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
                  {db.map((user) => (
                    <tr
                      key={user?.userId}
                      className="font-medium hover:shadow-md  transform transition-all duration-300  hover:-translate-y-1"
                    >
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {user?.userId}
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {user?.nombre}
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {user?.apellidos}
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {user?.email}
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {user?.estado}
                      </td>
                      <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20">
                        <div className="flex gap-x-10 items-center justify-center">
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

export default Clientes
