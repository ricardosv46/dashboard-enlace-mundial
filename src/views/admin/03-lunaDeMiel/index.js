import React from 'react'
import { useHistory } from 'react-router'
import BtnAccionesCalendary from '../../../components/btnAcciones/BtnAccionesCalendary'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const LunaDeMiel = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 'min-w-4', 'left'],
    ['Foto', 'min-w-30', 'left'],
    ['Titulo', 'min-w-50', 'left'],
    ['Categoría', 'min-w-50', 'left'],
    ['Estado', '', 'center'],
    ['Destacado', '', 'center'],
    ['Acciones', '', 'left']
  ]

  const dataBody = [
    {
      id: '001',
      foto: (
        <img
          className="w-26 h-22"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvql9ZV79RAaLOnuWpywB4xeIwCRC83usl7w&usqp=CAU"
        />
      ),
      titulo: 'Paquete Turístico 1',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} disabled={false} />,
      detalle: <BtnAccionesCalendary handleEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} handleCalendary={() => history.push('/calendario')} />
    },
    {
      id: '002',
      foto: (
        <img
          className="w-26 h-22"
          src="https://www.nupciasmagazine.com/wp-content/uploads/2020/04/nupcias-maldivas.jpg"
        />
      ),
      titulo: 'Paquete Turístico 2',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} disabled={false} />,
      detalle: <BtnAccionesCalendary handleEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} handleCalendary={() => history.push('/calendario')} />
    },
    {
      id: '003',
      foto: (
        <img
          className="w-26 h-22"
          src="https://www.nupciasmagazine.com/wp-content/uploads/2020/07/Azulik.jpg"
        />
      ),
      titulo: 'Paquete Turístico 3',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} disabled={false} />,
      detalle: <BtnAccionesCalendary handleEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} handleCalendary={() => history.push('/calendario')}/>
    },
    {
      id: '004',
      foto: (
        <img
          className="w-26 h-22"
          src="https://www.evento.love/blog/wp-content/uploads/2018/06/Origen-de-la-luna-de-miel-pareja-marido-mujer-atardecer-1200x720.png"
        />
      ),
      titulo: 'Paquete Turístico 4',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} disabled={false} />,
      detalle: <BtnAccionesCalendary handleEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} handleCalendary={() => history.push('/calendario')}/>
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Lunas de Miel</Heading>
        <Button
          onClick={() => history.push('/luna-de-miel/crear-luna-de-miel')}
          size="md"
        >
          Nueva Luna de Miel
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default LunaDeMiel
