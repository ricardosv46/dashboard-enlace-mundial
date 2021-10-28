import React from 'react'
import { useHistory } from 'react-router'
import IconAcciones from '../../../components/btnAcciones/IconAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Tours = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1, 'left'],
    ['Titulo', 10, 'left'],
    ['Estado', 10, 'center'],
    ['Destacado', 10, 'center'],
    ['Acciones', 23, 'left']
  ]

  const dataBody = [
    {
      id: '001',
      titulo: 'Ica y Paracas',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones
          onCalendar={() => history.push('/tours/editar-calendario')}
          onEdit={() => history.push('/tours/editar-tour')}
        />
      )
    },
    {
      id: '002',
      titulo: 'Marcapomacocha',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={false} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/tours/editar-tour')} />
      )
    },
    {
      id: '003',
      titulo: 'Cordillera La Viuda',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/tours/editar-tour')} />
      )
    },
    {
      id: '004',
      titulo: 'Antioquía',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/tours/editar-tour')} />
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
