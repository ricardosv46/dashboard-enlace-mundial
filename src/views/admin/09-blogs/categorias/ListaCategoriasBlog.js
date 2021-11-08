import { useHistory } from 'react-router'
import Button from '../../../../components/Buttons/Button'
import Heading from '../../../../components/Heading'
import Spinner from '../../../../components/Spinner/Spinner'
import TableGeneral from '../../../../components/Tables/TableGeneral'
import {
  useDeleteCategoriaBlogMutation,
  useGetAllCategoriaBlogQuery
} from '../../../../generated/graphql'
import { useGestionarCategoriasBlog } from '../../../../services/GestionarCategoriasBlog'

const dataHead = [
  ['Imagen', 20, 'left'],
  ['Nombre', 52, 'left'],
  ['Estado', 20, 'center'],
  ['Destacar', 10, 'center'],
  ['Acciones', 24, 'center']
]
const ListarCategoriasBlog = () => {
  const history = useHistory()
  const [deleteCtegory] = useDeleteCategoriaBlogMutation({ onError: (error) => { console.log(error.graphQLErrors[0]) } })
  const handleEdit = () => {
    history.push('/blogs/categorias/editar-categoria')
  }
  const handleRedirectNewCategory = () => {
    history.push('/blogs/categorias/crear-categoria')
  }

  const { loading } = useGetAllCategoriaBlogQuery({
    variables: { estadoCategoriaBlog: '' }
  })

  // Funcion para Eliminar una categoria
  const handleDelete = async (id) => {
    try {
      await deleteCtegory({
        variables: {
          input: {
            categoriaBlogId: id
          }

        }
      })
    } catch (error) { console.log(error) }
  }
  const { getAllCategoriasBlog } = useGestionarCategoriasBlog()
  const [dataBody] = getAllCategoriasBlog(handleEdit, handleDelete)

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">
      <div className="flex justify-between mb-5">
        <Heading>Categorias</Heading>

        <Button variant="primary" size="md" onClick={handleRedirectNewCategory}>
          + Agregar Categoria
        </Button>
      </div>
      {loading
        ? <Spinner />
        : <TableGeneral dataBody={dataBody} dataHead={dataHead} />
      }
    </div>
  )
}

export default ListarCategoriasBlog
