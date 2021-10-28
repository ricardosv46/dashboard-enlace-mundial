import React, { useState } from 'react'
import { IconHeartEmpty, IconHeartSolid } from '../../assets/icons/icons'
// import destacoFalse from '../../assets/imgs/icon_corazon_false.svg'
// import destacoTrue from '../../assets/imgs/icon_corazon_true.svg'
const BtnDestacado = ({ estado = false, disabled = () => {} }) => {
  const [state, setstate] = useState(estado)

  const toggle = () => setstate((prev) => !prev)

  return (
    // <>
    //   <img src={estado ? destacoTrue : destacoFalse} className="w-6" />
    // </>
    <button onClick={toggle} className="mx-auto block ">
      {state ? <IconHeartSolid /> : <IconHeartEmpty />}
    </button>
  )
}

export default BtnDestacado
