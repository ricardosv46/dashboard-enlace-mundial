// import { useEffect } from 'react'
import { useEffect, useState } from 'react'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Heading from '../../../components/Heading'
import { useToursServices } from '../../../services/useToursServices'

const Tours = () => {
  const [nroPagina, setNroPagina] = useState(1)

  const { loadingGetData, data } = useToursServices({
    page: nroPagina,
    estadoTour: '',
    numberPaginate: 10
  })

  const [arregloSelect, setArregloSelect] = useState([])

  useEffect(() => {
    if (!loadingGetData) {
      setArregloSelect(
        new Array(
          Math.round(parseFloat(data?.GetAllTour?.nroTotalItems / 10))
        ).fill(1)
      )
    }
  }, [loadingGetData])

  return (
    <div className="shadow  md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex-col gap-y-9  flex items-center  sm:flex-row sm:justify-between mb-5">
        <Heading size="xl" className="text-3xl text-gray-800">
          Tours
        </Heading>
      </div>

      {/* eslint-disable  */}
      {loadingGetData ? (
        <div>Cargando ...</div>
      ) : (
        <>
          <div className="flex-col gap-x-10  flex items-center  sm:flex-row  mb-5">
            <p> Total de Datos {data?.GetAllTour?.nroTotalItems}</p>
            <div className="">
              <label htmlFor="paginas" className="mr-2">
                Numero de Páginas
              </label>
              <select
                id="paginas"
                className="p-1"
                onChange={(e) => setNroPagina(e.target.value)}
                value={nroPagina}
              >
                {arregloSelect?.map((elemento, index) => (
                  <option key={elemento + index} value={elemento + index}>
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
                      Titulo
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Categoria
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Destacado
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-left">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base bg-white border-gray-100 text-gray-700 ">
                  {data?.GetAllTour?.data.map((tour, index) => (
                    <tr
                      key={tour?.tourId}
                      className="font-medium hover:shadow-md  transform transition-all duration-300  hover:-translate-y-1"
                    >
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {(nroPagina - 1) * 10 + index + 1}
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        <img
                          src={tour?.imagenPrincipalTour?.url}
                          alt=""
                          className="max-w-20 max-h-24"
                        />
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {tour?.tituloTour}
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        {tour?.Categoria?.tituloCategoria}
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        <div className="cursor-pointer">
                          <BtnDestacado
                            estado={tour?.destacadoTour === 'Activado' && true}
                          />
                        </div>
                      </td>
                      <td className='className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "'>
                        <div className="cursor-pointer">
                          <BtnEstado
                            estado={tour?.estadoTour === 'Activado' && true}
                          />
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

export default Tours
