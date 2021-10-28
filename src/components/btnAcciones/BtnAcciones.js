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
    <div className="mx-auto w-8 flex flex-col  items-center  text-center  ">
      <p
        className={`${
          show ? 'text-black' : 'text-gray-500'
        } text-3xl w-5 text-center  flex flex-col cursor-pointer justify-center z-80 relative`}
        onClick={handleClick}
      >
        <span className="-mt-4 ">.</span>
        <span className="-mt-7 ">.</span>
        <span className="-mt-7 ">.</span>
      </p>
      {show && (
        <div className="absolute flex justify-end bg-transparent border  z-70 top-0 left-0 min-w-full h-full">
          <div className=" w-36 h-20 mr-16 sm:mr-22 mt-0  shadow-lg rounded-lg bg-white">
            <p
              className="flex  cursor-pointer  py-2 pl-6  hover:bg-gray-200 transition-all duration-300"
              onClick={() => handleEdit()}
            >
              <img src={iconEditar} className="w-4 mr-2 " /> <span>Editar</span>
            </p>
            <p
              className="flex cursor-pointer  py-2 pl-6  hover:bg-gray-200 transition-all duration-300"
              onClick={() => handleDelete()}
            >
              <img src={iconEditar} className="w-4 mr-2 " /> <span>Borrar</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BtnAcciones
