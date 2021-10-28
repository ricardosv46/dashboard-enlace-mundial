import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import Button from '../../../components/Buttons/Button'
import InputToggle from '../../../components/Forms/InputToggle/InputToggle'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Clientes = () => {
  const dataHead = [
    ['Id', 18],
    ['Nombres', 18],
    ['Apellido', 48],
    ['Email', 48],
    ['Estado', 10],
    ['Acciones', 20]
  ]
  const history = useHistory()
  const dataBody = [
    {
      id: 1,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 2,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={false} />,
      acciones: <BtnAcciones />
    },
    {
      id: 3,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 4,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 5,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 6,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 7,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 8,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 9,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 10,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={true} />,
      acciones: <BtnAcciones />
    },
    {
      id: 11,
      name: 'percy',
      apellido: 'toranzo',
      email: 'admin@admin.com',
      estado: <InputToggle status={false} />,
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
