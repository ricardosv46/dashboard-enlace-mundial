import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import InputToggle from '../../../components/Forms/InputToggle/InputToggle'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Tours = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1],
    ['Titulo', 'Tour Lima - Paracas'],
    ['Estado', 48],
    ['Destacado', 20],
    []
  ]

  const dataBody = [
    {
      id: '001',
      titulo: 'Ica y Paracas',
      estado: <InputToggle status="true" />,
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/tours/editar-tour')}
          variant="primary"
          size="sm"
        >
          Editar
        </Button>
      )
    },
    {
      id: '002',
      titulo: 'Marcapomacocha',
      estado: <InputToggle status="true" />,
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/tours/editar-tour')}
          variant="primary"
          size="sm"
        >
          Editar
        </Button>
      )
    },
    {
      id: '003',
      titulo: 'Cordillera La Viuda',
      estado: <InputToggle status="false" />,
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/tours/editar-tour')}
          variant="primary"
          size="sm"
        >
          Editar
        </Button>
      )
    },
    {
      id: '004',
      titulo: 'Antioquía',
      estado: <InputToggle status="true" />,
      destacado: 'si',
      detalle: (
        <Button
          onClick={() => history.push('/tours/editar-tour')}
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
        <Heading>Tours</Heading>
        <Button size="sm" onClick={() => history.push('/tours/crear-tour')}>
          Nuevo
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Tours
