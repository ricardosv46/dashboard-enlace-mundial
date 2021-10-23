import React from 'react'
import Heading from '../../../components/Heading'
import Input from '../../../components/Input/Input'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Tours = () => {
  const dataHead = [['Nombre', 0], ['Edad', 0], ['Domicilio', 52], ['Fecha Ingreso', 0], ['Estado', 0]]

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
    },
    {
      name: 'percy',
      edad: '27',
      domicilio: 'AHH NESTOR MARTOS MZ D LT 35',
      fechaIngreso: '10/01/2020',
      estado: <button className="px-3 py-2 rounded-sm bg-primary text-white">Pedro</button>
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
      <Heading>Tours</Heading>
      <Input />
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Tours
