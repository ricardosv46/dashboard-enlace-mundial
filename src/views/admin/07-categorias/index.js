import React from 'react'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
// import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Categorias = () => {
  const dataHead = [
    ['Imagen', 20],
    ['Nombre', 52],
    ['Estado', 0],
    ['Destacar', 20],
    ['Acciones', 24]
  ]

  const dataBody = [
    {
      imagen: '',
      nombre: 'Cata de Vinos y Licores',
      estado: 'Activo',
      descatar: true,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Naturaleza y Paisajes',
      estado: 'Activo',
      descatar: true,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Rutas y Recorridos',
      estado: 'Activo',
      descatar: true,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Turismo Ecológico',
      estado: 'Activo',
      destacar: false,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Turismo Gastronómico',
      estado: 'Activo',
      descatar: false,
      acciones: <BtnAcciones />
    },
    {
      imagen: '',
      nombre: 'Turismo de sol y Playa',
      estado: 'Activo',
      descatar: true,
      acciones: <BtnAcciones />
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
