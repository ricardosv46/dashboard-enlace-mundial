import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import InputToggle from '../../../components/Forms/InputToggle/InputToggle'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import IconAcciones from '../../../components/btnAcciones/IconAcciones'

const Cruceros = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1],
    ['Titulo', 2],
    ['Estado', 3],
    ['Destacado', 4],
    ['Acciones', 23]
  ]

  const dataBody = [
    {
      id: '001',
      titulo: 'Crucero 1',
      estado: <InputToggle status="true" />,
      destacado: 'si',
      detalle: (
        <IconAcciones onEdit={() => history.push('/cruceros/editar-crucero')} />
      )
    },
    {
      id: '002',
      titulo: 'Crucero 2',
      estado: <InputToggle status="false" />,
      destacado: 'si',
      detalle: (
        <IconAcciones onEdit={() => history.push('/cruceros/editar-crucero')} />
      )
    },
    {
      id: '003',
      titulo: 'Crucero 3',
      estado: <InputToggle status="false" />,
      destacado: 'si',
      detalle: (
        <IconAcciones onEdit={() => history.push('/cruceros/editar-crucero')} />
      )
    },
    {
      id: '004',
      titulo: 'Crucero 4',
      estado: <InputToggle status="true" />,
      destacado: 'si',
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
