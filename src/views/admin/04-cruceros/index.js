import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Input from '../../../components/Input/Input'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Cruceros = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1],
    ['Titulo', 2],
    ['Estado', 3],
    ['Destacado', 4],
    []
  ]

  const dataBody = [
    {
      id: '001',
      titulo: 'Crucero 1',
      estado: 'activo',
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/cruceros/editar-crucero')}
          variant="primary"
          size="sm"
        >
          Editar
        </Button>
      )
    },
    {
      id: '002',
      titulo: 'Crucero 2',
      estado: 'activo',
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/cruceros/editar-crucero')}
          variant="primary"
          size="sm"
        >
          Editar
        </Button>
      )
    },
    {
      id: '003',
      titulo: 'Crucero 3',
      estado: 'activo',
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/cruceros/editar-crucero')}
          variant="primary"
          size="sm"
        >
          Editar
        </Button>
      )
    },
    {
      id: '004',
      titulo: 'Crucero 4',
      estado: 'activo',
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/cruceros/editar-crucero')}
          variant="primary"
          size="sm"
        >
          Editar
        </Button>
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
      <Input />
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Cruceros
