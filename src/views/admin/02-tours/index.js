import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Input from '../../../components/Input/Input'
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
      id: 'percy',
      titulo: '27',
      estado: 'AHH NESTOR MARTOS MZ D LT 35',
      destacado: true,
      detalle: <button>Detalle</button>
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
      <Input />
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Tours
