import React from 'react'

const BtnEstado = ({ estado = false }) => {
  return <div className=" w-16 mx-auto ">
    {estado
      ? <div className="W-5 h-7 rounded-xl bg-gray-200 flex items-center  justify-end pr-2 ">
        <p className="w-5 h-5 rounded-full bg-green-600 "></p>
      </div>
      : <div className="W-5 h-7 rounded-xl bg-gray-200 flex  items-center pl-2">
        <p className="w-5 h-5 rounded-full bg-red-500 "></p>
      </div>
    }
  </div>
}

export default BtnEstado
