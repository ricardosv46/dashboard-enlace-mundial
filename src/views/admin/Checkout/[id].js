import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonBack from '../../../components/Buttons/ButtonBack'
/* import InputText from '../../../components/Forms/InputText/InputText' */
import Heading from '../../../components/Heading'
import { useIdOrdenServices } from '../../../services/useIdOrdenServices'
const DetallesCompra = () => {
  const params = useParams()
  /*   console.log(params) */
  const [items, setItems] = useState(null)
  const { dataIdOrden, loadingGetData } = useIdOrdenServices({ ordenTourId: params.id })
  console.log(items)

  useEffect(() => {
    !loadingGetData && setItems(dataIdOrden)
  }, [loadingGetData])
  return (
    <div className=" md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex justify-center pt-3 relative">
        <ButtonBack />

        <Heading>Detalles de la compra N° : {params.id}</Heading>
      </div>
      <div
        className="w-full lg:px-4 px-0 mx-auto py-10"
      >
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-3 mt-3">
          <div className="font-extrabold">Fecha de la Reserva: <span className="font-normal">{items?.fechaReserva}</span></div>
          <div className="font-extrabold">Pedido efectuado: <span className="font-normal">{items?.fechaCompra}</span></div>
        </div>

        <div className="grid  sm:grid-cols-2 gap-3 mt-3">
          <div className="font-extrabold">Nombre del tour: <span className="font-normal">{items?.Pasajes[0].tituloTour}</span></div>
          <div className="font-extrabold">Estado del tour: <span className="font-normal">{items?.estadoOrdenTour}</span></div>
        </div>

        <div className="grid  sm:grid-cols-2 gap-3 mt-3">
          <div className="font-extrabold">Nombre y apellidos: <span className="font-normal">{items?.User.nombre} {items?.User.apellidos}</span></div>
          <div className="font-extrabold">Email: <span className="font-normal">{items?.User.email}</span></div>
        </div>

        <div className="grid  sm:grid-cols-2 gap-3 mt-3">
          {items?.User.tipoDocumento && <div className="font-extrabold">{items?.User.tipoDocumento}: <span className="font-normal">{items?.User.numDocumento}</span></div>}
          <div className="font-extrabold">Telefono: <span className="font-normal">{items?.User.celular}</span></div>
        </div>

        <div className=" grid grid-cols-2 mt-3">
          <div className=""></div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between mt-2">
              <div className="font-normal">Sub Total: </div>
              <div className="font-normal">S/. {items?.Pasajes[0].precioTour}</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="font-extrabold">Descuento: </div>
              <div className="font-extrabold">- S/. {items?.descuento}</div>
            </div>

            <div className="flex justify-between mt-2 border-t  pt-2">
              <div className="font-extrabold">Total: </div>
              <div className="font-extrabold">S/. {items?.Pasajes[0].precioTour - items?.descuento}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetallesCompra
