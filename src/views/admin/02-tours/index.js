import React from 'react'
import { useHistory } from 'react-router'
import BtnAccionesCalendary from '../../../components/btnAcciones/BtnAccionesCalendary'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Tours = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1, 'left'],
    ['Foto', 30, 'left'],
    ['Titulo', 10, 'left'],
    ['Categoria', 20, 'left'],
    ['Estado', 10, 'center'],
    ['Destacado', 10, 'center'],
    ['Acciones', 23, 'left']
  ]

  const dataBody = [
    {
      id: '001',
      foto: (
        <img
          className="w-26 h-22"
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/93/05/49.jpg"
        />
      ),
      titulo: 'Ica y Paracas',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: <BtnAccionesCalendary />
    },
    {
      id: '002',
      foto: (
        <img
          className="w-26 h-22"
          src="https://turismoi.pe/uploads/photo/version2/photo_file/54018/optimized_2187-1.jpg"
        />
      ),
      titulo: 'Marcapomacocha',
      categoria: 'Turismos Ecológico',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={false} />,
      detalle: <BtnAccionesCalendary />
    },
    {
      id: '003',
      foto: (
        <img
          className="w-26 h-22"
          src="https://cde.peru.com//ima/0/1/9/4/6/1946830/924x530/laguna-azulcocha.jpg"
        />
      ),
      titulo: 'Cordillera La Viuda',
      categoria: 'Naturaleza y paisajes',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: <BtnAccionesCalendary />
    },
    {
      id: '004',
      foto: (
        <img
          className="w-26 h-22"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Valdivia-Antioquia.jpg/1200px-Valdivia-Antioquia.jpg"
        />
      ),
      titulo: 'Antioquía',
      categoria: 'Rutas y Recorridos',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: <BtnAccionesCalendary />
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading size="lg">Tours</Heading>
        <Button size="sm" onClick={() => history.push('/tours/crear-tour')}>
          Nuevo Tour
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default Tours
