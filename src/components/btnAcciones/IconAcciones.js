import React from 'react'
import { IconCalendar, IconDelete, IconEdit } from '../../assets/icons/icons'

const IconAcciones = ({
  onEdit = () => {},
  onDelete = () => {},
  onCalendar = () => {}
}) => {
  return (
    <div className="flex gap-2">
      <span onClick={onEdit}>
        <IconEdit />
      </span>
      <span onClick={onDelete}>
        <IconDelete />
      </span>
      <span onClick={onCalendar}>
        <IconCalendar />
      </span>
    </div>
  )
}

export default IconAcciones
