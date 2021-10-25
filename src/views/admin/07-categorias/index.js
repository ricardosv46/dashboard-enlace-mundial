import React from 'react'
import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
// import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Categorias = () => {
  const history = useHistory()
  const handleRedirectEditCategory = () => { history.push('/categorias/editar-categoria') }
  const dataHead = [
    ['Imagen', 20],
    ['Nombre', 52],
    ['Estado', 20],
    ['Destacar', 10],
    ['Acciones', 24]
  ]

  const dataBody = [
    {
      imagen: '',
      nombre: 'Cata de Vinos y Licores',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    },
    {
      imagen: '',
      nombre: 'Naturaleza y Paisajes',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Rutas y Recorridos',
      estado: <BtnEstado estado={false} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Turismo Ecológico',
      estado: <BtnEstado estado={true} />,
      destacar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Turismo Gastronómico',
      estado: <BtnEstado estado={false} />,
      descatar: <BtnDestacado estado={false} />,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Turismo de sol y Playa',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones handleEdit={handleRedirectEditCategory} />
    }
  ]

  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">
      <Heading>Categorias</Heading>

      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Categorias
