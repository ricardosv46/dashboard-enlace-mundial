import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'
import vinos from '../../../assets/imgs/vinos.jpg'
import naturalezaPaisajes from '../../../assets/imgs/machupicchu.jpg'
import rutas from '../../../assets/imgs/rutas.jpg'
import turismoEcologico from '../../../assets/imgs/turismoEcologico.jpg'
import turismoGatronomico from '../../../assets/imgs/turismoGatronomico.jpeg'
import solPlaya from '../../../assets/imgs/solYplaya.jpg'

const Categorias = () => {
  const history = useHistory()
  const handleRedirectEditCategory = () => {
    history.push('/categorias/editar-categoria')
  }
  const handleRedirectNewCategory = () => {
    history.push('/categorias/crear-categoria')
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
      imagen: <img src={vinos} className="w-26 h-22" />,
      nombre: 'Cata de Vinos y Licores',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    },
    {
      imagen: <img src={naturalezaPaisajes} className="w-26 h-22" />,
      nombre: 'Naturaleza y Paisajes',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    },
    {
      imagen: <img src={rutas} className="w-26 h-22" />,
      nombre: 'Rutas y Recorridos',
      estado: <BtnEstado estado={false} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    },
    {
      imagen: <img src={turismoEcologico} className="w-26 h-22" />,
      nombre: 'Turismo Ecológico',
      estado: <BtnEstado estado={true} />,
      destacar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    },
    {
      imagen: <img src={turismoGatronomico} className="w-26 h-22" />,
      nombre: 'Turismo Gastronómico',
      estado: <BtnEstado estado={false} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    },
    {
      imagen: <img src={solPlaya} className="w-26 h-22" />,
      nombre: 'Turismo de sol y Playa',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    }
  ]

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">
      <Heading>Categorias</Heading>
      <div className="mb-6">
        <Button variant="primary" size="md" onClick={handleRedirectNewCategory}>
          + Agregar Categoria
        </Button>
      </div>

      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Categorias
