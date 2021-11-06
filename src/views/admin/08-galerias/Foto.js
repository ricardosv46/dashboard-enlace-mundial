import React, { useEffect, useState } from 'react'

import './index.css'

const Foto = ({ url, alt, id, galeria, dispatch }) => {
  const [select, setSelect] = useState(false)

  // console.log(setSelect)
  const handleClick = () => {
    const newImage = {
      id,
      url,
      alt,
      marcado: !select
    }
    setSelect(select => !select)
    const action = {
      type: 'addImage',
      payload: newImage
    }

    dispatch(action)
  }

  useEffect(() => {
    setSelect(false)
  }, [])
  return (
    <div
      className={` ${select && 'border-primary border'
        } cursor-pointer  rounded flex  justify-center overflow-hidden p-2`}
      onClick={handleClick}
    >
      <img className="w-full" src={url} alt={alt} />
    </div>
  )
}

export default Foto
