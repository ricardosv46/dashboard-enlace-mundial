import React from 'react'
import destacoFalse from '../../assets/imgs/icon_corazon_false.svg'
import destacoTrue from '../../assets/imgs/icon_corazon_true.svg'
const BtnDestacado = ({ estado = false }) => {
  return (
    <>
      <img src={estado ? destacoTrue : destacoFalse} className="w-6" />
    </>
  )
}

export default BtnDestacado
