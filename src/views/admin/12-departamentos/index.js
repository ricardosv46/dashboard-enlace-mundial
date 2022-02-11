import Heading from '../../../components/Heading'
import Spinner from '../../../components/Spinner/Spinner'
import toast, { Toaster } from 'react-hot-toast'
import { useDepartamentosServices } from '../../../services/useDepartamentosServices'
import DataTable from 'react-data-table-component'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import { IconEdit } from '../../../assets/icons/icons'
import { customStyles, paginacionOpciones } from './assetsDataTable'
import { useModal } from '../../../hooks/useModal'
import ModalActualizarDepartamento from './ModalActualizarDepartamento'
import { useState } from 'react'

export const Img = ({ row }) => {
  return <img className="w-26 max-h-16 object-cover" src={row.imagenPrincipal?.url} />
}
export const Destacado = ({ row }) => {
  const { updateDepartamentos } = useDepartamentosServices()
  return (
    <div
      className="ml-8 cursor-pointer"
      onClick={() => {
        updateDepartamentos({
          DeparCodi: row?.DeparCodi,
          DestacadoDepartamento: row?.DestacadoDepartamento === 1 ? 0 : 1,
          imagenPrincipal: row.imagenPrincipal?.id
            ? row.imagenPrincipal.id
            : null,
          imagenSecundaria: row.imagenSecundaria?.id
            ? row.imagenSecundaria.id
            : null
        }).then((res) => {
          if (res === 'exito') {
            toast.success('Se modifico el destacado')
          } else {
            toast.error('No se pudo modificar el destacado')
          }
        })
      }}
    >
      <BtnDestacado estado={row.DestacadoDepartamento === 1 && true} />
    </div>
  )
}

const Departamentos = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const [departamento, setDepartamento] = useState({})

  const { db: dataDepartamentos, loadingGetData } = useDepartamentosServices()

  const columnas = [
    {
      name: 'Imagen',
      selector: (row) => <Img row={row} />
    },
    {
      name: 'Nombre',
      selector: (row) => row.DeparNom,
      sortable: true,
      grow: 2,
      left: true
    },
    {
      name: 'Destacar',
      selector: (row) => <Destacado row={row} />
    },
    {
      name: 'Editar',
      selector: (row) => (
        <div
          className="ml-3 cursor-pointer"
          onClick={() => {
            setDepartamento(row)
            openModal()
          }}
        >
          <IconEdit />
        </div>
      )
    }
  ]

  return (
    <>
      <ModalActualizarDepartamento
        isOpen={isOpenModal}
        closeModal={closeModal}
        departamento={departamento}
      />
      <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen animate__fadeIn animate__animated">
        <div className="flex justify-between mb-5">
          <Toaster position="top-right" reverseOrder={true} />
          <Heading>Departamentos</Heading>
        </div>
        {/* eslint-disable  */}
        {loadingGetData ? (
          <Spinner />
        ) : (
          <div className="w-full mb-8 overflow-hidden rounded-md md:shadow-xl max-h-screen overflow-y-auto  ">
            <div className="w-full overflow-x-auto min-h-screen">
              <DataTable
                columns={columnas}
                data={dataDepartamentos}
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight="85vh"
                customStyles={customStyles}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Departamentos
