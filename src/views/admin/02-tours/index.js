import React from 'react'
import Heading from '../../../components/Heading'
import CrearTour from './CrearTour'

const Tours = () => {
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <Heading>Tours</Heading>
      <div>
        <CrearTour />
      </div>
    </div>
  )
}

export default Tours
