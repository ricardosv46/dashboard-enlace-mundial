import React from 'react'
import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
// import BtnAcciones from '../../../components/btnAcciones/BtnAcciones'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const Categorias = () => {
  const dataHead = [
    ['Id', 0],
    ['Título', 52],
    ['Descripción', 80],
    ['Estado', 0],
    ['Img Principal', 52],
    ['Img Secundaria', 52],
    ['Acciones', 24]
  ]

  const dataBody = [
    {
      id: '#',
      titulo: 'Cata de Vinos y Licores',
      descripcion:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum ',
      estado: 'Activo',
      imgPrincipal: 'Cusco.png',
      imgSecundaria: 'Cusco.png',
      acciones: <BtnAcciones />
    },
    {
      id: '#',
      titulo: 'Naturaleza y Paisajes',
      descripcion:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum',
      estado: 'Activo',
      imgPrincipal: 'Cusco.png',
      imgSecundaria: 'Cusco.png',
      acciones: <BtnAcciones />
    },
    {
      id: '#',
      titulo: 'Rutas y Recorridos',
      descripcion:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum',
      estado: 'Activo',
      imgPrincipal: 'Cusco.png',
      imgSecundaria: 'Cusco.png',
      acciones: <BtnAcciones />
    },
    {
      id: '#',
      titulo: 'Turismo Ecológico',
      descripcion:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum',
      estado: 'Activo',
      imgPrincipal: 'Cusco.png',
      imgSecundaria: 'Cusco.png',
      acciones: <BtnAcciones />
    },
    {
      id: '#',
      titulo: 'Turismo Gastronómico',
      descripcion:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum',
      estado: 'Activo',
      imgPrincipal: 'Cusco.png',
      imgSecundaria: 'Cusco.png',
      acciones: <BtnAcciones />
    },
    {
      id: '#',
      titulo: 'Turismo de sol y Playa',
      descripcion:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum',
      estado: 'Activo',
      imgPrincipal: 'Cusco.png',
      imgSecundaria: 'Cusco.png',
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
