import React from 'react'
import { IconDelete, IconEdit } from '../../assets/icons/icons'

const IconAcciones = ({ handleEdit }) => {
  return (
    <div className="flex gap-2">
      <span><IconEdit handleEdit={handleEdit} /></span>
      <span><IconDelete /></span>
    </div>
  )
}

export default IconAcciones
