import React from 'react'
import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const dataHead = [
  ['Foto', 30],
  ['Título', 52],
  ['Categoria', 30],
  ['F. Publicación', 40],
  ['Estado', 10],
  ['Destacar', 10],
  ['Acciones', 6]
]

const dataBody = [
  {
    foto: (
      <img
        src="https://www.perurail.com/wp-content/uploads/2018/12/Foto1_Islas-de-los-Uros.jpg"
        alt="foto"
        className="w-20  h-25"
      />
    ),
    titulo: 'Islas de uros',
    categoria: 'Tours',
    fecha: '27-10-2021',
    estado: <BtnEstado estado={true} />,
    descatar: <BtnDestacado estado={true} />,
    acciones: <BtnAcciones />
  },
  {
    foto: (
      <img
        src="https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2HB6NAG4T5CSTMCVBAWW4J7XJY.jpg"
        alt="foto"
        className="w-20  h-25"
      />
    ),
    titulo: 'Conoce Mancora',
    categoria: 'Tours',
    fecha: '20-11-2021',
    estado: <BtnEstado estado={true} />,
    descatar: <BtnDestacado estado={true} />,
    acciones: <BtnAcciones />
  },
  {
    foto: (
      <img
        src="https://portal.andina.pe/EDPmedia/fotografia/2021/09/25/55335_turismoperu4.jpg"
        alt="foto"
        className="w-20  h-25"
      />
    ),
    titulo: '¿ y tu que planes turismo ofertas de viaje y tours por el perú ?',
    categoria: 'Tours',
    fecha: '20-11-2021',
    estado: <BtnEstado estado={true} />,
    descatar: <BtnDestacado estado={true} />,
    acciones: <BtnAcciones />
  }
]
const Blogs = () => {
  const history = useHistory()
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">
      <Heading>Publiacaciones Blog</Heading>
      <div className="mb-6">
        <Button variant="primary" size="md" onClick={() => history.push('/blogs/crear-publiacion')}>
          + Agregar Publiación
        </Button>
      </div>

      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Blogs
