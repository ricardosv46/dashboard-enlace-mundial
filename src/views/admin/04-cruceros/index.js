import React from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import BtnAccionesCalendary from '../../../components/btnAcciones/BtnAccionesCalendary'

const Cruceros = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 'min-w-4', 'left'],
    ['Foto', 'min-w-30', 'left'],
    ['Título', 'min-w-40', 'left'],
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFREKBd9LuwkjcQSrLP5p4Bg-f51e8upAqw&usqp=CAU"
        />
      ),
      titulo: 'Crucero 1',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <BtnAccionesCalendary
          handleEdit={() => history.push('/cruceros/editar-crucero')}
          handleCalendary={() => history.push('/calendario')}
        />
      )
    },
    {
      id: '002',
      foto: (
        <img
          className="w-26 h-22"
          src="https://facultades.usil.edu.pe/administracion-hotelera-turismo-gastronomia/wp-content/uploads/2020/10/panorama-reactivacion-cruceros.jpg"
        />
      ),
      titulo: 'Crucero 2',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <BtnAccionesCalendary
          handleEdit={() => history.push('/cruceros/editar-crucero')}
          handleCalendary={() => history.push('/calendario')}
        />
      )
    },
    {
      id: '003',
      foto: (
        <img
          className="w-26 h-22"
          src="https://www.eluniversal.com.mx/sites/default/files/2021/03/17/cruceros_vacunas.jpg"
        />
      ),
      titulo: 'Crucero 3',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <BtnAccionesCalendary
          handleEdit={() => history.push('/cruceros/editar-crucero')}
          handleCalendary={() => history.push('/calendario')}
        />
      )
    },
    {
      id: '004',
      foto: (
        <img
          className="w-26 h-22"
          src="https://www.valemany.com/blog/wp-content/uploads/queen-mary-2.jpg"
        />
      ),
      titulo: 'Crucero 4',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <BtnAccionesCalendary
          handleEdit={() => history.push('/cruceros/editar-crucero')}
          handleCalendary={() => history.push('/calendario')}
        />
      )
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Cruceros</Heading>
        <Button
          onClick={() => history.push('/cruceros/crear-crucero')}
          size="md"
        >
          Nuevo Crucero
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Cruceros
