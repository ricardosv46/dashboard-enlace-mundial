import React from 'react'
import { useHistory } from 'react-router'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const dataHead = [

  ['Foto', 'min-w-30', 'left'],
  ['Título', 'min-w-50', 'left'],
  ['Categoria', 'min-w-40', 'left'],
  ['F. Publicación', 'min-w-40', 'left'],
  ['Estado', '', 'center'],
  ['Destacar', '', 'center'],
  ['Acciones', '', 'center']
]

const Blogs = () => {
  const history = useHistory()
  const dataBody = [
    {
      foto: (
        <img
          src="https://www.perurail.com/wp-content/uploads/2018/12/Foto1_Islas-de-los-Uros.jpg"
          alt="foto"
          className="w-26  h-22"
        />
      ),
      titulo: 'Islas de uros',
      categoria: 'VACACIONES',
      fecha: '27-10-2021',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={true} />,
      acciones: (
        <BtnAcciones
          handleEdit={() => history.push('/blogs/editar-publiacion')}
        />
      )
    },
    {
      foto: (
        <img
          src="https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2HB6NAG4T5CSTMCVBAWW4J7XJY.jpg"
          alt="foto"
          className="w-26  h-22"
        />
      ),
      titulo: 'Conoce Mancora',
      categoria: 'VACACIONES',
      fecha: '20-11-2021',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones handleEdit={() => history.push('/blogs/editar-publiacion')} />
    },
    {
      foto: (
        <img
          src="https://portal.andina.pe/EDPmedia/fotografia/2021/09/25/55335_turismoperu4.jpg"
          alt="foto"
          className="w-26  h-22"
        />
      ),
      titulo:
        '¿ y tu que planes turismo ofertas de viaje y tours por el perú ?',
      categoria: 'VACACIONES',
      fecha: '20-11-2021',
      estado: <BtnEstado estado={true} />,
      descatar: <BtnDestacado estado={true} />,
      acciones: <BtnAcciones handleEdit={() => history.push('/blogs/editar-publiacion')} />
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10 mb-20 min-h-screen ">

      <div className="flex justify-between mb-5">
        <Heading>Publiacaciones Blog</Heading>
        <Button
          variant="primary"
          size="md"
          onClick={() => history.push('/blogs/crear-publiacion')}
        >
          + Agregar Publiación
        </Button>
      </div>

      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Blogs
