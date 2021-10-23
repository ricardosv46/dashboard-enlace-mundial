import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Input from '../../../components/Input/Input'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Cruceros = () => {
  const history = useHistory()

  const dataHead = [
    ['Nombre', 18],
    ['Edad', 48],
    ['Domicilio', 48],
    ['Fecha Ingreso', 52],
    ['Estado', 48]
  ]

  const dataBody = [
    {
      name: 'percy',
      edad: '27',
      domicilio: 'AHH NESTOR MARTOS MZ D LT 35',
      fechaIngreso: '10/01/2020',
      estado: <button>Pedro</button>
    },
    {
      name: 'percy',
      edad: '27',
      domicilio: 'AHH NESTOR MARTOS MZ D LT 35',
      fechaIngreso: '10/01/2020',
      estado: <button>Pedro</button>
    },
    {
      name: 'percy',
      edad: '27',
      domicilio: 'AHH NESTOR MARTOS MZ D LT 35',
      fechaIngreso: '10/01/2020',
      estado: <button>Pedro</button>
    },
    {
      name: 'percy',
      edad: '27',
      domicilio: 'AHH NESTOR MARTOS MZ D LT 35',
      fechaIngreso: '10/01/2020',
      estado: <button>Pedro</button>
    },
    {
      name: 'percy',
      edad: '27',
      domicilio: 'AHH NESTOR MARTOS MZ D LT 35',
      fechaIngreso: '10/01/2020',
      estado: <button>Pedro</button>
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Cruceros</Heading>
        <Button onClick={() => history.push('/cruceros/crear-crucero')} size="sm">
          Nuevo
        </Button>
      </div>
      <Input />
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Cruceros
