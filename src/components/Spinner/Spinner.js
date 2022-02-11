import React from 'react'
import './spinner.css'
const Spinner = () => {
  return (
    <div className="flex flex-1  justify-center items-center h-96">
      <div className="lds-default animate__fadeIn animate__animated">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
