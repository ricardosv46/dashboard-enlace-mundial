import React from 'react'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import Button from '../../../components/Buttons/Button'
import { useHistory } from 'react-router'
import OfertaIca from '../../../assets/imgs/ofertaIca.jpg'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'

const Ofertas = () => {
  const history = useHistory()
  const dataHead = [
    ['imagen', 'min-w-30', 'left'],
    ['Tipo', 'min-w-40', 'left'],
    ['Titulo', 'min-w-50', 'left'],
    ['Url', 'min-w-40', 'left'],
    ['Acciones', '', 'left']]
  const dataBody = [
    {
      imagen: <img src={OfertaIca} className="w-26 h-22" />,
      tipo: 'Oferta interna',
      titulo: 'Arma tu pack',
      url: 'armar-pack',
      acciones: <BtnAcciones handleEdit={() => history.push('/ofertas/editar-oferta')} handleDelete={() => alert('oferta eliminada')} />
    },
    {
      imagen: <img src={OfertaIca} className="w-26 h-22" />,
      tipo: 'Oferta externa',
      titulo: 'OFERTA DEL MES! Leggin rayado + Polo piel de durazno 💜',
      url: 'armar-pack',
      acciones: <BtnAcciones handleEdit={() => history.push('/ofertas/editar-oferta')} handleDelete={() => alert('oferta eliminada')} />
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Clientes</Heading>
        <Button size="sm" onClick={() => history.push('/ofertas/crear-oferta')}>
          Nueva Oferta
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Ofertas
