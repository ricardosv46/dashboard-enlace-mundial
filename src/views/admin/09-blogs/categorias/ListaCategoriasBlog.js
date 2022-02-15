import DataTable from 'react-data-table-component'
import { useHistory } from 'react-router'
import Button from '../../../../components/Buttons/Button'
import Heading from '../../../../components/Heading'
import Spinner from '../../../../components/Spinner/Spinner'
import { useCategoriasBlogServices } from '../../../../services/useCategoriasBlogServices'
import { customStyles, paginacionOpciones } from './assetsDataTable'

const ListarCategoriasBlog = () => {
  const history = useHistory()
  const { db: dataBlogs, loading } = useCategoriasBlogServices()
  console.log(dataBlogs)
  const columnas = [
    {
      name: 'ID',
      selector: (row) => row.categoriaBlogId,
      sortable: true,
      grow: 2,
      left: true
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen animate__fadeIn animate__animated">
      <div className="flex justify-between mb-5">
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
