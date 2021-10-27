import React, { useState } from 'react'
import iconEditar from '../../assets/imgs/icon_editar.svg'

const BtnAcciones = ({
  handleDelete = () => alert('Eliminar'),
  handleEdit = () => alert('Editar')
}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className="mx-auto w-8 flex flex-col  items-center relative text-center ">
      <p
        className={`${show ? 'text-black' : 'text-gray-500'
          } text-3xl w-5 text-center  flex flex-col cursor-pointer justify-center `}
        onClick={handleClick}
      >
        <span className="-mt-4 ">.</span>
        <span className="-mt-7 ">.</span>
        <span className="-mt-7 ">.</span>
      </p>
      <div
        className={`${show
          ? 'border text-sm opacity-100 pointer-events-auto transition-all duration-300 '
          : ' opacity-0 pointer-events-none  '
          }
               py-4  w-36   text-base  absolute -bottom-28 right-2 bg-white z-99
               hover:text-black text-gray-700  shadow-md`}
      >
        <p className="flex  cursor-pointer  py-2 pl-6 hover:bg-primary-300 transition-all duration-200"
          onClick={() => handleEdit()}
        >
          <img src={iconEditar} className="w-4 mr-2 " /> <span>Editar</span>
        </p>
        <p className="flex cursor-pointer  py-2 pl-6 hover:bg-primary-300 transition-all duration-200"
          onClick={() => handleDelete()}
        >
          <img src={iconEditar} className="w-4 mr-2 " /> <span>Borrar</span>
        </p>
      </div>
    </div>
  )
}

export default BtnAcciones
