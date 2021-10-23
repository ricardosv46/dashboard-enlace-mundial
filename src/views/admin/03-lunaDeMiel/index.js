import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Input from '../../../components/Input/Input'
import TableGeneral from '../../../components/Tables/TableGeneral'

const LunaDeMiel = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1],
    ['Titulo', 2],
    ['Estado', 48],
    ['Destacado', 20],
    []
  ]

  const dataBody = [
    {
      id: '001',
      titulo: 'Paquete Turístico 1',
      estado: 'activo',
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/luna-de-miel/editar-luna-de-miel')}
         variant="primary" size="sm">
          Editar
        </Button>
      )
    },
    {
      id: '001',
      titulo: 'Paquete Turístico 2',
      estado: 'activo',
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/luna-de-miel/editar-luna-de-miel')}
         variant="primary" size="sm">
          Editar
        </Button>
      )
    },
    {
      id: '001',
      titulo: 'Paquete Turístico 3',
      estado: 'activo',
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/luna-de-miel/editar-luna-de-miel')}
         variant="primary" size="sm">
          Editar
        </Button>
      )
    },
    {
      id: '001',
      titulo: 'Paquete Turístico 4',
      estado: 'activo',
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/luna-de-miel/editar-luna-de-miel')}
         variant="primary" size="sm">
          Editar
        </Button>
      )
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Lunas de Miel</Heading>
        <Button
          onClick={() => history.push('/luna-de-miel/crear-luna-de-miel')}
          size="sm"
        >
          Nueva
        </Button>
      </div>
      <Input />
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default LunaDeMiel
