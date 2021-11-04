import React from 'react'
import { useHistory } from 'react-router'
import BtnAccionesCalendary from '../../../components/btnAcciones/BtnAccionesCalendary'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const dataHead = [
  ['Id', 'min-w-4', 'left'],
  ['Foto', 'min-w-30 ', 'left'],
  ['Titulo', 'min-w-50', 'left'],
  ['Categoria', 'min-w-50', 'left'],
  ['Estado', '', 'center'],
  ['Destacado', '', 'center'],
  ['Acciones', '', 'left']
]

const Tours = () => {
  const history = useHistory()
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
      destacado: <BtnDestacado estado={true} disabled={false} />,
      detalle: <BtnAccionesCalendary
        handleEdit={() => history.push('/tours/editar-tour')}
        handleCalendary={() => history.push('/calendario')}
      />
    },

    {
      id: '002',
      foto: (
        <img
          className="w-26 h-22 "
          src="https://turismoi.pe/uploads/photo/version2/photo_file/54018/optimized_2187-1.jpg"
        />
      ),
      titulo: 'Marcapomacocha',
      categoria: 'Turismos Ecológico',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado disabled={false} />,
      detalle: <BtnAccionesCalendary handleEdit={() => history.push('/tours/editar-tour')} handleCalendary={() => history.push('/calendario')} />
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
      destacado: <BtnDestacado estado={true} disabled={false} />,
      detalle: <BtnAccionesCalendary handleEdit={() => history.push('/tours/editar-tour')} handleCalendary={() => history.push('/calendario')}/>
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
      destacado: <BtnDestacado estado={true} disabled={false} />,
      detalle: <BtnAccionesCalendary handleEdit={() => history.push('/tours/editar-tour')} handleCalendary={() => history.push('/calendario')} />
    }
  ]
  return (
    <div className="shadow  md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex-col gap-y-9  flex items-center  sm:flex-row sm:justify-between mb-5">
        <Heading size="xl" className="text-3xl text-gray-800">Tours</Heading>
        <Button size="md" className="border" onClick={() => history.push('/tours/crear-tour')}>
          + Agregar Tour
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />

    </div>
  )
}

export default Tours
