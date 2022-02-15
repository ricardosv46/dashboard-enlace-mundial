import DataTable from 'react-data-table-component'
import toast, { Toaster } from 'react-hot-toast'
import { useHistory } from 'react-router'
import swal from 'sweetalert'
import { IconDelete, IconEdit } from '../../../../assets/icons/icons'
import BtnEstado from '../../../../components/BtnEstado/BtnEstado'
import Button from '../../../../components/Buttons/Button'
import Heading from '../../../../components/Heading'
import Spinner from '../../../../components/Spinner/Spinner'
import { useCategoriasBlogServices } from '../../../../services/useCategoriasBlogServices'
import { customStyles, paginacionOpciones } from './assetsDataTable'

export const Img = ({ row }) => {
  return (
    <img
      className="w-26 max-h-16 object-cover"
      src={row.imagenPrincipalCategoriaBlog?.url}
    />
  )
}

export const Estado = ({ row }) => {
  return (
    <div className="cursor-pointer">
      <BtnEstado estado={row.estadoCategoriaBlog === 'Activado' && true} />
    </div>
  )
}

const ListarCategoriasBlog = () => {
  const history = useHistory()
  const {
    db: dataBlogs,
    loading,
    deleteCategoriaBlog
  } = useCategoriasBlogServices()
  console.log(dataBlogs)
  const columnas = [
    {
      name: 'ID',
      selector: (row) => row.categoriaBlogId,
      sortable: true,
      grow: 2,
      left: true
    },
    {
      name: 'Titulo',
      selector: (row) => row.tituloCategoriaBlog,
      sortable: true,
      grow: 2,
      left: true
    },
    {
      name: 'Imagen',
      selector: (row) => <Img row={row} />
    },
    {
      name: 'Descripción',
      selector: (row) => row.descripcionCategoriaBlog,
      sortable: true,
      grow: 2,
      left: true
    },
    {
      name: 'Estado',
      selector: (row) => <Estado row={row} />
    },
    {
      name: 'Acciones',
      selector: (row) => (
        <>
          <button className="cursor-pointer">
            <IconEdit />
          </button>
          <button
            className="ml-3 cursor-pointer"
            onClick={() => {
              swal({
                title: `Desea eliminar la categoria ${row?.tituloCategoriaBlog}?`,
                icon: 'warning',
                buttons: true,
                dangerMode: true
              }).then(async (rpta) => {
                if (rpta) {
                  deleteCategoriaBlog({
                    id: row?.categoriaBlogId
                  })
                  toast.success('Categoría Eliminada!')
                }
              })
            }}
          >
            <IconDelete />
          </button>
        </>
      )
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen animate__fadeIn animate__animated">
      <div className="flex justify-between mb-5">
        <Toaster
          position="top-right"
          reverseOrder={true}
          containerClassName="top-18 md:top-5"
        />
        <Heading>Categorias</Heading>

        <Button
          variant="primary"
          size="md"
          onClick={() => history.push('/blogs/categorias/crear-categoria')}
        >
          + Agregar Categoria
        </Button>
      </div>
      {/* eslint-disable  */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full mb-8 overflow-hidden rounded-md md:shadow-xl max-h-screen overflow-y-auto  ">
          <div className="w-full overflow-x-auto min-h-screen">
            <DataTable
              data={dataBlogs}
              columns={columnas}
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
  )
}

export default ListarCategoriasBlog
