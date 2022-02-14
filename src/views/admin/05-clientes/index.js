import DataTable from 'react-data-table-component'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { IconDelete } from '../../../assets/icons/icons'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import { useUserServices } from '../../../services/useUserServices'
import { customStyles, paginacionOpciones } from './assetsDataTable'

const Clientes = () => {
  const history = useHistory()
  const { db: dbUsers, loadingGetData, deleteUser } = useUserServices()

  const columnas = [
    {
      name: 'ID',
      selector: (row) => row.userId,
      sortable: true,
      grow: 2,
      left: true
    },
    {
      name: 'Nombre',
      selector: (row) => row.nombre,
      sortable: true,
      grow: 2,
      left: true
    },
    {
      name: 'Apellido',
      selector: (row) => row.apellidos,
      sortable: true,
      grow: 2,
      left: true
    },
    {
      name: 'E-mail',
      selector: (row) => row.email,
      sortable: true,
      grow: 2,
      left: true
    },
    {
      name: 'Acciones',
      selector: (row) => (
        <button
          className="ml-7 cursor-pointer "
          onClick={() => {
            swal({
              title: `Desea eliminar el usuario ${row?.nombre}?`,
              text: 'Se borraran todos los datos que esten asociados a este usuario',
              icon: 'warning',
              buttons: true,
              dangerMode: true
            }).then(async (rpta) => {
              if (rpta) {
                deleteUser({
                  id: row?.userId
                })
                toast.success('Usuario Eliminado!')
              }
            })
          }}
        >
          <IconDelete />
        </button>
      )
    }
  ]

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 animate__fadeIn animate__animated">
      <div className="flex justify-between mb-5">
        <Heading>Clientes</Heading>
        <Button
          variant="primary"
          size="md"
          onClick={() => history.push('/clientes/crear-cliente')}
        >
          + Agregar Cliente
        </Button>
      </div>
      {/* eslint-disable  */}
      {loadingGetData ? (
        <Spinner />
      ) : (
        <DataTable
          data={dbUsers}
          columns={columnas}
          pagination
          paginationComponentOptions={paginacionOpciones}
          fixedHeader
          fixedHeaderScrollHeight="85vh"
          customStyles={customStyles}
        />
      )}
    </div>
  )
}

export default Clientes
