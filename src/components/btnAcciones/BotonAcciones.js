// import { useState } from 'react'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modales/Modal'

const BotonAcciones = () => {
  const [isOpenModal] = useModal(false)

  return (
    <>
      <div className="mx-auto w-8 flex flex-col  items-center relative text-center ">
        <p
          className={`
          true ? 'text-black' : 'text-gray-500'
        } text-3xl w-5 text-center  flex flex-col cursor-pointer justify-center `}
          onClick={isOpenModal}
        >
          <span className="-mt-4 ">.</span>
          <span className="-mt-7 ">.</span>

          <span className="-mt-7 ">.</span>
        </p>
      </div>
      <Modal />
    </>
  )
}

export default BotonAcciones
