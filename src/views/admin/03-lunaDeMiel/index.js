import React from 'react'
import { useHistory } from 'react-router'
import IconAcciones from '../../../components/btnAcciones/IconAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import Button from '../../../components/Buttons/Button'
import InputToggle from '../../../components/Forms/InputToggle/InputToggle'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const LunaDeMiel = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1],
    ['Titulo', 2],
    ['Estado', 48],
    ['Destacado', 20],
    ['Acciones', 23]
  ]

  const dataBody = [
    {
      id: '001',
      titulo: 'Paquete Turístico 1',
      estado: <InputToggle status="true" />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} />
      )
    },
    {
      id: '001',
      titulo: 'Paquete Turístico 2',
      estado: <InputToggle status="true" />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} />
      )
    },
    {
      id: '001',
      titulo: 'Paquete Turístico 3',
      estado: <InputToggle status="true" />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} />
      )
    },
    {
      id: '001',
      titulo: 'Paquete Turístico 4',
      estado: <InputToggle status="true" />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} />
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
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default LunaDeMiel
