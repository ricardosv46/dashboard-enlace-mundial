import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { IconEyes } from '../../../assets/icons/icons'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'

import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import { useOrdenServices } from '../../../services/useOrdenServices'

const Checkout = () => {
  const history = useHistory()

  const [nroPagina, setNroPagina] = useState(1)
  const [arregloSelect, setArregloSelect] = useState([])

  const { dataOrden, loadingGetData, nroTotalItems, updateOrdenTourEstado } =
    useOrdenServices({
      page: nroPagina,
      numberPaginate: 10,
      estadoOrdenTour: ''
    })
  console.log(dataOrden)
  useEffect(() => {
    if (!loadingGetData) {
      setArregloSelect(
        new Array(Math.ceil(parseFloat(nroTotalItems / 10))).fill(1)
      )
    }
  }, [loadingGetData])

  return (
    <div className="shadow  md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated ">
      <div className="flex justify-between mb-5">
        <Toaster
          position="top-right"
          reverseOrder={true}
          containerClassName="top-18 md:top-5"
        />
        <Heading>Ordenes</Heading>
      </div>
      {/* eslint-disable  */}
      {loadingGetData ? (
        <Spinner />
      ) : (
        <>
          <div className="flex-col gap-y-10 gap-x-14  flex items-center  sm:flex-row  mb-5">
            <p className="text-gray-800 text-xl">
              {' '}
              Total de Datos <span className="font-bold">
                {nroTotalItems}
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
                {arregloSelect.length > 0 &&
                  arregloSelect?.map((elemento, index) => (
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
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-center">
                      #
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-center">
                      Imágen
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-center">
                      Título
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-center">
                      Pasajes
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-center">
                      Estado
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-center">
                      Acciones
                    </th>
                    <th className="px-4 py-6 text-gray-600 min-w-10 text-center">
                      Detalle
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base bg-white border-gray-100 text-gray-700 ">
                  {dataOrden.length > 0 &&
                    dataOrden.map((orden, index) => (
                      <tr
                        key={orden?.ordenTourId}
                        className="font-medium hover:shadow-md  transform transition-all duration-300  hover:-translate-y-1"
                      >
                        <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 text-center">
                          {/*   {(nroPagina - 1) * 10 + index + 1} */}
                          {orden?.ordenTourId}
                        </td>

                        <td className="flex justify-center  uppercase text-gray-600 py-6 px-4 min-h-20 text-center">
                          <img
                            src={
                              orden?.Pasajes[0]?.Tour?.imagenPrincipalTour?.url
                            }
                            alt=""
                            className="max-w-20 max-h-24"
                          />
                        </td>

                        <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 text-center">
                          {orden?.Pasajes[0]?.tituloTour}
                        </td>

                        <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 text-center">
                          {orden?.Pasajes.length}
                        </td>

                        <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 text-center">
                          {orden?.estadoOrdenTour}
                        </td>

                        <td className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 text-center">
                          <button
                            onClick={() => {
                              updateOrdenTourEstado({
                                ordenTourId: orden?.ordenTourId,
                                estadoOrdenTour:
                                  orden?.estadoOrdenTour === 'PAGADO'
                                    ? 'PENDIENTE'
                                    : 'PAGADO'
                              })
                              toast.success('Se modifico el estado')
                            }}
                          >
                            <BtnEstado
                              estado={
                                orden?.estadoOrdenTour === 'PAGADO'
                                  ? true
                                  : false
                              }
                            />
                          </button>
                        </td>
                        <td className="  uppercase text-gray-600 py-6 px-4 min-h-20 text-center">
                          <button
                            onClick={() => {
                              history.push(
                                `/reservas/${orden?.ordenTourId}`,
                                orden
                              )
                            }}
                          >
                            <IconEyes width="24" height="24" />
                          </button>
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

export default Checkout
