import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesCompra = () => {
  const params = useParams()
  console.log(params)
  /*   const { id: slugTour } = params */
  return (
    <div>DetallesCompra</div>
  )
}

export default DetallesCompra
