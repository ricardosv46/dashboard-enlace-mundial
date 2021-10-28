import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Clientes = () => {
  const dataHead = [
    ['Id', 18, 'left'],
    ['Nombres', 18, 'left'],
    ['Apellidos', 48, 'left'],
    ['Email', 48, 'left'],
    ['Estado', 10, 'center'],
    ['Acciones', 20, 'center']
  ]
  const history = useHistory()
  const dataBody = [
    {
      id: 1,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 2,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 3,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 4,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 5,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 6,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 7,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 8,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 9,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 10,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 11,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 12,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 13,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 14,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 15,
      name: 'percy harold',
      apellido: 'córdova flores',
      email: 'cordovaflores1994@hotmail.com',
      estado: <BtnEstado estado={false} />,
      acciones: <BtnAcciones />
    }

  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Clientes</Heading>
        <Button
          size="sm"
          onClick={() => history.push('/clientes/crear-cliente')}
        >
          Nuevo Cliente
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Clientes
