import React from 'react'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import Button from '../../../components/Buttons/Button'
import { useHistory } from 'react-router'
import IconAcciones from '../../../components/btnAcciones/IconAcciones'

const Ofertas = () => {
  const history = useHistory()
  const dataHead = [['imagen', 18], ['Tipo', 18], ['Titulo', 48], ['Url', 48], ['Accion', 10]]
  const dataBody = [
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'Toranzo',
      url: 'admin@admin.com',
      accion: <IconAcciones />
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    },
    {
      imagen: 1,
      tipo: 'percy',
      titulo: 'toranzo',
      url: 'admin@admin.com'
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Clientes</Heading>
        <Button size="sm" onClick={() => history.push('/clientes/crear-cliente')}>
          Nuevo Cliente
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Ofertas
