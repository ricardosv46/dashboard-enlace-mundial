import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import IconAcciones from '../../../components/btnAcciones/IconAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'

const Cruceros = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1, 'left'],
    ['Titulo', 2, 'left'],
    ['Estado', 3, 'center'],
    ['Destacado', 4, 'center'],
    ['Acciones', 23, 'left']
  ]

  const dataBody = [
    {
      id: '001',
      titulo: 'Crucero 1',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/cruceros/editar-crucero')} />
      )
    },
    {
      id: '002',
      titulo: 'Crucero 2',
      estado: < BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/cruceros/editar-crucero')} />
      )
    },
    {
      id: '003',
      titulo: 'Crucero 3',
      estado: < BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/cruceros/editar-crucero')} />
      )
    },
    {
      id: '004',
      titulo: 'Crucero 4',
      estado: < BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/cruceros/editar-crucero')} />
      )
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Cruceros</Heading>
        <Button
          onClick={() => history.push('/cruceros/crear-crucero')}
          size="sm"
        >
          Nuevo
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Cruceros
