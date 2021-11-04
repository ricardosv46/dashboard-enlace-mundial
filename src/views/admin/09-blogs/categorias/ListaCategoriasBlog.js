import { useHistory } from 'react-router'
import BtnAcciones from '../../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../../components/BtnEstado/BtnEstado'
import Button from '../../../../components/Buttons/Button'
import Heading from '../../../../components/Heading'
import TableGeneral from '../../../../components/Tables/TableGeneral'

const ListarCategoriasBlog = () => {
  const history = useHistory()
  const handleRedirectEditCategory = () => {
    history.push('/blogs/categorias/editar-categoria')
  }
  const handleRedirectNewCategory = () => {
    history.push('/blogs/categorias/crear-categoria')
  }

  const dataHead = [
    ['Imagen', 20, 'left'],
    ['Nombre', 52, 'left'],
    ['Estado', 20, 'center'],
    ['Destacar', 10, 'center'],
    ['Acciones', 24, 'center']
  ]

  const dataBody = [
    {
      imagen: <img src="https://portal.andina.pe/EDPmedia/fotografia/2021/09/25/55335_turismoperu4.jpg" className="w-26 h-22" />,
      nombre: 'Conoce el Perù',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    },
    {
      imagen: <img src="https://webfamiliar.com/wp-content/uploads/2020/03/vacaciones-en-familia.jpg" className="w-26 h-22" />,
      nombre: 'Viaje en Familia',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    }
  ]

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">
      <div className="flex justify-between mb-5">
        <Heading>Categorias</Heading>

        <Button variant="primary" size="md" onClick={handleRedirectNewCategory}>
          + Agregar Categoria
        </Button>
      </div>

      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default ListarCategoriasBlog
