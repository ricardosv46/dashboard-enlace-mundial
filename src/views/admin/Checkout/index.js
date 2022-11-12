import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { IconEyes } from '../../../assets/icons/icons'
// import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import { useOrdenServices } from '../../../services/useOrdenServices'

const Checkout = () => {
  const history = useHistory()

  const [nroPagina, setNroPagina] = useState(1)
  const [arregloSelect, setArregloSelect] = useState([])

  const { dataOrden, loadingGetData, nroTotalItems } =
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
    <div className="p-5 py-10 bg-white shadow md:rounded md:p-10 animate__fadeIn animate__animated ">
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
          <div className="flex flex-col items-center mb-5 gap-y-10 gap-x-14 sm:flex-row">
            <p className="text-xl text-gray-800">
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
                className="w-20 p-1 text-center text-gray-600 "
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

          <div className="w-full max-h-screen mb-8 overflow-hidden overflow-y-auto rounded-md md:shadow-xl ">
            <div className="w-full min-h-screen overflow-x-auto">
              <table className="w-full text-left border-2 border-gray-100 ">
                <thead className="text-gray-700">
                  <tr className="text-lg font-semibold tracking-wide text-center bg-gray-100">
                    <th className="px-4 py-6 text-center text-gray-600 min-w-10">
                      #
                    </th>
                    <th className="px-4 py-6 text-center text-gray-600 min-w-10">
                      Imágen
                    </th>
                    <th className="px-4 py-6 text-center text-gray-600 min-w-10">
                      Título
                    </th>
                    <th className="px-4 py-6 text-center text-gray-600 min-w-10">
                      Pasajes
                    </th>
                    <th className="px-4 py-6 text-center text-gray-600 min-w-10">
                      Estado
                    </th>
                    {/* <th className="px-4 py-6 text-center text-gray-600 min-w-10">
                      Acciones
                    </th> */}
                    <th className="px-4 py-6 text-center text-gray-600 min-w-10">
                      Detalle
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base text-gray-700 bg-white border-gray-100 ">
                  {dataOrden.length > 0 &&
                    dataOrden.map((orden, index) => (
                      <tr
                        key={orden?.ordenTourId}
                        className="font-medium transition-all duration-300 transform hover:shadow-md hover:-translate-y-1"
                      >
                        <td className="px-4 py-6 text-center text-gray-600 uppercase text-start min-h-20">
                          {/*   {(nroPagina - 1) * 10 + index + 1} */}
                          {orden?.ordenTourId}
                        </td>

                        <td className="flex justify-center px-4 py-6 text-center text-gray-600 uppercase min-h-20">
                          <img
                            src={
                              orden?.Pasajes[0]?.Tour?.imagenPrincipalTour?.url
                            }
                            alt=""
                            className="max-w-20 max-h-24"
                          />
                        </td>

                        <td className="px-4 py-6 text-center text-gray-600 uppercase text-start min-h-20">
                          {orden?.Pasajes[0]?.tituloTour}
                        </td>

                        <td className="px-4 py-6 text-center text-gray-600 uppercase text-start min-h-20">
                          {orden?.Pasajes.length}
                        </td>

                        <td className="px-4 py-6 text-center text-gray-600 uppercase text-start min-h-20">
                          {orden?.estadoOrdenTour}
                        </td>

                        {/* <td className="px-4 py-6 text-center text-gray-600 uppercase text-start min-h-20">
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
                        </td> */}
                        <td className="px-4 py-6 text-center text-gray-600 uppercase min-h-20">
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
