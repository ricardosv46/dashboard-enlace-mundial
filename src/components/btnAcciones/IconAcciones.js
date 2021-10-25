import React from 'react'
import { IconDelete, IconEdit } from '../../assets/icons/icons'

const IconAcciones = ({ onEdit = () => {}, onDelete = () => {} }) => {
  return (
    <div className="flex gap-2">
      <span onClick={onEdit}>
        <IconEdit />
      </span>
      <span onClick={onDelete}>
        <IconDelete />
      </span>
    </div>
  )
}

export default IconAcciones
