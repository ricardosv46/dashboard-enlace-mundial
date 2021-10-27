import React from 'react'
import { useHistory } from 'react-router'
import { IconBackArrow } from '../../assets/icons/icons'

const ButtonBack = () => {
  const history = useHistory()
  return (
    <button
      onClick={() => history.goBack()}
      className="absolute left-0 top-0 cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-150 rounded-full"
    >
      <IconBackArrow />
    </button>
  )
}

export default ButtonBack
